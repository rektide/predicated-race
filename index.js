"use strict"

var
  esm= require( "@std/esm")( module),
  inner= esm( "./race-until.js")

// Export raceUntil
module.exports= inner.raceUntil
// Use defineProperties so we don't ugly up the raceUntil export with enumerables
Object.defineProperties( module.exports, {
	raceUntil: {
		value: raceUntil
	},
	NoMatchError: {
		value: inner.NoMatchError
	},
	mapper: {
		value: inner.mapper
	}
})
