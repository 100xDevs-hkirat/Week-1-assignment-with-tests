function getTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, "0");
	const minutes = now.getMinutes().toString().padStart(2, "0");
	const seconds = now.getSeconds().toString().padStart(2, "0");

	const time12HourFormat = hours > 12 ? hours - 12 : hours;
	const amPm = hours >= 12 ? "PM" : "AM";
	const formattedTime12Hour = `${time12HourFormat}:${minutes}:${seconds} ${amPm}`;

	const formattedTime24Hour = `${hours}:${minutes}:${seconds}`;

	console.log(`12-Hour Format: ${formattedTime12Hour}`);
	console.log(`24-Hour Format: ${formattedTime24Hour}`);
}

setInterval(getTime, 1000);
