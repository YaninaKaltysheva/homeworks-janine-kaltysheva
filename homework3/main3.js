// Записать в виде switch case следующее условие:
//     if (a === ‘block’) {
//     console.log(‘block’)
// } else if (a === ‘none’) {
//     console.log(‘none’)
// } else if (a === ‘inline’) {
//     console.log(‘inline’)
// } else {
//     console.log(‘other’)
// }
//     Записать условие, используя конструктор switch. В консоли должно отразиться только одно
//         значение.
let value = 'block';
switch(value){
        case('block'):
        console.log('block');
            break
        case(a === 'none'):
        console.log('none');
            break
        case(a === 'inline'):
        console.log('inline');
            break
    default: console.log('other');

}

// Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного
// оператора.
//1
let h = 'hidden';
if(h === 'hidden'){
    h= 'visible';
    alert(h);
}else {
    h = 'hidden';
    alert(h);
};

h=h === 'hidden' ? alert('visible') : alert('hidden');

 //2

let g = 12;
if(g === 0){
    g = 1;
    alert(g);
}else if(g<0){
    g='less then zero';
    alert(g)
}else if(g>0){
    alert(g *= 10);
};

g= g ===0 ? alert(g = 1) : g<0 ? alert( g = 'less then zero') : g>0 ? alert(g *= 10):alert('');

            //3

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
if (car.age > 5) {
    console.log('Need Repair');
    car.needRepair = true;
}else {
    car.needRepair = false;
}
    car.age > 5 ? console.log('Need Repair')
        : car.needRepair = false;

// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова
// будут в верхнем регистре. Использовать for или while.


function string() {
    let string = 'i am in the easycode';
    var splits = string.split(" ");
    var stringItog = "";

    for (let i = 0; i < splits.length; i++) {
        let Name = splits[i];
        let First = Name.substring(0, 1).toUpperCase();
        let Leftovers = Name.substring(1, Name.length)
        stringItog += First + Leftovers + " ";
    }

    return stringItog
}
string();

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква
// становится первой, предпоследняя - второй итд).

function back(str) {
   var newString = "";
   for (var i = str.length-1; i>=0; i--){
       newString+= str[i];
   }
   return newString;
}
back('tseb eht ma i')

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// // включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
// // Использовать for.
function facTor(ten){
    var newNumber = 1;
    for(var i =1; i<=ten; i++){
        newNumber*=i;
    }
    return newNumber;
}
facTor(10)

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку,
//     где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

function newString() {
    let myStr = 'JavaScript is a pretty good language';
    var splitSt = myStr.split(" ");
    var strEnd = "";

    for (let i = 0; i < splitSt.length; i++) {
        let Names = splitSt[i];
        let firstSumb = Names.substring(0, 1).toUpperCase();
        let Leftsumb = Names.substring(1, Names.length)
        strEnd += firstSumb + Leftsumb;
    }

    return strEnd
}
newString();

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2,
// //     3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.


    let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    for(let value of myArr){
        if (value % 2 > 0){
            console.log(value);
        }

    }

// 6. Дан объект:
//     let list = {
//         name: ‘denis’,
// work: ‘easycode’,
// age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре.
//     Использовать for in.


let list = {name: 'denis', work: 'easycode',age: 29}


for (var prop in list) {
    if (typeof (list[prop]) === "string") {
        list[prop] = list[prop].toUpperCase();
    }
    console.log(list[prop]);
}

