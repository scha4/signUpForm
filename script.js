const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const password2 = document.querySelector("#password2");
const password1 = document.querySelector("#password1");
const errorMessage = document.querySelector(".errorMessage");

document.querySelector(".SUbtn").addEventListener("click", checkPasswords);

function checkPasswords() {
  const password1 = document.getElementById("password1");
  const password2 = document.getElementById("password2");
  const error = document.querySelector(".errorMessage");

  if (password1.value !== password2.value) {
    error.textContent = "Passwords do not match!";
    return false;
  } else {
    error.textContent = "";
    return true;
  }
}
// Get the form element
const form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", (event) => {
  // Get all the required input elements
  const requiredInputs = form.querySelectorAll("[required]");

  // Loop through all the required input elements
  for (let i = 0; i < requiredInputs.length; i++) {
    // Check if the input is empty
    if (requiredInputs[i].value.trim() === "") {
      // Prevent the form from submitting
      event.preventDefault();

      // Show the error message in a pop-up
      alert("Please fill in all the required fields.");

      // Exit the function
      return;
    }
  }
});
