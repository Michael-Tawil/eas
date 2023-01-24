const CONT = document.getElementById("container");
CONT.style.border = "1px solid black";
let ccount = document.getElementById("ccount");
let btnreset = document.getElementById("btnre");
let btnblck = document.getElementById("btnblck");
let btnrandom = document.getElementById("btnrandom");
let cellcount;
let totalgrid;
let color = "black";


function createcell(cell) {

    CONT.style.gridTemplateRows = (`repeat(${cellcount}, 1fr`);
    CONT.style.gridTemplateColumns = (`repeat(${cellcount}, 1fr`);
    for (let i = 0; i < totalgrid; i++){
    let cell = document.createElement('div');
    cell.addEventListener('mouseover', setColor);
    cell.style.border = "1px solid black";
    CONT.insertAdjacentElement('beforeend',cell);
    }
}

function UpdateVal(e) {

    cellcount = e.target.value;
    totalgrid = cellcount*cellcount;
    CONT.innerHTML ="";
    if (cellcount <= 100){
    createcell();
    }else{
        alert("Pick a number lower than 100");
        ccount.value="";
    }
}

function setColor(){

    if (color === 'random' ){

        this.style.backgroundColor = `hsl(${Math.random()*360},100%,50%)`;
    }else{

        this.style.backgroundColor = color;
    }
    
}

function Ccolor(choice){
    color = choice;
    
}

function Reset(e){

    CONT.innerHTML ="";
    ccount.value="";
    color = "black";
}

ccount.addEventListener("keyup",UpdateVal);
btnreset.addEventListener("click",Reset);

