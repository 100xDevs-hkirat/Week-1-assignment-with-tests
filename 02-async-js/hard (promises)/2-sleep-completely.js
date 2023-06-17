/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */
function sleep(seconds) {
	let haltTimeInMilliSeconds = seconds * 1000;
	let threadReleaseTime = new Date().getTime() + haltTimeInMilliSeconds;
	let time = new Date().getTime();
	while (time < threadReleaseTime) {
		time = new Date().getTime();
	}
	console.log("Wait time is completed");
}

console.log("Started execution");

sleep(10);

console.log("Printing statements to tests.");
