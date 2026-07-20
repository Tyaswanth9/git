// ===============================
// Portfolio Script.js
// Image Slider + Navigation + Effects
// ===============================


// ---------- Mobile Menu Toggle ----------
const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-links");

if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}


// ---------- Smooth Scrolling ----------
document.querySelectorAll("a[href^='#']").forEach(link => {

    link.addEventListener("click", function(e){

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });
        }

    });

});



// ===============================
// PROJECT IMAGE SLIDER
// ===============================

const sliders = document.querySelectorAll(".project-slider");


sliders.forEach(slider => {

    const images = slider.querySelectorAll("img");
    let index = 0;


    if(images.length > 0){

        images.forEach(img=>{
            img.style.display="none";
        });


        images[0].style.display="block";


        setInterval(()=>{


            images[index].style.display="none";


            index++;

            if(index >= images.length){
                index=0;
            }


            images[index].style.display="block";


        },3000);

    }

});



// ===============================
// PRESENTATION PDF IMAGE SLIDER
// ===============================


const presentationSlider = document.querySelector(".presentation-slider");


if(presentationSlider){

    const slides = presentationSlider.querySelectorAll("img");

    let currentSlide = 0;


    slides.forEach((slide)=>{
        slide.style.display="none";
    });


    if(slides.length > 0){

        slides[0].style.display="block";


        setInterval(()=>{


            slides[currentSlide].classList.remove("active");


            slides[currentSlide].style.display="none";


            currentSlide++;


            if(currentSlide >= slides.length){
                currentSlide=0;
            }


            slides[currentSlide].style.display="block";

            slides[currentSlide].classList.add("active");


        },4000);

    }

}



// ===============================
// Scroll To Top Button
// ===============================


const topButton = document.querySelector("#scrollTop");


if(topButton){


    window.addEventListener("scroll",()=>{

        if(window.scrollY > 300){

            topButton.style.display="block";

        }
        else{

            topButton.style.display="none";

        }

    });



    topButton.addEventListener("click",()=>{

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}



// ===============================
// Navbar Active Section Highlight
// ===============================


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll",()=>{


    let current="";


    sections.forEach(section=>{


        const sectionTop = section.offsetTop - 100;


        if(scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });



    navLinks.forEach(link=>{


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });


});



// ===============================
// Typing Effect (Hero Section)
// ===============================


const textElement = document.querySelector(".typing-text");


if(textElement){


    const texts=[

        "Data Analyst",

        "Power BI Developer",

        "SQL Developer",

        "Business Analyst"

    ];


    let textIndex=0;

    let charIndex=0;


    function typing(){


        if(charIndex < texts[textIndex].length){


            textElement.innerHTML += texts[textIndex].charAt(charIndex);

            charIndex++;

            setTimeout(typing,120);


        }

        else{


            setTimeout(erase,1500);

        }

    }



    function erase(){


        if(charIndex > 0){


            textElement.innerHTML = texts[textIndex].substring(0,charIndex-1);

            charIndex--;

            setTimeout(erase,70);


        }

        else{


            textIndex++;


            if(textIndex >= texts.length){

                textIndex=0;

            }


            setTimeout(typing,300);

        }

    }


    typing();

}



// ===============================
// Image Lazy Loading
// ===============================


const images = document.querySelectorAll("img");


images.forEach(img=>{

    img.setAttribute(
        "loading",
        "lazy"
    );

});



// ===============================
// Footer Year Auto Update
// ===============================


const year = document.querySelector("#year");


if(year){

    year.innerHTML = new Date().getFullYear();

}
