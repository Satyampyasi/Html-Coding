// function abc(){
//      var a=12;
//      function def(){
//           var b=12;
//      }
// }
// abc() 

// var a = [15,12,5,41,78,6,5,89,44];
// a.forEach(function(val){
//      console.log(val);
// })

// console.log("This is with a arrow function ");
// a.forEach((val)=>{
//      console.log(val);
// })

// var obj = {
//      name: "satyam",
//      age: 21,
//      state: "madhypradesh"
// }
// for(var key in obj){
//      console.log(obj[key]);
// }
// setTimeout(()=>{
// console.log("hello");
// },2000)

function abcd(a){
a();
}
abcd(function(){console.log("hello");})
/* This is called first class function */ 

const sat = ()=>{
      console.log("hello");
}
   const chang = setTimeout(sat,2000);

   clearTimeout(chang);

