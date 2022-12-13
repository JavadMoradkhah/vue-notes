import Toastify from 'toastify-js';

const duration = 3000;

export const showSuccessToast = (text) => {
  Toastify({
    text: text,
    duration: duration,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    style: {
      background: '#15803d',
    },
  }).showToast();
};

export const showErrorToast = (text) => {
  Toastify({
    text,
    duration,
    close: true,
    gravity: 'top', // `top` or `bottom`
    position: 'right', // `left`, `center` or `right`
    style: {
      background: '#be123c',
    },
  }).showToast();
};
