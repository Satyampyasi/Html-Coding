 
function one ( call_two){
     console.log("Step 1 complete now call step 2")
     call_two();
};


function two (){
     console.log("Step 2")
}
one(two);
