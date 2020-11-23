//variables
const htmlShow = new HTMLShow();
let selectBuiltNumber = document.querySelector("#selectCarsYear"),
  selectCar = document.querySelector("#selectCar");
// console.log(htmlShow.getCar(""));

//eventListeners
eventListeners();
function eventListeners() {
  // Document Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    htmlShow.showYears(selectBuiltNumber);
    // send default 2020 to the calculateYear
    htmlShow.calculateYear(2020);
  });
  // change select builtYear option tag value event listeners
  selectBuiltNumber.addEventListener("change", (option) => {
    htmlShow.calculateYear(option.target.value);
  });
  // change select car option tag value
  selectCar.addEventListener("change", (option) => {
    htmlShow.calculateCar(option.target.value);
  });
}
