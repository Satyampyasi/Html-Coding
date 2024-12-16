function fun(str){
 if( str==="javascript"){
    console.log("success")
 }
}
fun("javascript")
/*=============================================================================================================*/ 
function check(num){
if(num%2==0) return("even");
else  return("odd");
}
 let k=check(4)
 console.log(k);
 /**=========================================================================================================== */

 function checkname( lastname){
     if( lastname==="patel") return("true")
        else return("false")
 }
 console.log(checkname("satyam patel"))
 /*=========================================================================================================*/
 function sum(num){
    var id = num%10;
    var fd=(num/10).toFixed();
    if( +fd+id>+fd+id) console.log("sum is greater");/*we use + sign before to convert in integer*/
    else console.log("product is greater")
 }
 sum(23)
 /*==========================================================================================================*/
 function posorneg(num){
   if(num>0) console.log("positive");
   else if(num<0) console.log("negative");
   else console.log("ZERO");
 }
 posorneg(45)
 /*===========================================================================================================*/
  function color(num){
     switch(num)
    {
       case 1:
       console.log("violet");
       break;
       
       case 2:
        console.log("blue");
        break;

        case 3:
        console.log("green");
        break;
        
        case 4:
        console.log("orange");
        break;
        
        case 5:
        console.log("yellow");
        break;
        
        case 6:
        console.log("red");
        break;

        case 7:
        console.log("white");
        break;

        default:
            console.log("mixed color")
    }

  }
  color(50)