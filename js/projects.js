/**
 * ENHANCED PROJECTS & MODAL VIEWER MODULE
 * Handles category filtering, project card rendering, interactive tabs (Overview, Architecture, Code Snippet), and native modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  const projectsGrid = document.querySelector('.projects-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectModal = document.getElementById('project-modal');
  const projectModalBody = document.getElementById('project-modal-body');

  if (!projectsGrid) return;

  // 1. Render Project Cards
  function renderProjects(filterCategory = 'all') {
    projectsGrid.innerHTML = '';

    const filtered = filterCategory === 'all' 
      ? PORTFOLIO_DATA.projects 
      : PORTFOLIO_DATA.projects.filter(p => p.category === filterCategory);

    filtered.forEach(project => {
      const card = document.createElement('article');
      card.className = 'project-card reveal reveal-up';
      
      card.innerHTML = `
        <div class="project-banner">
          <div class="banner-graphic-svg">
            ${getProjectSVG(project.icon)}
          </div>
          <span class="project-badge">${project.badge}</span>
        </div>
        <div class="project-body">
          <span class="project-category">${project.categoryLabel}</span>
          <h3 class="project-title">${project.title}</h3>
          <p class="project-short-desc">${project.shortDesc}</p>
          
          <div class="tech-tags" style="margin-bottom: 1.25rem;">
            ${project.technologies.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          </div>
          
          <div class="project-footer">
            <button class="project-link-btn view-details-btn" data-project-id="${project.id}">
              View Details & Code
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <a href="${project.github}" target="_blank" rel="noopener" class="social-btn" title="GitHub Source" aria-label="GitHub Repository">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
      `;

      projectsGrid.appendChild(card);
    });

    // Re-initialize click listeners for modal triggers
    document.querySelectorAll('.view-details-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const projId = e.currentTarget.getAttribute('data-project-id');
        openProjectModal(projId);
      });
    });

    if (window.refreshScrollReveal) {
      window.refreshScrollReveal();
    }
  }

  // 2. Category Filter Tab Clicks
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderProjects(cat);
    });
  });

  // 3. Open Modal Handler with Interactive Tabs
  function openProjectModal(projectId) {
    const proj = PORTFOLIO_DATA.projects.find(p => p.id === projectId);
    if (!proj || !projectModal || !projectModalBody) return;

    let activeModalTab = 'overview';

    function renderModalUI() {
      projectModalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
          <span class="section-subtitle">${proj.categoryLabel}</span>
          <h2 style="font-size: 2rem; font-weight: 800; color: var(--text-main); margin-top: 0.5rem;">${proj.title}</h2>
        </div>

        <!-- Modal View Tabs -->
        <div style="display: flex; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem; margin-bottom: 1.5rem;">
          <button class="modal-tab-btn ${activeModalTab === 'overview' ? 'active' : ''}" data-tab="overview" style="font-size: 0.88rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeModalTab === 'overview' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeModalTab === 'overview' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Overview & Solution</button>
          <button class="modal-tab-btn ${activeModalTab === 'architecture' ? 'active' : ''}" data-tab="architecture" style="font-size: 0.88rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeModalTab === 'architecture' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeModalTab === 'architecture' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Architecture & Specs</button>
          <button class="modal-tab-btn ${activeModalTab === 'code' ? 'active' : ''}" data-tab="code" style="font-size: 0.88rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeModalTab === 'code' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeModalTab === 'code' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Source Code Snippet</button>
        </div>

        <div style="margin-bottom: 2rem;">
          ${renderModalTabBody(activeModalTab, proj)}
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; border-top: 1px solid var(--border-color); padding-top: 1.25rem;">
          <a href="${proj.github}" target="_blank" rel="noopener" class="btn btn-primary">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            View GitHub Repository
          </a>
          ${proj.demo && proj.demo !== '#' ? `
            <a href="${proj.demo}" class="btn btn-secondary">
              Live Preview
            </a>
          ` : ''}
        </div>
      `;

      // Modal Tab click listeners
      projectModalBody.querySelectorAll('.modal-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          activeModalTab = e.currentTarget.getAttribute('data-tab');
          renderModalUI();
        });
      });
    }

    function renderModalTabBody(tab, p) {
      if (tab === 'overview') {
        return `
          <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <h4 style="color: var(--accent-primary); font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">The Challenge & Problem</h4>
            <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.7;">${p.problem}</p>
          </div>

          <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
            <h4 style="color: #4ade80; font-size: 0.88rem; text-transform: uppercase; margin-bottom: 0.4rem; letter-spacing: 0.05em;">Engineered Solution</h4>
            <p style="color: var(--text-muted); font-size: 0.98rem; line-height: 1.7;">${p.solution}</p>
          </div>

          <div>
            <h4 style="color: var(--text-main); font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem;">Key Technical Features</h4>
            <ul style="display: flex; flex-direction: column; gap: 0.6rem;">
              ${p.features.map(f => `<li style="font-size: 0.92rem; color: var(--text-subtle);"><span style="color: var(--accent-primary); margin-right: 0.5rem;">✔</span>${f}</li>`).join('')}
            </ul>
          </div>
        `;
      } else if (tab === 'architecture') {
        return `
          <div>
            <h4 style="color: var(--text-main); font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;">System Architecture Breakdown</h4>
            <div style="display: flex; flex-direction: column; gap: 0.85rem;">
              ${p.architecture.map((layer, idx) => `
                <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 1rem;">
                  <span style="font-family: var(--font-family-mono); font-size: 0.8rem; color: var(--accent-primary); font-weight: 700; padding: 0.25rem 0.6rem; background: rgba(149, 60, 39, 0.12); border-radius: var(--radius-sm);">LAYER 0${idx + 1}</span>
                  <span style="font-size: 0.92rem; color: var(--text-main);">${layer}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      } else if (tab === 'code') {
        return `
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
              <h4 style="color: var(--text-main); font-size: 1.05rem; font-weight: 700;">Core Code Implementation</h4>
              <span style="font-family: var(--font-family-mono); font-size: 0.78rem; color: var(--accent-gold);">Production Quality Code</span>
            </div>
            <pre style="background: #0d0604; color: #f8f8f2; padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); font-family: var(--font-family-mono); font-size: 0.85rem; overflow-x: auto; line-height: 1.6;"><code>${escapeHTML(p.codeSnippet || '// Code implementation snippet available on GitHub')}</code></pre>
          </div>
        `;
      }
      return '';
    }

    renderModalUI();

    if (typeof projectModal.showModal === 'function') {
      projectModal.showModal();
    }
  }

  function escapeHTML(str) {
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Close modal listeners
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('dialog')?.close();
    });
  });

  if (projectModal) {
    projectModal.addEventListener('click', (e) => {
      if (e.target === projectModal) {
        projectModal.close();
      }
    });
  }

  function getProjectSVG(iconName) {
    switch (iconName) {
      case 'file-text':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>`;
      case 'camera':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>`;
      case 'box':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`;
      case 'pie-chart':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>`;
      case 'gamepad':
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><circle cx="15" cy="13" r="1"/><circle cx="18" cy="11" r="1"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>`;
      default:
        return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;
    }
  }

  // Initial render
  renderProjects('all');
});
