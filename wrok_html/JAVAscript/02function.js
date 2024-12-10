// function addnum(a,b){
    
//     return a+b
// }
//   const result = addnum(5,4);
//   console.log(result);
// /*-----------------------------------------------------------------------------------------------------*/
//   function loginusermessage(username){
//     if(!username){
//         console.log("Please enter tha username");
//         return 
//     }
//      return `${username} just loogged in`
//   }
// console.log(loginusermessage())

  /*============================================================================*/ 
//   function  calculatecartprice(...num1){/* rest */ 
//     return num1
//   }
//   console.log(calculatecartprice(200,400,500,600,700) )
// const user = {
//     username :"satyam",
//     price: 199
// }
// function handleobject(anyobject){
//     console.log(`username is ${ anyobject.username}and price is
//         ${anyobject.price}`);
// }
// handleobject(user)

// function work(main){
//   console.log(`Name is ${main.name} and price are ${main.price2}`);
// }
// work({
//     name:"kkkk",
//     price2:85458
// })

// const mynewarray =[200,400,100,600]
// function returnsecoundValue(getarray){
//   return getarray[2]
// }
//  console.log(returnsecoundValue(mynewarray))
// console.log(returnsecoundValue([200,400,100,600]))

// const arr=[200,500,50,25,];
// function arraywork(wantarray){
// return wantarray[2] 
// }
// console.log(arraywork(arr))



// function add(a,b)
// {
//     return(a+b);
// }
// let k=add(4,5);
// console.log(k);
 
// /*=========================================================================================================*/
// function handleobject(anyobject){
//   console.log(`username is ${ anyobject.username}`);
// }
// handleobject({
//   username:"satyampyasi"
// })


function fullname(str){
  return str.split(' ')
}
console.log(fullname("satyam pyasi"))

var splitstring = function(str){
  return str.split(" ")
}
var x = splitstring("dooo done")
console.log(x);