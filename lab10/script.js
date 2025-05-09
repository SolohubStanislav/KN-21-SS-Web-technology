document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Будь ласка, заповніть усі поля форми.");
      return;
    }
  
    alert(`Дякуємо, ${name}, ваше повідомлення надіслано!`);
    console.log("Ім’я:", name);
    console.log("Email:", email);
    console.log("Повідомлення:", message);
  
    document.getElementById("contactForm").reset();
  });