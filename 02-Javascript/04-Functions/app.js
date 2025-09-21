// function reuseable() {
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
//   console.log("hello world");
// }

// reuseable()

// alert("hello world")

// function greetUser(){
//     console.log("Hello world");

// }

// greetUser()
// greetUser()
// greetUser()
// greetUser()

// parameter
// argument

// function greetUser(username){
//     console.log("Hello " + username);

// }

// greetUser("Abdullah") // argument send krna
// greetUser("Ammar")

// function userInfo(username , email , age){
//     console.log("Username is " + username + " with email " + email + " with age " + age);

// }

// userInfo("Affan" , "affan@gmail.com" , 21)

// function gymAdmission(age){
//     if(age >= 18){
//         console.log("welcome to gym");

//     } else if(age >= 15){
//         console.log("1000 zyada doo");

//     } else {
//         console.log("niklo yaha sa");

//     }
// }

// gymAdmission(19)
// gymAdmission(16)
// gymAdmission(12)

// var username;
// console.log(username);

// function greetings(fullName){
//     console.log("Hello " + fullName);

// }

// greetings()

// return

// var username = prompt("enter your name");

// console.log(username);

// console.log(prompt("enter value for console"));

// function greetings(user){
//     console.log("Hello " + user);
//     return "Hello " + user + " return"
// }

// var greetUser = greetings("Abdullah");
// console.log(greetUser);

// console.log("testing func " , greetings("usman"));

// var checkType = typeof("Hello")
// var checkTypeBool = typeof(true)

// console.log(checkType);
// console.log(checkTypeBool);
// console.log(typeof(20));

// var firstUser = greetings("Abdullah")
// console.log(firstUser);

// console.log(greetings("Usman"));

// global and local variable

// var firstname = "Muhammad" // global
// function testing (){
//     var lastname = "Khan" // local
//     console.log(firstname + " " + lastname);
// }

// testing()
// console.log(firstname + " " + lastname);

// ### 🔹 Basic Return Practice

// 1. **Return a number**

//    ```js
//    function giveMeFive() {
//      // return 5
//    }
//    ```

// 2. **Return a string**

//    ```js
//    function sayHello() {
//      // return  "Hello, World!"
//    }
//    ```

// 3. **Return the result of a simple calculation**

//    ```js
//    function addTwoNumbers() {
//      // return the result of 3 + 4
//    }
//    ```

// function addTwoNumbers(num1 , num2){
//     return num1 + num2
// }

// console.log(addTwoNumbers(290 , 240));

// 5. **Return a doubled number**

//    ```js
//    function double(num) {
//      // return double the value of num
//    }
//    ```

// function doubleNum (num){
//     return "double of " + num + " is " + num * 2
// }

// console.log(doubleNum(60));

// ---

// ### 🔹 Return With Conditional Logic

// 6. **Return if a number is even**

//    ```js
//    function isEven(num) {
//      // return true if num is even, false otherwise
//    }
//    ```

// function isEven(num){
//     if(num % 2 === 0){
//         return "it is even number"
//     }

//     return "it is odd number"

// }

// console.log(isEven(20));

// 7. **Return the larger of two numbers**

//    ```js
//    function max(a, b) {
//      // return the larger of a and b
//    }
//    ```

// 8. **Return "adult" or "minor"**

//    ```js
//    function checkAge(age) {
//      // return "adult" if age is 18 or older, otherwise return "minor"
//    }
//    ```

// ---

// ### 🔹 Return with Strings and Arrays

// 9. **Return the length of a string**

//    ```js
//    function getLength(str) {
//      // return the length of the string
//    }
//    ```

// 10. **Return the first element of an array**

//     ```js
//     function firstItem(arr) {
//       // return the first item of the array
//     }
//     ```

// ---

// ### 🔹 Bonus (Slightly Tricky)

// 11. **Return the square of a number**

//     ```js
//     function square(n) {
//       // return n multiplied by itself
//     }
//     ```

// 12. **Return a formatted message**

//     ```js
//     function greet(name) {
//       // return "Hello, [name]!" with the given name
//     }
//     ```

// 13. **Return the sum of array elements**

//     ```js
//     function sumArray(arr) {
//       // return the sum of all numbers in the array
//     }
//     ```

// function cube(num){
//     return num ** 3
// }

// console.log(cube(30));

// function average (num1 , num2 , num3){
//     return (num1 + num2 + num3 ) / 3
// }

// console.log(average(40 , 20 , 40));

// function combine(val1,  val2){
//     return val1 + val2
// }

// console.log(combine(10 , 10));
// console.log(combine("10" , "10"));

// function test(msg){
//     if(msg){
//         return msg
//     }

//     return "no mess provided"
// }

// console.log(test());


// function recurssion(n){
//     if(n === 0){
//         return 0
//     }

//     return n + recurssion(n - 1)
// }


// console.log(5+4+3+2+1);
// console.log(recurssion(1000));
