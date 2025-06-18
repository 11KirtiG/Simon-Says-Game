let gameseq=[];
let userseq=[];
let high = 0;

let started = false;
let level = 0;
let h2=document.querySelector("h2");
let highestscore = document.querySelector("h3");
let btns = ["first","sec","third","fourth"];

document.addEventListener("keypress",function(){
if(started == false){
    started = true;
    console.log("started");
    levelUp();
}
started=true;
});

function checkAns(idx){
    
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp,1000);
            
        }
    }else{
        document.querySelector("body").style.backgroundColor = "red";
        
        high = Math.max(high,level);       
        highestscore.innerText = `Your highest score is ${high}`;
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>Press any key to start again`;
        reset();
    }
 
}

function btnPress(btn){
    let cbtn = this;
    userflash(cbtn);
     
     let userColor = cbtn.getAttribute("id");
     userseq.push(userColor);
    console.log(userseq);
     checkAns(userseq.length-1);
    

}

let allbtn = document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnPress);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText=`Level ${level}`;
    randomNo = Math.floor(Math.random()*4);
    console.log(btns[randomNo]);
    let randomcolor = btns[randomNo];
    let randombtn = document.querySelector(`.${btns[randomNo]}`)
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randombtn);
}
function gameflash(btn){
    console.log(btn);
    btn.classList.add("gameflash");
    setTimeout(function(){
        btn.classList.remove("gameflash");
    },250);
}
function userflash(btn){
    console.log(btn);
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}
 
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}


