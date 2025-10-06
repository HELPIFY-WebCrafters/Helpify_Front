// Botón que alterna modo edición para los textos de las tarjetas
const btn = document.getElementById('editBtn');
const editables = document.querySelectorAll('.info-content');

btn?.addEventListener('click', () => {
  const enable = btn.dataset.mode !== 'on';
  editables.forEach(n => n.setAttribute('contenteditable', enable ? 'true' : 'false'));
  btn.dataset.mode = enable ? 'on' : 'off';
  btn.classList.toggle('is-active', enable);
  btn.textContent = enable ? 'Guardar' : 'Editar';
});

// (Opcional) Evitar saltos de estilo al pegar
editables.forEach(n => {
  n.addEventListener('paste', e => {
    e.preventDefault();
    const text = (e.clipboardData || window.clipboardData).getData('text/plain');
    document.execCommand('insertText', false, text);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form[name="frm"]');

  form.addEventListener("submit", (event) => {
    const usuario = form.elements["fname"].value.trim();
    const password = form.elements["flastname"].value.trim();

    if (!usuario || !password) {
      event.preventDefault();
      alert("Por favor, complete todos los campos del formulario");
    } else if (!validateEmail(usuario)) {
      event.preventDefault();
      alert("Por favor, ingrese un usuario válido (correo electrónico)");
    } else if (password.length < 6) {
      event.preventDefault();
      alert("La contraseña debe tener al menos 6 caracteres");
    }
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
