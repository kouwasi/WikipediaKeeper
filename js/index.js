document.querySelector('.mw-page-container').classList.remove('mw-page-container');
document.querySelectorAll('.mw-workspace-container').forEach((el) => {
    el.classList.remove('mw-workspace-container');
});
document.querySelector('.mw-article-toolbar-container').style.maxWidth = 'none';
document.querySelectorAll('.mw-content-container').forEach((el => {
    el.style.maxWidth = 'none';
}))
