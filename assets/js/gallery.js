/*
==========================================================
GALLERY.JS
Universitas Handayani Makassar
Premium Version
==========================================================
*/

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.querySelector(".gallery-lightbox");

const lightboxImage = document.querySelector(".gallery-lightbox img");

const btnClose = document.querySelector(".gallery-close");

const btnPrev = document.querySelector(".gallery-prev");

const btnNext = document.querySelector(".gallery-next");

let currentIndex = 0;

// =============================================
// TIDAK ADA LIGHTBOX
// =============================================

if(lightbox && galleryItems.length){

    const images = [];

    galleryItems.forEach(item=>{

        const img=item.querySelector("img");

        images.push(img.src);

    });

    // =============================================
    // OPEN
    // =============================================

    function openGallery(index){

        currentIndex=index;

        lightbox.classList.add("active");

        lightboxImage.src=images[currentIndex];

        document.body.style.overflow="hidden";

    }

    // =============================================
    // CLOSE
    // =============================================

    function closeGallery(){

        lightbox.classList.remove("active");

        document.body.style.overflow="";

    }

    // =============================================
    // NEXT
    // =============================================

    function nextImage(){

        currentIndex++;

        if(currentIndex>=images.length){

            currentIndex=0;

        }

        lightboxImage.src=images[currentIndex];

    }

    // =============================================
    // PREVIOUS
    // =============================================

    function prevImage(){

        currentIndex--;

        if(currentIndex<0){

            currentIndex=images.length-1;

        }

        lightboxImage.src=images[currentIndex];

    }

    // =============================================
    // CLICK IMAGE
    // =============================================

    galleryItems.forEach((item,index)=>{

        item.addEventListener("click",()=>{

            openGallery(index);

        });

    });

    // =============================================
    // BUTTON
    // =============================================

    if(btnClose){

        btnClose.onclick=closeGallery;

    }

    if(btnNext){

        btnNext.onclick=nextImage;

    }

    if(btnPrev){

        btnPrev.onclick=prevImage;

    }

    // =============================================
    // CLICK BACKDROP
    // =============================================

    lightbox.addEventListener("click",(e)=>{

        if(e.target===lightbox){

            closeGallery();

        }

    });

    // =============================================
    // KEYBOARD
    // =============================================

    document.addEventListener("keydown",(e)=>{

        if(!lightbox.classList.contains("active")){

            return;

        }

        switch(e.key){

            case "Escape":

                closeGallery();

            break;

            case "ArrowRight":

                nextImage();

            break;

            case "ArrowLeft":

                prevImage();

            break;

        }

    });

    // =============================================
    // SWIPE MOBILE
    // =============================================

    let touchStartX=0;

    let touchEndX=0;

    lightbox.addEventListener("touchstart",(e)=>{

        touchStartX=e.changedTouches[0].screenX;

    });

    lightbox.addEventListener("touchend",(e)=>{

        touchEndX=e.changedTouches[0].screenX;

        if(touchEndX<touchStartX-50){

            nextImage();

        }

        if(touchEndX>touchStartX+50){

            prevImage();

        }

    });

}