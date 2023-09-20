function collapseEvent(){
var close = document.getElementById("close");
var expand= document.getElementById("expand");
if(close.style.display == "block"){
    close.style.display = "none";
    expand.style.display = "block";
}else{
    close.style.display = "block";
    expand.style.display = "none";
    }
}