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
   },1000)
})
promiseThree
.then(function(userdata){
    console.log(userdata)
})

const promisefour= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true /* This mean error is present */ 
       if(!error){
         resolve({Name:"satyampyasi" ,Gamil:"kodakbank@676yahoo.com"})
       }
       else{
        reject('Error: something went wrong')
       }
    },2000)

promisefour
.then(function(information){
  console.log(information);
  return information.Name
})

.then(function(info){
    conaole.log(info);
})

})