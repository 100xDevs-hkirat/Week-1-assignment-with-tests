/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function resolvePromise(seconds){
	return new Promise((resolve)=>{
		setTimeout(resolve,seconds)
	})
}

function waitOneSecond() {
	return resolvePromise(1000)
}

function waitTwoSecond() {
	return resolvePromise(2000)
}

function waitThreeSecond() {
	return resolvePromise(3000)
}

function calculateTime() {
	const start = Date.now()
	waitOneSecond()
	.then(()=>{
		return waitTwoSecond()
	})
	.then(()=>{
		return waitThreeSecond()
	})
	.then(()=>{
		console.log("Time Taken==>"+ (Date.now()-start))
	})
	.catch((err)=>{
		console.log("Error==>"+err)
	})
}

calculateTime()
