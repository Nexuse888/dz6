const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal_close');
const modalTrigger = document.querySelector('#btn-get');
let modalTimeout;

const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modalTrigger.onclick = () => openModal();
closeModalButton.onclick = () => closeModal();
modal.onclick = (event) => {
    if (event.target === modal) {
        closeModal();
    }
}

const resetModalTimeout = () => {
    clearTimeout(modalTimeout);
    modalTimeout = setTimeout(openModal, 10000);
}

document.addEventListener('mousemove', resetModalTimeout);
document.addEventListener('keydown', resetModalTimeout);

resetModalTimeout();

const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition + windowHeight >= documentHeight) {
        openModal();
        window.removeEventListener('scroll', handleScroll);
    }
};

window.addEventListener('scroll', handleScroll);
