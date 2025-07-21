
// console.log("script loaded")

document.addEventListener("DOMContentLoaded", () => {
    // console.log("DOM fully loaded");
  document.getElementById("btn").addEventListener("click", async function (e) {
    // console.log("DOM fully loaded");
    e.preventDefault(); // prevent form refresh

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!firstName || !lastName || !email || !message) {
      document.getElementById("responseMessage").textContent = "Please fill all fields!";
      return;
    }

    const data = { firstName, lastName, email, message };
    // console.log(data)

    try {
      const response = await fetch("http://localhost:3000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        document.getElementById("responseMessage").textContent = "Message sent successfully!";
        document.getElementById("contactForm").reset(); // use form ID here
      } else {
        document.getElementById("responseMessage").textContent = result.error || "Failed to send message.";
      }
    } catch (err) {
      console.error(err);
      document.getElementById("responseMessage").textContent = "Error sending message.";
    }
  });
});



