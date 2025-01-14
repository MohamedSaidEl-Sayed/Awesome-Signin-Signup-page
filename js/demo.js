let right1=document.getElementById("right1");
let left1=document.getElementById("left1");
let right2=document.getElementById("right2");
let left2=document.getElementById("left2");
let signUp=document.getElementById("sign-up-btn");
let signIn=document.getElementById("sign-in-btn");
let overLay=document.getElementById("overlay");
let launch=document.getElementById("launch");
let play=document.getElementById("play");
let sign_in_userName=document.getElementById("sign-in-userName");
let sign_up_userName=document.getElementById("sign-up-userName");
// let sign_in_pass=document.getElementById("sign-in-pass");
// let sign_up_pass=document.getElementById("sign-up-pass");
let sign_up_email=document.getElementById("sign-up-email");








let mediaQuery=window.matchMedia("(max-width:900px)");
function Responsive(){
    if(mediaQuery.matches){
        overLay.style.backgroundColor="red";
        signUp.onclick=function(){
            left2.style.transition=" transform 1.4s,z-index 1.5s,opacity 1s,visibility 1s ";
            left2.style.transitionDelay=".5s";
            right1.style.transition=" transform 2s,z-index 0s,opacity .5s,visibility .5s ";
            right1.style.transitionDelay=".9s";
            right1.style.visibility="hidden";
            right1.style.opacity="0";
            play.style.transitionDelay=".5s";
            right2.style.transitionDelay=".7s";
            left1.style.transitionDelay=".4s"
            launch.style.transitionDelay=".2s"
            overLay.style.top="430px";
            left1.style.transform="translateY(0px)";
            launch.style.transform="translateY(0px)";
            play.style.transform="translateY(-550px)";
            right2.style.transform="translateY(-450px)";
            left2.style.transform="translateY(-710px)";
            right1.style.transform="translateY(-600px)";
            left2.style.visibility="visible";
            left2.style.opacity="1";
        };
        signIn.onclick=function(){
            play.style.transitionDelay=".2s";
            right2.style.transitionDelay=".4s"
            left1.style.transitionDelay=".7s"
            launch.style.transitionDelay=".5s"
            right1.style.transition=" transform 1.2s,z-index 1.5s,opacity 1s,visibility 1s ";
            right1.style.transitionDelay=".9s";
            left2.style.transition=" transform 0s,z-index 0s,opacity 0s,visibility 0s ";
            left2.style.transitionDelay="1s";
            right1.style.visibility="visible";
            right1.style.opacity="1";
            overLay.style.top="-225%";
            play.style.transform="translateY(0px)";
            right2.style.transform="translateY(0px)";
            left1.style.transform="translateY(600px)";
            launch.style.transform="translateY(600px)";
            right1.style.transform="translateY(0px)";
            left2.style.transform="translateY(0px)";
        }
    }
    else{
        overLay.style.backgroundColor="#536DFE";
        signUp.onclick = function() {
            left2.style.transition=" transform 1.4s,z-index 1.5s,opacity 1s,visibility 1s ";
            left2.style.transitionDelay=".5s";
            right1.style.transition=" transform 2s,z-index 0s,opacity .5s,visibility .5s ";
            right1.style.transitionDelay=".9s";
            right1.style.visibility="hidden";
            right1.style.opacity="0";
            play.style.transitionDelay=".5s";
            right2.style.transitionDelay=".7s";
            left1.style.transitionDelay=".3s"
            launch.style.transitionDelay=".1s"
            overLay.style.left="50%";
            left1.style.transform="translateX(0px)";
            launch.style.transform="translateX(0px)";
            play.style.transform="translateX(-600px)";
            right2.style.transform="translateX(-600px)";
            left2.style.transform="translateX(-200%)";
            right1.style.transform="translate(-600px)";
            left2.style.visibility="visible";
            left2.style.opacity="1";
        };
        signIn.onclick=function(){
            play.style.transitionDelay=".1s";
            right2.style.transitionDelay=".3s"
            left1.style.transitionDelay=".7s"
            launch.style.transitionDelay=".5s"
            right1.style.transition=" transform 1.2s,z-index 1.5s,opacity 1s,visibility 1s ";
            right1.style.transitionDelay=".9s";
            left2.style.transition=" transform 0s,z-index 0s,opacity 0s,visibility 0s ";
            left2.style.transitionDelay="1s";
            right1.style.visibility="visible";
            right1.style.opacity="1";
            overLay.style.left="-103%";
            play.style.transform="translateX(0px)";
            right2.style.transform="translateX(0px)";
            left1.style.transform="translateX(600px)";
            launch.style.transform="translateX(600px)";
            right1.style.transform="translateX(0px)";
            left2.style.transform="translateX(0px)";
        }
    }

}
// i use change instead of addlistener
mediaQuery.addEventListener('change',Responsive);
mediaQuery.addEventListener('change',function(){
    window.location.reload();
});

    Responsive();
    


    window.onbeforeunload=function(){
        localStorage.setItem(signInUserName,sign_in_userName.value);
        localStorage.setItem(signUpUserName,sign_up_userName.value);
    }
    window.onload=function(){
        if(signInUserName!==null){
            sign_in_userName.value=localStorage.getItem(signInUserName);
        }
        if(signUpUserName!==null){
            sign_up_userName.value=localStorage.getItem(signUpUserName);
        }
    }