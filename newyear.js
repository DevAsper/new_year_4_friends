document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.querySelector(".snow");
  const playButton = document.getElementById("play-music");
  const audio = new Audio("melody.mp3");

  // Проверяем, есть ли контейнер для снега
  if (!snowContainer) {
    console.error("Контейнер для снега (.snow) не найден!");
    return;
  }

  // Функция для генерации снежинок
  const createSnowflakes = () => {
    for (let i = 0; i < 100; i++) {
      const snowflake = document.createElement("span");

      // Генерация случайных стилей для снежинок
      snowflake.style.left = `${Math.random() * 100}%`;
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Скорость падения
      snowflake.style.animationDelay = `${Math.random() * 5}s`; // Задержка перед началом
      snowflake.style.opacity = `${Math.random() * 0.8 + 0.2}`; // Прозрачность
      snowflake.style.width = `${Math.random() * 8 + 2}px`; // Размер снежинки
      snowflake.style.height = snowflake.style.width;

      snowContainer.appendChild(snowflake);
    }
  };

  // Воспроизведение музыки
  playButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playButton.textContent = "Выключить мелодию";
    } else {
      audio.pause();
      playButton.textContent = "Включить мелодию";
    }
  });

  // Генерация снежинок
  createSnowflakes();
});
