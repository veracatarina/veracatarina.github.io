<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- ===== REDIRECIONAMENTO PARA O NOVO DOMÍNIO ===== -->
  <script src="/redirect.js"></script>
  
  <meta name="author" content="Fábio Wlademir | Advocacia Vera Catarina">
  <meta name="description" content="Mapa do site da Advocacia Vera Catarina. Encontre todas as páginas, áreas de atuação, notícias e conteúdos estratégicos em um só lugar.">
  <meta name="keywords" content="mapa do site, sitemap, todas as páginas, advocacia vera catarina, sapucaia do sul, direito digital, provas digitais, correspondente jurídico">
  <meta name="robots" content="index, follow">
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
  
  <!-- ===== CANONICAL ===== -->
  <link rel="canonical" href="https://veracatarina.adv.br/sitemap.html">
  
  <!-- ===== OPEN GRAPH ===== -->
  <meta property="og:title" content="Mapa do Site | Advocacia Vera Catarina">
  <meta property="og:description" content="Mapa do site com todas as páginas, áreas de atuação, notícias e conteúdos estratégicos da Dra. Vera Catarina.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://veracatarina.adv.br/sitemap.html">
  <meta property="og:image" content="https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/sitemap-mapa-site-advocacia.jpg">
  <meta property="og:image:alt" content="Mapa do site - Advocacia Vera Catarina">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  
  <!-- ===== TWITTER CARDS ===== -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Mapa do Site | Advocacia Vera Catarina">
  <meta name="twitter:description" content="Mapa do site com todas as páginas, áreas de atuação, notícias e conteúdos estratégicos da Dra. Vera Catarina.">
  <meta name="twitter:image" content="https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/sitemap-mapa-site-advocacia.jpg">
  
  <title>Mapa do Site | Advocacia Vera Catarina</title>

  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;700&family=Inter:wght@300;400;600;700&display=swap">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fontsource/open-dyslexic@5.0.21/index.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="/acessibilidade.css">

  <style>
    /* ===== ESTILOS PADRÃO ===== */
    :root {
      --primary-dark: #0b251e;
      --primary: #143d33;
      --secondary: #0f172a;
      --accent: #c5a880;
      --accent-hover: #b39369;
      --danger: #991b1b;
      --text-dark: #1e293b;
      --text-light: #64748b;
      --bg-light: #f8fafc;
      --border: #e2e8f0;
      --shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.05);
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', sans-serif; color: var(--text-dark); background: #ffffff; line-height: 1.6; padding-top: 120px; }
    .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
    h1, h2, h3, h4, .brand-font { font-family: 'Cinzel', serif; }

    /* ===== TOP BAR E HEADER ===== */
    .top-bar { background: #061612; height: 40px; position: fixed; top: 0; left: 0; right: 0; z-index: 1001; border-bottom: 1px solid rgba(197, 168, 128, 0.2); display: flex; align-items: center; }
    .top-container { display: flex; justify-content: space-between; align-items: center; width: 100%; font-size: 0.8rem; color: #cbd5e1; }
    .top-socials { display: flex; gap: 15px; }
    .top-socials a { color: #cbd5e1; text-decoration: none; transition: color 0.2s; font-size: 0.95rem; }
    .top-socials a:hover { color: var(--accent); }
    .top-contact-info { display: flex; gap: 15px; }
    .top-contact-info span i { color: var(--accent); margin-right: 4px; }
    .top-contact-info .obs-tel { font-size: 0.7rem; color: #94a3b8; font-weight: normal; margin-left: 2px; }

    header { position: fixed; top: 40px; left: 0; right: 0; height: 80px; background: rgba(11, 37, 30, 0.98); backdrop-filter: blur(10px); z-index: 1000; border-bottom: 2px solid var(--accent); display: flex; align-items: center; }
    .nav-container { display: flex; justify-content: space-between; align-items: center; width: 100%; }
    .logo { color: white; text-decoration: none; display: flex; flex-direction: column; z-index: 1002; }
    .logo .main-txt { color: white; font-size: 1.2rem; font-weight: 700; letter-spacing: 1px; }
    .logo .sub-txt { color: var(--accent); font-size: 0.65rem; text-transform: uppercase; letter-spacing: 2px; }

    .menu-toggle { display: none; flex-direction: column; gap: 5px; cursor: pointer; z-index: 1002; background: transparent; border: none; }
    .menu-toggle span { width: 25px; height: 3px; background: white; transition: all 0.3s ease; }
    #menu-checkbox { display: none; }

    .nav-menu {
      display: flex;
      list-style: none;
      gap: 14px;
      align-items: center;
    }
    .nav-menu > li { position: relative; list-style: none; }
    .nav-menu > li > a {
      color: #e2e8f0;
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 600;
      transition: color 0.2s, border-color 0.2s;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      padding: 4px 0;
      border-bottom: 2px solid transparent;
      display: inline-block;
    }
    .nav-menu > li > a:hover { color: var(--accent); border-bottom-color: var(--accent); }
    .nav-menu > li > a.ativo { color: var(--accent); border-bottom-color: var(--accent); }
    .btn-emergency-nav {
      background: var(--danger);
      color: white !important;
      padding: 6px 14px;
      border-radius: 4px;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.75rem !important;
      animation: pulse 2s infinite;
      border: none !important;
      border-bottom: none !important;
    }
    .btn-emergency-nav:hover { background: #b91c1c; color: white !important; border-bottom: none !important; }

    .dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: rgba(11, 37, 30, 0.98);
      backdrop-filter: blur(10px);
      min-width: 200px;
      border: 1px solid var(--accent);
      border-radius: 6px;
      padding: 8px 0;
      box-shadow: 0 8px 25px rgba(0,0,0,0.3);
      z-index: 1003;
    }
    .dropdown-content li { display: block; margin: 0; padding: 0; }
    .dropdown-content li a {
      display: block;
      padding: 10px 20px;
      color: #e2e8f0;
      text-decoration: none;
      font-size: 0.78rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      border-bottom: none !important;
      transition: background 0.2s;
    }
    .dropdown-content li a:hover { background: rgba(197, 168, 128, 0.15); color: var(--accent); }
    .dropdown:hover .dropdown-content { display: block; }
    .dropbtn i { transition: transform 0.2s; }
    .dropdown:hover .dropbtn i { transform: rotate(180deg); }

    /* ===== HERO ===== */
    .page-hero {
      background: linear-gradient(rgba(11, 37, 30, 0.92), rgba(15, 23, 42, 0.95)), url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200') center/cover;
      color: white;
      padding: 70px 0 60px;
      text-align: center;
      border-bottom: 4px solid var(--accent);
    }
    .page-hero h1 {
      font-size: clamp(2rem, 4vw, 3rem);
      margin-bottom: 10px;
      font-weight: 500;
    }
    .page-hero h1 span { color: var(--accent); }
    .page-hero p {
      font-size: clamp(0.95rem, 2vw, 1.15rem);
      color: #cbd5e1;
      max-width: 650px;
      margin: 0 auto;
    }

    /* ===== CONTEÚDO ===== */
    .content-section { padding: 60px 0; }
    .content-section h2 { font-size: 1.8rem; color: var(--primary-dark); margin-bottom: 15px; position: relative; padding-bottom: 10px; }
    .content-section h2::after { content: ''; position: absolute; bottom: 0; left: 0; width: 50px; height: 3px; background: var(--accent); }

    .sitemap-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
    }
    .sitemap-category {
      background: var(--bg-light);
      padding: 25px 30px;
      border-radius: 8px;
      border-left: 4px solid var(--accent);
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .sitemap-category:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    }
    .sitemap-category h3 {
      font-size: 1.2rem;
      color: var(--primary-dark);
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sitemap-category h3 i { color: var(--accent); }
    .sitemap-category ul { list-style: none; }
    .sitemap-category ul li {
      padding: 8px 0;
      border-bottom: 1px solid var(--border);
    }
    .sitemap-category ul li:last-child { border-bottom: none; }
    .sitemap-category ul li a {
      color: var(--text-dark);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .sitemap-category ul li a:hover { color: var(--accent); }
    .sitemap-category ul li a i {
      color: var(--accent);
      font-size: 0.9rem;
      width: 20px;
      text-align: center;
    }
    .sitemap-category ul li .desc {
      font-size: 0.8rem;
      color: var(--text-light);
      font-weight: 400;
      margin-left: 30px;
      display: block;
    }

    .cta-box {
      background: var(--primary-dark);
      color: white;
      padding: 40px;
      border-radius: 8px;
      text-align: center;
      margin: 40px 0;
    }
    .cta-box h3 { color: white; font-size: 1.8rem; margin-bottom: 10px; }
    .cta-box p { color: #cbd5e1; margin-bottom: 20px; }
    .btn-cta {
      background: var(--accent);
      color: var(--primary-dark);
      padding: 14px 40px;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 700;
      font-size: 1rem;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: background 0.2s;
    }
    .btn-cta:hover { background: var(--accent-hover); }

    .btn-emergency-float {
      position: fixed;
      bottom: 25px;
      right: 25px;
      background: #25d366;
      color: white;
      padding: 14px 22px;
      border-radius: 50px;
      text-decoration: none;
      font-weight: 700;
      font-size: 0.9rem;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
      z-index: 999;
      animation: pulse-green 2s infinite;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    footer { background: var(--primary-dark); color: #cbd5e1; padding: 50px 0 30px; border-top: 4px solid var(--accent); }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 30px; margin-bottom: 40px; font-size: 0.9rem; }
    .footer-col h5 { color: white; margin-bottom: 15px; font-size: 1rem; text-transform: uppercase; letter-spacing: 1px; }
    .footer-col ul { list-style: none; }
    .footer-col ul li { margin-bottom: 8px; }
    .footer-col ul li a { color: #cbd5e1; text-decoration: none; cursor: pointer; }
    .footer-col ul li a:hover { color: var(--accent); }
    .footer-bottom { text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 25px; font-size: 0.78rem; color: #94a3b8; }
    .visitor-counter { margin-top: 15px; font-size: 0.78rem; color: #cbd5e1; display: inline-flex; align-items: center; gap: 8px; background: rgba(0,0,0,0.3); padding: 6px 12px; border-radius: 4px; border: 1px solid rgba(197, 168, 128, 0.2); }
    .visitor-counter i { color: var(--accent); }
    .visitor-counter img { height: 16px; vertical-align: middle; border-radius: 2px; }

    /* ===== ACCESSIBILITY TOOLBAR ===== */
    .accessibility-toolbar-toggle {
      position: fixed;
      bottom: 70px;
      left: 20px;
      z-index: 9998;
      background: var(--primary-dark, #0b251e);
      color: white;
      border: 2px solid var(--accent, #c5a880);
      border-radius: 50%;
      width: 52px;
      height: 52px;
      font-size: 1.5rem;
      cursor: pointer;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
      transition: transform 0.2s, background 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .accessibility-toolbar-toggle:hover {
      transform: scale(1.05);
      background: var(--accent, #c5a880);
      color: var(--primary-dark, #0b251e);
    }
    .accessibility-toolbar {
      position: fixed;
      bottom: 180px;
      left: 20px;
      z-index: 9997;
      background: rgba(11, 37, 30, 0.95);
      backdrop-filter: blur(12px);
      border: 1px solid var(--accent, #c5a880);
      border-radius: 12px;
      padding: 20px 16px;
      width: 220px;
      box-shadow: 0 8px 40px rgba(0,0,0,0.5);
      display: none;
      flex-direction: column;
      gap: 12px;
      color: #e2e8f0;
      font-family: 'Inter', sans-serif;
    }
    .accessibility-toolbar.open { display: flex; }
    .accessibility-toolbar .toolbar-title {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: var(--accent, #c5a880);
      text-align: center;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 8px;
      margin-bottom: 4px;
    }
    .accessibility-toolbar .btn-group {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
    }
    .accessibility-toolbar button {
      background: rgba(255,255,255,0.08);
      border: 1px solid rgba(255,255,255,0.15);
      color: #e2e8f0;
      padding: 8px 6px;
      border-radius: 6px;
      font-size: 0.7rem;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s, border-color 0.2s;
      font-family: 'Inter', sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
    .accessibility-toolbar button:hover {
      background: rgba(255,255,255,0.15);
      border-color: var(--accent, #c5a880);
    }
    .accessibility-toolbar button.active {
      background: var(--accent, #c5a880);
      color: var(--primary-dark, #0b251e);
      border-color: var(--accent, #c5a880);
    }

    @keyframes pulse { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(153, 27, 27, 0.7); } 70% { transform: scale(1.03); box-shadow: 0 0 0 10px rgba(153, 27, 27, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(153, 27, 27, 0); } }
    @keyframes pulse-green { 0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); } 70% { transform: scale(1.03); box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); } 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); } }

    @media (max-width: 992px) {
      body { padding-top: 150px; }
      header { top: 70px; height: 75px; }
      .top-bar { height: auto; padding: 8px 0; position: fixed; }
      .top-container { flex-direction: column; gap: 6px; text-align: center; }
      .top-contact-info { flex-direction: column; gap: 2px; }
      .menu-toggle { display: flex; }
      .nav-menu {
        position: fixed;
        top: 145px;
        right: -100%;
        background: rgba(11, 37, 30, 0.98);
        flex-direction: column;
        width: 100%;
        height: calc(100vh - 145px);
        gap: 25px;
        padding: 40px 20px;
        transition: right 0.3s ease;
        z-index: 999;
        border-top: 1px solid var(--accent);
        align-items: center;
      }
      .nav-menu > li { width: 100%; text-align: center; }
      .nav-menu > li > a { font-size: 1rem !important; border-bottom: none !important; }
      .nav-menu > li > a:hover { border-bottom: none !important; }
      .dropdown-content {
        position: static;
        background: transparent;
        border: none;
        box-shadow: none;
        padding-left: 20px;
        min-width: auto;
        display: none !important;
      }
      .dropdown.open .dropdown-content { display: block !important; }
      .dropdown-content li a { font-size: 0.9rem; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.05) !important; }
      #menu-checkbox:checked ~ .nav-menu { right: 0; }
      #menu-checkbox:checked ~ .menu-toggle span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
      #menu-checkbox:checked ~ .menu-toggle span:nth-child(2) { opacity: 0; }
      #menu-checkbox:checked ~ .menu-toggle span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
      .sitemap-grid { grid-template-columns: 1fr; gap: 20px; }
      .footer-grid { grid-template-columns: 1fr; gap: 20px; }
      footer { padding-bottom: 110px; }
      .accessibility-toolbar { width: 190px; bottom: 180px; left: 10px; padding: 15px 12px; }
      .accessibility-toolbar .btn-group { grid-template-columns: 1fr 1fr; gap: 4px; }
      .accessibility-toolbar button { font-size: 0.6rem; padding: 6px 4px; }
      .accessibility-toolbar-toggle { width: 46px; height: 46px; font-size: 1.2rem; bottom: 70px; left: 10px; }
    }
    @media (max-width: 600px) { .sitemap-category { padding: 18px; } }
  </style>
</head>
<body>

  <!-- ===== TOP BAR ===== -->
  <div class="top-bar">
    <div class="container top-container">
      <div class="top-contact-info">
        <span><i class="fas fa-phone"></i> (51) 3450-2229 <span class="obs-tel">(Somente WhatsApp)</span></span>
        <span><i class="fas fa-location-dot"></i> Sapucaia do Sul - RS</span>
      </div>
      <div class="top-socials">
        <a href="https://www.instagram.com/adv.veracatarina/" target="_blank" rel="noopener" title="Instagram"><i class="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/AdvocaciaVeraCatarina" target="_blank" rel="noopener" title="Facebook"><i class="fab fa-facebook"></i></a>
        <a href="https://advocaciasapucaia.blogspot.com/" target="_blank" rel="noopener" title="Blogger Institucional"><i class="fab fa-blogger"></i></a>
        <a href="https://api.whatsapp.com/send?phone=555134502229" target="_blank" rel="noopener" title="Atendimento WhatsApp"><i class="fab fa-whatsapp"></i></a>
      </div>
    </div>
  </div>

  <!-- ===== WHATSAPP FLUTUANTE ===== -->
  <a href="https://api.whatsapp.com/send?phone=555134502229&text=Ol%C3%A1%2C%20vim%20pelo%20mapa%20do%20site." class="btn-emergency-float" target="_blank" rel="noopener">
    <i class="fab fa-whatsapp"></i> Fale Conosco
  </a>

  <!-- ===== HEADER ===== -->
  <header>
    <div class="container nav-container">
      <a href="index.html" class="logo">
        <span class="main-txt">Vera Catarina</span>
        <span class="sub-txt">Advocacia Especializada</span>
      </a>
      <input type="checkbox" id="menu-checkbox">
      <label for="menu-checkbox" class="menu-toggle" aria-label="Abrir menu de navegação">
        <span></span><span></span><span></span>
      </label>

      <ul class="nav-menu">
        <li><a href="index.html">Início</a></li>
        <li><a href="index.html#atuacao">Áreas de Atuação</a></li>
        <li><a href="noticias.html">Notícias</a></li>
        <li><a href="contato.html">Contato</a></li>
        <li class="dropdown" onmouseenter="openDropdown()" onmouseleave="closeDropdown()">
          <a href="javascript:void(0)" onclick="toggleDropdown()" class="dropbtn">
            Mais <i class="fas fa-chevron-down" style="font-size:0.5rem; margin-left:4px;"></i>
          </a>
          <ul class="dropdown-content">
            <li><a href="index.html#servicos">Utilidades</a></li>
            <li><a href="index.html#restrito">Canal Restrito</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="legal.html">Legal &amp; Suporte</a></li>
            <li><a href="sitemap.html" class="ativo">🗺️ Mapa</a></li>
            <li><a href="acessibilidade.html">♿ Acessibilidade</a></li>
          </ul>
        </li>
        <li>
          <a href="https://api.whatsapp.com/send?phone=555134502229&text=URGENTE%20-%20Plant%C3%A3o%2024h" target="_blank" class="btn-emergency-nav">
            <i class="fas fa-shield-halved"></i> Plantão 24h
          </a>
        </li>
      </ul>
    </div>
  </header>

  <!-- ===== CONTEÚDO PRINCIPAL ===== -->
  <main id="main-content">
    <section class="page-hero">
      <div class="container">
        <h1>🗺️ Mapa do <span>Site</span></h1>
        <p>Encontre todas as páginas, áreas de atuação e conteúdos estratégicos do site da Dra. Vera Catarina em um só lugar.</p>
      </div>
    </section>

    <!-- ===== IMAGEM ILUSTRATIVA ===== -->
    <div style="text-align: center; padding: 30px 20px 10px; background: var(--bg-light);">
      <div style="max-width: 500px; margin: 0 auto;">
        <img
          src="https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/sitemap-mapa-site-advocacia.jpg"
          alt="Mapa do site - Advocacia Vera Catarina - Encontre todas as páginas e áreas de atuação"
          title="Mapa do Site | Advocacia Vera Catarina"
          loading="lazy"
          style="max-width: 500px; width: 100%; height: auto; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.08); display: block; margin: 0 auto;"
        />
        <p style="font-size: 0.85rem; color: var(--text-light); margin-top: 8px; font-style: italic;">
          <i class="fas fa-sitemap" style="color: var(--accent);"></i>
          Navegue por todas as páginas do site de forma organizada
        </p>
      </div>
    </div>

    <section class="content-section">
      <div class="container">

        <div class="sitemap-grid">

          <!-- ===== COLUNA 1 ===== -->
          <div>

            <!-- PÁGINAS PRINCIPAIS -->
            <div class="sitemap-category">
              <h3><i class="fas fa-home"></i> Páginas Principais</h3>
              <ul>
                <li><a href="index.html"><i class="fas fa-arrow-right"></i> Início <span class="desc">Página inicial com todas as áreas de atuação</span></a></li>
                <li><a href="sobre.html"><i class="fas fa-arrow-right"></i> Sobre a Dra. Vera Catarina <span class="desc">Biografia e trajetória profissional</span></a></li>
                <li><a href="contato.html"><i class="fas fa-arrow-right"></i> Contato <span class="desc">Formulário e canais de atendimento</span></a></li>
                <li><a href="legal.html"><i class="fas fa-arrow-right"></i> Legal &amp; Suporte <span class="desc">Políticas de privacidade, termos e cookies</span></a></li>
                <li><a href="noticias.html"><i class="fas fa-arrow-right"></i> Notícias e Artigos <span class="desc">Blog com conteúdo jurídico atualizado</span></a></li>
                <li><a href="blog.html"><i class="fas fa-arrow-right"></i> Blog (Redirecionamento) <span class="desc">Acesse o blog institucional no Blogger</span></a></li>
                <li><a href="depoimentos.html"><i class="fas fa-arrow-right"></i> Depoimentos <span class="desc">O que nossos clientes dizem</span></a></li>
                <li><a href="acessibilidade.html"><i class="fas fa-arrow-right"></i> Acessibilidade <span class="desc">Recursos para navegação inclusiva</span></a></li>
                <li><a href="sitemap.html"><i class="fas fa-arrow-right"></i> Mapa do Site <span class="desc">Você está aqui</span></a></li>
                <li><a href="404.html"><i class="fas fa-arrow-right"></i> Página 404 <span class="desc">Página de erro personalizada</span></a></li>
              </ul>
            </div>

            <!-- UTILIDADES E SERVIÇOS -->
            <div class="sitemap-category">
              <h3><i class="fas fa-tools"></i> Utilidades e Serviços</h3>
              <ul>
                <li><a href="area-restrita.html"><i class="fas fa-lock"></i> Área Restrita <span class="desc">Envio de documentos e contratos</span></a></li>
                <li><a href="acompanhar-processos.html"><i class="fas fa-search"></i> Acompanhar Processos <span class="desc">Links para sistemas judiciais</span></a></li>
                <li><a href="solicitar-andamento.html"><i class="fas fa-hourglass-half"></i> Solicitar Andamento <span class="desc">Atualização de processos</span></a></li>
                <li><a href="pesquisa.html"><i class="fas fa-search"></i> Busca no Site <span class="desc">Pesquise por conteúdo no portal</span></a></li>
                <li><a href="sites-uteis.html"><i class="fas fa-link"></i> Índice de Links Jurídicos <span class="desc">Tribunais, legislação e ferramentas</span></a></li>
                <li><a href="advogado-online.html"><i class="fas fa-headset"></i> Advogado Online 24h <span class="desc">Atendimento jurídico imediato pelo WhatsApp</span></a></li>
                <li><a href="arquivo.html"><i class="fas fa-archive"></i> Arquivo <span class="desc">Conteúdos arquivados do site</span></a></li>
              </ul>
            </div>

          </div>

          <!-- ===== COLUNA 2 ===== -->
          <div>

            <!-- ÁREAS DE ATUAÇÃO -->
            <div class="sitemap-category">
              <h3><i class="fas fa-gavel"></i> Áreas de Atuação</h3>
              <ul>
                <li><a href="direito-familia.html"><i class="fas fa-people-roof"></i> Direito de Família <span class="desc">Divórcio, guarda, pensão alimentícia, união estável</span></a></li>
                <li><a href="direito-digital.html"><i class="fas fa-laptop-code"></i> Direito Digital <span class="desc">Crimes virtuais, golpes financeiros, remoção de conteúdo</span></a></li>
                <li><a href="direito-criminal.html"><i class="fas fa-shield-halved"></i> Direito Criminal <span class="desc">Prisões, Habeas Corpus, tráfico de drogas, Lei Maria da Penha</span></a></li>
                <li><a href="direito-trabalhista.html"><i class="fas fa-briefcase"></i> Direito Trabalhista <span class="desc">Reversão de justa causa, assédio moral, verbas rescisórias</span></a></li>
                <li><a href="direito-previdenciario.html"><i class="fas fa-users-rays"></i> Direito Previdenciário <span class="desc">Aposentadorias, pensão por morte, LOAS/BPC</span></a></li>
                <li><a href="direito-consumidor.html"><i class="fas fa-scale-balanced"></i> Direito do Consumidor <span class="desc">Exclusão de SPC/SERASA, revisão de contratos bancários, juros abusivos</span></a></li>
                <li><a href="direito-civil.html"><i class="fas fa-gavel"></i> Direito Civil e Sucessões <span class="desc">Inventário, usucapião, contratos, responsabilidade civil</span></a></li>
                <li><a href="direito-empresarial.html"><i class="fas fa-handshake"></i> Advocacia Empresarial <span class="desc">Defesa trabalhista patronal, contratos, compliance</span></a></li>
              </ul>
            </div>

            <!-- CONTEÚDO ESTRATÉGICO -->
            <div class="sitemap-category" style="border-left-color: #25d366;">
              <h3><i class="fas fa-rocket"></i> Conteúdo Estratégico</h3>
              <ul>
                <li><a href="infancia-e-juventude.html"><i class="fas fa-shield-halved"></i> Infância e Juventude <span class="desc">ECA, ECA Digital, proteção de crianças e adolescentes</span></a></li>
                <li><a href="provas-digitais.html"><i class="fas fa-microchip"></i> Provas Digitais e Perícia Forense <span class="desc">Coleta, preservação e análise de evidências digitais</span></a></li>
                <li><a href="apoio-juridico-diligencias.html"><i class="fas fa-handshake"></i> Correspondente Jurídico <span class="desc">Diligências, audiências e perícia para outros advogados (B2B)</span></a></li>
                <li><a href="faq-juridico.html"><i class="fas fa-question-circle"></i> Perguntas Frequentes (FAQ) <span class="desc">Central de dúvidas sobre todas as áreas do Direito</span></a></li>
              </ul>
            </div>

          </div>

        </div>

        <!-- ===== NOTÍCIAS E ARTIGOS ===== -->
        <div style="margin-top: 50px;">
          <h2 style="font-size: 1.8rem; color: var(--primary-dark); margin-bottom: 25px; position: relative; padding-bottom: 10px;">
            📰 Notícias e Artigos
            <span style="position: absolute; bottom: 0; left: 0; width: 50px; height: 3px; background: var(--accent);"></span>
          </h2>

          <div class="sitemap-grid">
            <!-- ===== COLUNA 1 - Notícias A-M ===== -->
            <div>
              <div class="sitemap-category">
                <h3><i class="fas fa-newspaper"></i> Artigos A - M</h3>
                <ul>
                  <li><a href="/noticias/advogado-criminal-cachoeirinha.html"><i class="fas fa-arrow-right"></i> Advogado criminal em Cachoeirinha</a></li>
                  <li><a href="/noticias/advogado-criminal-canoas-prisao.html"><i class="fas fa-arrow-right"></i> Advogado criminal em Canoas</a></li>
                  <li><a href="/noticias/advogado-criminal-sao-leopoldo.html"><i class="fas fa-arrow-right"></i> Advogado criminal em São Leopoldo</a></li>
                  <li><a href="/noticias/aposentadoria-gravatai.html"><i class="fas fa-arrow-right"></i> Aposentadoria em Gravataí</a></li>
                  <li><a href="/noticias/aposentadoria-sao-leopoldo.html"><i class="fas fa-arrow-right"></i> Aposentadoria em São Leopoldo</a></li>
                  <li><a href="/noticias/aposentadoria-tempo-contribuicao-guia.html"><i class="fas fa-arrow-right"></i> Aposentadoria por tempo de contribuição</a></li>
                  <li><a href="/noticias/assedio-moral-canoas.html"><i class="fas fa-arrow-right"></i> Assédio moral em Canoas</a></li>
                  <li><a href="/noticias/assedio-moral-sao-leopoldo.html"><i class="fas fa-arrow-right"></i> Assédio moral em São Leopoldo</a></li>
                  <li><a href="/noticias/assedio-moral-trabalho-provar.html"><i class="fas fa-arrow-right"></i> Assédio moral no trabalho</a></li>
                  <li><a href="/noticias/atendimento-24h-urgente-criancas.html"><i class="fas fa-arrow-right"></i> Atendimento 24h - crianças</a></li>
                  <li><a href="/noticias/como-pedir-pensao-alimenticia.html"><i class="fas fa-arrow-right"></i> Como pedir pensão alimentícia</a></li>
                  <li><a href="/noticias/crimes-contra-criancas-adolescentes.html"><i class="fas fa-arrow-right"></i> Crimes contra crianças e adolescentes</a></li>
                  <li><a href="/noticias/crimes-virtuais-calunia-difamacao-injuria.html"><i class="fas fa-arrow-right"></i> Crimes virtuais - calúnia, difamação, injúria</a></li>
                  <li><a href="/noticias/cyberbullying-infantil-o-que-fazer-sapucaia.html"><i class="fas fa-arrow-right"></i> Cyberbullying infantil</a></li>
                  <li><a href="/noticias/direito-ao-esquecimento-case-academico-premiado.html"><i class="fas fa-arrow-right"></i> Direito ao esquecimento</a></li>
                  <li><a href="/noticias/direitos-trabalhador-esteio.html"><i class="fas fa-arrow-right"></i> Direitos do trabalhador em Esteio</a></li>
                  <li><a href="/noticias/divida-indevida-canoas.html"><i class="fas fa-arrow-right"></i> Dívida indevida em Canoas</a></li>
                  <li><a href="/noticias/divorcio-consensual-sao-leopoldo.html"><i class="fas fa-arrow-right"></i> Divórcio consensual em São Leopoldo</a></li>
                  <li><a href="/noticias/eca-digital-crimes-virtuais-protecao.html"><i class="fas fa-arrow-right"></i> ECA Digital</a></li>
                  <li><a href="/noticias/eca-direitos-basicos-protecao.html"><i class="fas fa-arrow-right"></i> ECA - direitos básicos</a></li>
                  <li><a href="/noticias/eca-relacoes-familiares-guarda-pensao.html"><i class="fas fa-arrow-right"></i> ECA - relações familiares</a></li>
                  <li><a href="/noticias/erro-medico-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Erro médico em Sapucaia do Sul</a></li>
                  <li><a href="/noticias/execucao-de-alimentos-defesa.html"><i class="fas fa-arrow-right"></i> Execução de alimentos - defesa</a></li>
                  <li><a href="/noticias/execucao-de-alimentos-guia-credor.html"><i class="fas fa-arrow-right"></i> Execução de alimentos - credor</a></li>
                </ul>
              </div>
            </div>

            <!-- ===== COLUNA 2 - Notícias N-Z ===== -->
            <div>
              <div class="sitemap-category">
                <h3><i class="fas fa-newspaper"></i> Artigos N - Z</h3>
                <ul>
                  <li><a href="/noticias/feliz-aniversario-dra-vera-catarina.html"><i class="fas fa-arrow-right"></i> Feliz Aniversário Dra. Vera</a></li>
                  <li><a href="/noticias/fraudes-bancarias-indenizacao.html"><i class="fas fa-arrow-right"></i> Fraudes bancárias - indenização</a></li>
                  <li><a href="/noticias/fraudes-bancarias-online-indenizacao.html"><i class="fas fa-arrow-right"></i> Fraudes bancárias online</a></li>
                  <li><a href="/noticias/fraudes-bancarias-porto-alegre.html"><i class="fas fa-arrow-right"></i> Fraudes bancárias em Porto Alegre</a></li>
                  <li><a href="/noticias/golpe-do-pix-como-recuperar-dinheiro.html"><i class="fas fa-arrow-right"></i> Golpe do PIX - como recuperar</a></li>
                  <li><a href="/noticias/golpe-do-pix-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Golpe do PIX em Sapucaia do Sul</a></li>
                  <li><a href="/noticias/guarda-compartilhada-direitos.html"><i class="fas fa-arrow-right"></i> Guarda compartilhada - direitos</a></li>
                  <li><a href="/noticias/guarda-compartilhada-esteio.html"><i class="fas fa-arrow-right"></i> Guarda compartilhada em Esteio</a></li>
                  <li><a href="/noticias/guarda-dos-filhos-gravatai.html"><i class="fas fa-arrow-right"></i> Guarda dos filhos em Gravataí</a></li>
                  <li><a href="/noticias/inventario-cachoeirinha.html"><i class="fas fa-arrow-right"></i> Inventário em Cachoeirinha</a></li>
                  <li><a href="/noticias/inventario-esteio.html"><i class="fas fa-arrow-right"></i> Inventário em Esteio</a></li>
                  <li><a href="/noticias/lgpd-eca-digital-privacidade.html"><i class="fas fa-arrow-right"></i> LGPD e ECA Digital</a></li>
                  <li><a href="/noticias/lgpd-entenda-lei-geral-protecao-dados.html"><i class="fas fa-arrow-right"></i> LGPD - Lei Geral de Proteção de Dados</a></li>
                  <li><a href="/noticias/limpar-nome-gravatai.html"><i class="fas fa-arrow-right"></i> Limpar nome em Gravataí</a></li>
                  <li><a href="/noticias/limpar-nome-sao-leopoldo.html"><i class="fas fa-arrow-right"></i> Limpar nome em São Leopoldo</a></li>
                  <li><a href="/noticias/limpar-nome-spc-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Limpar nome em Sapucaia do Sul</a></li>
                  <li><a href="/noticias/limpar-nome-spc-serasa-guia.html"><i class="fas fa-arrow-right"></i> Limpar nome no SPC/SERASA</a></li>
                  <li><a href="/noticias/marco-civil-internet-direitos-digitais.html"><i class="fas fa-arrow-right"></i> Marco Civil da Internet</a></li>
                  <li><a href="/noticias/marco-legal-primeira-infancia.html"><i class="fas fa-arrow-right"></i> Marco Legal da Primeira Infância</a></li>
                  <li><a href="/noticias/pensao-alimenticia-canoas.html"><i class="fas fa-arrow-right"></i> Pensão alimentícia em Canoas</a></li>
                  <li><a href="/noticias/pensao-alimenticia-esteio.html"><i class="fas fa-arrow-right"></i> Pensão alimentícia em Esteio</a></li>
                  <li><a href="/noticias/perseguicao-digital-stalking-prova-pericial.html"><i class="fas fa-arrow-right"></i> Perseguição digital - stalking</a></li>
                  <li><a href="/noticias/protecao-integral-eca-eca-digital.html"><i class="fas fa-arrow-right"></i> Proteção integral - ECA</a></li>
                  <li><a href="/noticias/provas-digitais-como-coletar.html"><i class="fas fa-arrow-right"></i> Provas digitais - como coletar</a></li>
                  <li><a href="/noticias/recuperar-dinheiro-golpe-pix-canoas.html"><i class="fas fa-arrow-right"></i> Recuperar dinheiro golpe PIX em Canoas</a></li>
                  <li><a href="/noticias/revisao-aposentadoria-porto-alegre.html"><i class="fas fa-arrow-right"></i> Revisão de aposentadoria em Porto Alegre</a></li>
                  <li><a href="/noticias/site-agora-acessivel.html"><i class="fas fa-arrow-right"></i> Site agora acessível</a></li>
                  <li><a href="/noticias/site-lgpd-acessibilidade-oab.html"><i class="fas fa-arrow-right"></i> Site LGPD, Acessibilidade e OAB</a></li>
                  <li><a href="/noticias/usucapiao-cachoeirinha.html"><i class="fas fa-arrow-right"></i> Usucapião em Cachoeirinha</a></li>
                  <li><a href="/noticias/vazamento-dados-indenizacao.html"><i class="fas fa-arrow-right"></i> Vazamento de dados - indenização</a></li>
                  <li><a href="/noticias/whatsapp-hackeado-como-agir.html"><i class="fas fa-arrow-right"></i> WhatsApp hackeado - como agir</a></li>
                  <li><a href="/noticias/whatsapp-hackeado-canoas.html"><i class="fas fa-arrow-right"></i> WhatsApp hackeado em Canoas</a></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- ===== NOVAS POSTAGENS - INCLUSÃO E DEFICIÊNCIA ===== -->
          <div style="margin-top: 40px;">
            <h3 style="font-size: 1.4rem; color: var(--primary-dark); margin-bottom: 20px; position: relative; padding-bottom: 10px;">
              ♿ Inclusão e Deficiência - Novos Artigos
              <span style="position: absolute; bottom: 0; left: 0; width: 50px; height: 3px; background: var(--accent);"></span>
            </h3>
            <div class="sitemap-grid">
              <div>
                <div class="sitemap-category" style="border-left-color: #f59e0b;">
                  <ul>
                    <li><a href="/noticias/semana-nacional-pessoa-deficiencia-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Semana Nacional da Pessoa com Deficiência</a></li>
                    <li><a href="/noticias/loas-bpc-guia-completo-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> LOAS/BPC - Guia completo em Sapucaia do Sul</a></li>
                    <li><a href="/noticias/capacitismo-o-que-e-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> O que é capacitismo?</a></li>
                    <li><a href="/noticias/dia-nacional-luta-pessoas-deficiencia-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional de Luta das Pessoas com Deficiência</a></li>
                    <li><a href="/noticias/dia-nacional-surdo-libras-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional do Surdo e Libras</a></li>
                    <li><a href="/noticias/dia-deficiencia-fisica-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional da Pessoa com Deficiência Física</a></li>
                  </ul>
                </div>
              </div>
              <div>
                <div class="sitemap-category" style="border-left-color: #f59e0b;">
                  <ul>
                    <li><a href="/noticias/dia-internacional-pessoa-deficiencia-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Internacional da Pessoa com Deficiência</a></li>
                    <li><a href="/noticias/dia-deficiencia-visual-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional da Pessoa com Deficiência Visual</a></li>
                    <li><a href="/noticias/dia-sindrome-down-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Internacional da Síndrome de Down</a></li>
                    <li><a href="/noticias/dia-autismo-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Mundial de Conscientização do Autismo</a></li>
                    <li><a href="/noticias/dia-deficiencia-intelectual-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional da Deficiência Intelectual</a></li>
                    <li><a href="/noticias/dia-nacional-libras-sapucaia-do-sul.html"><i class="fas fa-arrow-right"></i> Dia Nacional da Libras</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ===== CTA ===== -->
        <div class="cta-box">
          <h3>Precisa de orientação jurídica?</h3>
          <p>Conte com a experiência de 40 anos da Dra. Vera Catarina para proteger seus direitos.</p>
          <a href="https://api.whatsapp.com/send?phone=555134502229&text=Ol%C3%A1%20Dra.%20Vera%2C%20vim%20pelo%20mapa%20do%20site%20e%20gostaria%20de%20uma%20orienta%C3%A7%C3%A3o." class="btn-cta" target="_blank">
            <i class="fab fa-whatsapp"></i> Fale agora no WhatsApp
          </a>
        </div>

      </div>
    </section>
  </main>

  <!-- ===== FOOTER ===== -->
  <footer>
    <div class="container">
      <div class="footer-grid">
        <div class="footer-col">
          <h5>Dra. Vera Catarina</h5>
          <p style="font-size: 0.85rem; max-width:320px; color:#94a3b8;">Defesa técnica especializada e representação corporativa rigorosa em Sapucaia do Sul e região metropolitana.</p>
          <p style="font-size: 0.8rem; color: var(--accent); font-weight: 600; margin-top: 8px;">OAB/RS 19.315</p>
        </div>
        <div class="footer-col">
          <h5>Links Rápidos</h5>
          <ul>
            <li><a href="index.html">Início</a></li>
            <li><a href="index.html#atuacao">Áreas de Atuação</a></li>
            <li><a href="noticias.html">📰 Notícias e Artigos</a></li>
            <li><a href="sobre.html">Sobre</a></li>
            <li><a href="legal.html">Legal</a></li>
            <li><a href="sitemap.html">🗺️ Mapa do Site</a></li>
            <li><a href="acessibilidade.html">♿ Acessibilidade</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h5>Áreas Específicas</h5>
          <ul>
            <li><a href="direito-familia.html">Direito de Família</a></li>
            <li><a href="direito-digital.html">Direito Digital</a></li>
            <li><a href="direito-criminal.html">Direito Criminal</a></li>
            <li><a href="direito-trabalhista.html">Direito Trabalhista</a></li>
            <li><a href="direito-previdenciario.html">Direito Previdenciário</a></li>
            <li><a href="direito-consumidor.html">Direito do Consumidor</a></li>
            <li><a href="direito-civil.html">Direito Civil e Sucessões</a></li>
            <li><a href="direito-empresarial.html">🏢 Advocacia Empresarial</a></li>
            <li><a href="advogado-online.html">📱 Advogado Online 24h</a></li>
            <li><a href="infancia-e-juventude.html">👶 Infância e Juventude</a></li>
            <li><a href="provas-digitais.html">💻 Provas Digitais</a></li>
            <li><a href="apoio-juridico-diligencias.html">📌 Correspondente Jurídico</a></li>
            <li><a href="faq-juridico.html">❓ FAQ Jurídico</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p style="margin-bottom:12px;">&copy; 2026 Advocacia Vera Catarina. Todos os direitos reservados. | Desenvolvido em conformidade técnica de SEO, LGPD e Acessibilidade.</p>
        <p style="font-size:0.75rem; color:#94a3b8; display:flex; justify-content:center; align-items:center; gap:8px; flex-wrap:wrap; margin-top:10px;">
          <span>⚡ Design & Desenvolvimento:</span>
          <a href="https://fabiowlademir.github.io/" target="_blank" rel="noopener" style="color:var(--accent); text-decoration:none; font-weight:600;">💻 Fábio Wlademir</a>
          <span style="color:rgba(255,255,255,0.2);">·</span>
          <a href="https://www.linkedin.com/in/fabiowlademir" target="_blank" rel="noopener" style="color:#cbd5e1; text-decoration:none;"><i class="fab fa-linkedin"></i> LinkedIn</a>
          <span style="color:rgba(255,255,255,0.2);">·</span>
          <a href="https://www.instagram.com/fabiowlademir" target="_blank" rel="noopener" style="color:#cbd5e1; text-decoration:none;"><i class="fab fa-instagram"></i> Instagram</a>
        </p>
        <div>
          <div class="visitor-counter" title="Total de visualizações de página">
            <i class="fas fa-eye"></i>
            <span>Visitas ao portal:</span>
            <img src="https://hits.dwyl.com/veracatarina/veracatarina.github.io.svg" alt="Contador de Acessos">
          </div>
        </div>
      </div>
    </div>
  </footer>

  <!-- ===== BANNER LGPD ===== -->
  <div id="cookie-consent-banner" style="position:fixed; bottom:20px; left:50%; transform:translateX(-50%); width:90%; max-width:900px; background:rgba(11,37,30,0.95); backdrop-filter:blur(10px); padding:18px 25px; border-radius:12px; box-shadow:0 8px 40px rgba(0,0,0,0.6); border:1px solid var(--accent,#c5a880); z-index:9999; display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:15px; font-family:'Inter',sans-serif; transition:opacity 0.4s ease, transform 0.4s ease;">
    <div style="flex:1 1 100%; text-align:center; color:#e2e8f0; font-size:0.9rem; line-height:1.5;">
      <i class="fas fa-shield-alt" style="color:var(--accent,#c5a880); margin-right:8px; font-size:1.1rem;"></i>
      <span style="font-weight:300;">Utilizamos cookies essenciais e, com seu consentimento, cookies de análise para melhorar sua experiência. <a href="legal.html#privacidade" style="color:var(--accent,#c5a880); text-decoration:underline; font-weight:500;">Política de Privacidade</a><span style="color:#94a3b8; margin:0 6px;">|</span><a href="legal.html#cookies" style="color:#cbd5e1; text-decoration:underline;">Configurar</a></span>
    </div>
    <div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center;">
      <button onclick="rejectCookies()" style="background:transparent; color:#cbd5e1; border:1px solid #64748b; padding:8px 20px; border-radius:6px; font-weight:600; font-size:0.85rem; cursor:pointer; transition:background 0.2s, border-color 0.2s;">Recusar</button>
      <button onclick="acceptCookies()" style="background:var(--accent,#c5a880); color:var(--primary-dark,#0b251e); border:none; padding:8px 28px; border-radius:6px; font-weight:700; font-size:0.85rem; cursor:pointer; transition:background 0.2s;">Aceitar</button>
    </div>
  </div>

  <!-- ===== VLIBRAS ===== -->
  <div vw class="enabled">
    <div vw-access-button class="active"></div>
    <div vw-plugin-wrapper>
      <div class="vw-plugin-top-wrapper"></div>
    </div>
  </div>
  <script src="https://vlibras.gov.br/app/vlibras-plugin.js"></script>
  <script>new window.VLibras.Widget('https://vlibras.gov.br/app');</script>

  <!-- ===== ACESSIBILIDADE JS ===== -->
  <script src="/acessibilidade.js"></script>

  <!-- ===== TOOLBAR DE ACESSIBILIDADE ===== -->
  <button class="accessibility-toolbar-toggle" onclick="toggleAccessibilityToolbar()" aria-label="Abrir ferramentas de acessibilidade">♿</button>
  <div class="accessibility-toolbar" id="accessibilityToolbar">
    <div class="toolbar-title">Acessibilidade</div>
    <div class="btn-group">
      <button onclick="toggleDarkMode()" id="darkModeBtn">🌙 Escuro</button>
      <button onclick="toggleHighContrast()" id="highContrastBtn">🔲 Contraste</button>
      <button onclick="changeFontSize('decrease')">A-</button>
      <button onclick="changeFontSize('reset')">A</button>
      <button onclick="changeFontSize('increase')">A+</button>
      <button onclick="changeFontSize('xincrease')">A++</button>
      <button onclick="toggleDyslexicFont()" id="dyslexicBtn">📖 Dislexia</button>
      <button onclick="toggleReducedMotion()" id="motionBtn">🎬 Reduzir</button>
    </div>
  </div>

  <!-- ===== BOTÃO DE LEITURA POR ÁUDIO (TTS) ===== -->
  <div style="position: fixed; bottom: 160px; left: 20px; z-index: 9998;">
    <button id="audio-reader-btn" onclick="readPageAloud()" style="
      background: var(--accent, #c5a880);
      color: var(--primary-dark, #0b251e);
      border: none;
      border-radius: 50px;
      padding: 10px 18px;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 8px;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      <i class="fas fa-volume-up"></i> Ouvir Página
    </button>
    <button id="audio-stop-btn" onclick="stopReading()" style="
      background: var(--danger, #991b1b);
      color: white;
      border: none;
      border-radius: 50px;
      padding: 10px 18px;
      font-weight: 700;
      font-size: 0.8rem;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(0,0,0,0.15);
      transition: all 0.2s;
      display: none;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      <i class="fas fa-stop"></i> Parar
    </button>
  </div>

  <!-- ===== SCRIPTS ===== -->
  <script>
    // ===== DROPDOWN (MOBILE) =====
    function toggleDropdown() {
      const dropdown = document.querySelector('.dropdown');
      if (window.innerWidth <= 992) {
        dropdown.classList.toggle('open');
      }
    }
    function openDropdown() {
      if (window.innerWidth > 992) {
        document.querySelector('.dropdown-content').style.display = 'block';
      }
    }
    function closeDropdown() {
      if (window.innerWidth > 992) {
        document.querySelector('.dropdown-content').style.display = 'none';
      }
    }
    document.addEventListener('click', function(e) {
      const dropdown = document.querySelector('.dropdown');
      if (dropdown && !dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
      }
    });

    // ===== LGPD COOKIES =====
    function setCookieConsent(choice) {
      localStorage.setItem('cookieConsent', choice);
      const banner = document.getElementById('cookie-consent-banner');
      banner.style.opacity = '0';
      banner.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(() => { banner.style.display = 'none'; }, 500);
    }
    function acceptCookies() {
      setCookieConsent('accepted');
      console.log('📊 Cookies de análise ativados.');
    }
    function rejectCookies() {
      setCookieConsent('rejected');
      console.log('❌ Cookies de análise recusados.');
    }
    document.addEventListener('DOMContentLoaded', function() {
      const consent = localStorage.getItem('cookieConsent');
      if (consent === 'accepted' || consent === 'rejected') {
        document.getElementById('cookie-consent-banner').style.display = 'none';
      }
    });

    // ===== FECHAR MENU MOBILE =====
    function closeMenu() {
      document.getElementById('menu-checkbox').checked = false;
    }
    document.querySelectorAll('.nav-menu a').forEach(function(link) {
      link.addEventListener('click', closeMenu);
    });

    // ===== ARIA EXPANDED =====
    const menuToggle = document.querySelector('.menu-toggle');
    const menuCheckbox = document.getElementById('menu-checkbox');
    if (menuToggle && menuCheckbox) {
      menuCheckbox.addEventListener('change', function() {
        menuToggle.setAttribute('aria-expanded', this.checked ? 'true' : 'false');
      });
    }

    // ===== TOOLBAR DE ACESSIBILIDADE =====
    function toggleAccessibilityToolbar() {
      document.getElementById('accessibilityToolbar').classList.toggle('open');
    }

    function toggleDarkMode() {
      document.documentElement.classList.toggle('dark-mode');
      document.getElementById('darkModeBtn').classList.toggle('active');
      localStorage.setItem('darkMode', document.documentElement.classList.contains('dark-mode') ? 'true' : 'false');
    }

    function toggleHighContrast() {
      document.documentElement.classList.toggle('high-contrast');
      document.getElementById('highContrastBtn').classList.toggle('active');
      localStorage.setItem('highContrast', document.documentElement.classList.contains('high-contrast') ? 'true' : 'false');
    }

    function changeFontSize(action) {
      const sizes = ['font-small', 'font-medium', 'font-large', 'font-xlarge'];
      const current = sizes.find(cls => document.documentElement.classList.contains(cls)) || 'font-medium';
      let index = sizes.indexOf(current);
      if (action === 'decrease') index = Math.max(0, index - 1);
      else if (action === 'increase') index = Math.min(sizes.length - 1, index + 1);
      else if (action === 'xincrease') index = Math.min(sizes.length - 1, index + 2);
      else if (action === 'reset') index = 1;
      document.documentElement.classList.remove(...sizes);
      document.documentElement.classList.add(sizes[index]);
      localStorage.setItem('fontSize', sizes[index]);
    }

    function toggleDyslexicFont() {
      document.documentElement.classList.toggle('dyslexic-font');
      document.getElementById('dyslexicBtn').classList.toggle('active');
      localStorage.setItem('dyslexicFont', document.documentElement.classList.contains('dyslexic-font') ? 'true' : 'false');
    }

    function toggleReducedMotion() {
      document.documentElement.classList.toggle('reduce-motion');
      document.getElementById('motionBtn').classList.toggle('active');
      localStorage.setItem('reduceMotion', document.documentElement.classList.contains('reduce-motion') ? 'true' : 'false');
    }

    // Carregar preferências salvas
    document.addEventListener('DOMContentLoaded', function() {
      if (localStorage.getItem('darkMode') === 'true') {
        document.documentElement.classList.add('dark-mode');
        document.getElementById('darkModeBtn').classList.add('active');
      }
      if (localStorage.getItem('highContrast') === 'true') {
        document.documentElement.classList.add('high-contrast');
        document.getElementById('highContrastBtn').classList.add('active');
      }
      const fontSize = localStorage.getItem('fontSize');
      if (fontSize) {
        document.documentElement.classList.add(fontSize);
      } else {
        document.documentElement.classList.add('font-medium');
      }
      if (localStorage.getItem('dyslexicFont') === 'true') {
        document.documentElement.classList.add('dyslexic-font');
        document.getElementById('dyslexicBtn').classList.add('active');
      }
      if (localStorage.getItem('reduceMotion') === 'true') {
        document.documentElement.classList.add('reduce-motion');
        document.getElementById('motionBtn').classList.add('active');
      }
    });

    // ===== LEITURA POR ÁUDIO (TTS) =====
    let currentUtterance = null;
    let isReading = false;

    function readPageAloud() {
      if (isReading) {
        stopReading();
        setTimeout(() => { readPageAloud(); }, 300);
        return;
      }

      const mainContent = document.querySelector('main') || document.querySelector('.content-section') || document.body;
      const clone = mainContent.cloneNode(true);
      const removeSelectors = ['nav', 'footer', '.nav-menu', '.top-bar', '.footer-grid', '.visitor-counter', '.backlinks-section', '#cookie-consent-banner'];
      removeSelectors.forEach(selector => {
        const elements = clone.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });

      let text = clone.textContent || '';
      text = text.replace(/\s+/g, ' ').trim();

      if (!text || text.length < 10) {
        alert('Não há conteúdo suficiente para leitura nesta página.');
        return;
      }

      currentUtterance = new SpeechSynthesisUtterance(text);
      currentUtterance.lang = 'pt-BR';
      currentUtterance.rate = 0.9;
      currentUtterance.pitch = 1.0;
      currentUtterance.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const ptVoice = voices.find(v => v.lang === 'pt-BR' && v.name.includes('Female')) ||
                      voices.find(v => v.lang === 'pt-BR') ||
                      voices.find(v => v.lang.startsWith('pt'));
      if (ptVoice) {
        currentUtterance.voice = ptVoice;
      }

      currentUtterance.onstart = function() {
        isReading = true;
        document.getElementById('audio-reader-btn').innerHTML = '<i class="fas fa-pause"></i> Pausar';
        document.getElementById('audio-reader-btn').style.background = '#f59e0b';
        document.getElementById('audio-stop-btn').style.display = 'flex';
      };

      currentUtterance.onend = function() {
        isReading = false;
        document.getElementById('audio-reader-btn').innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página';
        document.getElementById('audio-reader-btn').style.background = 'var(--accent, #c5a880)';
        document.getElementById('audio-stop-btn').style.display = 'none';
      };

      currentUtterance.onerror = function() {
        isReading = false;
        document.getElementById('audio-reader-btn').innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página';
        document.getElementById('audio-reader-btn').style.background = 'var(--accent, #c5a880)';
        document.getElementById('audio-stop-btn').style.display = 'none';
        console.warn('Erro na leitura de áudio.');
      };

      window.speechSynthesis.speak(currentUtterance);
    }

    function stopReading() {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      isReading = false;
      document.getElementById('audio-reader-btn').innerHTML = '<i class="fas fa-volume-up"></i> Ouvir Página';
      document.getElementById('audio-reader-btn').style.background = 'var(--accent, #c5a880)';
      document.getElementById('audio-stop-btn').style.display = 'none';
    }

    if (window.speechSynthesis) {
      window.speechSynthesis.getVoices();
      window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
      };
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isReading) {
        stopReading();
      }
    });
  </script>
</body>
</html>
