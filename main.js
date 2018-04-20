// var person = {
//   hungry: true,
//
//   feed: function () {
//     if (this.hungry) {
//       this.hungry = false;
//       alert('Im no longer hungry!');
//     }
//   }
// }
//
// person.feed();


// var pump = function (amount) {
//   var liters = 0;
//   liters += amount;
//   console.log('You put ' + amount + ' liters in ' + this.name);
// };
//
// var garage = {
//   car1: {
//     name: 'Audi',
//     liters: 3,
//     fillTank: pump
//   },
//   car2: {
//     name: 'Mercedes',
//     liters: 1,
//     fillTank: pump
//   }
// };
//
// garage.car1.fillTank(2);
// console.log('Audi should have 5 liters: ',  garage.car1.liters);
//
// garage.car2.fillTank(30);
// console.log('Mercedes should have 31 liters: ', garage.car2.liters);



// var pumpFuel = function (plane) {
//
//   plane.fuel += 1;
// };
//
// var fuel = 0;
// var airplane = {
//   fly: function () {
//     if (fuel < 2) {
//       return 'on the ground!';
//     }
//     else {
//       return 'flying!';
//     }
//   }
// };
//
// console.log('The plane should not be able to fly (yet): ' + airplane.fly());
//
// pumpFuel(airplane);
// console.log('The plane should STILL not be able to fly: ' + airplane.fly());
//
// pumpFuel(airplane);
// console.log('Can it fly now? ' + airplane.fly());



// var tipJar = {
//   coinCount: 20,
//   tip: function () {
//     this.coinCount += 1;
//   }
// };
//
// tipJar.tip();
// console.log('Wishing well should have 21 coins: ' + tipJar.coinCount);
//
// tipJar.stealCoins(3);
// console.log('Wishing well should have 18 coins: ' + tipJar.coinCount);
//
// tipJar.stealCoins(10);
// console.log('Wishing well should have 8 coins: ' + tipJar.coinCount);



// let cat = {
//   sound: 'meow',
//   talk: function () {
//     console.log(this.sound);
//   }
// };
//
// let talkFunction = cat.talk.bind(cat);
// talkFunction();




// CALLBACK FUNCTIONS
// var greet = function (greeting) {
//   greeting();
// };
// greet(function () {
//   console.log('sup');
// });



//   numbers.forEach(function (number) {
//     console.log(number);
//   });
//
//
// var forEach = function (callback) {
//   callback();
// }



// var numbers = [1, 2, 3, 4, 5];
//
// numbers.forEach(function (num) {
//   console.log(num);
// });



// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }
//
// [2, 5, 6, 9].forEach(logArrayElements);



// var saveUser = function (user) {
//
//   var users = [
//     { id: 15, name: 'Bob' },
//     { id: 23, name: 'Jimbo' },
//     { id: 35, name: 'Cathy' }
//   ];
//
// users.forEach(function (user)){
//   console.log('saving', user.name)
// }
// };
//
//
//
//
// var boxes = [
//   { length: 10, width: 15, height: 20 },
//   { length: 15, width: 20, height: 25 },
//   { length: 20, width: 25, height: 30 },
//   { length: 25, width: 30, height: 35 },
//   { length: 30, width: 35, height: 40 }
// ];
//
// var volumes = [];


// var nums = [1, 2, 3];
// var increasedNums = [];
//
// for (var i = 0; i < nums.length; i++) {
//   increasedNums.push(nums[i] += 5);
// };
//
// console.log(increasedNums); // [6, 7, 8]


//MAPSSSS
// var nums = [1, 2, 3];
//
// var increasedNums = nums.map(function (num) {
//   return num += 5;
// });
//
// console.log(increasedNums); // [6, 7, 8]




// var budgets = [
//   { title: 'Rent', amount: 1200 },
//   { title: 'Groceries', amount: 300 },
//   { title: 'Phone', amount: 50 },
//   { title: 'Gas', amount: 200 },
//   { title: 'Internet', amount: 45 }
// ];
//
// var expenses = budgets.map(function (budget) {
//   return budget.amount += 10;
// });
//
// console.log(expenses); // [1200, 300, 50, 200, 45];



