let modalLogIn = document.getElementById('popupLogIn');
let modalLogInContent = document.getElementById('popupLogIn__content');

function openModalLogIn() {
    modalLogIn.classList.remove('hidden');
    modalLogIn.classList.add('visible');
    modalLogInContent.classList.remove('hidden');
    modalLogInContent.classList.add('visible');
}

let buttonLogIn = document.getElementById('dashboardLogIn');
buttonLogIn.addEventListener('click', openModalLogIn);

let inputLogIn = document.getElementById('dashboard_input-login');
let passwordLogIn = document.getElementById('dashboard_input-password');

function closeModalLogIn() {
    modalLogIn.classList.add('hidden');
    modalLogIn.classList.remove('visible');
    modalLogInContent.classList.add('hidden');
    modalLogInContent.classList.remove('visible');
}

let buttonCloseModalLogIn = document.getElementById('button_closeModalLogIn');
buttonCloseModalLogIn.addEventListener('click', closeModalLogIn);


function getDataUsers() {
    let getUser = localStorage.getItem(inputLogIn.value);
    return getUser;
}

function checkDataUsers(getUser) {
    if (getUser) {
        let getUserParse = JSON.parse(getUser);

        let result = checkVerifyPassword(getUserParse);
        return result;

    } else {
        alert("Такой пользовтель не найден, пожалуйста, пройдите регистрацию");
        closeModalLogIn();
    }
}

function checkVerifyPassword(getUserParse) {
    let valPassword = getUserParse.password;
    if (passwordLogIn.value == valPassword) {
        return getUserParse;
    } else {
        alert('Пароль введен не верно');
    }
}

let submitLogIn = document.getElementById('dashboard_submit-form');

submitLogIn.addEventListener('click', function (event) {
    event.preventDefault();
    let dataUser = getDataUsers();
    let parseUser = checkDataUsers(dataUser);
    if (parseUser) {
        hideButtons();
        setName(parseUser);
        saveUserOnline(parseUser);
        closeModalLogIn();
        showNotification();
        showPhoto(parseUser);
        showDropdown();
    }
})

let nameUser = document.getElementById('nameUser');
let surnameUser = document.getElementById('surnameUser');
let urlPhoto = document.getElementById('urlPhoto');
let loginUser = document.getElementById('dashboard_loginRegistration');
let passwordUser = document.getElementById('dashboard_passwordRegistration');

let modal2 = document.getElementById('popupRegistration');
let modal2Content = document.getElementById('popupRegistration__content');

function openModal2() {
    modal2Content.classList.remove('hidden');
    modal2Content.classList.add('visible');
    modal2.classList.remove('hidden');
    modal2.classList.add('visible');
}

let registration = document.getElementById('dashboardRegistration');
registration.addEventListener('click', openModal2);

// function closeModalWindow(modal, modalContent){
//     modal.classList.add('hidden');
//     modal.classList.remove('visible');
//     modalContent.classList.add('hidden');
//     modalContent.classList.remove('visible');
// }

function closeModal2() {
    modal2.classList.add('hidden');
    modal2.classList.remove('visible');
    modal2Content.classList.add('hidden');
    modal2Content.classList.remove('visible');
}

let buttonCloseModal2 = document.getElementById('button_closeModal2');
buttonCloseModal2.addEventListener('click', closeModal2);

let wrapperButton = document.getElementById('dashboardWrapperButton');
let wrapperForgetPas = document.getElementById('dashboardWrapperForgetPas');
let placeUserName = document.getElementById('placeUserName');
let placeWrapperLogin = document.getElementById('dashboardAvatarLogin');
let placeUserLogin = document.getElementById('placeUserLogin');

function hideButtons() {
    wrapperButton.classList.add('hidden');
    wrapperForgetPas.classList.add('hidden');

    wrapperButton.classList.remove('visible');
    wrapperForgetPas.classList.remove('visible');
}

function setName(user) {
    placeWrapperLogin.classList.add('visible');
    placeUserName.classList.add('nameLaoyt');
    placeUserName.innerText = (user.name + " " + user.surname);

    placeUserLogin.innerText = user.login;
    placeUserLogin.classList.add('hidden');
}

function saveUserOnline(user) {
    localStorage.setItem('onlineUser', user.login);
}

let notification = document.getElementById('dashboardNotification');

function showNotification() {
    notification.classList.add('visible')
}

let dropdown = document.getElementById('dashboard__dropdown');

function showDropdown() {
    dropdown.classList.add('visible')
}

function showPhoto(user) {
    let placeUserPhoto = document.getElementById('placeUserPhoto');
    if (user.url) {
        placeUserPhoto.src = user.url;
    } else {
        placeUserPhoto.src = "https://www.belta.by/images/storage/news/with_archive/2020/000029_1605623147_416053_big.jpg";
    }
}

