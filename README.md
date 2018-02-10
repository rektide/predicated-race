# promise-race-predicated

> Keep running Promise.race until a predicate function is satisfied.

# Usage

```js
import predicatedRace from "promise-race-predicated"
import delay from "delay"

var ignore= 1
function myPredicate( value, error, index, promises){
	// straight up ignore anything that rejects
	if( error){
		return
	}
	return --ignore> 0
}
raceUntil([
	delay(600, "too late"),
	delay(200, "this"),
	Promise.reject("errors are ignored"),
	delay(100, "hit first but ignored")
], myPredicate).then( console.log.bind( console)) //=> "this"
```
