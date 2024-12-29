document.addEventListener("DOMContentLoaded", () => {
  const playButton = document.getElementById("toggle-music");
  const audio = new Audio("melody.mp3");
  const snowContainer = document.querySelector(".snow");
  let isPlaying = false;

  // Управление музыкой
  playButton.addEventListener("click", () => {
    if (isPlaying) {
      audio.pause();
      playButton.textContent = "🎵 Включить мелодию";
    } else {
      audio.play();
      playButton.textContent = "🎵 Остановить мелодию";
    }
    isPlaying = !isPlaying;
  });

  // Генерация снежинок
  const createSnowflakes = () => {
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement("div");
      snowflake.className = "snowflake";

      // Параметры снежинки
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Скорость падения
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Задержка перед началом

      snowContainer.appendChild(snowflake);
    }
  };

  // Проверка наличия контейнера и создание снежинок
  if (snowContainer) {
    createSnowflakes();
  } else {
    console.error("Контейнер для снега (.snow) не найден!");
  }
});
