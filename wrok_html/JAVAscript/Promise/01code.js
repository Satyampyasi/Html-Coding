const promiseone= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Task complete");
        resolve()
    },1000)
})

promiseone
.then( function(){
 console.log("Promise consume");
})

new Promise( function( resolve,reject){
    setTimeout(function(){
        console.log("assign task 2");
        resolve()
    },3000)
})
.then(function(){
    console.log("async 2 reesolved")
})

const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
     resolve({ username:"chai",email:"satyampyasi56@gmail.com"})
   })
},1000)