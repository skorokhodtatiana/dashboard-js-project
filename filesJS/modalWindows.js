
// let buttonCloseModalLogIn = document.getElementById('button_closeModalLogIn');
// buttonCloseModalLogIn.addEventListener('click', closeModalLogIn);

// let modal2 = document.getElementById('popupRegistration');
// let modal2Content = document.getElementById('popupRegistration__content');

function closeModalWindow(modal, modalContent){
    modal.classList.add('hidden');
    modal.classList.remove('visible');
    modalContent.classList.add('hidden');
    modalContent.classList.remove('visible');
}

// function openModalWindow(modal, modalContent){
//     modal.classList.remove('hidden');
//     modal.classList.add('visible');
//     modalContent.classList.remove('hidden');
//     modalContent.classList.add('visible');
// }

// function openModalLogIn() {
//     modalLogIn.classList.remove('hidden');
//     modalLogIn.classList.add('visible');
//     modalLogInContent.classList.remove('hidden');
//     modalLogInContent.classList.add('visible');
// }

// function openModal2() {
//     modal2Content.classList.remove('hidden');
//     modal2Content.classList.add('visible');
//     modal2.classList.remove('hidden');
//     modal2.classList.add('visible');
// }
// let buttonCloseModal2 = document.getElementById('button_closeModal2');
// buttonCloseModal2.addEventListener('click', closeModal2);

module.exports = closeModalWindow;
