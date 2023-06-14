/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
	let start = Date.now()
	console.log(start)
	while(Date.now() - start < seconds){
		
	}
	console.log(Date.now())
}
sleep(60000)

