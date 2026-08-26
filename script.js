"use strict";
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const currentTab = 1;

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const isActive = tab.classList.contains("active");
    console.log(isActive);
  });
});
