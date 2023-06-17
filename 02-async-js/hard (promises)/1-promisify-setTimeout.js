/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
	let timeInMilliSeconds = n * 1000;
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Resolved promise !");
		}, timeInMilliSeconds);
	});
}

wait(3).then((value) => {
	console.log("Printing promise value : ");
	console.log(value);
});

console.log("Printing befor promise get resolved");
