function clockTime()
{

    var date = Date.now()
    var dateFormat = new Date(date)
    console.clear()
    console.log(dateFormat.getHours() +":"+dateFormat.getMinutes()+":"+dateFormat.getSeconds());
    setTimeout(clockTime,1000)
}

clockTime()