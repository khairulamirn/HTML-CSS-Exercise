const cursor = document.querySelector('.cursor');
const pages = document.querySelectorAll(".page");
const clickable = document.querySelectorAll('.click');
const clickableArray = Array.from(clickable);

// Convert NodeList to array and log each element
// console.log('clickable array:', clickableArray);
// clickableArray.forEach((element, index) => {
//     console.log(`Element ${index}:`, element);
// });


// IMAGE SLIDER
let currentIndex = 0;
const pageOneClick = clickableArray.slice(0, 5);
const pageTwoClick = clickableArray.slice(5, 10);
const pageThreeClick = clickableArray.slice(10, 15);

const slide = (direction) => {
    // Remove active class from all pages
    pages.forEach((page) => page.classList.remove('active'));
    clickable.forEach((click) => click.classList.remove('active'));

    // Update currentIndex
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % pages.length;
    } else if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + pages.length) % pages.length;
    }

    // Add active class to the current page and clickable element
    pages[currentIndex].classList.add('active');
    if(currentIndex === 0) {
        pageOneClick.forEach((click) => click.classList.add('active'));
    } else if(currentIndex === 1) {
        pageTwoClick.forEach((click) => click.classList.add('active'));
    } else if(currentIndex === 2) {
        pageThreeClick.forEach((click) => click.classList.add('active'));
    }
};
// Initial setup (default state)
pages[currentIndex].classList.add('active');

if(currentIndex === 0) {
    pageOneClick.forEach((click) => click.classList.add('active'));
} else if(currentIndex === 1) {
    pageTwoClick.forEach((click) => click.classList.add('active'));
} else if(currentIndex === 2) {
    pageThreeClick.forEach((click) => click.classList.add('active'));
}


//  SLIDE USING KEYBOARD ARROW
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        slide('next');
    } else if (event.key === 'ArrowLeft') {
        slide('prev');
    }
});


// CURSOR
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

// cursor effects on clickable
clickable.forEach((click) => {
    click.addEventListener('mouseover', () => {
        if(click.classList.contains('active')) {
            cursor.style.background = '#000000';
        }
    });

    click.addEventListener('mouseout', () => {
        if(click.classList.contains('active')) {
            cursor.style.background = '';
        }
    });
});

// cursor effects on mouseout
document.addEventListener('mouseout', () => {
    cursor.style.display = 'none';
});
