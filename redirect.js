// ============================================================
//  REDIRECIONAMENTO PARA O NOVO DOMÍNIO
//  + BOTÃO ÚNICO DE COMPARTILHAMENTO (GLOBAL)
//  Domínio: veracatarina.adv.br
// ============================================================

// ============================================================
// PARTE 1: REDIRECIONAMENTO AUTOMÁTICO
// ============================================================
(function() {
    'use strict';
    
    const TARGET_DOMAIN = 'veracatarina.adv.br';
    const TARGET_PROTOCOL = 'https:';
    
    const OLD_DOMAINS = [
        'veracatarina.github.io',
        'www.veracatarina.github.io',
        'veracatarina.github.com',
        'www.veracatarina.github.com',
        'www.' + TARGET_DOMAIN
    ];
    
    const currentHost = window.location.hostname;
    const currentProtocol = window.location.protocol;
    
    const needsRedirect = (
        OLD_DOMAINS.includes(currentHost) ||
        (currentHost === TARGET_DOMAIN && currentProtocol !== TARGET_PROTOCOL) ||
        currentHost === 'www.' + TARGET_DOMAIN
    );
    
    if (needsRedirect) {
        let newUrl = TARGET_PROTOCOL + '//' + TARGET_DOMAIN;
        newUrl += window.location.pathname;
        newUrl += window.location.search;
        newUrl += window.location.hash;
        
        if (newUrl === window.location.href) {
            return;
        }
        
        console.log('🔀 Redirecionando para:', newUrl);
        window.location.replace(newUrl);
    }
})();


