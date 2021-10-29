function closeModalWindow(modal, modalContent){
    modal.classList.add('hidden');
    modal.classList.remove('visible');
    modalContent.classList.add('hidden');
    modalContent.classList.remove('visible');
}

function openModalWindow(modal, modalContent){
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    modalContent.classList.remove('hidden');
    modalContent.classList.add('visible');
}

module.exports.close = closeModalWindow;
module.exports.open = openModalWindow;