const form = document.querySelector(`form.feedback-form`);
form.addEventListener('submit', submitDone);

const email = document.querySelector(`form.feedback-form > label > input`);
const message = document.querySelector(`form.feedback-form > label > textarea`);
const localStorageKey = 'feedback-form-state';

form.addEventListener('input', event => {
  const { name, value } = event.target;
  const currentData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
  currentData[name] = value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(currentData));
});

function submitDone(event) {
  event.preventDefault();
  if (
    event.target.elements.email.value.trim() === '' ||
    event.target.elements.message.value.trim() === ''
  ) {
    return alert('All form fields must be filled in');
  }
  console.log('Submit done!');
  console.log({
    email: event.target.elements.email.value.trim(),
    message: event.target.elements.message.value.trim(),
  });
  form.reset();
  localStorage.removeItem(localStorageKey);
  alert(`Good job!\nSubmit done!`);
}

const saveFormData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};

email.value = saveFormData.email ?? ``;
message.value = saveFormData.message ?? ``;
