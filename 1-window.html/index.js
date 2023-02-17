// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

// let SET = "SET_DATA";
// let GET = "GET_DATA";
// let DELETE = "DELETE_DATA";

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// function switchCaseFunc(type) {
//     switch (type) {
//         case SET:
//             console.log(SET);
//             break;
//         case GET:
//             console.log(GET);
//             break;
//         case DELETE:
//             console.log(DELETE);
//             break;
//         default:
//             console.log("doesn't work");
//             break;
//     }
// }
// console.log(switchCaseFunc(GET));

// ///////////////////////////////////////////////

// 1.2  2ci merhelede functiondan kenarda array yaradin ve Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// let SET = "SET_DATA";
// let GET = "GET_DATA";
// let DELETE = "DELETE_DATA";
// let arr = [];

// function switchCaseFunc(type) {
//     switch (type) {
//         case SET:
//             arr.push(Math.floor(Math.random() * 9) + 1);
//             console.log(SET);
//             break;
//         case GET:
//             console.log(GET);
//             break;
//         case DELETE:
//             console.log(DELETE);
//             break;
//         default:
//             console.log("doesn't work");
//             break;
//     }
// }
// console.log(switchCaseFunc(SET))
// console.log(arr)

// /////////////////////////////////////////////////////////

// 1.3 Case -'DELETE' olarsa arraydan 1 item silin,ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR
// - 'SILINECEK DATA TAPILMADI' ve sonda arrayi consola cixardin.
// let SET = "SET_DATA";
// let GET = "GET_DATA";
// let DELETE = "DELETE_DATA";

// let arr = [1, 2, 3];

// function switchCaseFunc(type) {
//     switch (type) {
//         case SET:
//             console.log(SET);
//             break;
//         case GET:
//             console.log(GET);
//             break;
//         case DELETE:
//             console.log(DELETE);
//             if (arr.length == 0) {
//                 alert("SILINECEK DATA TAPILMADI");
//             } else {
//                 arr.splice(0, 1);
//             }
//             break;
//         default:
//             console.log("doesn't work");
//             break;
//     }
// }
// console.log(switchCaseFunc(DELETE));
// console.log(arr);
// ////////////////////////////////////////////////////////////

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun
// let SET = "SET_DATA";
// let GET = "GET_DATA";
// let DELETE = "DELETE_DATA";

// let arr = [1, 2];

// function switchCaseFunc(type) {
//     switch (type) {
//         case SET:
//             console.log(SET);
//             break;
//         case GET:
//             console.log(arr);
//             break;
//         case DELETE:
//             console.log(DELETE);
//             break;
//         default:
//             console.log("doesn't work");
//             break;
//     }
// }
// console.log(switchCaseFunc(SET));

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayini consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.

// for (let i = 0; i < mL.length; i++) {
//     var daysInMonth = function (i, year) {
//         return new Date(year, i, 0).getDate();
//     };

//     switch (i) {
//         case 1:
//             console.log("January-" + daysInMonth(1, 2023) + " days");
//             break;
//         case 2:
//             console.log("February-" + daysInMonth(2, 2023) + " days");
//             break;
//         case 3:
//             console.log("March-" + daysInMonth(3, 2023) + " days");
//             break;
//         case 4:
//             console.log("April-" + daysInMonth(4, 2023) + " days");
//             break;
//         case 5:
//             console.log("May-" + daysInMonth(5, 2023) + " days");
//             break;
//         case 6:
//             console.log("June-" + daysInMonth(6, 2023) + " days");
//             break;
//         case 7:
//             console.log("July-" + daysInMonth(7, 2023) + " days");
//             break;
//         case 8:
//             console.log("August-" + daysInMonth(8, 2023) + " days");
//             break;
//         case 9:
//             console.log("September-" + daysInMonth(9, 2023) + " days");
//             break;
//         case 10:
//             console.log("October-" + daysInMonth(10, 2023) + " days");
//             break;
//         case 11:
//             console.log("November-" + daysInMonth(11, 2023) + " days");
//             break;
//         case 12:
//             console.log("December-" + daysInMonth(12, 2023) + " days");
//             break;
//         default:
//             break;
//     }
// }
// /////////////////////////////////////////////////////////////

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// function dateFunc() {
// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var today = new Date();
//     var currentMonth = today.getMonth();

// for (let i = 0; i < mL.length; i++) {
//     var daysInMonth = function (i, year) {
//         return new Date(year, i, 0).getDate();
//     };
// }
// console.log(daysInMonth(currentMonth + 1, today.getFullYear()))

// ////////////////////////////////////////////////////////////////

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.

