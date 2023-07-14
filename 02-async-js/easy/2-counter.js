const counter2 = () => {
	let cnt = 0;
	const counter_increment = () => {
		console.log(cnt);
		cnt += 1;
		setTimeout(counter_increment, 1000);
	};
	setTimeout(counter_increment, 1000);
};

counter2();
