function time() {
    console.clear();
    setTimeout(time, 1000)
    let now = new Date()
    console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}

setTimeout(time, 1000)
