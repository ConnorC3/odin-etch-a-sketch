// get elements
const container = document.querySelector(".container");
const gridButton = document.querySelector(".change-grid");

let numSquares = 16;

gridButton.addEventListener("click", () => {
    input = prompt("Change grid size: ");
    numSquares = parseInt(input)
});


for (let i = 0; i < numSquares; i++){
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square);

    square.addEventListener("mouseover", () => changeColor(square), {
        once: true
    });
}

function changeColor(elem){
    elem.classList.add("active");
}