let count = 0;
const counter = () => {
	setTimeout(() => {
		count += 1;
		console.log(count);
		counter();
	}, 1000);
};

counter();
