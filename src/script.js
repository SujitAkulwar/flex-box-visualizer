var bodys = document.getElementById('right');
var option = document.getElementById('o');
var submit = document.querySelector("#submit");

var poo = document.querySelector('#p00');
var poi = document.querySelector('#p01');
var pot = document.querySelector('#p02');
var poe = document.querySelector("#p03");
var por = document.querySelector("#p04");
var pof = document.querySelector("#p05");

//
var o1 = document.querySelector("#o1");
var fg1 = document.querySelector("#fg1");
var fs1 = document.querySelector("#fs1");
var flexbasis1 = document.querySelector("#flexbasis1");
var as1 = document.querySelector("#as1");
var o2 = document.querySelector("#o2");
var fg2 = document.querySelector("#fg2");
var fs2 = document.querySelector("#fs2");
var flexbasis2 = document.querySelector("#flexbasis2");
var as2 = document.querySelector("#as2");
var o3 = document.querySelector("#o3");
var fg3 = document.querySelector("#fg3");
var fs3 = document.querySelector("#fs3");
var flexbasis3 = document.querySelector("#flexbasis3");
var as3 = document.querySelector("#as3");
var o4 = document.querySelector("#o4");
var fg4 = document.querySelector("#fg4");
var fs4 = document.querySelector("#fs4");
var flexbasis4 = document.querySelector("#flexbasis4");
var as4 = document.querySelector("#as4");
//
var boxarray = [[0, 0, 0, 0], [o1, fg1, fs1, as1], [o2, fg2, fs2, as2], [o3, fg3, fs3, as3], [o4, fg4, fs4, as4]];
var boxarray2 = [["0", "0", "0", "0"], ["o1", "fg1", "fs1", 'as1'], ["o2", "fg2", "fs2", "as2"], ["o3", "fg3", "fs3", "as3"], ["o4", "fg4", "fs4", "as4"]];
var boxclassarray = [["0", "order-1", "order-2", "order-3", "order-4", "order-first", "order-last"], ["0", "1", "2"], ["0", "1", "2"], ["0", "self-auto", "self-start", "self-end", "self-center", "self-stretch", "self-baseline"]];                                           

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var box = [0, b1, b2, b3, b4];


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

for (let i = 0; i < 5; i++){
    hide(i);
}

//body hide function 
function hide(e){
    counter[e]++;
    if(counter[e]% 2 === 0){
        hidearray[e].style.display = "block";
    }else {
        hidearray[e].style.display = "none";
    }
}


// function newval(i, j) {
//     boxarray[i][j] = document.getElementById("#"+boxarray2[i][j]);
// }

submit.onclick = (e) => { // main function  
    for (let i = 1; i < 5; i++){
        for (let j = 0; j < 4; j++){
            console.log((boxarray[i][j]));
            // newval(i, j);
            if((boxarray[i][j])=="0"){
                // removeboxclass(i,j);
            } else {
                // removeboxclass(i,j);
                console.log(boxclassarray[j][boxarray[i][j]].value);
                box[i].classList.add(boxclassarray[j][boxarray[i][j]]);
            }
        }
    }

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

