// display content in calcScreen
const displayContent = (content)=>{
    calcScreen.value += content
}

//clear content of calcScreen
const clearAllContent = ()=>{
    calcScreen.value = ""
    calcScreen.placeholder = "0"
}

//result display in calcScreen
const showResult = ()=>{
    try{
        console.log("TRY Block");
        calcScreen.value = eval(calcScreen.value)
    }catch(err){
        console.log("CATCH Block");
        console.log(err);
        calcScreen.value = ""
        calcScreen.placeholder = "Invalid Expression!!!"
    }finally{
        console.log("Finally Block : Task completed");
    }
}

//removeLast
const removeLast = ()=>{
    console.log("Delete Operation");
   calcScreen.value = calcScreen.value.slice(0,-1)
}