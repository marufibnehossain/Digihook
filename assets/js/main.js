window.onscroll = function (){scroll()};
function scroll(){
    if(document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        // document.getElementById("navbar").style.height = "12vh";
        document.getElementById("navbar").style.backgroundColor = "rgb(255, 255, 255)";
        document.getElementById("light").style.display = "none";
        document.getElementById("dark").style.display = "block";
        document.getElementById("textclr").style.color = "rgb(30, 41, 59)";
        document.getElementById("textclr1").style.color = "rgb(30, 41, 59)";
        document.getElementById("textclr2").style.color = "rgb(30, 41, 59)";
    }
    else{
        // document.getElementById("navbar").style.height = "17vh";
        document.getElementById("navbar").style.backgroundColor = "transparent";
        document.getElementById("light").style.display = "block";
        document.getElementById("dark").style.display = "none";
        document.getElementById("textclr").style.color = "rgb(226, 232, 240)";
        document.getElementById("textclr1").style.color = "rgb(226, 232, 240)";
        document.getElementById("textclr2").style.color = "rgb(226, 232, 240)";
    }

}

// navbar active button
var button = document.getElementById("activebtn");

var btnactive = button.getElementsByClassName("nav-item");

for (var i = 0; i < btnactive.length; i++) {
    btnactive[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += "active";
    });
} 

// video mute unmute
var vid = document.getElementById("myvideo");

function enableMute() { 
  vid.muted = true;
} 

function disableMute() { 
  vid.muted = false;
} 

GLightbox({
    selector: '.product-lightbox'
  });