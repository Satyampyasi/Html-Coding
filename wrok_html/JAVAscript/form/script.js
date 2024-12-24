
const nameInput= document.getElementById('name').value
const emailInput = document.getElementById("email").value
const passwordInput = document.getElementById("pws").value
const confirmPasswordInput = document.getElementById("agn").value

let form = document.getElementById('myForm')
form.addEventListener('submit',function(e){
e.preventDefault()
    if(nameInput.trim().length < 6){
        alert("name can not less than 6 character")
    }
    if(!( emailInput.match("^S+@S+.S{3}+$"))){
        document.getElementById('passwordMatchError').textContent="Please enter valid email"
    }
    if(passwordInput!=passwordInput2){
        alert("Passwords are not matching");
    }
})

function showpas() {
    var passwordInput = document.getElementById('pws');
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function showpasConfirm() {
    var confirmPasswordInput = document.getElementById('agn');
    if (confirmPasswordInput.type === "password") {
        confirmPasswordInput.type = "text";
    } else {
        confirmPasswordInput.type = "password";
    }
}


