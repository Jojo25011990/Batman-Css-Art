'use strict';

// *** Select Elements ***
const section01 = document.getElementById('section-01');
const houses = document.querySelectorAll('.house');
// *** End of Select Elements ***

// *** Stars ***
const starStyle = {
  backgroundColor: 'white',
  width: 3 + 'px',
  height: 3 + 'px',
  borderRadius: 50 + '%',
  position: 'absolute',
};

const stars = 1000;
let i = 0;

while (i < stars) {
  const star = document.createElement('div');
  Object.assign(star.style, starStyle);
  let starX = Math.floor(Math.random() * window.innerWidth);
  let starY = Math.floor(Math.random() * window.innerHeight);

  star.style.left = `${starX}px`;
  star.style.top = `${starY}px`;
  section01.appendChild(star);
  i++;
}
// *** End of Stars ***

// *** Houses ***
houses.forEach(house => {
  // *** Windows ***
  let i = 0;
  const windowsCount = 3;

  while (i < windowsCount) {
    const windowEl = document.createElement('div');
    windowEl.classList.add('window');
    windowEl.style.top = i * 20 + 10 + '%';
    house.appendChild(windowEl);
    i++;
  }
  // *** End of Windows ***
});

// *** End of Houses ***
