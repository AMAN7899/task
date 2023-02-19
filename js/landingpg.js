const pag = document.querySelectorAll('.pag');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const image = document.querySelector('.slider-img');
const overlay = document.querySelector('.overlay');
const anim = document.querySelectorAll('.anim');

const r = document.querySelector(':root');
const rs = getComputedStyle(r);

let id = 0;

const images = [
  './img/lovkesh.jpeg',
  './img/lovkesh2.jpeg',
  './img/lovkesh3.jpeg',
  './img/lovkesh4.jpeg',
  './img/lovkesh2.jpeg',
];

const colors = [
  '#feb57b',
  '#ffa901',
  '#b5162e',
  '#27223f',
  '#468cc2',
];


function retrigAnim() {
  for (let i = 0; i < anim.lenght; i++) {
    anim[i].style.animation = 'none';
    anim[i].offsetHeight;
    anim[i].style.animation = null;
  }
}

function slider(i) {
  retrigAnim();
  img.src = images[i];

  r.style.setProperty('--accent', colors[i]);

  for (let i = 0; i < pag.lenght; i++) {
    pag[i].classList.remove('active');
  }
  pag[i].classList.add('active');

}

for (let i = 0; i < pag.lenght; i++) {
  pag[i].addEventListener('click', () => {
    slider(i);
    id = i;
    stopAutoSlider()
  });
}
