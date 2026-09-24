/**
 * FEATURED AI RESEARCH PIPELINE DIAGRAM & LIVE SANDBOX MODULE
 * Renders an interactive 8-step pipeline diagram and a live AI synthesis preview widget.
 */

document.addEventListener('DOMContentLoaded', () => {
  const diagramWrap = document.getElementById('pipeline-diagram-nodes');
  const detailCard = document.getElementById('pipeline-detail-box');
  const sandboxWrap = document.getElementById('ai-sandbox-widget');

  if (diagramWrap && detailCard) {
    renderDiagramNodes();
  }

  if (sandboxWrap) {
    renderSandboxWidget();
  }

  // 1. Render Diagram Nodes
  function renderDiagramNodes() {
    diagramWrap.innerHTML = '';
    
    PORTFOLIO_DATA.researchPipeline.forEach((stepItem, index) => {
      const node = document.createElement('div');
      node.className = `pipeline-node ${index === 0 ? 'active' : ''}`;
      node.setAttribute('data-step', stepItem.step);

      node.innerHTML = `
        <div class="pipeline-step-badge">STEP 0${stepItem.step}</div>
        <h4 class="pipeline-node-title">${stepItem.name}</h4>
        <span class="pipeline-node-tag">${stepItem.tagline}</span>
      `;

      node.addEventListener('click', () => {
        document.querySelectorAll('.pipeline-node').forEach(n => n.classList.remove('active'));
        node.classList.add('active');
        updateDetailCard(stepItem);
      });

      diagramWrap.appendChild(node);
    });

    if (PORTFOLIO_DATA.researchPipeline.length > 0) {
      updateDetailCard(PORTFOLIO_DATA.researchPipeline[0]);
    }
  }

  // 2. Update Detail Card
  function updateDetailCard(stepItem) {
    detailCard.innerHTML = `
      <div class="pipeline-detail-header">
        <div>
          <span class="section-subtitle">PIPELINE NODE 0${stepItem.step} OF 08</span>
          <h3 class="pipeline-detail-title">${stepItem.name}</h3>
          <p class="pipeline-detail-tagline">${stepItem.tagline}</p>
        </div>
        <div style="background: rgba(149, 60, 39, 0.15); border: 1px solid var(--border-accent); padding: 0.5rem 1rem; border-radius: var(--radius-full); font-family: var(--font-family-mono); font-size: 0.85rem; color: var(--accent-primary);">
          Active Stage
        </div>
      </div>

      <p class="pipeline-detail-desc">${stepItem.desc}</p>
      
      <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 1.5rem;">
        <h5 style="color: var(--text-main); font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem;">Technical Implementation Spec</h5>
        <p style="color: var(--text-subtle); font-size: 0.9rem; line-height: 1.6;">${stepItem.detail}</p>
      </div>

      <div>
        <h5 style="color: var(--text-muted); font-size: 0.85rem; text-transform: uppercase; margin-bottom: 0.75rem; letter-spacing: 0.05em;">Technologies Executed</h5>
        <div class="pipeline-tech-list">
          ${stepItem.tech.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }

  // 3. Render Interactive Live AI Sandbox Widget
  function renderSandboxWidget() {
    let currentPreset = PORTFOLIO_DATA.aiSandboxPresets[0];
    let activeTab = 'summary';

    function updateSandboxUI() {
      sandboxWrap.innerHTML = `
        <div style="background: var(--bg-card); border: 1px solid var(--border-accent); border-radius: var(--radius-lg); padding: 2rem; backdrop-filter: blur(var(--blur-amount)); box-shadow: var(--shadow-lg);">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
            <div>
              <span class="section-subtitle" style="margin-bottom: 0.3rem;">⚡ LIVE DEMO SANDBOX</span>
              <h3 style="font-size: 1.4rem; font-weight: 800; color: var(--text-main);">AI Synthesis Output Simulator</h3>
            </div>
            <div style="display: flex; gap: 0.5rem;">
              ${PORTFOLIO_DATA.aiSandboxPresets.map(p => `
                <button class="preset-btn ${p.id === currentPreset.id ? 'active' : ''}" data-preset-id="${p.id}" style="font-size: 0.8rem; padding: 0.4rem 0.85rem; border-radius: var(--radius-full); background: ${p.id === currentPreset.id ? 'var(--accent-primary)' : 'rgba(209, 173, 160, 0.08)'}; color: ${p.id === currentPreset.id ? '#fff' : 'var(--text-muted)'}; border: 1px solid var(--border-color);">
                  ${p.id === 'ch-1' ? 'Preset 1: Neural Nets' : 'Preset 2: Crop ML'}
                </button>
              `).join('')}
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 1.5rem; background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-subtle);">SOURCE BOOK</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">${currentPreset.book}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-subtle);">INDEXED RANGE</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--accent-gold);">${currentPreset.pages}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-subtle);">FAISS CHUNKS</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-main);">${currentPreset.chunks} Vector Blocks</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-subtle);">RETRIEVAL COSINE</div>
              <div style="font-size: 0.85rem; font-weight: 700; color: #4ade80;">${currentPreset.faissDistance} (94.2% Match)</div>
            </div>
          </div>

          <!-- Output View Tabs -->
          <div style="display: flex; gap: 0.5rem; margin-bottom: 1.25rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.75rem;">
            <button class="sandbox-tab-btn ${activeTab === 'summary' ? 'active' : ''}" data-tab="summary" style="font-size: 0.85rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeTab === 'summary' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeTab === 'summary' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Lecture Summary</button>
            <button class="sandbox-tab-btn ${activeTab === 'formulas' ? 'active' : ''}" data-tab="formulas" style="font-size: 0.85rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeTab === 'formulas' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeTab === 'formulas' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Key Formulas</button>
            <button class="sandbox-tab-btn ${activeTab === 'lab' ? 'active' : ''}" data-tab="lab" style="font-size: 0.85rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeTab === 'lab' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeTab === 'lab' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Lab Procedure</button>
            <button class="sandbox-tab-btn ${activeTab === 'quiz' ? 'active' : ''}" data-tab="quiz" style="font-size: 0.85rem; font-weight: 600; padding: 0.4rem 1rem; border-radius: var(--radius-sm); color: ${activeTab === 'quiz' ? 'var(--accent-primary)' : 'var(--text-muted)'}; background: ${activeTab === 'quiz' ? 'rgba(149, 60, 39, 0.12)' : 'transparent'};">Quiz Flashcards</button>
          </div>

          <div style="background: var(--bg-tertiary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); min-height: 150px;">
            ${renderTabContent(activeTab, currentPreset)}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
            <span style="font-family: var(--font-family-mono); font-size: 0.8rem; color: var(--text-subtle);">Generated via Google Gemini 1.5 Pro + FAISS Vector Pipeline</span>
            <button class="btn btn-primary" id="download-sim-pdf-btn" style="font-size: 0.85rem; padding: 0.5rem 1.25rem;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              Download PDF Note Export
            </button>
          </div>
        </div>
      `;

      // Preset click listeners
      sandboxWrap.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          const pid = e.currentTarget.getAttribute('data-preset-id');
          currentPreset = PORTFOLIO_DATA.aiSandboxPresets.find(p => p.id === pid);
          updateSandboxUI();
        });
      });

      // Tab click listeners
      sandboxWrap.querySelectorAll('.sandbox-tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          activeTab = e.currentTarget.getAttribute('data-tab');
          updateSandboxUI();
        });
      });

      // PDF export simulator listener
      sandboxWrap.querySelector('#download-sim-pdf-btn')?.addEventListener('click', () => {
        alert(`Generating publication-quality PDF for "${currentPreset.topic}"...\nPDF compiled successfully via ReportLab engine!`);
      });
    }

    function renderTabContent(tab, preset) {
      if (tab === 'summary') {
        return `<p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.7;">${preset.summary}</p>`;
      } else if (tab === 'formulas') {
        return `
          <ul style="display: flex; flex-direction: column; gap: 0.75rem;">
            ${preset.formulas.map(f => `
              <li style="font-family: var(--font-family-mono); font-size: 0.9rem; color: var(--accent-gold); background: rgba(229, 169, 104, 0.08); padding: 0.5rem 1rem; border-radius: var(--radius-sm); border: 1px solid rgba(229, 169, 104, 0.2);">
                ${f}
              </li>
            `).join('')}
          </ul>
        `;
      } else if (tab === 'lab') {
        return `
          <div style="display: flex; flex-direction: column; gap: 0.6rem;">
            ${preset.labProcedure.map(step => `
              <div style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.6;">${step}</div>
            `).join('')}
          </div>
        `;
      } else if (tab === 'quiz') {
        return `
          <div style="display: flex; flex-direction: column; gap: 1rem;">
            ${preset.quiz.map(q => `
              <div>
                <div style="font-weight: 700; color: var(--text-main); font-size: 0.92rem;">Q: ${q.q}</div>
                <div style="color: var(--accent-primary); font-size: 0.88rem; margin-top: 0.2rem;">A: ${q.a}</div>
              </div>
            `).join('')}
          </div>
        `;
      }
      return '';
    }

    updateSandboxUI();
  }
});
