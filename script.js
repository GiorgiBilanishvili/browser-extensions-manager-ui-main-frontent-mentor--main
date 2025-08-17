// All Active Inactive

const allBtn = document.querySelector(".All");
const activeBtn = document.querySelector(".Active");
const inactiveBtn = document.querySelector(".Inactive");
const devLensItems = document.querySelectorAll(".DevLens");

let currentFilter = "all";

function updateSelectedButton(selectedBtn) {
  [allBtn, activeBtn, inactiveBtn].forEach((btn) => {
    btn.classList.remove("selected");
  });
  selectedBtn.classList.add("selected");
}

function applyFilter() {
  devLensItems.forEach((item) => {
    const checkbox = item.querySelector('input[type="checkbox"]');
    if (currentFilter === "all") {
      item.style.display = "flex";
    } else if (currentFilter === "active") {
      item.style.display = checkbox.checked ? "flex" : "none";
    } else if (currentFilter === "inactive") {
      item.style.display = checkbox.checked ? "none" : "flex";
    }
  });
}

allBtn.addEventListener("click", () => {
  currentFilter = "all";
  updateSelectedButton(allBtn);
  applyFilter();
});

activeBtn.addEventListener("click", () => {
  currentFilter = "active";
  updateSelectedButton(activeBtn);
  applyFilter();
});

inactiveBtn.addEventListener("click", () => {
  currentFilter = "inactive";
  updateSelectedButton(inactiveBtn);
  applyFilter();
});

// Initial state: All selected with red background
updateSelectedButton(allBtn);
applyFilter();

// Update filtering dynamically when checkboxes change
devLensItems.forEach((item) => {
  const checkbox = item.querySelector('input[type="checkbox"]');
  checkbox.addEventListener("change", () => {
    applyFilter();
  });
});

// nigte mode

const themeToggle = document.querySelector(".Extensions span");
const themeIcon = themeToggle.querySelector("img");
const body = document.body;

let isDarkMode = false;

themeToggle.addEventListener("click", () => {
  isDarkMode = !isDarkMode;
  body.classList.toggle("dark-mode");

  // შეცვალე ღილაკის აიკონი
  if (isDarkMode) {
    themeIcon.src = "img/icon-sun.svg";
    themeIcon.alt = "sun";
  } else {
    themeIcon.src = "img/icon-moon.svg";
    themeIcon.alt = "moon";
  }
});

// remove btn

document.querySelectorAll(".RemoveBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const devLens = this.closest(".DevLens");
    if (devLens) {
      devLens.remove();
    }
  });
});
