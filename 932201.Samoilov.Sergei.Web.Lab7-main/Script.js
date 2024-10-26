function circle() {
    let numberOfCircle = parseInt(getNumberOfItem());
    for(let i = 0; i < numberOfCircle; i++) {
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.classList.add("circle");
        
        item.style.height = size + "px";
        item.style.width = size + "px";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of circle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('click', (event) => 
{event.target.style.backgroundColor = 'rgba(255, 255, 0, 0.90)'});
        item.addEventListener('dblclick', (event) => {event.target.remove();});

        document.body.appendChild(item);
    }
}

function rectangle() {
    let numberOfRectangle = parseInt(getNumberOfItem());
    for(let i = 0; i < numberOfRectangle; i++) {  
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.classList.add("rectangle");
        
        item.style.height = size + "px";
        item.style.width = size + "px";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of rectangle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('click', (event) => 
{event.target.style.backgroundColor = 'rgba(0, 145, 255, 0.90)'});
        item.addEventListener('dblclick', (event) => {event.target.remove();});

        document.body.appendChild(item);
    }
}

function triangle() {
    let numberOfTriangle = parseInt(getNumberOfItem());
    for(let i = 0; i < numberOfTriangle; i++) {
        let size = getRandomSize();
        let x = getRandomPosition("x");
        let y = getRandomPosition("y");

        var item = document.createElement("div");
        item.classList.add("triangle");
        
        item.style.height = 0 + "px";
        item.style.width = 0 + "px";
        item.style.borderRight = size + "px solid transparent";
        item.style.borderLeft = size + "px solid transparent";
        item.style.borderBottom = size + "px solid rgba(0, 0, 255, 0.90)";

        item.style.position = "absolute";
        item.style.left = x + "px";
        item.style.top = y + "px";

        console.log("Size of triangle: " + size);
        console.log("X: " + x);
        console.log("Y: " + y);

        item.addEventListener('click', (event) => {
            event.target.style.borderBottom = size + "px solid rgba(140, 0, 255, 0.90)";
        });
        item.addEventListener('dblclick', (event) => {event.target.remove();});

        document.body.appendChild(item);
    }
}

function getNumberOfItem() {
    return document.getElementById("numberOfItems").value;
}

function getRandomSize() {
    return Math.floor(Math.random() * 400) + 50;
}

function getRandomPosition(of) {
    switch (of) {
        case 'x':
            console.log(window.screen.width)
            return Math.floor(Math.random() * window.screen.width * 0.35);
        case 'y':
            return Math.floor(Math.random() * window.screen.height * 0.35) + 100;
    }
}