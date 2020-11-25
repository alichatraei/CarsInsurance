//variables
let htmlShow = new HTMLShow(),
  selectBuiltNumber = document.querySelector("#selectCarsYear"),
  selectCar = document.querySelector("#selectCar"),
  form = document.querySelector("#form"),
  btnCalculate = document.querySelector("#calculate"),
  btnReset = document.querySelector("#formReset"),
  formRadio = document.querySelectorAll('input[type="radio"]'),
  kInsurance = "",
  car = "";

//eventListeners
eventListeners();
function eventListeners() {
  // Document Content Loaded
  document.addEventListener("DOMContentLoaded", () => {
    //when pae loaded button disable
    btnCalculate.disabled = true;
    //show years in built selection box
    htmlShow.showYears(selectBuiltNumber);
    selectBuiltNumber.disabled = true;
    formRadio[0].disabled = true;
    formRadio[1].disabled = true;
    kInsurance = formRadio[0].value;
  });
  //active button if everything fill out
  selectCar.addEventListener("change", () => {
    selectBuiltNumber.disabled = false;
  });
  selectBuiltNumber.addEventListener("change", () => {
    formRadio[0].disabled = false;
    formRadio[1].disabled = false;
    btnCalculate.disabled = false;
  });

  //formRadio
  formRadio.forEach((option) => {
    option.addEventListener("click", (event) => {
      if (event.target.value === "basicInsurance")
        kInsurance = event.target.value;
      else kInsurance = event.target.value;
      console.log(event.target.value);
    });
  });
  // show car text Content
  selectCar.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
  //calculate
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let insurance = new Insurance(
      selectCar.value,
      selectBuiltNumber.value,
      kInsurance
    );
    insurance.calculate();
    htmlShow.showTable(
      selectCar.value,
      selectBuiltNumber.value,
      kInsurance,
      insurance.calculate()
    );
  });
  //reset form
  btnReset.addEventListener("click", () => {
    form.reset();
    selectBuiltNumber.disabled = true;
    formRadio[0].disabled = true;
    formRadio[1].disabled = true;
  });
}
