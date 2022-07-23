const hamburger = document.getElementById("hamburger");

const menu = document.getElementById("menu");

const close = document.getElementById('close')

hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  hamburger.classList.toggle('hidden')
  close.classList.toggle('hidden')
});
console.log('jdrry');


close.addEventListener('click', () => {
    close.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
    menu.classList.toggle("hidden");
})