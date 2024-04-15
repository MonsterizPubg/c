// // // // // // let stud = ['Amal','Ilya','Farruh','Sherzod','Aлекс','Ahmad']

// // // // // let num = [1,2,3,4,5,6,7,8,9,0]

// // // // // let chet = num.filter((num) => num % 2 === 0)

// // // // // let obsh = 0

// // // // // num.forEach((num)=> obsh += num )

// // // // // let arr = [0,5,6,8,3,6,7,3,2,4,,7,8,1,]
// // // // // // arr.toSorted((a,b) => a-b)// к большемус 0

// // // // // // arr.toSorted()//не изменяет
// // // // // // arr.sort() //изменяет 

// // // // // console.log(
    
    
// // // // // );

// // // // // console.log(chet);

// // // // // console.log(obsh);

// // // // alert ("калькулятор")
// // // // let num1 = +prompt('введите число 1')
// // // // let operator = prompt(" + - / *")
// // // // let num2 = +prompt('введите число 2')

// // // // switch (operator) {
// // // //     case '+':
// // // //         alert(num1 + num2)
// // // //         break;
// // // //     case '-':
// // // //         alert(num1 - num2)
// // // //         break;    
// // // //     case "/":
// // // //         alert(num1 / num2)
// // // //         break;
// // // //     case "*":
// // // //         alert(num1 * num2)
// // // //         break;
// // // //     default:
// // // //         alert('Error')
// // // //         break;
// // // // }







// // // // alert ("vremya ot 1 do 24")

// // // // let chasi2 = prompt('введите время')
// // // // if (chasi2 > 0, chasi2 < 6) {
// // // //     alert('Доброй ночи');
// // // // }else if(chasi2 > 6, chasi2 < 12){
// // // //     alert('Доброе Утро');
// // // // }else if(chasi2 > 12, chasi2 < 18){
// // // //     alert('Добрый День');
// // // // }else if(chasi2 < 18, chasi2 < 24){
// // // //     alert('Добрый вечер');
// // // // }else{9
// // // //   alert('иди погуляй')
// // // // }
// // // // alert ("mesyaci")
// // // // let mesyac  = +prompt ("какой эт месяц??")

// // // // switch (mesyac) {
// // // //     case 1:
// // // //         case 2:
// // // //             case 12:
// // // //                alert ("Это зима")
// // // //         break;


// // // //         case 3 :
// // // //             case 4:
// // // //                 case 5:
// // // //                    alert ("Это весна")
             
// // // //             break;


// // // //             case 6:
// // // //                 case 7:
// // // //                     case 8:
// // // //                        alert ("Это лето")
                 
// // // //                 break;


// // // //                 case 9:
// // // //                     case 10:
// // // //                         case 11:
// // // //                            alert ("Это осень")
                     
// // // //                     break;



                    
// // // //                 case 999:
// // // //                    alert ("Ты в небесах :)"  )         
// // // //                         break;

// // // //     default:
        
// // // //         alert ("такого нету !!! у тя точно кукуха поехала !!! ")
// // // //     break;
// // // // }

// // // // let user = ['ahmad','sherzod','farruh','amal','ilya']


// // // // let num = +prompt('any num') // удалить элемент под этим номером

// // // // switch (num) {
// // // //     case 1:
// // // //         user.shift()
// // // //         break;

// // // //         case 2:
// // // //             user.splice(1,1)
// // // //         break;
        
// // // //         case 3:
// // // //             user.splice(2,1)
// // // //         break;
        
// // // //         case 4:
// // // //             user.splice(3,1)
// // // //         break;
        
// // // //         case 5:
// // // //             user.pop()
// // // //         break;

// // // //     default:
// // // //         alert ('такого нету -__-')
// // // //         break;
// // // // }
// // // // console.log(user);

// // // // // //2

// // // // let user_2 = ['ahmad','sherzod','farruh','amal','ilya']


// // // // let name = prompt('any name') // удалить элемент под этим именем


// // // // switch (name) {
// // // //     case 'ahmad':
// // // //         user_2.shift()
// // // //         break;

// // // //         case 'sherzod':
// // // //             user_2.splice(1,1)
// // // //         break;
        
// // // //         case 'farruh':
// // // //             user_2.splice(2,1)
// // // //         break;
        
// // // //         case 'amal':
// // // //             user_2.splice(3,1)
// // // //         break;
        
// // // //         case 'ilya':
// // // //             user_2.pop()
// // // //         break;

