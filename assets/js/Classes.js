// Calculate Insurance Class
class Insurance {
  constructor() {}
  calculateCar(car) {
    this.carPrice = 50000;
    if (car.includes("I")) {
      this.carPrice = this.carPrice + (this.carPrice * 30) / 100;
    } else {
      this.carPrice = this.carPrice + (this.carPrice * 50) / 100;
    }
    return this.carPrice;
  }
  calculateYear(year) {
    let price = 1000;
    let nowYear = new Date().getFullYear();
    if (nowYear - year == 0) {
      return (this.carPrice = 1000);
    } else {
      // now (year) minus carBuildYear
      let difference = nowYear - year;
      let priceOfYear = this.carPrice - (price * 3) / 100;
      //price of year multiply by difference and put it to this.price
      this.carPrice = priceOfYear * difference;
      return console.log(this.carPrice);
    }
  }
  calculateInsurance(option) {
    let price;
    if (option === "basicInsurance") {
      price = 1;
      price = this.carPrice + (this.carPrice * 10) / 100;
    } else {
      price = 1;
      price = this.carPrice + (this.carPrice * 30) / 100;
    }
    console.log(price);
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
