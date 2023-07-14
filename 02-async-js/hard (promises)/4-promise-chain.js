/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(n) {
	return new Promise((resolve) => {
		console.log("Will be resolved in 1 second");
		setTimeout(() => {
			resolve();
			console.log("1 second Done");
		}, n * 1000);
	});
}

function waitTwoSecond(n) {
	return new Promise((resolve) => {
		console.log("Will be resolved in 2 second");
		setTimeout(() => {
			resolve();
			console.log("2 second Done");
		}, n * 1000);
	});
}

function waitThreeSecond(n) {
	return new Promise((resolve) => {
		console.log("Will be resolved in 3 second");
		setTimeout(() => {
			resolve();
			console.log("3 second Done");
		}, n * 1000);
	});
}

function calculateTime() {
	const startTime = Date.now();

	return waitOneSecond(1)
		.then(() => waitTwoSecond(2))
		.then(() => waitThreeSecond(3))
		.then(() => {
			const endTime = Date.now();
			const duration = endTime - startTime;
			console.log(`Sequential promises completed in ${duration} milliseconds`);
		});
}

calculateTime();
