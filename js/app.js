"use strict";

const slider = document.querySelector("#myRange");
let val = "";
const views = document.querySelector("#slider--views");
const billingAmount = document.querySelector("#slider--total-cost");
const btnCheckContainer = document.querySelector(".switch");
const btnCheck = document.querySelector("#slider--checkbox");
const typeBilling = document.querySelector(".slider--billing-type");

//Slider steps so the slider can jump fom the desire cost per month/year
const sliderSteps = () => {
  val = slider.value;
  if (val < 8) {
    slider.step = 8;
    slider.value = 8;
    val = 8;
  } else if (val >= 8 && val < 16) slider.step = 4;
  else if (val >= 16 && val <= 24) slider.step = 8;
  else if (val > 25) {
    slider.step = 12;
    slider.value = 36;
    val = 36;
  } else {
    val = 16;
    slider.value = 16;
  }
};

// Channge the values of the cost and the views that will generate.
const amountOfViews = () => {
  if (slider.value === "8") {
    views.innerHTML = "10K pageviews";
    billingAmount.innerHTML = `$${val}.00`;
  } else if (slider.value === "12") {
    views.innerHTML = "50K pageviews";
    billingAmount.innerHTML = `$${val}.00`;
  } else if (slider.value === "16") {
    views.innerHTML = "100K pageviews";
    billingAmount.innerHTML = `$${val}.00`;
  } else if (slider.value === "24") {
    views.innerHTML = "500K pageviews";
    billingAmount.innerHTML = `$${val}.00`;
  } else if (slider.value === "36") {
    views.innerHTML = "1M pageviews";
    billingAmount.innerHTML = `$${val}.00`;
  } else views.innerHTML = "0 pageviews";
};

// Make the conversion from montly to yearly
const billing = function () {
  if (btnCheck.checked) {
    const yearlyBill = val * 12;
    const discount = yearlyBill * 0.25;
    val = yearlyBill - discount;
    typeBilling.innerHTML = "year";
  } else {
    typeBilling.innerHTML = "month";
  }
};

sliderSteps();
billing();
amountOfViews();

slider.addEventListener("input", (e) => {
  sliderSteps();
  billing();
  amountOfViews();
});

btnCheckContainer.addEventListener("click", (e) => {
  sliderSteps();
  billing();
  amountOfViews();
  //   typeBilling.innerHTML = "month" ? "month" : "year";
});
