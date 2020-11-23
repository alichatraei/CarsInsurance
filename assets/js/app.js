//variables
let insurance = new Insurance(),
  htmlShow = new HTMLShow(),
  selectBuiltNumber = document.querySelector("#selectCarsYear"),
  selectCar = document.querySelector("#selectCar"),
  form = document.querySelector("#form"),
  btnCalculate = document.querySelector("#calculate"),
  btnReset = document.querySelector("#formReset"),
  formRadio = document.querySelectorAll('input[type="radio"]');

//eventListeners
eventListeners();
function eventListeners() {
  // Document Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    //when pae loaded button disable
    btnCalculate.disabled = true;
    //show years in built selection box
    htmlShow.showYears(selectBuiltNumber);
  });
  // change select builtYear option tag value event listeners
  selectBuiltNumber.addEventListener("change", (option) => {
    insurance.calculateYear(option.target.value);
  });
  // change select car option tag value
  selectCar.addEventListener("change", (option) => {
    insurance.calculateCar(option.target.value);
  });
  //checked Insurance radio button and get value with eventListeners
  formRadio.forEach((kind) => {
    kind.addEventListener("change", (option) => {
      insurance.calculateInsurance(option.target.value);
    });
  });

  //active button if everything fill out
  selectCar.addEventListener("blur", () => {
    btnCalculate.disabled = false;
  });
  //calculate
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  //reset form
  btnReset.addEventListener("click", () => {
    form.reset();
  });
}
