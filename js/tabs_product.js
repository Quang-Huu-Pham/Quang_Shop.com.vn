var signIn = document.querySelector(".header__sign");
var modalLogin = document.querySelector(".modal");
var closeSign = document.querySelector(".modal__back");
var upTop = document.getElementById("up-top");
var prevScrollpos = window.pageYOffset;
var navMobie = document.querySelector(".nav-mobie");
var navMobieContainer = document.querySelector(".nav-mobie__list");
var btnChat = document.querySelector(".box-mess");
var modalMessage = document.querySelector(".modal-mess");
var closeMessage = document.querySelector(".modal-mess__close");
var btnChatMobie = document.querySelector(".chat--mobie");

signIn.addEventListener('click', function() {
    modalLogin.style.display = "flex";
})

closeSign.addEventListener('click', function() {
    modalLogin.style.display = "none";
})

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

// navigation mobie
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

// chat mess
btnChat.addEventListener('click', function() {
    modalMessage.style.display = 'block';
});

closeMessage.addEventListener('click', function() {
    modalMessage.style.display = 'none';
});

btnChatMobie.addEventListener('click', function() {
    modalMessage.style.display = 'block';
    navMobie.style.display = 'none';
})