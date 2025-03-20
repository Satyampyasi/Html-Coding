 
// function one ( call_two){
//      console.log("Step 1 complete now call step 2")
//      call_two();
// };


// function two (){
//      console.log("Step 2")
// }
// one(two);

let   stocks ={
     fruits : [ "grapes", "orange","banana","apple"],
     liquid :[ "maza","fruite","water","ice"],
     holder : ["cone ","cup","stick"],
     toppings:["chocolate","peanuts"]
}

let is_shop_open = true;

let topping = ()=>{
  return new Promise((resolve, reject) => {
     setTimeout(()=>{
          console.log("Which topping would you want?");
     },3000)
  });

};

async function kitchen(){
     console.log("a")
     console.log("b")
     console.log("c")
     await topping()
     console.log("d")
     console.log("e")
}
kitchen()
console.log("doing dises")
console.log("cleaning tha tables")
console.log("taking other order")

 

