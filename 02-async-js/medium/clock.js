function clock() {
    setInterval(()=>{
        let date = new Date();
        let currH = date.getHours();
        let currM = date.getMinutes();
        let currS = date.getSeconds();
        console.clear();
        console.log(`${currH}:${currM}:${currS}`);
    },1000);
}

clock();