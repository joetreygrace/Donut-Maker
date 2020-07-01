class Donut {
  constructor() {
    this.count = 0;
    this.autoClickers = 0;
    this.autoClickersCost = 100;
  }
  donutClick() {
    this.count += 1;
  }
  buyAutoClicker() {
    this.count = Math.round((this.count)-(this.autoClickersCost));
    this.autoClickers += 1;
  }
  showAutoClickerButton(){
    clickerButton.classList.add("clicker-button-on");
  }
  hideAutoClickerButton(){
    clickerButton.classList.remove("clicker-button-on");
  }
  updateAutoClicker(){
      const numberOfClicker = document.querySelector(".amount-of-clickers");
      const clickerCost = document.querySelector(".clicker-cost");
      numberOfClicker.innerText = this.autoClickers;
      this.autoClickersCost = (this.autoClickersCost * 1.1);
      clickerCost.innerText = Math.round(this.autoClickersCost);
  }
  updateDonutCount() {
    const donutCount = document.querySelector(".amount-of-donuts");
    donutCount.innerText = Math.round(this.count);
    if((this.count)>=(this.autoClickersCost)){
      this.showAutoClickerButton();
    }if((this.count)<(this.autoClickersCost)){
      this.hideAutoClickerButton();
    }
  }
}
