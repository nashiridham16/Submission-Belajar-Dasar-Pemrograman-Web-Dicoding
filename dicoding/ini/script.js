const typingContainer = document.getElementById("typing-container");
const typingText = document.getElementById("typing-text");

const textToType = "Digital Marketing Specialist | Front End Web Developer |  Digital Advertiser | SEO Specialist | UI Desainer | Graphic Designer."; // Ganti dengan teks yang ingin Anda ketikkan
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = typingText.textContent;

    if (!isDeleting && charIndex < textToType.length) {
        typingText.textContent = currentText + textToType.charAt(charIndex);
        charIndex++;
    } else if (isDeleting && charIndex >= 0) {
        typingText.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;
    }

    if (charIndex === textToType.length) {
        isDeleting = true;
    }

    if (charIndex === 0 && isDeleting) {
        isDeleting = false;
    }

    const typingSpeed = isDeleting ? 10 : 30;
    setTimeout(typeText, typingSpeed);
}

typeText();


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('kontakForm').addEventListener('submit', function (e) {
      e.preventDefault();
  
      var name = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var message = document.getElementById('message').value;
  
      if (name === '' || email === '' || message === '') {
        alert('Silakan isi semua bidang formulir.');
      } else {

        alert('Pesan Anda telah terkirim!');

        document.getElementById('kontakForm').reset();
      }
    });
  });
  