<!-- Coloque isto dentro do <head> -->
<script>
// ============================================================
// REDIRECIONAMENTO AUTOMÁTICO PARA O NOVO DOMÍNIO
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
        'www.veracatarina.adv.br' // Redireciona www para sem www
    ];
    
    const currentHost = window.location.hostname;
    const currentProtocol = window.location.protocol;
    
    // VERIFICA SE PRECISA REDIRECIONAR
    const needsRedirect = (
        OLD_DOMAINS.includes(currentHost) ||          // Domínio antigo
        (currentHost === TARGET_DOMAIN && currentProtocol !== TARGET_PROTOCOL) || // HTTP no domínio certo
        currentHost === 'www.' + TARGET_DOMAIN        // www no domínio certo
    );
    
    if (needsRedirect) {
        // Constrói a nova URL
        let newUrl = TARGET_PROTOCOL + '//' + TARGET_DOMAIN;
        newUrl += window.location.pathname;
        newUrl += window.location.search;
        newUrl += window.location.hash;
        
        // Evita redirecionamento infinito (segurança extra)
        if (newUrl === window.location.href) {
            return;
        }
        
        // Log para debugging (remova em produção)
        console.log('🔀 Redirecionando para:', newUrl);
        
        // REDIRECIONA
        window.location.replace(newUrl);
    }
})();
</script>

<!-- FALLBACK: Se o JavaScript falhar, o meta refresh entra em ação -->
<noscript>
    <meta http-equiv="refresh" content="0; url=https://veracatarina.adv.br/">
</noscript>
