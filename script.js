// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cart Functionality
let cart = [];
let cartCount = 0;

function updateCartCount() {
    document.querySelector('.cart-count').textContent = cartCount;
}

// Add to Cart Functionality
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const productCard = this.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('.current-price').textContent;
        
        // Add product to cart array
        cart.push({
            name: productName,
            price: productPrice,
            id: Date.now() // Simple ID generation
        });
        
        cartCount++;
        updateCartCount();
        
        // Show success message
        showNotification(`${productName} added to cart!`);
        
        // Add animation to button
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Notification System
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #dc2626;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            showNotification('Successfully subscribed to newsletter!');
            this.querySelector('input[type="email"]').value = '';
        }
    });
}

// Search Functionality (Basic)
const searchIcon = document.querySelector('.search-icon');
if (searchIcon) {
    searchIcon.addEventListener('click', function(e) {
        e.preventDefault();
        const searchTerm = prompt('Enter product name or category:');
        if (searchTerm) {
            showNotification(`Searching for "${searchTerm}"...`);
            // In a real implementation, this would trigger actual search
        }
    });
}

// Scroll to Top on Logo Click
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Header Background Change on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(26, 26, 26, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = '#1a1a1a';
        header.style.backdropFilter = 'none';
    }
});

// Product Card Hover Effects
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Category Card Click Navigation
document.querySelectorAll('.category-card .btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const categoryName = this.closest('.category-card').querySelector('h3').textContent;
        showNotification(`Navigating to ${categoryName} section...`);
        // In a real implementation, this would navigate to the category page
    });
});

// Brand Card Click Navigation
document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', function() {
        const brandName = this.querySelector('.brand-logo').textContent;
        showNotification(`Viewing ${brandName} products...`);
        // In a real implementation, this would navigate to the brand page
    });
    
    card.style.cursor = 'pointer';
});

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    
    // Add loading animation to images when they load
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        setTimeout(() => {
            img.style.opacity = '1';
        }, Math.random() * 1000);
    });
});

// Account and Cart Icon Click Handlers
const accountIcon = document.querySelector('.account-icon');
if (accountIcon) {
    accountIcon.addEventListener('click', function(e) {
        e.preventDefault();
        showNotification('Account page coming soon!');
    });
}

const cartIcon = document.querySelector('.cart-icon');
if (cartIcon) {
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        if (cart.length === 0) {
            showNotification('Your cart is empty. Add some products!');
        } else {
            showNotification(`You have ${cartCount} items in your cart.`);
            // In a real implementation, this would open the cart modal/page
        }
    });
}

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Press 'S' to focus search
    if (e.key === 's' || e.key === 'S') {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            searchIcon.click();
        }
    }
    
    // Press 'C' to view cart
    if (e.key === 'c' || e.key === 'C') {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            cartIcon.click();
        }
    }
});