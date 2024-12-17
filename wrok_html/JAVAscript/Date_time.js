
 let mydate = new Date()
//  console.log(mydate.toString());
//  console.log(mydate.toTimeString());
//  console.log(mydate.toLocaleDateString());
//  console.log(typeof mydate);

//  let mycreatedate = new Date(2023,0,23)
//  console.log(mycreatedate.toDateString());/

let even =[3,7,6,8,9];
let x=even.find(function(value){return   value%2==0})
//arrayname.find(function(value){return value%2==0})
console.log(x);

var price=[2,4,8,9];
var total = price.reduce(function(pre,curr){return  pre+curr},0)
console.log(total);
// arrayname.reduce(function(old,new){return old +new},0)
/*   object is a collect of key value pairs where each key is a string abd values can be any type .
key are connected to values */ 
var obj={
    name:"raj",
    age:28,
    sum:function()
    {
        console.log("hello day");// .notation to access:
    }
}
console.log(obj.name);
console.log(obj.age);
obj.sum()
var data={
    name:"satyam",
    age:21,
    id:45845,
    password:8220,
    email:"satyampyasi565@gamai.com"
} 
console.log(data.name);
console.log(data.id);
console.log(data['password']);
console.log(data['email']);

function person(nam,age,job){
    this.name=nam;
    this.age=age;
    this.job=job;
}
var obj  =  new person("satya","67","worker");
var obj2 = new person("karama","65","devloper");
console.log(obj.name);
console.log(obj2.name);

var obj2={
    user:"dkdkdkd",
    id:45484
}
var obj3 =Object.create(obj2)
console.log(obj3.user);

function fullinformation(a,b,c,d){
this.Name=a;
this.age=b;
this.hobby=c;
this.school=d;
}
var obj= new fullinformation( "satya565","21","basketball","jnv");
var obj2 =new fullinformation("ramkrishn","25","circket","kvs");
console.log(obj2.Name);
