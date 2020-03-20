// Referenciando elementos HTML
var inputElement = document.querySelector('input[name=texto]');
var btnElement = document.querySelector('button[name=botao]');
var ulElement = document.querySelector('ul[name=lista]');
var aElement = document.querySelectorAll('a[name=link]');

// Adicionar novos elementos na lista
function addItem(){
    // Novo 'li' à ser adicionado à lista e o valor dele
    var liElement = document.createElement('li');
    var textElement = document.createTextNode(inputElement.value);
    liElement.appendChild(textElement);
    ulElement.appendChild(liElement);

    // Novo elemento 'a' e o valor dele
    var newA = document.createElement('a');
    var textA = document.createTextNode("Excluir");
    
    newA.appendChild(textA);
    liElement.appendChild(newA);
    
    // Propriedades de 'a'
    newA.setAttribute('name', 'link');
    newA.setAttribute('href', '#');
    
    // Limpando o input depois de enviar
    inputElement.value = "";
}

function removeItem(){
    var liElement = document.querySelector('ul[name=lista] li');
    var newAElement = document.querySelector('ul[name=lista] li a');
    liElement.parentNode.removeChild(newAElement);
    ulElement.parentNode.removeChild(liElement);
}

btnElement.onclick = function(){
    return addItem();
}

aElement.onclick = function(){
    return removeItem();
}