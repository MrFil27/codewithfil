// ----- mobile nav toggle -----
const navlinks = document.getElementById('navlinks');
const navtoggle = document.getElementById('navtoggle');
navtoggle.addEventListener('click', () => navlinks.classList.toggle('open'));
navlinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navlinks.classList.remove('open')));

// ----- skills IDE explorer -----
const treeItems = document.querySelectorAll('#skillTree .tree-item');
const skillBlocks = document.querySelectorAll('.skill-block');
treeItems.forEach(item => {
    item.addEventListener('click', () => {
        treeItems.forEach(i => i.classList.remove('active'));
        skillBlocks.forEach(b => b.classList.remove('active'));
        item.classList.add('active');
        document.getElementById(item.dataset.target).classList.add('active');
    });
});

// ----- footer year -----
document.getElementById('year').textContent = new Date().getFullYear();

// ----- contact form (Google Sheet endpoint, da mantenere o sostituire) -----
const scriptURL = 'https://script.google.com/macros/s/AKfycbyeXu86g9wAgDF_kDZlTU-zEMJnlPlD7Udp5WaIbhZCT-VutI91aGwNqruESLN6lTcEJw/exec';
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(() => { form.reset(); })
        .catch(err => console.error('Errore invio form:', err));
});