/**
 * FLOATING DYNAMIC ISLAND NAVIGATION & MOBILE MENU MODULE
 */

document.addEventListener('DOMContentLoaded', () => {
  const headerNav = document.querySelector('.header-nav');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  const hamburger = document.querySelector('.mobile-hamburger');
  const mobileOverlay = document.querySelector('.mobile-nav-overlay');
  const sections = document.querySelectorAll('section[id]');

  // 1. Dynamic Island Scroll Blur & Transformation
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      headerNav?.classList.add('scrolled');
    } else {
      headerNav?.classList.remove('scrolled');
    }
  }, { passive: true });

  // 2. Active Section Scroll Spy via IntersectionObserver
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach(section => sectionObserver.observe(section));

  function updateActiveLink(activeId) {
    navLinks.forEach(link => {
      const href = link.getAttribute('href')?.substring(1);
      if (href === activeId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // 3. Mobile Hamburger Toggle & Scroll Lock
  function toggleMobileMenu() {
    const isOpen = mobileOverlay?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    hamburger?.classList.add('active');
    mobileOverlay?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    hamburger?.classList.remove('active');
    mobileOverlay?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburger?.addEventListener('click', toggleMobileMenu);

  // Close mobile menu when link clicked
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });
});
