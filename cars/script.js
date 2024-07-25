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
