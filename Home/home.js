//header
document.addEventListener("DOMContentLoaded", function () {
    fetch("../Navbar/nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("header").innerHTML = data;
        })
        .catch(error => console.error("Error loading header:", error));
});

//footer
document.addEventListener("DOMContentLoaded", function () {
    fetch("../Footer/footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("footer").innerHTML = data;
        })
        .catch(error => console.error("Error loading footer:", error));
});

// slider
class Slider {
    constructor(container) {
        this.slider = container.querySelector('.slider');
        this.slides = container.querySelectorAll('.slide');
        this.prevBtn = container.querySelector('.prev');
        this.nextBtn = container.querySelector('.next');
        this.index = 0;

        this.updateSlider();

        this.nextBtn.addEventListener('click', () => this.nextSlide());
        this.prevBtn.addEventListener('click', (e) => this.prevSlide());
    }

    updateSlider() {
        const slideWidth = this.slides[0].offsetWidth + 15;
        this.slider.style.transform = `translateX(${-this.index * slideWidth}px)`;
    }

    nextSlide() {
        if (this.index < this.slides.length - 1) {
            this.prevBtn.style.display = 'block';
            this.index++;
        } else {
            this.nextBtn.style.display = 'none';
        }
        this.updateSlider();
    }

    prevSlide() {
        if (this.index > 0) {
            this.nextBtn.style.display = 'block';
            this.index--;
        } else {
            this.prevBtn.style.display = 'none';
        }
        this.updateSlider();
    }
}

// Initialize sliders
const sliderContainers = document.querySelectorAll('.slider-container');
sliderContainers.forEach(container => {
    new Slider(container);
});


