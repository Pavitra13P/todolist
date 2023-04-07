const toDoList = document.getElementsByClassName("todoList")[0];
const input = document.getElementById("input");
const trashIcon=document.getElementById('trash');
const deleteAllBtn = document.querySelector(".footer button");

input.addEventListener("keydown",function(e){
    if(e.key === "Enter")
    addItem();
})

function addItem(){
    var divParent  = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement('i')
    var trashIcon = document.createElement('i')
    

    divParent.className = 'item';
    divParent.innerHTML=input.value;
    
    checkIcon.className="fa fa-check-square";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener('click',function(){
        checkIcon.style.color="darkgreen";
    })

    divChild.appendChild(checkIcon);
    trashIcon.className="fas fa-trash";
    trashIcon.style.color = "black";

    trashIcon.addEventListener('click',function(){ 
        divParent.remove();
    })

    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);

    toDoList.appendChild(divParent);
    input.value="";

}
//deleting all tasks while we click on the clear button

deleteAllBtn.addEventListener('click',()=> {
    toDoList.innerHTML ="";
});
