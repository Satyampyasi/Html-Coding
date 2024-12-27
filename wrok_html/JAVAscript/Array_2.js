
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes = marvel_heroes.concat(dc_heroes);
// console.log(allheroes);

// const allheroes_= [...marvel_heroes, ...dc_heroes]
// console.log(allheroes_);//make one array ...spread oprator
const another_array =[1,2,3,[4,5,6],[7,8,[9,5]]]
const final_array= another_array.flat(Infinity)
console.log(final_array);

console.log(Array.isArray("satyam"));
console.log(Array.from("satyam"));

var obj={
    user:"satyam",
    id:4821,
    password:8220
}
console.log(obj.user);

var obj3 = Object.create(obj)
console.log(obj3.id);

  function data(a,b,c)
{
    this.name  = a
    this.password =b
    this.age = c
}
var obj = new data("satyampyasi","8220","21")
var obj2= new data("krishna","4545","25")
console.log(obj2.name);

var sparray=[1,3,4,5,6,8]
const x= sparray.find( function(number){return  number%2==0})
console.log(x);

var price=[2,4,6,8]
const total= price.reduce(function(pre,cur)
{return pre+cur },0)
console.log(total);

let score=1000
let score1=102
let score2=455
console.log(Array.of(score,score1,score2));
const marvel_heroes =["thor","ironman","spiderman"]
const dc_heroes =["superman","flash","batman"]
marvel_heroes.push(dc_heroes)