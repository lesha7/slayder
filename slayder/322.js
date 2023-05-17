let images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

let slider = document.querySelector('#slider');
let img = slider.querySelector('img');

let i = 0;
let TimerId = setInterval(function() {
    img.src = 'images/' + images[i];

    i++;

    if (i == images.length) {
        i = 0;
    }
}, 1000);