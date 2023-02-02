import Fun from './fun.js';

const scoreFuns = new Fun();
const form = document.querySelector('form');

const formAction = () => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name');
    const score = document.querySelector('#score');

    if (name.value !== '' && score.value !== '') {
      scoreFuns.add(name.value, score.value);
      name.value = '';
      score.value = '';
    }

    scoreFuns.show();
  });
};

const refresh = document.querySelector('.refresh');
const refreshAction = () => {
  refresh.addEventListener('click', () => {
    window.location.reload();
    scoreFuns.show();
  });
};

export { formAction, refreshAction };
