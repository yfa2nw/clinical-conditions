// Applies the saved theme before first paint to avoid a flash.
// "gi-theme" is the key used before the site covered more than one specialty.
try {
    const savedTheme = localStorage.getItem("clinical-theme") || localStorage.getItem("gi-theme");
    if (savedTheme) document.documentElement.dataset.theme = savedTheme;
} catch (error) {}
