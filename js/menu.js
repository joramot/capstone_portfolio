// Dropdown Menu
const btncls = document.querySelector('#closeOnClick');
const btnopn = document.querySelector('#openOnClick');
const menuItem = document.querySelectorAll('#menuOpt li a');

const btnOpnNav = () => {
  document.getElementById('myNav').style.height = '100%';
};

const btncloseNav = () => {
  document.getElementById('myNav').style.height = '0%';
};

btnopn.addEventListener('click', btnOpnNav);
btncls.addEventListener('click', btncloseNav);
menuItem.forEach((item) => {
  item.addEventListener('click', btncloseNav);
});
