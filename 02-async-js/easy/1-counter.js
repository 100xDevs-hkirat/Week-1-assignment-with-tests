const counter = () => {
	let cnt = 0;
	setInterval(() => {
		console.log(cnt);
		cnt += 1;
	}, 1000);
};

counter();
