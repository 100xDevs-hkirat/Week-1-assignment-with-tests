/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function resolvePromise(seconds){
	return new Promise((resolve)=>{
		setTimeout(resolve, seconds)
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
	Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
	.then(()=>{
		console.log("Time taken ==>"+ (Date.now() - start))
	})
	.catch((err)=>{
		console.log("Error==>"+ err)
	})
}

calculateTime()
