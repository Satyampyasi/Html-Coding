let digit = document.getElementById('digit')
let c = 0
function sum(){
    c++;
    digit.textContent = c;
}
function sub(){
    c--;
    digit.textContent=c;
}
function reset(){
    digit.textContent=''
}