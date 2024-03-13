let text=document.getElementById("text")
let treeLeft=document.getElementById("tree-left")
let treeRight=document.getElementById("tree-right")
let gateLeft=document.getElementById("gate-left")
let gateRight=document.getElementById("gate-right")



// var loader;

// function loadNow(opacity) {
//     if (opacity <= 0) {
//         displayContent();
//     } else {
//         loader.style.opacity = opacity;
//         window.setTimeout(function() {
//             loadNow(opacity - 0.5);
//         }, 55);
//     }
// }

// function displayContent() {
//     loader.style.display = 'none';
//     document.getElementById('content').style.display = 'block';
// }

// document.addEventListener("DOMContentLoaded", function() {
//     loader = document.getElementById('loader');
//     loadNow(1);
// });




//
var loader = document.querySelector(".loader")

window.addEventListener("load", vanish);

function vanish() {
  loader.classList.add("disppear");
}


window.addEventListener("scroll",()=>{
    let value=window.scrollY;

    text.style.marginTop=value*2.5+"px";
    treeLeft.style.left=value* -1.5+"px";
    treeRight.style.left=value* 1.5+"px";
    gateLeft.style.left=value* 0.5+"px";
    gateRight.style.left=value* -0.5+"px";
    
})