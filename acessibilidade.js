/* ============================================================
   ACESSIBILIDADE GLOBAL – Advocacia Vera Catarina
   Versão completa com toolbar, LGPD, comandos de voz e áudio
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

    if (parts.length === 0) {
      container.style.display = 'none';
      return;
    }

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

      // Tratamento especial para artigos dentro de /noticias/
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

  const breadcrumbHTML = `
    <nav class="breadcrumb-container" aria-label="Breadcrumb" style="display:none;">
      <ol></ol>
    </nav>
  `;

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
  // 3. TOOLBAR DE ACESSIBILIDADE
  // ==========================================================

  // 3a. Criar botão toggle
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'accessibility-toolbar-toggle';
  toggleBtn.setAttribute('aria-label', 'Abrir ferramentas de acessibilidade');
  toggleBtn.setAttribute('aria-expanded', 'false');
  toggleBtn.innerHTML = '♿';
  document.body.appendChild(toggleBtn);

  // 3b. Criar toolbar
  const toolbar = document.createElement('div');
  toolbar.className = 'accessibility-toolbar';
  toolbar.setAttribute('role', 'dialog');
  toolbar.setAttribute('aria-label', 'Ferramentas de acessibilidade');
  toolbar.innerHTML = `
    <div class="toolbar-title">♿ Acessibilidade</div>
    <div class="btn-group">
      <button data-theme="dark" title="Modo escuro">🌙 Escuro</button>
      <button data-theme="light" title="Modo claro">☀️ Claro</button>
      <button data-contrast="high" title="Alto contraste">🔲 Contraste</button>
      <button data-contrast="normal" title="Contraste normal">🔳 Normal</button>
      <button data-font="small" title="Fonte pequena">A-</button>
      <button data-font="medium" title="Fonte média">A</button>
      <button data-font="large" title="Fonte grande">A+</button>
      <button data-font="xlarge" title="Fonte extra grande">A++</button>
      <button data-dyslexic="toggle" class="btn-full" title="Fonte para dislexia">📖 Fonte Dislexia</button>
      <button data-motion="toggle" class="btn-full" title="Reduzir animações">🎬 Reduzir Animações</button>
    </div>
  `;
  document.body.appendChild(toolbar);

  // 3c. Funções para alternar modos
  function toggleTheme(theme) {
    const html = document.documentElement;
    html.classList.remove('dark-mode');
    if (theme === 'dark') {
      html.classList.add('dark-mode');
    }
    localStorage.setItem('accessibility-theme', theme);
  }

  function toggleContrast(mode) {
    const html = document.documentElement;
    html.classList.remove('high-contrast');
    if (mode === 'high') {
      html.classList.add('high-contrast');
    }
    localStorage.setItem('accessibility-contrast', mode);
  }

  function toggleFontSize(size) {
    const html = document.documentElement;
    html.classList.remove('font-small', 'font-medium', 'font-large', 'font-xlarge');
    if (size !== 'medium') {
      html.classList.add('font-' + size);
    }
    localStorage.setItem('accessibility-font-size', size);
  }

  function toggleDyslexic() {
    const html = document.documentElement;
    html.classList.toggle('dyslexic-font');
    const enabled = html.classList.contains('dyslexic-font');
    localStorage.setItem('accessibility-dyslexic', enabled ? 'true' : 'false');
    updateButtonStates();
  }

  function toggleMotion() {
    const html = document.documentElement;
    html.classList.toggle('reduce-motion');
    const enabled = html.classList.contains('reduce-motion');
    localStorage.setItem('accessibility-motion', enabled ? 'true' : 'false');
    updateButtonStates();
  }

  // 3d. Atualizar estado visual dos botões
  function updateButtonStates() {
    const html = document.documentElement;
    const btns = toolbar.querySelectorAll('button');

    btns.forEach(btn => {
      btn.classList.remove('active');
      const theme = btn.dataset.theme;
      const contrast = btn.dataset.contrast;
      const font = btn.dataset.font;

      if (theme) {
        if ((theme === 'dark' && html.classList.contains('dark-mode')) ||
            (theme === 'light' && !html.classList.contains('dark-mode'))) {
          btn.classList.add('active');
        }
      }
      if (contrast) {
        if ((contrast === 'high' && html.classList.contains('high-contrast')) ||
            (contrast === 'normal' && !html.classList.contains('high-contrast'))) {
          btn.classList.add('active');
        }
      }
      if (font) {
        if (html.classList.contains('font-' + font)) {
          btn.classList.add('active');
        }
        if (font === 'medium' && !html.classList.contains('font-small') &&
            !html.classList.contains('font-large') && !html.classList.contains('font-xlarge')) {
          btn.classList.add('active');
        }
      }
      if (btn.dataset.dyslexic === 'toggle') {
        if (html.classList.contains('dyslexic-font')) btn.classList.add('active');
      }
      if (btn.dataset.motion === 'toggle') {
        if (html.classList.contains('reduce-motion')) btn.classList.add('active');
      }
    });
  }

  // 3e. Eventos da toolbar
  toolbar.addEventListener('click', function(e) {
    const btn = e.target.closest('button');
    if (!btn) return;

    const theme = btn.dataset.theme;
    const contrast = btn.dataset.contrast;
    const font = btn.dataset.font;
    const dyslexic = btn.dataset.dyslexic;
    const motion = btn.dataset.motion;

    if (theme) toggleTheme(theme);
    else if (contrast) toggleContrast(contrast);
    else if (font) toggleFontSize(font);
    else if (dyslexic) toggleDyslexic();
    else if (motion) toggleMotion();

    updateButtonStates();
  });

  // 3f. Toggle da toolbar
  toggleBtn.addEventListener('click', function() {
    const isOpen = toolbar.classList.toggle('open');
    this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Fechar toolbar ao clicar fora
  document.addEventListener('click', function(e) {
    if (!toolbar.contains(e.target) && e.target !== toggleBtn) {
      toolbar.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // 3g. Carregar preferências salvas
  function loadPreferences() {
    const theme = localStorage.getItem('accessibility-theme') || 'light';
    const contrast = localStorage.getItem('accessibility-contrast') || 'normal';
    const fontSize = localStorage.getItem('accessibility-font-size') || 'medium';
    const dyslexic = localStorage.getItem('accessibility-dyslexic') === 'true';
    const motion = localStorage.getItem('accessibility-motion') === 'true';

    if (theme === 'dark') document.documentElement.classList.add('dark-mode');
    if (contrast === 'high') document.documentElement.classList.add('high-contrast');
    if (fontSize !== 'medium') document.documentElement.classList.add('font-' + fontSize);
    if (dyslexic) document.documentElement.classList.add('dyslexic-font');
    if (motion) document.documentElement.classList.add('reduce-motion');

    updateButtonStates();
  }

  loadPreferences();

  // ==========================================================
  // 4. ARIA LABELS DINÂMICOS
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
  // 5. BANNER LGPD
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
  // 6. BOTÕES DE VOZ E ÁUDIO (COM ESPAÇAMENTO AJUSTADO)
  // ==========================================================

  function criarBotoesVoz() {
    if (document.querySelector('.voice-audio-buttons')) return;

    const container = document.createElement('div');
    container.className = 'voice-audio-buttons';
    // ALTERAÇÃO: bottom aumentado para 170px e gap para 12px
    container.style.cssText = 'position:fixed; bottom:170px; left:20px; z-index:9998; display:flex; flex-direction:column; gap:12px;';
    container.innerHTML = `
      <button id="voice-btn" class="voice-btn" style="background:#c5a880; color:#0b251e; border:none; border-radius:50px; padding:10px 18px; font-weight:700; font-size:0.8rem; cursor:pointer; box-shadow:0 4px 15px rgba(0,0,0,0.15); transition:all 0.2s; display:flex; align-items:center; gap:8px; font-family:Inter,sans-serif;">
        <i class="fas fa-microphone"></i> Comandos de Voz
      </button>
      <button id="audio-reader-btn" style="background:#c5a880; color:#0b251e; border:none; border-radius:50px; padding:10px 18px; font-weight:700; font-size:0.8rem; cursor:pointer; box-shadow:0 4px 15px rgba(0,0,0,0.15); transition:all 0.2s; display:flex; align-items:center; gap:8px; font-family:Inter,sans-serif;">
        <i class="fas fa-volume-up"></i> Ouvir Página
      </button>
      <button id="audio-stop-btn" style="background:#991b1b; color:white; border:none; border-radius:50px; padding:10px 18px; font-weight:700; font-size:0.8rem; cursor:pointer; box-shadow:0 4px 15px rgba(0,0,0,0.15); transition:all 0.2s; display:none; align-items:center; gap:8px; font-family:Inter,sans-serif;">
        <i class="fas fa-stop"></i> Parar
      </button>
      <p id="voice-status" style="font-size:0.75rem; color:#64748b; margin-top:4px; text-align:center; display:none;">Clique no microfone e fale um comando.</p>
    `;
    document.body.appendChild(container);

    // ===== LEITURA POR ÁUDIO (TTS) =====
    let currentUtterance = null;
    let isReading = false;

    window.readPageAloud = function() {
      if (isReading) { window.stopReading(); setTimeout(() => window.readPageAloud(), 300); return; }
      const main = document.querySelector('main') || document.querySelector('.article-body') || document.body;
      const clone = main.cloneNode(true);
      const remove = ['nav', 'footer', '.nav-menu', '.top-bar', '.footer-grid', '.visitor-counter', '.backlinks-section', '#cookie-consent-banner', '.voice-audio-buttons'];
      remove.forEach(sel => { clone.querySelectorAll(sel).forEach(el => el.remove()); });
      let text = clone.textContent || '';
      text = text.replace(/\s+/g, ' ').trim();
      if (!text || text.length < 10) { alert('Não há conteúdo suficiente para leitura.'); return; }
      currentUtterance = new SpeechSynthesisUtterance(text);
      currentUtterance.lang = 'pt-BR';
      currentUtterance.rate = 0.9;
      currentUtterance.pitch = 1.0;
      currentUtterance.volume = 1;
      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.includes('Female')) || voices.find(v => v.lang === 'pt-BR') || voices.find(v => v.lang.startsWith('pt'));
      if (ptVoice) currentUtterance.voice = ptVoice;
      currentUtterance.onstart = function() {
        isReading = true;
        const btn = document.getElementById('audio-reader-btn');
        if (btn) { btn.innerHTML = '<i class="fas fa-pause"></i> Pausar'; btn.style.background = '#f59e0b'; }
        document.getElementById('audio-stop-btn').style.display = 'flex';
      };
      currentUtterance.onend = function() {
        isReading = false;
        const btn = document.getElementById('audio-reader-btn');
        if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.style.background = '#c5a880'; }
        document.getElementById('audio-stop-btn').style.display = 'none';
      };
      currentUtterance.onerror = function() {
        isReading = false;
        const btn = document.getElementById('audio-reader-btn');
        if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.style.background = '#c5a880'; }
        document.getElementById('audio-stop-btn').style.display = 'none';
      };
      window.speechSynthesis.speak(currentUtterance);
    };

    window.stopReading = function() {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
      isReading = false;
      const btn = document.getElementById('audio-reader-btn');
      if (btn) { btn.innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página'; btn.style.background = '#c5a880'; }
      document.getElementById('audio-stop-btn').style.display = 'none';
    };

    document.getElementById('audio-reader-btn').addEventListener('click', window.readPageAloud);
    document.getElementById('audio-stop-btn').addEventListener('click', window.stopReading);

    // ===== COMANDOS DE VOZ =====
    const voiceBtn = document.getElementById('voice-btn');
    const statusEl = document.getElementById('voice-status');
    let isListening = false;
    let recognition = null;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      if (statusEl) { statusEl.textContent = '❌ Seu navegador não suporta reconhecimento de voz.'; statusEl.style.display = 'block'; }
      if (voiceBtn) { voiceBtn.disabled = true; voiceBtn.style.opacity = '0.5'; }
      return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'pt-BR';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = function(event) {
      const command = event.results[0][0].transcript.toLowerCase().trim();
      if (statusEl) { statusEl.textContent = '🗣️ Comando: "' + command + '"'; statusEl.style.display = 'block'; setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 3000); }
      console.log('Comando:', command);

      const cmds = [
        { words: ['início', 'home', 'página inicial'], action: () => window.location.href = '/' },
        { words: ['notícias', 'artigos', 'blog'], action: () => window.location.href = '/noticias.html' },
        { words: ['contato', 'falar'], action: () => window.location.href = '/contato.html' },
        { words: ['voltar'], action: () => history.back() },
        { words: ['fale conosco', 'whatsapp', 'zap'], action: () => window.open('https://api.whatsapp.com/send?phone=555134502229', '_blank') },
        { words: ['modo escuro', 'escuro'], action: () => { document.documentElement.classList.toggle('dark-mode'); } },
        { words: ['alto contraste', 'contraste'], action: () => { document.documentElement.classList.toggle('high-contrast'); } },
        { words: ['aumentar fonte', 'maior'], action: () => { document.documentElement.classList.remove('font-small','font-medium','font-large','font-xlarge'); document.documentElement.classList.add('font-large'); } },
        { words: ['diminuir fonte', 'menor'], action: () => { document.documentElement.classList.remove('font-small','font-medium','font-large','font-xlarge'); document.documentElement.classList.add('font-small'); } },
        { words: ['fonte padrão'], action: () => { document.documentElement.classList.remove('font-small','font-medium','font-large','font-xlarge'); } },
        { words: ['fonte dislexia', 'dislexia'], action: () => { document.documentElement.classList.toggle('dyslexic-font'); } },
        { words: ['ler página', 'ouvir'], action: () => window.readPageAloud() },
        { words: ['parar', 'pausar'], action: () => window.stopReading() },
        { words: ['ajuda', 'comandos'], action: () => { if (statusEl) { statusEl.textContent = '💡 Comandos: Início, Notícias, Contato, Voltar, Fale conosco, Modo escuro, Alto contraste, Aumentar fonte, Diminuir fonte, Fonte padrão, Fonte dislexia, Ler página, Parar.'; statusEl.style.display = 'block'; setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 6000); } } }
      ];

      let found = false;
      for (let c of cmds) {
        if (c.words.some(w => command.includes(w))) { c.action(); found = true; break; }
      }
      if (!found && statusEl) { statusEl.textContent = '❓ Comando não reconhecido. Diga "ajuda".'; statusEl.style.display = 'block'; setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 3000); }

      if (isListening) setTimeout(() => { try { recognition.start(); } catch(e) {} }, 500);
    };

    recognition.onend = function() { if (isListening) { try { recognition.start(); } catch(e) {} } };
    recognition.onerror = function(event) {
      if (event.error === 'not-allowed') { if (statusEl) { statusEl.textContent = '❌ Permissão negada.'; statusEl.style.display = 'block'; } isListening = false; if (voiceBtn) { voiceBtn.classList.remove('listening'); voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Comandos de Voz'; } return; }
      if (isListening) setTimeout(() => { try { recognition.start(); } catch(e) {} }, 500);
    };

    voiceBtn.addEventListener('click', function() {
      if (isListening) {
        isListening = false; recognition.stop(); voiceBtn.classList.remove('listening'); voiceBtn.innerHTML = '<i class="fas fa-microphone"></i> Comandos de Voz';
        if (statusEl) { statusEl.textContent = '⏸️ Pausado.'; statusEl.style.display = 'block'; setTimeout(() => { if (!isListening) statusEl.style.display = 'none'; }, 2000); }
      } else {
        isListening = true; voiceBtn.classList.add('listening'); voiceBtn.innerHTML = '<i class="fas fa-stop"></i> Parar Escuta';
        if (statusEl) { statusEl.textContent = '🎤 Ouvindo... Fale um comando.'; statusEl.style.display = 'block'; }
        try { recognition.start(); } catch(e) {}
      }
    });
  }

  criarBotoesVoz();

  console.log('♿ Recursos de acessibilidade globais carregados com sucesso!');
});
