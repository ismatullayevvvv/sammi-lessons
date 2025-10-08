// // o'zgaruvchilar

// // 2 xil o'zgaruvchilar bor 

// // let age = 16
// // age = 23

// // console.log(age);

// // const name = 'Quvonchbek'

// // .
// // const person = {
// //     name:'Quvonchbek'
// // }

// // person.name = 'Vali'

// // console.log(person);

// // .
// // let age = '16'
// // var fullName = 'Quvonchbek Ismatullayev'

// // {
// //     var name = 'Quvonchbek'
// // }

// // console.log(name);


// // .
// // const name = 'Quvonchbek'
// // let age = '16'
// // var ages = '20'

// // Ma'lumot turlari aslida 7 ta, ishlatiladiganlari 5 ta

// // #1number
// // #2Matn
// // #3Boolean true/false
// // 4#Null
// // #5Undefined

// // AMALIYOT 1 6-DARS

// // 1-vazifa
// // const numberOfSeries = prompt("nechta serial ko'rdingiz")

// // console.log(numberOfSeries);

// // (prompt bu brauzerda oyna chiqaradi va foydlanuvchidan matn kiritishini so'raydi)


// // 3-vazifa

// // const nameofserial = prompt('Oxirgi ko`rgan serialingiz')
// // const mark = prompt ('nechi baxo berasiz')

// // const nameofserial2 = prompt('Oxirgi ko`rgan serialingiz')
// // const mark2 = prompt ('nechi baxo berasiz')

// // 3-vazifa

// // const seriesDB = {
// //     count: numberofserial,
// //     series: {},
// //     actors: {},
// //     genres: [],
// //     private: false,
// // }

// // const a = prompt('Oxirgi ko`rgan serialingiz', '')
// // const b = prompt ('nechi baxo berasiz', '')

// // const c = prompt('Oxirgi ko`rgan serialingiz', '')
// // const d = prompt ('nechi baxo berasiz', '')

// // seriesDB.series[a] = b
// // seriesDB.series[c] = d

// // console.log(seriesDB.actors);

// // const traffic = 'green'

// // if (traffic = 'red') {
// //     console.log('stop');
// // } else if (traffic = 'orange') {
// //     console.log('prepare');
// // } else if (traffic = 'green') {
// //     console.log('goo');
// // }

// // const age = '16'              == - 2 ta ravno faqatgina qiymatni tekshirib beradi
// // console.log(age === '16');    === - 3 ta ravno ham qiymatni ham ma`lumot turini tekishrib beradi

// // AMALIY MASHG`ULOT-2

// // const seriesDB = {
// //     count: numberofserial,
// //     series: {},
// //     actors: {},
// //     genres: [],
// //     private: false,
// // }

// // for (let i = 0; i < 2; i++) {
// //     const a = prompt ('oxrigi korga serialingiz ${i}?','' )
// //     const b = prompt ('nechi baxo berasiz ${i}?','' )


// // if (a !== null && b !== null && a !== '' && b !=='') {
// //     seriesDB.series[a] = b
// //     console.log('DONE')    
// // } else {
// //     i--
// //  }
// // }

// // if (seriesDB.count < 5) {
// //     console.log('kam serial ko`ryabsiz');
// // } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
// //     console.log(' siz classik tomoshabin ekansiz');   
// // } else if (seriesDB.count >=10){
// //     console.log("");
// // }

// // METHODS

// //String methods

// // let text = 'hello Jizzakh'
// // console.log("uzunligi:", text.length);

// // callback - bu bitta function bajarilgandan so'ng keyin ishlaydigan function

// // function greeting(callback) {
// //     console.log('Hello js chilar');
    
// //     callback()
// // }

// // function callback() {
// //     console.log('are u great today');
    
// // }

// // greeting(callback)


// // Object va destruktizatsiya

// // const person = {
// //     name: 'quvonchbek',
// //     year: '2009',
// //     job: 'programming',
// //     hobbies {        
// //         sport: 'table tennis',
// //         game:'ot does not matter', 
// //     }
// // }

// // for (let key in person ) {
// //     console.log(typeof key);
// //     console.log(typeof person [key]);
// //     console.log('property: ${key}: Value: ${person [key]}');
// // }

// // const person = {
// //     name: 'quvonchbek',
// //     year: '2009',
// //     job: 'programming',
// //     hobbies {        
// //         sport: 'table tennis',
// //         game:'ot does not matter', 
// //     }
// // }

// // person.sayHello ()

// // const {
// //     job,
// //     year,
// //     name,
// //     sayHello,
// //     hobbies: {games,sport }, 
// // // } = person

// //massivlar

// // const colors = ['red','red','red','red','red']

// // console.log('Massiv uzunligi', colors.length);

// // console.log('Index yordamida element olish:', colors[2]);

// // console.log('oxirgi yangi element qoshish:', colors.push('brown'));

// // console.log('oldidagi yangi elementni o`chirish:', colors.shift());

// // console.log('oldiga yanggi elelment qo`shish:', colors.unshift('gray'));

// // Pop and Push

// // Pop - bu massivni oxiridagi elementni o'chiradi

// // Push - bu massivni oxiriga yangi element qo'shadi

// // Shift va Unshift

// // Pop - bu massivni oxiridagi elementi o'chiradi

// // Push - bu massivni oxiriga yangi element qo'shadi

// console.log(colors);

