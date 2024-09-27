let str = '    hello     world    my    name   is       ashutosh';
const n = str.length;

let arr = [];

for(let x of arr){
    console.log(x);
}

for(let i=0;i<n;i++){
    if(str[i] >= 'a' && str[i] <= 'z'){
        let word = "";
        while(i < n && str[i] != ' '){
            word += str[i];
            i++;
        }
        arr.push(word);
    }
}
console.log(arr.join(' '));