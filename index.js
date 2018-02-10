"use strict"

var
  esm= require( "@std/esm")( module),
  inner= esm( "./promise-race-predicated.js")

// Export promiseRacePredicated as default
module.exports= inner.promiseRacePredicated
// Use defineProperties so we don't ugly up the predicatedRace export with enumerables
Object.defineProperties( module.exports, {
	promiseRacePredicated: {
		value: inner.promiseRacePredicated
	},
	NoMatchError: {
		value: inner.NoMatchError
	},
	mapper: {
		value: inner.mapper
	}
})
