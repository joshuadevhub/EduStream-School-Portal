document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const userName = document.querySelector("#login-username");
  const password = document.querySelector("#login-pass");

  // JavaScript For Page Redirection
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    checkValidation();

    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if (userNameValue === "John Smith" && passwordValue === "password123") {
      window.location.href =
        "../EduStream Student Dashboard Page/dashboard.html";
    } else if (userNameValue === "Admin" && passwordValue === "password123") {
      window.location.href = "../EduStream Admin Dashboard Page/admin.html";
    } else if (userNameValue === "" && passwordValue === "") {
      setErrorFor(userName, "This field cannot be empty");
      setErrorFor(password, "This field cannot be empty");
    } else if (
      userNameValue !== "John Smith" &&
      passwordValue !== "password123"
    ) {
      setErrorFor(userName, `${userName.value} does not exist!`);
      setErrorFor(password, `${password.value} does not exist!`);
    }
  });

  // JavaScript For Form Validation
  function checkValidation() {
    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if (passwordValue === "") {
      setErrorFor(password, "Password Cannot be Empty!");
    } else {
      setSuccessFor(password);
    }

    if (userNameValue === "") {
      setErrorFor(userName, "Username Cannot be Empty!");
    } else {
      setSuccessFor(userName);
    }
  }

  const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    const errorMessage = formControl.querySelector(".error-message");
    if (!errorMessage) return;
    errorMessage.innerText = message;
    formControl.classList.add("error");
    formControl.classList.remove("success");
  };

  const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.add("success");
    formControl.classList.remove("error");
  };
});
