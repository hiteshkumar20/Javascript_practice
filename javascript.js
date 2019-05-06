//* how to use log   lecture#1 

// console.log('hello world')
// console.log(123)
// console.table({a:1,b:2})
// console.time("hitesh")
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.log('hello world')
// console.timeEnd('hitesh')

// let var and const: // lecture#2
 
// var name="john"
// console.log(name)
// name='smith'
// console.log(name) // you can reassign the value in var and let

// let firstName='joohn'
// console.log(firstName)
// firstName='doe'
// console.log(firstName)


// CONST:
// you can not reassign the value in const
// we also have to assign the value


// PRIMITIVE DATA TYPES
//.String Numbers booleans Null undefined 
// const name="john Doe"
// console.log(typeof name)


//REFERENCE DATA TYPES
// .Array Objects and Date


// TYPE CONVSERTING
// Numbers to String

// var num;
// num=String(5)

// console.log(num)
// console.log(typeof num)
// console.log(num.length)

// boolean to String
// var name;
// name=String(true)
// console.log(name)
// console.log(typeof name)
// console.log(name.length)


// //  Date to String
// var val;
// val=String(new Date())
// console.log(val)
// console.log(typeof val)
// console.log(val.length)


// Array to String
// var val;
// val =String([1,2,2,3])
// console.log(val)
// console.log(typeof val)
// console.log(val.length)


// toString() this method also used to convert any data types into String

//************************************* *
// Strings to Numbers
// let value;
// value=Number('5')
// console.log(value)
// console.log(typeof value)
// console.log(value.toFixed())

// Booleans to Numbers

// let value;
// value=Number(true) // it gives 1
// value=Number(false) // it gives 0
// value=Number(null) // it also gives 0
// value=Number("hitesh")// it gives NaN not a value
// value=Number([1,2,3,3])// it gives NaN not a value
// value=parseInt('100') // converts into interger value
// value=parseFloat('100.5') // convserts into flaot value
// console.log(value)
// console.log(typeof value)
// console.log(value.toFixed())


// type corcession

// const val1=5;
// const val2=String(9);
// const sum=val1+val2
// console.log(sum)
// console.log(typeof sum)


// maths objects
// var num1=100
// var num2=50
// var val; 
// val= Math.PI
// val = Math.E
// val=Math.round(2.7)
// val= Math.ceil(2.4)
// val=Math.floor(2.4)
// val=Math.sqrt(169)
// val=Math.pow(2,3)
// val=Math.abs(-4)
// val=Math.sin(90)
// val=Math.cos(90)
// val=Math.min(4,5,6,99,102)
// val=Math.max(10,100,23,4,3.2,10009339483)
// val=Math.floor(Math.random()*100)
// console.log(val)


// String MEthods

// var firstName='williams'
// var lastName='Smith'
// var str='Hello my name is hitesh kumar'
// var fullName;
// fullName=firstName+" "+lastName; // concatination
// fullName='I cant\'t wait for you that\'s okay.' //escaping
// fullName=firstName.concat('',lastName) // concat method
// fullName=firstName.toUpperCase() // change into upercase
// fullName=firstName.toLowerCase() // change into lowercase
// fullName=firstName.indexOf('h') // indexOf method
// fullName=firstName.lastIndexOf('j') // return last index means count value from the backward
// fullName=firstName.charAt('1') // invsert of indexof method
// fullName=firstName.charAt(firstName.length-1) // it give last element
// fullName=firstName.substring(0,3) // it gives substring
// fullName=firstName.slice(0,4) // it also gives substring but it mostly used with array
// fullName=firstName.slice(-3) // it retrun the last element
// fullName=str.split(" ")// it split the string
// fullName=str.replace("kumar","Maheshwari") // it replace the string
// fullName=str.includes('name') // it return true if it is string else false
// console.log(fullName);

// Template literal

// var name='smith'
// var age=30
// var job='web developer'
// var city='karachi'
// var html;
// html=`
//     <ul>
//     <li>Name:${name}</li>
//     <li>age:${age}</li>
//     <li>job:${job}</li>
//     <li>city:${city}</li>
//     </ul>
// `;
// document.write(html)


