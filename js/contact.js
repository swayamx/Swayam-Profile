/**
 * CONTACT FORM VALIDATION & UTILITIES MODULE
 */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  // 1. Form Submission & Validation
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value.trim();
      const email = document.getElementById('form-email')?.value.trim();
      const subject = document.getElementById('form-subject')?.value.trim();
      const message = document.getElementById('form-message')?.value.trim();

      if (!name || !email || !message) {
        showFeedback('Please fill out all required fields (Name, Email, Message).', 'error');
        return;
      }

      if (!validateEmail(email)) {
        showFeedback('Please enter a valid email address.', 'error');
        return;
      }

      if (message.length < 10) {
        showFeedback('Message should be at least 10 characters long.', 'error');
        return;
      }

      // Show loading state
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Sending Message...';

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        contactForm.reset();
        showFeedback('Thank you! Your message has been received. Swayam will reach out shortly.', 'success');
      }, 1200);
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFeedback(msg, type) {
    if (!formFeedback) return;
    formFeedback.textContent = msg;
    formFeedback.className = `form-feedback ${type}`;
    formFeedback.style.display = 'block';

    setTimeout(() => {
      formFeedback.style.display = 'none';
    }, 6000);
  }

  // 2. Email Copy Button Utility
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const emailText = PORTFOLIO_DATA.profile.email;
      navigator.clipboard.writeText(emailText).then(() => {
        const orig = copyEmailBtn.innerText;
        copyEmailBtn.innerText = 'Copied!';
        setTimeout(() => {
          copyEmailBtn.innerText = orig;
        }, 2000);
      }).catch(() => {
        alert(`Email address: ${emailText}`);
      });
    });
  }
});
