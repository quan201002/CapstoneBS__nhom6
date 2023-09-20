    const inputEl = document.getElementById("checkbox");
    inputEl.checked = JSON.parse(localStorage.getItem("mode"));
    updateBody();
    inputEl.addEventListener("input",()=>{
        updateBody();
        updateLocalStorage();
    });
    function updateBody(){
        if(inputEl.checked){
            var sun = document.querySelector(".fa-sun");
            var moon= document.querySelector(".fa-moon");
            document.querySelector("html").classList.add("darkmode");
            document.querySelector("body").style.background ="#131617";
            moon.style.display = "none";
            sun.style.display = "block";
        }else{
            var sun = document.querySelector(".fa-sun");
            var moon = document.querySelector(".fa-moon");
            document.querySelector("html").classList.remove("darkmode");
            document.querySelector("body").style.background ="#fff";
            sun.style.display = "none";
            moon.style.display = "block";
        }
    }
    function updateLocalStorage(){
        localStorage.setItem("mode",JSON.stringify(inputEl.checked));
    }

