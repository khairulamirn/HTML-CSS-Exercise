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
console.log(carImgArray);

const buttonImgLeft = document.querySelector('.btn1');
const buttonImgRight = document.querySelector('.btn2');

// Ensure first image is active
let currentImg = 0;
console.log(currentImg);
carImgArray[currentImg].classList.add('active');

buttonImgRight.addEventListener('click', () => {
    // Remove the active class from the current image
    carImgArray[currentImg].classList.remove('active');
    
    // Update the current image index
    currentImg = (currentImg + 1) % carImgArray.length;
    
    // Add the active class to the new image
    carImgArray[currentImg].classList.add('active');

    console.log('Right button clicked, currentImg:', currentImg);
});

buttonImgLeft.addEventListener('click', () => {
    // Remove the active class from the current image
    carImgArray[currentImg].classList.remove('active');
    
    // Update the current image index
    currentImg = (currentImg - 1 + carImgArray.length) % carImgArray.length;
    
    // Add the active class to the new current image
    carImgArray[currentImg].classList.add('active');

    console.log('Left button clicked, currentImg:', currentImg);
});