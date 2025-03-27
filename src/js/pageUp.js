const pageUp = () => {
    const upBtn = document.querySelector('.up');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 1600) {
            upBtn.style.display = 'block';
        } else {
            upBtn.style.display = 'none';
        }
    });
}

export default pageUp;