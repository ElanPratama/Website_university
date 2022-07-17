let changeIcon = function (icon) {
  icon.classList.toggle("fa-times");
};

function toggleNav() {
  let burger = document.getElementById("navbar");
  if (burger.style.opacity == 0) {
    burger.style.opacity = 1;
  } else {
    burger.style.opacity = 0;
  }
}

// onclick = "changeIcon(this)";
