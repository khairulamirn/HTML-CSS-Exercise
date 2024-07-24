const lis = document.querySelectorAll('.li');

lis.forEach((li) => {
    const hr = li.querySelector('.hr');
    
    li.addEventListener('mouseover', () => {
        hr.classList.add('active');
    });

    li.addEventListener('mouseout', () => {
        hr.classList.remove('active');
    });
});