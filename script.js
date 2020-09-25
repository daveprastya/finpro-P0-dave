//sandhika galih INspired

const pipa = document.querySelectorAll('.pipa');
const mantan = document.querySelectorAll('.mantan');
const score = document.querySelector('.Pscore');
const eSound = document.querySelector('.sound');
const bSound = document.querySelector('#backsound');

let before;
let stop;
let count;

function randomtime (min, max){
  return Math.round(Math.random() * (max - min) + min);
}

function randomNum (pipa){
  const index = Math.floor(Math.random() * pipa.length);
  const eachpipa = pipa[index]; 
  if(eachpipa === before){
    randomNum(pipa);
  }
  before = eachpipa;
  return eachpipa;
}

function pipaPop (){
  const indexnum = randomNum(pipa);
  indexnum.classList.add('muncul');
  const waktuMuncul = randomtime(500, 1000);

  setTimeout(() => {
    indexnum.classList.remove('muncul');
    if(!stop){
      pipaPop();
    }
  }, waktuMuncul);
}

function start(){
  bSound.load();
  bSound.play();
  stop = false;
  count = 0;
  score.textContent = count;
  pipaPop();
  setTimeout(() => {
    bSound.pause();
    stop = true;
    alert(`Your Score ${count}`);
  }, 25000);
}

function hit(){
  eSound.play();
  count++;
  score.textContent = count;
  this.parentNode.classList.remove('muncul');
  // eSound.stop()
}

mantan.forEach(mt => {
  mt.addEventListener('click', hit);
});