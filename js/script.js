const btn = document.querySelector('.js-btn');
const form = document.querySelector('.js-form');
const input = document.querySelector('.js-input');
const items = document.querySelectorAll('.js-item');
const errorTxt = document.querySelector('.js-error');
const contents = document.querySelectorAll('.js-content');

const emailRegExp =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;

const validateInput = function (e) {
  e.preventDefault();

  if (!emailRegExp.test(input.value) || input.value === '') {
    [input, errorTxt].forEach((el) => el.classList.add('error--is-visible'));

    errorTxt.textContent = 'Please enter a valid email address';
  } else {
    [input, errorTxt].forEach((el) => el.classList.remove('error--is-visible'));
    errorTxt.classList.add('success--is-visible');

    errorTxt.textContent = 'Email address succesfully added';

    setTimeout(() => {
      input.value = '';
      errorTxt.classList.remove('success--is-visible');
    }, 1000);
  }
};

const slideOnScroll = function (items) {
  const option = {
    threshold: 0.5,
    rootMargin: '0px 0px -200px 0px',
  };

  const callback = function (entries) {
    entries.forEach((entry) => {
      !entry.isIntersecting || entry.target.classList.add('is-visible');
    });
  };

  const observer = new IntersectionObserver(callback, option);

  items.forEach((item) => observer.observe(item));
};

form.addEventListener('submit', validateInput);
window.addEventListener('load', () => (input.value = ''));
window.addEventListener('DOMContentLoaded', () => {
  [items, contents].forEach((el) => slideOnScroll(el));
});
