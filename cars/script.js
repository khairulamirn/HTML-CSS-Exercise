const lis = document.querySelectorAll('.li');

/**
 * Adds event listeners to each list item to show and hide a horizontal rule element
 * when the mouse is over the list item.
 * @param {NodeListOf<HTMLLIElement>} lis - The list items to add event listeners to.
 * @returns None
 */

lis.forEach((li) => {
    const hr = li.querySelector('.hr');
    
    li.addEventListener('mouseover', () => {
        hr.classList.add('active');
    });

    li.addEventListener('mouseout', () => {
        hr.classList.remove('active');
    });
});

// const lis = document.querySelectorAll('.li');

// const handleMouseOver = (event) => {
//     const hr = event.currentTarget.querySelector('.hr');
//     hr.classList.add('active');
// };

// const handleMouseOut = (event) => {
//     const hr = event.currentTarget.querySelector('.hr');
//     hr.classList.remove('active');
// };

// lis.forEach((li) => {
//     li.addEventListener('mouseover', handleMouseOver);
//     li.addEventListener('mouseout', handleMouseOut);
// });

// Division and modulo are two different operations. The division operator gives you the quotient after dividing two integers, ignoring the remainder. On the other hand, the modulo operator gives you the remainder after dividing two integers, ignoring the quotient.

const carImg = document.querySelectorAll('.car');
const carImgArray = Array.from(carImg);
// console.log(carImgArray);

const carTitle = document.querySelectorAll('.title');
const carTitleArray = Array.from(carTitle);
console.log(carTitleArray);

const buttonImgLeft = document.querySelector('.btn1');
const buttonImgRight = document.querySelector('.btn2');

// Ensure first image is active
let currentImg = 0;
console.log(currentImg);
carImgArray[currentImg].classList.add('active');
carTitleArray[currentImg].classList.add('active');

function updateBackground() {

    if (currentImg === 0) {
        document.body.style.background = "radial-gradient(circle, rgba(178,45,232,1) 0%, rgba(71,0,100,1) 100%)";
    } else if (currentImg === 1) {
        document.body.style.background = "radial-gradient(circle, rgba(249,220,44,1) 0%, rgba(169,122,0,1) 100%)";
    } else if (currentImg === 2) {
        document.body.style.background = "radial-gradient(circle, rgba(71,71,71,1) 0%, rgba(15,15,15,1) 100%)";
    } else if (currentImg === 3) {
        document.body.style.background = "radial-gradient(circle, rgba(209,68,56,1) 0%, rgba(55,1,0,1) 100%)";
    } else if (currentImg === 4) {
        document.body.style.background = "radial-gradient(circle, rgba(161,238,97,1) 0%, rgba(1,86,0,1) 100%)";
    }
}

// initial background
updateBackground();

buttonImgRight.addEventListener('click', () => {
    // Remove the active class from the current image
    carImgArray[currentImg].classList.remove('active');
    carTitleArray[currentImg].classList.remove('active');
    
    // Update the current image index
    currentImg = (currentImg + 1) % carImgArray.length;
    
    // Add the active class to the new image
    carImgArray[currentImg].classList.add('active');
    carTitleArray[currentImg].classList.add('active');

    // Update background color 
    updateBackground();

    console.log('Right button clicked, currentImg:', currentImg);

});

buttonImgLeft.addEventListener('click', () => {
    // Remove the active class from the current image
    carImgArray[currentImg].classList.remove('active');
    carTitleArray[currentImg].classList.remove('active');
    
    // Update the current image index
    currentImg = (currentImg - 1 + carImgArray.length) % carImgArray.length;
    
    // Add the active class to the new current image
    carImgArray[currentImg].classList.add('active');
    carTitleArray[currentImg].classList.add('active');

    // Update background color 
    updateBackground();

    console.log('Left button clicked, currentImg:', currentImg);
});