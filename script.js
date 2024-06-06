document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section')

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
          } else {
              entry.target.classList.remove('in-view')
          }
      });
  }, { threshold: 1 })

  sections.forEach(section => {
      observer.observe(section)
  })

  let glide = new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    peek: {
    gap: 30,
    before: 60,
    after: 60
    },
    breakpoints: {
      915: {
        perView: 3
      },
      704: {
        perView: 2
      },
      500: {
        perView: 1
      }
    }
  }).mount()

})

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

const el = document.querySelector("#content-title");
const text = "Desenvolvedor FullStack."
const interval = 200;

function showtext(el, text, interval) {
  var char = text.split("").reverse();
  
  var typer = setInterval(function() {
  
    if (!char.length) {
        return clearInterval(typer)
    }
    
    var next = char.pop();
    
    el.innerHTML += next;
    
  }, interval);
  
}

showtext(el, text, interval);