// // // //     default:
// // // //         alert ('такого чела нету нету -__-, ')
// // // //         break;
// // // // }
// // // // console.log(user_2);



// // // // // let nameA = stud.filter((name)=> name[0].toLowerCase()==='a')

// // // // // let long = ''

// // // // // stud.forEach((name) =>{
// // // // //     if (name.length > long.length) {
// // // // //         ln = name
// // // // //     }
// // // // // })

// // // // // console.log(long);





// // // // let car = {
// // // //     car : 'Bmw M5 e60',
// // // //     year : 2009,
// // // //     color : black ,
// // // //     motor:[
// // // //         { engine : 2.5,
// // // //             horse_power : 315 ,
// // // //             cylinders : 4 ,
// // // //             turbines : 3,
// // // //         }
// // // //     ],
// // // //     drifter : [
// // // //         {
// // // //             id:1,
// // // //             name:'ilya',
// // // //             years: 14,
// // // //             pasport: 0
// // // //         },
// // // //         {
// // // //             id:2,
// // // //             name:'Danil',
// // // //             years: 23,
// // // //             pasport: 'ace$#%$&^'
// // // //         },
// // // //         {
// // // //             id:3,
// // // //             name:'Samir',
// // // //             years: 14,
// // // //             paspor: 0
// // // //         }
// // // //     ],


// // // // }


// // // // let user = {
// // // //     name:'irvfm',
// // // //     surn:'nvufm',
// // // //     pasport:{
// // // //         ser:'tgunfomkl',
// // // //         pasvord:'vfkl'
// // // //     }
// // // // }

// // // // Object.freeze(user)
// // // // Object.freeze(user.pasport)

// // // /////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // // //                     proshloe


// // // let transactions = [
// // //     {
// // //         id: 1,
// // //         category: "food",
// // //         total: 40000,
// // //         time: "2024-04-02 08:34"
// // //     },
// // //     {
// // //         id: 2,
// // //         category: "car",
// // //         total: 10000,
// // //         time: "2024-04-02 10:20"
// // //     },
// // // ]



// // // transactions.forEach(transaction => {
// // //     let transac_time = new Date(transaction.time);
// // //     let pram_vrem = new Date();
// // //     let chas_ago = Math.floor((pram_vrem - transac_time) / (1000 * 60 * 60)); 

// // //     console.log(`Транзакция с id ${transaction.id} была совершена ${chas_ago} часов назад.`);
// // // });
 
// // // /////////////////////////////////////////////////////////////////////////////////////////////////////////

// // // //            novoe

// // // let user = {
// // //     name: "Amal",
// // //     surName: "truev",
// // //     age: 29,
// // //     wifes: ['Nargiza', 'Amina', 'Amalya', 'Shoxruxa'],
// // //     wisas: ['USA', 'Ukrain', 'Russia', 'Mexico'],
// // //     polniImya: function() {
// // //         return this.name + ' ' + this.surName
// // //     }
// // // }

// // // let passport = {
// // //     serries: "AC",
// // //     number: 213123123,
// // //     date: "2019-06-06",
// // //     exp: "2029-06-06",
// // // }

// // // let types = {
// // //     string: [],
// // //     number: [],
// // //     object: [],
// // //     boolean: [],
// // //     function: []
// // // }

// // // // TZ
// // // // Соеденить два объекта в одно целое (новый объект)
// // // // Получить все ключи из нового объекта и сохранить их в новую переменную
// // // // Получить все значения из нового объекта и сохранить их в новую переменную
// // // // Соеденить две этих массива (ключи и значения)
// // // // Отфильтровать массив по их типам элементов



// // // // Object.assign({} ,user, {wife: users_wife}, {second_wife}) // соеденяет объекты
// // // // Object.freeze(user) // sub-zero // замораживает объект
// // // // Object.keys(car), // достает все ключи и возвращает массив
// // // // Object.values(car), // достает все значения и возвращает массив
// // // // Object.entries(car) // записи возвращает массив с массивами где ключ и значение [ ['key', 'value'], ['key', 'value'] ]


// // // // 1
// // // let soed = Object.assign({} ,user, {passport}, {})
// // // console.log(soed);

// // // //2
// // // let kluch = Object.keys(soed)
// // // console.log(kluch);

// // // //3
// // // let value = Object.values(soed)
// // // console.log(value);

// // // //4
// // // let obed = kluch.concat(value)
// // // console.log(obed);

