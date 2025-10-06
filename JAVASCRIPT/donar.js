const chips=document.getElementById('chips');const other=document.getElementById('otro');const amountText=document.getElementById('amountText');const breakdown=document.getElementById('breakdown');function setAmount(n){const amount=isNaN(n)?0:Math.max(0,Number(n));amountText.textContent=`S/ ${amount.toLocaleString('es-PE')}`;breakdown.textContent=amount>0?`Donación seleccionada`:'';}chips.addEventListener('click',(e)=>{const chip=e.target.closest('.chip');if(!chip)return;[...chips.children].forEach(c=>c.classList.remove('active'));chip.classList.add('active');other.value=`S/ ${chip.dataset.value}`;setAmount(Number(chip.dataset.value));});other.addEventListener('input',()=>{const raw=other.value.replace(/[^\d.]/g,'');const val=raw?Number(raw):0;setAmount(val);[...chips.children].forEach(c=>c.classList.remove('active'));});other.addEventListener('blur',()=>{const raw=other.value.replace(/[^\d.]/g,'');const val=raw?Number(raw):0;other.value=val?`S/ ${val}`:'';});const numero=document.getElementById('numero');numero.addEventListener('input',()=>{let v=numero.value.replace(/\D/g,'').slice(0,16);numero.value=v.replace(/(\d{4})(?=\d)/g,'$1 ').trim();});const venc=document.getElementById('venc');venc.addEventListener('input',()=>{let v=venc.value.replace(/\D/g,'').slice(0,4);if(v.length>=3)v=v.slice(0,2)+'/'+v.slice(2);venc.value=v;});const cvv=document.getElementById('cvv');cvv.addEventListener('input',()=>{cvv.value=cvv.value.replace(/\D/g,'').slice(0,4);});other.value='S/ 500';setAmount(500);document.getElementById('enviar').addEventListener('click',()=>{const amount=Number(document.getElementById('amountText').textContent.replace(/[^\d.]/g,''))||0;const name=document.getElementById('titular').value.trim();const card=numero.value.replace(/\s/g,'');const mmYY=venc.value.trim();const cv=cvv.value.trim();if(amount<=0){alert('Selecciona o ingresa un monto válido.');return;}if(!name){alert('Ingresa el nombre del titular.');return;}if(card.length<13){alert('Número de tarjeta inválido.');return;}if(!/^\d{2}\/\d{2}$/.test(mmYY)){alert('Vencimiento inválido. Usa MM/AA.');return;}if(cv.length<3){alert('CVV inválido.');return;}alert(`¡Gracias! Se registró una donación de S/ ${amount.toLocaleString('es-PE')}.`);});
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
