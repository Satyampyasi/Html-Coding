
 const button = document.querySelector(".btn");
 const resultDiv = document.getElementById("result");
 let maininfo = async() =>{
   {
     try{
          const response =  await fetch("userData.json");
       
          const data = await response.json();

           data.forEach((p)=>{
           const paragraph =  document.createElement("p");
           paragraph.textContent=p.name;
           resultDiv.appendChild(paragraph);
           console.log(data);
          });
      }
      catch(error) {alert(error);}  
  }
  
 }
  button.addEventListener('click',maininfo);
  