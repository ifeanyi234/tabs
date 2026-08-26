"use strict";
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
let currentTab = 1;

tabs.forEach((tab) => {
  tab.addEventListener("click", function (e) {
    const isActive = tab.classList.contains("active");
    currentTab = e.target.dataset.tab;

    if (!isActive) {
      tabs.forEach((tab) => {
        tab.classList.remove("active");
        tab.setAttribute("aria-selected", "false");
      });
    }

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");
    console.log(currentTab);

    let currentTabElement = document.getElementById(`content-${currentTab}`);
    console.log(currentTabElement);

    if (!isActive) {
      tabContents.forEach((tabContent) =>
        tabContent.classList.remove("active"),
      );
    }

    currentTabElement.classList.add("active");
  });
});
