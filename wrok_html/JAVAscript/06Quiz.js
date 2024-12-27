
let digit = document.getElementById('digit')

function op1(answer){
  let correct = "INDIA"
  if(answer === correct){
          digit.textContent = "Right"
          digit.style.color='green';
  }else {
    digit.textContent ="Wrong"
    digit.style.color='red';

  }
}
function reset(){
    digit.textContent=' '
    digit.style.color='black';
}


 
  

  

