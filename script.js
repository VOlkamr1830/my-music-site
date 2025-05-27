// Зміна заголовка
document.getElementById("changeTitleBtn").addEventListener("click", () => {
  const headline = document.querySelector(".headline");
  headline.textContent = "Ви натиснули кнопку!";
  alert("Заголовок змінено 😊");
});

// Пасхалка — натисни клавішу "m"
document.addEventListener("keydown", (event) => {
  if (event.key === "m" || event.key === "M") {
    alert("🎵 Музична пасхалка активована!");
  }
});
window.addEventListener('scroll', function() {
  let scroll = window.scrollY;
  document.querySelector('.parallax-layer').style.transform = `translateY(${scroll * 0.5}px)`;
});
