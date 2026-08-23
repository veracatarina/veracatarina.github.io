// ==========================================================
//  BOTÕES DE COMPARTILHAMENTO - GLOBAL
//  Carregado em todas as páginas do site
// ==========================================================

// ===== DADOS DA PÁGINA =====
function getShareData() {
  const title = document.querySelector('h1')?.textContent?.trim() || document.title || 'Artigo';
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const url = window.location.href;
  const image = document.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
  return { title, description, url, image };
}

function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// ===== HASHTAGS POR TEMA =====
function getHashtags() {
  const pageTitle = document.title || '';
  let hashtags = '#AdvocaciaVeraCatarina #SapucaiaDoSul #Direito';

  if (pageTitle.includes('Deficiência') || pageTitle.includes('Inclusão') || pageTitle.includes('PCD')) {
    hashtags += ' #Inclusão #PCD #LBI #Acessibilidade #DireitosHumanos';
  } else if (pageTitle.includes('Família') || pageTitle.includes('Guarda') || pageTitle.includes('Pensão')) {
    hashtags += ' #DireitoDeFamília #GuardaCompartilhada #PensãoAlimentícia';
  } else if (pageTitle.includes('Digital') || pageTitle.includes('LGPD') || pageTitle.includes('Provas')) {
    hashtags += ' #DireitoDigital #LGPD #ProvasDigitais';
  } else if (pageTitle.includes('Consumidor') || pageTitle.includes('SPC') || pageTitle.includes('SERASA')) {
    hashtags += ' #DireitoDoConsumidor #SPC #SERASA';
  } else if (pageTitle.includes('Criminal') || pageTitle.includes('Prisão') || pageTitle.includes('Habeas')) {
    hashtags += ' #DireitoCriminal #HabeasCorpus #DefesaCriminal';
  } else if (pageTitle.includes('Trabalhista') || pageTitle.includes('Assédio') || pageTitle.includes('Rescisão')) {
    hashtags += ' #DireitoTrabalhista #AssédioMoral #Rescisão';
  } else if (pageTitle.includes('Inventário') || pageTitle.includes('Usucapião') || pageTitle.includes('Civil')) {
    hashtags += ' #DireitoCivil #Inventário #Usucapião';
  } else if (pageTitle.includes('Empresarial') || pageTitle.includes('Contrato')) {
    hashtags += ' #DireitoEmpresarial #Contratos #Compliance';
  }

  return hashtags;
}

// ===== COMPARTILHAMENTO NAS REDES =====
function shareOnWhatsApp() {
  const { title, description, url } = getShareData();
  const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 ${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
}

function shareOnFacebook() {
  const { url } = getShareData();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
}

function shareOnLinkedIn() {
  const { url } = getShareData();
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
}

function shareOnTwitter() {
  const { title, url } = getShareData();
  const text = `📢 ${truncateText(title, 60)}\n\n🔗 ${url}\n\n#Advocacia #Direito #SapucaiaDoSul`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
}

function shareOnTelegram() {
  const { title, description, url } = getShareData();
  const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n🔗 ${url}`;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
}

function shareOnEmail() {
  const { title, description, url } = getShareData();
  window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(title + '\n\n' + truncateText(description, 200) + '\n\n🔗 ' + url)}`;
}

// ===== COPIAR LINK =====
function copyLink() {
  const url = window.location.href;
  const btn = document.getElementById('copyLinkBtn');
  if (!btn) return;

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => showCopiedFeedback(btn)).catch(() => fallbackCopy(url, btn));
  } else {
    fallbackCopy(url, btn);
  }
}

function fallbackCopy(text, btn) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopiedFeedback(btn);
  } catch (err) {
    alert('Não foi possível copiar o link. Copie manualmente: ' + text);
  }
  document.body.removeChild(textarea);
}

