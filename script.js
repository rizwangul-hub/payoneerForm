function handleSignup(event) {
  event.preventDefault();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-pass").value;

  if (name && email && password) {
    const user = { name: name, email: email, password: password };

    let payoneer = JSON.parse(localStorage.getItem("payoneer")) || [];

    payoneer.push(user);

    localStorage.setItem("payoneer", JSON.stringify(payoneer));

    alert("Signup Successful! Please Login.");

    window.location.href = "login.html";
  }
}
function handleLogin(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-pass").value;

  const payoneer = JSON.parse(localStorage.getItem("payoneer")) || [];

  const storedUser = payoneer.find(
    (user) => user.email === email && user.password === password,
  );

  if (storedUser) {
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userName", storedUser.name);

    alert("Login Successful!");
  } else {
    alert("Invalid Email or Password");
  }
}
