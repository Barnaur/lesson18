console.log('#1. Приклад домашнього завдання з JavaScript')


let myNum, myStr, myBool, myArr, myObj;
myNum = 10;
myStr = 'some string';
myBool = true;
myArr = [1, 2, 3, 4, 5];
myObj = {first: 'First Name', last: 'Last Name'};
/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */
// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

let decimal2 = myNum.toFixed(2);
console.log (decimal2);
/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

// decimal2

let i = 6;
console.log(i++);
console.log(i--);
console.log(--i);
console.log(++i);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

// i

let myTest = 20;
myTest += 5;
console.log(myTest);
myTest /=5;
console.log(myTest);
myTest *= 10;
console.log(myTest);
myTest -= 10;
console.log(myTest);
myTest %=11;
console.log(myTest);

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

// myTest
// +=
// –=
// *=
// /=
// %=

const myPi = Math.PI;
console.log(myPi);
let myRound = Math.round(89.279);
console.log(myRound);
let myRandom = Math.random() *10;
console.log(myRandom);
let myPow = Math.pow(3,5);
console.log(myPow);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
// округлене значення числа 89.279 → myRound
// випадкове число між 0..10 → myRandom
// 3 у 5 степені → myPow

let strObj = {
    str: 'Мама мыла раму, рама мыла маму',
    length: 'Мама мыла раму, рама мыла маму'.length
};
console.log(strObj);

/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

let isRamaPos = strObj.str.indexOf("рама");
console.log(isRamaPos);
let isRama = isRamaPos >=0;
console.log(isRama);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

// isRamaPos
// isRama

let strReplace = strObj.str.replace("Мама мыла раму, рама мыла маму", "Мама моет раму, Рама держит маму");
console.log(strReplace);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

// strReplace

var someStr = 'some STRING';
var upperStr = someStr.toUpperCase();
console.log(upperStr);
var lowerStr = someStr.toLowerCase();
console.log(lowerStr);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

// var someStr = 'some STRING'
// var upperStr
// var lowerStr
