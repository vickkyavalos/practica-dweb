
function updateName(){
    let name = prompt('escribe tu nombre');
    para.textContent =   `Player 1: ${name}` ;
  }

  const para = document.querySelector('p');
para.addEventListener('click', updateName);


document.addEventListener("DOMContentLoaded", function() {
    function crearParrafo(){
        let parrafo = document.createElement('p');
        parrafo.textContent = `Bienvenido Usuario. ${4 + 3}`;
        document.body.appendChild(parrafo);
    }

    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', crearParrafo);
    }
});