// ============================================================
// PARTE 2: BOTÃO ÚNICO DE COMPARTILHAMENTO (GLOBAL)
// ============================================================
(function() {
    'use strict';

    // ============================================================
    // DADOS DA PÁGINA
    // ============================================================
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

    // ============================================================
    // HASHTAGS POR CATEGORIA
    // ============================================================
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

    // ============================================================
    // COMPARTILHAMENTO NAS REDES SOCIAIS
    // ============================================================
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

    // ============================================================
    // INSTAGRAM
    // ============================================================
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

    // ============================================================
    // COPIAR LINK
    // ============================================================
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

    // ============================================================
    // FUNÇÃO AUXILIAR - COPIAR PARA ÁREA DE TRANSFERÊNCIA
    // ============================================================
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

    // ============================================================
    // CONTROLE DO MENU (HOVER)
    // ============================================================
    let shareHoverTimeout;

    function openSharePopup() {
        const container = document.getElementById('sharePopup');
        if (container) {
            clearTimeout(shareHoverTimeout);
            container.classList.add('active');
        }
    }

    function closeSharePopup() {
        const container = document.getElementById('sharePopup');
        const btn = document.getElementById('shareMainBtn');
        if (container) {
            shareHoverTimeout = setTimeout(() => {
                const isHoveringBtn = btn && btn.matches(':hover');
                const isHoveringPopup = container && container.matches(':hover');
                
                if (!isHoveringBtn && !isHoveringPopup) {
                    container.classList.remove('active');
                }
            }, 150);
        }
    }

    // ============================================================
    // INJETAR BOTÕES NA PÁGINA
    // ============================================================
    function injectShareButtons() {
        if (document.getElementById('shareMainBtn')) return;

        const url = window.location.pathname;
        if (url.includes('/admin') || url.includes('/login')) return;

        const shareHTML = `
        <!-- ===== BOTÃO ÚNICO DE COMPARTILHAMENTO ===== -->
        <button class="share-main-btn" id="shareMainBtn" aria-label="Abrir opções de compartilhamento">
            <i class="fas fa-share-alt"></i> Compartilhar
        </button>

        <!-- ===== MENU DE COMPARTILHAMENTO ===== -->
        <div class="share-popup-container" id="sharePopup">
            <div class="share-popup">
                <button class="share-btn" onclick="shareOnWhatsApp()">
                    <i class="fab fa-whatsapp"></i>
                    <span class="label">WhatsApp</span>
                </button>
                <button class="share-btn" onclick="shareOnFacebook()">
                    <i class="fab fa-facebook-f"></i>
                    <span class="label">Facebook</span>
                </button>
                <button class="share-btn" onclick="shareOnLinkedIn()">
                    <i class="fab fa-linkedin-in"></i>
                    <span class="label">LinkedIn</span>
                </button>
                <button class="share-btn" onclick="shareOnTwitter()">
                    <i class="fab fa-x-twitter"></i>
                    <span class="label">Twitter/X</span>
                </button>
                <button class="share-btn" onclick="shareOnTelegram()">
                    <i class="fab fa-telegram-plane"></i>
                    <span class="label">Telegram</span>
                </button>
                <button class="share-btn" onclick="shareOnEmail()">
                    <i class="fas fa-envelope"></i>
                    <span class="label">E-mail</span>
                </button>
                
                <hr class="divider">
                
                <button class="share-btn" onclick="copyInstagramFeed()">
                    <i class="fab fa-instagram"></i>
                    <span class="label">Instagram Feed</span>
                </button>
                <button class="share-btn" onclick="shareInstagramStory()">
                    <i class="fas fa-circle"></i>
                    <span class="label">Instagram Story</span>
                </button>
                <button class="share-btn" onclick="copyInstagramBio()">
                    <i class="fas fa-link"></i>
                    <span class="label">Link na Bio</span>
                </button>
                
                <hr class="divider">
                
                <button class="share-btn" onclick="copyLink()" id="copyLinkBtn">
                    <i class="fas fa-link"></i>
                    <span class="label">Copiar Link</span>
                </button>
            </div>
        </div>
        `;

        document.body.insertAdjacentHTML('beforeend', shareHTML);

        // Adicionar eventos de hover
        const btn = document.getElementById('shareMainBtn');
        const container = document.getElementById('sharePopup');
        
        if (btn) {
            btn.addEventListener('mouseenter', openSharePopup);
            btn.addEventListener('mouseleave', closeSharePopup);
        }
        
        if (container) {
            container.addEventListener('mouseenter', function() {
                clearTimeout(shareHoverTimeout);
            });
            container.addEventListener('mouseleave', closeSharePopup);
        }

        // Fechar ao clicar fora
        document.addEventListener('click', function(event) {
            const container = document.getElementById('sharePopup');
            const btn = document.getElementById('shareMainBtn');
            if (!container || !btn) return;
            
            if (!container.contains(event.target) && !btn.contains(event.target)) {
                container.classList.remove('active');
            }
        });

        console.log('📢 Botão único de compartilhamento ativo!');
        console.log('  Passe o mouse sobre "Compartilhar" para ver as opções.');
    }

    // ============================================================
    // INJETAR ESTILOS DINAMICAMENTE
    // ============================================================
    function injectStyles() {
        if (document.getElementById('share-buttons-styles')) return;

        const styles = `
        <style id="share-buttons-styles">
            .share-main-btn {
                position: fixed; top: 100px; right: 20px; z-index: 9999;
                background: #0b251e; color: white;
                border: 2px solid #c5a880; border-radius: 50px;
                padding: 10px 18px; font-size: 0.85rem; font-weight: 700;
                cursor: pointer; display: flex; align-items: center; gap: 8px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                transition: all 0.3s ease;
                font-family: 'Inter', sans-serif;
                text-transform: uppercase; letter-spacing: 0.5px;
            }
            .share-main-btn:hover {
                background: #c5a880; color: #0b251e;
                transform: scale(1.03);
                box-shadow: 0 6px 30px rgba(0,0,0,0.25);
            }
            .share-main-btn i { font-size: 1.1rem; }
            
            .share-popup-container {
                position: fixed; top: 150px; right: 20px; z-index: 9998;
                opacity: 0; visibility: hidden;
                transform: translateY(-10px) scale(0.95);
                transition: all 0.25s ease;
                pointer-events: none;
            }
            .share-popup-container.active {
                opacity: 1; visibility: visible;
                transform: translateY(0) scale(1);
                pointer-events: all;
            }
            
            .share-popup {
                background: rgba(11,37,30,0.97);
                backdrop-filter: blur(12px);
                border: 1px solid #c5a880;
                border-radius: 12px;
                padding: 12px 8px;
                min-width: 190px;
                box-shadow: 0 8px 40px rgba(0,0,0,0.4);
                display: flex; flex-direction: column; gap: 4px;
            }
            .share-popup .share-btn {
                width: 100%; padding: 8px 14px; border: none;
                border-radius: 6px; cursor: pointer;
                font-size: 0.78rem; font-weight: 600;
                display: flex; align-items: center; gap: 10px;
                transition: all 0.2s ease;
                background: transparent; color: #e2e8f0;
                font-family: 'Inter', sans-serif; text-align: left;
            }
            .share-popup .share-btn:hover {
                background: rgba(197,168,128,0.15);
                color: #c5a880;
            }
            .share-popup .share-btn i { width: 20px; text-align: center; font-size: 1rem; }
            .share-popup .share-btn .label { flex: 1; }
            .share-popup .divider {
                border: none; border-top: 1px solid rgba(255,255,255,0.06);
                margin: 4px 8px;
            }
            .share-popup .share-btn .fa-whatsapp { color: #25D366; }
            .share-popup .share-btn .fa-facebook-f { color: #1877F2; }
            .share-popup .share-btn .fa-linkedin-in { color: #0A66C2; }
            .share-popup .share-btn .fa-x-twitter { color: #ffffff; }
            .share-popup .share-btn .fa-telegram-plane { color: #26A5E4; }
            .share-popup .share-btn .fa-envelope { color: #EA4335; }
            .share-popup .share-btn .fa-instagram { color: #E4405F; }
            .share-popup .share-btn .fa-circle { color: #F56040; }
            .share-popup .share-btn .fa-link { color: #94a3b8; }
            .share-popup .share-btn .fa-link.copied { color: #22c55e; }
            
            .share-popup::before {
                content: '';
                position: absolute; top: -8px; right: 20px;
                width: 0; height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-bottom: 8px solid rgba(11,37,30,0.97);
            }
            
            @media (max-width: 992px) {
                .share-main-btn { top: 75px; right: 15px; padding: 8px 14px; font-size: 0.75rem; }
                .share-popup-container { top: 120px; right: 15px; }
                .share-popup { min-width: 170px; padding: 10px 6px; }
                .share-popup .share-btn { padding: 8px 12px; font-size: 0.72rem; }
            }
            @media (max-width: 600px) {
                .share-main-btn { top: 70px; right: 10px; padding: 6px 12px; font-size: 0.7rem; }
                .share-popup-container { top: 110px; right: 10px; }
                .share-popup { min-width: 155px; padding: 8px 4px; }
                .share-popup .share-btn { padding: 6px 10px; font-size: 0.68rem; }
            }
        </style>
        `;

        document.head.insertAdjacentHTML('beforeend', styles);
    }

    // ============================================================
    // INICIALIZAR
    // ============================================================
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            injectStyles();
            injectShareButtons();
        });
    } else {
        injectStyles();
        injectShareButtons();
    }

})();
