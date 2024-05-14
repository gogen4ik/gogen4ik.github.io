document.querySelector('.menu-button').addEventListener('click', function() {
  var dropdown = document.querySelector('.dropdown-menu');
  if (dropdown.style.display === 'none') {
      dropdown.style.display = 'block';
  } else {
      dropdown.style.display = 'none';
  }
});


// Ссылки на кнопки
const loginButton = document.querySelector('.login-button');
const logoutButton = document.querySelector('.logout-button');

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

// Функция для удаления cookie
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Функция для проверки авторизации пользователя
function checkUserAuth() {
  const userData = getCookie('userData');
  return !!userData; // Возвращает true, если пользователь авторизован, иначе false
}

// Функция для отображения/скрытия кнопок входа и выхода
function toggleAuthButtons() {
  if (checkUserAuth()) {
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline';
  } else {
    loginButton.style.display = 'inline';
    logoutButton.style.display = 'none';
  }
}

// Обработчик события для выхода из системы
logoutButton.addEventListener('click', () => {
  deleteCookie('userData');
  toggleAuthButtons();
});

// Проверка авторизации пользователя при загрузке страницы
window.addEventListener('load', toggleAuthButtons);


// Ссылки на элементы
const addReviewBtn = document.querySelector('.add-review-btn');
const reviewModal = document.getElementById('reviewModal');
reviewModal.style.display = 'none'; // Скрываем модальное окно при загрузке страницы
const closeModalBtn = reviewModal.querySelector('.close');

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

// Функция для проверки авторизации пользователя
function checkUserAuth() {
  const userData = getCookie('userData');
  return !!userData; // Возвращает true, если пользователь авторизован, иначе false
}

// Функция для отображения/скрытия кнопки добавления отзыва
function toggleAddReviewButton() {
  if (checkUserAuth()) {
    addReviewBtn.style.display = 'inline';
  } else {
    addReviewBtn.style.display = 'none';
  }
}

// Обработчик события для открытия модального окна
addReviewBtn.addEventListener('click', () => {
  reviewModal.style.display = 'block';
});

// Обработчик события для закрытия модального окна
closeModalBtn.addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

// Проверка авторизации пользователя при загрузке страницы
window.addEventListener('load', toggleAddReviewButton);

// Ссылки на элементы
const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.createElement('div');
reviewsContainer.classList.add('reviews-container');

// Функция для сохранения отзыва в localStorage
function saveReview(author, book, review) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviews.push({ author, book, review });
  localStorage.setItem('reviews', JSON.stringify(reviews));
}

// Функция для отображения отзывов на странице
function displayReviews() {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  reviewsContainer.innerHTML = '';

  reviews.forEach(({ author, book, review }) => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <h3>${author} - ${book}</h3>
      <p>${review}</p>
    `;
    reviewsContainer.appendChild(reviewElement);
  });

  const existingContainer = document.querySelector('.reviews-container');
  if (existingContainer) {
    document.body.replaceChild(reviewsContainer, existingContainer);
  } else {
    document.body.appendChild(reviewsContainer);
  }
}

// Обработчик события для открытия модального окна
addReviewBtn.addEventListener('click', () => {
  reviewModal.style.display = 'block';
});

// Обработчик события для закрытия модального окна

closeModalBtn.addEventListener('click', () => {
  reviewModal.style.display = 'none';
});

// Обработчик события для отправки формы отзыва
reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const author = document.getElementById('author').value;
  const book = document.getElementById('book').value;
  const review = document.getElementById('review').value;

  if (author && book && review) {
    saveReview(author, book, review);
    displayReviews();
    reviewModal.style.display = 'none';
  } else {
    alert('Пожалуйста, заполните все поля');
  }
});

// Проверка авторизации пользователя при загрузке страницы
window.addEventListener('load', () => {
  toggleAddReviewButton();
  displayReviews();
});
