// Объявляем переменные

const roulette = document.querySelector('.roulette__items');
let rouletteItems = document.querySelectorAll('.roulette-item');

const numberOfRouletteItems = rouletteItems.length;

let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let rouletteItemWidth = (screenWidth < 500) ? 130 : (screenWidth < 800) ? 150 : 230;
let rouletteGap = (screenWidth < 500) ? 10 : 20;

window.addEventListener('resize', function() {
  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  rouletteItemWidth = (screenWidth < 500) ? 130 : (screenWidth < 800) ? 150 : 230;
  rouletteGap = (screenWidth < 500) ? 10 : 20;
});

// Объявляем переменные


// Распределяем элементы рулетки

for (let i = 0; i < numberOfRouletteItems; i++){
  rouletteItems[i].style = 'display: none';
  rouletteItems[i].classList.remove('roulette-item');
}
for (let i = 0; i < 100; i++){
  const randomNumber = Math.floor(Math.random() * numberOfRouletteItems);

  const randomContent = rouletteItems[randomNumber].innerHTML;
    
  const newElement = document.createElement('div');
  newElement.className = 'roulette-item';
  newElement.innerHTML = randomContent;
  
  roulette.appendChild(newElement);
}

//Распределяем элементы рулетки


// Функция прокрутки
function rollRoulette(rollTo){
  rouletteItems = document.querySelectorAll('.roulette-item');
  const scrollLength = (rouletteItemWidth * rollTo) + ((rollTo - 0) * rouletteGap);

  roulette.style= `transform: translate(-${scrollLength}px, 0px)`;

  setTimeout(function() {
    const targetIndex = (screenWidth < 1300) ? rollTo + 1 : rollTo + 2;
    rouletteItems[targetIndex].classList.add('active');
  }, 10400);
}
// Функция прокрутки



// Кнопка
document.querySelector('.roulette-button').addEventListener('click', function(e){
  rollRoulette(80);
})