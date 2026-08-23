// ============================================================
//  REDIRECIONAMENTO PARA O NOVO DOMÍNIO
//  + BOTÕES DE COMPARTILHAMENTO GLOBAIS
//  Domínio: veracatarina.adv.br
// ============================================================

// ============================================================
// PARTE 1: REDIRECIONAMENTO AUTOMÁTICO
// ============================================================
(function() {
    'use strict';
    
    // CONFIGURAÇÃO
    const TARGET_DOMAIN = 'veracatarina.adv.br';
    const TARGET_PROTOCOL = 'https:';
    
    // DOMÍNIOS QUE DEVEM SER REDIRECIONADOS
    const OLD_DOMAINS = [
        'veracatarina.github.io',
        'www.veracatarina.github.io',
        'veracatarina.github.com',
        'www.veracatarina.github.com',
        'www.' + TARGET_DOMAIN  // Redireciona www para sem www
    ];
    
    const currentHost = window.location.hostname;
    const currentProtocol = window.location.protocol;
    
    // VERIFICA SE PRECISA REDIRECIONAR
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
// PARTE 2: BOTÕES DE COMPARTILHAMENTO GLOBAIS
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

    // WhatsApp
    window.shareOnWhatsApp = function() {
        const { title, description, url } = getShareData();
        const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 ${url}`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
    };

    // Facebook
    window.shareOnFacebook = function() {
        const { url } = getShareData();
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
    };

    // LinkedIn
    window.shareOnLinkedIn = function() {
        const { url } = getShareData();
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'width=600,height=500');
    };

    // Twitter/X
    window.shareOnTwitter = function() {
        const { title, url } = getShareData();
        const text = `📢 ${truncateText(title, 60)}\n\n🔗 ${url}\n\n#Advocacia #Direito #SapucaiaDoSul`;
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
    };

    // Telegram
    window.shareOnTelegram = function() {
        const { title, description, url } = getShareData();
        const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n🔗 ${url}`;
        window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank', 'width=600,height=500');
    };

    // E-mail
    window.shareOnEmail = function() {
        const { title, description, url } = getShareData();
        const subject = encodeURIComponent(title);
        const body = encodeURIComponent(`${title}\n\n${truncateText(description, 200)}\n\n🔗 ${url}`);
        window.location.href = `mailto:?subject=${subject}&body=${body}`;
    };

    // Copiar Link
    window.copyLink = function() {
        const url = window.location.href;
        const btn = document.getElementById('copyLinkBtn');
        
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(url).then(() => {
                if (btn) btn.classList.add('copied');
                showCopiedMessage('✅ Link copiado!');
                setTimeout(() => { if (btn) btn.classList.remove('copied'); }, 2000);
            }).catch(() => fallbackCopyLink(url));
        } else {
            fallbackCopyLink(url);
        }
    };

    function fallbackCopyLink(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showCopiedMessage('✅ Link copiado!');
        } catch (err) {
            alert('📋 Copie manualmente: ' + text);
        }
        document.body.removeChild(textarea);
    }

    // ============================================================
    // INSTAGRAM
    // ============================================================

    // Instagram Feed
    window.copyInstagramFeed = function() {
        const { title, description } = getShareData();
        const hashtags = getHashtags();
        const text = `📢 ${title}\n\n${truncateText(description, 200)}\n\n🔗 Acesse o conteúdo completo no link da bio ou no site.\n\n👩‍⚖️ Dra. Vera Catarina | OAB/RS 19.315\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}\n\n@adv.veracatarina`;
        copyToClipboard(text, '📋 Texto copiado para o Feed!');
    };

    // Instagram Story
    window.shareInstagramStory = function() {
        const { title, description } = getShareData();
        const hashtags = getHashtags();
        const text = `📢 ${title}\n\n${truncateText(description, 150)}\n\n👆 Clique no link para ler o artigo completo!\n\n👩‍⚖️ @adv.veracatarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n${hashtags}`;
        copyToClipboard(text, '📋 Texto copiado para o Story!');
    };

    // Instagram Bio
    window.copyInstagramBio = function() {
        const { title, url } = getShareData();
        const text = `📢 ${title}\n\n🔗 ${url}\n\n👩‍⚖️ Dra. Vera Catarina\n📍 Sapucaia do Sul - RS\n📱 (51) 3450-2229\n\n#AdvocaciaVeraCatarina`;
        copyToClipboard(text, '📋 Link copiado para a Bio!');
    };

    // ============================================================
    // FUNÇÕES AUXILIARES
    // ============================================================

    function copyToClipboard(text, message) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => showCopiedMessage(message))
                .catch(() => fallbackCopyText(text, message));
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
    // TOGGLE PARA MOBILE
    // ============================================================

    let shareVisible = false;

    window.toggleShareButtons = function() {
        const buttons = document.getElementById('shareButtons');
        if (!buttons) return;
        shareVisible = !shareVisible;
        buttons.classList.toggle('hidden');
        const toggleBtn = document.querySelector('.share-toggle');
        if (toggleBtn) {
            toggleBtn.innerHTML = shareVisible ? '<i class="fas fa-share-alt"></i>' : '<i class="fas fa-times"></i>';
        }
    };

    // ============================================================
    // INJETAR BOTÕES NA PÁGINA
    // ============================================================

    function injectShareButtons() {
        if (document.getElementById('shareButtons')) return;

        const url = window.location.pathname;
        if (url.includes('/admin') || url.includes('/login')) return;

        const shareHTML = `
        <div id="shareButtons" class="share-buttons">
            <button class="share-btn share-btn-whatsapp" onclick="shareOnWhatsApp()" aria-label="WhatsApp">
                <i class="fab fa-whatsapp"></i><span class="tooltip">WhatsApp</span>
            </button>
            <button class="share-btn share-btn-facebook" onclick="shareOnFacebook()" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i><span class="tooltip">Facebook</span>
            </button>
            <button class="share-btn share-btn-linkedin" onclick="shareOnLinkedIn()" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i><span class="tooltip">LinkedIn</span>
            </button>
            <button class="share-btn share-btn-twitter" onclick="shareOnTwitter()" aria-label="Twitter/X">
                <i class="fab fa-x-twitter"></i><span class="tooltip">Twitter</span>
            </button>
            <button class="share-btn share-btn-telegram" onclick="shareOnTelegram()" aria-label="Telegram">
                <i class="fab fa-telegram-plane"></i><span class="tooltip">Telegram</span>
            </button>
            <button class="share-btn share-btn-email" onclick="shareOnEmail()" aria-label="E-mail">
                <i class="fas fa-envelope"></i><span class="tooltip">E-mail</span>
            </button>
            <button class="share-btn share-btn-instagram-feed" onclick="copyInstagramFeed()" aria-label="Instagram Feed">
                <i class="fab fa-instagram"></i><span class="tooltip">Feed</span>
            </button>
            <button class="share-btn share-btn-instagram-story" onclick="shareInstagramStory()" aria-label="Instagram Story">
                <i class="fas fa-circle"></i><span class="tooltip">Story</span>
            </button>
            <button class="share-btn share-btn-instagram-bio" onclick="copyInstagramBio()" aria-label="Instagram Bio">
                <i class="fas fa-link"></i><span class="tooltip">Bio</span>
            </button>
            <button class="share-btn share-btn-copy" onclick="copyLink()" aria-label="Copiar link" id="copyLinkBtn">
                <i class="fas fa-link"></i><span class="tooltip">Copiar Link</span>
            </button>
        </div>
        <button class="share-toggle" onclick="toggleShareButtons()" aria-label="Compartilhar">
            <i class="fas fa-share-alt"></i>
        </button>
        `;

        document.body.insertAdjacentHTML('beforeend', shareHTML);
        adjustShareButtons();
        window.addEventListener('resize', adjustShareButtons);

        document.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.shiftKey && (e.key === 's' || e.key === 'S')) {
                e.preventDefault();
                toggleShareButtons();
            }
        });

        console.log('📢 Botões de compartilhamento ativos!');
    }

    // ============================================================
    // AJUSTE PARA MOBILE
    // ============================================================

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

    // ============================================================
    // INJETAR ESTILOS DINAMICAMENTE
    // ============================================================

    function injectStyles() {
        if (document.getElementById('share-buttons-styles')) return;

        const styles = `
        <style id="share-buttons-styles">
            .share-buttons {
                position: fixed; top: 50%; right: 10px; transform: translateY(-50%);
                z-index: 9999; display: flex; flex-direction: column; gap: 8px;
                padding: 10px 8px; background: rgba(255,255,255,0.95);
                backdrop-filter: blur(10px); border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.12);
                border: 1px solid rgba(197,168,128,0.2);
            }
            .share-btn {
                width: 40px; height: 40px; border-radius: 50%; border: none;
                cursor: pointer; font-size: 1.1rem; display: flex;
                align-items: center; justify-content: center;
                transition: all 0.3s ease; color: white; position: relative;
            }
            .share-btn:hover { transform: scale(1.12); box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
            .share-btn .tooltip {
                position: absolute; right: 52px; background: #1e293b;
                color: white; padding: 4px 10px; border-radius: 4px;
                font-size: 0.65rem; font-weight: 600; white-space: nowrap;
                opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
            }
            .share-btn:hover .tooltip { opacity: 1; }
            .share-btn-whatsapp { background: #25D366; }
            .share-btn-facebook { background: #1877F2; }
            .share-btn-linkedin { background: #0A66C2; }
            .share-btn-twitter { background: #000000; }
            .share-btn-telegram { background: #26A5E4; }
            .share-btn-email { background: #EA4335; }
            .share-btn-copy { background: #64748B; }
            .share-btn-copy.copied { background: #22c55e; }
            .share-btn-instagram-feed {
                background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
            }
            .share-btn-instagram-story {
                background: linear-gradient(45deg, #f56040, #fd1d1d, #f56040);
            }
            .share-btn-instagram-bio { background: #405DE6; }
            .share-toggle {
                width: 44px; height: 44px; border-radius: 50%;
                border: 2px solid #c5a880; background: #0b251e; color: white;
                cursor: pointer; font-size: 1.2rem; display: none;
                align-items: center; justify-content: center;
                transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(0,0,0,0.15);
                position: fixed; bottom: 150px; right: 15px; z-index: 9998;
            }
            .share-toggle:hover { background: #c5a880; color: #0b251e; transform: scale(1.05); }
            .share-buttons.hidden { display: none; }
            @media (max-width: 992px) {
                .share-buttons {
                    bottom: 90px; top: auto; right: 15px; transform: none;
                    flex-direction: row; flex-wrap: wrap; justify-content: center;
                    padding: 8px 12px; gap: 6px; border-radius: 50px;
                    max-width: 90vw; width: auto;
                }
                .share-btn { width: 36px; height: 36px; font-size: 0.9rem; }
                .share-btn .tooltip { display: none; }
                .share-toggle { display: flex; }
            }
            @media (max-width: 600px) {
                .share-buttons { bottom: 80px; right: 10px; padding: 6px 10px; gap: 4px; }
                .share-btn { width: 32px; height: 32px; font-size: 0.8rem; }
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
