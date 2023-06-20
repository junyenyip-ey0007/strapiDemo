function checkAuthentication() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../../index.html";
  }
}

checkAuthentication();

function logout() {
  localStorage.removeItem("token");

  window.location.href = "../../index.html";
}

document.getElementById("logout-button").addEventListener("click", logout);

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var formData = {
    token: "your-recaptcha-token",
    formName: "Test Form",
    formData: {
      name: document.getElementsByName("name")[0].value,
      email: document.getElementsByName("email")[0].value,
      message: document.getElementsByName("message")[0].value,
    },
  };

  fetch("http://localhost:1337/api/ezforms/submit/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      alert("Form data submitted successfully");
      console.log("Form data submitted successfully:", data);
    })
    .catch((error) => {
      alert("Error submitting form data");
      console.error("Error submitting form data:", error);
    });
});

function goToJob() {
    window.location.href = "../job/index.html";
  }
