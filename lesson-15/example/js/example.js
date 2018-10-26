// Урок №14 инкапсуляция

// function User (name, age) {
//     this.name = name;
//     let userAge = age;
//     this.getAge = function() {
//         return userAge;
//     };
//     this.setAge = function(age) {
//         if (typeof age === "number" && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("Недопустимое значение");
//         }
//     };
//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${this.userAge}`);
//     };
// }

// let user = new User("Ivan", 25);
// console.log(user.name);
// console.log(user.userAge);
// user.say();
// user.getAge(); // Результат undefined
// console.log(user.getAge()); // Результат 25
// user.setAge(30);
// console.log(user.getAge());
// user.setAge("300");
// console.log(user.getAge());

// Часть втораяя 15:50

// let number = 1;

// Пример работы простейшего модуля
// (function() {
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3); 
// }());

// console.log(number);

// Пример - console.log("I am private"); - Не доступна. "инкапсулирована"
// let user = (function() {
//     let private = function() {
//         console.log("I am private");
//     };
//     return {
//         sayHello: function() {
//             console.log("Hello!");
//         }
//     };
// }());

// let user = (function () {
//     let private = function () {
//         console.log("I am private");
//     };
//     let sayHello = function () {
//         console.log("Hello!");
//     }
//     return {
//         sayHello: sayHello 
//     };
// }());

// console.log(user);
// console.log(user.sayHello());




