let boxes = document.querySelectorAll(".boxes");
let turnX = true;
let winnerConditon =[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]
]
boxes.forEach(box=>{
    box.addEventListener('click',()=>{
     if(turnX){
        box.innerText = "X";
        box.style.color = "red";
        turnX =false;
     }else{
        box.innerText = "O";
        box.style.color = "rgb(17,54,182)";
        turnX = true;
     }
     checkWinner();
    })
})
function checkWinner(){
for (let conditon of winnerConditon){
    let box1= boxes[conditon[0]].innerText;
    let box2= boxes[conditon[1]].innerText;
    let box3= boxes[conditon[2]].innerText;
    if(box1 !=="" && box2 !=="" && box3 !==""){
        if(box1  === box2 && box2 === box3){
            showResult(box1);
            
        }
    }
}
}
function showResult(result){

}