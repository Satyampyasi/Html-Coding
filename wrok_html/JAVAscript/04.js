let mypromise = new Promise( function(resolve, reject) {
    resolve='20';
})
mypromise
.then(function(x){
     return x*2;
})
.then(function(y){
    return y*2;
})
.then(function(z){
    return z/5;
})
.then(function(p){
    console.log(p);
})
.catch(function(o){
    console.log("no value ");
})