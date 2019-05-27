var btnAdd = document.getElementById("btnAdd");
var userInput = document.getElementById("userInput");
var btnClear = document.getElementById("btnClear");
var inputResults = document.getElementById("inputResults");

btnAdd.onclick = add;
btnClear.onclick = clear;

function add(){
    if (userInput.value == ""){
        return;
    }
    else{
        var myNewItemId = 10;

        var newItem = document.createElement("li");
        var newButton = document.createElement("button");
        
        newButton.classList.add("delete");
        newButton.appendChild(document.createTextNode("DELETE"));
        newButton.onclick = myOnClick;

        newItem.setAttribute("id", myNewItemId);
        newItem.appendChild(document.createTextNode(userInput.value));
        newItem.appendChild(newButton);
        
        inputResults.appendChild(newItem);
    }
}

function myOnClick(){
    this.parentNode.parentNode.removeChild(this.parentNode);
    
    return false;
} 



function clear(){
inputResults.innerHTML = "";
}
   
