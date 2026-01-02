// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Search button functionality
const searchBtn = document.querySelector('.search-btn');
searchBtn.addEventListener('click', () => {
    console.log('Search clicked');
});

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// Animate stats on scroll
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-item').forEach(stat => {
    stat.style.opacity = '0';
    stat.style.transform = 'translateY(20px)';
    stat.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(stat);
});

// CTA button click handler
const ctaBtn = document.querySelector('.cta-btn');
ctaBtn.addEventListener('click', () => {
    console.log('Shop Now clicked');
    document.querySelector('.product-section').scrollIntoView({
        behavior: 'smooth'
    });
});

// ====== SECTION 1: SUBSCRIPTION TOGGLE (ACCORDION-STYLE) ======
const subscriptionRadios = document.querySelectorAll('input[name="subscription-type"]');
const singlePanel = document.getElementById('single-panel');
const doublePanel = document.getElementById('double-panel');

function switchSubscriptionPanel(value) {
    if (value === 'single') {
        singlePanel.classList.add('active');
        doublePanel.classList.remove('active');
    } else if (value === 'double') {
        doublePanel.classList.add('active');
        singlePanel.classList.remove('active');
    }
}

subscriptionRadios.forEach(radio => {
    radio.addEventListener('change', function() {
        switchSubscriptionPanel(this.value);
    });
});

// Fragrance selection within subscription panels
document.querySelectorAll('.fragrance-item').forEach(item => {
    item.addEventListener('click', function() {
        const parent = this.parentElement;
        parent.querySelectorAll('.fragrance-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// ====== SECTION 2: COLLECTION ACCORDION ======
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const accordionItem = this.parentElement;
        const content = accordionItem.querySelector('.accordion-content');
        const icon = this.querySelector('.accordion-icon');
        const isActive = content.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-content').forEach(item => {
            item.classList.remove('active');
        });
        
        document.querySelectorAll('.accordion-icon').forEach(ic => {
            ic.textContent = '+';
        });
        
        // Open clicked item if it was closed
        if (!isActive) {
            content.classList.add('active');
            icon.textContent = '−';
        }
    });
});

// Image carousel functionality
const navLeft = document.querySelector('.nav-arrow-left');
const navRight = document.querySelector('.nav-arrow-right');
const dots = document.querySelectorAll('.dot');
let currentImageIndex = 0;
const totalImages = 4;

function updateImageCarousel(index) {
    currentImageIndex = index;
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
    console.log('Showing image:', index);
}

navLeft.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    updateImageCarousel(currentImageIndex);
});

navRight.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % totalImages;
    updateImageCarousel(currentImageIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateImageCarousel(index);
    });
});

// Thumbnail click
document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        console.log('Thumbnail clicked:', index);
    });
});

// Add to cart functionality
const addToCartBtn = document.querySelector('.add-to-cart-btn');
addToCartBtn.addEventListener('click', () => {
    const selectedSubscription = document.querySelector('input[name="subscription-type"]:checked').value;
    console.log('Adding to cart:', selectedSubscription);
    alert('Added to cart! Subscription type: ' + selectedSubscription);
});

// Comparison CTA button
const comparisonCtaBtn = document.querySelector('.comparison-cta-btn');
if (comparisonCtaBtn) {
    comparisonCtaBtn.addEventListener('click', () => {
        console.log('Try It Risk-Free clicked');
        document.querySelector('.product-section').scrollIntoView({
            behavior: 'smooth'
        });
    });
}

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('.newsletter-input').value;
        console.log('Newsletter subscription:', email);
        alert('Thank you for subscribing!');
        newsletterForm.reset();
    });
}