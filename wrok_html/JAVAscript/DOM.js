console.log(Document);
var mydata = document.getElementsByTagName('h1');
console.log(mydata)

var mydata2 = document.getElementsByClassName('firsthead.');
console.log(mydata2);
mydata2.textContent="goooood morning"




var mydata3 = document.getElementById('paragraph');
console.log(mydata3);
mydata3.textContent="hello kdkdkd"
var mydata4 = document.querySelector('#paragraph')


    var val = 0;
    function change(){
    var mydata5= document.getElementById('head');
    val++;
    mydata5.textContent=val}

    var inc=0;
    function fullform(){
        var mydata6= document.getElementById('value');
        inc++;
        mydata6.textContent = "American standard of information interchange"
    }