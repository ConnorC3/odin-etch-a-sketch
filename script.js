// get elements
const container = document.querySelector(".container");
const containerWidth = container.clientWidth;
const gridButton = document.querySelector(".change-grid");

function createGrid(size) {
    // reset grid
    container.innerHTML = "";

    // create grid
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = `${containerWidth / size}px`;
        cell.style.height = `${containerWidth / size}px`;

        //add hover functionality
        cell.addEventListener("mouseover", () => {
            let currOpacity = cell.style.opacity;

            // randomly generated color
            // let red = Math.floor(Math.random()*256);
            // let blue = Math.floor(Math.random()*256);
            // let green = Math.floor(Math.random()*256);
            // cell.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
            
            // black colored cell
            cell.style.backgroundColor = "black";

            if (currOpacity){
                cell.style.opacity = Number(currOpacity) + 0.1;
            } else {
                cell.style.opacity = 0.1;
            }
        });

        //add cell to container
        container.appendChild(cell);
    }

    // update grid size info
    const gridInfo = document.querySelector("span.grid-info");
    gridInfo.textContent = `${size}x${size}`;
}

gridButton.addEventListener("click", () => {
    input = parseInt(prompt("Change grid size (0-100): "));
    if (input > 0 && input <= 100) {
        createGrid(input);
    } else {
        alert("Please enter a size greater than 0 and less than 100")
    }
});

createGrid(16);