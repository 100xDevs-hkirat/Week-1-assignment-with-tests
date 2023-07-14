/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
	const promises = [waitOneSecond(1), waitTwoSecond(2), waitThreeSecond(3)];

	const startTime = Date.now();

	return Promise.all(promises).then(() => {
		const endTime = Date.now();
		const duration = endTime - startTime;
		console.log(`All promises resolved in ${duration} milliseconds`);
	});
}

calculateTime();
