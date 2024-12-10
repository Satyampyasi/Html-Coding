function sum(a,b){
    console.log(a+b);
}
sum(5,6);
/*------------------------------------------------------------*/ 
function add(a,b)
{
    return(a+b);
}
let k=add(4,5);
console.log(k);

/*----------------------------------------------------------*/ 
function mul(a,b,...c){
return (a+b)
}
let z= mul(5,6,8,9,10);
console.log(z);
/*---------------------------------------------------------- */
function friend(a,...b){
  console.log(a,b.length);
}
friend("geeta","sheeta","reeta");

function fun12(a,b,c){
    let d=[...c,6];
    console.log(a+b,c,d.length)
   
}
fun12(1,2,3,4,5)
