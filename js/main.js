/**
 * MASTER MAIN CONTROLLER MODULE
 * Populates sections, handles typewriter titles, scroll reveals, and modal popups.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTypewriter();
  renderExperience();
  renderTechnologies();
  renderSkills();
  renderCertifications();
  renderEvents();
  renderResumeModal();
  setupScrollReveal();
  setupBackToTop();
});

// 1. Typewriter Title Rotation
function initTypewriter() {
  const target = document.getElementById('typewriter-text');
  if (!target) return;

  const titles = PORTFOLIO_DATA.profile.titles;
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentTitle = titles[titleIndex];
    
    if (isDeleting) {
      target.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
    } else {
      target.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentTitle.length) {
      typeSpeed = 2000; // Pause at end of word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typeSpeed);
  }

  type();
}

// 2. Populate Experience Section
function renderExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.experiences.forEach(exp => {
    const item = document.createElement('div');
    item.className = 'timeline-item reveal reveal-up';

    item.innerHTML = `
      <div class="timeline-node"></div>
      <div class="timeline-card">
        <div class="timeline-header">
          <div>
            <h3 class="company-name">${exp.company}</h3>
            <span class="role-title">${exp.role}</span>
          </div>
          <span class="timeline-badge">${exp.period}</span>
        </div>
        <p class="timeline-description">${exp.description}</p>
        <ul class="timeline-bullets">
          ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
        </ul>
        <div class="tech-tags">
          ${exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;

    container.appendChild(item);
  });
}

// 3. Populate Technologies Section
function renderTechnologies() {
  const container = document.getElementById('tech-categories-grid');
  if (!container) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.technologyCategories.forEach(cat => {
    const card = document.createElement('div');
    card.className = 'tech-category-card reveal reveal-up';

    card.innerHTML = `
      <div class="tech-card-header">
        <div class="tech-icon-wrap">
          ${getTechCategoryIcon(cat.icon)}
        </div>
        <h3 class="tech-category-title">${cat.name}</h3>
      </div>
      <div class="tech-items-wrap">
        ${cat.items.map(item => `<span class="tech-pill">${item}</span>`).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

// 4. Populate Skills Section
function renderSkills() {
  const container = document.getElementById('skills-grid-container');
  if (!container) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.skillsCategories.forEach(skill => {
    const card = document.createElement('div');
    card.className = 'skill-card reveal reveal-up';

    card.innerHTML = `
      <div class="skill-header">
        <div class="skill-icon">
          ${getTechCategoryIcon(skill.icon)}
        </div>
        <h3 class="skill-title">${skill.title}</h3>
      </div>
      <p class="skill-desc">${skill.description}</p>
      <div class="skill-tags-list">
        ${skill.skills.map(s => `
          <div class="skill-item-tag">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>${s}</span>
          </div>
        `).join('')}
      </div>
    `;

    container.appendChild(card);
  });
}

// 5. Populate Certifications Section
function renderCertifications() {
  const container = document.getElementById('certs-grid-container');
  if (!container) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.certifications.forEach(cert => {
    const card = document.createElement('div');
    card.className = 'cert-card reveal reveal-up';

    card.innerHTML = `
      <span class="cert-category">${cert.category}</span>
      <h3 class="cert-title">${cert.title}</h3>
      <span class="cert-issuer">Issued by ${cert.issuer} • ${cert.date}</span>
      <p class="cert-desc">${cert.description}</p>
      
      <div style="margin-top: auto; padding-top: 1rem; border-top: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
        <span style="font-family: var(--font-family-mono); font-size: 0.75rem; color: var(--text-subtle);">${cert.credentialId}</span>
        <button class="project-link-btn view-cert-btn" data-cert-id="${cert.id}">
          View Cert
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // Certificate Modal Handler
  document.querySelectorAll('.view-cert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const certId = e.currentTarget.getAttribute('data-cert-id');
      openCertModal(certId);
    });
  });
}

function openCertModal(certId) {
  const cert = PORTFOLIO_DATA.certifications.find(c => c.id === certId);
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');

  if (!cert || !modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="text-align: center; padding: 1.5rem 0;">
      <span class="section-subtitle">${cert.category}</span>
      <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin-top: 0.5rem; margin-bottom: 0.25rem;">${cert.title}</h2>
      <p style="color: var(--text-muted); font-size: 1.05rem;">Issued by <strong>${cert.issuer}</strong> (${cert.date})</p>

      <div style="background: var(--bg-tertiary); padding: 3rem 1.5rem; border-radius: var(--radius-md); border: 2px dashed var(--border-accent); margin: 2rem 0;">
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--accent-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0 auto 1rem auto;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
        <h4 style="color: var(--text-main); font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Official Certificate Credential</h4>
        <p style="font-family: var(--font-family-mono); font-size: 0.9rem; color: var(--accent-gold);">Credential ID: ${cert.credentialId}</p>
      </div>

      <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; max-width: 600px; margin: 0 auto 2rem auto;">${cert.description}</p>

      <button onclick="document.getElementById('project-modal').close()" class="btn btn-primary">
        Close Credential Viewer
      </button>
    </div>
  `;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

// 6. Populate Competitions & Webinars
function renderEvents() {
  const container = document.getElementById('events-grid-container');
  if (!container) return;

  container.innerHTML = '';

  PORTFOLIO_DATA.events.forEach(evt => {
    const card = document.createElement('div');
    card.className = 'event-card reveal reveal-up';

    card.innerHTML = `
      <div class="event-date">${evt.date}</div>
      <h3 class="event-title">${evt.title}</h3>
      <div class="event-org">${evt.organization} • <strong>${evt.role}</strong></div>
      <div class="event-achievement">🏆 ${evt.achievement}</div>
      <p style="font-size: 0.88rem; color: var(--text-subtle); margin-top: 0.75rem; line-height: 1.6;">${evt.desc}</p>
    `;

    container.appendChild(card);
  });
}

// 7. Interactive Resume Viewer Modal
function renderResumeModal() {
  const viewResumeBtns = document.querySelectorAll('.view-resume-trigger');
  
  viewResumeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openResumeModal();
    });
  });
}

function openResumeModal() {
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('project-modal-body');

  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div style="padding: 1rem 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem;">
        <div>
          <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main);">${PORTFOLIO_DATA.profile.name}</h2>
          <p style="color: var(--accent-primary); font-size: 0.95rem;">Software Engineer | AI/ML Enthusiast | Designer</p>
        </div>
        <button onclick="window.print()" class="btn btn-secondary" style="font-size: 0.85rem; padding: 0.5rem 1rem;">
          🖨 Print / Save PDF
        </button>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; text-transform: uppercase; border-bottom: 2px solid var(--accent-primary); display: inline-block;">Professional Summary</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.7;">${PORTFOLIO_DATA.profile.about}</p>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem; text-transform: uppercase; border-bottom: 2px solid var(--accent-primary); display: inline-block;">Work Experience</h3>
        ${PORTFOLIO_DATA.experiences.map(e => `
          <div style="margin-bottom: 1rem;">
            <div style="display: flex; justify-content: space-between;">
              <strong style="color: var(--text-main);">${e.role} — ${e.company}</strong>
              <span style="font-family: var(--font-family-mono); font-size: 0.85rem; color: var(--accent-gold);">${e.period}</span>
            </div>
            <p style="font-size: 0.9rem; color: var(--text-subtle); margin-top: 0.2rem;">${e.description}</p>
          </div>
        `).join('')}
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h3 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.75rem; text-transform: uppercase; border-bottom: 2px solid var(--accent-primary); display: inline-block;">Technical Core Skills</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted);">
          <strong>Languages:</strong> C, C++, Java, Python, JavaScript (ES6+)<br>
          <strong>Frameworks & AI:</strong> Node.js, Express, Scikit-learn, TensorFlow, PyTorch, LangChain, FAISS, Gemini API<br>
          <strong>Data & Cloud:</strong> Power BI, SQL, MongoDB, Docker, Git, AWS, Matplotlib, Seaborn
        </p>
      </div>

      <div style="text-align: center; margin-top: 2rem;">
        <button onclick="document.getElementById('project-modal').close()" class="btn btn-primary">
          Close Resume Preview
        </button>
      </div>
    </div>
  `;

  if (typeof modal.showModal === 'function') {
    modal.showModal();
  }
}

// 8. IntersectionObserver Scroll Reveal
function setupScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

  window.refreshScrollReveal = () => {
    const newReveals = document.querySelectorAll('.reveal:not(.active)');
    newReveals.forEach(el => observer.observe(el));
  };
}

// 9. Back to Top Button
function setupBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.style.opacity = '1';
      btn.style.visibility = 'visible';
    } else {
      btn.style.opacity = '0';
      btn.style.visibility = 'hidden';
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// SVG helper icons
function getTechCategoryIcon(iconName) {
  switch (iconName) {
    case 'code':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    case 'layout':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`;
    case 'server':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`;
    case 'database':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`;
    case 'cpu':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="15" x2="23" y2="15"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="15" x2="4" y2="15"/></svg>`;
    case 'bar-chart-2':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`;
    case 'cloud':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`;
    case 'zap':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`;
    case 'terminal':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;
    case 'brain':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/></svg>`;
    case 'trending-up':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`;
    case 'git-branch':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>`;
    case 'feather':
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L3 13v5h5l9.24-9.24z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>`;
    default:
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>`;
  }
}
