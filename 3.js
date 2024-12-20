document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("register-form");
  const registerMessage = document.getElementById("register-message");
  const employeeList = document.getElementById("employee-list");

  // Handle Register Form Submission
  registerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const adress = document.getElementById("adress").value;
    const website = document.getElementById("website").value;

    const formData = { name, email, phone, adress, website };
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      registerMessage.textContent = `User Registered! ID: ${data.id}`;
      registerMessage.style.color = "green";
      registerForm.reset();
    } catch (error) {
      registerMessage.textContent = "Failed to register user.";
      registerMessage.style.color = "red";
    }
  });

  const fetchlatestemployee = async () => {};

  // Fetch Employee List
  const fetchEmployees = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const employees = await response.json();

      employees.forEach((employee) => {
        const employeeCard = document.createElement("div");
        employeeCard.className = "employee-card";

        const employeeName = document.createElement("h3");
        employeeName.textContent = employee.name;

        const employeeEmail = document.createElement("p");
        employeeEmail.textContent = `Email: ${employee.email}`;

        const employeePhone = document.createElement("p");
        employeePhone.textContent = `Phone: ${employee.phone}`;

        employeeCard.appendChild(employeeName);
        employeeCard.appendChild(employeeEmail);
        employeeCard.appendChild(employeePhone);

        employeeList.appendChild(employeeCard);
      });
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  fetchEmployees();
});
