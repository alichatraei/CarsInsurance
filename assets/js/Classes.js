// Calculate Insurance Class
class Insurance {
  constructor(car, year, insurance) {
    (this.base = 50000000),
      (this.carPrice = 0),
      (this.carYear = 0),
      (this.insurance = 0),
      (this.car = car),
      (this.year = year),
      (this.kInsurance = insurance);
  }
  calculateCar() {
    let base = this.base;
    if (this.car.includes("I")) {
      this.carPrice = base + (base * 30) / 100;
    } else {
      this.carPrice = base + (base * 50) / 100;
    }
    return parseInt(this.carPrice);
  }
  calculateYear() {
    let base = this.carPrice;
    let nowYear = new Date().getFullYear() + 1;
    // now (year) minus carBuildYear
    let difference = nowYear - this.year;
    let priceOfYear = base * 0.15;
    //price of year multiply by difference and put it to this.price
    this.carYear = priceOfYear / difference;
    this.carYear += this.carPrice;
    return parseInt(this.carYear);
  }
  calculateInsurance() {
    this.insurance = this.carYear;
    if (this.kInsurance === "basicInsurance") {
      this.insurance += this.insurance * 0.3;
      return this.insurance;
    } else {
      this.insurance += this.insurance * 0.4;
      return parseInt(this.insurance);
    }
  }
  calculate() {
    this.calculateCar(), this.calculateYear(), this.calculateInsurance();
    return parseInt(this.insurance);
  }
}

class HTMLShow extends Insurance {
  constructor() {
    super();
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
  showTable(car, year, insurance, price) {
    let showCar = "",
      showInsurance = "",
      showPrice = this.insurance;
    switch (car) {
      case "I1":
        showCar = "پراید";
        break;
      case "I2":
        showCar = "سمند";
        break;
      case "I3":
        showCar = "پژو 206";
        break;
      case "I4":
        showCar = "رانا";
        break;
      case "I5":
        showCar = "تیبا";
        break;
      case "I6":
        showCar = "دنا (پلاس،توربو اتوماتیک)";
        break;
      case "I7":
        showCar = "شاهین";
        break;
      case "O1":
        showCar = "لندکروز";
        break;
      case "O2":
        showCar = "سانتافه";
        break;
      case "O3":
        showCar = "بی ام و X4";
        break;
      case "O4":
        showCar = "پورشه";
        break;
    }
    switch (insurance) {
      case "basicInsurance":
        showInsurance = "بیمه ساده";
        break;
      case "completeInsurance":
        showInsurance = "بیمه کامل شخص ثالث";
        break;
    }

    let checkout = document.querySelectorAll(".checkoutForm"),
      table = document.querySelector("#tbody");
    checkout.forEach((element) => {
      element.setAttribute("style", "display: flex !important");
    });
    table.innerHTML = `
    <tr>
    <td>${showCar}</td>
    <td>${year}</td>
    <td>${showInsurance}</td>
    <td>${price}</td>
    </tr>
    `;
  }
}
