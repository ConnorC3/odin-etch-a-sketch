// get elements
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const gridButton = document.querySelector(".change-grid");

function createGrid(size) {
    // reset grid
    container.innerHTML = "";

    // create grid
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square");
        square.style.width = `${containerWidth / size}px`;
        square.style.height = `${containerWidth / size}px`;

        //add hover functionality
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });

        //add square to container
        container.appendChild(square);
    }

    // update grid size info
    const gridInfo = document.querySelector("span.grid-info");
    gridInfo.textContent = `${size}x${size}`;
}

gridButton.addEventListener("click", () => {
    input = parseInt(prompt("Change grid size (<100): "));
    if (input <= 100) {
        createGrid(input);
    } else {
        alert("Please enter a size less than 100")
    }
});

createGrid(16);