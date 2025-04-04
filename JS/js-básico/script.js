// const cambiar = document.querySelector("p");

// cambiar.addEventListener("click", updateName);

// function updateName() {
//   let name = prompt("Enter a new name");
//   cambiar.textContent = "Player 1: " + name;
// }


document.addEventListener("DOMContentLoaded", function (){
    function createP (){
        let para = document.createElement('p');
        para.textContent = "Clickeaste el boton";
        document.body.appendChild(para);
    }
    let buttons = document.querySelectorAll('button');

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", createP);
    }
  });