// var boxes = [
//   { length: 10, width: 15, height: 20 },
//   { length: 15, width: 20, height: 25 },
//   { length: 20, width: 25, height: 30 },
//   { length: 25, width: 30, height: 35 },
//   { length: 30, width: 35, height: 40 }
// ];
//
// var lengths = boxes.map(function (box) {
//   return box.length;
// });
//
// console.log(lengths);



// var boxes = [
//   { length: 10, width: 15, height: 20 },
//   { length: 15, width: 20, height: 25 },
//   { length: 20, width: 25, height: 30 },
//   { length: 25, width: 30, height: 35 },
//   { length: 30, width: 35, height: 40 }
// ];
//
// var volumes = boxes.map(function (box) {
//   return (box.length) * (box.width) * (box.height);
// });
//
// console.log(volumes);




// var users = [
//   { id: 1, name: 'Bob', email: 'bob@gmail.com' },
//   { id: 2, name: 'Cindy', email: 'cindy@gmail.com' },
//   { id: 3, name: 'Susan', email: 'susan@gmail.com' },
//   { id: 4, name: 'Sarah', email: 'sarah@gmail.com' },
//   { id: 5, name: 'Tim', email: 'tim@gmail.com' }
// ];
//
// var pluck = function (array, property) {
//   var result = array.map(function(user) {
//     return user[property];
//   });// write your code here
//   console.log(result, email);
// };
//
//
// pluck(users, 'email'); // returns ['bob@gmail.com', `cindy@gmail.com`, `susan@gmail.com`, `sarah@gmail.com`, `tim@gmail.com` ];


// airplane.prototype.takeOff



// class Vehicle {
//   constructor (x, y, speed) {
//     this.x = x;
//     this.y = y;
//     this.speed = speed;
//   }
//
//   move() {
//     this.x = this.x + this.speed * this.randomStep();
//     this.y = this.y + this.speed * this.randomStep();
//   }
//
//   randomStep() {
//       if (Math.random() < 0.5) {
//         return -1;
//       } else {
//         return 1;
//       }
//
//   }
//
// }
// class Car extends Vehicle{
//     constructor(x, y) {
//       super(x, y, 5);
//     }
//       honk () {
//         console.log('honk');
//       }
// }
//
// class Bicycle extends Vehicle{
//     constructor(x, y) {
//       super(x, y, 2);
//     }
// }

// robot dog delegating the work

// var Foo = {
//   init: function (who) {
//     this.me = who;
//   },
//   identify: function () {
//     return "I am " + this.me;
//   }
// };
//
// var Bar = Object.create(Foo);
//
// Bar.speak = function () {
//   alert("Hello, " + this.identify() + ".");
// };
//
// var b1 = Object.create(Bar);
// b1.init("b1");
//
// var b2 = Object.create(Bar);
// b2.init("b2");
//
// b1.speak();
// b2.speak();




// var Vehicle = {
//   types: function (x, y, speed) {
//   this.x = x;
//   this.y = y;
//   this.speed = speed;
//   },
//   move: function() {
//   this.x = this.x + this.speed * this.randomStep();
//   this.y = this.y + this.speed * this.randomStep();
//   },
//   randomStep: function() {
//   if (Math.random() < 0.5) {
//     return -1;
//   } else {
//     return 1;
//   }
// };
//
//   var car = Object.create(Vehicle)
//
//   Car.honk = function () {
//     console.log("Beep! Beep!");
//   };
//
//   var Bicycle = Object.create(vehicle)
//
//   Bicycle.honk = function () {
//     console.log("Hey! Watch out!");
//   };
//
//   var angryBicycle = Object.create(vehicle)
//     Bicycle.call(this, x, y);
//   };



// var sum = function(num1, num2) {
//   return num1 + num2;
// };
//
// console.log(sum(3, 2));



// var coffeeShop = {
//   beans: 100
// };
//
// var makeCoffee = function (shop) {
//   shop.beans -= 10;
//   console.log('coffee is being made!');
// };
//
// var buyBeans = function (shop) {
//   shop.beans += 20;
//   console.log('purchased some beans!');
// };
//
// makeCoffee(coffeeShop);
// buyBeans(coffeeShop);
//
// console.log(coffeeShop); // { beans: 110 }




