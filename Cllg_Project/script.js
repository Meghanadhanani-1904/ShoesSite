function printError(elemId,hintmsg){
    document.getElementById(elemId).innerHTML=hintmsg;
}
function validate(){
    var email=document.fn.email.value;
    var mobile=document.fn.mobile.value;
    var address=document.fn.address.value;
    if(email==""){
        printError("emailDis","*Please Enter Email Id");
    }
    else{
        var regex=/^\w+([\.-]?\w+)*@\w+([\-.-]?\w+)*(\.\w{2,3})+$/;
        if(regex.test(email)==false){
            printError("emailDis","*Invalid Email Format");
        }
        else{
            printError("emailDis","");
            emailDis=false;
        }
    }

    if(mobile==""){
        printError("mobileDis","*Please Enter Mobile Number");
    }
    else{
        var regex=/^[1-9]\d{9}$/;
        if(regex.test(mobile)=== false){
            printError("mobileDis", "*Please Check Your Mobile Number");
        }
        else{
            printError("mobileDis","");
            mobileDis=false;
        }
    }
    if(address==""){
        printError("addressDis","*Please Enter Address");
    }
    else{
        printError("addressDis","");
        addressDis=false;
    }
}

let carValue=0;
let coun=document.querySelector(".increase");
let displays=document.querySelector("#display");

function add(){
    displays.style.display="inline"
    carValue++;
    displays.innerHTML = carValue;
}