var inputElement = document.querySelector('input[name=input]');
var btnElement = document.querySelector('button[name=botao]');
var ulElement = document.querySelector('ul[id=lista]');
var removeBtnElement = document.querySelector('button[name=excluir]');

function addItem(){
    var liElement = document.createElement('li');
    var text = document.createTextNode(inputElement.value);
    liElement.appendChild(text);
    ulElement.appendChild(liElement);
    inputElement.value = "";
}

function removeItem(){
    var liElement = document.querySelector('ul[id=lista] li');
    var removeElement = liElement.parentNode.removeChild(liElement);
}

removeBtnElement.onclick = function(){
    return removeItem();
}

btnElement.onclick = function(){
    return addItem();
}

inputElement.addEventListener('keyup', function(e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    return addItem();
  } else if (key == 8 && inputElement.value == ""){
      return removeItem();
  }
});