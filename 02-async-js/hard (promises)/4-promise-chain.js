/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
	return new Promise((resolve, error) => {
		setTimeout(() => {
			resolve("resolving after 1 second");
		}, 1000);
	});
}

function waitTwoSecond() {
	return new Promise((resolve, error) => {
		setTimeout(() => {
			resolve("resolving after 2 second");
		}, 2000);
	});
}

function waitThreeSecond() {
	return new Promise((resolve, error) => {
		setTimeout(() => {
			resolve("resolving after 2 second");
		}, 3000);
	});
}

function calculateTime() {
	let startTime = new Date().getTime();
	waitOneSecond().then((value) => {
		waitTwoSecond().then((value) => {
			waitThreeSecond().then((value) => {
				console.log(new Date().getTime() - startTime);
			});
		});
	});
}

calculateTime();
