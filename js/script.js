 window.addEventListener("load", function(){
        
    var video = document.getElementById("video"),
    play = document.querySelector(".page-header__play");
        
    play.addEventListener("click", function(){
        if (video.paused){
            video.play();
        }
        else video.pause();
        }, false);
    },false);

