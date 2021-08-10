"use strict";

const slider = document.querySelector("#myRange");
let val = "";
const views = document.querySelector("#slider--views");
const billingAmount = document.querySelector("#slider--total-cost");
const btnCheckContainer = document.querySelector(".switch");
const btnCheck = document.querySelector("#slider--checkbox");
const typeBilling = document.querySelector(".slider--billing-type");

const billing = function (price) {
  if (btnCheck.checked) {
    const yearly = price * 12;
    const discount = yearly * 0.25;
    billingAmount.innerHTML = `$${yearly - discount}.00`;
    typeBilling.innerHTML = "year";
  } else {
    billingAmount.innerHTML = `$${price}.00`;
    typeBilling.innerHTML = "month";
  }
};
// Channge the values of the cost and the views that will generate.
const amountOfViews = () => {
  if (slider.value >= 0 && slider.value <= 20) {
    views.innerHTML = "10K pageviews";
    billing(8);
  } else if (slider.value >= 21 && slider.value <= 40) {
    views.innerHTML = "50K pageviews";
    billing(12);
  } else if (slider.value >= 41 && slider.value <= 60) {
    views.innerHTML = "100K pageviews";
    billing(16);
  } else if (slider.value >= 61 && slider.value <= 80) {
    views.innerHTML = "500K pageviews";
    billing(24);
  } else if (slider.value >= 81) {
    views.innerHTML = "1M pageviews";
    billing(36);
  } else views.innerHTML = "0 pageviews";
};

// Make the conversion from montly to yearly

billing();
amountOfViews();

slider.addEventListener("input", (e) => {
  billing();
  amountOfViews();
});

btnCheckContainer.addEventListener("click", (e) => {
  billing();
  amountOfViews();
  //   typeBilling.innerHTML = "month" ? "month" : "year";
});
