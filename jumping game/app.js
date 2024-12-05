let body = document.querySelector("body");



var play = 0;

var playerrr= document.querySelector(".player");

document.addEventListener("keydown",function(key){
    

     if(key.key=="W" || key.key=="w" ||key.keyCode==38 ){
        document.querySelector(".player").classList.add("ani");
        
     }

     setTimeout(() => {
        document.querySelector(".player").classList.remove("ani");
    }, 500);


})

body.addEventListener("click",()=>{
      
    document.querySelector(".player").classList.add("ani");

    setTimeout(() => {
        document.querySelector(".player").classList.remove("ani");
    }, 1000);

})



var pass=true;
var score=0;
var scoreval = document.getElementById("score");
setInterval(() => {

    var player = document.querySelector(".player");
    var obstacle = document.querySelector(".obstacle");

    playerleft = parseInt( window.getComputedStyle(player,null).getPropertyValue("left"));
    obsleft = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    
    
    playeTop = parseInt( window.getComputedStyle(player,null).getPropertyValue("bottom"));
    obstop = parseInt( window.getComputedStyle(obstacle,null).getPropertyValue("bottom"));



    diffleft = Math.abs(obsleft-playerleft);
    difftop = Math.abs(playeTop-obstop);

   

    if(diffleft<80 && difftop<90){
        
        chance = false;
       document.querySelector(".msg").classList.remove("hide");
       obstacle.classList.remove("move")

    }else if(diffleft<35 && pass){
        score += 1;
        scoreval.innerHTML=score;
           pass=false;
    }setTimeout(() => {
        pass =true;
    }, 1000);
  


}, 100);

var player = document.querySelector(".player");
var obstacle = document.querySelector(".obstacle");

function reset(){
    obstacle.classList.add("move")
    document.querySelector(".msg").classList.add("hide");
    score=0;
    scoreval.innerHTML=score;
}

