const fname = document.getElementById('name').value;
const femail = document.getElementById('email').value;
const fmsg = document.getElementById('msg').value;
let dataform = {
  name: fname,
  email: femail,
  msg: fmsg,
};

localStorage.setItem('dataform', JSON.stringify(dataform));

const datastorage = localStorage.getItem('dataform');
dataform = JSON.parse(datastorage);