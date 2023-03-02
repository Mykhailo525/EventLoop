
// let money=0
// function goWork(isWorkingDay) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(isWorkingDay){
//                 money+=1000
//                 resolve (money)
//
//
//             //    resolve не зупиняє виконання функціїї, можна далі писати код
//
//
//
//             }else{
//                 console.log('I am relaxing')
//                 reject('It is not working day')
//             }
//         },500)
//     })
//
// }
// function goToCroatia(money){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(money>700){
//                 console.log('Hoooray, we go to Croatia')
//                 money-=700
//                 resolve (money)
//             }else{
//                 console.log('Ну поїду до батьків в село')
//                 reject('No money No honey')
//             }
//         },1000)
//     })
//
// }
// function buySouvenirs(money){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if (money>200){
//                 console.log('Куплю магнітики')
//                 money-=200
//                 resolve (money)
//             }else {
//                 console.log('Просто пофоткаюсь і норм')
//                 reject ('Не було грошей на магнітики')
//             }
//         },700)
//     })
// }


// PROMISE CHAIN     ES-6
// goWork(true)
//     .then(payment=>{
//         console.log('i got' ,payment,'after working day')
//         return goToCroatia(payment)
// })
//     .then(moneyAfterTrip=>{
//         console.log('After trip i have',moneyAfterTrip )
//         return buySouvenirs(moneyAfterTrip)
//     })
//     .then(moneyAfterShopping=>{
//         console.log('After shopping i have',moneyAfterShopping)
//     })
//     .catch(reason=>{
//         console.warn(reason)
//     })
//     .finally(()=>{
//         console.log('Finally')
//     })



// //ASYNC AWAIT  ES-8
// async function vacation(){
//     try{
//         const payment=await goWork(true)
//         console.log('i got' ,payment,'after working day')
//
//
//         const moneyAfterTrip= await goToCroatia(payment)
//         console.log('After trip i have',moneyAfterTrip)
//
//
//         const moneyAfterShopping=await buySouvenirs(moneyAfterTrip)
//         console.log('After shopping i have',moneyAfterShopping)
//
//     }catch (e) {
//         console.warn(e)
//     }
// }
//
// vacation()



//PROMISE ALL
// const one=new Promise(resolve => {
//     setTimeout(()=>{
//     resolve(1)
//     },1500)
// })
// const two=new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(2)
//     },100)
// })
// const three=new Promise(resolve => {
//     setTimeout(()=>{
//         resolve(3)
//     },600)
// })
//
//
//
//
// Якщо хоч 1 проміс не виконається то не виконаються всі
// КАСТИЛЬ two.catch(e=>{})
// Promise.all([one,two,three])
//     .then(value => {
//     console.log(value)
// })
//     .catch(e=>{
//         console.log(e)
//     })
// Promise.all([one,two,three]).then(value => {
//     console.log(value)
// })
//
//
//
//
//PROMISE ALLSETTLED ніколи не вилітає в  catch
// Promise.allSettled([one,two,three])
//     .then(value => {
//         console.log(value)
//     })




//DEADLOCK
// document.getElementById('btn')
//     .onclick=()=>{
//     console.log('clc')
// }
// let i=0
// while(i<999999999){
//     i++
// }



//СИНХРОННІ ОПЕРАЦІЇЇ МАЮТЬ НАЙВИЩИЙ ПРІОРИТЕТ



// task queue >16 000   -------------   Maximum call stack size exceeded
// function stackoverflow(){
//     return stackoverflow()
// }
// stackoverflow()



// Якщо резолву не було то статус може бути вічно пендінг