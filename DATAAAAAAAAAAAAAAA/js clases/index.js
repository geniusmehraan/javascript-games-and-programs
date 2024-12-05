/*1.ways to print in javascript
// console.log('hello world');
//2.javascript console API
//console.log('hello world', 4 + 6, "another log");
//console.warn('warning');
//console.error('this is an error');

// 3. javascript varaibles
 what are variables?-containers to store data value
 */
var number1 = 34;
var number2 = 56;
// console.log(number1+number2);
// 4.data type in javascript
// number
var num1 = 455;
var num2 = 56.76;

// string
var str1 = "this is a string";
var str2 = 'this is also a string';


//object
var marks = {
    Ayan: 49,
    Affren: 40,
    Humaa: 39,
}
//bolians
var a = false;
var b = true;
// console.log(a ,b)
// und
var und;
// console.log(und);

var n = null;
// console.log(n);

/* at very high level,there are two types of data type in javascript
1. Premetive data type:undfined,null,number,string,bolian,symbol
2. Refrence data type:arrys,objects
*/
var arr = [1, 2, "ayaan", 4, 5]
// console.log(arr)



// operator in javascript
// arthematic operator
var a = 100;
var b = 10;
// console.log("the value of a + b is",a + b);
// console.log("the value of a - b is",a - b);
// console.log("the value of a * b is",a * b);
// console.log("the value of a = b is",a == b);

// assigment operator



var c = b;
// c+= 100;
// console.log(c)


//comparsion operator

var x = 21;
var z = 23;
// console.log(x<=z)

// logical operator

// logical and

// console.log(true && true )
// console.log(true && false )
// console.log(false && true )
// console.log(false && false )

// logical 0r

// console.log(true / true)
// console.log(true / false)
// console.log(false / true)
// console.log(false /false)


// logical not

// console.log(!false)
// console.log(!true)


//5. functions in javascript


function avg(a, b) {
    c = (a + b) / 2;
    return c;
}

// dry= do not repeat yourself

c1 = avg(4, 6)
c2 = avg(14, 16)
// console.log(c1 ,c2);


// Conditional in javascript
//single if statement
/*
var age = 41;

if (age>18){
    console.log("you can drink rasna water ");
}

// if-else statement

// if (age>18){
//     console.log("you can drink rasna water ");
// }
// else{
//     console.log("you cannot drink rasna water");
// }
age= 25;
// if else ladder
if(age >32){
    console.log("you are not a kid");
}
else if(age > 26){
    console.log("bache nahi rahe");
}
else if(age > 22){
    console.log("yes bache nahi rahe");
}
else if(age > 18){
    console.log("18 bache nahi rahe");
}
else{
    console.log("bache rahe");
}
console.log("End of ladder");
*/
var arr = [1, 2, 3, 4, 5, 6, 7]
console.log(arr)
for(var i= 0;i<arr.length;i++){
    if(i==2);{
    break;
}
    console.log(arr[i])
}
// arr.forEach(function(element){
// console.log(element);
// })

// const ac = 0;
// ac = ac + 1;

// while (j < arr.length) {
//     console.log(arr[j]);
//     j++;
// }


// let j = 0;
// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