// Array
// const numbers=[44,33,22,48,79,80]
// const numbers1= new Array(56,89,10,20,24)
// const fruits=["apples","banana","manago","chiku","orange"]
// const mixed=['hello',22,true,undefined,null,[1,2,3],{a:1,b:2},new Date()]
// let value;
// value=mixed.length  // check the length of the array
// value=Array.isArray(mixed) // to check weather this is array or not
// value=mixed[4] // check the index of array
// mixed[2]=false // modify the array
// value=mixed.indexOf(null) //  to find the index of element
// mixed.push(230) // add value to end of array
// mixed.unshift('hitesh') // add value to front of array
// mixed.pop()// delete the last element of the array
// mixed.shift() // delete the first element of the array
// mixed.splice(4,1) // delete from where ever we want
// mixed.reverse() // reverse the array
// value=numbers.concat(numbers1) // concate the two array
// value=fruits.sort() // sort the array with alpbhabatical order
// value=numbers.sort(function(x,y){ // it sort the number array with higest to lowest using compare function
//     return x-y;
// })
// value=numbers.sort(function(x,y){ // it sort the number array with lowest to higest using compare function
//     return y-x;
// })

// console.log(mixed)
// console.log(value)

// var student=["michel","john","tony"];
// var score=[320,230,480];
// var totalScore=500;
// var percenatge=(score[0]/totalScore)*100;
// var percenatge1=(score[1]/totalScore)*100;
// var percenatge2=(score[2]/totalScore)*100;
// console.log('score of '+student[0]+' is ' +score[0]+'. percentage:'+percenatge)
// console.log('score of '+student[1]+' is ' +score[1]+'. percentage:'+percenatge1)
// console.log('score of '+student[2]+' is ' +score[2]+'. percentage:'+percenatge2)

// var colors=["red","blue","orange","purpule"]
// //prompt("Enter a color you want to add in the beginning")
// colors.unshift('pink')
// //prompt("Enter a color you want to add in the end")
// console.log(colors)
// colors.push('yellow')
// console.log(colors)
// colors.unshift('white','black')
// console.log(colors)
// colors.shift()
// console.log(colors)
// colors.pop()
// console.log(colors)
// colors.slice(1,2,'yellow')
// console.log(colors)
// colors.splice(1,1)
// console.log(colors)

// var cities=['karachi','hyderabad','nawabshah','sukur','lahore']
// for(i=0;i<cities.length;i++){
//     console.log(cities[i])
// }

// var arr =['This','is','a','car']
// arr1=arr.join(',')
// console.log(arr)

// objects
// var person ={
//     firstName:'steve',
//     lastName:'smith',
//     age:21,
//     job:'developer',
//     isMarried:'false',
//     hobbies:['music','games'],
//     address:{
//         city:'karachi',
//         state:'sindh'
//     },
//     getBirthYear:function(){
//         return 2019-this.age
//     }
// }
// var value;
// value=person;
// value=person.firstName
// value=person['lastName']
// value=person.age
// value=person.hobbies[0]
// value=person.address['state']
// value=person.address.state
// value=person.getBirthYear()
// console.log(value)

//var number=prompt('Enter a positive integer:')
// var value;
// value=Math.round(-3.412)
// value=Math.floor(-3.412)
// value=Math.ceil(-3.412)
// value=Math.abs(-5)
// value=Math.floor(Math.random()*3)
// if (value%2==0){
//     alert('random coin value: Head')
// } else{
//     alert('random coin value: Tail')
// }

// var value;
// value=Math.floor(Math.random()*101)
// alert('The random value between 1 to 100 is: '+value)

// var weight=prompt('Enter your weight:')
// var val;
// val=parseInt(weight)
// alert('The wweight of user is:'+val)

// var randomNumber=prompt('Enter any number bewtween 1 to 10')
// var value
// value=Math.floor(Math.random()*11)
// if (randomNumber==value){
//     alert('congrulation you win')
// } else{
//     alert('try again')
// }

