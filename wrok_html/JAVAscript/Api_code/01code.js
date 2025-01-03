
 
 document.addEventListener("DOMContentLoaded" ,async()=>{
 const resultDiv = document.getElementById("result");
   {
     try{
          const response =  await fetch("userData.json");
       
          const data = await response.json();

           data.forEach((p)=>{
           const paragraph =  document.createElement("p");
           paragraph.textContent=p.name;
           resultDiv.appendChild(paragraph);
          });
      }
      catch(error){
          alert(error);
      }
  }

 });
   