document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const listItem = document.querySelectorAll('.nav li');
  const menuToggle = document.querySelector('.menuToggle');
  const header = document.querySelector('.header-toggle')

  // IntersectionObserver para adicionar/remover classe 'in-view'
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      } else {
        entry.target.classList.remove('in-view');
      }
    });
  }, { threshold: 1 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Inicialização do Glide.js
  let glide = new Glide('.glide', {
    startAt: 0,
    type: 'carousel',
    perView: 3,
    breakpoints: {
      768: {
        perView: 2
      },
      532: {
        perView: 1
      }
    }
  }).mount();

  // Adicionar/remover classe 'ativo' nos itens do menu
  function ativo() {
    listItem.forEach(item => item.classList.remove('ativo'));
    this.classList.add('ativo');
  }

  listItem.forEach(item => item.addEventListener('click', ativo));

  // Toggle do menu
  menuToggle.onclick = function () {
    header.classList.toggle('ativo');
  };

  // Função para exibir texto com intervalo
  const el = document.querySelector("#content-title");
  const text = "Desenvolvedor FullStack.";
  const interval = 200;
  
  function showtext(el, text, interval) {
    let char = text.split("").reverse();
    let typer = setInterval(function () {
      if (!char.length) {
        return clearInterval(typer);
      }
      let next = char.pop();
      el.innerHTML += next;
    }, interval);
  }

  showtext(el, text, interval);
});