// const mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// const date = new Date();
// const currentMonth = mL[date.getMonth()];
// const index = mL.indexOf(currentMonth);
// switch (true) {
//     case index < 6:
//         console.log("first period");
//         break;
//     default:
//         console.log("second period");
//         break;
// }
// ////////////////////////////////////////////////////////////////

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// const wList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// const date = new Date();
// const week = date.getDay();
// const currentWeek = wList[week];
// const index = wList.indexOf(currentWeek);
// switch (true) {
//     case index > 0 && index < 4:
//         console.log("first period");
//         break;
//     default:
//         console.log("second period");
//         break;
// }
// //////////////////////////////////////////////////////////////

// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// let date = new Date();
// let day = date.getDate();
// console.log(day)
// let week = Math.ceil(day / 7);
// console.log({week})

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS ////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array
// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];
// first
// for (let i = 0; i < mL.length; i++) {
//     mL[i] = [mL[i]];
// }
// console.log(mL);
// second
// i = 0;
// while (i < mL.length) {
//     mL[i] = [mL[i]];
//     i++;
// }
// console.log(mL)

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let groupLen = 4;
// let groupArrBox = [];

// for (let i = 0; i < mL.length; i += groupLen) {
//     groupArrBox.push(mL.slice(i, i + groupLen));
// }
// mL = groupArrBox;
// console.log(mL);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array 
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

// let groupLen = 4;
// let groupArrBox = [];

// for (let i = 0; i < mL.length; i += groupLen) {
//     groupArrBox.push(mL.slice(i, i + groupLen));
// }
// mL = groupArrBox;

// mL[0].push(mL[0].splice(2));
// mL[1].push(mL[1].splice(2));
// mL[2].push(mL[2].splice(1));
// console.log(mL);  

// ////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

// let groupLen = 4;
// let groupArrBox = [];

// for (let i = 0; i < mL.length; i += groupLen) {
//     groupArrBox.push(mL.slice(i, i + groupLen));
// }
// mL = groupArrBox;

// mL[0].push(mL[0].splice(3));
// console.log(mL);
// mL[0].push(mL[0].splice(2));
// mL[1].push(mL[1].splice(3));
// mL[1].push(mL[1].splice(2));
// mL[2].push(mL[2].splice(3));
// mL[2].push(mL[2].splice(1));

// //////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array
// let mL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

// let groupLen = 4;
// let groupArrBox = [];

// for (let i = 0; i < mL.length; i += groupLen) {
//     groupArrBox.push(mL.slice(i, i + groupLen));
// }
// mL = groupArrBox;

// mL[0].push(mL[0].splice(2));
// mL[1].push(mL[1].splice(2));
// let thirdRow = mL[1];
// mL[2].push(mL[2].splice(1));
// let secondRow = mL[2];
// mL[1] = secondRow;
// mL[2] = thirdRow;
// console.log(mL);

// //////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

// let fullName = "Gullu Huseynova";
// let splitted = fullName.split("");
// let myName = splitted.slice(0, 5);
// let surname = splitted.slice(6, 15);
// let newArr = [];

// surname.forEach((letter,i) => {
//     if (myName[i] == undefined) {
//         myName[i] = "X";
//         newArr.push([myName[i], letter]);
//     } else {
//         newArr.push([myName[i], letter]);
//     }
// });
// console.log(newArr);

// //////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// let originalStr = ["Ey babeK kebaB ye!"];
// let newArr = originalStr.reverse();
// let splitted = newArr[0].split("");
// let exclamation = splitted.pop();
// splitted.unshift(exclamation);
// splitted.pop();
// splitted.push("E");
// console.log(splitted.join(""));

// //////////////////////////////////////////////////////////////////////////////

// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2,24, 34,];

// // 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin
// let sum = 0
// arr.forEach(num => {
//     if (num % 5 === 0 && num % 7 === 0 ) {
//         sum+= num
//     }
// });
// console.log(sum)

// ////////////////////////////////////////////////////////
// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2,24, 34,];
// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)
// let myNum = [];
// arr.forEach((num) => {
//     if (num >= 100 && num <= 999 && num % 2 === 0) {
//         myNum.push(num);
//     }
// });
// console.log(Math.max(...myNum));

// ////////////////////////////////////////////////////////////

// let arr = [3, 2, 21, 12, 4, 12, 4, 23, 3, 23, 5, 34, 35, 3, 4, 234, 2, 105, 24, 2, 342, 34, 140, 34, 23, 175, 342312, 1, 2, 1, 70, 21, 24, 23, 24, 23, 24, 2,24, 34,];
// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin
// let numbers = []
// arr.forEach(num => {
//     if (num % 3 === 0 && num !== 3) {
//         numbers.push(num)
//     }
// } )
// console.log(Math.min(...numbers))

// /////////////////////////////////////////////////////////////

// 7) verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3: 2,
//     key4: 4,
//     key5: 53,
//     key7: 7,
//     key8: 8,
//     key9: 91,
// };

// let keyValueArr = Object.entries(obj);
// let result = keyValueArr.filter((keyValue) => {
//     let key = keyValue[0];
//     let value = keyValue[1];
//     return key[key.length - 1] == value;
// });
// console.log(result);