const grid = document.getElementById("grid");
const clear = document.querySelector("button");

//when the user clicks clear reset all the boxes color to white.
clear.addEventListener("click", resetGrid => 
    {
        const boxes = grid.querySelectorAll("div");
        boxes.forEach(box => {
        box.style.backgroundColor = "white";
    });
    }
);
// changeSquareColor makes width * height boxes that changes their color from white to purple if you hoover over it.
function changeSquareColor()
{
    let box;
    let width = 16;
    let height = 16;

    grid.style.justifyContent = "flex-start";
    grid.style.alignItems = "flex-start";
// makes a hooverable box with each iteration with initial white color that doesn't exceed the grid limits.
    for(let i = 0; i < height * width; i++)
    {
        box = document.createElement("div");

        box.style.flex = `0 0 ${100 / width}%`; 
        box.style.height = `calc(100% / ${height})`; 

        box.style.backgroundColor = "white";
        //if hoover change color from white to purple
        box.addEventListener("mouseenter", (event) => {
            event.target.style.backgroundColor = "purple";
        });
        grid.appendChild(box);
    }
}
changeSquareColor();