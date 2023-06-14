

const getCurrentMachineTime = () => {
    const timestamp = Date.now();
    const date = new Date(timestamp);
    
    const hh = date.getHours().toString().padStart(2, '0')
    const mm = date.getMinutes().toString().padStart(2, '0')
    const ss = date.getSeconds().toString().padStart(2, '0')
    
    const currentMachineTime = hh+"h:"+mm+"m:"+ss+"s"
    console.clear() ;
    console.log(currentMachineTime)


    if (hh<12 && hh>=0) console.log(currentMachineTime+ " AM")
    else console.log(currentMachineTime+ " PM")

    setTimeout(getCurrentMachineTime, 1000) ;
}

getCurrentMachineTime()