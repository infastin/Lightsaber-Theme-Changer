"use strict";
document.addEventListener("DOMContentLoaded", function(event) {
    if(!localStorage.theme) {
        localStorage.theme = 'default';
    }

    document.documentElement.setAttribute('data-theme', localStorage.theme);
    if(document.documentElement.getAttribute('data-theme') == 'white') {
        document.querySelector('.switch-theme').classList.add('active');
    }

    document.querySelector('.switch-theme').addEventListener('click', function() {
        if(localStorage.theme == 'white') {
            localStorage.theme = 'default';
        } else {
            localStorage.theme = 'white';
        }

        document.documentElement.setAttribute('data-theme', localStorage.theme);
    });

    document.querySelector('.switch-theme').addEventListener('click', function(e) {
        if(e.button == 0) {
            this.classList.toggle('active');
        }
    });
});