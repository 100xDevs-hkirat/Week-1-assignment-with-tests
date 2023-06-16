//HH:MM:SS format-
var timer1 = function timeFunction(){
    console.clear()
    var d = new Date()
    const sec = d.getSeconds()
    const min = d.getMinutes()
    const hour = d.getHours()
    console.log(hour+ ":" + min+ ":" +sec)
    setTimeout(timer1, 2000)
}
setTimeout(timer1, 2000);
// HH:MM:SS AM/PM format-
var timer2 = function timeFunction(){
    console.clear()
    var d = new Date()
    const sec = d.getSeconds()
    const min = d.getMinutes()
    const hour = function(){
        d.getHours()
        if (d.getHours() > 12){
            return (d.getHours()-12)
        }else{
            return d.getHours()
        }
    }
    const amOrPM = () => {
        if (d.getHours() > 12){
            return "PM"
        }
        else{
            return "AM"
        }
    }
    console.log(hour()+ ":" + min+ ":" +sec + " " + amOrPM())
}
setInterval(timer2, 1000);
