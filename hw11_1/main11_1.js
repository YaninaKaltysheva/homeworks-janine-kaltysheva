// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Пример вызова:
// const comp = new Component('span');

class Component {
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);}  
}
const comp = new Component('span');

// 2. Реализовать конструктор и методы в ES6 синтаксисе:
// function Component(tagName) {
// this.tagName = tagName || 'div';
// this.node = document.createElement(tagName);
// }
// Component.prototype.setText = function (text) {
// this.node.textContent = text;
// };
class Component {
    constructor(tagName = 'div'){
        this.tagName = tagName;
        this.node = document.createElement(tagName);}  
        setText(text){this.node.textContent = text;}
}
const comp = new Component('span');

// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить,
// вычесть, умножить , разделить. Также у него должны быть геттер и сеттер для получения и установки
// текущего числа с которым производятся вычисления.

class counter {
    constructor(element){
        this.element = element;}
        get elem() => this.element;
        set elem(value){this.element = value};
        plus(val){
            if (typeof val !== 'number') return 'Передайте число';
            this.element += val;
            return this
        };
        minus(val){
            if (typeof val !== 'number') return 'Передайте число';
            this.element -= val;
            return this
        };
        mult(val){
            if (typeof val !== 'number') return 'Передайте число';
            this.element *= val;
            return this
        };
        divis(val){
            if (typeof val !== 'number') return 'Передайте число';
            this.element /= val;
            return this
        }}
const calc = new counter(3).plus(5).minus(2);
console.log(calc.elem)
