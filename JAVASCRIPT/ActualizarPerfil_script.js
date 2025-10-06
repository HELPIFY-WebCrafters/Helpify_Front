const form = document.getElementById('signupForm');

function setInvalid(id, invalid) {
  const el = document.getElementById(id);
  if (!el) return;
  const field = el.closest('.field');
  if (field) {
    field.classList.toggle('invalid', invalid);
  } else {
    el.classList.toggle('invalid', invalid);
  }
}

const emailOk = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const numericOk = v => /^\d{6,}$/.test(v.replace(/\D/g, ''));

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let ok = true;
  let firstInvalid = null;
  const tipo = document.getElementById('tipoDoc').value || '';
  setInvalid('tipoDoc', !tipo);
  if (!tipo) firstInvalid = firstInvalid || document.getElementById('tipoDoc');
  ok = ok && !!tipo;
    const num = document.getElementById('numDoc').value.trim();
  const numValid = numericOk(num) && num.length >= 8 && num.length <= 12;
  setInvalid('numDoc', !numValid);
  if (!numValid) firstInvalid = firstInvalid || document.getElementById('numDoc');
  ok = ok && numValid;
  ['nombre', 'apPaterno', 'apMaterno'].forEach(id => {
    const v = document.getElementById(id).value.trim();
    const valid = v.length > 0;
    setInvalid(id, !valid);
    if (!valid) firstInvalid = firstInvalid || document.getElementById(id);
    ok = ok && valid;
  });

   const cel = document.getElementById('celular').value.replace(/\D/g, '');
  const celValid = cel.length >= 9 && cel.length <= 15;
  setInvalid('celular', !celValid);
  if (!celValid) firstInvalid = firstInvalid || document.getElementById('celular');
  ok = ok && celValid;

    const mail = document.getElementById('correo').value.trim();
  const mailValid = emailOk(mail);
  setInvalid('correo', !mailValid);
  if (!mailValid) firstInvalid = firstInvalid || document.getElementById('correo');
  ok = ok && mailValid;

    const pass = document.getElementById('pass').value;
  const passValid = pass.length >= 8;
  setInvalid('pass', !passValid);
  if (!passValid) firstInvalid = firstInvalid || document.getElementById('pass');
  ok = ok && passValid;

    const tyc = document.getElementById('tyc').checked;
  if (!tyc) {
    alert('Debes aceptar los términos y condiciones.');
    ok = false;
  }
  if (!ok) {
    if (firstInvalid && typeof firstInvalid.focus === 'function') firstInvalid.focus();
    return;
  }
  // Si todo OK
  alert('¡Perfil actualizado con éxito!');
  form.reset();
  // limpiar clases invalid
  document.querySelectorAll('.invalid').forEach(n => n.classList.remove('invalid'));
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
