const heartIcon = document.getElementById('heart-icon');
const wishlistPopup = document.getElementById('wishlistPopup');
let heartClicked = false;

heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('fa-solid');
    heartIcon.classList.toggle('fa-regular');

    if (heartIcon.classList.contains('fa-solid')) {
        wishlistPopup.textContent = 'Product added to wishlist!';
    } else {
        wishlistPopup.textContent = 'Product removed from wishlist!';
    }

    wishlistPopup.style.display = 'block';
    setTimeout(() => {
        wishlistPopup.style.display = 'none';
    }, 500);
});

document.querySelectorAll('.tabs-nav div').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.tabs-nav div').forEach(link => {
            link.classList.remove('active');
        });
        tab.classList.add('active');

        const tabContent = tab.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.querySelector(`.${tabContent}`).classList.add('active');
    });
});

const checkAvailabilityLink = document.querySelector('.check-availability');
const zipInput = document.querySelector('.zipcode-input');

checkAvailabilityLink.addEventListener('click', (e) => {
    e.preventDefault(); 

    if (zipInput.value.length === 6) {
        checkAvailabilityLink.textContent = "Delivered within 2-3 working days"; 
    } else if(zipInput.value.length < 6){
        checkAvailabilityLink.textContent = "Your zipcode should be 6 digits"; 
    }
    else {
        checkAvailabilityLink.textContent = "No resellers available to this location"; 
    }
});

zipInput.addEventListener('input', () => {
    if (zipInput.value === "") {
        checkAvailabilityLink.textContent = "Check Availability"; 
    }
});

function scrollToReviews() {
    document.querySelector('.tab-link[data-tab="tab3"]').click();
    window.scrollTo({ top: document.querySelector('.tab3').offsetTop, behavior: 'smooth' });
}

function toggleReviews(action) {
    const moreReviews = document.querySelectorAll('.more-reviews');
    const readMore = document.querySelector('.read-more');
    const readLess = document.querySelector('.read-less');

    if (action === 'expand') {
        moreReviews.forEach(review => review.style.display = 'block');
        readMore.style.display = 'none';
        readLess.style.display = 'block';
    } else {
        moreReviews.forEach(review => review.style.display = 'none');
        readMore.style.display = 'block';
        readLess.style.display = 'none';
    }
}

let currentImageIndex = 0;
const images = document.querySelectorAll('.product-images img');
const dots = document.querySelectorAll('.pagination-dots .dot');

function updateActiveImage() {
    images.forEach((img, index) => img.classList.remove('active'));
    dots.forEach((dot, index) => dot.classList.remove('active-dot'));

    images[currentImageIndex].classList.add('active');
    dots[currentImageIndex].classList.add('active-dot');
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateActiveImage();
}

document.querySelector('.slider-left').addEventListener('click', () => {
    changeImage(-1);  
});

document.querySelector('.slider-right').addEventListener('click', () => {
    changeImage(1);   
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImageIndex = index;
        updateActiveImage();
    });
});

if (images.length > 0) {
    images[0].classList.add('active');
    dots[0].classList.add('active-dot'); 
}
setInterval(() => {
    changeImage(1);  
}, 4000);
