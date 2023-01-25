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
var bodybutton = document.getElementById('l0');
bodysubcontaint.style.display = "none";

var counter1 = 0;
   
submit.onclick =  (e) =>{ // main function  
    // console.log(poo.value);
    if(poo.value=="0"){
        console.log("display not used");
        bodys.classList.remove("flex");
    }else{
        console.log("display flex is used");
        bodys.classList.add("flex");
    }
    if(poi.value=="0"){
        console.log(" Flex Direction not used");
        removeclass(1);
    }else{
        console.log('Flex Direction : '+flexDirection[poi.value]+' is used');
        removeclass(1);
        bodys.classList.add(flexDirection[poi.value]);
    }
    if(pot.value==="0"){
        console.log("Justify-Content not used");
        removeclass(2);
    }else{
        console.log('Justify-Content : '+JustifyContent[pot.value]+' is used')
        removeclass(2);
        bodys.classList.add(JustifyContent[pot.value]);
    }
    if(poe.value==="0"){
        console.log("flexwrap not used");
        removeclass(3);
    }else{
        console.log('flexwrap : '+flexwrap[poe.value]+' is used')
        removeclass(3);
        bodys.classList.add(flexwrap[poe.value]);
    }
    if(por.value==="0"){
        console.log("align item not used");
        removeclass(4);
    }else{
        console.log('align item : '+alignitems[por.value]+' is used')
        removeclass(4);
        bodys.classList.add(alignitems[por.value]);
    }
    if(pof.value==="0"){
        console.log("align content not used");
        removeclass(5);
    }else{
        console.log('align content : '+aligncontent[pof.value]+' is used')
        removeclass(5);
        bodys.classList.add(aligncontent[pof.value]);
    }
}

//body hide function 
bodybutton.addEventListener("click", function(){
    counter1 = counter1 + 1;
    if(counter1% 2 === 0){
        bodysubcontaint.style.display = "none";
    }else {
        bodysubcontaint.style.display = "block";
    }
});

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