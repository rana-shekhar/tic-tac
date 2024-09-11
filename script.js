let boxes = document.querySelectorAll(".boxes");
let turn1 = document.querySelector(".turn1");
let turn2 = document.querySelector(".turn2");
let msg = document.querySelector(".msg");
let span = document.querySelector("#result");
let reset = document.getElementById("reset");
let newGame = document.getElementById("ng");
let turnX = true;
let gameActive = true;
let clickSound = new Audio("blip.mp3"); // Corrected file path for the click sound
let winnerSound = new Audio("winner.mp3"); // Corrected file path for the winner sound
let winnerConditon = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

reset.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";  
        box.classList.add("hover");  
        box.classList.remove("highlight"); // Remove any previous highlights
        gameActive = true;  
    });
    msg.classList.add("hide");  
    turnX = true;  
    turn1.classList.add("bs");  
    turn2.classList.remove("bs"); 
});

newGame.addEventListener('click', () => {
    boxes.forEach(box => {
        box.innerText = "";  
        box.classList.add("hover");  
        box.classList.remove("highlight"); // Remove any previous highlights
        gameActive = true;  
    });
    msg.classList.add("hide");  
    turnX = true;  
    turn1.classList.add("bs");  
    turn2.classList.remove("bs"); 
});

boxes.forEach(box => {
    box.addEventListener('click', () => {
        clickSound.play(); // Play the sound
        if (box.innerText === "" && gameActive) {  
            if (turnX) {
                box.innerText = "X";
                box.style.color = "red";
                turn2.classList.add("bs");
                turn1.classList.remove("bs");
                turnX = false;
            } else {
                box.innerText = "O";
                box.style.color = "rgb(17,54,182)";
                turn1.classList.add("bs");
                turn2.classList.remove("bs");
                turnX = true;
            }
            checkWinner();  
        }
    });
});

function checkWinner() {
    for (let condition of winnerConditon) {
        let box1 = boxes[condition[0]].innerText;
        let box2 = boxes[condition[1]].innerText;
        let box3 = boxes[condition[2]].innerText;

        if (box1 !== "" && box2 !== "" && box3 !== "") {
            if (box1 === box2 && box2 === box3) {
                showResult(box1);  
                winnerSound.play(); // Play the winner sound
                
                boxes.forEach(box => {
                    box.classList.remove("bs"); // Remove 'bs' class from all boxes
                });

                // Highlight the winning boxes
                boxes[condition[0]].classList.add("highlight");
                boxes[condition[1]].classList.add("highlight");
                boxes[condition[2]].classList.add("highlight");
                return;
            }
        }
    }
}

function showResult(result) {
    gameActive = false;  
    boxes.forEach(box => {
        box.classList.remove("hover");  
    });
    msg.classList.remove("hide");  
    span.innerText = result;  
}
