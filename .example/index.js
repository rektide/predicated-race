#!/usr/bin/env node
"use strict"
import promiseRacePredicated from "../promise-race-predicated.js"

function delay( ms, value){
	return new Promise( function( resolve){
		setTimeout( resolve.bind( null, value), ms)
	})
}
var ignore= 1
function myPredicate( value, error, index, promises){
	//console.log({ ignore, value, error, index})

	// straight up ignore anything that rejects
	if( error){
		return
	}
	return --ignore< 0
}

promiseRacePredicated([
	delay(600, "too late"), // because "this" happened first
	delay(200, "this"),
	Promise.reject("predicate ignores errors"), // because myPredicate ignores errors
	delay(100, "hit first but ignored") //  because myPredicate skips `ignores` results
], myPredicate).then( console.log.bind( console)) //=> "this"

