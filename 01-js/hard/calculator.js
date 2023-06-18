/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor(){
    this.result=0;
  }

  add(n){
    this.result+=n;
  }
  subtract(n){
    this.result-=n;
  }

  multiply(n){
    this.result*=n;
  }

  divide(n){
    if(n==0)
      throw new Error(`Can't divide by 0`);
    this.result/=n;
  }

  clear(n){
    this.result=0;
  }

  getResult(){
    return this.result;
  }

  calculate(s){
    return this.solve(s);
  }

   valid(s){
    let bracket=0;
    let n=s.length;
    
    for(let i=0;i<n;i++)
        {
            if(s[i]=='(')
                bracket++;
            else if(s[i]==')')
                bracket--;
            if(bracket<0)
                return false;
        }
    
    if(bracket!=0)
        return false;
    
    const regex = /\/\s*0/;
    
    if(regex.test(s)){
        console.log("contains /0");
        return false;
        
    }
    
    const regex2 = /^[0-9+\-/*().\s]+$/;
    
    return regex2.test(s);    
}
 isNum(c)
{
    
    return c<='9' && c>='0';
}


 isOp(c)
{
    
    return c=='+'||c=='-'||c=='*'||c=='/';
}

 solve(expr){
    expr=expr.trim();
    
    if(!this.valid(expr))
         throw new Error('Invalid Expression');
    let sign='+';
    let cur=0;
    let stack1=[];
    let stack2=[];
    let n=expr.length;
    
    for(let i=0;i<n;i++){
       
         let c=expr[i].trim();
        if(c==='')
            continue;
        
        if(this.isNum(c))
        {
            cur=c-'0';
            let frac=0;
            let startFrac=false;
            
            while((i+1)<n && (this.isNum(expr[i+1]) || expr[i+1]=='.')){
                if(expr[i+1]=='.'){
                    if(startFrac)
                         throw new Error('Invaid Expression');
                    
                    startFrac=true;   
                }
            else{
               if(startFrac)
                frac=frac*10+(expr[i+1]-'0');
               else
                cur=cur*10+(expr[i+1]-'0');
                
            }
                
                
                i++;
            }
            // console.log(cur);
            cur+= (frac / Math.pow(10, frac.toString().length));
        }
        
        if(c=='(')
            {
                stack2.push({
                    st:stack1,
                    sign:sign
                });
                stack1=[];
                sign='+';
            }
        else if(c==')')
            {
                cur=stack1.reduce((sum,cur)=>sum+cur);
                let storedObj=stack2.pop();
                sign=storedObj.sign;
                stack1=storedObj.st;
            }
        
        
        if(this.isOp(c) || i==n-1 || (i+1<n && expr[i+1]==')'))
        {
            if(sign=='-')
                stack1.push(-1*cur);
            else if(sign=='+')
                stack1.push(cur);
            
            else if(sign=='*')
                stack1.push(stack1.pop()*cur);
            else if(sign=='/')
                stack1.push(stack1.pop()/cur);
            
            cur=0;
            sign=c;
        } 
        
        console.log(expr[i]);
        console.log("stack1 ");
        console.log(stack1);
        console.log("cur= "+cur+" stack2= ");
        console.log(stack2);
        console.log('\n\n')
    }
    
    // console.log("stack1);
     this.result=stack1.reduce((sum,cur)=>sum+cur);
}


}

const cal=new Calculator();

console.log(cal.calculate("2 + 3 * 4"));

module.exports = Calculator;
