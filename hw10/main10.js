// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.
function minus(x = 0){
    return function(y = 0){
        return x-y;
    }
}
console.log(minus(10)(6))
console.log(minus(5)(6))
console.log(minus(10)())
console.log(minus()(6))
console.log(minus()())


// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между
// вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

function multiplyMaker(val){  
return function(n){
    return val*=n
}};
const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
// i. если передано пустое значение, то установить пустую строку
// ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

const calc = (function(n){
    function setValue (str){
        if(str === '') {str = ''};
        if(typeof str== 'number') {String(str)};
        n = str;
        return n;
    }
    function getValue (str){
        let n = str.valueOf();
        return n;
    }
    function strLength(){
    return n.length;
    }
    function newValue (str){
        var newString = "";
        n=str;
   for (var i = n.length-1; i>=0; i--){
       newString+= n[i];
   }
   return newString;
    }
    return {
        setValue,
        getValue,
        strLength,
        newValue
    }

})('abcde')
console.log(calc.setValue('abcde'))
console.log(calc.getValue('abcde'))
console.log(calc.strLength())
console.log(calc.newValue('abcde'))

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и
// возводить в степень. Конечное значение округлить до двух знаков после точки (значение должно
// храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой:
// модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

const counter = (function(){
let element;
    function setVal(val){
        if (typeof val !== 'number') return 'Передайте число';
        element = val;
        return this;  
    }
    function plus(val){
        if (typeof val !== 'number') return 'Передайте число';
        element += val;
        return this;
    }
    function minusz(val){
        if (typeof val !== 'number') return 'Передайте число';
        element -= val;
        return this;
    }
    function mult(val){
        if (typeof val !== 'number') return 'Передайте число';
        element *= val;
        return this;
    }
    function divis(val){
        if (typeof val !== 'number') return 'Передайте число';
        element /= val;
        return this;
    }
    function setPow(val){
        if (typeof val !== 'number') return 'Передайте число';
        element = Math.pow(element,val);
        return this;
    }
    function showValue(){
       element = Math.round(element);
        return element;
    }
    return{
        setVal,
        plus,
        minusz,
        mult,
        divis,
        setPow,
        showValue
    }
})();
console.log(counter.setVal(10).setPow(2).showValue())

// console.log(counter.setVal(10))
// console.log(counter.plus(5))
// console.log(counter.minusz(3))
// console.log(counter.mult(2))
// console.log(counter.divis(10))
// console.log(counter.setPow(10))
// console.log(counter.showValue(10))
// 1. Создать конструктор для производства автомобилей. Конструктор должен принимать марку
// автомобиля и возраст машины. Конструктор должен иметь метод, который возвращает марку, и
// второй метод, который возвращает год производства машины (год текущий минус возраст
// машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!
function produceCars(mark, age){
    this.getName = function () {
        newName = mark.substring(0,1).toUpperCase() + mark.substring(1, mark.length)
        return newName;
    }
    this.getYear = function () {
        const date = new Date();
        year = date.getFullYear();
        return year - age;
    }
}
const lexus = new produceCars('lexus', 4);
console.log(lexus.getName());
console.log(lexus.getYear());
// 2. Написать конструктор, который умеет элементарно шифровать строки (например, сделать из
// строки строку-перевертыш, или заменить все символы их цифровым представлением, или
// любой другой метод). Конструктор при инициализации получает строку и имеет следующие
// методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

function PlayString(string) {
    this.getString  = function (){
        return string
    }
    this.getNewString  = function (){
        var newString = "";
    for (var i = string.length-1; i>=0; i--){
       newString+= string[i];
   }
   return newString;
    }}

const showString = new PlayString('hello word!')
console.log(showString.getString())
console.log(showString.getNewString())

