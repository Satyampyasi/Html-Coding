var val =0;
var res1= document.getElementById("count")
var eo = document.getElementById("isEvenodd")
function incr(){
    val++;
    checkRange();
    isEvenodd()
    
}
function decr(){
    val--;
    checkRange()
    isEvenodd()

}
function checkRange(){
    if (val<0){
        alert(" value cannot less than 0");
    }
    else if(val<=20){
        res1.textContent =  val;
    }
    else {
        alert("value should be less than 20");
    }
}
function isEvenodd(){
    if(val % 2==0){
        eo.textContent='Even'
    }
    else{
        eo.textContent='odd'
    }

} 
