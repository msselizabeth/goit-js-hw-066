
const inputEl = document.querySelector('#validation-input');

const onInput = (event) => {    
   let userName = inputEl.value;
    return userName.length === Number(inputEl.dataset.length) 
    ? inputEl.classList = 'valid'
    : inputEl.classList = 'invalid';
    
}

inputEl.addEventListener('blur', onInput);
