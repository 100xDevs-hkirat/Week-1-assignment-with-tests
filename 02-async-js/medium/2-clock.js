function getTime() {
	const now = new Date();
	const hours = now.getHours().toString().padStart(2, "0"); //This is to get atleast 2 digit number at all times.
	const minutes = now.getMinutes().toString().padStart(2, "0"); //Same as above
	const seconds = now.getSeconds().toString().padStart(2, "0"); //Same as above

	const time12HourFormat = hours > 12 ? hours - 12 : hours; //Logic for a 12-hour fomrmat.
	//Here we check if the 12hourformat number is greater than 12, if so then we minus the number with 12.
	const amPm = hours >= 12 ? "PM" : "AM";
	//If 12hourformatnumber > 12 then PM.
	const formattedTime12Hour = `${time12HourFormat}:${minutes}:${seconds} ${amPm}`; //DYnamically adding the values .

	const formattedTime24Hour = `${hours}:${minutes}:${seconds}`;

	console.log(`12-Hour Format: ${formattedTime12Hour}`);
	console.log(`24-Hour Format: ${formattedTime24Hour}`);
}

setInterval(getTime, 1000);