// // // // 5
// // // for (let elem of obed) {
// // //     if (typeof elem === 'string') {
// // //         types.string.push(elem);
// // //     } else if (typeof elem === 'number') {
// // //         types.number.push(elem);
// // //     } else if (typeof elem === 'object') {
// // //         types.object.push(elem);    
// // //     } else if (typeof elem === 'boolean') {
// // //         types.boolean.push(elem);
// // //     } else if (typeof elem === 'function') {
// // //         types.function.push(elem);
// // //     }
// // // }
// // // console.log(elem);

// // ////////////////////////////////////////////////////////////////////////////


// // let car = {
// //     brand: "Bmw",
// //     model: "M5 e60",
// //     year: 2009,
// //     color: "blue",
// //     start: function() {
// //         console.log("Двигатель запущен.");
// //     },
// //     stop: function() {
// //         console.log("Двигатель остановлен.");
// //     }
// // };

// // let person = {
// //     name: "Amii",
// //     age: 21,
// //     license: true,
// //     drive: function(car) {
// //         if (this.license) {
// //             console.log(`Поездка началась на ${car.brand} ${car.model}.`);
// //         } else {
// //             console.log("Водитель не имеет прав.");
// //         }
// //     },
// //     park: function() {
// //         console.log("Автомобиль припаркован.");
// //     }
// // };

// // console.log(`Информация о автомобиле: Марка: ${car.brand}, Модель: ${car.model}, Год: ${car.year}, Цвет: ${car.color}`);
// // console.log(`Информация о водителе: Имя: ${person.name}, Возраст: ${person.age}, Права: ${person.license ? 'есть' : 'нет'}`);

// // car.start();
// // person.drive(car);
// // car.stop();
// // person.park();


// let arr = [
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Timur',
//         info: {
//             school: '235',
//             faculity: 'SMM'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Imran',
//         info: {
//             school: 'ne izvestno',
//             faculity: 'programming'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Aminjon',
//         info: {
//             school: '444',
//             faculity: 'Dizayn'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Maxmud',
//         info: {
//             school: '777',
//             faculity: '3dsmax'
//         },
//     },
//     {
//         id: Math.random(),
//         name: 'Muxammad',
//         info: {
//             school: '5555',
//             faculity: 'Backend'
//         },
//     },
// ]

// let categories = [
//     {
//         course: ' SMM',
//         count: 0
//     },
//     {
//         course: 'PROGRAMMING',
//         count: 0
//     },
//     {
//         course: '     3DSMAX',
//         count: 0
//     },
//     {
//         course: ' DIZAYN',
//         count: 0
//     },
//     {       
//         course: '   BACKEND',
//         count: 0
//     },
// ]


// let shit = (str) => str.trim().toLowerCase();

// arr.forEach(person => {
//     switch(shit(person.info.faculity)) {
//         case 'smm':
//             categories[0].count++;
//             break;
//         case 'programming':
//             categories[1].count++;
//             break;
//         case '3dsmax':
//             categories[2].count++;
//             break;
//         case 'dizayn':
//             categories[3].count++;
//             break;
//         case 'backend':
//             categories[4].count++;
//             break;
//         default:
//             break;
//     }
// });

// console.log(categories);


let bank = [
    {
        id: 1,
        name: "shrzod_bomba",
        tax: 12,
        budget: 20000,
        expenses: [3000, 7000, 4000],
    },
    {
        id: 2,
        name: "farrux_market_med",
        tax: 18,
        budget: 100000,
        expenses: [35000, 4000, 50000]
    },
    {
        id: 3,
        name: "amal_GameClub",
        tax: 12,
        budget: 18000,
        expenses: [2000, 3000, 1500]
    },
    {
        id: 4,
        name: "ilya_hookah",
        tax: 15,
        budget: 30000,
        expenses: [10000, 2000, 3000]
    },
    {
        id: 5,
        name: "ahmad_nosfrush",
        tax: 0,
        budget: 10000,
        expenses: [1000, 2000, 500]
    },
]

bank.forEach(company => {
    company.expensesPerMonth = company.expenses.reduce((total, expense) => total + expense, 0);
});

bank.forEach(company => {
    company.totalBudget = company.budget - company.expensesPerMonth;
});

let minimum = bank.reduce((minimum, currentCompany) => {
    return currentCompany.tax < minimum.tax ? currentCompany : minimum;
});

let obsh = bank.reduce((total, company) => total + (company.tax / 100) * company.budget, 0);

console.table(bank);
console.log("маленький налог", minimum);
console.log("налог поступления", obsh);
