onload = function() {
  home.style = styles
}

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function () {
  nextImage();
}, 5000)

function nextImage() {
  count ++;
  if ( count > 5) {
    count = 1;
  }

  document.getElementById("radio" + count).checked = true;

}

let listItem = document.querySelectorAll('.nav li')

function ativo () {
  listItem.forEach((index) => index.classList.remove('ativo'))
  this.classList.add('ativo')
  
}

listItem.forEach((event) => event.addEventListener('click', ativo))

let menuToggle = document.querySelector('.menuToggle')
let header = document.querySelector('.header-toggle')

menuToggle.onclick = function () {
  header.classList.toggle('ativo')
}

let styles = `
        border-bottom: solid;
        border-bottom-color: #ca8f61;
        border-bottom-width: 1px;`

let home = document.querySelector('.home')
let tecnologias = document.querySelector('.tecnologias')
let projetos = document.querySelector('.projetos')
let contato = document.querySelector('.contato')

home.addEventListener("click", clicar1)
tecnologias.addEventListener("click", clicar2)
projetos.addEventListener("click", clicar3)
contato.addEventListener("click", clicar4)

function clicar1(){
      home.style = styles,
      tecnologias.style = 'none',
      projetos.style = 'none',
      contato.style = 'none'
}

function clicar2(){
  home.style = 'none',
  tecnologias.style = styles,
  projetos.style = 'none',
  contato.style = 'none'
}

function clicar3(){
  home.style = 'none',
  tecnologias.style = 'none',
  projetos.style = styles,
  contato.style = 'none'
}

function clicar4(){
  home.style = 'none'
  tecnologias.style = 'none',
  projetos.style = 'none',
  contato.style = styles
}