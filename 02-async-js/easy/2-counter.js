const counter2 = () => {
	let cnt = 0;
	const counter_increment = () => {
		console.log(cnt);
		cnt += 1;
		setTimeout(counter_increment, 100);
	};
	setTimeout(counter_increment, 3000);
};

counter2();
