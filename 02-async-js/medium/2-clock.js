setInterval(() => {
	const time = new Date();
	let hours = getWithZeroAppended(time.getHours());
	let minutes = getWithZeroAppended(time.getMinutes());
	let seconds = getWithZeroAppended(time.getSeconds());
	console.log(`${hours}:${minutes}:${seconds}`);

	hours = time.getHours();
	let ampm = "AM";
	if (hours > 12) {
		hours = hours - 12;
		ampm = "PM";
	}
	if (hours === 0) hours = 12;
	hours = getWithZeroAppended(hours);
	console.log(`${hours}:${minutes}:${seconds} ${ampm}`);
}, 1000);

const getWithZeroAppended = (num) => {
	return num > 9 ? `${num}` : `0${num}`;
};
