const header = document.querySelector(".header");
window.addEventListener('scroll', function(){
    if (window.scrollY > 100) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

document.addEventListener('DOMContentLoaded', function () {
    // Select the elements
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('.nav-menu');
    const closeIcon = document.querySelector('.close-icon');

    // Function to open the menu with animation
    function openMenu() {
        navMenu.classList.remove('close');
        navMenu.classList.add('open');
        navMenu.style.display = 'flex';
    }

    // Function to close the menu with animation
    function closeMenu() {
        navMenu.classList.remove('open');
        navMenu.classList.add('close');
        setTimeout(() => {
            navMenu.style.display = 'none';
        }, 500); // Match the duration of the animation
    }

    // Event listener for menu icon
    menuIcon.addEventListener('click', function () {
        openMenu();
    });

    // Event listener for close icon
    closeIcon.addEventListener('click', function () {
        closeMenu();
    });

    // Adjusting display based on window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            navMenu.style.display = 'none';
        }
    });
});
