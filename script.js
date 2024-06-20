
var input = document.getElementById("inputTag");
var ul = document.getElementById("list");

function add() {
    var inputValue = input.value.trim();
    if (inputValue !== "") {
        var listElement = document.createElement("li");
        listElement.innerHTML = inputValue + " <button onclick='deletelist(this)'>Delete</button>";
        ul.append(listElement);
        input.value = "";
    }
}

function deletelist(button) {
    var li = button.parentNode;
    li.remove();
}