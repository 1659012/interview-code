//=========================================================================================
//A.Write a Javascript function to print out the console the integer numbers from 30 to 300

function printOut(min, max) {
    for (let i = min; i <= max; i++) {
        if (i % 7 == 0 && i % 13 == 0) {
            console.log('a-z');
        } else if (i % 7 == 0) {
            console.log('abc');
        } else if (i % 13 == 0) {
            console.log('xyz');
        } else {
            console.log(i);
        }
    }
}

 printOut(30, 300);

//B. What will be the output when the following javascript code is executed? Explain why: console.log(false == '0') ; console.log(false === '0');

//console.log(false == '0') => true;  because the Operator ==(equal to) only compares the value of 2 variables false  and '0';

//console.log(false === '0') => false;because the Operator ===(equal value and equal type) compare both value and type of variables; the types here are boolean and character, so it is false



//C.Write a javascript function which when pass this input [1,2,3,4,5,6,7] it will return [1, 9, 25, 49]
var arr = [1, 2, 3, 4, 5, 6, 7];

function printArr(arr) {
    arr.forEach(function (element) {
        console.log(element);
    });
}

function getNewArr(arr) {
    let newArr = [];
    arr.forEach(function (value) {
        if (value % 2 == 1) {
            newArr.push(value * value);
        }
    });
    return newArr;
}

printArr(getNewArr(arr));
