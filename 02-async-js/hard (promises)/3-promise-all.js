/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
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
			resolve("resolving after 3 second");
		}, 3000);
	});
}

function promiseResolver() {
	let startTime = new Date().getTime();
	let one = waitOneSecond();
	let two = waitTwoSecond();
	let three = waitThreeSecond();
	Promise.all([one, two, three]).then(([val1, val2, val3]) => {
		console.log(
			"Time taken to resolve all the functions : ",
			new Date().getTime() - startTime
		);
		console.log(val1);
		console.log(val2);
		console.log(val2);
	});
	console.log("Printing line : 1");
}

function usingPromiseChain() {
	let startTime = new Date().getTime();
	let one = waitOneSecond();
	let two = waitTwoSecond();
	let three = waitThreeSecond();
	return new Promise((resolve, error) => {
		Promise.all([one, two, three]).then((values) => {
			resolve(new Date().getTime() - startTime);
		});
	});
}

function calculateTime() {
	promiseResolver();
	console.log("printing line : 2");
	usingPromiseChain().then((value) => {
		console.log("Using promiseChain : ", value);
	});
}

calculateTime();