function showCopiedFeedback(btn) {
  const icon = btn.querySelector('i');
  const originalIcon = icon?.className || 'fas fa-link';
  btn.classList.add('copied');
  if (icon) icon.className = 'fas fa-check';
  const tooltip = btn.querySelector('.tooltip');
  if (tooltip) tooltip.textContent = 'Copiado!';

  setTimeout(() => {
    btn.classList.remove('copied');
    if (icon) icon.className = originalIcon;
    if (tooltip) tooltip.textContent = 'Copiar Link';
  }, 2000);
}

// ===== INSTAGRAM =====
function copyInstagramFeed() {
  const { title, description, url } = getShareData();
  const hashtags = getHashtags();
  const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 Acesse o conteúdo completo no link da bio ou no site.\n\n👩‍⚖️ Dra. Vera Catarina | OAB/RS 19.315\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}\n\n@adv.veracatarina`;
  const btn = document.querySelector('.share-btn-instagram-feed');
  copyToClipboard(text, btn, '📋 Texto copiado para o Feed!');
}

function shareInstagramStory() {
  const { title, description, url } = getShareData();
  const hashtags = getHashtags();
  const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n👆 Clique no link para ler o artigo completo!\n\n👩‍⚖️ @adv.veracatarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}`;
  const btn = document.querySelector('.share-btn-instagram-story');
  copyToClipboard(text, btn, '📋 Texto copiado para o Story!');
}

function copyInstagramBio() {
  const { title, url } = getShareData();
  const text = `📢 ${title}\n\n🔗 ${url}\n\n👩‍⚖️ Dra. Vera Catarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n#AdvocaciaVeraCatarina`;
  const btn = document.querySelector('.share-btn-instagram-bio');
  copyToClipboard(text, btn, '📋 Link copiado para a Bio!');
}

// ===== FUNÇÃO AUXILIAR PARA COPIAR =====
function copyToClipboard(text, btn, successMessage) {
  const tooltip = btn?.querySelector('.tooltip');
  const originalText = tooltip?.textContent || '';

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopyFeedback(btn, successMessage, originalText);
    }).catch(() => {
      fallbackCopyText(text, btn, successMessage, originalText);
    });
  } else {
    fallbackCopyText(text, btn, successMessage, originalText);
  }
}

function fallbackCopyText(text, btn, successMessage, originalText) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyFeedback(btn, successMessage, originalText);
  } catch (err) {
    alert('📋 Copie o texto abaixo:\n\n' + text);
  }
  document.body.removeChild(textarea);
}

function showCopyFeedback(btn, message, originalText) {
  if (!btn) return;
  const tooltip = btn.querySelector('.tooltip');
  const original = tooltip?.textContent || originalText || 'Copiar';
  btn.classList.add('copied');
  if (tooltip) tooltip.textContent = '✅ Copiado!';

  const alertDiv = document.createElement('div');
  alertDiv.style.cssText = `
    position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%);
    background: #1e293b; color: white; padding: 16px 24px;
    border-radius: 12px; font-family: 'Inter', sans-serif;
    font-size: 0.9rem; z-index: 10000;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    text-align: center; max-width: 90%;
    border: 1px solid rgba(197, 168, 128, 0.3);
  `;
  alertDiv.innerHTML = `
    <i class="fas fa-check-circle" style="color: #22c55e; margin-right: 10px;"></i>
    ${message}
    <br>
    <span style="font-size: 0.8rem; color: #94a3b8; margin-top: 4px; display: block;">
      Agora cole no Instagram 📱
    </span>
  `;
  document.body.appendChild(alertDiv);

  setTimeout(() => {
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.5s ease';
    setTimeout(() => alertDiv.remove(), 500);
  }, 4000);

  setTimeout(() => {
    btn.classList.remove('copied');
    if (tooltip) tooltip.textContent = original;
  }, 3000);
}

// ===== TOGGLE (MOBILE) =====
let shareVisible = false;

function toggleShareButtons() {
  const buttons = document.getElementById('shareButtons');
  if (!buttons) return;
  shareVisible = !shareVisible;
  buttons.classList.toggle('hidden');
  const toggleBtn = document.querySelector('.share-toggle');
  if (toggleBtn) {
    toggleBtn.innerHTML = shareVisible ? '<i class="fas fa-share-alt"></i>' : '<i class="fas fa-times"></i>';
  }
}

