// Calculate Insurance Class
class Insurance {
  constructor() {
    (this.base = 50000000),
      (this.carPrice = 0),
      (this.carYear = 0),
      (this.insurance = 0);
  }
  calculateCar(car) {
    let base = this.base;
    if (car.includes("I")) {
      this.carPrice = base + (base * 30) / 100;
    } else {
      this.carPrice = base + (base * 50) / 100;
    }
    return this.carPrice;
  }
  calculateYear(year) {
    let base = this.carPrice;
    let nowYear = new Date().getFullYear() + 1;
    // now (year) minus carBuildYear
    let difference = nowYear - year;
    let priceOfYear = base * 0.15;
    //price of year multiply by difference and put it to this.price
    this.carYear = priceOfYear / difference;
    this.carYear += this.carPrice;
    return parseInt(this.carYear);
  }
  calculateInsurance(option) {
    this.insurance = this.carYear;
    if (option === "basicInsurance") {
      this.insurance += this.insurance * 0.3;
      return this.insurance;
    } else {
      this.insurance += this.insurance * 0.4;
      return this.insurance;
    }
  }
}

class HTMLShow extends Insurance {
  constructor(car, year, insurance) {
    super();
    (this.car = car), (this.year = year), (this.insurance = insurance);
  }
  getCar(car) {
    console.log(this.calculateCar(car));
  }
  showYears(selectTag) {
    //show Persian Date
    let EnDate = this.getYears();
    console.log();
    for (let index = EnDate; index >= EnDate - 20; index--) {
      let option = document.createElement("option");
      option.setAttribute("value", `${index}`);
      option.innerHTML = `${this.convertYears(index)}`;
      selectTag.appendChild(option);
    }
  }
  // get years from now to 20 years ago with Date constructor
  getYears() {
    let dateEn = new Date();
    dateEn = dateEn.getFullYear();
    return dateEn;
  }
  //convert English Year to Persian year
  convertYears(year) {
    const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

    return year.toString().replace(/\d/g, (x) => farsiDigits[x]);
  }
}
