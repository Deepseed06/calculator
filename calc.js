let result = document.getElementById('inputfield');

let calculate=(number)=>{
    result.value+=number;
}

let Result=()=>{
    try{
        result.value = eval(result.value)
    }
   
    catch (err){
        result.value='error';
    }
}

let clr=()=>{
    result.value='';
}
let del=()=>{
    result.value = result.value.slice(0,-1); 
}