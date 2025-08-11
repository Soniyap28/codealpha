const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-btn');
let currentIndex = 0;
let visibleImages = [];

document.querySelectorAll('.gallery-item img').forEach((img, index) => {
  img.addEventListener('click', () => {
    visibleImages = Array.from(document.querySelectorAll('.gallery-item'))
      .filter(item => item.style.display !== 'none')
      .map(item => item.querySelector('img'));
    currentIndex = visibleImages.indexOf(img);
    openLightbox();
  });
});

function openLightbox() {
  lightbox.style.display = 'flex';
  lightboxImg.src = visibleImages[currentIndex].src;
}

closeBtn.onclick = () => {
  lightbox.style.display = 'none';
};

nextBtn.onclick = () => {
  currentIndex = (currentIndex + 1) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
};

prevBtn.onclick = () => {
  currentIndex = (currentIndex - 1 + visibleImages.length) % visibleImages.length;
  lightboxImg.src = visibleImages[currentIndex].src;
};
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    document.querySelectorAll('.gallery-item').forEach(item => {
      const itemCategory = item.dataset.category;
      item.style.display = category === 'all' || itemCategory === category ? 'block' : 'none';
    });
  });
});

