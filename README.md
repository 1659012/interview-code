# interview-code
Le Nguyen Han Hoan
//=========================================================================================
A.Write a Javascript function to print out the console the integer numbers from 30 to 300

function printOut(min,max){
    for(let i=min; i<=max;i++){
        if(i%7==0&&i%13==0){
            console.log('a-z');
        }else if(i%7==0){
            console.log('abc');
        }else if(i%13==0){
            console.log('xyz');
        }else{
            console.log(i);
        }
    }
}

printOut(30,300);
