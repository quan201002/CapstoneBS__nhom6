const tabEl = document.querySelector(".res-tab-list");
const listes = document.querySelectorAll(".res-tab-item");
const contents = document.querySelectorAll(".product-content");
tabEl.addEventListener("click",(event)=>{
    const id = event.target.dataset.id;
   listes.forEach((list)=>{
    list.classList.remove("res-tab-active");
   });
   event.target.classList.add("res-tab-active");
//    console.log(event.target);
   contents.forEach((content)=>{
    content.classList.remove("content-active");
   })
   const element = document.getElementById(id);
   element.classList.add("content-active");
   element.style.zIndex = "1";
})
// btns.forEach((btn)=>{
//     btn.classList.remove("live");
// })
// event.target.classList.add("live");
// articles.forEach((article)=>{
//     article.classList.remove("live");
// })
// const element = document.getElementById(id);
// element.classList.add("live");
const tabContainer = document.querySelector(".tab-container");
const resTabs = document.querySelectorAll(".res-tab");
tabContainer.addEventListener("click",(event)=>{
    event.target.classList.add("active");
    const id = event.target.dataset.id;
    const element = document.getElementById(id);
    element.classList.add("active");
})