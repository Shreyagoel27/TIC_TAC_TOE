
let music=new Audio("ting.mp3");
let gameover= new Audio("gameover.mp3");
let turn ="X";
let won=true;

const changeTurn =()=>{
    if(turn==="X")turn="O";
    else turn="X";
}

// check win
const checkwin=()=>{
    let boxes= Array.from(document.getElementsByClassName("boxtext"));
    if((boxes[0].innerText==='X' || boxes[0].innerText==="O") && boxes[0].innerText=== boxes[1].innerText && boxes[0].innerText===boxes[2].innerText)
    {
        boxes[0].style.backgroundColor="red";
        boxes[1].style.backgroundColor="red";
        boxes[2].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        
        won=false;
    }
    else if((boxes[0].innerText==='X' || boxes[0].innerText==="O") && boxes[0].innerText=== boxes[3].innerText && boxes[0].innerText===boxes[6].innerText)
    {
        boxes[0].style.backgroundColor="red";
        boxes[3].style.backgroundColor="red";
        boxes[6].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        
        won=false;
    }
    else if((boxes[3].innerText==='X' || boxes[3].innerText==="O") && boxes[3].innerText=== boxes[4].innerText && boxes[3].innerText===boxes[5].innerText)
    {
        boxes[3].style.backgroundColor="red";
        boxes[4].style.backgroundColor="red";
        boxes[5].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        won=false;
    }
    else if((boxes[6].innerText==='X' || boxes[6].innerText==="O") && boxes[6].innerText=== boxes[7].innerText && boxes[7].innerText===boxes[8].innerText)
    {
        boxes[6].style.backgroundColor="red";
        boxes[7].style.backgroundColor="red";
        boxes[8].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        won=false;
    }
    else if((boxes[1].innerText==='X' || boxes[1].innerText==="O") && boxes[1].innerText=== boxes[7].innerText && boxes[4].innerText===boxes[7].innerText)
    {
        boxes[7].style.backgroundColor="red";
        boxes[1].style.backgroundColor="red";
        boxes[4].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        won=false;
    }
    else if((boxes[0].innerText==='X' || boxes[0].innerText==="O") && boxes[0].innerText=== boxes[8].innerText && boxes[4].innerText===boxes[8].innerText)
    {
        boxes[0].style.backgroundColor="red";
        boxes[8].style.backgroundColor="red";
        boxes[4].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        won=false;
    }
    else if((boxes[2].innerText==='X' || boxes[2].innerText==="O") && boxes[2].innerText=== boxes[5].innerText && boxes[5].innerText===boxes[8].innerText)
    {
        boxes[5].style.backgroundColor="red";
        boxes[8].style.backgroundColor="red";
        boxes[2].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        console.log(x);
        won=false;
    }
    else if((boxes[2].innerText==='X' || boxes[2].innerText==="O") && boxes[2].innerText=== boxes[4].innerText && boxes[4].innerText===boxes[6].innerText)
    {
        boxes[6].style.backgroundColor="red";
        boxes[4].style.backgroundColor="red";
        boxes[2].style.backgroundColor="red";
        document.getElementsByClassName("info")[0].innerText=`${turn} Won`;
        gameover.play();
         document.getElementsByClassName("imgbox")[0].style.zIndex="1";
        console.log( document.getElementsByClassName("imgbox")[0]);
        let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="visible";
        won=false;
    }
}

//game logic

let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach((element ,i)=>{
   element.addEventListener('click',()=>{
      box=document.getElementsByClassName("boxtext")[i];
      if((box.innerText === '') && won)
    {   music.play();
        box.innerText=turn;
        checkwin();
        changeTurn();
        let text=document.getElementsByClassName("info")[0];
        if(won)
        {
            text.innerHTML=`turn for ${turn}`;
        }
    }
   })
})

let myInterval=setInterval(displayHello, 1000);

function displayHello() {
    let boxes= Array.from(document.getElementsByClassName("boxtext"));
    let v=0;
    for(let i=0;i<=8;i++)
    {
        if(boxes[i].innerText=='X' || boxes[i].innerText=='O')v++;
    }    
    if(v==9)document.getElementsByClassName("info")[0].innerText="Reset";
    console.log(v);
    
}


//reset
function set(){
    document.getElementsByClassName("imgbox")[0].style.zIndex="-1";
    console.log("huuu")
    Array.from(document.getElementsByClassName("boxtext")).forEach((element)=>{
        element.innerText="";
        element.style.removeProperty("background-color");
    });
    turn="X";
    document.getElementsByClassName("info")[0].innerText=`Turn for ${turn}`;
    let x=document.getElementsByClassName("imgbox")[0].getElementsByTagName("img")[0].style.visibility="hidden";
    won=true;
}






































