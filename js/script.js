let button = document.getElementById('burger');
let navigation = document.getElementById('navigation');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
})