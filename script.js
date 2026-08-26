"use strict";
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
const currentTab = 1;

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const isActive = tab.classList.contains("active");

    if (!isActive) {
      tabs.forEach((tab) => tab.classList.remove("active"));
    }
    tab.classList.add("active");
  });
});
