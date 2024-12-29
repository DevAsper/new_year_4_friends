function toggleMusic() {
  const audio = document.getElementById('background-music');
  if (audio.paused) {
    audio.play();
    alert('Музыка включена! С Новым Годом!');
  } else {
    audio.pause();
  }
}

function showGiftMessage() {
  const message = document.getElementById('gift-message');
  message.style.display = 'block'; // Показываем сообщение
}

// Эффект падающего снега
const body = document.querySelector('body');
for (let i = 0; i < 300; i++) { // Увеличили количество снежинок до 300
  const snowflake = document.createElement('div');
  snowflake.className = 'snowflake';

  // Случайный размер снежинки
  const size = Math.random() * 10 + 5; // Размер от 5px до 15px
  snowflake.style.width = `${size}px`;
  snowflake.style.height = `${size}px`;

  // Случайное начальное положение по горизонтали
  snowflake.style.left = `${Math.random() * 100}vw`;

  // Случайная длительность падения
  const duration = Math.random() * 3 + 2; // Длительность от 2 до 5 секунд
  snowflake.style.animationDuration = `${duration}s`;

  // Случайная задержка анимации
  const delay = Math.random() * 5; // Задержка до 5 секунд
  snowflake.style.animationDelay = `${delay}s`;

  body.appendChild(snowflake);
}

// Добавляем стили снежинок и анимации через JavaScript
const styles = `
  .snowflake {
    position: absolute;
    top: -10px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.8;
    animation: fall linear infinite;
  }

  @keyframes fall {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(100vh);
    }
  }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
