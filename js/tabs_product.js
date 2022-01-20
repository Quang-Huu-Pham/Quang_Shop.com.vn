function openProduct(evt, product) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("content-product__all");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("content-nav__item");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(product).style.display = "flex";
    evt.currentTarget.className += " active";
}

// // event scroll
var upTop = document.getElementById("up-top");
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".header").style.top = "0";
    } else {
        document.querySelector(".header").style.top = "-90px";
    }
    prevScrollpos = currentScrollPos;
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        upTop.style.display = "block";
    } else {
        upTop.style.display = "none";
    }
}

// navigation bobie
var navMobie = document.querySelector(".nav-mobie");
var navMobieContainer = document.querySelector(".nav-mobie__list");

function openNavMobie() {
    navMobie.style.display = "block";
}

function closeNavMobie() {
    navMobie.style.display = "none";
    // navMobie.style.animation ="turnLeft 1s ease";
}

navMobieContainer.addEventListener('click', function(event) {
    event.stopPropagation();
});