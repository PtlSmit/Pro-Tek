
const myDiv = document.createElement("div");
myDiv.style.width = "500px";
myDiv.style.height = "500px";
myDiv.style.border = "1px solid red";
document.body.appendChild(myDiv);
myDiv.addEventListener("mouseover", moveDiv);
function moveDiv(){
    let pixels = Math.floor(Math.random() * (150 - 30 + 1)) + 30;
    const direction = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    console.log(pixels, direction);
    if (direction == 1)
    {
        myDiv.style.marginTop = `${pixels}px`;
    }
    else if(direction == 2)
    {
        myDiv.style.marginRight = `${pixels}px`;
    }
    else if(direction == 3)
    {
        myDiv.style.marginBottom = `${pixels}px`;
    }
    else if(direction == 4)
    {

        myDiv.style.marginLeft = `${pixels}px`;
        
    }
}