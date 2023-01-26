var bodys = document.getElementById('right');
var option = document.getElementById('o');
var submit = document.querySelector("#submit");
var poo = document.querySelector('#p00');
var poi = document.querySelector('#p01');
var pot = document.querySelector('#p02');
var poe = document.querySelector("#p03");
var por = document.querySelector("#p04");
var pof = document.querySelector("#p05");
var flexDirection = ["0","flex-row","flex-row-reverse","flex-col","flex-col-reverse"];
var JustifyContent = ["0", "justify-start", "justify-end", "justify-center", "justify-between", "justify-around","justify-evenly"];
var flexwrap = ["0", "flex-wrap", "flex-nowrap", "flex-wrap-reverse"];
var alignitems = ["0","items-start","items-end","items-center","items-baseline","items-stretch"]
var aligncontent = ["0","content-center","content-start","content-end","content-between","content-around","content-evenly","content-baseline"]

var flexbox = [0, flexDirection, JustifyContent, flexwrap, alignitems, aligncontent];


var bodysubcontaint = document.getElementById("bodyhide");
var block1 = document.getElementById("block1hide");
var block2 = document.getElementById("block2hide");
var block3 = document.getElementById("block3hide");
var block4 = document.getElementById("block4hide");


var hidearray = [bodysubcontaint, block1, block2, block3, block4];
var counter = [0, 0, 0, 0, 0];

hide(0);hide(1);hide(2);hide(3);hide(4); 
//body hide function 
function hide(e){
    counter[e]++;
    if(counter[e]% 2 === 0){
        hidearray[e].style.display = "block";
    }else {
        hidearray[e].style.display = "none";
    }
}


submit.onclick =  (e) =>{ // main function  
    if(poo.value=="0"){
        bodys.classList.remove("flex");
    }else{
        bodys.classList.add("flex");
    }
    if(poi.value=="0"){
        removeclass(1);
    }else{
        removeclass(1);
        bodys.classList.add(flexDirection[poi.value]);
    }
    if(pot.value==="0"){
        removeclass(2);
    }else{
        removeclass(2);
        bodys.classList.add(JustifyContent[pot.value]);
    }
    if(poe.value==="0"){
        removeclass(3);
    }else{
        removeclass(3);
        bodys.classList.add(flexwrap[poe.value]);
    }
    if(por.value==="0"){
        removeclass(4);
    }else{
        removeclass(4);
        bodys.classList.add(alignitems[por.value]);
    }
    if(pof.value==="0"){
        removeclass(5);
    }else{
        removeclass(5);
        bodys.classList.add(aligncontent[pof.value]);
    }
}


//combine function to remove class
function removeclass(e) {
    for (let i = 1; i < 10; i++){
        bodys.classList.remove(flexbox[e][i]);
    }
}

// saparate funtions to remove class
// function removeallclassesfromflexdirection() {
//     for (let i = 1; i < 5; i++){
//         bodys.classList.remove(flexDirection[i]);
//     }
// }
// function removeallclassesfromjustifycontent() {
//     for (let i = 1; i < 7; i++){
//         bodys.classList.remove(JustifyContent[i]);
//     }
// }

// function removeallclassesfromflexwrap() {
//     for (let i = 1; i < 4; i++){
//         bodys.classList.remove(flexwrap[i]);
//     }
// }

// function removeallclassesfromalignitem() {
//     for (let i = 1; i < 6; i++){
//         bodys.classList.remove(alignitems[i]);
//     }
// }
// function removeallclassesfromaligncontent() {
//     for (let i = 1; i < 8; i++){
//         bodys.classList.remove(aligncontent[i]);
//     }
// }