const form=document.getElementById('signupForm');function setInvalid(id,invalid){const field=document.getElementById(id).closest('.field');if(!field)return;field.classList.toggle('invalid',invalid);}const emailOk=v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);const numericOk=v=>/^\d{6,}$/.test(v.replace(/\D/g,''));form.addEventListener('submit',(e)=>{e.preventDefault();let ok=true;const tipo=document.getElementById('tipoDoc').value||'';setInvalid('tipoDoc',!tipo);ok=ok&&!!tipo;const num=document.getElementById('numDoc').value.trim();const numValid=numericOk(num)&&num.length>=8&&num.length<=12;setInvalid('numDoc',!numValid);ok=ok&&numValid;['nombre','apPaterno','apMaterno'].forEach(id=>{const v=document.getElementById(id).value.trim();const valid=v.length>0;setInvalid(id,!valid);ok=ok&&valid;});const cel=document.getElementById('celular').value.replace(/\D/g,'');const celValid=cel.length>=9&&cel.length<=15;setInvalid('celular',!celValid);ok=ok&&celValid;const mail=document.getElementById('correo').value.trim();const mailValid=emailOk(mail);setInvalid('correo',!mailValid);ok=ok&&mailValid;const pass=document.getElementById('pass').value;const passValid=pass.length>=8;setInvalid('pass',!passValid);ok=ok&&passValid;const tyc=document.getElementById('tyc').checked;if(!tyc){alert('Debes aceptar los términos y condiciones.');ok=false;}if(ok){alert('¡Cuenta creada con éxito!');form.reset();}});
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
