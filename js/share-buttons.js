// ==========================================================
//  FUNÇÕES DE COMPARTILHAMENTO - GLOBAL
//  Carregado via redirect.js
// ==========================================================

// ===== DADOS DA PÁGINA =====
function getShareData() {
  const title = document.querySelector('h1')?.textContent?.trim() || document.title || 'Artigo';
  const description = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const url = window.location.href;
  return { title, description, url };
}

function truncateText(text, maxLength) {
  if (!text) return '';
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
}

// ===== HASHTAGS =====
function getHashtags() {
  const pageTitle = document.title || '';
  let hashtags = '#AdvocaciaVeraCatarina #SapucaiaDoSul #Direito';

  if (pageTitle.includes('Deficiência') || pageTitle.includes('Inclusão') || pageTitle.includes('PCD')) {
    hashtags += ' #Inclusão #PCD #LBI #Acessibilidade #DireitosHumanos';
  } else if (pageTitle.includes('Família') || pageTitle.includes('Guarda') || pageTitle.includes('Pensão')) {
    hashtags += ' #DireitoDeFamília #GuardaCompartilhada #PensãoAlimentícia';
  } else if (pageTitle.includes('Digital') || pageTitle.includes('LGPD') || pageTitle.includes('Provas')) {
    hashtags += ' #DireitoDigital #LGPD #ProvasDigitais #CrimesVirtuais';
  } else if (pageTitle.includes('Consumidor') || pageTitle.includes('SPC') || pageTitle.includes('SERASA')) {
    hashtags += ' #DireitoDoConsumidor #SPC #SERASA #Indenização';
  } else if (pageTitle.includes('Criminal') || pageTitle.includes('Prisão') || pageTitle.includes('Habeas')) {
    hashtags += ' #DireitoCriminal #HabeasCorpus #DefesaCriminal';
  } else if (pageTitle.includes('Trabalhista') || pageTitle.includes('Assédio') || pageTitle.includes('Rescisão')) {
    hashtags += ' #DireitoTrabalhista #AssédioMoral #Rescisão';
  } else if (pageTitle.includes('Inventário') || pageTitle.includes('Usucapião') || pageTitle.includes('Civil')) {
    hashtags += ' #DireitoCivil #Inventário #Usucapião';
  } else if (pageTitle.includes('Empresarial') || pageTitle.includes('Contrato')) {
    hashtags += ' #DireitoEmpresarial #Contratos #Compliance';
  } else if (pageTitle.includes('Infância') || pageTitle.includes('ECA') || pageTitle.includes('Crianças')) {
    hashtags += ' #Infância #ECA #ProteçãoInfantil';
  }

  return hashtags;
}

// ==========================================================
//  COMPARTILHAMENTO NAS REDES SOCIAIS
// ==========================================================

window.shareOnWhatsApp = function() {
  const { title, description, url } = getShareData();
  const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 ${url}`;
  window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
};

window.shareOnFacebook = function() {
  const { url } = getShareData();
  window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
};

window.shareOnLinkedIn = function() {
  const { url } = getShareData();
  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
};

window.shareOnTwitter = function() {
  const { title, url } = getShareData();
  const text = `📢 ${truncateText(title, 60)}\n\n🔗 ${url}\n\n#Advocacia #Direito #SapucaiaDoSul`;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
};

window.shareOnTelegram = function() {
  const { title, description, url } = getShareData();
  const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n🔗 ${url}`;
  window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
};

window.shareOnEmail = function() {
  const { title, description, url } = getShareData();
  window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(title + '\n\n' + truncateText(description, 200) + '\n\n🔗 ' + url)}`;
};

// ==========================================================
//  INSTAGRAM
// ==========================================================

window.copyInstagramFeed = function() {
  const { title, description } = getShareData();
  const hashtags = getHashtags();
  const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 Acesse o conteúdo completo no link da bio ou no site.\n\n👩‍⚖️ Dra. Vera Catarina | OAB/RS 19.315\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}\n\n@adv.veracatarina`;
  copyToClipboard(text, '📋 Texto copiado para o Feed!');
};

window.shareInstagramStory = function() {
  const { title, description } = getShareData();
  const hashtags = getHashtags();
  const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n👆 Clique no link para ler o artigo completo!\n\n👩‍⚖️ @adv.veracatarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}`;
  copyToClipboard(text, '📋 Texto copiado para o Story!');
};

window.copyInstagramBio = function() {
  const { title, url } = getShareData();
  const text = `📢 ${title}\n\n🔗 ${url}\n\n👩‍⚖️ Dra. Vera Catarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n#AdvocaciaVeraCatarina`;
  copyToClipboard(text, '📋 Link copiado para a Bio!');
};

// ==========================================================
//  COPIAR LINK
// ==========================================================

window.copyLink = function() {
  const url = window.location.href;
  const btn = document.getElementById('copyLinkBtn');
  const icon = btn ? btn.querySelector('i') : null;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      showCopyFeedback(btn, icon);
    }).catch(() => {
      fallbackCopyLink(url, btn, icon);
    });
  } else {
    fallbackCopyLink(url, btn, icon);
  }
};

function fallbackCopyLink(text, btn, icon) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopyFeedback(btn, icon);
  } catch (err) {
    alert('📋 Copie manualmente: ' + text);
  }
  document.body.removeChild(textarea);
}

function showCopyFeedback(btn, icon) {
  if (!btn) return;
  const originalIcon = icon ? icon.className : 'fas fa-link';
  const label = btn.querySelector('.label');
  const originalLabel = label ? label.textContent : 'Copiar Link';
  
  if (icon) icon.className = 'fas fa-check';
  if (label) label.textContent = '✅ Copiado!';
  
  btn.style.color = '#22c55e';
  
  setTimeout(() => {
    if (icon) icon.className = originalIcon;
    if (label) label.textContent = originalLabel;
    btn.style.color = '';
  }, 2000);
}

// ==========================================================
//  FUNÇÃO AUXILIAR - COPIAR PARA ÁREA DE TRANSFERÊNCIA
// ==========================================================

function copyToClipboard(text, message) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showCopiedMessage(message);
    }).catch(() => {
      fallbackCopyText(text, message);
    });
  } else {
    fallbackCopyText(text, message);
  }
}

function fallbackCopyText(text, message) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showCopiedMessage(message);
  } catch (err) {
    alert('📋 Copie o texto abaixo:\n\n' + text);
  }
  document.body.removeChild(textarea);
}

function showCopiedMessage(message) {
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
      Agora cole onde desejar 📱
    </span>
  `;
  document.body.appendChild(alertDiv);
  setTimeout(() => {
    alertDiv.style.opacity = '0';
    alertDiv.style.transition = 'opacity 0.5s ease';
    setTimeout(() => alertDiv.remove(), 500);
  }, 4000);
}

console.log('📢 Funções de compartilhamento carregadas!');
