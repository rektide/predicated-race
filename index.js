"use strict"

var
  esm= require( "@std/esm")( module),
  inner= esm( "./predicated-race.js")

// Export predicatedRace
module.exports= inner.predicatedRace
// Use defineProperties so we don't ugly up the predicatedRace export with enumerables
Object.defineProperties( module.exports, {
	predicatedRace: {
		value: inner.predicatedRace
	},
	NoMatchError: {
		value: inner.NoMatchError
	},
	mapper: {
		value: inner.mapper
	}
})
