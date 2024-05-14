

// Получаем ссылки на формы
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Функция для установки cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  const cookieValue = `${encodeURIComponent(name)}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/`;
  document.cookie = cookieValue;
}

// Функция для получения значения cookie по имени
function getCookie(name) {
  const cookies = document.cookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith(`${name}=`)) {
      return decodeURIComponent(cookie.substring(name.length + 1));
    }
  }
  return null;
}

// Функция для сохранения данных регистрации в cookie
function saveUserData(username, email, password) {
  const userData = `${username}|${email}|${password}`;
  setCookie('userData', userData, 30); // Устанавливаем срок действия cookie на 30 дней
}

// Функция для проверки данных авторизации
function checkUserData(email, password) {
  const userData = getCookie('userData');
  if (userData) {
    const [savedUsername, savedEmail, savedPassword] = userData.split('|');
    if (savedEmail === email && savedPassword === password) {
      // Перенаправление на другую страницу после успешной авторизации
      window.location.href = 'glav/index.html';
    } else {
      alert('Неверный email или пароль');
    }
  } else {
    alert('Пользователь не найден');
  }
}

// Обработчик события для формы регистрации
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('regUsername').value;
  const email = document.getElementById('regEmail').value;
  const password = document.getElementById('regPassword').value;

  // Проверка на заполненность полей
  if (username && email && password) {
    saveUserData(username, email, password);
    alert('Регистрация прошла успешно!');
  } else {
    alert('Пожалуйста, заполните все поля');
  }
});

// Обработчик события для формы авторизации
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;

  // Проверка на заполненность полей
  if (email && password) {
    checkUserData(email, password);
  } else {
    alert('Пожалуйста, заполните все поля');
  }
});