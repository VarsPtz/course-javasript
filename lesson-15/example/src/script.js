// function myModule() {
//     this.hello = function() {
//         return "hello";
//     };
//     this.goodbye = function() {
//         return "goodbye";
//     };
// }

// module.exports = myModule; 
// Обрати внимание! Передаём название функции, а не результат myModule();

// Экспорт и стандарт ES6 
export let one = 1;

let two = 2;
export {
    two
};

export function sayHello() {
    console.log("Hello!");
}

