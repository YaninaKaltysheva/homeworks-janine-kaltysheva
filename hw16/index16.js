// 1. Есть класс Planet
// function Planet(name) {
// this.name = name;
// this.getName = function () {
// return 'Planet name is ' + this.name;
// }
// }
// Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
// принимать, кроме name, название спутника (satelliteName). Переопределите метод
// getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
// дополнительный текст 'The satellite is' + satelliteName.
// Например:
// var earth = new PlanetWithSatellite('earth', 'moon');
// earth.getName(); // 'Planet name is earth. The satellite is moon’

function Planet (name){
    this.name = name;
    this.getName = function () {
    return 'Planet name is ' + this.name;
    }
}
function PlanetWithSatellite (name, satelliteName) {
    //Planet.call(this, name);
    this.roditel = {}; Planet.call(this.roditel, name)
    this.roditel.getName.call(this.roditel)
    this.satelliteName = satelliteName;
}
PlanetWithSatellite.prototype = Object.create(Planet.prototype);
PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;
PlanetWithSatellite.prototype.getName = function () {
    return this.roditel.getName.call(this.roditel) + '.' + 'The satellite is' + ' ' + this.satelliteName }
const earth = new PlanetWithSatellite('earth','moon')
console.log(earth.getName())

//второй пример, для себя оставляю


// function Planet (name){
//     this.name = name;
//     this.getName = function () {
//      return 'Planet name is ' + this.name;
//     }
// }
// function PlanetWithSatellite (name, satelliteName) {
//     Planet.call(this, name);
//     this.satelliteName = satelliteName;
//     const previousGetName = this.getName;
//     this.getName = function () {
//         return previousGetName.call(this) + '.' + 'The satellite is' + satelliteName 
//  }
// }
// PlanetWithSatellite.prototype = Object.create(Planet.prototype);
// PlanetWithSatellite.prototype.constructor = PlanetWithSatellite;

// const earth = new PlanetWithSatellite('earth','moon')
// console.log(earth.getName())

// 2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество
//     этажей” и метод “установить количество этажей”).
//     Создайте наследников этого класса:
//     классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование
//     У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество
//     этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}
//     У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество
//     этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
//     От каждого класса создать экземпляр (дом, торговый центр)

class Build {
    constructor (floors){
        this.floors = floors 
    }
    setFloors(){return floorscount = this.floors}
    getFloors(){return this.floors}
}
class LiveHome extends Build {
    constructor(floors, flats) {
        super(floors);
        this.flats = flats;
}
getFloors(){
    return {
        floors: this.floors,
        allflats: super.getFloors() * this.flats
    }
}
}
class TradeHome extends Build {
    constructor(floors, shops) {
        super(floors);
        this.shops = shops;
    }
    getFloors(){
        return {
            floors: this.floors,
            allflats: super.getFloors() * this.shops
        }
    }
}
const livehome = new LiveHome (5, 2)
const tradehome = new TradeHome (3, 4)
console.log(livehome.getFloors())
console.log(tradehome.getFloors())
// 3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию”
// (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов
// (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих
// экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод
// “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.
function Furniture (name, price) {
    this.name = name;
    this.price = price
}
Furniture.prototype.getInfo = function () {
    return this.name + ' ' + this.price
}
function OfficeFurniture (name, price, unit) {
    Furniture.call (this, name, price);
    this.unit = unit;
}
OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;
OfficeFurniture.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + ' ' + this.unit
}
function HomeFurniture (name, price, item) {
    Furniture.call (this, name, price);
    this.item = item;
}
HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;
HomeFurniture.prototype.getInfo = function () {
    return Furniture.prototype.getInfo.call(this) + ' ' + this.item
}
officefurniture = new OfficeFurniture('office', 350, 'cupboard')
console.log(officefurniture.getInfo())
homefurniture = new HomeFurniture('home', 100, 'sofa')
console.log(homefurniture.getInfo())

// 4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом
// “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть
// объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”:
// класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату
// (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о
// дополнительных свойствах (“суперАдмин” и “срокДействия”)

function User (name, date) {
    this.name = name;
    this.date = date;
}
User.prototype.getInfoUser = function () {
    return this.name + ' ' + this.date
}
function Admin (name, date) {
    User.call(this, name, date)
    superAdmin = true;
    this.getSuperAdmin  = function () {
        return superAdmin ? 'admin' : 'user';
    }
}
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;
Admin.prototype.getInfoUser = function () {
    return User.prototype.getInfoUser.call(this) + ' ' + this.getSuperAdmin()
}
admin = new Admin('Sasha', '13.05.19')
console.log(admin.getInfoUser())

function Guest (name, date) {
    User.call(this, name, date)
    this.createDate = function () {
        this.startDate = new Date(this.date);
        this.endDate = new Date(this.date);
        this.endDate.setDate(this.endDate.getDate() + 7); 
        this.localestr = this.endDate.toLocaleDateString()
        return this.localestr
    }
    validDate = this.createDate();
    this.getValidDate  = function () {
        return validDate ? this.localestr : 'false';
    }
}
Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;
Guest.prototype.getInfoUser = function () {
    return User.prototype.getInfoUser.call(this) + ' ' + this.getValidDate()
}
guest = new Guest ('Alex', '10-05-2019')
console.log(guest.getInfoUser())

