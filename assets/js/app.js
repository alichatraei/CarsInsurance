//variables
const htmlShow = new HTMLShow();
let selectBuiltNumber = document.querySelector("#selectCarsYear"),
  selectCar = document.querySelector("#selectCar"),
  form = document.querySelector(".form"),
  btnCalculate = document.querySelector("#calculate"),
  btnReset = document.querySelector("#resetForm"),
  formRadio = document.querySelectorAll('input[type="radio"]');
// console.log(htmlShow.getCar(""));

//eventListeners
eventListeners();
function eventListeners() {
  // Document Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    //when pae loaded button disable
    btnCalculate.disabled = true;
    //show years in built selection box
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
  //checked Insurance radio button and get value with eventListeners
  formRadio.forEach((insurance) => {
    insurance.addEventListener("change", () => {
      htmlShow.calculateInsurance(insurance.value);
    });
  });
  //reset form
  btnReset.addEventListener("click", () => {
    form.reset();
  });
}
