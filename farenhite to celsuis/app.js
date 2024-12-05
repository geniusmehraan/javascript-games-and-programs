function tempratureConverter(){
    let celsuis = document.getElementById('taker').value;
    let farenhite = ((celsuis*9)/5+32);
    let result2 = document.getElementById('result-shower');
    
        document.getElementById('res-2').innerText="your farenhite is:";
    
    result2.innerText = farenhite;
 
if(celsuis==""){
    document.getElementById('res-2').style.fontSize=0;
    result2.innerText =" please enter a number first! ";
}else{
    document.getElementById('res-2').style.fontSize="";
}

} 