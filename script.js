document.addEventListener('DOMContentLoaded', () => {
    const menuIntro = document.getElementById('menu-intro');
    const menuEducation = document.getElementById('menu-education');
    const menuWorks = document.getElementById('menu-works');
    const imageGallery = document.getElementById('image-gallery');
    const welcomeMessage = document.getElementById('welcome-message');

    function showImages(images) {
        imageGallery.innerHTML = '';
        welcomeMessage.style.display = 'none';
        images.forEach(imageName => {
            const img = document.createElement('img');
            img.src = imageName;
            img.alt = `Portfolio Image`;
            imageGallery.appendChild(img);
        });
    }

    menuIntro.addEventListener('click', (e) => {
        e.preventDefault();
        showImages(['1portfolio.png', '2portfolio.png', '3portfolio.png', '4portfolio.png']);
    });

    menuEducation.addEventListener('click', (e) => {
        e.preventDefault();
        showImages(['5portfolio.png']);
    });

    menuWorks.addEventListener('click', (e) => {
        e.preventDefault();
        showImages(['6portfolio.png', '7portfolio.png']);
    });
});