// // for (let index = 0; index < cars.length; index++) {
// //     console.log(cars[i]);
// // }

// // for (let car of cars) {
// //     console.log(car);
// // }

// // colors.forEach((item, index, arr) => {
// //     console.log('${ondex}: ${item}: in array ${arr}');
    
// // })

// const numberss = [1,2,3,4,5]

// numberss [5] = 6
// numberss [6] = 7

// console.log(numberss.length);

// // Split

// const socialMedia = 'Youtube, Telegram, Instagram'
// const arr = socialMedia.split (',')
// const text = arr.join (',')
// console.log(arr);

// const person = {
//     name:'fdsa',
//     age:22,
//     hobbies: {
//         games:'ufc',
//         sport:'fottball',
//     },
// }

// const secondPerson = person

// secondPerson.name = 'yusuf'
// secondPerson.age = 52

// console.log(person)
// console.log(secondPerson)

// Interratsiya

// const copyObj = obj => {
//     const clone = {}
//     for (let key in obj) {
//         clone[key] = obj [key]
//     }

//     return clone
// }

// const secondPerson.name = 'yusuf'
// secondPerson.age = 21
// secondPerson.hobbies.games ='blur'

// console.log(person);
// console.log(secondPerson);

// object assign 

// const secondPerson = Object.assign({isMarried: false}, person)

// secondPerson.name = 'yusuf'
// secondPerson.age = 21

// console.log(person);
// console.log(secondPerson);

// spread operatoor ES8 
// const secondPerson = {...Person }

// secondPersone.name = 'yusuf'
// secondPerson.age = 21

// console.log(person);
// console.log(secondPerson);

// Array clonlash

// const cars = ['BMW', 'AUDI', 'HUNDAI']
// const clone = cars.slice()
// clone.push('suzuki')

// // console.log(cars);
// console.log(clone);

// // sprad operator es8

// const copy = [...cars]
// copy.push('subary')

// console.log('cars');
// console.log('copy');

// function log(a,b,c) {
//     console.log('first arg:', a);
//     console.log('second arg:', b);
//     console.log('thirds arg:', c);
// }

// const arr = [4,5,6]


// log(...4,5,6)

// const suvcars = {
//     weight: 1000,
//     length: 3,
//     speed: function () {
//         console.log('100km/h');
        
//     },

// }

// const nexia = {
//     weight: 800, 
// }

// const nexia = Object.create(suvcars)

// const matiz = Object.create(suvcars)


// // nexia.__proto__ = suvCars

// Object.setPrototypeOf

// console.log(nexia);

// console.log(nexia.weight);

// console.log(nexia.weight);

// const seriesDB = {
//     count: 0, 
//     series: {},
//     actors: {},
//     genres: [],
//     private false,
//     start:function () {
//         seriesdDB.count = prompt ('nechta serial ko`rdingiz;)
//     }
// }

// console.log(seriesDB);

// DOM

// Eski usul

// const box = document.getElementById ('box')

// const box = document.getElementsByClassName ('box')
// const buttons = document.getElementsByTagName('button')

// console.log(buttons.length);

// console.log('box');


// DOM

// yangi usul

// const box = document.querySelector('.wrapper')

// const buttons = document.querySelectorAll('button')

// console.log(wrapper);
// console.log(hearts);

// console.log(buttons);

// const box = document.querySelector('#box'),
// buttons = document.querySelectorAll ('button')  

// const box = document.querySelector('#box')
// buttons = document.querySelectorAll('button')
// circles = document.getElementsByClassName('circles')

// console.log(buttons);
// console.log(circles);

// for (let index = 0; index < array.length; index++) {
//     circles[i].style.borderRadius ='0'
// }

// const btn = document.querySelector('button')

// btn.onclick = function () {
//     alert(1)
// }

// btn.ondblclick = function ( {
//     console.log(2);
    
// })

// btn.addEventListener('clicl', () => {
//     console.log('first click');
    
// })

// btn.addEventListener ('click', () => {
//     console.log('second click');
    
// })

// const btn = document.querySelector('button')

// const callback = (event,text) => {
//     console.log(event.target);
    
// }
// btn.addEventListener('click', event => {
//     console.log('first click');

// event.target.textContent = 'button'
// event.target.style.backgroundColor = 'red'

// console.log('hover');
// })

// const data = document.querySelector( ' [data-item= "red"]')

// const body = document.body.childNodes

// const body2 = document.body2.firstelementChild

// console.log(data.nextElementSibling);

// document.addEventListener("DOMContentloaded", () =>{
//     const advs = document.querySelectorAll ("..promo__adv img"),
//     genre = document.querySelector (""..promo__genre"),
//     wrapper = document.querySelector (".promo__bg"),
//     seriesLIst = document.querySelector('.promo__interactive-list')

//     const seriesDB = {
//         seires: [
//             'omar',
//             'the final legacy',
//             'ertugrul',
//             'Magnificent Century',
//             'the great seljuks: guardians...'
//         ]
//     }
// })

// advs.forEach (item => {
//     item.remove()
// })

// genre.textContent = 'comedy'

// wrapper.style.vackgroundIMage = 'url(./img/1.jpg)'

// seriesLIst.innerHTML =  ''

// seriesDB.series ((item,index) => {
//     seriesLIst.innerHTML +='
//     <li class = "promo__interactive-item"></li>
//     ${index + 1}. ${item}
//     <div class = "delete"></div>
//     </li>'
// }
// )