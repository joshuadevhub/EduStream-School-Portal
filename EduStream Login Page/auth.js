document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#login-form");
  const userName = document.querySelector("#login-username");
  const password = document.querySelector("#login-pass");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const userNameValue = userName.value.trim();
    const passwordValue = password.value.trim();

    if (userNameValue === "John Smith" && passwordValue === "password123") {
      window.location.href =
        "../EduStream Student Dashboard Page/dashboard.html";
    } else {
      alert(`${userNameValue} does not exist in our database!`);
    }
  });
});
