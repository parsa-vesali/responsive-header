const Counters = document.querySelectorAll(".counters");
Counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const counterValue = +counter.innerText;
    const increment = target / 300
    if (counterValue < target) {
      counter.innerText = Math.ceil(counterValue + increment )
      setTimeout(updateCounter, 1);
    }
  };

  updateCounter();
});


// MENU OPEN AND CLOSE
const submenuOpenBtn = document.querySelector(".submenu-open-btn");
const submenu = document.querySelector(".submenu");
const navOpenBtn = document.querySelector(".nav-icon");
const navCloseBtn = document.querySelector(".nav-close-btn");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const cartOpenBtn = document.querySelector(".cart-icon");
const cartCloseBtn = document.querySelector(".cart-close-btn");
const cart = document.querySelector(".cart");
 
submenuOpenBtn.addEventListener("click", (e) => {
    e.currentTarget.parentElement.classList.toggle("text-pink-300");
    submenu.classList.toggle("submenu--open");
})

function closeNav() {
    nav.classList.remove("left-0");
    nav.classList.add("-left-64");
    overlay.classList.remove("overlay--visible");
}
function closeCart() {
    cart.classList.remove("right-0");
    cart.classList.add("-right-64");
    overlay.classList.remove("overlay--visible");
}


navOpenBtn.addEventListener("click",() => {
    nav.classList.remove("-left-64");
    nav.classList.add("left-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeNav)
})
cartOpenBtn.addEventListener("click",() => {
    cart.classList.remove("-right-64");
    cart.classList.add("right-0");
    overlay.classList.add("overlay--visible");
    overlay.addEventListener("click", closeCart)
})

navCloseBtn.addEventListener("click", closeNav);
cartCloseBtn.addEventListener("click", closeCart);




