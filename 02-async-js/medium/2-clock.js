// Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the 
// current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

// HH:MM::SS (Eg. 13:45:23)

// HH:MM::SS AM/PM (Eg 01:45:23 PM)

class Time {
    constructor(){
        this.date = new Date();
        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.counter = 0;
        console.log("\nCurrent time: "+ this.hours+':'+ this.minutes+':'+ this.seconds);
    }

    startCounter(){
        if(this.seconds === 60){
            this.seconds =0;
            this.minutes +=1; 
        }
        else if(this.minutes === 60){
            this.minutes = 0;
            this.hours += 1;
        }
        else if(this.hours == 24)
            this.hours = 0;
        else
            this.seconds += 1;
        console.log("\nCurrent time: "+ this.hours+':'+ this.minutes+':'+ this.seconds);
        // setTimeout(()=> this.startCounter(),1000); // you can also use this 

        //set time out execute only once so we have to call it recursively but setInterval calls 
        // function after every given time interval
    }

    runCounter(){
        setInterval(()=> this.startCounter(),1000);
    }

    
}

const ti = new Time();
ti.runCounter();