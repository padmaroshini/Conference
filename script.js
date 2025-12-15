// =========================================================
// 1. REAL-TIME COUNTDOWN LOGIC
// =========================================================
// Set the date for the conference (FEB 5, 2026 for consistency with HTML)
const conferenceDate = new Date("Feb 5, 2026 09:00:00").getTime(); 

const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = conferenceDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result to the HTML elements
    if (document.getElementById("days")) {
        document.getElementById("days").innerHTML = (days < 10 ? "0" + days : days);
        document.getElementById("hours").innerHTML = (hours < 10 ? "0" + hours : hours);
        document.getElementById("minutes").innerHTML = (minutes < 10 ? "0" + minutes : minutes);
        document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" + seconds : seconds);
    }
    
    // If the count down is over
    if (distance < 0) {
        clearInterval(countdown);
        if (document.getElementById("countdown-timer")) {
            document.getElementById("countdown-timer").innerHTML = "<h2 class='text-danger'>CONFERENCE IS LIVE!</h2>";
        }
    }
}, 1000);


// =========================================================
// 2. HERO SECTION SLIDESHOW LOGIC (Square Image, 2 seconds)
// =========================================================
// NOTE: This feature requires a square image element with id="image-slideshow" in your HTML
const slideshowImages = [
    'photo-slide-1.jpg', 'photo-slide-2.jpg', 'photo-slide-3.jpg', 
    'photo-slide-4.jpg', 'photo-slide-5.jpg'
];
let currentImageIndex = 0;
const slideshowContainer = document.getElementById('image-slideshow');

if (slideshowContainer) {
    // 1. Dynamically inject image elements into the container
    slideshowImages.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Conference Highlight ${index + 1}`;
        if (index === 0) {
            img.classList.add('active'); // Set first image as visible
        }
        slideshowContainer.appendChild(img);
    });

    const imageElements = slideshowContainer.querySelectorAll('img');

    function changeSlide() {
        if (imageElements.length === 0) return;
        
        imageElements[currentImageIndex].classList.remove('active');
        currentImageIndex = (currentImageIndex + 1) % imageElements.length;
        imageElements[currentImageIndex].classList.add('active');
    }

    // Run the function every 2 seconds (2000ms)
    setInterval(changeSlide, 2000);
}


// =========================================================
// 3. FULL WEBPAGE BACKGROUND SLIDESHOW (Body Background, 3 seconds) - DISABLED
// =========================================================
/*
const fullBackgroundImages = [
    'bg-slide-1.jpeg', 'bg-slide-2.jpeg', 'bg-slide-3.jpeg', 'bg-slide-4.jpeg','bg-slide-5.jpeg','bg-slide-6.jpeg'
];
let currentBgIndex = -1; 

function changeFullBackground() {
    currentBgIndex = (currentBgIndex + 1) % fullBackgroundImages.length; 
    const newImageURL = fullBackgroundImages[currentBgIndex];
    
    // Apply image and overlay directly to the body style
    document.body.style.backgroundImage = `
        linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3)), 
        url('${newImageURL}')
    `;
}

// Run once immediately and then every 3 seconds (3000ms)
changeFullBackground(); 
setInterval(changeFullBackground, 3000); 
*/
 


// =========================================================
// 4. GALLERY CAROUSEL LOGIC (Fade Slideshow, 5 seconds)
// =========================================================

const carouselTrack = document.getElementById('carouselTrack');

if (carouselTrack) {
    const items = carouselTrack.querySelectorAll('.carousel-item');
    if (items.length > 0) {
        let currentIndex = 0;
        
        // Function to update the carousel (fade effect)
        function updateCarousel() {
            items.forEach((item, index) => {
                item.classList.toggle('active', index === currentIndex);
            });
        }
        
        // Function to advance the slide automatically
        function nextSlideAutomatic() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        // Set the automatic sliding interval (5 seconds - 5000ms)
        setInterval(nextSlideAutomatic, 5000); 
        
        // Initialize the carousel on load
        updateCarousel();
    }
} 
// <-- THE EXTRA '}' IS REMOVED HERE.