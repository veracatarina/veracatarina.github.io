// ==========================================================
//  POSTS (dados das notícias) - CENTRALIZADO
//  Arquivo: /dados/posts.js
//  Carregado por: noticias.html e arquivo.html
// ==========================================================

// ==========================================================
//  CATEGORIAS DISPONÍVEIS:
//  direito-digital, direito-criminal, direito-familia,
//  direito-trabalhista, direito-consumidor, direitos-cidadao,
//  infancia, direito-previdenciario, direito-empresarial,
//  direito-civil, provas-digitais, correspondente, institucional
// ==========================================================

const posts = [
  // ==========================================================
  //  BLOCO 1: INFÂNCIA E JUVENTUDE (Julho/Agosto 2026)
  // ==========================================================
  {
    titulo: "Crimes contra crianças e adolescentes: O que a lei prevê e como agir em qualquer ambiente",
    link: "https://veracatarina.adv.br/noticias/crimes-contra-criancas-adolescentes.html",
    resumo: "Violência, abuso, exploração, assédio virtual e negligência são crimes graves. Conheça as medidas protetivas e como buscar justiça.",
    data: "31/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/crimes-contra-criancas-adolescentes-responsabilidade-defesa.png",
    destaque: false
  },
  {
    titulo: "LGPD e ECA Digital: A privacidade de crianças e adolescentes tem regras próprias e mais rigorosas",
    link: "https://veracatarina.adv.br/noticias/lgpd-eca-digital-privacidade.html",
    resumo: "A LGPD e o ECA Digital estabelecem regras rigorosas para a coleta e uso de dados de menores. Famílias têm direito a exigir exclusão e reparação.",
    data: "30/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lgpd-eca-digital-privacidade-criancas-adolescentes.png",
    destaque: false
  },
  {
    titulo: "ECA Digital: Como a nova lei protege crianças e adolescentes na internet",
    link: "https://veracatarina.adv.br/noticias/eca-digital-crimes-virtuais-protecao.html",
    resumo: "O ECA Digital define regras para redes sociais, jogos e aplicativos, protegendo menores contra assédio, exposição indevida e crimes virtuais. Saiba mais.",
    data: "29/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lei-eca-digital-protecao-criancas-adolescentes-internet.png",
    destaque: false
  },
  {
    titulo: "ECA: O que diz a lei que protege crianças e adolescentes em todas as situações",
    link: "https://veracatarina.adv.br/noticias/eca-direitos-basicos-protecao.html",
    resumo: "O ECA assegura direitos fundamentais como vida, saúde, educação, convivência familiar e proteção contra violência. Conheça como essa lei é aplicada na prática.",
    data: "28/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lei-eca-protecao-criancas-adolescentes-situacoes.png",
    destaque: false
  },
  {
    titulo: "Marco Legal da Primeira Infância: Proteção integrada para os primeiros anos de vida – de 0 a 6 anos",
    link: "https://veracatarina.adv.br/noticias/marco-legal-primeira-infancia.html",
    resumo: "A Lei 13.257/2016 estabelece políticas integradas para crianças de 0 a 6 anos, ampliando a proteção do ECA e garantindo desenvolvimento pleno.",
    data: "27/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/marco-legal-primeira-infancia-lei-13257-2016-0-6-anos.png",
    destaque: false
  },
  {
    titulo: "Proteção integral: Conheça o ECA e o novo ECA Digital – Seus direitos garantidos, dentro e fora da internet",
    link: "https://veracatarina.adv.br/noticias/protecao-integral-eca-eca-digital.html",
    resumo: "O Estatuto da Criança e do Adolescente (ECA) e o ECA Digital (Lei 15.211/2025) garantem proteção integral a crianças e adolescentes, dentro e fora da internet. Conheça seus direitos.",
    data: "24/07/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/protecao-integral-eca-eca-digital-direitos-garantidos.png",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 2: DIREITO DIGITAL
  // ==========================================================
  {
    titulo: "Site agora com recursos de acessibilidade",
    link: "https://veracatarina.adv.br/noticias/site-agora-acessivel.html",
    resumo: "Conheça os recursos de acessibilidade do portal da Dra. Vera Catarina: modo escuro, alto contraste, VLibras, fonte para dislexia e muito mais.",
    data: "21/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/acessibilidade-digital-inclusao.webp",
    destaque: false
  },
  {
    titulo: "Site adequado à LGPD, Acessibilidade e OAB",
    link: "https://veracatarina.adv.br/noticias/site-lgpd-acessibilidade-oab.html",
    resumo: "O portal foi reformulado para atender à LGPD, às diretrizes de acessibilidade digital (WCAG 2.2, eMAG, LBI) e ao Provimento 205/2021 da OAB.",
    data: "19/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/site-lgpd-acessibilidade-oab.jpg",
    destaque: false
  },
  {
    titulo: "Direito ao Esquecimento: Case Acadêmico Premiado – Análise do RE 1.010.606/STF",
    link: "https://veracatarina.adv.br/noticias/direito-ao-esquecimento-case-academico-premiado.html",
    resumo: "Trabalho interdisciplinar com Kelsen, Dworkin e Bobbio sobre o Caso Aída Curi. Nota máxima na UNISINOS.",
    data: "18/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/direito-ao-esquecimento.jpg",
    destaque: false
  },
  {
    titulo: "LGPD: Entenda a Lei Geral de Proteção de Dados e sua Importância para a Segurança Online",
    link: "https://veracatarina.adv.br/noticias/lgpd-entenda-lei-geral-protecao-dados.html",
    resumo: "A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que visa proteger os direitos fundamentais das pessoas em relação ao tratamento de seus dados pessoais.",
    data: "05/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/lgpd-protecao-dados.jpg",
    destaque: false
  },
  {
    titulo: "Crimes Virtuais: Entenda Calúnia, Difamação e Injúria nas Redes Sociais",
    link: "https://veracatarina.adv.br/noticias/crimes-virtuais-calunia-difamacao-injuria.html",
    resumo: "As redes sociais se tornaram um espaço onde a liberdade de expressão pode ser usada de forma indevida, dando origem a crimes contra a honra.",
    data: "18/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/crimes-virtuais-calunia-difamacao.jpg",
    destaque: false
  },
  {
    titulo: "🌐 MARCO CIVIL DA INTERNET: Seus Direitos Digitais e Proteção na Rede!",
    link: "https://veracatarina.adv.br/noticias/marco-civil-internet-direitos-digitais.html",
    resumo: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.",
    data: "19/07/2025",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/marco-civil-internet.jpg",
    destaque: false
  },
  {
    titulo: "Perseguição Digital: 5 Anos da Lei do Stalking e a Importância da Prova Pericial",
    link: "https://veracatarina.adv.br/noticias/perseguicao-digital-stalking-prova-pericial.html",
    resumo: "O stalking (perseguição obsessiva) é crime grave no Brasil. A Lei 14.132/2021 completa cinco anos em 2026.",
    data: "31/03/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/stalking-prova-pericial.jpg",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 3: DIREITO DE FAMÍLIA
  // ==========================================================
  {
    titulo: "Como pedir Pensão Alimentícia em Sapucaia do Sul? Passo a passo completo",
    link: "https://veracatarina.adv.br/noticias/como-pedir-pensao-alimenticia.html",
    resumo: "Entenda quem tem direito à pensão, quais documentos reunir, como calcular o valor e quando procurar uma advogada especializada.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/pensao-alimenticia-guia.jpg",
    destaque: false
  },
  {
    titulo: "Planejamento Sucessório e o Protocolo Familiar: Protegendo o Patrimônio e a Harmonia",
    link: "https://veracatarina.adv.br/noticias/planejamento-sucessorio-protocolo-familiar.html",
    resumo: "Planejamento sucessório e Protocolo Familiar cresceram em 2026. Famílias buscam evitar a morosidade e o custo emocional de inventários judiciais complexos.",
    data: "08/04/2026",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/planejamento-sucessorio-protocolo-familiar-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Separação Consensual x Litigiosa: Qual a melhor saída?",
    link: "https://veracatarina.adv.br/noticias/separacao-consensual-litigiosa.html",
    resumo: "Conheça as diferenças entre separação consensual e litigiosa, os custos envolvidos, o tempo de duração e saiba qual caminho é mais adequado para o seu caso.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/separacao-consensual-litigiosa-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Inventário e Usucapião em Sapucaia do Sul: Regularize seu imóvel",
    link: "https://veracatarina.adv.br/noticias/inventario-usucapiao-sapucaia-do-sul.html",
    resumo: "Seja para transferir um patrimônio após um falecimento ou para regularizar um imóvel sem escritura, o Direito Imobiliário oferece soluções com quem tem 40 anos de experiência.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/inventario-usucapiao-sapucaia-do-sul-advocacia-vera-catarina.jpg",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 4: ARTIGOS DO BLOGGER (Blogger)
  // ==========================================================
  {
    titulo: "Proteja-se: Denunciando Crimes na Internet com o Auxílio de um Advogado Especializado",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/proteja-se-denunciando-crimes-na.html",
    resumo: "A internet é um espaço fértil para crimes e abusos. Se você está sendo vítima, é fundamental buscar ajuda de um advogado especializado.",
    data: "16/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Crimes nas Redes Sociais: Como se Proteger e Buscar Justiça | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/crimes-nas-redes-sociais-como-se.html",
    resumo: "Cyberbullying, fake news, vingança pornográfica e golpes virtuais são perigos nas redes sociais. Conhecer seus direitos é o primeiro passo.",
    data: "19/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "ECA Digital: A Lei que as Plataformas Não Podem Mais Ignorar",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/eca-digital-lei-que-as-plataformas-nao.html",
    resumo: "A Lei 15.211/2025 (ECA Digital) entrou em vigor em março de 2026. Redes sociais, jogos e aplicativos são obrigados a proteger crianças e adolescentes.",
    data: "13/04/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "5 Direitos Digitais que Todo Usuário da Internet Precisa Conhecer",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/5-direitos-digitais-que-todo-usuario-da.html",
    resumo: "Do Marco Civil de 2014 à realidade de 2026: o que mudou, o que permanece e o que você ainda pode exigir.",
    data: "09/04/2026",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "LBI | Lei Brasileira de Inclusão, download",
    link: "https://advocaciasapucaia.blogspot.com/2015/09/lbi-lei-brasileira-de-inclusao-download.html",
    resumo: "A Lei Brasileira de Inclusão (LBI) - nº 13.146/2015 - promove o exercício dos direitos e liberdades fundamentais pelas pessoas com deficiência.",
    data: "19/02/2015",
    categoria: "direitos-cidadao",
    categoriaLabel: "📜 Direitos do Cidadão",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Advocacia Criminal em Sapucaia: Defesa Especializada | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/advocacia-criminal-em-sapucaia-defesa.html",
    resumo: "Defesa criminal especializada com atuação estratégica e presença imediata: assistência em prisões, tráfico de drogas, crimes de trânsito, Lei Maria da Penha e Habeas Corpus.",
    data: "05/06/2025",
    categoria: "direito-criminal",
    categoriaLabel: "⚖️ Direito Criminal",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Defesa em Casos de Caça-Níquel, Jogo do Bicho e Máquinas de Ursinho | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/defesa-em-casos-de-caca-niquel-jogo-do.html",
    resumo: "Defesa contra acusações criminais por operação de jogos ilegais. Atuação para reconhecimento da legalidade de máquinas lúdicas.",
    data: "10/06/2025",
    categoria: "direito-criminal",
    categoriaLabel: "⚖️ Direito Criminal",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Busca e Apreensão de Veículos? Saiba Como Evitar e Reverter | Advogado Especializado",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/busca-e-apreensao-de-veiculos-saiba.html",
    resumo: "Apreensão do veículo pode trazer prejuízos financeiros. Saiba como suspender a ordem de apreensão, negociar com bancos e recuperar o veículo.",
    data: "17/06/2025",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Direito Trabalhista: Defender Seus Direitos é Valorizar Sua História de Trabalho",
    link: "https://advocaciasapucaia.blogspot.com/2016/10/direito-trabalhista-defenda-seus.html",
    resumo: "Assédio moral, desvio de função, horas extras não pagas, justa causa injusta e acidente de trabalho. Saiba como a lei protege você.",
    data: "15/04/2016",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Pejotização e Novas Formas de Trabalho: Desafios Éticos e Jurídicos em 2026",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/pejotizacao-e-novas-formas-de-trabalho.html",
    resumo: "A pejotização e a 'falsa autonomia' continuam sendo pontos de atenção no Direito do Trabalho. Atuação tanto na defesa de trabalhadores quanto na consultoria a empresas.",
    data: "10/04/2026",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 5: POSTAGENS COM HORÁRIO (Agosto 2026)
  // ==========================================================
  {
    titulo: "ECA nas relações familiares: Guarda, convivência e pensão sempre com foco no desenvolvimento saudável",
    link: "https://veracatarina.adv.br/noticias/eca-relacoes-familiares-guarda-pensao.html",
    resumo: "Em disputas de guarda, visitas e pensão, o ECA exige que o interesse superior da criança seja prioridade. Saiba como a lei protege o vínculo familiar.",
    data: "01/08/2026",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/eca-relacoes-familiares-guarda-convivencia-pensao.png",
    destaque: false
  },
  {
    titulo: "Situações urgentes envolvendo crianças e adolescentes: Conte com atendimento imediato",
    link: "https://veracatarina.adv.br/noticias/atendimento-24h-urgente-criancas.html",
    resumo: "Violações de direitos de menores exigem providências rápidas. Conte com atendimento online 24h por WhatsApp para medidas protetivas e remoção de conteúdo.",
    data: "02/08/2026",
    horario: "08:00",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/atendimento-24h-urgente-criancas-adolescentes.png",
    destaque: false
  },
  {
    titulo: "Como limpar o nome no SPC e SERASA mesmo com dívidas: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/limpar-nome-spc-serasa-guia.html",
    resumo: "Seu nome está negativado? Saiba como limpar o nome no SPC e SERASA, quais são seus direitos como consumidor e como pedir indenização por danos morais.",
    data: "02/08/2026",
    horario: "14:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/limpar-nome-spc-serasa-guia-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Golpe do PIX: o que fazer juridicamente para recuperar seu dinheiro",
    link: "https://veracatarina.adv.br/noticias/golpe-do-pix-como-recuperar-dinheiro.html",
    resumo: "Vítima de golpe do PIX? Saiba quais medidas judiciais tomar, como pedir indenização ao banco e como agir imediatamente para tentar recuperar o valor perdido. Atendimento online 24h.",
    data: "03/08/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/golpe-do-pix-como-recuperar-dinheiro-advocacia-vera-catarina.jpg",
    destaque: true
  },
  {
    titulo: "Assédio moral no trabalho: como provar e pedir indenização",
    link: "https://veracatarina.adv.br/noticias/assedio-moral-trabalho-provar.html",
    resumo: "Você sofre assédio moral no trabalho? Saiba como provar, quais são seus direitos e como pedir indenização por danos morais. Atendimento online 24h.",
    data: "03/08/2026",
    horario: "14:00",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/assedio-moral-trabalho-provar-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "WhatsApp hackeado: como agir e quais medidas judiciais tomar",
    link: "https://veracatarina.adv.br/noticias/whatsapp-hackeado-como-agir.html",
    resumo: "Seu WhatsApp foi hackeado? Saiba quais medidas imediatas tomar, como registrar boletim de ocorrência, quais ações judiciais cabíveis e como proteger seus dados. Atendimento online 24h.",
    data: "04/08/2026",
    horario: "08:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/whatsapp-hackeado-como-agir-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "🎉 Feliz Aniversário, Dra. Vera Catarina! 40 anos de dedicação à Justiça e à Educação",
    link: "https://veracatarina.adv.br/noticias/feliz-aniversario-dra-vera-catarina.html",
    resumo: "Hoje é um dia especial! Celebramos o aniversário da Dra. Vera Catarina, uma vida dedicada à Justiça e à Educação. Conheça sua história, sua família e os livros de seu filho Fábio Wlademir.",
    data: "04/08/2026",
    horario: "13:00",
    categoria: "institucional",
    categoriaLabel: "🎉 Institucional",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/feliz-aniversario-dra-vera-catarina-familia.jpg",
    destaque: false
  },
  {
    titulo: "Como dar entrada na execução de alimentos: guia completo para o credor",
    link: "https://veracatarina.adv.br/noticias/execucao-de-alimentos-guia-credor.html",
    resumo: "O devedor de pensão alimentícia não pagou? Saiba como dar entrada na execução de alimentos, quais os ritos disponíveis (prisão ou penhora) e como funciona a cumulação de execuções no STJ.",
    data: "05/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/execucao-de-alimentos-guia-credor-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como solicitar aposentadoria por tempo de contribuição: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/aposentadoria-tempo-contribuicao-guia.html",
    resumo: "Como solicitar aposentadoria por tempo de contribuição em 2026? Guia completo com requisitos, documentos, cálculo e orientação jurídica. Atendimento online 24h.",
    data: "05/08/2026",
    horario: "14:00",
    categoria: "direito-previdenciario",
    categoriaLabel: "📜 Direito Previdenciário",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/aposentadoria-tempo-contribuicao-guia-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Execução de alimentos: defesa do executado – quais são seus direitos",
    link: "https://veracatarina.adv.br/noticias/execucao-de-alimentos-defesa.html",
    resumo: "Foi citado em uma execução de alimentos? Saiba quais são seus direitos, como se defender, quais os prazos e como evitar a prisão civil.",
    data: "06/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/execucao-de-alimentos-defesa-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Fraudes bancárias online: como se proteger e pedir indenização",
    link: "https://veracatarina.adv.br/noticias/fraudes-bancarias-indenizacao.html",
    resumo: "Vítima de fraude bancária online? Saiba como se proteger, quais são seus direitos, como pedir indenização ao banco e quais medidas judiciais tomar.",
    data: "06/08/2026",
    horario: "14:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/fraudes-bancarias-indenizacao-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Guarda compartilhada: como funciona na prática e quais os direitos dos pais",
    link: "https://veracatarina.adv.br/noticias/guarda-compartilhada-direitos.html",
    resumo: "A guarda compartilhada é a regra no Brasil. Entenda como funciona na prática, quais os direitos e deveres dos pais e como ela beneficia os filhos.",
    data: "07/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/guarda-compartilhada-direitos-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "O que fazer se seu filho for vítima de cyberbullying ou exposição indevida em Sapucaia do Sul",
    link: "https://veracatarina.adv.br/noticias/cyberbullying-infantil-o-que-fazer-sapucaia.html",
    resumo: "Seu filho sofreu cyberbullying ou teve imagens expostas indevidamente em Sapucaia do Sul? Saiba como agir, quais medidas legais tomar e como proteger seus direitos com base no ECA Digital. Atendimento em Sapucaia do Sul, Canoas, São Leopoldo, Esteio e Porto Alegre.",
    data: "07/08/2026",
    horario: "14:00",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/cyberbullying-infantil-o-que-fazer-sapucaia-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como limpar o nome no SPC em Sapucaia do Sul: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/limpar-nome-spc-sapucaia-do-sul.html",
    resumo: "Seu nome está negativado em Sapucaia do Sul? Saiba como limpar o nome no SPC, quais são seus direitos como consumidor e como pedir indenização por danos morais. Atendimento em Sapucaia do Sul e região.",
    data: "08/08/2026",
    horario: "09:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/limpar-nome-spc-sapucaia-do-sul-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como recuperar dinheiro de golpe do Pix em Sapucaia do Sul: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/golpe-do-pix-sapucaia-do-sul.html",
    resumo: "Vítima de golpe do Pix em Sapucaia do Sul? Saiba quais medidas judiciais tomar, como pedir indenização ao banco e como agir imediatamente para recuperar o valor perdido. Atendimento em Sapucaia do Sul, Canoas, São Leopoldo, Esteio e Porto Alegre.",
    data: "10/08/2026",
    horario: "09:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/golpe-do-pix-sapucaia-do-sul-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir pensão alimentícia em Esteio: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/pensao-alimenticia-esteio.html",
    resumo: "Como pedir pensão alimentícia em Esteio? Entenda quem tem direito, quais documentos reunir, como calcular o valor e quando procurar uma advogada especializada em Esteio e região.",
    data: "10/08/2026",
    horario: "14:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/pensao-alimenticia-esteio-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Advogado criminal em Canoas: o que fazer em caso de prisão",
    link: "https://veracatarina.adv.br/noticias/advogado-criminal-canoas-prisao.html",
    resumo: "Preso em flagrante em Canoas? Saiba quais são seus direitos, como funciona o Habeas Corpus, a audiência de custódia e como contratar um advogado criminal em Canoas e região.",
    data: "11/08/2026",
    horario: "09:00",
    categoria: "direito-criminal",
    categoriaLabel: "⚖️ Direito Criminal",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/advogado-criminal-canoas-prisao-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como limpar o nome em São Leopoldo: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/limpar-nome-sao-leopoldo.html",
    resumo: "Seu nome está negativado em São Leopoldo? Saiba como limpar o nome no SPC e SERASA, quais são seus direitos como consumidor e como pedir indenização por danos morais em São Leopoldo.",
    data: "11/08/2026",
    horario: "14:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/limpar-nome-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir guarda dos filhos em Gravataí: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/guarda-dos-filhos-gravatai.html",
    resumo: "Como pedir guarda dos filhos em Gravataí? Entenda os tipos de guarda, como funciona o processo judicial, quais os direitos dos pais e como garantir o bem-estar das crianças. Atendimento em Gravataí e região.",
    data: "12/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/guarda-dos-filhos-gravatai-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como fazer inventário em Cachoeirinha: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/inventario-cachoeirinha.html",
    resumo: "Como fazer inventário em Cachoeirinha? Entenda como funciona, quais os prazos, documentos necessários e quando contratar um advogado especializado. Atendimento em Cachoeirinha e região.",
    data: "12/08/2026",
    horario: "14:00",
    categoria: "direito-civil",
    categoriaLabel: "🏛️ Direito Civil",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/inventario-cachoeirinha-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Advogado para fraudes bancárias em Porto Alegre: como agir e pedir indenização",
    link: "https://veracatarina.adv.br/noticias/fraudes-bancarias-porto-alegre.html",
    resumo: "Vítima de fraude bancária em Porto Alegre? Saiba como agir, quais medidas judiciais tomar, como pedir indenização ao banco e proteger seus direitos. Atendimento em Porto Alegre e região.",
    data: "13/08/2026",
    horario: "09:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/fraudes-bancarias-porto-alegre-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como solicitar aposentadoria em São Leopoldo: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/aposentadoria-sao-leopoldo.html",
    resumo: "Como solicitar aposentadoria em São Leopoldo em 2026? Guia completo com requisitos, documentos, cálculo e orientação jurídica. Atendimento em São Leopoldo e região.",
    data: "13/08/2026",
    horario: "14:00",
    categoria: "direito-previdenciario",
    categoriaLabel: "📜 Direito Previdenciário",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/aposentadoria-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Assédio moral no trabalho em Canoas: como provar e pedir indenização",
    link: "https://veracatarina.adv.br/noticias/assedio-moral-canoas.html",
    resumo: "Você sofre assédio moral no trabalho em Canoas? Saiba como provar, quais são seus direitos, como pedir indenização por danos morais e como agir legalmente. Atendimento em Canoas e região.",
    data: "14/08/2026",
    horario: "09:00",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/assedio-moral-canoas-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir indenização por erro médico em Sapucaia do Sul: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/erro-medico-sapucaia-do-sul.html",
    resumo: "Vítima de erro médico em Sapucaia do Sul? Saiba como pedir indenização, quais documentos reunir, como comprovar o erro e quais são seus direitos como paciente. Atendimento em Sapucaia do Sul e região.",
    data: "14/08/2026",
    horario: "14:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/erro-medico-sapucaia-do-sul-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como funciona a guarda compartilhada em Esteio: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/guarda-compartilhada-esteio.html",
    resumo: "Como funciona a guarda compartilhada em Esteio? Entenda os direitos dos pais, como funciona na prática e como ela beneficia os filhos. Atendimento em Esteio e região.",
    data: "15/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/guarda-compartilhada-esteio-advocacia-vera-catarina.jpg",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 6: SEMANA READEQUADA (17/08 a 22/08)
  // ==========================================================
  {
    titulo: "Fraudes bancárias online: como pedir indenização",
    link: "https://veracatarina.adv.br/noticias/fraudes-bancarias-online-indenizacao.html",
    resumo: "Vítima de fraude bancária online? Saiba como pedir indenização ao banco, quais documentos reunir, como comprovar o erro e quais são seus direitos como consumidor. Atendimento em Sapucaia do Sul e região.",
    data: "17/08/2026",
    horario: "09:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/fraudes-bancarias-online-indenizacao-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como coletar e preservar provas digitais",
    link: "https://veracatarina.adv.br/noticias/provas-digitais-como-coletar.html",
    resumo: "Aprenda como coletar e preservar provas digitais corretamente para usar em ações judiciais. Guia completo com prints, e-mails, perícia e tudo que a lei exige. Atendimento em Sapucaia do Sul e região.",
    data: "17/08/2026",
    horario: "14:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/provas-digitais-como-coletar-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Vazamento de dados: como pedir indenização",
    link: "https://veracatarina.adv.br/noticias/vazamento-dados-indenizacao.html",
    resumo: "Teve seus dados vazados? Saiba como pedir indenização por danos morais e materiais com base na LGPD. Guia completo com direitos, provas e como agir. Atendimento em Sapucaia do Sul e região.",
    data: "18/08/2026",
    horario: "09:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/vazamento-dados-indenizacao-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir pensão alimentícia em Canoas: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/pensao-alimenticia-canoas.html",
    resumo: "Saiba como pedir pensão alimentícia em Canoas: quem tem direito, como calcular o valor, documentos necessários e como funciona a execução. Atendimento em Canoas e região.",
    data: "18/08/2026",
    horario: "14:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/pensao-alimenticia-canoas-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como limpar o nome em Gravataí: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/limpar-nome-gravatai.html",
    resumo: "Saiba como limpar o nome em Gravataí: quais são seus direitos, como negociar dívidas, como funciona a negativação e como pedir indenização por danos morais. Atendimento em Gravataí e região.",
    data: "19/08/2026",
    horario: "09:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/limpar-nome-gravatai-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Advogado criminal em São Leopoldo: como escolher o melhor",
    link: "https://veracatarina.adv.br/noticias/advogado-criminal-sao-leopoldo.html",
    resumo: "Precisa de um advogado criminal em São Leopoldo? Saiba como escolher o melhor profissional para sua defesa, quais critérios avaliar e como funciona a atuação criminal. Atendimento em São Leopoldo e região.",
    data: "19/08/2026",
    horario: "14:00",
    categoria: "direito-criminal",
    categoriaLabel: "⚖️ Direito Criminal",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/advogado-criminal-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como fazer inventário em Esteio: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/inventario-esteio.html",
    resumo: "Saiba como fazer inventário em Esteio: quais os tipos de inventário, documentos necessários, prazos, custos e como funciona a partilha de bens. Atendimento em Esteio e região.",
    data: "20/08/2026",
    horario: "09:00",
    categoria: "direito-civil",
    categoriaLabel: "🏛️ Direito Civil",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/inventario-esteio-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como recuperar dinheiro de golpe do PIX em Canoas",
    link: "https://veracatarina.adv.br/noticias/recuperar-dinheiro-golpe-pix-canoas.html",
    resumo: "Vítima de golpe do PIX em Canoas? Saiba como recuperar seu dinheiro, quais medidas tomar imediatamente, como acionar o banco e como pedir indenização. Atendimento em Canoas e região.",
    data: "20/08/2026",
    horario: "14:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/recuperar-dinheiro-golpe-pix-canoas-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como solicitar aposentadoria em Gravataí: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/aposentadoria-gravatai.html",
    resumo: "Saiba como solicitar aposentadoria em Gravataí: quais os tipos de aposentadoria, requisitos, documentos necessários, como calcular o valor e como funciona o processo no INSS. Atendimento em Gravataí e região.",
    data: "21/08/2026",
    horario: "09:00",
    categoria: "direito-previdenciario",
    categoriaLabel: "📜 Direito Previdenciário",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/aposentadoria-gravatai-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Assédio moral no trabalho em São Leopoldo: como provar e pedir indenização",
    link: "https://veracatarina.adv.br/noticias/assedio-moral-sao-leopoldo.html",
    resumo: "Vítima de assédio moral no trabalho em São Leopoldo? Saiba como provar, quais são seus direitos, como pedir indenização por danos morais e como agir legalmente. Atendimento em São Leopoldo e região.",
    data: "21/08/2026",
    horario: "14:00",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/assedio-moral-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como funciona a usucapião em Cachoeirinha: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/usucapiao-cachoeirinha.html",
    resumo: "Saiba como funciona a usucapião em Cachoeirinha: requisitos, prazos, documentos necessários, tipos de usucapião e como dar entrada no processo. Atendimento em Cachoeirinha e região.",
    data: "22/08/2026",
    horario: "09:00",
    categoria: "direito-civil",
    categoriaLabel: "🏛️ Direito Civil",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/usucapiao-cachoeirinha-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
  titulo: "Semana Nacional da Pessoa com Deficiência em Sapucaia do Sul: direitos, inclusão e acessibilidade",
  link: "https://veracatarina.adv.br/noticias/semana-nacional-pessoa-deficiencia-sapucaia-do-sul.html",
  resumo: "Saiba quais são os direitos das pessoas com deficiência em Sapucaia do Sul durante a Semana Nacional (21 a 28/08). Conheça a LBI, acessibilidade e como a Dra. Vera Catarina pode ajudar.",
  data: "23/08/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/semana-nacional-pessoa-deficiencia-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},

  // ==========================================================
  //  BLOCO 7: NOVAS POSTAGENS (24/08 a 26/08)
  // ==========================================================
  {
    titulo: "Empresa cobrando dívida indevida em Canoas? Saiba como agir",
    link: "https://veracatarina.adv.br/noticias/divida-indevida-canoas.html",
    resumo: "Recebeu cobrança indevida em Canoas? Saiba como identificar, o que fazer, seus direitos, como pedir indenização por danos morais e como agir legalmente. Atendimento em Canoas e região.",
    data: "24/08/2026",
    horario: "09:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/divida-indevida-canoas-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Advogado para divórcio consensual em São Leopoldo: como escolher",
    link: "https://veracatarina.adv.br/noticias/divorcio-consensual-sao-leopoldo.html",
    resumo: "Precisa de um advogado para divórcio consensual em São Leopoldo? Saiba como escolher, quais os custos, documentos necessários e como funciona o processo. Atendimento em São Leopoldo e região.",
    data: "24/08/2026",
    horario: "14:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/divorcio-consensual-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
  titulo: "O que é capacitismo? Entenda e saiba como combater em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/capacitismo-o-que-e-sapucaia-do-sul.html",
  resumo: "O que é capacitismo? Entenda essa forma de discriminação contra pessoas com deficiência, como ela se manifesta, o que a lei diz e como combater em Sapucaia do Sul. Atendimento da Dra. Vera Catarina.",
  data: "24/08/2026",
  horario: "17:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/capacitismo-o-que-e-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
    titulo: "Quais são os direitos do trabalhador em Esteio: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/direitos-trabalhador-esteio.html",
    resumo: "Conheça os direitos do trabalhador em Esteio: FGTS, férias, 13º salário, horas extras, rescisão, assédio moral e muito mais. Atendimento em Esteio e região.",
    data: "25/08/2026",
    horario: "09:00",
    categoria: "direito-trabalhista",
    categoriaLabel: "📋 Direito Trabalhista",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/direitos-trabalhador-esteio-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir revisão de aposentadoria em Porto Alegre: guia completo",
    link: "https://veracatarina.adv.br/noticias/revisao-aposentadoria-porto-alegre.html",
    resumo: "Seu benefício está menor do que deveria? Saiba como pedir revisão de aposentadoria em Porto Alegre, quais os tipos de revisão, documentos necessários e como aumentar seu benefício. Atendimento em Porto Alegre e região.",
    data: "25/08/2026",
    horario: "14:00",
    categoria: "direito-previdenciario",
    categoriaLabel: "📜 Direito Previdenciário",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/revisao-aposentadoria-porto-alegre-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
  titulo: "Benefício de Prestação Continuada (BPC/LOAS): guia completo para solicitar em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/loas-bpc-guia-completo-sapucaia-do-sul.html",
  resumo: "Saiba como solicitar o Benefício de Prestação Continuada (BPC/LOAS) em Sapucaia do Sul: quem tem direito, documentos, como funciona a avaliação e como dar entrada no pedido. Atendimento da Dra. Vera Catarina.",
  data: "25/08/2026",
  horario: "17:00",
  categoria: "direito-previdenciario",
  categoriaLabel: "📜 Direito Previdenciário",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/loas-bpc-guia-completo-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
    titulo: "Advogado criminal em Cachoeirinha: como escolher e quando procurar",
    link: "https://veracatarina.adv.br/noticias/advogado-criminal-cachoeirinha.html",
    resumo: "Precisa de um advogado criminal em Cachoeirinha? Saiba quando procurar, como escolher o melhor profissional, quais critérios avaliar e como funciona a defesa criminal. Atendimento em Cachoeirinha e região.",
    data: "26/08/2026",
    horario: "09:00",
    categoria: "direito-criminal",
    categoriaLabel: "⚖️ Direito Criminal",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/advogado-criminal-cachoeirinha-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "O que fazer se seu WhatsApp for hackeado em Canoas: guia completo",
    link: "https://veracatarina.adv.br/noticias/whatsapp-hackeado-canoas.html",
    resumo: "Seu WhatsApp foi hackeado em Canoas? Saiba o que fazer imediatamente, como recuperar sua conta, como evitar golpes e quais medidas legais tomar. Atendimento em Canoas e região.",
    data: "26/08/2026",
    horario: "14:00",
    categoria: "direito-digital",
    categoriaLabel: "💻 Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/whatsapp-hackeado-canoas-advocacia-vera-catarina.jpg",
    destaque: false
  },

  // ==========================================================
  //  BLOCO 8: POSTAGENS PENDENTES (27/08 a 31/08)
  // ==========================================================
  {
    titulo: "Como pedir indenização por erro médico em São Leopoldo",
    link: "https://veracatarina.adv.br/noticias/erro-medico-sao-leopoldo.html",
    resumo: "Vítima de erro médico em São Leopoldo? Saiba como pedir indenização, quais documentos reunir, como comprovar o erro e quais são seus direitos. Atendimento em São Leopoldo e região.",
    data: "27/08/2026",
    horario: "09:00",
    categoria: "direito-consumidor",
    categoriaLabel: "🛒 Direito do Consumidor",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/erro-medico-sao-leopoldo-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Advogado para inventário em Porto Alegre: como escolher",
    link: "https://veracatarina.adv.br/noticias/inventario-porto-alegre.html",
    resumo: "Precisa de um advogado para inventário em Porto Alegre? Saiba como escolher, quais os custos, documentos necessários e como funciona o processo. Atendimento em Porto Alegre e região.",
    data: "27/08/2026",
    horario: "14:00",
    categoria: "direito-civil",
    categoriaLabel: "🏛️ Direito Civil",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/inventario-porto-alegre-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como funciona a guarda compartilhada em Esteio: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/guarda-compartilhada-esteio.html",
    resumo: "Saiba como funciona a guarda compartilhada em Esteio: direitos e deveres dos pais, como é definida a guarda, documentos necessários e como pedir. Atendimento em Esteio e região.",
    data: "28/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/guarda-compartilhada-esteio-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir pensão alimentícia em Cachoeirinha: guia completo 2026",
    link: "https://veracatarina.adv.br/noticias/pensao-alimenticia-cachoeirinha.html",
    resumo: "Saiba como pedir pensão alimentícia em Cachoeirinha: quem tem direito, como calcular o valor, documentos necessários e como funciona a execução. Atendimento em Cachoeirinha e região.",
    data: "28/08/2026",
    horario: "14:00",
    categoria: "direito-familia",
    categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/pensao-alimenticia-cachoeirinha-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "ECA Digital: quais são os direitos de crianças e adolescentes na internet?",
    link: "https://veracatarina.adv.br/noticias/eca-digital-direitos-criancas.html",
    resumo: "Saiba quais são os direitos de crianças e adolescentes na internet com base no ECA Digital: proteção de dados, remoção de conteúdo, responsabilidade das plataformas e muito mais.",
    data: "29/08/2026",
    horario: "09:00",
    categoria: "infancia",
    categoriaLabel: "👶 Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/eca-digital-direitos-criancas-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Contrato empresarial: quais cuidados uma empresa deve tomar antes de assinar?",
    link: "https://veracatarina.adv.br/noticias/contrato-empresarial-cuidados.html",
    resumo: "Saiba quais cuidados uma empresa deve tomar antes de assinar um contrato: cláusulas essenciais, riscos, negociação e como evitar problemas jurídicos. Atendimento em toda a região.",
    data: "31/08/2026",
    horario: "09:00",
    categoria: "direito-empresarial",
    categoriaLabel: "🏢 Direito Empresarial",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/contrato-empresarial-cuidados-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
    titulo: "Provas digitais: como preservar mensagens, áudios, imagens e documentos para uso em processo",
    link: "https://veracatarina.adv.br/noticias/provas-digitais-preservar.html",
    resumo: "Aprenda como preservar provas digitais para uso em processos judiciais: mensagens, áudios, imagens, documentos e tudo que a lei exige para validade da prova.",
    data: "31/08/2026",
    horario: "14:00",
    categoria: "provas-digitais",
    categoriaLabel: "🔐 Provas Digitais",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/provas-digitais-preservar-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
  titulo: "Dia Nacional de Luta das Pessoas com Deficiência (21/09): o que a lei garante em Sapucaia do Sul?",
  link: "https://veracatarina.adv.br/noticias/dia-nacional-luta-pessoas-deficiencia-sapucaia-do-sul.html",
  resumo: "Dia Nacional de Luta das Pessoas com Deficiência (21/09): saiba o que a lei garante em Sapucaia do Sul. Conheça a LBI, Setembro Verde e como a Dra. Vera Catarina pode ajudar.",
  data: "21/09/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-nacional-luta-pessoas-deficiencia-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Nacional do Surdo: a importância da Libras para a inclusão em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-nacional-surdo-libras-sapucaia-do-sul.html",
  resumo: "Dia Nacional do Surdo (26/09): saiba a importância da Libras para a inclusão em Sapucaia do Sul. Conheça os direitos da pessoa surda, a Lei de Libras e como solicitar o LOAS/BPC. Atendimento da Dra. Vera Catarina.",
  data: "26/09/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-nacional-surdo-libras-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Nacional da Pessoa com Deficiência Física: direitos, acessibilidade e LOAS em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-deficiencia-fisica-sapucaia-do-sul.html",
  resumo: "Dia Nacional da Pessoa com Deficiência Física (11/10): saiba quais são os direitos, acessibilidade em Sapucaia do Sul e como solicitar o LOAS/BPC. Atendimento da Dra. Vera Catarina.",
  data: "11/10/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-deficiencia-fisica-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Internacional da Pessoa com Deficiência: direitos, acessibilidade e inclusão em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-internacional-pessoa-deficiencia-sapucaia-do-sul.html",
  resumo: "Dia Internacional da Pessoa com Deficiência (03/12): saiba quais são os direitos garantidos pela LBI, como funciona a acessibilidade em Sapucaia do Sul e como solicitar o LOAS/BPC. Atendimento da Dra. Vera Catarina.",
  data: "03/12/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-internacional-pessoa-deficiencia-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Nacional da Pessoa com Deficiência Visual: acessibilidade e direitos em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-deficiencia-visual-sapucaia-do-sul.html",
  resumo: "Dia Nacional da Pessoa com Deficiência Visual (13/12): saiba quais são os direitos, acessibilidade em Sapucaia do Sul e como solicitar o LOAS/BPC. Atendimento da Dra. Vera Catarina.",
  data: "13/12/2026",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-deficiencia-visual-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Internacional da Síndrome de Down: inclusão, afeto e direitos em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-sindrome-down-sapucaia-do-sul.html",
  resumo: "Dia Internacional da Síndrome de Down (21/03): saiba quais são os direitos, a inclusão em Sapucaia do Sul, como solicitar o LOAS/BPC e conheça a história da Dra. Vera Catarina e sua filha Fabrícia.",
  data: "21/03/2027",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-sindrome-down-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Mundial de Conscientização do Autismo: direitos e LOAS em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-autismo-sapucaia-do-sul.html",
  resumo: "Dia Mundial de Conscientização do Autismo (02/04): saiba quais são os direitos da pessoa com Transtorno do Espectro Autista (TEA), como solicitar o LOAS/BPC em Sapucaia do Sul e como a Dra. Vera Catarina pode ajudar.",
  data: "02/04/2027",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-autismo-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
},
  {
  titulo: "Dia Nacional da Deficiência Intelectual: direitos e inclusão em Sapucaia do Sul",
  link: "https://veracatarina.adv.br/noticias/dia-deficiencia-intelectual-sapucaia-do-sul.html",
  resumo: "Dia Nacional da Deficiência Intelectual (22/04): saiba quais são os direitos, a inclusão em Sapucaia do Sul e como solicitar o LOAS/BPC. Atendimento da Dra. Vera Catarina.",
  data: "22/04/2027",
  horario: "09:00",
  categoria: "direito-civil",
  categoriaLabel: "🏛️ Direito Civil",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/dia-deficiencia-intelectual-sapucaia-do-sul-advocacia-vera-catarina.jpg",
  destaque: false
}
];

// ==========================================================
//  NÃO MODIFICAR A LINHA ABAIXO (exportação)
// ==========================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = posts;
}
// ==========================================================
//  TEMPLATE PARA NOVAS POSTAGENS (COPIAR E COLAR)
//  Remova os comentários /* e */ quando for usar
// ==========================================================
/*
{
  titulo: "Título da postagem",
  link: "https://veracatarina.github.io/noticias/slug-da-postagem.html",
  resumo: "Resumo da postagem...",
  data: "DD/MM/AAAA",
  horario: "HH:MM",
  categoria: "direito-digital",
  categoriaLabel: "💻 Direito Digital",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/nome-da-imagem.jpg",
  destaque: false
},
{
  titulo: "Outro título",
  link: "https://veracatarina.github.io/noticias/outro-slug.html",
  resumo: "Outro resumo...",
  data: "DD/MM/AAAA",
  horario: "HH:MM",
  categoria: "direito-familia",
  categoriaLabel: "👨‍👩‍👧‍👦 Direito de Família",
  imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/outra-imagem.jpg",
  destaque: false
}
*/
// ==========================================================
//  CATEGORIAS DISPONÍVEIS:
//  direito-digital, direito-criminal, direito-familia,
//  direito-trabalhista, direito-consumidor, direitos-cidadao,
//  infancia, direito-previdenciario, direito-empresarial,
//  direito-civil, provas-digitais, correspondente, institucional
// ==========================================================
