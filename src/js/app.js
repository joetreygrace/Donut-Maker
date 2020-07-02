const donut = new Donut();
const donutButton = document.querySelector(".donut-button");
const clickerButton = document.querySelector(".clicker-button");
const multiplierButton = document.querySelector(".multiplier-button");

donutButton.addEventListener("click", () => {
  event.preventDefault();
  donut.donutClick();
  donut.updateDonutCount();
});

clickerButton.addEventListener("click", () => {
  event.preventDefault();
  donut.buyAutoClicker();
  donut.updateAutoClicker();
  donut.updateDonutCount();
});

multiplierButton.addEventListener("click", () => {
  event.preventDefault();
  donut.buyMultiplier();
  donut.updateDonutMultiplier();
  donut.updateDonutCount();
});

function autoClick() {
  for (let i = 0; i < donut.autoClickers; i++) {
    donut.donutClick();
  }
  donut.updateDonutCount();
}

setInterval(autoClick, 1000);
