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

    const title = rouletteItems[targetIndex].querySelector('.roulette-item-title').textContent;
    const img = rouletteItems[targetIndex].querySelector('img').src;

    console.log(title);
    console.log(img);

    document.querySelector('.winner-title').textContent = title;
    document.querySelector('.winner-img img').src = img;

    document.querySelector('#winner').classList.add('open');
    document.querySelector('#winner').classList.add('win');
  }, 10400);
}
// Функция прокрутки


// Кнопка
document.querySelector('.roulette-button').addEventListener('click', function(e){
  var container = document.querySelector('.roulette__box');

  var giftBox = document.getElementById("GiftBox");
  giftBox.remove();


  var imgElement = document.createElement('img');
  imgElement.src = 'img/gift-box.gif';
  imgElement.alt = '';
  // imgElement.style.transform = 'scale(0)';
  imgElement.style.transition = 'all 0.25s ease';
  

  container.appendChild(imgElement);

  // setTimeout(function() {
  //   imgElement.style.transform = 'scale(1)';
  // }, 50);

  setTimeout(function() {
    rollRoulette(80);
    imgElement.style.opacity = '0';

  }, 2800);
})