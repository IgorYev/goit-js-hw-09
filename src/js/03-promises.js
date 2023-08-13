import Notiflix from 'notiflix';

const form = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const delayInput = parseInt(this.elements.delay.value);
    const stepInput = parseInt(this.elements.step.value);
    const amountInput = parseInt(this.elements.amount.value);

    for (let i = 1; i <= amountInput; i++) {
      const currentDelay = delayInput + (i - 1) * stepInput;
      try {
        const result = await createPromise(i, currentDelay);
        Notiflix.Notify.success(`✅ Fulfilled promise ${result.position} in ${result.delay}ms`);
      } catch (error) {
        Notiflix.Notify.failure(`❌ Rejected promise ${error.position} in ${error.delay}ms`);
      }
    }
  });
});
