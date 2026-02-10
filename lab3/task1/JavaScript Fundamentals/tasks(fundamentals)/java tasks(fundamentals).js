 //Hello, world!
 alert("I'm JavaScript!");



//variables
 let admin, name; // can declare two variables at once
 name = "John";
 admin = name;
 alert( admin ); // "John"



 //Data types
 let name = "Ilya";
 alert( `hello ${1}` ); // ?
 alert( `hello ${"name"}` ); // ?
 alert( `hello ${name}` ); // ?
 //output:hello 1 hello name hello Ilya



 //Interaction: alert, prompt, confirm
 let name = prompt("What is your name?", "");
 alert(name);



 //Basic operators, maths
 //task1
 let a = 1, b = 1;
 alert( ++a );
 alert( b++ );
 alert( a );
 alert( b ); //answer: a = 2 b = 2 c = 2 d = 1

 //task2
 let a = "1";
 let b = "2";
 alert(a + b); //answer: 12

 //task3
 let a = +prompt("First number?", 1);
 let b = +prompt("Second number?", 2);
 alert(a + b); // 3

 //task4
 let a = prompt("First number?", 1);
 let b = prompt("Second number?", 2);
 alert(+a + +b); // 3



 //comparisons
 5 > 4 //true
 "apple" > "pineapple" //false
 "2" > "12" // true
 undefined == null // true
 undefined === null // false
 null == "\n0\n" // false
 null === +"\n0\n" //false



 //Conditional branching: if, '?'
 //task1
 if ("0") {
     alert( 'Hello' );
 } //answer: Hello

 //task2
 let value = prompt('Type a number', 0);
 if (value > 0) {
     alert( 1 );
 } else if (value < 0) {
     alert( -1 );
 } else {
     alert( 0 );
 }

 //task3
 let result = (a + b < 4) ? 'Below' : 'Over';

 //task4
 let message = (login == 'Employee') ? 'Hello' :
     (login == 'Director') ? 'Greetings' :
         (login == '') ? 'No login' :
             '';



 //Logical operators
 alert( null || 2 || undefined ); //The answer is 2

 alert( alert(1) || 2 || alert(3) ); //answer is first 1, then 2

 alert(1 && null && 2);// answer is null

 alert( alert(1) && alert(2) ); //The answer is 1, and then undefined

 alert( null || 2 && 3 || 4 ); //answer is 3

//Check the range between
 if (age >= 14 && age <= 90)

//Check the range outside
     if (!(age >= 14 && age <= 90))

//A question about "if"
if (-1 || 0) alert( 'first' );
if (-1 && 0) alert( 'second' );
if (null || -1 && 1) alert( 'third' ); //answer: first third

 //Check the login
 let userName = prompt("Who's there?", '');
 if (userName === 'Admin') {
     let pass = prompt('Password?', '');
     if (pass === 'TheMaster') {
         alert( 'Welcome!' );
     } else if (pass === '' || pass === null) {
         alert( 'Canceled' );
     } else {
         alert( 'Wrong password' );
     }
 } else if (userName === '' || userName === null) {
     alert( 'Canceled' );
 } else {
     alert( "I don't know you" );
 }





 //Loops: while and for
 //task 1
 let i = 3;
 while (i) {
     alert( i-- );
 } //answer: 3 2 1

 //task 2
 let i = 0;
 while (++i < 5) alert( i ); //answer 1 2 3 4

 let i = 0;
 while (i++ < 5) alert( i ); //answer 1 2 3 4 5

 //task 3
 for (let i = 0; i < 5; ++i) alert( i ); // 0 1 2 3 4
 for (let i = 0; i < 5; i++) alert( i ); //answer 0 1 2 3 4

 //task 4
 for (let i = 2; i <= 10; i++) {
     if (i % 2 == 0) {
         alert( i );
     }
 } // 2 4 6 8 10

 //task 5
 let i = 0;
 while (i < 3) {
     alert( `number ${i}!` );
     i++;
 } //number 0! number 1! number 2!

 //task 6
 let num;
 do {
     num = prompt("Enter a number greater than 100?", 0);
 } while (num <= 100 && num);

 //task 7
 let n = 10;
 nextPrime:
     for (let i = 2; i <= n; i++) {
         for (let j = 2; j < i; j++) {
             if (i % j == 0) continue nextPrime;
         }
         alert( i );
     } // 2 3 5 7




 //The "switch" statement
 //task 1
 if(browser == 'Edge') {
     alert("You've got the Edge!");
 } else if (browser == 'Chrome'
     || browser == 'Firefox'
     || browser == 'Safari'
     || browser == 'Opera') {
     alert( 'Okay we support these browsers too' );
 } else {
     alert( 'We hope that this page looks ok!' );
 }

 //task2
 let a = +prompt('a?', '');
 switch (a) {
     case 0:
         alert( 0 );
         break;
     case 1:
         alert( 1 );
         break;
     case 2:
     case 3:
         alert( '2,3' );
         break;
 }





 //Functions
 //task 1
 function checkAge(age) {
     return (age > 18) ? true : confirm('Did parents allow you?');
 }

 //task2
 function min(a, b) {
     if (a < b) {
         return a;
     } else {
         return b;
     }
 }

 //task 3
 function pow(x, n) {
     let result = x;
     for (let i = 1; i < n; i++) {
         result *= x;
     }
     return result;
 }
 let x = prompt("x?", '');
 let n = prompt("n?", '');
 if (n < 1) {
     alert(`Power ${n} is not supported, use a positive integer`);
 } else {
     alert( pow(x, n) );
 }




 //Arrow functions, the basics
 function ask(question, yes, no) {
     if (confirm(question)) yes();
     else no();
 }
 ask(
     "Do you agree?",
     () => alert("You agreed."),
     () => alert("You canceled the execution.")
 );