// const coffeeShop = Object.freeze({
//   beans: 100
// });
//
// const makeCoffee = function (state) {
//   const beanCount = state.beans - 10;
//
//   return {
//     beans: beanCount
//   }
// };
//
// const buyBeans = function (state) {
//   const beanCount = state.beans + 20;
//
//   return {
//     beans: beanCount
//   }
// };
//
// const coffeeShopAfterBuyingAndSelling = buyBeans(makeCoffee(coffeeShop));




// const greet = (firstName => {
//   return lastName
// })




// const o = Object.freeze({ x: 1 });
// console.log(o.x); // 1
// o.x = 2;




// var UserModule = function (name, email) {
//   var attributes = {
//     name: name,
//     email: email || null,
//   };
//
//   var getAttribute = function (attribute) {
//     if (attributes[attribute]) {
//       return attributes[attribute];
//     }
//   };
//
//   var setAttribute = function (attribute, value) {
//     if (attributes[attribute]) {
//       attributes[attribute] = value;
//     }
//   };
//
//   return {
//     get: getAttribute,
//     set: setAttribute
//   };
// };
//
// var learnToCodeRDU = UsersModule();




// var UserModule = function (name, email) {
//   var attributes = {
//     name: name,
//     email: email || null,
//   };
//
//   var getAttribute = function (attribute) {
//     if (attributes[attribute]) {
//       return attributes[attribute];
//     }
//   };
//
//   var setAttribute = function (attribute, value) {
//     if (attributes[attribute]) {
//       attributes[attribute] = value;
//     }
//   };
//
//   return {
//     get: getAttribute,
//     set: setAttribute
//   };
// };
//
// var learnToCodeRDU = UsersModule();




// var number = 5;
//
// var double = function (num) {
//
//   for (var i= 1; i < 4; i++) {
//
//       number = num * 2;
//       console.log(number);
//   }
// };
//
// double(number);




// const coffeeShop = Object.freeze({
//   beans: 100
// });
//
// const makeCoffee = function (state) {
//   const beanCount = state.beans - 10;
//
//   return {
//     beans: beanCount
//   }
// };
//
// const buyBeans = function (state) {
//   const beanCount = state.beans + 20;
//
//   return {
//     beans: beanCount
//   }
// };
//
// const coffeeShopAfterBuyingAndSelling = buyBeans(makeCoffee(coffeeShop));
//
// console.log(coffeeShopAfterBuyingAndSelling.beans);

//
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// var evenNumbers = numbers.filter(function (n) {
//   return n % 2 === 0;
// });
//
// console.log(evenNumbers);



// var UserModule = function (name, email) {
//   var attributes = {
//     name: name,
//     email: email || null,
//   };
//
//   var getAttribute = function (attribute) {
//     if (attributes[attribute]) {
//       return attributes[attribute];
//     }
//   };
//
//   var setAttribute = function (attribute, value) {
//     if (attributes[attribute]) {
//       attributes[attribute] = value;
//     }
//   };
//
//   return {
//     get: getAttribute,
//     set: setAttribute
//   };
// };
//
// var learnToCodeRDU = UserModule('davis', 'du');
// console.log(learnToCodeRDU.name);




// var myBike = {x: 10, y: 20};
// var myCar = {x: 10, y: 20};
//
// var bicycleAverageSpeed = 5;
// var carAverageSpeed = 20;
//
// var move = function (speed, vehicle) {
//   vehicle.x = vehicle.x + speed * randomStep();
//   vehicle.y = vehicle.y + speed * randomStep();
// };
//
// // A helper function that randomly returns either -1 or 1
// var randomStep = function () {
//   if (Math.random() < 0.5) {
//     return -1;
//   } else {
//     return 1;
//   }
// }
//
// move(20, myCar);
//
// console.log(myCar);
// move(20, myCar);
//
// console.log(myCar);
// move(20, myCar);
//
// console.log(myCar);
// move(20, myCar);
