let r = 0;
const a = () => {
    setTimeout(() => {
        r = r + 1;
        console.log(r);
        a();
    },1000)
}

a();