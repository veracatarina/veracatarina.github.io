// ==========================================================
//  POSTS (dados das notícias) - CENTRALIZADO
//  Arquivo: /dados/posts.js
//  Carregado por: noticias.html e arquivo.html
// ==========================================================

// ==========================================================
//  TEMPLATE PARA NOVAS POSTAGENS (COPIAR E COLAR)
//  Remova os comentários /* e */ quando for usar
//  ==========================================================
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

const posts = [
  // ===== ARTIGOS DO SITE =====
  {
    titulo: "Crimes contra crianças e adolescentes: O que a lei prevê e como agir em qualquer ambiente",
    link: "https://veracatarina.github.io/noticias/crimes-contra-criancas-adolescentes.html",
    resumo: "Violência, abuso, exploração, assédio virtual e negligência são crimes graves. Conheça as medidas protetivas e como buscar justiça.",
    data: "31/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/crimes-contra-criancas-adolescentes-responsabilidade-defesa.png",
    destaque: false
  },
  {
    titulo: "LGPD e ECA Digital: A privacidade de crianças e adolescentes tem regras próprias e mais rigorosas",
    link: "https://veracatarina.github.io/noticias/lgpd-eca-digital-privacidade.html",
    resumo: "A LGPD e o ECA Digital estabelecem regras rigorosas para a coleta e uso de dados de menores. Famílias têm direito a exigir exclusão e reparação.",
    data: "30/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lgpd-eca-digital-privacidade-criancas-adolescentes.png",
    destaque: false
  },
  {
    titulo: "ECA Digital: Como a nova lei protege crianças e adolescentes na internet",
    link: "https://veracatarina.github.io/noticias/eca-digital-crimes-virtuais-protecao.html",
    resumo: "O ECA Digital define regras para redes sociais, jogos e aplicativos, protegendo menores contra assédio, exposição indevida e crimes virtuais. Saiba mais.",
    data: "29/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lei-eca-digital-protecao-criancas-adolescentes-internet.png",
    destaque: false
  },
  {
    titulo: "ECA: O que diz a lei que protege crianças e adolescentes em todas as situações",
    link: "https://veracatarina.github.io/noticias/eca-direitos-basicos-protecao.html",
    resumo: "O ECA assegura direitos fundamentais como vida, saúde, educação, convivência familiar e proteção contra violência. Conheça como essa lei é aplicada na prática.",
    data: "28/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/lei-eca-protecao-criancas-adolescentes-situacoes.png",
    destaque: false
  },
  {
    titulo: "Marco Legal da Primeira Infância: Proteção integrada para os primeiros anos de vida – de 0 a 6 anos",
    link: "https://veracatarina.github.io/noticias/marco-legal-primeira-infancia.html",
    resumo: "A Lei 13.257/2016 estabelece políticas integradas para crianças de 0 a 6 anos, ampliando a proteção do ECA e garantindo desenvolvimento pleno.",
    data: "27/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/marco-legal-primeira-infancia-lei-13257-2016-0-6-anos.png",
    destaque: false
  },
  {
    titulo: "Proteção integral: Conheça o ECA e o novo ECA Digital – Seus direitos garantidos, dentro e fora da internet",
    link: "https://veracatarina.github.io/noticias/protecao-integral-eca-eca-digital.html",
    resumo: "O Estatuto da Criança e do Adolescente (ECA) e o ECA Digital (Lei 15.211/2025) garantem proteção integral a crianças e adolescentes, dentro e fora da internet. Conheça seus direitos.",
    data: "24/07/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/protecao-integral-eca-eca-digital-direitos-garantidos.png",
    destaque: false
  },
  {
    titulo: "Site agora com recursos de acessibilidade",
    link: "https://veracatarina.github.io/noticias/site-agora-acessivel.html",
    resumo: "Conheça os recursos de acessibilidade do portal da Dra. Vera Catarina: modo escuro, alto contraste, VLibras, fonte para dislexia e muito mais.",
    data: "21/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/acessibilidade-digital-inclusao.webp",
    destaque: false
  },
  {
    titulo: "Site adequado à LGPD, Acessibilidade e OAB",
    link: "https://veracatarina.github.io/noticias/site-lgpd-acessibilidade-oab.html",
    resumo: "O portal foi reformulado para atender à LGPD, às diretrizes de acessibilidade digital (WCAG 2.2, eMAG, LBI) e ao Provimento 205/2021 da OAB.",
    data: "19/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/site-lgpd-acessibilidade-oab.jpg",
    destaque: false
  },
  {
    titulo: "Direito ao Esquecimento: Case Acadêmico Premiado – Análise do RE 1.010.606/STF",
    link: "https://veracatarina.github.io/noticias/direito-ao-esquecimento-case-academico-premiado.html",
    resumo: "Trabalho interdisciplinar com Kelsen, Dworkin e Bobbio sobre o Caso Aída Curi. Nota máxima na UNISINOS.",
    data: "18/07/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/direito-ao-esquecimento.jpg",
    destaque: false
  },
  {
    titulo: "Como pedir Pensão Alimentícia em Sapucaia do Sul? Passo a passo completo",
    link: "https://veracatarina.github.io/noticias/como-pedir-pensao-alimenticia.html",
    resumo: "Entenda quem tem direito à pensão, quais documentos reunir, como calcular o valor e quando procurar uma advogada especializada.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/pensao-alimenticia-guia.jpg",
    destaque: false
  },
  {
    titulo: "LGPD: Entenda a Lei Geral de Proteção de Dados e sua Importância para a Segurança Online",
    link: "https://veracatarina.github.io/noticias/lgpd-entenda-lei-geral-protecao-dados.html",
    resumo: "A Lei Geral de Proteção de Dados (LGPD) é uma legislação brasileira que visa proteger os direitos fundamentais das pessoas em relação ao tratamento de seus dados pessoais.",
    data: "05/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/lgpd-protecao-dados.jpg",
    destaque: false
  },
  {
    titulo: "Crimes Virtuais: Entenda Calúnia, Difamação e Injúria nas Redes Sociais",
    link: "https://veracatarina.github.io/noticias/crimes-virtuais-calunia-difamacao-injuria.html",
    resumo: "As redes sociais se tornaram um espaço onde a liberdade de expressão pode ser usada de forma indevida, dando origem a crimes contra a honra.",
    data: "18/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/crimes-virtuais-calunia-difamacao.jpg",
    destaque: false
  },
  {
    titulo: "🌐 MARCO CIVIL DA INTERNET: Seus Direitos Digitais e Proteção na Rede!",
    link: "https://veracatarina.github.io/noticias/marco-civil-internet-direitos-digitais.html",
    resumo: "O Marco Civil da Internet (Lei nº 12.965/2014) estabelece princípios, garantias, direitos e deveres para o uso da internet no Brasil.",
    data: "19/07/2025",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/marco-civil-internet.jpg",
    destaque: false
  },
  {
    titulo: "Perseguição Digital: 5 Anos da Lei do Stalking e a Importância da Prova Pericial",
    link: "https://veracatarina.github.io/noticias/perseguicao-digital-stalking-prova-pericial.html",
    resumo: "O stalking (perseguição obsessiva) é crime grave no Brasil. A Lei 14.132/2021 completa cinco anos em 2026.",
    data: "31/03/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/stalking-prova-pericial.jpg",
    destaque: false
  },
  // ===== ARTIGOS DO BLOGGER =====
  {
    titulo: "Proteja-se: Denunciando Crimes na Internet com o Auxílio de um Advogado Especializado",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/proteja-se-denunciando-crimes-na.html",
    resumo: "A internet é um espaço fértil para crimes e abusos. Se você está sendo vítima, é fundamental buscar ajuda de um advogado especializado.",
    data: "16/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Crimes nas Redes Sociais: Como se Proteger e Buscar Justiça | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/crimes-nas-redes-sociais-como-se.html",
    resumo: "Cyberbullying, fake news, vingança pornográfica e golpes virtuais são perigos nas redes sociais. Conhecer seus direitos é o primeiro passo.",
    data: "19/06/2025",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "ECA Digital: A Lei que as Plataformas Não Podem Mais Ignorar",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/eca-digital-lei-que-as-plataformas-nao.html",
    resumo: "A Lei 15.211/2025 (ECA Digital) entrou em vigor em março de 2026. Redes sociais, jogos e aplicativos são obrigados a proteger crianças e adolescentes.",
    data: "13/04/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "5 Direitos Digitais que Todo Usuário da Internet Precisa Conhecer",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/5-direitos-digitais-que-todo-usuario-da.html",
    resumo: "Do Marco Civil de 2014 à realidade de 2026: o que mudou, o que permanece e o que você ainda pode exigir.",
    data: "09/04/2026",
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "",
    destaque: false
  },
  {
    titulo: "LBI | Lei Brasileira de Inclusão, download",
    link: "https://advocaciasapucaia.blogspot.com/2015/09/lbi-lei-brasileira-de-inclusao-download.html",
    resumo: "A Lei Brasileira de Inclusão (LBI) - nº 13.146/2015 - promove o exercício dos direitos e liberdades fundamentais pelas pessoas com deficiência.",
    data: "19/02/2015",
    categoria: "direitos-cidadao",
    categoriaLabel: "Direitos do Cidadão",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Advocacia Criminal em Sapucaia: Defesa Especializada | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/advocacia-criminal-em-sapucaia-defesa.html",
    resumo: "Defesa criminal especializada com atuação estratégica e presença imediata: assistência em prisões, tráfico de drogas, crimes de trânsito, Lei Maria da Penha e Habeas Corpus.",
    data: "05/06/2025",
    categoria: "direito-criminal",
    categoriaLabel: "Direito Criminal",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Defesa em Casos de Caça-Níquel, Jogo do Bicho e Máquinas de Ursinho | Dra. Vera Catarina",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/defesa-em-casos-de-caca-niquel-jogo-do.html",
    resumo: "Defesa contra acusações criminais por operação de jogos ilegais. Atuação para reconhecimento da legalidade de máquinas lúdicas.",
    data: "10/06/2025",
    categoria: "direito-criminal",
    categoriaLabel: "Direito Criminal",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Busca e Apreensão de Veículos? Saiba Como Evitar e Reverter | Advogado Especializado",
    link: "https://advocaciasapucaia.blogspot.com/2025/06/busca-e-apreensao-de-veiculos-saiba.html",
    resumo: "Apreensão do veículo pode trazer prejuízos financeiros. Saiba como suspender a ordem de apreensão, negociar com bancos e recuperar o veículo.",
    data: "17/06/2025",
    categoria: "direito-consumidor",
    categoriaLabel: "Direito do Consumidor",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Direito Trabalhista: Defender Seus Direitos é Valorizar Sua História de Trabalho",
    link: "https://advocaciasapucaia.blogspot.com/2016/10/direito-trabalhista-defenda-seus.html",
    resumo: "Assédio moral, desvio de função, horas extras não pagas, justa causa injusta e acidente de trabalho. Saiba como a lei protege você.",
    data: "15/04/2016",
    categoria: "direito-trabalhista",
    categoriaLabel: "Direito Trabalhista",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Pejotização e Novas Formas de Trabalho: Desafios Éticos e Jurídicos em 2026",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/pejotizacao-e-novas-formas-de-trabalho.html",
    resumo: "A pejotização e a 'falsa autonomia' continuam sendo pontos de atenção no Direito do Trabalho. Atuação tanto na defesa de trabalhadores quanto na consultoria a empresas.",
    data: "10/04/2026",
    categoria: "direito-trabalhista",
    categoriaLabel: "Direito Trabalhista",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Planejamento Sucessório e o Protocolo Familiar: Protegendo o Patrimônio e a Harmonia",
    link: "https://advocaciasapucaia.blogspot.com/2026/04/planejamento-sucessorio-e-o-protocolo.html",
    resumo: "Planejamento sucessório e Protocolo Familiar cresceram em 2026. Famílias buscam evitar a morosidade e o custo emocional de inventários judiciais complexos.",
    data: "08/04/2026",
    categoria: "direito-familia",
    categoriaLabel: "Direito de Família",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Separação Consensual x Litigiosa: Qual a melhor saída?",
    link: "https://advocaciasapucaia.blogspot.com/2026/07/separacao-consensual-x-litigiosa-qual.html",
    resumo: "Conheça as diferenças entre separação consensual e litigiosa, os custos envolvidos, o tempo de duração e saiba qual caminho é mais adequado para o seu caso.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "Direito de Família",
    imagem: "",
    destaque: false
  },
  {
    titulo: "Inventário e Usucapião em Sapucaia do Sul: Regularize seu imóvel",
    link: "https://advocaciasapucaia.blogspot.com/2026/07/inventario-e-usucapiao-em-sapucaia-do.html",
    resumo: "Seja para transferir um patrimônio após um falecimento ou para regularizar um imóvel sem escritura, o Direito Imobiliário oferece soluções com quem tem 40 anos de experiência.",
    data: "15/07/2026",
    categoria: "direito-familia",
    categoriaLabel: "Direito de Família",
    imagem: "",
    destaque: false
  },
  // ===== POSTAGENS FUTURAS =====
  {
    titulo: "ECA nas relações familiares: Guarda, convivência e pensão sempre com foco no desenvolvimento saudável",
    link: "https://veracatarina.github.io/noticias/eca-relacoes-familiares-guarda-pensao.html",
    resumo: "Em disputas de guarda, visitas e pensão, o ECA exige que o interesse superior da criança seja prioridade. Saiba como a lei protege o vínculo familiar.",
    data: "01/08/2026",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/eca-relacoes-familiares-guarda-convivencia-pensao.png",
    destaque: false
  },

  // ==========================================================
  //  NOVAS POSTAGENS (COM HORÁRIO)
  // ==========================================================
 {
    titulo: "Situações urgentes envolvendo crianças e adolescentes: Conte com atendimento imediato",
    link: "https://veracatarina.github.io/noticias/atendimento-24h-urgente-criancas.html",
    resumo: "Violações de direitos de menores exigem providências rápidas. Conte com atendimento online 24h por WhatsApp para medidas protetivas e remoção de conteúdo.",
    data: "02/08/2026",
    horario: "08:00",
    categoria: "infancia",
    categoriaLabel: "Infância e Juventude",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/atendimento-24h-urgente-criancas-adolescentes.png",
    destaque: false
  },
  {
  titulo: "Como limpar o nome no SPC e SERASA mesmo com dívidas: guia completo 2026",
  link: "https://veracatarina.github.io/noticias/limpar-nome-spc-serasa-guia.html",
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
    link: "https://veracatarina.github.io/noticias/golpe-do-pix-como-recuperar-dinheiro.html",
    resumo: "Vítima de golpe do PIX? Saiba quais medidas judiciais tomar, como pedir indenização ao banco e como agir imediatamente para tentar recuperar o valor perdido. Atendimento online 24h.",
    data: "03/08/2026",
    horario: "08:00",    
    categoria: "direito-digital",
    categoriaLabel: "Direito Digital",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/golpe-do-pix-como-recuperar-dinheiro-advocacia-vera-catarina.jpg",
    destaque: true
  },
  {
  titulo: "Assédio moral no trabalho: como provar e pedir indenização",
  link: "https://veracatarina.github.io/noticias/assedio-moral-trabalho-provar.html",
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
    link: "https://veracatarina.github.io/noticias/whatsapp-hackeado-como-agir.html",
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
    link: "https://veracatarina.github.io/noticias/feliz-aniversario-dra-vera-catarina.html",
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
    link: "https://veracatarina.github.io/noticias/execucao-de-alimentos-guia-credor.html",
    resumo: "O devedor de pensão alimentícia não pagou? Saiba como dar entrada na execução de alimentos, quais os ritos disponíveis (prisão ou penhora) e como funciona a cumulação de execuções no STJ.",
    data: "05/08/2026",
    horario: "09:00",
    categoria: "direito-familia",
    categoriaLabel: "Direito de Família",
    imagem: "https://raw.githubusercontent.com/veracatarina/veracatarina.github.io/main/noticias/imagens/execucao-de-alimentos-guia-credor-advocacia-vera-catarina.jpg",
    destaque: false
  },
  {
  titulo: "Como solicitar aposentadoria por tempo de contribuição: guia completo 2026",
  link: "https://veracatarina.github.io/noticias/aposentadoria-tempo-contribuicao-guia.html",
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
  link: "https://veracatarina.github.io/noticias/execucao-de-alimentos-defesa.html",
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
  link: "https://veracatarina.github.io/noticias/fraudes-bancarias-indenizacao.html",
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
  link: "https://veracatarina.github.io/noticias/guarda-compartilhada-direitos.html",
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
}
];

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
