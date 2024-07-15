function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

$(function() {
    $('[data-toggle="popover"]').popover()
})


function play1() {
    var audio = document.getElementById("audio1");
    audio.play();
}

function play2() {
    var audio = document.getElementById("audio2");
    audio.play();
}

function play3() {
    var audio = document.getElementById("audio3");
    audio.play();
}

function play4() {
    var audio = document.getElementById("audio4");
    audio.play();
}

function play5() {
    var audio = document.getElementById("audio5");
    audio.play();
}

function play6() {
    var audio = document.getElementById("audio6");
    audio.play();
}

function play7() {
    var audio = document.getElementById("audio7");
    audio.play();
}

function play8() {
    var audio = document.getElementById("audio8");
    audio.play();
}

function play9() {
    var audio = document.getElementById("audio9");
    audio.play();
}

function play10() {
    var audio = document.getElementById("audio10");
    audio.play();
}

function play11() {
    var audio = document.getElementById("audio11");
    audio.play();
}

function play12() {
    var audio = document.getElementById("audio12");
    audio.play();
}




//for navigation tab// 

function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function(event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function(event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}