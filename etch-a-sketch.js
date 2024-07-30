function createGrid(n) {

    if (n <= 0) {
        console.log(`Invalid size: ${n}`);
        return;
    }

    let grid = document.querySelector(".container-grid");
    let square;
    let row;

    for (let i = 0; i < n; i++){

        row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < n; j++){
            square = createSquare();
            row.appendChild(square);           
        }

        grid.appendChild(row);
    }
        
}

function createSquare(){
    //creates one div square and returns a reference to it;

    let square = document.createElement("div");
    square.classList.add("square");


    square.addEventListener("mouseover", () => {colorSquare(square); });


    return square;

}

function colorSquare(square){
    square.style.backgroundColor = getRandomColor();

}

function getRandomColor(){
    let color = "#" + Math.floor(Math.random()*16777215).toString(16);
    console.log(color === "#ffffff");
    while (color === "#ffffff"){
        color = "#" + Math.floor(Math.random()*16777215).toString(16);
        console.log(color === "#ffffff");
    }

    return color;
}


function changeGridSize(){
    let btn = document.querySelector("button");

    btn.addEventListener("click", () => {
        let size = parseInt(prompt("Enter new grid size"));
        while (size > 100 || size <= 0) {
            size = parseInt(prompt("Invalid size! Enter new grid size"));
            
        }

        deleteGrid();
        createGrid(size);
        return;
    });
}

function deleteGrid(){
    let grid = document.querySelector(".container-grid");
    while (grid.firstChild) {
        grid.firstChild.remove();
    }






}





createGrid(16);
changeGridSize();


