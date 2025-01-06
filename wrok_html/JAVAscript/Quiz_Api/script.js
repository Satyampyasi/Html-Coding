let getinfo = async () => {
  try {
    const response = await fetch("QuizQuestion.json");
    const data = await response.json();
    console.log(data);
  } 
  
  catch (error) {
    console.error("Error fetching data:", error);
  }
}

window.getinfo = getinfo;