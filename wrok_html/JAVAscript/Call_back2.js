// let order = (call_pro)=>{
//      console.log("order placed please call production")
//      call_pro()
// }

// let production = ()=>{
//      console.log("order received , starting production ")
     
// }
// order(production);


let   stocks ={
      fruits : [ "grapes", "orange","banana","apple"],
      liquid :[ "maza","fruite","water","ice"],
      holder : ["cone ","cup","stick"],
      toppings:["chocolate","peanuts"]
}
let order = ( fruit_name,call_pro)=>{   
           setTimeout(()=>{
           console.log(`${stocks.fruits[fruit_name]} was selected`)
           call_pro()
           },2000)
          
     }

     let production = ()=>{
        setTimeout(()=>{
 console.log("prduction has stareted")
           setTimeout(()=>{
               console.log("Tha food has been choped");

               setTimeout(()=>{
                    console.log(`${stocks.liquid[2]} and ${stocks.liquid[3]} was added`)
                    setTimeout(()=>{
                     console.log("Machine was started");
                     setTimeout(()=>{
                      console.log(`${stocks.holder[0]} was selected` );
                     setTimeout(()=>{
                       console.log(`${stocks.toppings[1]} was added as topping` )
                       setTimeout(()=>{
                       console.log("serve ice cream ");
                       },2000)
                     },3000)
                      },2000)
                    },1000)
               },1000)
           },2000)
        });
     };
     order("0",production);

    

  