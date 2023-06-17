let counter = 0;

let time = new Date().getSeconds();

console.log(time);

while (true) {
	while (new Date().getSeconds() <= time + 1) {
		// do nothing
	}

	counter++;
	console.log(counter);
	time = new Date().getSeconds();
}
