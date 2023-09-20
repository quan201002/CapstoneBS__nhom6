document.getElementById("searchOn")
.onclick=
function(){
    document.getElementById("popup").style.opacity = 1;
    document.getElementById("popup").style.zIndex=999;
}
document.getElementById("close").onclick=
function(){
    document.getElementById("popup").style.opacity = 0;
    document.getElementById("popup").style.zIndex=-1;
}