// Botones "Ver más"
document.querySelectorAll('.btn-ver').forEach(button => {
  button.addEventListener('click', () => {
    alert('Próximamente se mostrará más información sobre esta pregunta.');
  });
});

// Script para menú hamburguesa responsivo
const openMenuBtn = document.querySelector('.open-menu');
const closeMenuBtn = document.querySelector('.close-menu');
const menuHorizontal = document.querySelector('.menu-horizontal');

openMenuBtn.addEventListener('click', () => {
  menuHorizontal.classList.add('menu_opened');
});

closeMenuBtn.addEventListener('click', () => {
  menuHorizontal.classList.remove('menu_opened');
});

// Opcional: cerrar menú al hacer click fuera del menú
window.addEventListener('click', (e) => {
  if (
    menuHorizontal.classList.contains('menu_opened') &&
    !menuHorizontal.contains(e.target) &&
    !openMenuBtn.contains(e.target)
  ) {
    menuHorizontal.classList.remove('menu_opened');
  }
});

