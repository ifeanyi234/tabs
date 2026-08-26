"use strict";
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.setAttribute("aria-selected", "false");
    });
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    const currentTabElement = document.getElementById(
      `content-${tab.dataset.tab}`,
    );
    currentTabElement.classList.add("active");
  });
});