// Dates and Time
// var value;
// const today=new Date()
// var birthYear = new Date('11-20-1998 11:05:00')
// var birthYear = new Date('November 20 1998 11:05:00')
// var birthYear = new Date('11/20/1998 11:05:00')
// value=today.getMonth()
// value=today.getDay()
// value=today.getDate()
// value=today.getFullYear()
// value=today.getHours()
// value=today.getMinutes()
// value=today.getSeconds()
// value=today.getMilliseconds()
// value=today.getTime()
// birthYear.setDate(2)
// birthYear.setMonth(3)
// birthYear.setFullYear(2019)
// birthYear.setHours(10)
// birthYear.setMinutes(40)
// birthYear.setSeconds(12)
// console.log(birthYear)

// var monthNames = ['January', 'February', 'March', 
//                'April', 'May', 'June', 'July', 
//                'August', 'September', 'October', 'November', 'December'];

// d = new Date();
// var n= monthNames[d.getMonth()]; 
// alert(n)

// var daysNames= ['Mon', 'Tue', 'Wed', 
//                 'Thu', 'fri', 'sat', 'sun'];
// d= new Date()
// var n=daysNames[d.getDay()]
// // alert('today is '+n)
// var date=prompt("Enter any date of the year:")
// if(date<16){
//     alert('first fifteen days of month')
// } else{
//     alert('last days of month')
// }

// switch
// var day
// switch(new Date().getDay()){
//     case 0:
//         day='sunday'
//         break;
//     case 1:
//         day='Monday'
//         break;
//     case 2:
//         day='Tuesday'
//         break;
//     case 3:
//         day='Wednesday'
//         break;
//     case 4:
//         day='Thursday'
//         break;
//     case 5:
//         day='Friday'
//         break;
//     case 6:
//         day='saturday'
//         break;
// }
// alert(`today is ${day}.`)

// var score=prompt('Enter your score:')
// if(score>=90 &&score<=100){
//     alert('YOU GRADE IS A+')
// } else if(score>=80 && score<90){
//     alert('YOU GRADE IS A')
// } else if(score>=70 && score<80){
//     alert('YOU GRADE IS B')
// } else if(score>=60 && score<70){
//     alert('YOU GRADE IS C')
// } else if(score>=50 && score<60){
//     alert('YOU GRADE IS D')
// } else{
//     alert('YOU ARE FAIL')
// }

// functions
// var count=1
// while(count=1 && count<100){
//     if(count%3==0 && count%5==0 || count%3!=0 && count%5!=0){
//         console.log('FIZZ')
//     }
// }


//  var firstName =prompt('Enter your FirstName:')
//  var lastName =prompt('Enter your lastName:')
//  fullName=firstName.concat(" ",lastName)
//  alert('how are you doing '+fullName)

// var phone=prompt('Enter your Favorite mobile')
// alert('Your favorite is '+phone)
// alert(phone.length)

// var word='Hello world'
// alert(word.lastIndexOf('l'))

// str="Test abc test test abc test test test abc test test abc"
// str1=str.replace('abc','')
// console.log(str1);

// var city='hyderabad'
// city1=city.replace('hyder','islam')
// console.log(city1);

// var message = "Ali and Sami are best friends. They play cricket and football together"
// message1=message.replace(/and/g ,'&',)
// console.log(message1);

// var value;
// value=parseInt('417')
// console.log( typeof value);
// var value;
// value=(35.13).toFixed()
// console.log(value);
// var bakery=["cake",'chips','samosa','pepsi','cookies']
// var order=prompt('Welcome to our bakery what you want to order!!')
// order=bakery.includes('cake')
// if(order==bakery.includes()){                              // not solved
//     alert(`This is ${bakery} at index ${bakery.lastIndexOf()}`)
// }
// var university='dawood university and engineering and technology Karachi'
// var str;
// str=university.search('and')
// console.log(str[0]);

// var playGame=confirm('Do you want to play game?')
// if(playGame){
//     console.log("Welcome to the Game");
//     var name=prompt('Enter your name:')
//     console.log('Hello '+name)
//     var totalAsked=0
//     var totalCorrect=0
//     var firstQuestion=prompt('What is 2+5')
//     totalAsked++
//     if(firstQuestion==='7'){
//         totalCorrect++
//     }
//         console.log('You have gotten '+ totalCorrect +'/'+totalAsked+" correct so far")
//     var seocndQuestion=prompt('What is type of Hello')
//     totalAsked++
//     if(seocndQuestion==='string'){
//         totalCorrect++
//     }
//         console.log('You have gotten '+ totalCorrect +'/'+totalAsked+" correct so far")
//     var thirdQuestion=prompt('Submit an empty box')
//     totalAsked++
//     if(!thirdQuestion){
//         totalCorrect++
//     }
//        console.log('You have gotten '+ totalCorrect +'/'+totalAsked+" correct so far")             
// } else{
//     console.log('Good Bye!!')
// }   

