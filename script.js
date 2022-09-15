const CONT = document.getElementById("container");
CONT.style.display = "grid";
CONT.style.border = "1px solid black";
cellcount = 16;
totalgrid = cellcount*cellcount;

function createcell() {

    CONT.style.gridTemplateRows = (`repeat(${cellcount}, 1fr`);
    CONT.style.gridTemplateColumns = (`repeat(${cellcount}, 1fr`);

    for (let i = 0; i < totalgrid; i++){
    let cell = document.createElement('div');
    cell.style.border = "1px solid black";
    CONT.appendChild(cell);
    }
}

createcell()