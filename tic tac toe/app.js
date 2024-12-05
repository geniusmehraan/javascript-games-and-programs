let boxes = document.querySelectorAll('#btn');
let reset = document.getElementById('reset');

let winsys = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [2,6,8],
    [2,4,6],
    [6,7,8],
    [3,4,5],
    [0,4,8],
    [1,4,7]
];

let text = document.querySelector('.text');
let contain = document.getElementById('container');

let chance = true;

const resetgame = ()=>{
     chance=true;
     document.querySelector('.text').classList.add("hide");
     enable();
}
const enable=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
    
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(chance==true){
           box.innerHTML="x";
           chance=false;
           
        }else{
            box.innerHTML="o";
            chance=true;
            box.style.color="blue";
        }
        checkingwin();
        box.disabled= true;
        
    })
   
    
})

const disabledbox = ()=>{
    for(let box of boxes){
        box.disabled=true;
    }
   
}
const showwin=(winner)=>{
    text.classList.remove("hide");
    text.innerText=`congratulatons, winner is ${winner} `;
    
    disabledbox();
}

const checkingwin = () => {
    for(let pattern of winsys){

         let vala = boxes[pattern[0]].innerText;
         let valb = boxes[pattern[1]].innerText;
         let valc = boxes[pattern[2]].innerHTML;

       
        if ( vala!="" && vala== valb && valb == valc) {
            
            
            showwin(vala);
            
            

         }  
         
         
    }
}
reset.addEventListener("click",resetgame);