// ===== DETECTAR MOBILE E AJUSTAR =====
function adjustShareButtons() {
  const isMobile = window.innerWidth <= 992;
  const toggleBtn = document.querySelector('.share-toggle');
  const buttons = document.getElementById('shareButtons');
  if (!buttons) return;

  if (isMobile) {
    if (toggleBtn) toggleBtn.style.display = 'flex';
    buttons.classList.add('hidden');
    shareVisible = false;
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fas fa-share-alt"></i>';
  } else {
    if (toggleBtn) toggleBtn.style.display = 'none';
    buttons.classList.remove('hidden');
    shareVisible = true;
  }
}

// ===== INICIALIZAR =====
document.addEventListener('DOMContentLoaded', function() {
  // Verificar se os botões já existem (evitar duplicidade)
  if (document.getElementById('shareButtons')) return;

  const shareHTML = `
  <div id="shareButtons" class="share-buttons">
    <button class="share-btn share-btn-whatsapp" onclick="shareOnWhatsApp()" aria-label="Compartilhar no WhatsApp">
      <i class="fab fa-whatsapp"></i><span class="tooltip">WhatsApp</span>
    </button>
    <button class="share-btn share-btn-facebook" onclick="shareOnFacebook()" aria-label="Compartilhar no Facebook">
      <i class="fab fa-facebook-f"></i><span class="tooltip">Facebook</span>
    </button>
    <button class="share-btn share-btn-linkedin" onclick="shareOnLinkedIn()" aria-label="Compartilhar no LinkedIn">
      <i class="fab fa-linkedin-in"></i><span class="tooltip">LinkedIn</span>
    </button>
    <button class="share-btn share-btn-twitter" onclick="shareOnTwitter()" aria-label="Compartilhar no Twitter/X">
      <i class="fab fa-x-twitter"></i><span class="tooltip">Twitter/X</span>
    </button>
    <button class="share-btn share-btn-telegram" onclick="shareOnTelegram()" aria-label="Compartilhar no Telegram">
      <i class="fab fa-telegram-plane"></i><span class="tooltip">Telegram</span>
    </button>
    <button class="share-btn share-btn-email" onclick="shareOnEmail()" aria-label="Compartilhar por e-mail">
      <i class="fas fa-envelope"></i><span class="tooltip">E-mail</span>
    </button>
    <button class="share-btn share-btn-instagram-feed" onclick="copyInstagramFeed()" aria-label="Copiar para Instagram Feed">
      <i class="fab fa-instagram"></i><span class="tooltip">Feed</span>
    </button>
    <button class="share-btn share-btn-instagram-story" onclick="shareInstagramStory()" aria-label="Copiar para Instagram Story">
      <i class="fas fa-circle"></i><span class="tooltip">Story</span>
    </button>
    <button class="share-btn share-btn-instagram-bio" onclick="copyInstagramBio()" aria-label="Copiar link para Instagram Bio">
      <i class="fas fa-link"></i><span class="tooltip">Bio</span>
    </button>
    <button class="share-btn share-btn-copy" onclick="copyLink()" aria-label="Copiar link" id="copyLinkBtn">
      <i class="fas fa-link"></i><span class="tooltip">Copiar Link</span>
    </button>
  </div>
  <button class="share-toggle" onclick="toggleShareButtons()" aria-label="Abrir/fechar botões de compartilhamento">
    <i class="fas fa-share-alt"></i>
  </button>
  `;

  // Inserir os botões no final do body
  document.body.insertAdjacentHTML('beforeend', shareHTML);

  // Ajustar para mobile
  adjustShareButtons();
  window.addEventListener('resize', adjustShareButtons);

  // Atalho de teclado: Ctrl+Shift+S
  document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      toggleShareButtons();
    }
  });

  console.log('📢 Botões de compartilhamento globais ativos!');
  console.log('  Ctrl+Shift+S - Abrir/fechar botões (mobile)');
});
