// Get elements
const themeToggle = document.getElementById('theme-toggle');
const themeLink = document.getElementById('theme-link');
const settingsBtn = document.getElementById('settings-btn');
const settingsMenu = document.getElementById('settings-menu');

// Load initial theme
if (localStorage.getItem('theme') === 'dark') {
    themeLink.href = 'dark-styles.css';
    themeToggle.checked = true;
} else {
    themeLink.href = 'styles.css';
}

// Toggle theme
themeToggle.addEventListener('change', function () {
    if (this.checked) {
        themeLink.href = 'dark-styles.css';
        localStorage.setItem('theme', 'dark');
    } else {
        themeLink.href = 'styles.css';
        localStorage.setItem('theme', 'light');
    }
});

// Toggle settings menu visibility
settingsBtn.addEventListener('click', function () {
    settingsMenu.classList.toggle('hidden');
});

// Hide settings menu when clicking outside
document.addEventListener('click', function (event) {
    if (!settingsMenu.contains(event.target) && !settingsBtn.contains(event.target)) {
        settingsMenu.classList.add('hidden');
    }
});
