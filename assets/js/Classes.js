// Calculate Insurance Class
class Insurance {
  constructor() {
    this.price = 0;
  }
  calculateCar(car) {
    this.price = 50000;
    if (car.includes("I")) {
      this.price = this.price + (this.price * 30) / 100;
    } else {
      this.price = this.price + (this.price * 50) / 100;
    }
    console.log(this.price);
  }
  calculateYear(year) {
    let nowYear = new Date().getFullYear();
    if (nowYear - year == 0) {
      this.price = 50000;
      console.log(this.price);
    } else {
      // now (year) minus carBuildYear
      let difference = nowYear - year;
      let priceOfYear = this.price + (this.price * 3) / 100;
      //price of year multiply by difference and put it to this.price
      this.price = priceOfYear * difference;
      console.log(this.price);
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
