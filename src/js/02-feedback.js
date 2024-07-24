import _ from 'lodash'
  const dataReset = {
    email: "",
    message: "",
};

const keyData = "feedback-form-state";
const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error("Set state error: ", error.message);
  }
};

const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? dataReset : JSON.parse(serializedState);
  } catch (error) {
    console.error("Get state error: ", error.message);
  }
};

const remove = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Remove state error: ", error.message);
  }
};

const form = document.querySelector(".feedback-form");
const dataForm = load(keyData);

form.elements.email.value = dataForm.email ?? "";
form.elements.message.value = dataForm.message ?? "";

form.addEventListener("input", _.throttle((evt) => {
  dataForm.email = form.elements.email.value;
  dataForm.message = form.elements.message.value;
  save(keyData, dataForm);
}, 500));

form.addEventListener("submit", (evt) => {
    console.log(dataForm);
    evt.preventDefault();
    remove(keyData);
    form.reset();
});