// var firstNumber=prompt('Enter first number:')
// var secondNumber=prompt('Enter second number:')
// var operator=prompt('Enter operator +,-,*,/,%')
// var x=parseInt(firstNumber)
// var y=parseInt(secondNumber)
// switch(operator){
//     case '+':
//         console.log('The result is: '+firstNumber+secondNumber)
//         break;
//     case '-':
//         console.log('The result is: '+firstNumber-secondNumber)
//         break;
//     case '*':
//         console.log('The result is: '+firstNumber*secondNumber)
//         break;
//     case '/':
//         console.log('The result is '+firstNumber/secondNumber)
//         break;
//     case '%':
//         console.log('The result is '+firstNumber%secondNumber)
//         break;
//     default:
//         break;
// }
// functions
// function greeting(firstName){
//     return 'hello '+firstName
// }
// console.log(greeting('Hitesh'));

// function add(a,b){
//     return a+b
// }
// console.log(add(1,4));

// FUNCTION EXPRESSION
// var square=function(x){
// return x*x
// }
// console.log(square(8));

// INVOKABLE FUNCTION EXPRESSIONS
// (function(){
//     console.log('invokale');
    
// })()

// var todo={
//     add:function(){
//         console.log('add todo');
//     },
//     edit:function(id){
//         console.log(`edit todo${id}`)
//     }
// }
// todo.delete=function(){
//     console.log('deleted')
// }
// todo.delete()
// todo.add()
//todo.edit(12)
//var factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1); };
//console.log(factorial(4));
// function tellTime(){
//     var now= new Date()
//     var theHr=now.getHours()
//     var mint=now.getMinutes()
//     alert('current time is: '+theHr+" : "+mint)
// }
// tellTime()
// function greeting(firstName,lastName){
//     return firstName+" "+lastName
// }
// alert(greeting('hitesh','kumar'))

// function sum(){
//     var a=prompt('Enter first number')
//     var b=prompt('enter second number')
//     return Number(a)+Number(b)
// }
// alert(sum())

// function calc(num1,num2,operator){
//     var num1=prompt('Enter first number')
//     var num2=prompt('enter second number')
//     var operator=prompt('Enter your desired operator')
//     return Number(num1)+operator(operator)+Number(num2)
// }
// alert(calc())

// function square(x){
//     return x*x
// }
// alert(square(8))

// function fact(n){
//     if(n===0){
//         return 1
//     }else{
//         return n*fact(n-1)
//     }
// }
// alert(fact(4))
// function concatName(firstName, lastName) {
// 	return firstName+' '+lastName
// }
// console.log(concatName('Doe','john'))

// function calc(a,b,operator){
// 	a=Number(prompt('Enter first number'))
// 	b=Number(prompt('Enter second number'))
// 	operator=(prompt('Enter operator'))
	
// }
// alert(calc())

// function range(start, end) {
//     var ans = [];
//     for (let i = start; i <= end; i++) {
//         ans.push(i);
//     }
//     return ans;
// }
// alert(range(1,10))


// function areaOfTriangle(width=50,height=5.6){
// 	return width*height
// }
// alert(areaOfTriangle())

// function palidrome(str){ 
// 	return str=str.split('').reverse().join('')
// }
// alert(palidrome('madam'))
// alert(palidrome('hitesh'))
//  function UpperCase(str){
// 	 return str.toUppperCase()
//  }
//  alert(UpperCase('my name is hitesh'))

// function occurence(count,str="this is a cat"){
// 	return count = (str.match(/is/g) || []).length;
// }
// alert(occurence())

// function calcCir(r=5){
// 	var circum;
// 	return circum=2*3.14*r
// 	function areaOfTriangle(){
// 		var area;
// 		return area=3.14*r*r
// 	}
// }
// alert(areaOfTriangle())
// alert(calcCir())

