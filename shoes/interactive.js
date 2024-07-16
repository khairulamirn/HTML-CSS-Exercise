// IMAGE SLIDER
const pages = document.querySelectorAll(".page");
let currentIndex = 0;

const slide = (direction) => {
    // Remove active class from all pages
    pages.forEach((page) => page.classList.remove('active'));

    // Update currentIndex
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % pages.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    }

    // Add active class to the current page
    pages[currentIndex].classList.add('active');
};

// Initial setup
pages[currentIndex].classList.add('active');


// CURSOR
const cursor = document.querySelector('.cursor');
const clickable = document.querySelector('.click');
// var timeout;

// follow cursor on mousemove
document.addEventListener('mousemove', (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
    cursor.style.display = 'block';

    // cursor effects on mouse stopped
    // function mouseStopped() {
    //     cursor.style.display = 'none';
    // }
    // clearTimeout(timeout);
    // timeout = setTimeout(mouseStopped, 1000);
});

clickable.addEventListener('mouseover', () => {
    cursor.style.background = '#00ff80';
});

clickable.addEventListener('mouseout', () => {
    cursor.style.background = '';
});

// cursor effects on mouseout
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});
