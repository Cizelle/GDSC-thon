const carouselImages = document.querySelector(".carousel-images");
const images = document.querySelectorAll(".carousel-images span");

// Duplicate the images to ensure continuity
images.forEach((image) => {
  const clone = image.cloneNode(true);
  carouselImages.appendChild(clone);
});

// Move the first two images to the end
const firstImage = carouselImages.firstElementChild.cloneNode(true);
const secondImage = carouselImages.children[1].cloneNode(true);
carouselImages.appendChild(firstImage);
carouselImages.appendChild(secondImage);

function showImage(index) {
  images.forEach((image, idx) => {
    if (idx === index) {
      image.classList.add("active");
    } else {
      image.classList.remove("active");
    }
    if (idx === 2 && index % images.length === 2) {
      image.classList.add("enlarge");
    } else {
      image.classList.remove("enlarge");
    }
  });
}

let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Start the loop
setInterval(nextImage, 3000);
