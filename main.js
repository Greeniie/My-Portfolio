const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navmenu");
const banner = document.querySelector(".banner");
const body = document.querySelector("#body");
const nightModeToggler = document.querySelector(".modeToggle")






const mobileMenu = () => {
    if (hamburger.classList.contains("active")) {
        banner.classList.remove('blurry');
        body.classList.remove('noscroll');
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    } else {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        body.classList.toggle('noscroll');
        banner.classList.toggle('blurry');
    }

}

hamburger.addEventListener("click", mobileMenu);



// const lightMode = (e) => {
//     e.preventDefault();



//  body.classList.toggle('light-mode')


// }

// nightModeToggler.addEventListener("click", lightMode);


