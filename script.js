// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const closeIcon = document.getElementById("close-icon");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    });
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        const offsetTop = targetSection.offsetTop - 80; // Account for sticky navbar
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});

function checkQuiz() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const resultDiv = document.getElementById("quiz-result");

  if (!q1 || !q2) {
    resultDiv.className =
      "mt-6 bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded";
    resultDiv.innerHTML =
      '<p class="text-yellow-800">⚠️ Mohon jawab semua pertanyaan terlebih dahulu!</p>';
    resultDiv.classList.remove("hidden");
    return;
  }

  let score = 0;
  let feedback = '<div class="space-y-3">';

  if (q1.value === "b") {
    score++;
    feedback +=
      '<p class="text-green-700">✅ Pertanyaan 1: Benar! Simple Queue digunakan untuk membatasi dan mengatur bandwidth.</p>';
  } else {
    feedback +=
      '<p class="text-red-700">❌ Pertanyaan 1: Salah. Jawaban yang benar adalah "Membatasi dan mengatur bandwidth".</p>';
  }

  if (q2.value === "b") {
    score++;
    feedback +=
      '<p class="text-green-700">✅ Pertanyaan 2: Benar! Format max-limit adalah download/upload.</p>';
  } else {
    feedback +=
      '<p class="text-red-700">❌ Pertanyaan 2: Salah. Jawaban yang benar adalah "download/upload".</p>';
  }

  feedback += "</div>";

  const percentage = (score / 2) * 100;
  let resultClass = "mt-6 p-6 rounded-xl ";
  let resultMessage = "";

  if (percentage === 100) {
    resultClass += "bg-green-100 border-2 border-green-500";
    resultMessage =
      '<p class="text-2xl font-bold text-green-800 mb-3">🎉 jarum! Nilai Anda: 100%</p>';
  } else if (percentage >= 50) {
    resultClass += "bg-blue-100 border-2 border-blue-500";
    resultMessage =
      '<p class="text-2xl font-bold text-blue-800 mb-3">👍 Bagus! Nilai Anda: ' +
      percentage +
      "%</p>";
  } else {
    resultClass += "bg-red-100 border-2 border-red-500";
    resultMessage =
      '<p class="text-2xl font-bold text-red-800 mb-3">📚 Perlu Belajar Lagi. Nilai Anda: ' +
      percentage +
      "%</p>";
  }

  resultDiv.className = resultClass;
  resultDiv.innerHTML = resultMessage + feedback;
  resultDiv.classList.remove("hidden");

  resultDiv.scrollIntoView({ behavior: "smooth", block: "nearest" });
}
