// Initialize GSAP and ScrollTrigger if they exist
try {
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }
} catch (error) {
  console.error('Error initializing GSAP:', error);
}

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Make sure the page is visible regardless of animations
  document.body.style.visibility = 'visible';
  document.body.style.opacity = '1';

  // Basic functionality
  console.log('DOM fully loaded');

  // Enhanced card animations
  initCardAnimations();

  // Initialize active menu link on scroll
  initActiveMenuOnScroll();
});

// Function to update active menu link based on scroll position
function initActiveMenuOnScroll() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.menu-items a');

  // Function to update active menu link
  function updateActiveLink() {
    let currentSection = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100; // Offset for better UX
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSection = sectionId;
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }

  // Update active link on scroll
  window.addEventListener('scroll', updateActiveLink);

  // Update active link on page load
  updateActiveLink();
}

// Function to initialize card animations
function initCardAnimations() {
  // Add mouse movement effect to cards
  const cards = document.querySelectorAll('.glass-card');

  cards.forEach(card => {
    // 3D tilt effect on mouse move
    card.addEventListener('mousemove', function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left; // x position within the element
      const y = e.clientY - rect.top; // y position within the element

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Check if this is a contact section card to reduce the 3D effect by 60%
      const isContactCard = this.closest('.contact-container') !== null;

      // Adjust movement based on card type
      let moveX, moveY, translateZ, scale;
      if (isContactCard) {
        // Reduced by 60% for contact cards
        moveX = (x - centerX) / 50; // 60% less than original /20
        moveY = (y - centerY) / 50; // 60% less than original /20
        translateZ = 4; // 60% less than original 10px
        scale = 1.008; // 60% less than original 1.02
      } else {
        // Original values for other cards
        moveX = (x - centerX) / 20;
        moveY = (y - centerY) / 20;
        translateZ = 10;
        scale = 1.02;
      }

      this.style.transform = `perspective(1000px) rotateX(${-moveY}deg) rotateY(${moveX}deg) translateZ(${translateZ}px) scale(${scale})`;

      // Dynamic highlight effect
      const glowX = (x / rect.width) * 100;
      const glowY = (y / rect.height) * 100;
      this.style.background = `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 40%, rgba(0,0,0,0) 60%)`;
    });

    // Reset transform on mouse leave
    card.addEventListener('mouseleave', function () {
      this.style.transform = '';
      this.style.background = '';

      // Allow CSS transitions to take over
      setTimeout(() => {
        this.style.transition = '';
      }, 300);
    });

    // Smoother transition on mouse enter
    card.addEventListener('mouseenter', function () {
      this.style.transition = 'transform 0.1s ease-out, background 0.3s ease';
    });
  });

  // Remove all card reveal animations completely
  // Don't add any classes that might cause cards to disappear or appear
}
