document.querySelector('.menu-button').addEventListener('click', function() {
    var dropdown = document.querySelector('.dropdown-menu');
    if (dropdown.style.display === 'none') {
        dropdown.style.display = 'block';
    } else {
        dropdown.style.display = 'none';
    }
});