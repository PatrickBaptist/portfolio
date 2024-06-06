document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const listItem = document.querySelectorAll('.nav li');
  const menuToggle = document.querySelector('.menuToggle');
  const header = document.querySelector('.header-toggle');
  const el = document.querySelector("#content-title");
  const text = "Desenvolvedor FullStack.";
  const interval = 200;

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
  function showtext(el, text, interval) {
    var char = text.split("").reverse();
    var typer = setInterval(function () {
      if (!char.length) {
        return clearInterval(typer);
      }
      var next = char.pop();
      el.innerHTML += next;
    }, interval);
  }

  showtext(el, text, interval);
});