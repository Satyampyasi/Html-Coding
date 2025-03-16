const main =document.getElementById("main")
const body = document.body;
const div= document.createElement("div");
const strong = document.createElement("strong")
strong.innerHTML= "<br>hello world welcome";
div.textContent = "This is inside a div";
main.append(strong,div); 