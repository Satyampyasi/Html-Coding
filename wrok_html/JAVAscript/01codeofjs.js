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
 