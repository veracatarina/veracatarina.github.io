/* ============================================================
   ACESSIBILIDADE - TOOLBAR, BREADCRUMB, SKIP LINK E PREFERÊNCIAS
   ============================================================ */

document.addEventListener('DOMContentLoaded', function() {

  // ------------------------------------------------------------
  // 1. SKIP LINK (Ir para o conteúdo)
  // ------------------------------------------------------------
  const skipLink = document.createElement('a');
  skipLink.href = '#main-content';
  skipLink.className = 'skip-link';
  skipLink.setAttribute('aria-label', 'Pular para o conteúdo principal');
  skipLink.textContent = '♿ Pular para o conteúdo principal';
  document.body.prepend(skipLink);

  // Adicionar ID ao main se não existir
  const main = document.querySelector('main');
  if (main) main.id = 'main-content';
  else {
    // fallback: encontrar a primeira section ou div principal
    const firstSection = document.querySelector('section') || document.querySelector('.container');
    if (firstSection) firstSection.id = 'main-content';
  }

  // ------------------------------------------------------------
  // 2. BREADCRUMB (migalhas de pão)
  // ------------------------------------------------------------
  function generateBreadcrumb() {
    const path = window.location.pathname;
    const parts = path.split('/').filter(p => p !== '' && p !== 'index.html');
    const container = document.querySelector('.breadcrumb-container');
    if (!container) return;

    const ol = container.querySelector('ol') || document.createElement('ol');
    ol.innerHTML = '';

    // Home
    const homeLi = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = '/';
    homeLink.textContent = '🏠 Início';
    homeLi.appendChild(homeLink);
    ol.appendChild(homeLi);

    // Se não houver partes, é a home
    if (parts.length === 0) {
      container.style.display = 'none';
      return;
    }

    // Mapeamento de nomes amigáveis
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
      // Remove extensão .html
      const cleanPart = part.replace('.html', '');
      const name = pageNames[cleanPart] || cleanPart.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

      // Se for uma página dentro de /noticias/, tratar especial
      if (cleanPart === 'direito-ao-esquecimento-case-academico-premiado') {
        currentPath = '/noticias/direito-ao-esquecimento-case-academico-premiado.html';
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

  // Inserir breadcrumb no topo de cada página (após o header)
  const breadcrumbHTML = `
    <nav class="breadcrumb-container" aria-label="Breadcrumb" style="display:none;">
      <ol></ol>
    </nav>
  `;

  // Inserir após o hero ou após o header
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

  // Gerar breadcrumb após inserir
  setTimeout(generateBreadcrumb, 50);

  // ------------------------------------------------------------
  // 3. TOOLBAR DE ACESSIBILIDADE
  // ------------------------------------------------------------

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

  // ------------------------------------------------------------
  // 4. ARIA LABELS DINÂMICOS
  // ------------------------------------------------------------

  // 4a. Adicionar aria-current="page" ao link do menu ativo
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === 'index.html' && href === '#')) {
      link.setAttribute('aria-current', 'page');
    }
  });

  // 4b. Adicionar aria-expanded aos links do menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    menuToggle.setAttribute('aria-label', 'Abrir menu de navegação');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.getElementById('menu-checkbox')?.addEventListener('change', function() {
      menuToggle.setAttribute('aria-expanded', this.checked ? 'true' : 'false');
    });
  }

  // 4c. Botões com aria-label (já adicionado no toggle da toolbar)

  console.log('♿ Recursos de acessibilidade carregados com sucesso!');
});