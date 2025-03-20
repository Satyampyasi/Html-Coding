let   stocks ={
     fruits : [ "grapes", "orange","banana","apple"],
     liquid :[ "maza","fruite","water","ice"],
     holder : ["cone ","cup","stick"],
     toppings:["chocolate","peanuts"]
}
let is_shop_open = true;

function time(ms){
     return new Promise((resolve, reject) => {
          if(is_shop_open){
               setTimeout(resolve,ms)
          }
          else {
               reject( console.log("Shop is closed"));
          }
     })
}

let kitchen = async  () => {
     try{
          await time(2000)
          console.log(`${stocks.fruits[1]}`)
     }
     catch(error){
          console.log("customer left",error)
     }
     finally{
          console.log("day end shop closed")
     }
}
kitchen();