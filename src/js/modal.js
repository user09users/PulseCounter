const consultationButton = (modalConsultation) => {
    const helpButton = document.querySelectorAll(modalConsultation);
    const formConsultation = document.querySelector('#consultation');
    const formThanks = document.querySelector('#thanks');
    const modals = document.querySelectorAll('.modal');
    const overlay = document.querySelector('.overlay');
    const close = document.querySelector('.modal__close');
    const buttonSubmit = document.querySelector('.button_submit');



    helpButton.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            formConsultation.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    const closeModal = () => {
        close.addEventListener('click', (e) => {
            e.preventDefault();

            modals.forEach(modal => {
                e.preventDefault();
                modal.style.display = 'none';
                overlay.style.display = 'none';
            });
        });
    };

    closeModal();

    buttonSubmit.addEventListener('submit', (e) => {
        e.preventDefault();
        /* closeModal(); */
        formThanks.style.display = 'block';
    })

}

export default consultationButton;

