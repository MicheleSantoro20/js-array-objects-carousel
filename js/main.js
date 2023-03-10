let imageArray =  [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
 ];

const imageListDom = document.querySelector('.image-list');
const imageColumn = document.querySelector('.list');

let sliderContent= "";

let columnContent= "";

for (let i = 0; i < imageArray.length; i++) {
    const imageWrapper = `<div class="image-wrapper">
                                <img class="image" src="${imageArray[i]['image']}"/>
                                <div class="thumb">
                                    <div class="thumb-title">${imageArray[i]['title']}</div>
                                    </br>
                                    <div class="thumb-text">${imageArray[i]['text']}</div>
                                </div>
                            </div>`;

    sliderContent += imageWrapper;
    
    imageListDom.innerHTML =sliderContent
    

    const columnWrapper = `<div class="wrapper">
                                <img class="small-img scuro" src="${imageArray[i]['image']}" />
                            </div>`;

    columnContent += columnWrapper;
    
    imageColumn.innerHTML = columnContent;
    

}

const columnDom = document.getElementsByClassName('small-img');

const imagesWrapperDom = document.getElementsByClassName('image-wrapper');

let activeImage = 0;

imagesWrapperDom[activeImage].classList.add('show');
columnDom[activeImage].classList.add('brightness');

const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');


nextDom.addEventListener('click', loop)

    
prevDom.addEventListener('click', 
    
function(){

    if (activeImage > 0) {
        imagesWrapperDom[activeImage].classList.remove('show');
        columnDom[activeImage].classList.remove('brightness');
        activeImage--;
        columnDom[activeImage].classList.add('brightness');
        imagesWrapperDom[activeImage].classList.add('show');
    } else if (activeImage == 0 ) {
        imagesWrapperDom[activeImage].classList.remove('show');
        columnDom[activeImage].classList.remove('brightness');
        activeImage = (imagesWrapperDom.length - 1);
        columnDom[activeImage].classList.add('brightness');
        imagesWrapperDom[activeImage].classList.add('show');

    }

});




let clock = setInterval(loop, 3000);


function loop() {
    if (activeImage < imagesWrapperDom.length - 1) {
        imagesWrapperDom[activeImage].classList.remove('show');
        columnDom[activeImage].classList.remove('brightness');
        activeImage++;
        columnDom[activeImage].classList.add('brightness');
        imagesWrapperDom[activeImage].classList.add('show');

    } else if (activeImage == imagesWrapperDom.length - 1) {
        imagesWrapperDom[activeImage].classList.remove('show');
        columnDom[activeImage].classList.remove('brightness');
        activeImage = 0;
        columnDom[activeImage].classList.add('brightness');
        imagesWrapperDom[activeImage].classList.add('show');
    }

}

