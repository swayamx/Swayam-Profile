/**
 * CUSTOM DESKTOP CURSOR FOLLOWER MODULE
 * Smooth spring follower ring with scale elevation on hoverable elements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Disable on mobile/touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  
  const cursorRing = document.createElement('div');
  cursorRing.className = 'cursor-ring';

  document.body.appendChild(cursorDot);
  document.body.appendChild(cursorRing);

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  // Smooth lerp loop for outer ring
  function animateCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;

    cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Scale expand on clickable elements
  const hoverables = 'a, button, input, textarea, .filter-btn, .pipeline-node, .project-card, .theme-toggle-btn';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverables)) {
      cursorRing.classList.add('hovered');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverables)) {
      cursorRing.classList.remove('hovered');
    }
  });
});