// function power(a,b){
// 	return a**b
// }
// alert(power(2,3))

// function leapYear(year){
// 	 year=Number(prompt('Enter a year'))
// 		if (year%4===0) {
// 			alert('This is a leap year '+year)
// 		}else{
// 			alert('This is not a leap year '+year)
// 		}
// 	}
// leapYear()
// (function(){
// 	var a = b = 3;
//   })();
  
//   console.log("a defined? " + (typeof a !== 'undefined'));
//   console.log("b defined? " + (typeof b !== 'undefined'));

//  function marks(){
//  	 var phys=Number(prompt('Enter marks of first subject'))
//  	 var math=Number(prompt('Enter marks of second subject'))
//  	 var chem=Number(prompt('Enter marks of third subject'))
//  	 function average(){
// 		  var total
//  		 return total=(phys+math+chem)/3
//  	 }
//  	 function percenatge(){
// 		  var totalMarks=500
// 		  var percenatgee
//  		 return percenatgee=(total/totalMarks)*100
// 	  }
// 	 alert(average())
// 	 alert(percenatge()) 
//  }
//  alert(marks())


// var markHeight=Number(prompt("Enter mark's height"))
// var johnHeight=Number(prompt("Enter john's height"))
// var markMass=Number(prompt("Enter mark's mass"))
// var johnMass=Number(prompt("Enter john's mass"))
// var markBMI= markMass/(markHeight*markHeight)
// var johnBMI= johnMass/(johnHeight*johnHeight)
// if(markBMI>johnBMI){
// 	alert('Mark has greater BMI '+markBMI)
// }else{
// 	alert('john has greater BMI '+johnBMI)
// }

// var johnTeam=(89,120,103)
// var markTeam=(116,94,123)
// var marryTeam=(97,134,105)
// var averageJohn=(1+120+103)/3
// var averageMark=(116+94+123)/3
// var averageMarry=(97+134+105)/3
// if(averageJohn>averageMark && averageJohn>averageMarry){
// 	alert('john has greater score '+averageJohn)
// }else if(averageMark>averageJohn && averageMark>averageMark){
// 	alert('mark has greater score '+averageMark)
// }else{
// 	alert('mary has greater score '+averageMarry)
// }

// function sleepIn(weekday,vacations){
// 	return(!weekday||vacations)
	
// }
// alert(sleepIn())

// function monkey(aSmile,bSmile){
// 	return ((aSmile&&bSmile)||(!aSmile&&!bSmile))
// }
// alert(monkey())

// function larger(String,Number){
// 	return String*Number
// }
// alert(larger('hi',2))

// function range(start,end){
//     var sum;
//     if(range%3===0&&Range%5===0){
//         return sum+=0
//     }
//     else
//     return sum;
// }
// alert(range(1,10))

// var ans = [];
// var k = 0;

// for (var i = 1; i < 1000; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//         ans[k] = i;
//         k++;
//     }
// }

// var sum = 0;

// for (var i = 0; i < ans.length; i++) {
//     sum += ans[i];
// }

// console.log(sum);

// var ans=[]
// var k=0
// for(var i=1;i<1000;i++){
//     if(i%3===0||i%5===0){
//         ans.push(i)
//         k+=i
//     }
// }
// console.log(k)

//loops
// for(var i=0;i<10;i++){
//     if(i===2){
//         console.log('2 is my favourite Number')
//         break;    
//     }
//     console.log('Number '+i)
// }

//while loop
// var i=1
// while(i<10){
//     console.log(i);
//     i+=2
//     if(i===5){
//         console.log('stop loop');
//         break;
//     }
// }

// do while loop
// var i=0
// do {
//     alert('Number '+i);
//     i++;
//   }
// while(i<10);

// var cars=['BMW',"Ferrai","mercedices","honda"]
// for(var i=0;i<cars.length;i++){
//     alert(cars[i])
// }

// var i=0;
// while(i<cars.length){
//     i++;
//     console.log(cars[i]);
// }

 // for EACH LOOP
//  cars.forEach(function(car,index){
//      console.log(` the index of ${car} is ${index}`);
    
//  })

// MAP

