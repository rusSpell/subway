const categoriesItem = document.querySelectorAll('.categories__item');

categoriesItem.forEach(c => {
    c.addEventListener('click', () => {
        categoriesItem.forEach(s => s.classList.remove('active'));
        c.classList.add('active');
    })
})

