/* ============================================================
   ACESSIBILIDADE GLOBAL - VERSÃO CLEAN
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // ==========================================================
  // 1. SKIP LINK
  // ==========================================================
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.setAttribute('aria-label', 'Pular para o conteúdo principal');
  skipLink.textContent = '♿ Pular para o conteúdo principal';
  document.body.prepend(skipLink);

  const main = document.querySelector('main');
  if (main) main.id = 'main-content';
  else {
    const firstSection = document.querySelector('section') || document.querySelector('.container');
    if (firstSection) firstSection.id = 'main-content';
  }

  // ==========================================================
  // 2. BREADCRUMB
  // ==========================================================
  function generateBreadcrumb() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p !== '' && p !== 'index.html');
    const container = document.querySelector('.breadcrumb-container');
    if (!container) return;
    const ol = container.querySelector('ol') || document.createElement('ol');
    ol.innerHTML = '';
    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = '🏠 Início';
    homeLi.appendChild(homeLink);
    ol.appendChild(homeLi);
    if (parts.length === 0) { container.style.display = 'none'; return; }
    const pageNames = {
      'noticias': 'Notícias',
      'direito-familia': 'Direito de Família',
      'direito-digital': 'Direito Digital',
      'direito-criminal': 'Direito Criminal',
      'direito-trabalhista': 'Direito Trabalhista',
      'direito-previdenciario': 'Direito Previdenciário',
      'direito-consumidor': 'Direito do Consumidor',
      'direito-civil': 'Direito Civil e Sucessões',
      'direito-empresarial': 'Advocacia Empresarial',
      'advogado-online': 'Advogado Online 24h',
      'sobre': 'Sobre',
      'contato': 'Contato',
      'legal': 'Legal & Suporte',
      'depoimentos': 'Depoimentos',
      'sitemap': 'Mapa do Site',
      'acessibilidade': 'Acessibilidade'
    };
    let currentPath = '';
    const total = parts.length;
    parts.forEach((part, index) => {
      const isLast = index === total - 1;
      const cleanPart = part.replace('.html', '');
      const name = pageNames[cleanPart] || cleanPart.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      if (cleanPart.startsWith('protecao-integral') || cleanPart.startsWith('eca-') || cleanPart.startsWith('lgpd-') || cleanPart.startsWith('crimes-') || cleanPart.startsWith('atendimento-') || cleanPart.startsWith('marco-')) {
        currentPath = '/noticias/' + cleanPart + '.html';
      } else {
        currentPath = '/' + parts.slice(0, index + 1).join('/');
        if (isLast && currentPath.indexOf('.') === -1) currentPath += '.html';
      }
      const li = document.createElement('li');
      if (!isLast) {
        const a = document.createElement('a');
        a.href = currentPath;
        a.textContent = name;
        li.appendChild(a);
      } else {
        const span = document.createElement('span');
        span.textContent = name;
        span.setAttribute('aria-current', 'page');
        li.appendChild(span);
      }
      ol.appendChild(li);
    });
    container.prepend(ol);
    container.style.display = 'block';
  }

  const breadcrumbHTML =
    '<nav class="breadcrumb-container" aria-label="Breadcrumb" style="display:none;"><ol></ol></nav>';
  const hero = document.querySelector('.page-hero');
  if (hero) {
    hero.insertAdjacentHTML('afterend', breadcrumbHTML);
  } else {
    const container = document.querySelector('.container');
    if (container) {
      container.parentNode.insertBefore(
        document.createRange().createContextualFragment(breadcrumbHTML),
        container
      );
    }
  }
  setTimeout(generateBreadcrumb, 50);

  // ==========================================================
  // 3. BOTÃO ÚNICO + PAINEL DE ACESSIBILIDADE
  // ==========================================================

  // 3a. Remover elementos antigos (toolbar e botões de voz/áudio soltos)
  const oldToolbar = document.querySelector('.accessibility-toolbar');
  if (oldToolbar) oldToolbar.remove();
  const oldToggle = document.querySelector('.accessibility-toolbar-toggle');
  if (oldToggle) oldToggle.remove();
  const oldVoiceContainer = document.querySelector('.voice-audio-buttons');
  if (oldVoiceContainer) oldVoiceContainer.remove();

  // 3b. Criar botão toggle único
  const toggleBtn = document.createElement('button');
  toggleBtn.id = 'accessibility-toggle';
  toggleBtn.setAttribute('aria-label', 'Abrir menu de acessibilidade');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.innerHTML = '♿';
  document.body.appendChild(toggleBtn);

  // 3c. Criar painel
  const panel = document.createElement('div');
  panel.id = 'accessibility-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Ferramentas de acessibilidade');
  panel.innerHTML = `
    <div class="panel-title">
      <span>♿ Acessibilidade</span>
      <button class="panel-close" id="panel-close-btn" aria-label="Fechar painel">✕</button>
    </div>
    <div class="btn-row">
      <button id="audio-btn" data-action="audio"><span class="icon">🔊</span> Ouvir</button>
      <button id="voice-btn" data-action="voice"><span class="icon">🎤</span> Voz</button>
    </div>
    <div class="btn-row three">
      <button data-action="font-decrease">A-</button>
      <button data-action="font-reset">A</button>
      <button data-action="font-increase">A+</button>
    </div>
    <div class="btn-row">
      <button id="contrast-btn" data-action="contrast"><span class="icon">🔲</span> Contraste</button>
      <button id="dyslexic-btn" data-action="dyslexic"><span class="icon">📖</span> Dislexia</button>
    </div>
    <div class="btn-row">
      <button id="theme-btn" data-action="theme"><span class="icon">🌙</span> Escuro</button>
      <button id="motion-btn" data-action="motion"><span class="icon">🎬</span> Animação</button>
    </div>
    <div id="accessibility-status">Nenhuma opção ativa</div>
  `;
  document.body.appendChild(panel);

  // 3d. Criar indicador de voz ativa
  const voiceIndicator = document.createElement('div');
  voiceIndicator.id = 'voice-indicator';
  voiceIndicator.innerHTML = '<span class="dot"></span> Comando de voz ativo';
  document.body.appendChild(voiceIndicator);

  // ==========================================================
  // 4. FUNÇÕES DE ACESSIBILIDADE
  // ==========================================================

  // Estado do painel
  let panelOpen = false;

  // Funções de tema, contraste, fonte, dislexia, movimento
  function toggleTheme() {
    const html = document.documentElement;
    html.classList.toggle('dark-mode');
    const isDark = html.classList.contains('dark-mode');
    localStorage.setItem('accessibility-theme', isDark ? 'dark' : 'light');
    updateUI();
  }

  function toggleContrast() {
    const html = document.documentElement;
    html.classList.toggle('high-contrast');
    localStorage.setItem('accessibility-contrast', html.classList.contains('high-contrast') ? 'high' : 'normal');
    updateUI();
  }

  function changeFontSize(action) {
    const html = document.documentElement;
    const sizes = ['font-small', 'font-medium', 'font-large', 'font-xlarge'];
    const current = sizes.find(cls => html.classList.contains(cls)) || 'font-medium';
    let idx = sizes.indexOf(current);
    if (action === 'decrease') idx = Math.max(0, idx - 1);
    else if (action === 'increase') idx = Math.min(sizes.length - 1, idx + 1);
    else if (action === 'reset') idx = 1;
    html.classList.remove(...sizes);
    html.classList.add(sizes[idx]);
    localStorage.setItem('accessibility-font-size', sizes[idx]);
    updateUI();
  }

  function toggleDyslexic() {
    const html = document.documentElement;
    html.classList.toggle('dyslexic-font');
    localStorage.setItem('accessibility-dyslexic', html.classList.contains('dyslexic-font') ? 'true' : 'false');
    updateUI();
  }

  function toggleMotion() {
    const html = document.documentElement;
    html.classList.toggle('reduce-motion');
    localStorage.setItem('accessibility-motion', html.classList.contains('reduce-motion') ? 'true' : 'false');
    updateUI();
  }

  // ==========================================================
  // 5. ÁUDIO (TTS)
  // ==========================================================

  let isReading = false;
  let currentUtterance = null;

  function toggleAudio() {
    if (isReading) { stopAudio(); return; }
    startAudio();
  }

  function startAudio() {
    const mainContent = document.querySelector('main') || document.querySelector('.container') || document.body;
    const clone = mainContent.cloneNode(true);
    const removeSelectors = ['nav', 'footer', '.nav-menu', '.top-bar', '.footer-grid', '.visitor-counter', '#cookie-consent-banner', '#accessibility-panel', '#accessibility-toggle', '#voice-indicator'];
    removeSelectors.forEach(sel => {
      clone.querySelectorAll(sel).forEach(el => el.remove());
    });
    let text = clone.textContent || '';
    text = text.replace(/\s+/g, ' ').trim();
    if (!text || text.length < 10) {
      updateStatus('Não há conteúdo suficiente para leitura.');
      return;
    }
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.lang = 'pt-BR';
    currentUtterance.rate = 0.9;
    currentUtterance.pitch = 1;
    const voices = window.speechSynthesis.getVoices();
    const ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.includes('Female')) || voices.find(v => v.lang === 'pt-BR');
    if (ptVoice) currentUtterance.voice = ptVoice;
    currentUtterance.onstart = function() {
      isReading = true;
      document.getElementById('audio-btn').classList.add('active');
      document.getElementById('audio-btn').innerHTML = '<span class="icon">⏹️</span> Parar';
      updateStatus('🔊 Lendo página...');
    };
    currentUtterance.onend = function() { stopAudio(); };
    currentUtterance.onerror = function() { stopAudio(); updateStatus('Erro na leitura.'); };
    window.speechSynthesis.speak(currentUtterance);
  }

  function stopAudio() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    isReading = false;
    const btn = document.getElementById('audio-btn');
    if (btn) {
      btn.classList.remove('active');
      btn.innerHTML = '<span class="icon">🔊</span> Ouvir';
    }
    updateStatus('Leitura interrompida.');
    setTimeout(() => { if (!document.querySelector('#accessibility-panel .active')) updateStatus('Nenhuma opção ativa'); }, 3000);
  }

  // ==========================================================
  // 6. COMANDOS DE VOZ
  // ==========================================================

  let isListening = false;
  let recognition = null;

  function toggleVoice() {
    if (isListening) { stopVoice(); return; }
    startVoice();
  }

  function startVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      updateStatus('❌ Voz não suportada neste navegador.');
      return;
    }
    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
      const transcript = event.results[event.results.length - 1][0].transcript.toLowerCase().trim();
      updateStatus('🗣️ "' + transcript + '"');
      processVoiceCommand(transcript);
    };

    recognition.onerror = function(event) {
      if (event.error === 'not-allowed') {
        updateStatus('❌ Permissão negada.');
        stopVoice();
        return;
      }
      if (isListening) {
        try { recognition.start(); } catch (e) {}
      }
    };

    recognition.onend = function() {
      if (isListening) {
        try { recognition.start(); } catch (e) {}
      }
    };

    try { recognition.start(); } catch (e) {}
    isListening = true;
    document.getElementById('voice-btn').classList.add('active');
    document.getElementById('voice-btn').innerHTML = '<span class="icon">⏹️</span> Voz';
    document.getElementById('voice-indicator').style.display = 'flex';
    updateStatus('🎤 Ouvindo... Fale um comando.');
  }

  function stopVoice() {
    if (recognition) {
      try { recognition.stop(); } catch (e) {}
      recognition = null;
    }
    isListening = false;
    document.getElementById('voice-btn').classList.remove('active');
    document.getElementById('voice-btn').innerHTML = '<span class="icon">🎤</span> Voz';
    document.getElementById('voice-indicator').style.display = 'none';
    updateStatus('Comando de voz desativado.');
    setTimeout(() => { if (!document.querySelector('#accessibility-panel .active')) updateStatus('Nenhuma opção ativa'); }, 3000);
  }

  function processVoiceCommand(command) {
    // Navegação
    const navMap = [
      { words: ['início', 'home', 'página inicial'], url: '/' },
      { words: ['notícias', 'artigos', 'blog'], url: '/noticias.html' },
      { words: ['contato', 'falar'], url: '/contato.html' },
      { words: ['áreas', 'atuação', 'especialidades'], url: '/areas-de-atuacao.html' },
      { words: ['sobre', 'advogada'], url: '/sobre.html' },
      { words: ['mapa', 'sitemap'], url: '/sitemap.html' },
      { words: ['acessibilidade'], url: '/acessibilidade.html' }
    ];
    for (let item of navMap) {
      if (item.words.some(w => command.includes(w))) {
        window.location.href = item.url;
        updateStatus('🔗 Navegando para ' + item.url);
        return;
      }
    }

    // Comandos especiais
    if (command.includes('voltar')) { history.back(); updateStatus('🔙 Voltando'); return; }
    if (command.includes('subir') || command.includes('topo')) { window.scrollTo({ top: 0, behavior: 'smooth' }); updateStatus('⬆️ Topo'); return; }
    if (command.includes('descer') || command.includes('baixo')) { window.scrollBy({ top: 300, behavior: 'smooth' }); updateStatus('⬇️ Descendo'); return; }

    // Ações de acessibilidade
    if (command.includes('contraste') || command.includes('alto contraste')) { toggleContrast(); return; }
    if (command.includes('dislexia')) { toggleDyslexic(); return; }
    if (command.includes('modo escuro') || command.includes('escuro')) { toggleTheme(); return; }
    if (command.includes('modo claro') || command.includes('claro')) { if (document.documentElement.classList.contains('dark-mode')) toggleTheme(); return; }
    if (command.includes('aumentar fonte') || command.includes('maior')) { changeFontSize('increase'); return; }
    if (command.includes('diminuir fonte') || command.includes('menor')) { changeFontSize('decrease'); return; }
    if (command.includes('fonte padrão')) { changeFontSize('reset'); return; }
    if (command.includes('ouvir') || command.includes('ler')) { toggleAudio(); return; }
    if (command.includes('parar') && isReading) { stopAudio(); return; }
    if (command.includes('ajuda') || command.includes('comandos')) {
      updateStatus('💡 Comandos: Início, Notícias, Contato, Áreas, Voltar, Subir, Descer, Contraste, Dislexia, Escuro/Claro, Aumentar/diminuir fonte, Ouvir, Parar.');
      return;
    }
    updateStatus('❓ Comando não reconhecido: "' + command + '"');
  }

  // ==========================================================
  // 7. ATUALIZAR INTERFACE (estado dos botões)
  // ==========================================================

  function updateUI() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark-mode');
    const isHighContrast = html.classList.contains('high-contrast');
    const isDyslexic = html.classList.contains('dyslexic-font');
    const isReducedMotion = html.classList.contains('reduce-motion');

    const themeBtn = document.getElementById('theme-btn');
    if (themeBtn) {
      themeBtn.classList.toggle('active', isDark);
      themeBtn.innerHTML = isDark ? '<span class="icon">☀️</span> Claro' : '<span class="icon">🌙</span> Escuro';
    }

    const contrastBtn = document.getElementById('contrast-btn');
    if (contrastBtn) contrastBtn.classList.toggle('active', isHighContrast);

    const dyslexicBtn = document.getElementById('dyslexic-btn');
    if (dyslexicBtn) dyslexicBtn.classList.toggle('active', isDyslexic);

    const motionBtn = document.getElementById('motion-btn');
    if (motionBtn) motionBtn.classList.toggle('active', isReducedMotion);

    // Contar opções ativas
    const activeCount = [isDark, isHighContrast, isDyslexic, isReducedMotion].filter(Boolean).length;
    const statusEl = document.getElementById('accessibility-status');
    if (statusEl && !statusEl.textContent.includes('Lendo') && !statusEl.textContent.includes('Ouvindo') && !statusEl.textContent.includes('Comando')) {
      statusEl.textContent = activeCount > 0 ? activeCount + ' opção(ões) ativa(s)' : 'Nenhuma opção ativa';
    }
  }

  function updateStatus(msg) {
    const statusEl = document.getElementById('accessibility-status');
    if (statusEl) statusEl.textContent = msg;
    clearTimeout(window.statusTimeout);
    window.statusTimeout = setTimeout(() => {
      if (statusEl && !statusEl.textContent.includes('Lendo') && !statusEl.textContent.includes('Ouvindo') && !statusEl.textContent.includes('Comando')) {
        const active = document.querySelectorAll('#accessibility-panel .active').length;
        statusEl.textContent = active > 0 ? active + ' opção(ões) ativa(s)' : 'Nenhuma opção ativa';
      }
    }, 5000);
  }

  // ==========================================================
  // 8. EVENTOS DOS BOTÕES
  // ==========================================================

  // Toggle do painel
  toggleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    panelOpen = !panelOpen;
    panel.classList.toggle('open', panelOpen);
    this.setAttribute('aria-expanded', panelOpen);
  });

  // Fechar painel com botão X
  document.getElementById('panel-close-btn').addEventListener('click', function() {
    panel.classList.remove('open');
    panelOpen = false;
    toggleBtn.setAttribute('aria-expanded', 'false');
  });

  // Fechar ao clicar fora
  document.addEventListener('click', function(e) {
    if (panelOpen && !panel.contains(e.target) && e.target !== toggleBtn) {
      panel.classList.remove('open');
      panelOpen = false;
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Eventos dos botões do painel (delegação)
  panel.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;
    const action = btn.dataset.action;
    if (!action) return;

    // Evita fechar painel ao clicar em botões
    e.stopPropagation();

    switch (action) {
      case 'audio': toggleAudio(); break;
      case 'voice': toggleVoice(); break;
      case 'font-decrease': changeFontSize('decrease'); break;
      case 'font-reset': changeFontSize('reset'); break;
      case 'font-increase': changeFontSize('increase'); break;
      case 'contrast': toggleContrast(); break;
      case 'dyslexic': toggleDyslexic(); break;
      case 'theme': toggleTheme(); break;
      case 'motion': toggleMotion(); break;
      default: break;
    }
    updateUI();
  });

  // ==========================================================
  // 9. CARREGAR PREFERÊNCIAS SALVAS
  // ==========================================================

  function loadPreferences() {
    const theme = localStorage.getItem('accessibility-theme') || 'light';
    const contrast = localStorage.getItem('accessibility-contrast') || 'normal';
    const fontSize = localStorage.getItem('accessibility-font-size') || 'font-medium';
    const dyslexic = localStorage.getItem('accessibility-dyslexic') === 'true';
    const motion = localStorage.getItem('accessibility-motion') === 'true';

    const html = document.documentElement;
    if (theme === 'dark') html.classList.add('dark-mode');
    if (contrast === 'high') html.classList.add('high-contrast');
    if (fontSize !== 'font-medium') html.classList.add(fontSize);
    if (dyslexic) html.classList.add('dyslexic-font');
    if (motion) html.classList.add('reduce-motion');

    updateUI();
  }

  loadPreferences();

  // ==========================================================
  // 10. BANNER LGPD
  // ==========================================================

  function criarBannerLGPD() {
    if (document.getElementById('cookie-consent-banner')) return;
    const consent = localStorage.getItem('cookieConsent');
    if (consent === 'accepted' || consent === 'rejected') return;

    const banner = document.createElement('div');
    banner.id = 'cookie-consent-banner';
    banner.style.cssText = 'position:fixed; bottom:20px; left:50%; transform:translateX(-50%); width:90%; max-width:900px; background:rgba(11,37,30,0.95); backdrop-filter:blur(10px); padding:18px 25px; border-radius:12px; box-shadow:0 8px 40px rgba(0,0,0,0.6); border:1px solid #c5a880; z-index:9999; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:15px; font-family:Inter,sans-serif; transition:opacity 0.4s ease, transform 0.4s ease;';
    banner.innerHTML = `
      <div style="flex:1 1 100%; text-align:center; color:#e2e8f0; font-size:0.9rem; line-height:1.5;">
        <i class="fas fa-shield-alt" style="color:#c5a880; margin-right:8px; font-size:1.1rem;"></i>
        <span style="font-weight:300;">Utilizamos cookies essenciais e, com seu consentimento, cookies de análise para melhorar sua experiência. </span>
        <a href="/legal.html#privacidade" style="color:#c5a880; text-decoration:underline; font-weight:500;">Política de Privacidade</a>
        <span style="color:#94a3b8; margin:0 6px;">|</span>
        <a href="/legal.html#cookies" style="color:#cbd5e1; text-decoration:underline;">Configurar</a>
      </div>
      <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center;">
        <button onclick="window.rejectCookies()" style="background:transparent; color:#cbd5e1; border:1px solid #64748b; padding:8px 20px; border-radius:6px; font-weight:600; font-size:0.85rem; cursor:pointer;">Recusar</button>
        <button onclick="window.acceptCookies()" style="background:#c5a880; color:#0b251e; border:none; padding:8px 28px; border-radius:6px; font-weight:700; font-size:0.85rem; cursor:pointer;">Aceitar</button>
      </div>
    `;
    document.body.appendChild(banner);
  }

  window.acceptCookies = function() {
    localStorage.setItem('cookieConsent', 'accepted');
    const b = document.getElementById('cookie-consent-banner');
    if (b) { b.style.opacity = '0'; b.style.transform = 'translateX(-50%) translateY(20px)'; setTimeout(() => b.style.display = 'none', 500); }
  };
  window.rejectCookies = function() {
    localStorage.setItem('cookieConsent', 'rejected');
    const b = document.getElementById('cookie-consent-banner');
    if (b) { b.style.opacity = '0'; b.style.transform = 'translateX(-50%) translateY(20px)'; setTimeout(() => b.style.display = 'none', 500); }
  };

  criarBannerLGPD();

  // ==========================================================
  // 11. ARIA LABELS DINÂMICOS
  // ==========================================================

  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === '#')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.getElementById('menu-checkbox')?.addEventListener('change', function() {
      menuToggle.setAttribute('aria-expanded', this.checked ? 'true' : 'false');
    });
  }

  // ==========================================================
  // 12. INICIALIZAÇÃO
  // ==========================================================

  console.log('♿ Acessibilidade global (versão clean) carregada com sucesso!');
});
