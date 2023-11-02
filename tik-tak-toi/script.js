console.log("Welcome To Tic Tac Toe")
let music = new Audio("disco.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("game.mp3")


let turn ="X"
let gameover=false;
//function to change the turn
const changeTurn = ()=>{
    return turn === "X" ? "0": "X"


}
//function to check win
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');

    let wins =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
    ]
wins.forEach(e=>{
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText!== "")){
        document.querySelector('.info').innerText=boxtext[e[0]].innerText + " Won"
        gameOver=true
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="260px"
    }
})

}
//Game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',()=>{
    if(boxtext.innerText===''){
       boxtext.innerText = turn;
      turn =  changeTurn();
        audioTurn.play();
        checkWin();
        if(!gameover){
            document.getElementsByClassName("turn")[0].innerText = "Turn for"+turn;

        }
      

    }
})



})
//Add onclick litener to reset 

reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText=""
    });
    turn="x";
    isgameover = false;
        document.getElementsByClassName("turn")[0].innerText = "Turn for"+turn;


})

