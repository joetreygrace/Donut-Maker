const donut = new Donut();
const donutButton = document.querySelector('.donut-button');
const clickerButton = document.querySelector('.clicker-button');

donutButton.addEventListener('click', () => {
    event.preventDefault();
    donut.donutClick();
    donut.updateDonutCount();
});

clickerButton.addEventListener('click', () => {
    event.preventDefault();
    donut.buyAutoClicker();
    donut.updateAutoClicker();
    donut.updateDonutCount();
});