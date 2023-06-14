
setInterval( () => {
	console.clear()
	let date = new Date()
	const HH = date.getHours()
	const MM = date.getMinutes()
	const SS = date.getSeconds()
	console.log(HH+':'+MM+':'+SS)
},1000)

setInterval( () => {
	let date = new Date()
	let HH = date.getHours()
	let MM = date.getMinutes()
	let SS = date.getSeconds()
	let AM = ''
	if(HH>12){
		HH -= 12
		AM += ' PM'
	}else if(HH==12){
		AM += ' PM'
	}else{
		AM += ' AM'
	}
	
	console.log(HH+':'+MM+':'+SS+AM)
},1000)

console.clear()

