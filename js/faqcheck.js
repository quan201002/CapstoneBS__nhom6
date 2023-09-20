// var check = document.querySelector(".faqcheck");
// var pEl = document.querySelector(".pel");
// var liEl = document.querySelector(".faqlist")
// check.addEventListener("input",()=>{
//     console.log(check.checked);
//     console.log(liEl.style.maxHeight);
//     if(check.checked){
//         this.pEl.style.opacity = "1";
//         this.liEl.style.height = "173.5px";
//     }else{
//         this.pEl.style.opacity = "0";
//         this.liEl.style.height = "70px";
//         this.pEl.style.zIndex = "-1";
//     }
// })
function checking(){
var check = document.querySelector(".faqcheck");
var pEl = document.querySelector(".pel");
var liEl = document.querySelector(".faqlist")
    if(check.checked){
    pEl.classList.add("pchecked");
    liEl.classList.add("checked");
    }else{
    pEl.classList.remove("pchecked");
    liEl.classList.remove("checked");
    }
}


   