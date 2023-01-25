var bodys = document.getElementById('right');
var option = document.getElementById('o');
var submit = document.querySelector("#submit");
var poo = document.querySelector('#p00');
var poi = document.querySelector('#p01');
var pot = document.querySelector('#p02');
var flexDirection = ["0","flex-row","flex-row-reverse","flex-col","flex-col-reverse"];
var JustifyContent = ["0", "justify-start", "justify-end", "justify-center", "justify-between", "justify-around","justify-evenly"];
var bodysubcontaint = document.getElementById("bodyhide");
var bodybutton = document.getElementById('l0');
bodysubcontaint.style.display = "none";

var counter1 = 0;

    // option.addEventListener("click",function(){
    //     console.log(10);
    //     body.setAttribute("id","flx");

    // });

    // function bodydisplay(e) {
    //     console.log(10);
    //     if(e==="null"){
    //         body.removeAttribute("id","flx");
    //     }else{
    //         body.addAttribute("id","flx");
    //     }
    // }

    // function RUN () {
        
        // }
   
submit.onclick =  (e) =>{ // main function  
    e.preventDefault();
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
        removeallclassesfromflexdirection();
    }else{
        console.log('Flex Direction : '+flexDirection[poi.value]+' is used');
        removeallclassesfromflexdirection();
        bodys.classList.add(flexDirection[poi.value]);
    }
    if(pot.value==="0"){
        console.log("Justify-Content not used");
        removeallclassesfromjustifycontent();
    }else{
        console.log('Justify-Content : '+JustifyContent[pot.value]+' is used')
        removeallclassesfromjustifycontent();
        bodys.classList.add(JustifyContent[pot.value]);
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

function removeallclassesfromflexdirection() {
    for (let i = 1; i < 5; i++){
        bodys.classList.remove(flexDirection[i]);
    }
}
function removeallclassesfromjustifycontent() {
    for (let i = 1; i < 7; i++){
        bodys.classList.remove(JustifyContent[i]);
    }
}