let buttonRegistration = document.getElementById('dashboard_submitRegistration');
buttonRegistration.addEventListener('click', function (event) {
    event.preventDefault();
    let user = {
        name: nameUser.value,
        surname: surnameUser.value,
        url: urlPhoto.value,
        login: loginUser.value,
        password: passwordUser.value,
    }

    let stringUser = JSON.stringify(user);

    localStorage.setItem(loginUser.value, stringUser);

    hideButtons();
    setName(user);
    saveUserOnline(user);
    closeModal2();
    showPhoto(user);
    showNotification();
    showDropdown();
    return user;
})

const dropdownContent = document.getElementById('dashboard__dropdown-content');
const buttonSignOut = document.getElementById('buttonSignOut');

function openDropdown() {
    dropdownContent.classList.add('visible');
    buttonSignOut.classList.add('visible');
}

const dropbtn = document.getElementById('dashboard__dropbtn');
dropbtn.addEventListener('click', openDropdown);

window.onclick = function (event) {
    if (!event.target.matches('.dashboard__dropbtn')) {
        if (dropdownContent.classList.contains('visible')) {
            dropdownContent.classList.remove('visible');
        }
    }
}

function remoteUser() {
    localStorage.setItem('onlineUser', " ");

    placeWrapperLogin.classList.remove('visible');
    placeWrapperLogin.classList.add('hidden');
    placeUserName.classList.remove('nameLaoyt');
    notification.classList.remove('visible');
    notification.classList.add('hidden');
    dropdown.classList.remove('visible');
    dropdown.classList.add('hidden');

}

function showButtonLogIn() {
    wrapperButton.classList.remove('hidden');
    wrapperForgetPas.classList.remove('hidden');
    wrapperButton.classList.add('visible');
    wrapperForgetPas.classList.add('visible');
}

buttonSignOut.addEventListener('click', remoteUser);
buttonSignOut.addEventListener('click', showButtonLogIn);

const inputDonation = document.getElementById('dashboardInputDonat');
let numberDonations = [];

function getNumberDonations(userLogin) {
    let valInputDonation = inputDonation.value;
    numberDonations = [];
    let keyUserDonations = userLogin + "Donation";

    let getValue = localStorage.getItem(keyUserDonations);
    if (getValue) {
        numberDonations.push(getValue);
        if (valInputDonation) {
            numberDonations.push(valInputDonation);
            localStorage.setItem(keyUserDonations, numberDonations);
        }

    } else {
        if (checkEmpty(keyUserDonations, valInputDonation)) {
            localStorage.setItem(keyUserDonations, valInputDonation);
        }
    }
    cleanInputDonation();
}

function checkEmpty(keyUserDonations, valInputDonation) {
    return (keyUserDonations !== " " && valInputDonation !== " ") ? true : false;
}

function cleanInputDonation() {
    inputDonation.value = "";
}

const donatSubmit = document.getElementById('donatSubmit');
donatSubmit.addEventListener('click', function (event) {
    event.preventDefault();
    let userLogin = placeUserLogin.innerText;
    getNumberDonations(userLogin);
})

const inputSearch = document.getElementById('dashboardInputSearch');

function getSearchUser() {
    let resultSearchInput = localStorage.getItem(inputSearch.value + "Donation");
    let validateResultNumbers = resultSearchInput.trim();
    if (validateResultNumbers) {
        let resultTotalAmount = getTotalAmountDonation(validateResultNumbers);
        return resultTotalAmount;
    } else {
        alert('Такой пользователь не найден');
    }
}

function getTotalAmountDonation(validateResultNumbers) {
    let arrTotalAmount = validateResultNumbers.split(",");
    let sumTotalAmountDonation = arrTotalAmount.reduce((a, c) => a + (+c), 0)
    inputSearch.value = inputSearch.value + " " + "donated" + " " + sumTotalAmountDonation + "$";
}

const submitSearch = document.getElementById('dashboardSubmitSearch');
submitSearch.addEventListener('click', function (event) {
    event.preventDefault();
    getSearchUser();
})

window.onload = () => {
    getUserOnline();
}

function getUserOnline() {
    let onlineUser = localStorage.getItem('onlineUser');
    if (onlineUser) {
        let dataUserOnline = localStorage.getItem(onlineUser);
        let parsDataUserOnline = JSON.parse(dataUserOnline);
        if (parsDataUserOnline) {
            processShowUser(parsDataUserOnline);
        }
    }
}

function processShowUser(user) {
    hideButtons();
    setName(user);
    closeModal2();
    showPhoto(user);
    showNotification();
    showDropdown();
}