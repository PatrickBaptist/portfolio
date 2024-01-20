document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');

  function isInView(element) {
      const rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function updateOpacity() {
      sections.forEach(section => {
          if (isInView(section)) {
              section.classList.add('in-view');
          } else {
              section.classList.remove('in-view');
          }
      });
  }

  document.addEventListener('scroll', updateOpacity);
  window.addEventListener('resize', updateOpacity);

  updateOpacity();
});

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

let home = document.querySelector('.home')
let tecnologias = document.querySelector('.tecnologias')
let projetos = document.querySelector('.projetos')
let contato = document.querySelector('.contato')

let h = document.querySelector('.hover')
let h1 = document.querySelector('.hover1')
let h2 = document.querySelector('.hover2')
let h3 = document.querySelector('.hover3')
let h4 = document.querySelector('.hover4')
let h5 = document.querySelector('.hover5')
let h6 = document.querySelector('.hover6')
let h7 = document.querySelector('.hover7')
let h8 = document.querySelector('.hover8')
let h9 = document.querySelector('.hover9')


let img = document.getElementById('img')

img.style.backgroundImage = `url('/imagens/imagem1.jpg')`

h.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem1.jpg')`
})

h1.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem2.jpg')`
})

h2.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem3.jpg')`
})

h3.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem4.jpg')`
})

h4.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem5.jpg')`
})

h5.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem6.jpg')`
})

h6.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem7.jpg')`
})

h7.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/imagem8.jpg')`
})

h8.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/embreve.png')`
})

h9.addEventListener('mouseover', function() {
  img.style.backgroundImage = `url('/imagens/embreve.png')`
})