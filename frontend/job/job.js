function checkAuthentication() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "../login/login.html";
  }
}

checkAuthentication();

var apiUrl = "http://localhost:1337/api/jobs?populate=*";
fetch(apiUrl)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var jobArray = Array.isArray(data) ? data : data.data;

    // Get the parent container to append job data elements
    var parentContainer = document.getElementById("jobDataContainer");

    jobArray.forEach((job) => {
      var jobAttributes = job.attributes;

      // Create separate HTML elements for each job
      var jobElement = document.createElement("div");
      var vacancyElement = document.createElement("p");
      var descriptionElement = document.createElement("p");
      var recruiterElement = document.createElement("p");
      var emailElement = document.createElement("p");
      var salaryElement = document.createElement("p");

      // Set the data for each job element
      vacancyElement.textContent = "title: " + jobAttributes.vacancy;
      descriptionElement.textContent = "desc: " + jobAttributes.description;
      recruiterElement.textContent = "recruiter: " + jobAttributes.recruiter;
      emailElement.textContent = "email: " + jobAttributes.email;
      salaryElement.textContent = "salary: " + jobAttributes.salary;

      // Apply styles to the job data elements
      jobElement.style.border = "1px solid #ccc";
      jobElement.style.padding = "10px";
      jobElement.style.maxWidth = "200px";
      vacancyElement.style.fontWeight = "bold";
      emailElement.style.color = "blue";

      // Append job data elements to the job element
      jobElement.appendChild(vacancyElement);
      jobElement.appendChild(descriptionElement);
      jobElement.appendChild(recruiterElement);
      jobElement.appendChild(emailElement);
      jobElement.appendChild(salaryElement);

      // Append the job element to the parent container
      parentContainer.appendChild(jobElement);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
