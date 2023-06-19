function clock(){
    let Hours = 0
    let Min = 0
    let Sec =0
    setInterval(()=>{
        console.clear()
        Sec += 1
        if(Sec ==60){
            Sec = 0
            Min +=1
        }
        if(Min == 60){
            Min =0
            Hours +=1
        }
        console.log(`${Hours>9?Hours:"0"+Hours}:${Min >9?Min:"0"+Min}::${Sec>9?Sec:"0"+Sec}`)
    },1000)
}

clock()