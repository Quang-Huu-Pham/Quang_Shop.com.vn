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

// event scroll
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        document.getElementById("up-top").style.display = "block";
    } else {
        document.getElementById("up-top").style.display = "none";
    }
}

// navigation bobie
var navMobie = document.getElementById("js-nav-mobie");

function openNavMobie() {
    navMobie.style.display = "block";
}

function closeNavMobie() {
    navMobie.style.display = "none";
    // navMobie.style.animation ="turnLeft 1s ease";
}