// var users=[
//     {id:1,Name:'hitesh'},
//     {id:2,Name:'kumar'},
//     {id:3,Name:'maheswari'}
// ]
// var names=users.map(function(user){
//     return user.Name
// })
// console.log(names);
// FOR IN LOOP
// var user={
//     firstName:'hitesh',
//     lastName:'kumar',
//     age:20
// }
// for(var x in user){
//     console.log(`${x}: ${user[x]}`);
    
// }

//  var qualifications=['SSC','HSC','BS','BCOM','BE','ME','PHD']
// for(var i=0;i<qualifications.length;i++){
//     alert('qualificatins are: '+qualifications[i]+' and index is: '+i)
// }

// var twod=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// for(var i=0;i<twod.length;i++){
//     console.log(twod[i])
// }

// var num=Number(prompt('Enter a number'))
// //var lenght=Number(prompt('Enter lenght of table'))
// for(i=1;i<11;i++){
//     console.log(num+'X'+i+"="+num*1)
// }

//var fruits=["apple","bannaa","orange","mango","strawberry"]
// fruits.forEach(function(fruit,index){
//     console.log(`Element at index ${index} is:${fruit}`)
// })

// for(i=0;i<fruits.length;i++){
//     console.log(`Element at index ${i} is:${fruits[i]}`)
// }

// for(var i=10;i>0;i--){
//     console.log(i);
    
// }

// for(i=1;i<=20;i+=2){
//     console.log(i);
    
// }

//  var bakery=['cookies','pastery','cake','paties','chips']
//  var search=prompt('what you want to order?')
//  for(var x in bakery){
//      if(x===bakery){
//          alert(`${bakery} at index is${x}`)
//      }else{
//          alert('not availabe')
//      }
//  }

// var rows=5;
// var i;
// var j;
// for(i=0;i<5;i++){
//     for(j=0;j<i;j++){
//         document.write('*');       
//     }
//     document.write('<br/>')
// }
// var array = [3 , 6, 2, 56, 32, 5, 89, 32];
// var largest= 0;

// for (i=0; i<=largest;i++){
//     if (array[i]>largest) {
//         var largest=array[i];
//     }
// }




// console.log(largest);


// var array=[3,6,2,56,32,5,89,32]
// var min=Math.min.apply(Math,array)
// console.log(min)

//for(var i=5;i<=100;i+=5){
//    console.log();
    
//}

// for(var i=0;i<=20;i++){
//     if(i%2==0){
//         console.log(i+' Even Number')
//     }else{
//         console.log(i+' Odd Number')
//     }
// }
//var i
//var j
// for(i=7;i>=1;i--){
//     for(j=1;j<=i;j++){
//         document.write('*')
//     }
//     document.write('<br/>')
//}


// function isPrime(number)
// { 
//   if (number <= 1)
//   return false;

//   // The check for the number 2 and 3
//   if (number <= 3)
//   return true;

//   if (number%2 == 0 || number%3 == 0)
//   return false;

//   for (var i=5; i*i<=number; i=i+6)
//   {
//      if (number%i == 0 || number%(i+2) == 0)
//      return false;
//   }

//   return true;
// }
// alert(isPrime(78))

// function longestWord(str){
//     let words=str.split(' ')
//     let longestWord=''
//     for(let word of words){
//         if(word.length>longestWord.length){
//             longestWord=word
//         }
//     }
//     return longestWord
// }
// console.log(longestWord('Today is my birthday'))
// console.log(longestWord('I wake up early in the morning'))

// function shortestWord(str){
//     let word=str.split(" ")
//     let shortestWord=word.reduce((shortestWord,currentword)=>currentword.length<shortestWord.length?currentword:shortestWord)   
//     return shortestWord
// }
// console.log(shortestWord('thoday is my birthday'))

// outer height and width
// var value;
// value=window.outerHeight
// value=window.outerWidth
// console.log(value)


// var value;
// value=window.innerHeight
// value=window.outerWidth
// console.log(value)

// var val
// val=window.location
// val=window.location.port
// val=window.location.href="http://google.com"
// alert(val)

// var value;
// value=window.navigator.vendor
// value=window.navigator.appCodeName
// value=window.navigator.appName
// value=window.navigator.appVersion
// value=window.navigator.userAgent
// value=window.navigator.platform
// value=window.navigator.language
// console.log(value);

