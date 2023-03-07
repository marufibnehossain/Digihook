window.onscroll = function (){scroll()};
function scroll(){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        // document.getElementById("navbar").style.height = "12vh";
        document.getElementById("navbar").style.backgroundColor = "rgba(0, 0, 0, 0.534)";;
    }
    else{
        // document.getElementById("navbar").style.height = "17vh";
        document.getElementById("navbar").style.backgroundColor = "transparent";
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