// JavaScript code for auto-save feature
var form = document.getElementById("myForm");

// Restore form data from localStorage on page load
window.addEventListener("load", function() {
  var formData = JSON.parse(localStorage.getItem("formData"));
  if (formData) {
    form.name.value = formData.name;
    form.email.value = formData.email;
  }
});

// Throttle function to limit how often auto-save occurs
function throttle(func, delay) {
  let timer;
  return function() {
    if (!timer) {
      timer = setTimeout(() => {
        func();
        timer = null;
      }, delay);
    }
  };
}

// Function to save form data to localStorage
function saveFormData() {
  var formData = {
    name: form.name.value,
    email: form.email.value
  };
  localStorage.setItem("formData", JSON.stringify(formData));
}

// Event listeners to trigger auto-save when form fields are updated
form.name.addEventListener("input", throttle(saveFormData, 1000));
form.email.addEventListener("input", throttle(saveFormData, 1000));
