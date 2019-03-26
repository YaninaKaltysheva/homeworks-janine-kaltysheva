//if else
//Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.
let h = 'hidden';
if(h = 'hidden'){
    h= 'visible';
    alert(h);
}else {
    h = 'hidden';
    alert(h);
};

//Используя if, записать условие:
// a. если переменная равна нулю, присвоить ей 1;
// b. если меньше нуля - строку “less then zero”;
// c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10
// (использовать краткую запись).

let g = 12;
if(g == 0){
    alert(g = 1);
    alert(g);
}else if(g<0){
    alert(g='less then zero');
}else if(g>0){
    alert(g *= 10);
};

//Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
}else{
    car.needRepair = false;
}
// сообщение в консоле Need Repair, true

//Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать
// поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
// внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
// расчет. иначе если поля discount нет то вывести просто поле price в консоль.

let item = { name: 'Intel core i7', price: '100$', discount: '15%' }
if(item.discount){
    item.priceWithDiscount = parseInt(item.price)*(parseInt(item.discount)/100)
}else{
    console.log(item.price)
}


//let product = {
// name: “Яблоко”,
// price: “10$”
// };
// let min = 10; // минимальная цена
// let max = 20; // максимальная цена
// Написать условие если цена товара больше или равна минимальной цене и меньше или равна максимальной
// цене то вывести в консоль название этого товара, иначе вывести в консоль что товаров не найдено.

let product = { name: 'Яблоко', price: '10$' };
let min = 10;
let max = 20;
if( parseInt(product.price)>= min ){
    console.log(product.name);
}else if(parseInt(product.price)>=max ){
    console.log(product.name);
} else {
    console.log('товаров не найдено');
}

//1. Создать объект с полем product, равным ‘iphone’
// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
// 3. Добавить поле details, которое будет содержать объект с полями model и color

let object = {product:'iphone’'};
object.price = 1000;
object.currency = 'dollar';
object.details = {
    obj:{
        model:'7',
        color:'white'
    }
}
console.log(object);