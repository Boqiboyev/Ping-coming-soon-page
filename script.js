
const form = document.querySelector('form');
const button = form.querySelector("#button");
const msg = 'Please provide a valid email address';

const error = document.createElement('p')
error.classList.add('error_text');
error.textContent = msg;

function checkEmail(e){
  e.preventDefault();
  const email = e.target.querySelector('type="text"').value;
  if(!validateEmail(email)){
    form.classList.add('error');
    form.insertBefore(error, button)
  } else {
    form.classList.remove('error');
    form.removeChild(error);
  }
}
function validateEmail(email) {
  const re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', checkEmail)