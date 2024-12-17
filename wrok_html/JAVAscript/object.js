//singleton 
//object literals

const sat={
    name:"satyam",
    id:4544,
    loaction:"hyd",
    LastloginDays:["Monday","tuesday","Wednesday","thurday"]
}
console.log(sat.loaction);
console.log(sat["id"]);

sat.greating=function(){
    console.log("good morning ");
}
console.log(sat.greating);

