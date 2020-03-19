var inputElement = document.querySelector('input[name=input]');
var btnElement = document.querySelector('button[name=botao]');
var ulElement = document.querySelector('ul[id=lista]');
var removeBtnElement = document.querySelector('button[name=excluir]');
var referencia = document.querySelector('il[id=item_lista]');

function addItem(){
    var liElement = document.createElement('li');
    liElement.getAttribute('id', 'item_lista');
    var text = document.createTextNode(inputElement.value);
    liElement.appendChild(text);
    ulElement.appendChild(liElement);
    inputElement.value = "";
}

function removeItem(){
    // var referencia = referencia.nodeType();
    var removeElement = document.removeChild(referencia);
}

removeBtnElement.onclick = function(){
    return removeItem();
}

btnElement.onclick = function(){
    return addItem();
}

// removeBtnElement.onclick = function(){
//     var ulElement = document.removeChild(liElement);
// }