const input = document.getElementsByTagName('input');
const inputBtns = document.querySelectorAll('button');
const ul = document.querySelector('.items ul');

inputBtns[0].addEventListener('click', () => {
  ul.removeChild();
});

inputBtns[1].addEventListener('click', e => {
  e.preventDefault();

  if (input.text.value !== '') {
    const li = document.createElement('li');
    li.innerHTML = input.text.value;
    ul.appendChild(li);
    input.text.value = '';
    input.focus;
  }
});

ul.addEventListener('click', e => {
  ul.removeChild(e.target);
});
