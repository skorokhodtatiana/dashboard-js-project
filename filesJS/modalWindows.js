let modalLogIn = document.getElementById('popupLogIn');
let modalLogInContent = document.getElementById('popupLogIn__content');

function openModalLogIn() {
    modalLogIn.classList.remove('hidden');
    modalLogIn.classList.add('visible');
    modalLogInContent.classList.remove('hidden');
    modalLogInContent.classList.add('visible');
}

let buttonLogIn = document.getElementById('dashboard__logIn');
buttonLogIn.addEventListener('click', openModalLogIn);