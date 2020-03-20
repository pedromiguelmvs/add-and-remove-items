var inputElement = document.querySelector('input[name=input]');
var btnElement = document.querySelector('button[name=botao]');
var ulElement = document.querySelector('ul[id=lista]');
var removeBtnElement = document.querySelector('button[name=excluir]');

function addItem(){
    if (inputElement.value == "") {
        alert('Digite um valor válido!');
    } else {
        var liElement = document.createElement('li');
        var text = document.createTextNode(inputElement.value);
        liElement.appendChild(text);
        ulElement.appendChild(liElement);
        inputElement.value = "";
        saveToStorage();
    }
}

function removeItem(){
    var liElement = document.querySelector('ul[id=lista] li');
    ulElement.removeChild(liElement);
    saveToStorage();
    // if (liElement.parentNode){
    //     liElement.parentNode.removeChild(liElement);
    // }
}

function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(ulElement.children));
}

removeBtnElement.onclick = function(){
    return removeItem();
}

btnElement.onclick = function(){
    return addItem();
}

inputElement.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  var liElement = document.querySelector('ul[id=lista] li');
  if (key == 13) {
        return addItem();
  } else if (key == 8 && inputElement.value == ""){
        return removeItem();
  }
});