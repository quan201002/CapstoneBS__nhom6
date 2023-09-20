const headerEl = document.querySelector("header");
const mainEl = document.querySelector("main");
console.log(headerEl);
console.log(headerEl.offsetHeight);
console.log(window.scrollY );
window.addEventListener("scroll", () => {
        if (window.scrollY > headerEl.offsetHeight) {
          headerEl.classList.add("reduce-animate");
        }
        else{
            headerEl.classList.remove("reduce-animate");
        }
});