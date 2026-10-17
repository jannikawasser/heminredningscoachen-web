const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
function closeMenu() { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }
menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menu.focus(); } });
document.querySelector('#year').textContent = new Date().getFullYear();
const serviceMenus = document.querySelectorAll('.nav-services');
document.addEventListener('click', event => { serviceMenus.forEach(details => { if (!details.contains(event.target)) details.open = false; }); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => serviceMenus.forEach(details => { details.open = false; })));
document.addEventListener('keydown', event => { if (event.key === 'Escape') serviceMenus.forEach(details => { if (details.open) { details.open = false; details.querySelector('summary').focus(); } }); });
const copyBooking = document.querySelector('#copy-booking');
if (copyBooking) copyBooking.addEventListener('click', async () => {
  const message = document.querySelector('#booking-message');
  const status = document.querySelector('#booking-copy-status');
  try { await navigator.clipboard.writeText(message.value); status.textContent = 'Texten är kopierad. Klistra in den i ett mejl till hej@heminredningscoachen.se.'; }
  catch { message.focus(); message.select(); status.textContent = 'Markera och kopiera texten här ovanför och klistra in den i ditt mejl.'; }
});
