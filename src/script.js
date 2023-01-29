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
var o1 = document.getElementById("o1");
var fg1 = document.getElementById("fg1");
var fs1 = document.getElementById("fs1");
var flexbasis1 = document.getElementById("flexbasis1");
var as1 = document.getElementById("as1");
var o2 = document.getElementById("o2");
var fg2 = document.getElementById("fg2");
var fs2 = document.getElementById("fs2");
var flexbasis2 = document.getElementById("flexbasis2");
var as2 = document.getElementById("as2");
var o3 = document.getElementById("o3");
var fg3 = document.getElementById("fg3");
var fs3 = document.getElementById("fs3");
var flexbasis3 = document.getElementById("flexbasis3");
var as3 = document.getElementById("as3");
var o4 = document.getElementById("o4");
var fg4 = document.getElementById("fg4");
var fs4 = document.getElementById("fs4");
var flexbasis4 = document.getElementById("flexbasis4");
var as4 = document.getElementById("as4");
//
var boxarray = [[o1, fg1, fs1, as1], [o2, fg2, fs2, as2], [o3, fg3, fs3, as3], [o4, fg4, fs4, as4]];
var boxclassarray = [
    ["0", "order-1", "order-2", "order-3", "order-4", "order-first", "order-last"],
    ["0", "1", "2"],
    ["0", "1", "2"],
    ["0", "self-auto", "self-start", "self-end", "self-center", "self-stretch", "self-baseline"]];                                           

var b1 = document.getElementById('b1');
var b2 = document.getElementById('b2');
var b3 = document.getElementById('b3');
var b4 = document.getElementById('b4');
var box = [b1, b2, b3, b4];


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

submit.onclick = (e) => {// main function

    for (let i = 1; i < 6; i++){
        removeclass(i);
    }

    if(poo.value=="0"){
        bodys.classList.remove("flex");
    }else{
        bodys.classList.add("flex");
    }
    
    if(poi.value!="0"){
        bodys.classList.add(flexDirection[poi.value]);
    }
    if(pot.value!="0"){
        bodys.classList.add(JustifyContent[pot.value]);
    }
    if(poe.value!="0"){
        bodys.classList.add(flexwrap[poe.value]);
    }
    if(por.value!="0"){
        bodys.classList.add(alignitems[por.value]);
    }
    if(pof.value!="0"){
        bodys.classList.add(aligncontent[pof.value]);
    }

    for (let i = 0; i < 4; i++){
        let temp = boxarray[0][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(0,i); 
        if (temp != "0") {
            b1.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[1][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(1,i); 
        if (temp != "0") {
            b2.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[2][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(2,i); 
        if (temp != "0") {
            b3.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }
    for (let i = 0; i < 4; i++){
        let temp = boxarray[3][i].value;
        let check = boxclassarray[i][temp];
        removeclassforbox(3,i); 
        if (temp != "0") {
            b4.classList.add(check);
            console.log(boxclassarray[i][temp]);
        }
    }


    //because of error i value is not working in boxarray[]

        // let temp = boxarray[3][0].value;
        // let check = boxclassarray[0][temp];
        // removeclassforbox(3,0); 
        // if (temp != "0") {
        //     b4.classList.add(check);
        //     console.log(boxclassarray[0][temp]);
        // }// 3 = box no & i = property no 

 
        // temp = boxarray[3][1].value;
        // check = boxclassarray[1][temp];
        // removeclassforbox(3,1); 
        // if (temp != "0") {
        //     b4.classList.add(check);
        //     console.log(boxclassarray[1][temp]);
        // }// 3 = box no & i = property no 

        // temp = boxarray[3][2].value;
        // check = boxclassarray[2][temp];
        // removeclassforbox(3,2); 
        // if (temp != "0") {
        //     b4.classList.add(check);
        //     console.log(boxclassarray[2][temp]);
        // }// 3 = box no & i = property no 

        // temp = boxarray[3][3].value;
        // check = boxclassarray[3][temp];
        // removeclassforbox(3,3); 
        // if (temp != "0") {
        //     b4.classList.add(check);
        //     console.log(boxclassarray[3][temp]);
        // }// 3 = box no & i = property no 
    

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

function removeclassforbox(a, b) {
    for (let i = 1; i < 10; i++){
        if (boxclassarray[b][i]) {
           box[a].classList.remove(boxclassarray[b][i]); 
        }
    }
}