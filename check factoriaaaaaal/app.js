function mydata(){
    let i = document.getElementById('taker').value;
    let res = 1;
    let result2 = document.getElementById('result-shower');
    
       
    for(i;i>0;i--){
         res = res*i;
    }
    
    
   

    if (i==="") {
        result2.innerText="please enter a number first";
    }else{
        document.getElementById('res-2').innerHTML="your factorial is:"
        result2.innerHTML=res;

    }
    console.log(1.1240007277776077e+21);
}