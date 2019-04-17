// 1. Создать две функции и дать им осмысленные названия:
//     - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой
// callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
//     firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает
// один аргумент (каждый элемент массива) и возвращает результат его обработки

function firstFunc(firstArr, handler1){

for (let i = 0; i < firstArr.length; i++) {
  firstArr[i] = firstArr[i][0].toUpperCase() + firstArr [i].slice(1);
}
let newStr = firstArr.join('');
handler1 (newStr);

}
firstFunc(['my', 'name', 'is', 'Trinity'], function (num) {
    console.log('New value:' + num)
})


// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”

function firstFunc(firstArr, handler1){

    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] *=10;
    }
    handler1 (firstArr);

}
firstFunc([10, 20, 30], function (num) {
    console.log('New value:' + num)
})


// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”

function firstFunc(firstArr, firstValue, secondValue, handler3){
    var output = [];


    for (var i=0; i < firstArr.length ; ++i) {
        output.push(firstArr[i][firstValue], ' ', 'is', ' ', firstArr[i][secondValue], ' ')
    }
    var secondStr = output.join('');
    handler3 (secondStr);

}
firstFunc([{age: 45, name: 'John'}, {age: 20, name: 'Aaron'}], 'name','age',function (num) {
    console.log('New value:' + num)
})

//firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

function firstFunc(firstArr, handler1){
    var firstString = firstArr.join(' ')
    var newString = "";
    for (var i = firstString.length-1; i>=0; i--){
        newString+= firstString[i];
    }
    let secondString = newString.split(' ');
    secondString.reverse()

    handler1 (secondString);

}
firstFunc(['abc', '123'], function (num) {
    console.log('New value:' + num)
})

// 2. Написать аналог метода every. Создайте функцию every, она должна принимать первым
// аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом
// callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить
// число больше 5). Callback должен принимать один элемент массива, его индекс в массиве и весь
// массив.

function firstFunc(numberArr, callback){

for (i=0; i < numberArr.length; i++){
    var index = numberArr[i].length;
    var elem = numberArr[i];
    if(elem > 5){
        return true
    } else {
        return false
    }
    }

    callback (elem, index, numberArr);

}
firstFunc([6,8], function (num) {
    console.log('New value:' + num)
})

// 1. На основе массива [1,2,3,5,8,9,10] сформировать новый массив,
//     каждый элемент которого будет хранить информацию о числе и его четности:
//     [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]


var arr = [1,2,3,5,8,9,10];
var result = {};

var newArr = arr.map(function(elem, index) {
    if(elem % 2 > 0){
        result = {
            digit: index,
            odd:'true'}
        return arr[elem] = result;
    } else {
        result = {
            digit: index,
            odd:'false'}
        return arr[elem] = result;
    }
} );

console.log(newArr);



// 2. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да -
// вернуть false.
var numbers= [12, 4, 50, 1, 0, 18, 40];

var filterArr = numbers.map(function(elem) {
    if (elem === 0) {
        return false;
    } else {
        return true;
    }
});

console.log(filterArr);

//второй вариант удаляет из массива 0

var numbers= [12, 4, 50, 1, 0, 18, 40];

var filterArr = numbers.filter(function(elem) {
    if (elem === 0) {
        return false;
    } else {
        return true;
    }
});

console.log(filterArr);


// 3. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной
// больше 3х букв. Если да - вернуть true

var arr =  ['yes', 'hello', 'no', 'easycode', 'what']

var NewArr = arr.map(function(elem) {
    if (elem.length >3) {
        return true;
    } else {
        return false;
    }
});

console.log(NewArr);

// 4. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения
// в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
//     {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
//     {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт
// строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения
// строки
function compareIndex(index1, index2) {
    return index1.index - index2.index;
};
var firstArr = '';
var arr = [{char:"!",index:2}, {char:"H",index:0}, {char:"i",index: 1}];

arr.sort(compareIndex)

;
for(var i = 0; i < arr.length; i++) {
    firstArr +=(arr[i].char)}

    console.log(firstArr);

//1.Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы
//(размер массива определяется его длиной): [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd']
//]

var arr = [ [14, 45], [1], ['a', 'c', 'd'] ];

console.log(arr.sort());


//2. Есть массив объектов:
    //[
        //{cpu: 'intel', info: {cores:2, сache: 3}},
        //{cpu: 'intel', info: {cores:4, сache: 4}},
        //{cpu: 'amd', info: {cores:1, сache: 1}},
        //{cpu: 'intel', info: {cores:3, сache: 2}},
        //{cpu: 'amd', info: {cores:4, сache: 2}}
    //]
//Отсортировать их по возрастающему количеству ядер (cores).

var arr = [
{cpu: 'intel', info: {cores:2, сache: 3}},
{cpu: 'intel', info: {cores:4, сache: 4}},
{cpu: 'amd', info: {cores:1, сache: 1}},
{cpu: 'intel', info: {cores:3, сache: 2}},
{cpu: 'amd', info: {cores:4, сache: 2}}
];
function compareIndex(index1, index2) {
    return index1.info.cores - index2.info.cores;
};
arr.sort(compareIndex);

// 3. Создать функцию, которая будет принимать массив продуктов и две цены. Функция должна
// вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к
// дорогим:
//     let products = [
//         {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//         {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//         {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//         {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
//     ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
function filterCollection(products, a, b){
let filterPrice = [];
for (let i = 0; i < products.length; i++){
    if(products[i]['price'] < b){
        filterPrice.push(products[i]);
    }
}
let secondFilter = []
    for (let j = 0; j < filterPrice.length; j++){
        if(filterPrice[j]['price'] > a){
            secondFilter.push(filterPrice[j]);
        }
    }
    function compareIndex(index1, index2) {

        return index1.price - index2.price;
    };

return secondFilter.sort(compareIndex)
}
let secondFilter = filterCollection(products, 15, 30);

console.log('filterPrice', secondFilter);


