/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
	const startTime = Date.now();
	while (Date.now() - startTime < seconds * 1000) {
		// Busy waiting loop
		console.log("Hello World");
	}
	console.log("Out of scope"); //Executes only after the above loop, which we dont want.
}

sleep(5);
