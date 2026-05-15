export type Lang = "pt" | "en" | "fr" | "de" | "it" | "ar";

export interface Translations {
  dir: "ltr" | "rtl";
  nav: {
    product: string;
    company: string;
    projects: string;
    hideSubnav: string;
  };
  mode: {
    bathroom: string;
    health: string;
    label: string;
  };
  cta: {
    waiting: string;
    pilot: string;
    noPayment: string;
  };
  hero: {
    eyebrow: string;
    line1: string;
    line2: string;
    line3: string;
    sub1: string;
    sub2: string;
    sub3: string;
    feat1: string;
    feat2: string;
    feat3: string;
    feat4: string;
  };
  health: {
    badge: string;
    h1a: string;
    h1b: string;
    h1c: string;
    desc: string;
    brand: string;
    cta1: string;
    cta2: string;
    statWaterLabel: string;
    statMonitorLabel: string;
    statFlushLabel: string;
    deviceTitle: string;
    deviceTap: string;
    deviceHydration: string;
    deviceHydrationVal: string;
    deviceBiomarkers: string;
    deviceBiomarkersVal: string;
    deviceScore: string;
    badgeEco: string;
    badgeEcoVal: string;
    badgeHealth: string;
    badgeHealthVal: string;
    tabProduct: string;
    tabScience: string;
    tabForWho: string;
    productTitle: string;
    productDesc: string;
    tabBiosensing: string;
    tabAI: string;
    pilotBanner: string;
    pilotBannerSub: string;
    scienceTitle: string;
    scienceDesc: string;
    forwhoTitle: string;
    forwhoDesc: string;
    appModalTitle: string;
    appModalDesc: string;
    appModalSub: string;
    appNotify: string;
    appThanks: string;
    appThanksDesc: string;
    pilotModalTitle: string;
    pilotInstitution: string;
    pilotContact: string;
    pilotEmail: string;
    pilotCountry: string;
    pilotType: string;
    pilotTypeHospital: string;
    pilotTypeClinic: string;
    pilotTypeResearch: string;
    pilotTypeUniversity: string;
    pilotTypeWellness: string;
    pilotSubmit: string;
    pilotSent: string;
    pilotSentDesc: string;
    demoTitle: string;
    demoDesc: string;
    demoSub: string;
    demoCta: string;
    aiFlowTitle: string;
    aiStep1: string;
    aiStep2: string;
    aiStep3: string;
    aiStep4: string;
    aiStep5: string;
    hostPilot: string;
  };
  float: {
    client: string;
    partners: string;
    investors: string;
    contacts: string;
    clientTitle: string;
    clientDesc: string;
    clientNome: string;
    clientNumero: string;
    clientNomePlaceholder: string;
    clientNumeroPlaceholder: string;
    clientEnter: string;
    clientErrorTitle: string;
    clientErrorDesc: string;
    clientErrorCta: string;
    clientRetry: string;
    clientSupport: string;
    clientSupportNome: string;
    clientSupportEmail: string;
    clientSupportNumero: string;
    clientSupportMsg: string;
    clientSupportSubmit: string;
    clientSupportSent: string;
    clientSupportSentDesc: string;
    partnersTitle: string;
    partnersIntro: string;
    partnersBullet1: string;
    partnersBullet2: string;
    partnersBullet3: string;
    partnersBullet4: string;
    partnersCategoriesLabel: string;
    partnersProposeBtn: string;
    partnersEmpresa: string;
    partnersWebsite: string;
    partnersPais: string;
    partnersArea: string;
    partnersMensagem: string;
    partnersEmpresaPlaceholder: string;
    partnersPaisPlaceholder: string;
    partnersAreaPlaceholder: string;
    partnersMensagemPlaceholder: string;
    investorsTitle: string;
    investorsDesc: string;
    investorsNome: string;
    investorsEmpresa: string;
    investorsEmail: string;
    investorsTelefone: string;
    investorsArea: string;
    investorsMensagem: string;
    investorsNomePlaceholder: string;
    investorsEmpresaPlaceholder: string;
    investorsEmailPlaceholder: string;
    investorsTelefonePlaceholder: string;
    investorsAreaPlaceholder: string;
    investorsMensagemPlaceholder: string;
    investorsSubmit: string;
    investorsSent: string;
    investorsSentDesc: string;
    contactsTitle: string;
    contactsDesc: string;
    contactsNome: string;
    contactsEmail: string;
    contactsAssunto: string;
    contactsMensagem: string;
    contactsNomePlaceholder: string;
    contactsEmailPlaceholder: string;
    contactsAssuntoPlaceholder: string;
    contactsMensagemPlaceholder: string;
    contactsOpt1: string;
    contactsOpt2: string;
    contactsOpt3: string;
    contactsOpt4: string;
    contactsOpt5: string;
    contactsSubmit: string;
    contactsSent: string;
    contactsSentDesc: string;
    workWithUs: string;
    workWithUsTitle: string;
    workWithUsIntro: string;
    workWithUsOpenLabel: string;
    workWithUsApply: string;
    workWithUsSpontLabel: string;
    workWithUsNome: string;
    workWithUsEmail: string;
    workWithUsArea: string;
    workWithUsAreaOpt1: string;
    workWithUsAreaOpt2: string;
    workWithUsAreaOpt3: string;
    workWithUsAreaOpt4: string;
    workWithUsAreaOpt5: string;
    workWithUsMsg: string;
    workWithUsMsgPlaceholder: string;
    workWithUsLinkedin: string;
    workWithUsLinkedinPlaceholder: string;
    workWithUsSubmit: string;
    workWithUsSent: string;
    workWithUsSentDesc: string;
    workWithUsApplyingTo: string;
    investorsHighlight1: string;
    investorsHighlight2: string;
    investorsHighlight3: string;
    investorsHighlight4: string;
    partnersCat1: string;
    partnersCat2: string;
    partnersCat3: string;
    partnersCat4: string;
    partnersCat5: string;
    partnersCat6: string;
  };
  productPage: {
    tab1: string; tab2: string; tab3: string; tab4: string;
  };
  companyPage: {
    tab1: string; tab2: string; tab3: string;
  };
  projectsPage: {
    tab1: string; tab2: string; tab3: string;
  };
  product: {
    techTitle: string; techDesc: string;
    tech1Title: string; tech1Desc: string; tech1p1: string; tech1p2: string; tech1p3: string;
    tech2Title: string; tech2Desc: string; tech2p1: string; tech2p2: string; tech2p3: string;
    tech3Title: string; tech3Desc: string; tech3p1: string; tech3p2: string; tech3p3: string;
    tech4Title: string; tech4Desc: string; tech4p1: string; tech4p2: string; tech4p3: string;
    sheetTitle: string; sheetDesc: string; sheetDrawing: string;
    specDim: string; specVolt: string; specWater: string; specDrain: string;
    specSensor: string; specWifi: string; specWeight: string; specIp: string;
    sheetDownload: string; sheetVersion: string;
    safetyTitle: string; safetyDesc: string; safetyNote: string;
    safe1Title: string; safe1Desc: string; safe1p1: string; safe1p2: string; safe1p3: string;
    safe2Title: string; safe2Desc: string; safe2p1: string; safe2p2: string; safe2p3: string;
    safe3Title: string; safe3Desc: string; safe3p1: string; safe3p2: string; safe3p3: string;
    safe4Title: string; safe4Desc: string; safe4p1: string; safe4p2: string; safe4p3: string;
    stagesTitle: string; stagesDesc: string; inProgress: string;
    stage1: string; stage1d: string; stage2: string; stage2d: string;
    stage3: string; stage3d: string; stage4: string; stage4d: string; stage5: string; stage5d: string;
  };
  company: {
    missionTitle: string; missionP1: string; missionP2: string;
    val1Title: string; val1Desc: string;
    val2Title: string; val2Desc: string;
    val3Title: string; val3Desc: string;
    quote: string; quoteAttr: string;
    foundersLabel: string; foundersIntro: string;
    rdLabel: string; rdIntro: string;
    certsTitle: string; certsDesc: string;
    cert1Title: string; cert1Desc: string;
    cert2Title: string; cert2Desc: string;
    cert3Title: string; cert3Desc: string;
    cert4Title: string; cert4Desc: string;
  };
  projects: {
    consortTitle: string; consortDesc: string; roleLabel: string;
    proj1Desc: string; proj1Role: string;
    proj2Desc: string; proj2Role: string;
    proj3Desc: string; proj3Role: string;
    partnersTitle: string; partnersDesc: string;
    affiliationsTitle: string; affiliationsDesc: string;
    aff1Desc: string; aff2Desc: string; aff3Desc: string;
    aff4Desc: string; aff5Desc: string; aff6Desc: string;
  };
}

export const translations: Record<Lang, Translations> = {
  pt: {
    dir: "ltr",
    nav: { product: "Produto", company: "Empresa", projects: "Projetos", hideSubnav: "Ocultar subnavegação" },
    mode: { bathroom: "Bathroom", health: "Health", label: "mode" },
    cta: { waiting: "Join the Waiting List", pilot: "Apply for a Pilot", noPayment: "Sem pagamento inicial" },
    hero: {
      eyebrow: "Plataforma de Saneamento Inteligente",
      line1: "Um design único", line2: "reinventou a sanita", line3: "",
      sub1: "escondida ou com estética única", sub2: "— um equipamento à sua imagem —", sub3: "",
      feat1: "Lavagem 100% autónoma", feat2: "Limpeza integral: bacia e assento",
      feat3: "Recorde de poupança de água <1L", feat4: "",
    },
    health: {
      badge: "Inovação Portuguesa",
      h1a: "A Sanita que", h1b: "Analisa", h1c: "a Sua Saúde",
      desc: "a primeira sanita inteligente do mundo que realiza análises de urina não invasivas, economizando",
      brand: "ablute_",
      cta1: "Quero Saber Mais", cta2: "Ver Demo",
      statWaterLabel: "Economia de Água", statMonitorLabel: "Monitoramento", statFlushLabel: "Por Descarga",
      deviceTitle: "Sanita Inteligente", deviceTap: "Toque para saber mais",
      deviceHydration: "Hidratação", deviceHydrationVal: "Ótima",
      deviceBiomarkers: "Biomarcadores", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Eco-friendly", badgeEcoVal: "100% Sustentável",
      badgeHealth: "Saúde", badgeHealthVal: "Análise em Tempo Real",
      tabProduct: "Produto", tabScience: "Ciência", tabForWho: "Para Quem",
      productTitle: "Tecnologia ablute_", productDesc: "A plataforma que transforma o WC numa interface de saúde preventiva.",
      tabBiosensing: "Biossensores & Métodos", tabAI: "Inteligência Artificial",
      pilotBanner: "Interessado em validar a tecnologia?", pilotBannerSub: "Junte-se ao programa piloto e seja dos primeiros a testar a plataforma.",
      scienceTitle: "Base Científica", scienceDesc: "Metodologia clínica validada e investigação de ponta.",
      forwhoTitle: "Para Quem é a ablute_?", forwhoDesc: "Soluções adaptadas a diferentes contextos e necessidades.",
      appModalTitle: "Aplicação ablute_", appModalDesc: "A aplicação ainda não está disponível.", appModalSub: "Deixe o seu email para ser notificado quando estiver disponível.",
      appNotify: "Notifique-me", appThanks: "Obrigado!", appThanksDesc: "Será notificado quando a aplicação estiver disponível.",
      pilotModalTitle: "Host a Pilot", pilotInstitution: "Nome da Instituição", pilotContact: "Pessoa de Contacto",
      pilotEmail: "Email", pilotCountry: "País", pilotType: "Tipo de Instituição",
      pilotTypeHospital: "Hospital", pilotTypeClinic: "Clínica", pilotTypeResearch: "Centro de Investigação",
      pilotTypeUniversity: "Universidade", pilotTypeWellness: "Centro de Bem-estar",
      pilotSubmit: "Submeter Candidatura", pilotSent: "Candidatura enviada!", pilotSentDesc: "Entraremos em contacto em breve.",
      demoTitle: "Ver Demo", demoDesc: "Demo em breve disponível.", demoSub: "Estamos a preparar uma demonstração interativa da plataforma ablute_.",
      demoCta: "Candidatar-se a Piloto",
      aiFlowTitle: "Do Sinal ao Insight de Saúde",
      aiStep1: "Sinal Bioquímico", aiStep2: "Processamento", aiStep3: "Modelo AI", aiStep4: "Insight Pessoal", aiStep5: "Ação Preventiva",
      hostPilot: "Host a Pilot",
    },
    float: {
      client: "Área Cliente", partners: "Parceiros e Fornecedores", investors: "Investidores", contacts: "Contactos",
      clientTitle: "Área Cliente", clientDesc: "Acesso reservado a clientes ablute_.",
      clientNome: "Nome", clientNumero: "Nº de Cliente ou Contrato",
      clientNomePlaceholder: "O seu nome", clientNumeroPlaceholder: "ex. CLI-00123", clientEnter: "Entrar",
      clientErrorTitle: "Nº cliente ou contrato inválido.", clientErrorDesc: "Esta área é reservada a clientes existentes.\nSe julga que existe algum problema com o seu login, envie-nos uma mensagem.",
      clientErrorCta: "Pedir Apoio Técnico", clientRetry: "Tentar novamente", clientSupport: "Pedir Apoio Técnico",
      clientSupportNome: "Nome", clientSupportEmail: "Email", clientSupportNumero: "Nº de Cliente ou Contrato",
      clientSupportMsg: "Mensagem", clientSupportSubmit: "Enviar pedido de apoio",
      clientSupportSent: "A sua mensagem foi enviada.", clientSupportSentDesc: "A nossa equipa entrará em contacto consigo brevemente.",
      partnersTitle: "Parcerias Tecnológicas e Industriais",
      partnersIntro: "ablute_ desenvolve a sua tecnologia em colaboração com parceiros industriais, fornecedores especializados e empresas tecnológicas.",
      partnersBullet1: "desenvolvimento tecnológico", partnersBullet2: "integração de sistemas",
      partnersBullet3: "produção industrial", partnersBullet4: "fornecimento de componentes especializados",
      partnersCategoriesLabel: "Categorias", partnersProposeBtn: "Propor Parceria",
      partnersEmpresa: "Nome da empresa", partnersWebsite: "Website", partnersPais: "País", partnersArea: "Área de especialização", partnersMensagem: "Mensagem",
      partnersEmpresaPlaceholder: "Empresa, S.A.", partnersPaisPlaceholder: "Portugal",
      partnersAreaPlaceholder: "ex. Sensores MEMS", partnersMensagemPlaceholder: "Descreva a proposta de colaboração...",
      investorsTitle: "Investidores",
      investorsDesc: "Investir na ablute_\né investir na evolução de um produto indispensável — com menos impacto ambiental, melhor usabilidade e mais inteligência no serviço ao utilizador.",
      investorsNome: "Nome", investorsEmpresa: "Empresa ou Fundo", investorsEmail: "Email",
      investorsTelefone: "Telefone", investorsArea: "Área de interesse", investorsMensagem: "Mensagem",
      investorsNomePlaceholder: "O seu nome", investorsEmpresaPlaceholder: "Nome do fundo ou empresa",
      investorsEmailPlaceholder: "email@fundo.com", investorsTelefonePlaceholder: "+351 900 000 000",
      investorsAreaPlaceholder: "ex. Hardware, HealthTech", investorsMensagemPlaceholder: "Notas adicionais...",
      investorsSubmit: "Solicitar Investor Brief", investorsSent: "Pedido recebido.", investorsSentDesc: "Enviaremos o Investor Brief brevemente.",
      contactsTitle: "Contactos",
      contactsDesc: "Para informações comerciais, parcerias, imprensa ou suporte técnico utilize o formulário abaixo.",
      contactsNome: "Nome", contactsEmail: "Email", contactsAssunto: "Assunto", contactsMensagem: "Mensagem",
      contactsNomePlaceholder: "O seu nome", contactsEmailPlaceholder: "email@exemplo.pt",
      contactsAssuntoPlaceholder: "Selecionar assunto", contactsMensagemPlaceholder: "A sua mensagem...",
      contactsOpt1: "Pedido de informação", contactsOpt2: "Parcerias", contactsOpt3: "Investidores",
      contactsOpt4: "Suporte técnico", contactsOpt5: "Imprensa",
      contactsSubmit: "Enviar mensagem", contactsSent: "Mensagem enviada.", contactsSentDesc: "A nossa equipa responderá brevemente.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "Estamos a construir o futuro dos sanitários inteligentes. Se partilha a nossa visão, queremos conhecê-lo.",
      workWithUsOpenLabel: "Posições em Aberto",
      workWithUsApply: "Candidatar-me a esta posição",
      workWithUsSpontLabel: "Candidatura Espontânea",
      workWithUsNome: "Nome", workWithUsEmail: "Email",
      workWithUsArea: "Área de Interesse",
      workWithUsAreaOpt1: "Engenharia de Hardware", workWithUsAreaOpt2: "Software & IA",
      workWithUsAreaOpt3: "Design Industrial", workWithUsAreaOpt4: "Ciências da Saúde",
      workWithUsAreaOpt5: "Negócio & Parcerias",
      workWithUsMsg: "Mensagem", workWithUsMsgPlaceholder: "Conte-nos sobre si e o que o motiva...",
      workWithUsLinkedin: "LinkedIn ou Portfólio", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "Enviar candidatura", workWithUsSent: "Candidatura recebida.",
      workWithUsSentDesc: "Obrigado pelo interesse. Entraremos em contacto se houver alinhamento.",
      workWithUsApplyingTo: "Candidatura à posição:",
      investorsHighlight1: "Early stage é o maior potencial de valorização",
      investorsHighlight2: "Mercado grande e problema inevitável",
      investorsHighlight3: "Equipa forte e execução qualificada",
      investorsHighlight4: "Tração e validação progressiva",
      partnersCat1: "Tecnologia e Sensores",
      partnersCat2: "Componentes Eletrónicos",
      partnersCat3: "Microfluídica",
      partnersCat4: "Nanotecnologia",
      partnersCat5: "Software e IA",
      partnersCat6: "Produção Industrial",
    },
    productPage: { tab1: "Tecnologia", tab2: "Ficha de Produto", tab3: "Segurança e Conformidade", tab4: "Fases de Desenvolvimento" },
    companyPage: { tab1: "Missão e Valores", tab2: "Equipa", tab3: "Certificações" },
    projectsPage: { tab1: "Projetos de Consórcio", tab2: "Parceiros", tab3: "Afiliações" },
    product: {
      techTitle: "Como funciona a ablute_",
      techDesc: "A ablute_ integra gestão de água, sensores inteligentes e análise de saúde numa plataforma única. Cada componente foi concebido para operar de forma autónoma, sem intervenção do utilizador, melhorando continuamente com base em dados de utilização.",
      tech1Title: "Sistema de Eficiência Hídrica", tech1Desc: "Válvulas de microdoseamento de precisão reduzem o consumo de água até 80% face aos modelos convencionais. Uma matriz de sensores em malha fechada monitoriza o caudal em tempo real, ajustando o ciclo de lavagem para usar exatamente a água necessária.", tech1p1: "Arquitetura de válvulas de microdoseamento", tech1p2: "Monitorização de caudal em tempo real", tech1p3: "Até 80% de redução de água",
      tech2Title: "Deteção Inteligente", tech2Desc: "Um conjunto de sensores óticos e químicos não invasivos deteta a presença, o tipo de utilização e os marcadores biológicos. Os dados são processados localmente — nada sai do dispositivo sem consentimento explícito.", tech2p1: "Deteção de presença ótica", tech2p2: "Sensoriamento de biomarcadores químicos", tech2p3: "Processamento local na extremidade",
      tech3Title: "Modos de Lavagem", tech3Desc: "Cinco perfis de lavagem configuráveis adaptam-se às preferências do utilizador, ao contexto de uso e às condições do abastecimento de água. O sistema aprende padrões de utilização e otimiza ciclos proativamente.", tech3p1: "5 perfis configuráveis", tech3p2: "Aprendizagem adaptativa de ciclos", tech3p3: "Desempenho independente da pressão",
      tech4Title: "Modos de Utilização", tech4Desc: "Concebido para contextos partilhados e privados. O reconhecimento de perfil multi-utilizador permite definições personalizadas para membros do agregado familiar ou utilizadores institucionais.", tech4p1: "Reconhecimento de perfil multi-utilizador", tech4p2: "Definições personalizadas por utilizador", tech4p3: "Controlo de acesso institucional",
      sheetTitle: "Especificação Técnica", sheetDesc: "O documento de especificação técnica da ablute_ cobre a arquitetura do sistema, as especificações dos componentes, os requisitos de instalação e os benchmarks de desempenho.", sheetDrawing: "Desenho Técnico",
      specDim: "Dimensões", specVolt: "Tensão de Funcionamento", specWater: "Ligação de Água", specDrain: "Ligação de Drenagem", specSensor: "Módulos de Sensores", specWifi: "Sem Fios", specWeight: "Peso", specIp: "Classificação IP",
      sheetDownload: "Descarregar Especificação Técnica (PDF)", sheetVersion: "Documento versão 0.7 — Pré-lançamento comercial. Sujeito a alterações.",
      safetyTitle: "Design de Segurança", safetyDesc: "A ablute_ foi concebida desde os princípios fundamentais com a segurança como restrição central. A arquitetura do sistema prioriza a proteção do utilizador nas dimensões elétrica, mecânica, biológica e de conformidade.",
      safe1Title: "Segurança Elétrica", safe1Desc: "Todo o sistema ativo opera a 12V DC de baixa tensão, eliminando o risco de choque elétrico em ambientes húmidos. Todos os PCBs são revestidos e encapsulados de acordo com a norma IEC 60529.", safe1p1: "Sistema de baixa tensão 12V DC", safe1p2: "Invólucros classificação IP67", safe1p3: "Eletrónica com revestimento conformal",
      safe2Title: "Segurança Mecânica", safe2Desc: "A deteção de obstrução impede o fecho da bacia se for detetado um objeto ou parte do corpo. Os atuadores com força limitada param imediatamente em caso de resistência, cumprindo a norma EN 563.", safe2p1: "Deteção de obstrução na tampa", safe2p2: "Atuadores com força limitada", safe2p3: "Superfícies em conformidade com EN 563",
      safe3Title: "Proteção do Utilizador", safe3Desc: "Todos os materiais em contacto com água ou utilizador são polímeros certificados para uso alimentar ou médico. Revestimentos antimicrobianos em todas as superfícies molhadas. Sem arestas vivas no design mecânico.", safe3p1: "Materiais de grau alimentar/médico", safe3p2: "Revestimentos antimicrobianos", safe3p3: "Design sem pontos de aperto",
      safe4Title: "Conformidade Técnica", safe4Desc: "Concebido tendo em conta a via de marcação CE. O pacote de documentação segue os requisitos CEM EN 61000 e o Regulamento de Ecodesign da UE para produtos relacionados com a água.", safe4p1: "Documentação da via CE", safe4p2: "Design CEM EN 61000", safe4p3: "Alinhado com Ecodesign UE",
      safetyNote: "A ablute_ encontra-se atualmente na fase de desenvolvimento pré-comercial. As certificações formais (CE, ISO) estão previstas para a fase de Modelo Pré-Industrial. Todas as especificações acima refletem a intenção de design e os objetivos de engenharia.",
      stagesTitle: "Cronograma de Desenvolvimento", stagesDesc: "A ablute_ segue uma via estruturada de maturidade tecnológica, desde o conceito até à escala comercial. Cada fase representa um marco validado com entregáveis de engenharia mensuráveis.", inProgress: "Em curso",
      stage1: "Desenvolvimento de Conceito", stage1d: "Visão central do produto definida, requisitos iniciais de engenharia delineados, proteção de PI iniciada.",
      stage2: "Protótipo de Engenharia", stage2d: "Primeiro protótipo funcional montado, integrando módulos de água, sensoriamento e limpeza.",
      stage3: "Demonstração Piloto", stage3d: "Testes em ambiente controlado com instituições parceiras selecionadas. Recolha de dados e iteração.",
      stage4: "Modelo Pré-Industrial", stage4d: "Design para fabrico, qualificação da cadeia de abastecimento, pré-submissão regulatória.",
      stage5: "Implementação Comercial", stage5d: "Marcação CE, acordos comerciais, produção e distribuição em escala.",
    },
    company: {
      missionTitle: "O Nosso Propósito",
      missionP1: "A ablute_ foi fundada numa única convicção: a infraestrutura da vida quotidiana pode ter um propósito muito maior do que tem atualmente.",
      missionP2: "Concebemos sistemas de saneamento que eliminam o desperdício de água, funcionam sem esforço do utilizador e recolhem passivamente os dados de saúde de que a medicina preventiva necessita — no ponto de contacto mais consistente da rotina humana.",
      val1Title: "Responsabilidade Ambiental", val1Desc: "A escassez de água está a acelerar. A ablute_ foi construída para a resolver no ponto de uso — eliminando o desperdício sem pedir aos utilizadores que alterem o seu comportamento.",
      val2Title: "Excelência de Engenharia", val2Desc: "Acreditamos que os produtos mais impactantes são invisíveis no uso. A complexidade é concebida para que a simplicidade ressalte. Cada componente é intencional.",
      val3Title: "Infraestrutura de Saúde Preventiva", val3Desc: "A casa de banho é visitada várias vezes por dia — é o ponto de monitorização de saúde mais subutilizado no ambiente construído. Estamos a mudar isso.",
      quote: "\"A casa de banho é o único compartimento visitado por todas as pessoas, várias vezes por dia, ao longo de toda a sua vida. É o ativo de saúde mais subutilizado existente.\"",
      quoteAttr: "Tese fundadora da ablute_, 2021",
      foundersLabel: "Fundadores e Liderança", foundersIntro: "A plataforma ablute_ é desenvolvida por uma equipa multidisciplinar que combina engenharia, ciências médicas e inovação tecnológica.",
      rdLabel: "Investigação e Desenvolvimento", rdIntro: "A equipa de I&D apoia o desenvolvimento da plataforma ablute_ através de investigação científica, engenharia e biotecnologia.",
      certsTitle: "Reconhecimento Institucional", certsDesc: "A ablute_ participa numa rede de programas de inovação, incubadoras e instrumentos de financiamento público que validam e aceleram o nosso caminho de desenvolvimento.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selecionada para o programa nacional de apoio a startups, com acesso a instrumentos de financiamento e rede institucional.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidatura submetida ao Acelerador do Conselho Europeu de Inovação, direcionada para hardware de deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Atribuído um voucher de colaboração em I&D para parceria com um instituto politécnico nacional no desenvolvimento de sensores.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Empresa residente no Instituto Pedro Nunes, a principal incubadora e aceleradora tecnológica de Portugal.",
    },
    projects: {
      consortTitle: "I&D Colaborativa", consortDesc: "A ablute_ participa e lidera projetos de inovação colaborativa com instituições de investigação, universidades e parceiros industriais em toda a Europa.", roleLabel: "Papel",
      proj1Desc: "Projeto de investigação colaborativa para desenvolvimento de sensoriamento ótico não invasivo para deteção de biomarcadores em contextos de saneamento.", proj1Role: "Líder Tecnológico — design de módulo de sensor e arquitetura de processamento de dados.",
      proj2Desc: "Consórcio europeu que explora infraestrutura de monitorização passiva da saúde em ambientes residenciais e de cuidados. Foco na função renal e marcadores metabólicos.", proj2Role: "Parceiro Industrial — integração de plataforma e design de protocolo clínico.",
      proj3Desc: "Projeto intersectorial visando a economia circular da água à escala do edifício. A ablute_ contribui com módulos de redução de procura e sensoriamento de água cinzenta.", proj3Role: "Fornecedor de Componentes e Parceiro de Dados",
      partnersTitle: "Rede de Parceiros", partnersDesc: "A nossa rede de parceiros abrange institutos de investigação, universidades, serviços públicos e centros tecnológicos em Portugal e na Europa.",
      affiliationsTitle: "Participação no Ecossistema", affiliationsDesc: "A ablute_ está integrada nos ecossistemas de inovação mais relevantes para a sua missão — tecnologia da água, infraestrutura de saúde e deep tech.",
      aff1Desc: "Cluster nacional de tecnologia de saúde que conecta empresas de medtech, hospitais e instituições de investigação.",
      aff2Desc: "Plataforma europeia para inovação, investigação e políticas da água. Membro da rede Water-Oriented Living Labs.",
      aff3Desc: "Programa nacional do ecossistema de startups. Reconhecida como empresa de hardware deep tech com potencial internacional.",
      aff4Desc: "Comunidade de startups de biotecnologia e tecnologia de saúde co-localizadas na incubadora IPN, Coimbra.",
      aff5Desc: "Associação empresarial para a inovação, conectando empresas intensivas em I&D com a indústria e a academia.",
      aff6Desc: "Associação nacional de serviços de saúde. Relação de aconselhamento técnico para normas de saneamento em unidades de cuidados.",
    },
  },

  en: {
    dir: "ltr",
    nav: { product: "Product", company: "Company", projects: "Projects", hideSubnav: "Hide sub-navigation" },
    mode: { bathroom: "Bathroom", health: "Health", label: "mode" },
    cta: { waiting: "Join the Waiting List", pilot: "Apply for a Pilot", noPayment: "No upfront payment required" },
    hero: {
      eyebrow: "Intelligent Sanitation Platform",
      line1: "A unique design", line2: "reinvented the toilet", line3: "",
      sub1: "hidden or with a unique aesthetic", sub2: "— a product made in your image —", sub3: "",
      feat1: "100% autonomous washing", feat2: "Complete cleaning: bowl and seat",
      feat3: "Record water savings <1L", feat4: "",
    },
    health: {
      badge: "Portuguese Innovation",
      h1a: "The Toilet that", h1b: "Analyses", h1c: "Your Health",
      desc: "the world's first smart toilet that performs non-invasive urine analysis, saving",
      brand: "ablute_",
      cta1: "Learn More", cta2: "View Demo",
      statWaterLabel: "Water Savings", statMonitorLabel: "Monitoring", statFlushLabel: "Per Flush",
      deviceTitle: "Smart Toilet", deviceTap: "Tap to learn more",
      deviceHydration: "Hydration", deviceHydrationVal: "Optimal",
      deviceBiomarkers: "Biomarkers", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Eco-friendly", badgeEcoVal: "100% Sustainable",
      badgeHealth: "Health", badgeHealthVal: "Real-time Analysis",
      tabProduct: "Product", tabScience: "Science", tabForWho: "For Whom",
      productTitle: "ablute_ Technology", productDesc: "The platform that transforms the bathroom into a preventive health interface.",
      tabBiosensing: "Biosensors & Methods", tabAI: "Artificial Intelligence",
      pilotBanner: "Interested in validating the technology?", pilotBannerSub: "Join the pilot programme and be among the first to test the platform.",
      scienceTitle: "Scientific Basis", scienceDesc: "Validated clinical methodology and cutting-edge research.",
      forwhoTitle: "Who is ablute_ for?", forwhoDesc: "Solutions tailored to different contexts and needs.",
      appModalTitle: "ablute_ App", appModalDesc: "The app is not yet available.", appModalSub: "Leave your email to be notified when it becomes available.",
      appNotify: "Notify me", appThanks: "Thank you!", appThanksDesc: "You will be notified when the app is available.",
      pilotModalTitle: "Host a Pilot", pilotInstitution: "Institution Name", pilotContact: "Contact Person",
      pilotEmail: "Email", pilotCountry: "Country", pilotType: "Institution Type",
      pilotTypeHospital: "Hospital", pilotTypeClinic: "Clinic", pilotTypeResearch: "Research Centre",
      pilotTypeUniversity: "University", pilotTypeWellness: "Wellness Centre",
      pilotSubmit: "Submit Application", pilotSent: "Application submitted!", pilotSentDesc: "We will be in touch soon.",
      demoTitle: "View Demo", demoDesc: "Demo coming soon.", demoSub: "We are preparing an interactive demonstration of the ablute_ platform.",
      demoCta: "Apply for a Pilot",
      aiFlowTitle: "From Signal to Health Insight",
      aiStep1: "Biochemical Signal", aiStep2: "Processing", aiStep3: "AI Model", aiStep4: "Personal Insight", aiStep5: "Preventive Action",
      hostPilot: "Host a Pilot",
    },
    float: {
      client: "Client Area", partners: "Partners & Suppliers", investors: "Investors", contacts: "Contacts",
      clientTitle: "Client Area", clientDesc: "Access reserved for ablute_ clients.",
      clientNome: "Name", clientNumero: "Client No. or Contract No.",
      clientNomePlaceholder: "Your name", clientNumeroPlaceholder: "e.g. CLI-00123", clientEnter: "Sign In",
      clientErrorTitle: "Invalid client or contract number.", clientErrorDesc: "This area is reserved for existing clients.\nIf you believe there is an issue with your login, please send us a message.",
      clientErrorCta: "Request Technical Support", clientRetry: "Try again", clientSupport: "Request Technical Support",
      clientSupportNome: "Name", clientSupportEmail: "Email", clientSupportNumero: "Client No. or Contract No.",
      clientSupportMsg: "Message", clientSupportSubmit: "Send support request",
      clientSupportSent: "Your message has been sent.", clientSupportSentDesc: "Our team will contact you shortly.",
      partnersTitle: "Technological & Industrial Partnerships",
      partnersIntro: "ablute_ develops its technology in collaboration with industrial partners, specialist suppliers and technology companies.",
      partnersBullet1: "technology development", partnersBullet2: "systems integration",
      partnersBullet3: "industrial production", partnersBullet4: "supply of specialised components",
      partnersCategoriesLabel: "Categories", partnersProposeBtn: "Propose Partnership",
      partnersEmpresa: "Company name", partnersWebsite: "Website", partnersPais: "Country", partnersArea: "Area of expertise", partnersMensagem: "Message",
      partnersEmpresaPlaceholder: "Company Ltd.", partnersPaisPlaceholder: "United Kingdom",
      partnersAreaPlaceholder: "e.g. MEMS Sensors", partnersMensagemPlaceholder: "Describe the collaboration proposal...",
      investorsTitle: "Investors",
      investorsDesc: "Investing in ablute_\nis investing in the evolution of an indispensable product — with less environmental impact, better usability and more intelligence in user service.",
      investorsNome: "Name", investorsEmpresa: "Company or Fund", investorsEmail: "Email",
      investorsTelefone: "Phone", investorsArea: "Area of interest", investorsMensagem: "Message",
      investorsNomePlaceholder: "Your name", investorsEmpresaPlaceholder: "Fund or company name",
      investorsEmailPlaceholder: "email@fund.com", investorsTelefonePlaceholder: "+44 700 000 0000",
      investorsAreaPlaceholder: "e.g. Hardware, HealthTech", investorsMensagemPlaceholder: "Additional notes...",
      investorsSubmit: "Request Investor Brief", investorsSent: "Request received.", investorsSentDesc: "We will send you the Investor Brief shortly.",
      contactsTitle: "Contact Us",
      contactsDesc: "For commercial information, partnerships, press or technical support, use the form below.",
      contactsNome: "Name", contactsEmail: "Email", contactsAssunto: "Subject", contactsMensagem: "Message",
      contactsNomePlaceholder: "Your name", contactsEmailPlaceholder: "email@example.com",
      contactsAssuntoPlaceholder: "Select subject", contactsMensagemPlaceholder: "Your message...",
      contactsOpt1: "Information request", contactsOpt2: "Partnerships", contactsOpt3: "Investors",
      contactsOpt4: "Technical support", contactsOpt5: "Press",
      contactsSubmit: "Send message", contactsSent: "Message sent.", contactsSentDesc: "Our team will respond shortly.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "We are building the future of intelligent sanitation. If you share our vision, we want to meet you.",
      workWithUsOpenLabel: "Open Positions",
      workWithUsApply: "Apply for this role",
      workWithUsSpontLabel: "Spontaneous Application",
      workWithUsNome: "Name", workWithUsEmail: "Email",
      workWithUsArea: "Area of Interest",
      workWithUsAreaOpt1: "Hardware Engineering", workWithUsAreaOpt2: "Software & AI",
      workWithUsAreaOpt3: "Industrial Design", workWithUsAreaOpt4: "Health Sciences",
      workWithUsAreaOpt5: "Business & Partnerships",
      workWithUsMsg: "Message", workWithUsMsgPlaceholder: "Tell us about yourself and what drives you...",
      workWithUsLinkedin: "LinkedIn or Portfolio", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "Submit application", workWithUsSent: "Application received.",
      workWithUsSentDesc: "Thank you for your interest. We will be in touch if there is a match.",
      workWithUsApplyingTo: "Applying for position:",
      investorsHighlight1: "Early stage offers the greatest valuation upside",
      investorsHighlight2: "Large market and an unavoidable problem",
      investorsHighlight3: "Strong team and qualified execution",
      investorsHighlight4: "Progressive traction and validation",
      partnersCat1: "Technology & Sensors",
      partnersCat2: "Electronic Components",
      partnersCat3: "Microfluidics",
      partnersCat4: "Nanotechnology",
      partnersCat5: "Software & AI",
      partnersCat6: "Industrial Production",
    },
    productPage: { tab1: "Technology", tab2: "Product Sheet", tab3: "Safety & Compliance", tab4: "Development Stages" },
    companyPage: { tab1: "Mission & Values", tab2: "Team", tab3: "Certifications" },
    projectsPage: { tab1: "Consortium Projects", tab2: "Partners", tab3: "Affiliations" },
    product: {
      techTitle: "How ablute_ Works",
      techDesc: "ablute_ integrates water management, intelligent sensing, and health analytics into a single, seamlessly engineered platform. Every component is designed to operate autonomously, require zero user intervention, and continuously improve through learned usage data.",
      tech1Title: "Water Efficiency System", tech1Desc: "Precision micro-dosing valves reduce water consumption by up to 80% versus conventional models. A closed-loop sensor array monitors flow rate in real time, adjusting the wash cycle dynamically to use exactly the water required — never more.", tech1p1: "Micro-dosing valve architecture", tech1p2: "Real-time flow monitoring", tech1p3: "Up to 80% water reduction",
      tech2Title: "Intelligent Detection", tech2Desc: "An array of non-invasive optical and chemical sensors detects presence, usage type, and biological markers. Data is processed locally — nothing leaves the device without explicit user consent.", tech2p1: "Optical presence detection", tech2p2: "Chemical biomarker sensing", tech2p3: "Local edge processing",
      tech3Title: "Washing Modes", tech3Desc: "Five configurable wash profiles adapt to user preferences, usage context, and water supply conditions. The system learns usage patterns and proactively optimises cycles without manual input.", tech3p1: "5 configurable profiles", tech3p2: "Adaptive cycle learning", tech3p3: "Pressure-independent performance",
      tech4Title: "Usage Modes", tech4Desc: "Designed for shared and private contexts. Multi-user profile recognition enables personalised settings across household members or institutional users, with full access control and audit logging.", tech4p1: "Multi-user profile recognition", tech4p2: "Personalised settings per user", tech4p3: "Institutional access control",
      sheetTitle: "Technical Specification", sheetDesc: "The ablute_ technical specification document covers system architecture, component specifications, installation requirements, and performance benchmarks.", sheetDrawing: "Technical Drawing",
      specDim: "Dimensions", specVolt: "Operating Voltage", specWater: "Water Connection", specDrain: "Drain Connection", specSensor: "Sensor Modules", specWifi: "Wireless", specWeight: "Weight", specIp: "IP Rating",
      sheetDownload: "Download Technical Specification (PDF)", sheetVersion: "Document version 0.7 — Pre-commercial release. Subject to change.",
      safetyTitle: "Safety Design", safetyDesc: "ablute_ is designed from first principles with safety as a core constraint, not an afterthought. The system architecture prioritises user protection across electrical, mechanical, biological, and compliance dimensions.",
      safe1Title: "Electrical Safety", safe1Desc: "The entire active system operates at 12V DC low-voltage, eliminating risk of electric shock in humid environments. All PCBs are conformally coated and encapsulated to IEC 60529 standards.", safe1p1: "12V DC low-voltage system", safe1p2: "IP67-rated enclosures", safe1p3: "Conformal-coated electronics",
      safe2Title: "Mechanical Safety", safe2Desc: "Obstruction detection prevents bowl closure if an object or body part is detected in the closing path. Force-limited actuators stop immediately on resistance, meeting EN 563 contact temperature guidelines.", safe2p1: "Obstruction detection on lid", safe2p2: "Force-limited actuators", safe2p3: "EN 563 compliant surfaces",
      safe3Title: "User Protection", safe3Desc: "All materials in contact with water or user are certified food-grade or medical-grade polymers. Antimicrobial coatings on all wetted surfaces. No sharp edges or pinch points in the mechanical design.", safe3p1: "Food/medical-grade materials", safe3p2: "Antimicrobial surface coatings", safe3p3: "Zero pinch-point design",
      safe4Title: "Technical Compliance", safe4Desc: "Designed with CE marking pathway in mind. Documentation package follows EN 61000 EMC requirements and the EU Ecodesign Regulation for water-related products. Pre-submission review planned for 2025.", safe4p1: "CE pathway documentation", safe4p2: "EN 61000 EMC design", safe4p3: "EU Ecodesign aligned",
      safetyNote: "ablute_ is currently in the pre-commercial development phase. Formal certifications (CE, ISO) are scheduled for the Pre-Industrial Model stage. All specifications above reflect design intent and engineering targets.",
      stagesTitle: "Development Timeline", stagesDesc: "ablute_ follows a structured technology readiness pathway from concept to commercial scale. Each stage represents a validated milestone with measurable engineering deliverables.", inProgress: "In Progress",
      stage1: "Concept Development", stage1d: "Core product vision defined, initial engineering requirements scoped, IP protection initiated.",
      stage2: "Engineering Prototype", stage2d: "First functional prototype assembled integrating water, sensing, and cleaning modules.",
      stage3: "Pilot Demonstration", stage3d: "Controlled environment testing with selected partner institutions. Data collection and iteration.",
      stage4: "Pre-Industrial Model", stage4d: "Design for manufacture, supply chain qualification, regulatory pre-submission.",
      stage5: "Commercial Deployment", stage5d: "CE marking, commercial agreements, scaled production and distribution.",
    },
    company: {
      missionTitle: "Our Purpose",
      missionP1: "ablute_ was founded on a single conviction: the infrastructure of daily life can carry far greater purpose than it currently does.",
      missionP2: "We design sanitation systems that eliminate water waste, operate without user effort, and passively collect the health data that preventive medicine needs — at the most consistent touchpoint in the human routine.",
      val1Title: "Environmental Responsibility", val1Desc: "Water scarcity is accelerating. ablute_ was built to solve it at the point of use — eliminating waste without asking users to change behaviour.",
      val2Title: "Engineering Excellence", val2Desc: "We believe the most impactful products are invisible in use. Complexity is designed in so simplicity comes out. Every component is purposeful.",
      val3Title: "Preventive Health Infrastructure", val3Desc: "The bathroom is visited multiple times daily — it is the most underutilised health monitoring touchpoint in the built environment. We are changing that.",
      quote: "\"The bathroom is the only room visited by every person, multiple times daily, for the entire course of their life. It is the most underutilised health asset in existence.\"",
      quoteAttr: "ablute_ founding thesis, 2021",
      foundersLabel: "Founders & Leadership", foundersIntro: "The ablute_ platform is developed by a multidisciplinary team combining engineering, medical science and technological innovation.",
      rdLabel: "Research & Development", rdIntro: "The R&D team supports the development of the ablute_ platform through scientific research, engineering and biotechnology.",
      certsTitle: "Institutional Recognition", certsDesc: "ablute_ participates in a network of innovation programs, incubators, and public funding instruments that validate and accelerate our development pathway.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selected for the national startup support program, providing access to funding instruments and institutional network.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Submitted application to the European Innovation Council Accelerator, targeting deep tech hardware ventures.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Awarded an R&D collaboration voucher for partnership with a national polytechnic institute on sensor development.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Resident company at Instituto Pedro Nunes, Portugal's leading technology incubator and accelerator.",
    },
    projects: {
      consortTitle: "Collaborative R&D", consortDesc: "ablute_ participates in and leads collaborative innovation projects with research institutions, universities, and industry partners across Europe.", roleLabel: "Role",
      proj1Desc: "Collaborative research project developing non-invasive optical sensing for water-borne biomarker detection in sanitation contexts.", proj1Role: "Technology Lead — sensor module design and data processing architecture.",
      proj2Desc: "European consortium exploring passive health monitoring infrastructure in residential and care environments. Focus on kidney function and metabolic health markers.", proj2Role: "Industrial Partner — platform integration and clinical protocol design.",
      proj3Desc: "Cross-sector project targeting circular water economy at the building scale. ablute_ contributes intelligent demand reduction and greywater sensing modules.", proj3Role: "Component Supplier & Data Partner",
      partnersTitle: "Partner Network", partnersDesc: "Our partner network spans research institutes, universities, public utilities, and technology centres across Portugal and Europe.",
      affiliationsTitle: "Ecosystem Participation", affiliationsDesc: "ablute_ is embedded in the innovation ecosystems most relevant to its mission — water technology, health infrastructure, and deep tech.",
      aff1Desc: "National health technology cluster connecting medtech companies, hospitals, and research institutions.",
      aff2Desc: "European platform for water innovation, research, and policy. Member of the Water-Oriented Living Labs network.",
      aff3Desc: "National startup ecosystem programme. Recognised as a deep tech hardware company with international potential.",
      aff4Desc: "Community of biotech and health technology startups co-located at IPN incubator, Coimbra.",
      aff5Desc: "Business association for innovation, connecting R&D-intensive companies with industry and academia.",
      aff6Desc: "National health services association. Technical advisory relationship for sanitation standards in care facilities.",
    },
  },

  fr: {
    dir: "ltr",
    nav: { product: "Produit", company: "Entreprise", projects: "Projets", hideSubnav: "Masquer la sous-navigation" },
    mode: { bathroom: "Salle de bain", health: "Santé", label: "mode" },
    cta: { waiting: "Rejoindre la Liste d'Attente", pilot: "Candidater au Pilote", noPayment: "Sans paiement initial" },
    hero: {
      eyebrow: "Plateforme de Sanitaire Intelligent",
      line1: "Un design unique", line2: "a réinventé les toilettes", line3: "",
      sub1: "cachées ou à l'esthétique unique", sub2: "— un équipement à votre image —", sub3: "",
      feat1: "Lavage 100% autonome", feat2: "Nettoyage intégral : cuvette et abattant",
      feat3: "Record d'économie d'eau <1L", feat4: "",
    },
    health: {
      badge: "Innovation Portugaise",
      h1a: "Les Toilettes qui", h1b: "Analysent", h1c: "Votre Santé",
      desc: "les premières toilettes intelligentes au monde qui effectuent des analyses d'urine non invasives, économisant",
      brand: "ablute_",
      cta1: "En Savoir Plus", cta2: "Voir la Démo",
      statWaterLabel: "Économies d'Eau", statMonitorLabel: "Surveillance", statFlushLabel: "Par Chasse",
      deviceTitle: "Toilettes Intelligentes", deviceTap: "Appuyer pour en savoir plus",
      deviceHydration: "Hydratation", deviceHydrationVal: "Optimale",
      deviceBiomarkers: "Biomarqueurs", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Écologique", badgeEcoVal: "100% Durable",
      badgeHealth: "Santé", badgeHealthVal: "Analyse en Temps Réel",
      tabProduct: "Produit", tabScience: "Science", tabForWho: "Pour Qui",
      productTitle: "Technologie ablute_", productDesc: "La plateforme qui transforme la salle de bain en interface de santé préventive.",
      tabBiosensing: "Biocapteurs & Méthodes", tabAI: "Intelligence Artificielle",
      pilotBanner: "Intéressé à valider la technologie?", pilotBannerSub: "Rejoignez le programme pilote et soyez parmi les premiers à tester la plateforme.",
      scienceTitle: "Base Scientifique", scienceDesc: "Méthodologie clinique validée et recherche de pointe.",
      forwhoTitle: "À qui s'adresse ablute_?", forwhoDesc: "Solutions adaptées à différents contextes et besoins.",
      appModalTitle: "Application ablute_", appModalDesc: "L'application n'est pas encore disponible.", appModalSub: "Laissez votre email pour être notifié de sa disponibilité.",
      appNotify: "Me notifier", appThanks: "Merci!", appThanksDesc: "Vous serez notifié quand l'application sera disponible.",
      pilotModalTitle: "Accueillir un Pilote", pilotInstitution: "Nom de l'Institution", pilotContact: "Personne de Contact",
      pilotEmail: "Email", pilotCountry: "Pays", pilotType: "Type d'Institution",
      pilotTypeHospital: "Hôpital", pilotTypeClinic: "Clinique", pilotTypeResearch: "Centre de Recherche",
      pilotTypeUniversity: "Université", pilotTypeWellness: "Centre de Bien-être",
      pilotSubmit: "Soumettre la Candidature", pilotSent: "Candidature envoyée!", pilotSentDesc: "Nous vous contacterons prochainement.",
      demoTitle: "Voir la Démo", demoDesc: "Démo bientôt disponible.", demoSub: "Nous préparons une démonstration interactive de la plateforme ablute_.",
      demoCta: "Candidater au Pilote",
      aiFlowTitle: "Du Signal à l'Insight Santé",
      aiStep1: "Signal Biochimique", aiStep2: "Traitement", aiStep3: "Modèle IA", aiStep4: "Insight Personnel", aiStep5: "Action Préventive",
      hostPilot: "Accueillir un Pilote",
    },
    float: {
      client: "Espace Client", partners: "Partenaires & Fournisseurs", investors: "Investisseurs", contacts: "Contacts",
      clientTitle: "Espace Client", clientDesc: "Accès réservé aux clients ablute_.",
      clientNome: "Nom", clientNumero: "N° Client ou Contrat",
      clientNomePlaceholder: "Votre nom", clientNumeroPlaceholder: "ex. CLI-00123", clientEnter: "Se connecter",
      clientErrorTitle: "N° client ou contrat invalide.", clientErrorDesc: "Cet espace est réservé aux clients existants.\nSi vous pensez qu'il y a un problème avec votre connexion, envoyez-nous un message.",
      clientErrorCta: "Demander un Support Technique", clientRetry: "Réessayer", clientSupport: "Demander un Support Technique",
      clientSupportNome: "Nom", clientSupportEmail: "Email", clientSupportNumero: "N° Client ou Contrat",
      clientSupportMsg: "Message", clientSupportSubmit: "Envoyer la demande",
      clientSupportSent: "Votre message a été envoyé.", clientSupportSentDesc: "Notre équipe vous contactera prochainement.",
      partnersTitle: "Partenariats Technologiques & Industriels",
      partnersIntro: "ablute_ développe sa technologie en collaboration avec des partenaires industriels, des fournisseurs spécialisés et des entreprises technologiques.",
      partnersBullet1: "développement technologique", partnersBullet2: "intégration de systèmes",
      partnersBullet3: "production industrielle", partnersBullet4: "fourniture de composants spécialisés",
      partnersCategoriesLabel: "Catégories", partnersProposeBtn: "Proposer un Partenariat",
      partnersEmpresa: "Nom de l'entreprise", partnersWebsite: "Site web", partnersPais: "Pays", partnersArea: "Domaine d'expertise", partnersMensagem: "Message",
      partnersEmpresaPlaceholder: "Entreprise SAS", partnersPaisPlaceholder: "France",
      partnersAreaPlaceholder: "ex. Capteurs MEMS", partnersMensagemPlaceholder: "Décrivez la proposition de collaboration...",
      investorsTitle: "Investisseurs",
      investorsDesc: "Investir dans ablute_\nc'est investir dans l'évolution d'un produit indispensable — avec moins d'impact environnemental, une meilleure ergonomie et plus d'intelligence au service de l'utilisateur.",
      investorsNome: "Nom", investorsEmpresa: "Entreprise ou Fonds", investorsEmail: "Email",
      investorsTelefone: "Téléphone", investorsArea: "Domaine d'intérêt", investorsMensagem: "Message",
      investorsNomePlaceholder: "Votre nom", investorsEmpresaPlaceholder: "Nom du fonds ou de l'entreprise",
      investorsEmailPlaceholder: "email@fonds.com", investorsTelefonePlaceholder: "+33 6 00 00 00 00",
      investorsAreaPlaceholder: "ex. Matériel, HealthTech", investorsMensagemPlaceholder: "Notes supplémentaires...",
      investorsSubmit: "Demander le Dossier Investisseur", investorsSent: "Demande reçue.", investorsSentDesc: "Nous vous enverrons le dossier investisseur prochainement.",
      contactsTitle: "Nous Contacter",
      contactsDesc: "Pour des informations commerciales, partenariats, presse ou support technique, utilisez le formulaire ci-dessous.",
      contactsNome: "Nom", contactsEmail: "Email", contactsAssunto: "Sujet", contactsMensagem: "Message",
      contactsNomePlaceholder: "Votre nom", contactsEmailPlaceholder: "email@exemple.fr",
      contactsAssuntoPlaceholder: "Sélectionner un sujet", contactsMensagemPlaceholder: "Votre message...",
      contactsOpt1: "Demande d'information", contactsOpt2: "Partenariats", contactsOpt3: "Investisseurs",
      contactsOpt4: "Support technique", contactsOpt5: "Presse",
      contactsSubmit: "Envoyer le message", contactsSent: "Message envoyé.", contactsSentDesc: "Notre équipe répondra prochainement.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "Nous construisons l'avenir des sanitaires intelligents. Si vous partagez notre vision, nous voulons vous rencontrer.",
      workWithUsOpenLabel: "Postes Ouverts",
      workWithUsApply: "Postuler à ce poste",
      workWithUsSpontLabel: "Candidature Spontanée",
      workWithUsNome: "Nom", workWithUsEmail: "Email",
      workWithUsArea: "Domaine d'Intérêt",
      workWithUsAreaOpt1: "Ingénierie Matérielle", workWithUsAreaOpt2: "Logiciel & IA",
      workWithUsAreaOpt3: "Design Industriel", workWithUsAreaOpt4: "Sciences de la Santé",
      workWithUsAreaOpt5: "Business & Partenariats",
      workWithUsMsg: "Message", workWithUsMsgPlaceholder: "Parlez-nous de vous et de ce qui vous motive...",
      workWithUsLinkedin: "LinkedIn ou Portfolio", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "Envoyer la candidature", workWithUsSent: "Candidature reçue.",
      workWithUsSentDesc: "Merci pour votre intérêt. Nous vous contacterons s'il y a un alignement.",
      workWithUsApplyingTo: "Candidature au poste :",
      investorsHighlight1: "Le stade précoce offre le plus grand potentiel de valorisation",
      investorsHighlight2: "Grand marché et problème inévitable",
      investorsHighlight3: "Équipe solide et exécution qualifiée",
      investorsHighlight4: "Traction et validation progressives",
      partnersCat1: "Technologie & Capteurs",
      partnersCat2: "Composants Électroniques",
      partnersCat3: "Microfluidique",
      partnersCat4: "Nanotechnologie",
      partnersCat5: "Logiciel & IA",
      partnersCat6: "Production Industrielle",
    },
    productPage: { tab1: "Technologie", tab2: "Fiche Produit", tab3: "Sécurité & Conformité", tab4: "Étapes de Développement" },
    companyPage: { tab1: "Mission & Valeurs", tab2: "Équipe", tab3: "Certifications" },
    projectsPage: { tab1: "Projets Consortiaux", tab2: "Partenaires", tab3: "Affiliations" },
    product: {
      techTitle: "Comment fonctionne ablute_",
      techDesc: "ablute_ intègre la gestion de l'eau, la détection intelligente et l'analyse de santé en une seule plateforme. Chaque composant est conçu pour fonctionner de manière autonome, sans intervention de l'utilisateur, s'améliorant continuellement grâce aux données d'utilisation.",
      tech1Title: "Système d'Efficacité Hydrique", tech1Desc: "Des vannes de micro-dosage de précision réduisent la consommation d'eau jusqu'à 80% par rapport aux modèles conventionnels. Un réseau de capteurs en boucle fermée surveille le débit en temps réel, ajustant dynamiquement le cycle de lavage.", tech1p1: "Architecture de vannes à micro-dosage", tech1p2: "Surveillance du débit en temps réel", tech1p3: "Jusqu'à 80% de réduction d'eau",
      tech2Title: "Détection Intelligente", tech2Desc: "Un ensemble de capteurs optiques et chimiques non invasifs détecte la présence, le type d'utilisation et les marqueurs biologiques. Les données sont traitées localement — rien ne quitte l'appareil sans consentement explicite.", tech2p1: "Détection de présence optique", tech2p2: "Détection de biomarqueurs chimiques", tech2p3: "Traitement local en périphérie",
      tech3Title: "Modes de Lavage", tech3Desc: "Cinq profils de lavage configurables s'adaptent aux préférences de l'utilisateur et aux conditions d'alimentation en eau. Le système apprend les habitudes d'utilisation et optimise les cycles de manière proactive.", tech3p1: "5 profils configurables", tech3p2: "Apprentissage adaptatif des cycles", tech3p3: "Performance indépendante de la pression",
      tech4Title: "Modes d'Utilisation", tech4Desc: "Conçu pour les contextes partagés et privés. La reconnaissance de profil multi-utilisateur permet des paramètres personnalisés pour les membres du foyer ou les utilisateurs institutionnels.", tech4p1: "Reconnaissance de profil multi-utilisateur", tech4p2: "Paramètres personnalisés par utilisateur", tech4p3: "Contrôle d'accès institutionnel",
      sheetTitle: "Spécification Technique", sheetDesc: "Le document de spécification technique ablute_ couvre l'architecture du système, les spécifications des composants, les exigences d'installation et les performances.", sheetDrawing: "Dessin Technique",
      specDim: "Dimensions", specVolt: "Tension de Fonctionnement", specWater: "Raccordement Eau", specDrain: "Raccordement Évacuation", specSensor: "Modules Capteurs", specWifi: "Sans Fil", specWeight: "Poids", specIp: "Indice IP",
      sheetDownload: "Télécharger la Spécification Technique (PDF)", sheetVersion: "Document version 0.7 — Avant commercialisation. Susceptible de modification.",
      safetyTitle: "Conception Sécuritaire", safetyDesc: "ablute_ est conçue depuis ses principes fondamentaux avec la sécurité comme contrainte centrale. L'architecture du système priorise la protection des utilisateurs sur les dimensions électrique, mécanique, biologique et réglementaire.",
      safe1Title: "Sécurité Électrique", safe1Desc: "L'ensemble du système actif fonctionne en basse tension 12V DC, éliminant tout risque d'électrocution en milieu humide. Tous les PCB sont encapsulés selon la norme IEC 60529.", safe1p1: "Système basse tension 12V DC", safe1p2: "Boîtiers indice IP67", safe1p3: "Électronique à revêtement conforme",
      safe2Title: "Sécurité Mécanique", safe2Desc: "La détection d'obstruction empêche la fermeture du bol si un objet ou une partie du corps est détecté. Les actionneurs à force limitée s'arrêtent immédiatement en cas de résistance.", safe2p1: "Détection d'obstruction sur le couvercle", safe2p2: "Actionneurs à force limitée", safe2p3: "Surfaces conformes EN 563",
      safe3Title: "Protection de l'Utilisateur", safe3Desc: "Tous les matériaux en contact avec l'eau ou l'utilisateur sont des polymères certifiés alimentaires ou médicaux. Revêtements antimicrobiens sur toutes les surfaces mouillées. Aucun bord tranchant.", safe3p1: "Matériaux alimentaires/médicaux", safe3p2: "Revêtements antimicrobiens", safe3p3: "Conception sans points de pincement",
      safe4Title: "Conformité Technique", safe4Desc: "Conçu dans l'optique du marquage CE. Le dossier de documentation suit les exigences CEM EN 61000 et le Règlement Écoconception de l'UE. Révision pré-soumission prévue pour 2025.", safe4p1: "Documentation parcours CE", safe4p2: "Conception CEM EN 61000", safe4p3: "Conforme à l'Écoconception UE",
      safetyNote: "ablute_ est actuellement en phase de développement pré-commercial. Les certifications formelles (CE, ISO) sont prévues pour la phase de Modèle Pré-Industriel. Toutes les spécifications ci-dessus reflètent les intentions de conception.",
      stagesTitle: "Calendrier de Développement", stagesDesc: "ablute_ suit un parcours structuré de maturité technologique, du concept à l'échelle commerciale. Chaque étape représente un jalon validé avec des livrables d'ingénierie mesurables.", inProgress: "En cours",
      stage1: "Développement du Concept", stage1d: "Vision centrale du produit définie, exigences d'ingénierie initiales cadrées, protection IP initiée.",
      stage2: "Prototype d'Ingénierie", stage2d: "Premier prototype fonctionnel assemblé intégrant les modules eau, détection et nettoyage.",
      stage3: "Démonstration Pilote", stage3d: "Tests en environnement contrôlé avec des institutions partenaires sélectionnées. Collecte de données et itération.",
      stage4: "Modèle Pré-Industriel", stage4d: "Conception pour la fabrication, qualification de la chaîne d'approvisionnement, pré-soumission réglementaire.",
      stage5: "Déploiement Commercial", stage5d: "Marquage CE, accords commerciaux, production et distribution à l'échelle.",
    },
    company: {
      missionTitle: "Notre Mission",
      missionP1: "ablute_ a été fondée sur une conviction unique : l'infrastructure de la vie quotidienne peut avoir un objectif bien plus grand qu'actuellement.",
      missionP2: "Nous concevons des systèmes d'assainissement qui éliminent le gaspillage d'eau, fonctionnent sans effort de l'utilisateur et collectent passivement les données de santé dont la médecine préventive a besoin — au point de contact le plus régulier de la routine humaine.",
      val1Title: "Responsabilité Environnementale", val1Desc: "La pénurie d'eau s'accélère. ablute_ a été conçue pour la résoudre au point d'utilisation — en éliminant le gaspillage sans demander aux utilisateurs de changer de comportement.",
      val2Title: "Excellence Technique", val2Desc: "Nous croyons que les produits les plus impactants sont invisibles à l'usage. La complexité est intégrée pour que la simplicité en ressorte. Chaque composant est intentionnel.",
      val3Title: "Infrastructure de Santé Préventive", val3Desc: "La salle de bain est visitée plusieurs fois par jour — c'est le point de surveillance de la santé le plus sous-utilisé dans l'environnement bâti. Nous changeons cela.",
      quote: "\"La salle de bain est la seule pièce visitée par chaque personne, plusieurs fois par jour, tout au long de sa vie. C'est l'atout de santé le plus sous-exploité qui soit.\"",
      quoteAttr: "Thèse fondatrice ablute_, 2021",
      foundersLabel: "Fondateurs et Direction", foundersIntro: "La plateforme ablute_ est développée par une équipe multidisciplinaire combinant ingénierie, sciences médicales et innovation technologique.",
      rdLabel: "Recherche et Développement", rdIntro: "L'équipe R&D soutient le développement de la plateforme ablute_ par la recherche scientifique, l'ingénierie et la biotechnologie.",
      certsTitle: "Reconnaissance Institutionnelle", certsDesc: "ablute_ participe à un réseau de programmes d'innovation, d'incubateurs et d'instruments de financement public qui valident et accélèrent notre parcours de développement.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Sélectionnée pour le programme national de soutien aux startups, donnant accès aux instruments de financement et au réseau institutionnel.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidature soumise à l'Accélérateur du Conseil Européen de l'Innovation, ciblant les ventures hardware deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Attribution d'un bon de collaboration R&D pour un partenariat avec un institut polytechnique national sur le développement de capteurs.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Entreprise résidente à l'Instituto Pedro Nunes, le principal incubateur et accélérateur technologique du Portugal.",
    },
    projects: {
      consortTitle: "R&D Collaborative", consortDesc: "ablute_ participe et dirige des projets d'innovation collaborative avec des institutions de recherche, des universités et des partenaires industriels à travers l'Europe.", roleLabel: "Rôle",
      proj1Desc: "Projet de recherche collaborative développant des capteurs optiques non invasifs pour la détection de biomarqueurs dans l'eau en contexte d'assainissement.", proj1Role: "Chef Technologique — conception du module capteur et architecture de traitement des données.",
      proj2Desc: "Consortium européen explorant l'infrastructure de surveillance passive de la santé dans les environnements résidentiels et de soins. Focus sur la fonction rénale et les marqueurs métaboliques.", proj2Role: "Partenaire Industriel — intégration de plateforme et conception de protocole clinique.",
      proj3Desc: "Projet intersectoriel visant l'économie circulaire de l'eau à l'échelle du bâtiment. ablute_ contribue avec des modules de réduction intelligente de la demande et de détection des eaux grises.", proj3Role: "Fournisseur de Composants et Partenaire de Données",
      partnersTitle: "Réseau de Partenaires", partnersDesc: "Notre réseau de partenaires couvre des instituts de recherche, des universités, des services publics et des centres technologiques au Portugal et en Europe.",
      affiliationsTitle: "Participation à l'Écosystème", affiliationsDesc: "ablute_ est intégrée dans les écosystèmes d'innovation les plus pertinents pour sa mission — technologie de l'eau, infrastructure de santé et deep tech.",
      aff1Desc: "Cluster national de technologie de santé connectant entreprises medtech, hôpitaux et institutions de recherche.",
      aff2Desc: "Plateforme européenne pour l'innovation, la recherche et les politiques de l'eau. Membre du réseau Water-Oriented Living Labs.",
      aff3Desc: "Programme national de l'écosystème startup. Reconnue comme entreprise hardware deep tech à potentiel international.",
      aff4Desc: "Communauté de startups en biotechnologie et technologie de santé co-localisées à l'incubateur IPN, Coimbra.",
      aff5Desc: "Association d'entreprises pour l'innovation, reliant les entreprises intensives en R&D à l'industrie et au monde académique.",
      aff6Desc: "Association nationale des services de santé. Relation de conseil technique pour les normes d'assainissement dans les établissements de soins.",
    },
  },

  de: {
    dir: "ltr",
    nav: { product: "Produkt", company: "Unternehmen", projects: "Projekte", hideSubnav: "Unternavigation ausblenden" },
    mode: { bathroom: "Badezimmer", health: "Gesundheit", label: "mode" },
    cta: { waiting: "Warteliste beitreten", pilot: "Pilotprogramm beantragen", noPayment: "Keine Vorauszahlung erforderlich" },
    hero: {
      eyebrow: "Intelligente Sanitärplattform",
      line1: "Ein einzigartiges Design", line2: "hat die Toilette neu erfunden", line3: "",
      sub1: "verborgen oder mit einzigartiger Ästhetik", sub2: "— ein Produkt nach Ihrem Bild —", sub3: "",
      feat1: "100% autonomes Waschen", feat2: "Vollständige Reinigung: Becken und Sitz",
      feat3: "Wasserersparnis-Rekord <1L", feat4: "",
    },
    health: {
      badge: "Portugiesische Innovation",
      h1a: "Die Toilette, die", h1b: "Ihre Gesundheit", h1c: "analysiert",
      desc: "die erste intelligente Toilette der Welt, die nicht-invasive Urinanalysen durchführt und",
      brand: "ablute_",
      cta1: "Mehr erfahren", cta2: "Demo ansehen",
      statWaterLabel: "Wassereinsparung", statMonitorLabel: "Überwachung", statFlushLabel: "Pro Spülung",
      deviceTitle: "Intelligente Toilette", deviceTap: "Tippen für mehr Infos",
      deviceHydration: "Hydration", deviceHydrationVal: "Optimal",
      deviceBiomarkers: "Biomarker", deviceBiomarkersVal: "Normal", deviceScore: "Punktzahl",
      badgeEco: "Umweltfreundlich", badgeEcoVal: "100% nachhaltig",
      badgeHealth: "Gesundheit", badgeHealthVal: "Echtzeit-Analyse",
      tabProduct: "Produkt", tabScience: "Wissenschaft", tabForWho: "Für wen",
      productTitle: "ablute_ Technologie", productDesc: "Die Plattform, die das Bad in eine präventive Gesundheitsschnittstelle verwandelt.",
      tabBiosensing: "Biosensoren & Methoden", tabAI: "Künstliche Intelligenz",
      pilotBanner: "Interesse an der Validierung der Technologie?", pilotBannerSub: "Nehmen Sie am Pilotprogramm teil und gehören Sie zu den Ersten, die die Plattform testen.",
      scienceTitle: "Wissenschaftliche Grundlage", scienceDesc: "Validierte klinische Methodik und Spitzenforschung.",
      forwhoTitle: "Für wen ist ablute_?", forwhoDesc: "Lösungen für verschiedene Kontexte und Bedürfnisse.",
      appModalTitle: "ablute_ App", appModalDesc: "Die App ist noch nicht verfügbar.", appModalSub: "Hinterlassen Sie Ihre E-Mail, um benachrichtigt zu werden.",
      appNotify: "Benachrichtigen", appThanks: "Danke!", appThanksDesc: "Sie werden benachrichtigt, wenn die App verfügbar ist.",
      pilotModalTitle: "Pilot hosten", pilotInstitution: "Name der Institution", pilotContact: "Ansprechperson",
      pilotEmail: "E-Mail", pilotCountry: "Land", pilotType: "Institutionstyp",
      pilotTypeHospital: "Krankenhaus", pilotTypeClinic: "Klinik", pilotTypeResearch: "Forschungszentrum",
      pilotTypeUniversity: "Universität", pilotTypeWellness: "Wellness-Zentrum",
      pilotSubmit: "Bewerbung einreichen", pilotSent: "Bewerbung eingereicht!", pilotSentDesc: "Wir werden uns bald mit Ihnen in Verbindung setzen.",
      demoTitle: "Demo ansehen", demoDesc: "Demo bald verfügbar.", demoSub: "Wir bereiten eine interaktive Demonstration der ablute_ Plattform vor.",
      demoCta: "Für Pilot bewerben",
      aiFlowTitle: "Vom Signal zum Gesundheits-Insight",
      aiStep1: "Biochemisches Signal", aiStep2: "Verarbeitung", aiStep3: "KI-Modell", aiStep4: "Persönlicher Insight", aiStep5: "Präventive Maßnahme",
      hostPilot: "Pilot hosten",
    },
    float: {
      client: "Kundenbereich", partners: "Partner & Lieferanten", investors: "Investoren", contacts: "Kontakt",
      clientTitle: "Kundenbereich", clientDesc: "Zugang nur für ablute_ Kunden.",
      clientNome: "Name", clientNumero: "Kunden- oder Vertragsnr.",
      clientNomePlaceholder: "Ihr Name", clientNumeroPlaceholder: "z.B. CLI-00123", clientEnter: "Anmelden",
      clientErrorTitle: "Ungültige Kunden- oder Vertragsnummer.", clientErrorDesc: "Dieser Bereich ist nur für Bestandskunden zugänglich.\nFalls Sie ein Problem mit Ihrer Anmeldung vermuten, schreiben Sie uns.",
      clientErrorCta: "Technischen Support anfragen", clientRetry: "Erneut versuchen", clientSupport: "Technischen Support anfragen",
      clientSupportNome: "Name", clientSupportEmail: "E-Mail", clientSupportNumero: "Kunden- oder Vertragsnr.",
      clientSupportMsg: "Nachricht", clientSupportSubmit: "Support-Anfrage senden",
      clientSupportSent: "Ihre Nachricht wurde gesendet.", clientSupportSentDesc: "Unser Team wird sich in Kürze bei Ihnen melden.",
      partnersTitle: "Technologische & industrielle Partnerschaften",
      partnersIntro: "ablute_ entwickelt seine Technologie in Zusammenarbeit mit Industriepartnern, spezialisierten Lieferanten und Technologieunternehmen.",
      partnersBullet1: "Technologieentwicklung", partnersBullet2: "Systemintegration",
      partnersBullet3: "Industrieproduktion", partnersBullet4: "Lieferung spezialisierter Komponenten",
      partnersCategoriesLabel: "Kategorien", partnersProposeBtn: "Partnerschaft vorschlagen",
      partnersEmpresa: "Unternehmensname", partnersWebsite: "Webseite", partnersPais: "Land", partnersArea: "Fachgebiet", partnersMensagem: "Nachricht",
      partnersEmpresaPlaceholder: "Unternehmen GmbH", partnersPaisPlaceholder: "Deutschland",
      partnersAreaPlaceholder: "z.B. MEMS-Sensoren", partnersMensagemPlaceholder: "Beschreiben Sie den Kooperationsvorschlag...",
      investorsTitle: "Investoren",
      investorsDesc: "In ablute_ investieren\nbedeutet, in die Weiterentwicklung eines unverzichtbaren Produkts zu investieren — mit geringerem Umwelteinfluss, besserer Benutzerfreundlichkeit und mehr Intelligenz im Dienst des Nutzers.",
      investorsNome: "Name", investorsEmpresa: "Unternehmen oder Fonds", investorsEmail: "E-Mail",
      investorsTelefone: "Telefon", investorsArea: "Interessensbereich", investorsMensagem: "Nachricht",
      investorsNomePlaceholder: "Ihr Name", investorsEmpresaPlaceholder: "Fonds- oder Unternehmensname",
      investorsEmailPlaceholder: "email@fonds.de", investorsTelefonePlaceholder: "+49 170 000 0000",
      investorsAreaPlaceholder: "z.B. Hardware, HealthTech", investorsMensagemPlaceholder: "Zusätzliche Anmerkungen...",
      investorsSubmit: "Investor Brief anfordern", investorsSent: "Anfrage erhalten.", investorsSentDesc: "Wir werden Ihnen den Investor Brief in Kürze zusenden.",
      contactsTitle: "Kontakt aufnehmen",
      contactsDesc: "Für Geschäftsinformationen, Partnerschaften, Presse oder technischen Support nutzen Sie das Formular unten.",
      contactsNome: "Name", contactsEmail: "E-Mail", contactsAssunto: "Betreff", contactsMensagem: "Nachricht",
      contactsNomePlaceholder: "Ihr Name", contactsEmailPlaceholder: "email@beispiel.de",
      contactsAssuntoPlaceholder: "Betreff auswählen", contactsMensagemPlaceholder: "Ihre Nachricht...",
      contactsOpt1: "Informationsanfrage", contactsOpt2: "Partnerschaften", contactsOpt3: "Investoren",
      contactsOpt4: "Technischer Support", contactsOpt5: "Presse",
      contactsSubmit: "Nachricht senden", contactsSent: "Nachricht gesendet.", contactsSentDesc: "Unser Team wird in Kürze antworten.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "Wir gestalten die Zukunft intelligenter Sanitäranlagen. Wenn Sie unsere Vision teilen, möchten wir Sie kennenlernen.",
      workWithUsOpenLabel: "Offene Stellen",
      workWithUsApply: "Auf diese Stelle bewerben",
      workWithUsSpontLabel: "Initiativbewerbung",
      workWithUsNome: "Name", workWithUsEmail: "E-Mail",
      workWithUsArea: "Interessensbereich",
      workWithUsAreaOpt1: "Hardware-Engineering", workWithUsAreaOpt2: "Software & KI",
      workWithUsAreaOpt3: "Industriedesign", workWithUsAreaOpt4: "Gesundheitswissenschaften",
      workWithUsAreaOpt5: "Business & Partnerschaften",
      workWithUsMsg: "Nachricht", workWithUsMsgPlaceholder: "Erzählen Sie uns von sich und Ihrer Motivation...",
      workWithUsLinkedin: "LinkedIn oder Portfolio", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "Bewerbung senden", workWithUsSent: "Bewerbung eingegangen.",
      workWithUsSentDesc: "Vielen Dank für Ihr Interesse. Wir melden uns, wenn es eine Übereinstimmung gibt.",
      workWithUsApplyingTo: "Bewerbung für Stelle:",
      investorsHighlight1: "Early Stage bietet das größte Wertsteigerungspotenzial",
      investorsHighlight2: "Großer Markt und unvermeidliches Problem",
      investorsHighlight3: "Starkes Team und qualifizierte Ausführung",
      investorsHighlight4: "Progressive Traktion und Validierung",
      partnersCat1: "Technologie & Sensoren",
      partnersCat2: "Elektronische Komponenten",
      partnersCat3: "Mikrofluidik",
      partnersCat4: "Nanotechnologie",
      partnersCat5: "Software & KI",
      partnersCat6: "Industrielle Fertigung",
    },
    productPage: { tab1: "Technologie", tab2: "Produktblatt", tab3: "Sicherheit & Compliance", tab4: "Entwicklungsphasen" },
    companyPage: { tab1: "Mission & Werte", tab2: "Team", tab3: "Zertifizierungen" },
    projectsPage: { tab1: "Konsortialsprojekte", tab2: "Partner", tab3: "Mitgliedschaften" },
    product: {
      techTitle: "So funktioniert ablute_",
      techDesc: "ablute_ vereint Wassermanagement, intelligente Sensorik und Gesundheitsanalytik in einer einzigen Plattform. Jede Komponente ist darauf ausgelegt, autonom zu arbeiten, keine Benutzereingriffe zu erfordern und sich durch Nutzungsdaten kontinuierlich zu verbessern.",
      tech1Title: "Wassereffizienz-System", tech1Desc: "Präzisions-Mikrodosierventile reduzieren den Wasserverbrauch um bis zu 80% gegenüber herkömmlichen Modellen. Ein geschlossener Sensorring überwacht die Durchflussmenge in Echtzeit und passt den Waschzyklus dynamisch an.", tech1p1: "Mikrodosierventil-Architektur", tech1p2: "Echtzeit-Durchflussüberwachung", tech1p3: "Bis zu 80% Wasserreduzierung",
      tech2Title: "Intelligente Erkennung", tech2Desc: "Eine Reihe nicht-invasiver optischer und chemischer Sensoren erkennt Anwesenheit, Nutzungsart und biologische Marker. Die Daten werden lokal verarbeitet — nichts verlässt das Gerät ohne ausdrückliche Zustimmung.", tech2p1: "Optische Anwesenheitserkennung", tech2p2: "Chemische Biomarker-Erkennung", tech2p3: "Lokale Edge-Verarbeitung",
      tech3Title: "Waschmodi", tech3Desc: "Fünf konfigurierbare Waschprofile passen sich den Benutzerpräferenzen und Wasserbedingungen an. Das System lernt Nutzungsmuster und optimiert Zyklen proaktiv.", tech3p1: "5 konfigurierbare Profile", tech3p2: "Adaptives Zykluslernen", tech3p3: "Druckunabhängige Leistung",
      tech4Title: "Nutzungsmodi", tech4Desc: "Für gemeinsame und private Kontexte konzipiert. Die Multi-Benutzer-Profilerkennung ermöglicht personalisierte Einstellungen für Haushaltsmitglieder oder institutionelle Nutzer mit vollständiger Zugriffskontrolle.", tech4p1: "Multi-Benutzer-Profilerkennung", tech4p2: "Personalisierte Einstellungen pro Benutzer", tech4p3: "Institutionelle Zugriffskontrolle",
      sheetTitle: "Technische Spezifikation", sheetDesc: "Das technische Spezifikationsdokument von ablute_ umfasst Systemarchitektur, Komponentenspezifikationen, Installationsanforderungen und Leistungsbenchmarks.", sheetDrawing: "Technische Zeichnung",
      specDim: "Abmessungen", specVolt: "Betriebsspannung", specWater: "Wasseranschluss", specDrain: "Ablaufanschluss", specSensor: "Sensormodule", specWifi: "Drahtlos", specWeight: "Gewicht", specIp: "Schutzart IP",
      sheetDownload: "Technische Spezifikation herunterladen (PDF)", sheetVersion: "Dokumentversion 0.7 — Vorkommerziell. Änderungen vorbehalten.",
      safetyTitle: "Sicherheitsdesign", safetyDesc: "ablute_ wurde von Grund auf mit Sicherheit als zentraler Anforderung entwickelt. Die Systemarchitektur priorisiert den Benutzerschutz in elektrischer, mechanischer, biologischer und Compliance-Hinsicht.",
      safe1Title: "Elektrische Sicherheit", safe1Desc: "Das gesamte Aktivsystem arbeitet mit 12V DC Niederspannung und eliminiert das Risiko eines Stromschlags in feuchter Umgebung. Alle Leiterplatten sind nach IEC 60529 beschichtet und vergossen.", safe1p1: "12V DC Niederspannungssystem", safe1p2: "IP67-zertifizierte Gehäuse", safe1p3: "Konform beschichtete Elektronik",
      safe2Title: "Mechanische Sicherheit", safe2Desc: "Die Hinderniserkennung verhindert das Schließen der Schüssel, wenn ein Objekt oder Körperteil erkannt wird. Kraftbegrenzte Aktuatoren stoppen sofort bei Widerstand und erfüllen EN 563.", safe2p1: "Hinderniserkennung am Deckel", safe2p2: "Kraftbegrenzte Aktuatoren", safe2p3: "EN 563-konforme Oberflächen",
      safe3Title: "Benutzerschutz", safe3Desc: "Alle Materialien, die mit Wasser oder dem Benutzer in Berührung kommen, sind zertifizierte Lebensmittel- oder Medizinqualitätspolymere. Antimikrobielle Beschichtungen auf allen benetzten Oberflächen. Keine scharfen Kanten.", safe3p1: "Lebensmittel-/Medizinqualitätsmaterialien", safe3p2: "Antimikrobielle Oberflächenbeschichtungen", safe3p3: "Keine Klemmstellen im Design",
      safe4Title: "Technische Konformität", safe4Desc: "Unter Berücksichtigung des CE-Kennzeichnungswegs entwickelt. Dokumentationspaket folgt EN 61000 EMV-Anforderungen und EU-Ökodesign-Verordnung. Vor-Einreichungs-Review für 2025 geplant.", safe4p1: "CE-Weg-Dokumentation", safe4p2: "EN 61000 EMV-Design", safe4p3: "EU-Ökodesign-konform",
      safetyNote: "ablute_ befindet sich derzeit in der vorkommerziellen Entwicklungsphase. Formale Zertifizierungen (CE, ISO) sind für die Pre-Industrial-Model-Phase geplant. Alle Spezifikationen spiegeln die Designabsicht wider.",
      stagesTitle: "Entwicklungszeitplan", stagesDesc: "ablute_ folgt einem strukturierten Technologiereifepfad vom Konzept bis zur kommerziellen Skalierung. Jede Stufe stellt einen validierten Meilenstein mit messbaren Ingenieur-Deliverables dar.", inProgress: "In Bearbeitung",
      stage1: "Konzeptentwicklung", stage1d: "Kernproduktbild definiert, anfängliche Engineering-Anforderungen umrissen, IP-Schutz eingeleitet.",
      stage2: "Ingenieurprototyp", stage2d: "Erstes funktionsfähiges Prototyp zusammengebaut, das Wasser-, Sensor- und Reinigungsmodule integriert.",
      stage3: "Pilotdemonstration", stage3d: "Tests in kontrollierter Umgebung mit ausgewählten Partnerinstitutionen. Datenerhebung und Iteration.",
      stage4: "Vor-Industrie-Modell", stage4d: "Design für die Fertigung, Lieferkettenqualifikation, regulatorische Vor-Einreichung.",
      stage5: "Kommerzielle Einführung", stage5d: "CE-Kennzeichnung, kommerzielle Vereinbarungen, skalierte Produktion und Vertrieb.",
    },
    company: {
      missionTitle: "Unser Ziel",
      missionP1: "ablute_ wurde auf einer einzigen Überzeugung gegründet: Die Infrastruktur des täglichen Lebens kann einen weitaus größeren Zweck erfüllen als derzeit.",
      missionP2: "Wir entwickeln Sanitärsysteme, die Wasserverschwendung eliminieren, ohne Benutzeraufwand funktionieren und passiv die Gesundheitsdaten sammeln, die die Präventivmedizin benötigt — am konsistentesten Berührungspunkt in der menschlichen Routine.",
      val1Title: "Ökologische Verantwortung", val1Desc: "Wasserknappheit nimmt zu. ablute_ wurde entwickelt, um sie am Verbrauchsort zu lösen — Verschwendung zu eliminieren, ohne Benutzer um Verhaltensänderungen zu bitten.",
      val2Title: "Technische Exzellenz", val2Desc: "Wir glauben, dass die wirkungsvollsten Produkte im Gebrauch unsichtbar sind. Komplexität wird eingebaut, damit Einfachheit herauskommt. Jede Komponente ist zweckbestimmt.",
      val3Title: "Präventive Gesundheitsinfrastruktur", val3Desc: "Das Badezimmer wird täglich mehrmals besucht — es ist der am meisten untergenutzte Gesundheitsüberwachungspunkt in der gebauten Umgebung. Das ändern wir.",
      quote: "\"Das Badezimmer ist der einzige Raum, der von jedem Menschen mehrmals täglich sein ganzes Leben lang aufgesucht wird. Es ist das am meisten untergenutzte Gesundheitsgut, das es gibt.\"",
      quoteAttr: "ablute_ Gründungsthese, 2021",
      foundersLabel: "Gründer und Führung", foundersIntro: "Die ablute_-Plattform wird von einem multidisziplinären Team entwickelt, das Ingenieurwesen, Medizinwissenschaften und technologische Innovation vereint.",
      rdLabel: "Forschung und Entwicklung", rdIntro: "Das F&E-Team unterstützt die Entwicklung der ablute_-Plattform durch wissenschaftliche Forschung, Ingenieurwesen und Biotechnologie.",
      certsTitle: "Institutionelle Anerkennung", certsDesc: "ablute_ nimmt an einem Netzwerk von Innovationsprogrammen, Inkubatoren und öffentlichen Förderinstrumenten teil, die unseren Entwicklungsweg validieren und beschleunigen.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Ausgewählt für das nationale Startup-Förderprogramm, mit Zugang zu Finanzierungsinstrumenten und institutionellem Netzwerk.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Antrag beim European Innovation Council Accelerator eingereicht, ausgerichtet auf Deep-Tech-Hardware-Ventures.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Vergabe eines F&E-Kooperationsgutscheins für die Zusammenarbeit mit einem nationalen Polytechnikum zur Sensorentwicklung.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Ansässiges Unternehmen am Instituto Pedro Nunes, Portugals führendem Technologieinkubator und -akzelerator.",
    },
    projects: {
      consortTitle: "Kollaborative F&E", consortDesc: "ablute_ beteiligt sich an und leitet kollaborative Innovationsprojekte mit Forschungseinrichtungen, Universitäten und Industriepartnern in ganz Europa.", roleLabel: "Rolle",
      proj1Desc: "Kollaboratives Forschungsprojekt zur Entwicklung nicht-invasiver optischer Sensorik für die Biomarkerdetektion in Wasser in Sanitärkontexten.", proj1Role: "Technologieführer — Sensormoduldesign und Datenverarbeitungsarchitektur.",
      proj2Desc: "Europäisches Konsortium zur Erforschung passiver Gesundheitsüberwachungsinfrastruktur in Wohn- und Pflegeumgebungen. Fokus auf Nierenfunktion und Stoffwechselmarker.", proj2Role: "Industriepartner — Plattformintegration und klinisches Protokolldesign.",
      proj3Desc: "Sektorübergreifendes Projekt zur Kreislaufwasserwirtschaft im Gebäudemaßstab. ablute_ trägt Module zur intelligenten Bedarfsreduzierung und Grauwassersensorik bei.", proj3Role: "Komponentenlieferant und Datenpartner",
      partnersTitle: "Partnernetzwerk", partnersDesc: "Unser Partnernetzwerk umfasst Forschungsinstitute, Universitäten, öffentliche Versorgungsunternehmen und Technologiezentren in Portugal und Europa.",
      affiliationsTitle: "Ökosystem-Beteiligung", affiliationsDesc: "ablute_ ist in die für seine Mission relevantesten Innovationsökosysteme eingebettet — Wassertechnologie, Gesundheitsinfrastruktur und Deep Tech.",
      aff1Desc: "Nationaler Gesundheitstechnologie-Cluster, der Medtech-Unternehmen, Krankenhäuser und Forschungseinrichtungen verbindet.",
      aff2Desc: "Europäische Plattform für Wasserinnovation, Forschung und Politik. Mitglied des Water-Oriented Living Labs-Netzwerks.",
      aff3Desc: "Nationales Startup-Ökosystem-Programm. Anerkannt als Deep-Tech-Hardware-Unternehmen mit internationalem Potenzial.",
      aff4Desc: "Gemeinschaft von Biotech- und Gesundheitstechnologie-Startups, die gemeinsam im IPN-Inkubator, Coimbra, ansässig sind.",
      aff5Desc: "Unternehmensverband für Innovation, der F&E-intensive Unternehmen mit Industrie und Wissenschaft verbindet.",
      aff6Desc: "Nationaler Gesundheitsdienstleistungsverband. Technische Beratungsbeziehung für Sanitärstandards in Pflegeeinrichtungen.",
    },
  },

  it: {
    dir: "ltr",
    nav: { product: "Prodotto", company: "Azienda", projects: "Progetti", hideSubnav: "Nascondi sottonavigazione" },
    mode: { bathroom: "Bagno", health: "Salute", label: "mode" },
    cta: { waiting: "Unisciti alla Lista d'Attesa", pilot: "Candidati al Pilota", noPayment: "Nessun pagamento anticipato" },
    hero: {
      eyebrow: "Piattaforma Sanitaria Intelligente",
      line1: "Un design unico", line2: "ha reinventato il water", line3: "",
      sub1: "nascosto o con estetica unica", sub2: "— un prodotto a vostra immagine —", sub3: "",
      feat1: "Lavaggio 100% autonomo", feat2: "Pulizia integrale: tazza e sedile",
      feat3: "Record di risparmio idrico <1L", feat4: "",
    },
    health: {
      badge: "Innovazione Portoghese",
      h1a: "Il Water che", h1b: "Analizza", h1c: "la Tua Salute",
      desc: "il primo water intelligente al mondo che esegue analisi delle urine non invasive, risparmiando",
      brand: "ablute_",
      cta1: "Scopri di più", cta2: "Guarda la Demo",
      statWaterLabel: "Risparmio Idrico", statMonitorLabel: "Monitoraggio", statFlushLabel: "Per Scarico",
      deviceTitle: "Water Intelligente", deviceTap: "Tocca per saperne di più",
      deviceHydration: "Idratazione", deviceHydrationVal: "Ottimale",
      deviceBiomarkers: "Biomarcatori", deviceBiomarkersVal: "Normale", deviceScore: "Punteggio",
      badgeEco: "Ecologico", badgeEcoVal: "100% Sostenibile",
      badgeHealth: "Salute", badgeHealthVal: "Analisi in Tempo Reale",
      tabProduct: "Prodotto", tabScience: "Scienza", tabForWho: "Per Chi",
      productTitle: "Tecnologia ablute_", productDesc: "La piattaforma che trasforma il bagno in un'interfaccia di salute preventiva.",
      tabBiosensing: "Biosensori & Metodi", tabAI: "Intelligenza Artificiale",
      pilotBanner: "Interessato a validare la tecnologia?", pilotBannerSub: "Unisciti al programma pilota e sii tra i primi a testare la piattaforma.",
      scienceTitle: "Base Scientifica", scienceDesc: "Metodologia clinica validata e ricerca all'avanguardia.",
      forwhoTitle: "Per chi è ablute_?", forwhoDesc: "Soluzioni adattate a diversi contesti ed esigenze.",
      appModalTitle: "App ablute_", appModalDesc: "L'app non è ancora disponibile.", appModalSub: "Lascia la tua email per essere notificato quando sarà disponibile.",
      appNotify: "Avvisami", appThanks: "Grazie!", appThanksDesc: "Sarai avvisato quando l'app sarà disponibile.",
      pilotModalTitle: "Ospita un Pilota", pilotInstitution: "Nome dell'Istituzione", pilotContact: "Persona di Contatto",
      pilotEmail: "Email", pilotCountry: "Paese", pilotType: "Tipo di Istituzione",
      pilotTypeHospital: "Ospedale", pilotTypeClinic: "Clinica", pilotTypeResearch: "Centro di Ricerca",
      pilotTypeUniversity: "Università", pilotTypeWellness: "Centro Benessere",
      pilotSubmit: "Invia Candidatura", pilotSent: "Candidatura inviata!", pilotSentDesc: "Ti contatteremo presto.",
      demoTitle: "Guarda la Demo", demoDesc: "Demo presto disponibile.", demoSub: "Stiamo preparando una dimostrazione interattiva della piattaforma ablute_.",
      demoCta: "Candidati al Pilota",
      aiFlowTitle: "Dal Segnale all'Insight Sanitario",
      aiStep1: "Segnale Biochimico", aiStep2: "Elaborazione", aiStep3: "Modello AI", aiStep4: "Insight Personale", aiStep5: "Azione Preventiva",
      hostPilot: "Ospita un Pilota",
    },
    float: {
      client: "Area Cliente", partners: "Partner e Fornitori", investors: "Investitori", contacts: "Contatti",
      clientTitle: "Area Cliente", clientDesc: "Accesso riservato ai clienti ablute_.",
      clientNome: "Nome", clientNumero: "N° Cliente o Contratto",
      clientNomePlaceholder: "Il tuo nome", clientNumeroPlaceholder: "es. CLI-00123", clientEnter: "Accedi",
      clientErrorTitle: "N° cliente o contratto non valido.", clientErrorDesc: "Quest'area è riservata ai clienti esistenti.\nSe ritieni ci sia un problema con il tuo accesso, inviaci un messaggio.",
      clientErrorCta: "Richiedere Supporto Tecnico", clientRetry: "Riprova", clientSupport: "Richiedere Supporto Tecnico",
      clientSupportNome: "Nome", clientSupportEmail: "Email", clientSupportNumero: "N° Cliente o Contratto",
      clientSupportMsg: "Messaggio", clientSupportSubmit: "Invia richiesta di supporto",
      clientSupportSent: "Il tuo messaggio è stato inviato.", clientSupportSentDesc: "Il nostro team ti contatterà a breve.",
      partnersTitle: "Partnership Tecnologiche & Industriali",
      partnersIntro: "ablute_ sviluppa la sua tecnologia in collaborazione con partner industriali, fornitori specializzati e aziende tecnologiche.",
      partnersBullet1: "sviluppo tecnologico", partnersBullet2: "integrazione di sistemi",
      partnersBullet3: "produzione industriale", partnersBullet4: "fornitura di componenti specializzati",
      partnersCategoriesLabel: "Categorie", partnersProposeBtn: "Proponi Partnership",
      partnersEmpresa: "Nome azienda", partnersWebsite: "Sito web", partnersPais: "Paese", partnersArea: "Area di specializzazione", partnersMensagem: "Messaggio",
      partnersEmpresaPlaceholder: "Azienda S.r.l.", partnersPaisPlaceholder: "Italia",
      partnersAreaPlaceholder: "es. Sensori MEMS", partnersMensagemPlaceholder: "Descrivi la proposta di collaborazione...",
      investorsTitle: "Investitori",
      investorsDesc: "Investire in ablute_\nsignifica investire nell'evoluzione di un prodotto indispensabile — con meno impatto ambientale, migliore usabilità e più intelligenza al servizio dell'utente.",
      investorsNome: "Nome", investorsEmpresa: "Azienda o Fondo", investorsEmail: "Email",
      investorsTelefone: "Telefono", investorsArea: "Area di interesse", investorsMensagem: "Messaggio",
      investorsNomePlaceholder: "Il tuo nome", investorsEmpresaPlaceholder: "Nome del fondo o azienda",
      investorsEmailPlaceholder: "email@fondo.it", investorsTelefonePlaceholder: "+39 340 000 0000",
      investorsAreaPlaceholder: "es. Hardware, HealthTech", investorsMensagemPlaceholder: "Note aggiuntive...",
      investorsSubmit: "Richiedi Investor Brief", investorsSent: "Richiesta ricevuta.", investorsSentDesc: "Ti invieremo l'Investor Brief a breve.",
      contactsTitle: "Contattaci",
      contactsDesc: "Per informazioni commerciali, partnership, stampa o supporto tecnico usa il modulo sottostante.",
      contactsNome: "Nome", contactsEmail: "Email", contactsAssunto: "Oggetto", contactsMensagem: "Messaggio",
      contactsNomePlaceholder: "Il tuo nome", contactsEmailPlaceholder: "email@esempio.it",
      contactsAssuntoPlaceholder: "Seleziona oggetto", contactsMensagemPlaceholder: "Il tuo messaggio...",
      contactsOpt1: "Richiesta di informazioni", contactsOpt2: "Partnership", contactsOpt3: "Investitori",
      contactsOpt4: "Supporto tecnico", contactsOpt5: "Stampa",
      contactsSubmit: "Invia messaggio", contactsSent: "Messaggio inviato.", contactsSentDesc: "Il nostro team risponderà a breve.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "Stiamo costruendo il futuro dei sanitari intelligenti. Se condivide la nostra visione, vogliamo conoscerla.",
      workWithUsOpenLabel: "Posizioni Aperte",
      workWithUsApply: "Candidarsi a questa posizione",
      workWithUsSpontLabel: "Candidatura Spontanea",
      workWithUsNome: "Nome", workWithUsEmail: "Email",
      workWithUsArea: "Area di Interesse",
      workWithUsAreaOpt1: "Ingegneria Hardware", workWithUsAreaOpt2: "Software & IA",
      workWithUsAreaOpt3: "Design Industriale", workWithUsAreaOpt4: "Scienze della Salute",
      workWithUsAreaOpt5: "Business & Partnership",
      workWithUsMsg: "Messaggio", workWithUsMsgPlaceholder: "Raccontaci di te e di cosa ti motiva...",
      workWithUsLinkedin: "LinkedIn o Portfolio", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "Invia candidatura", workWithUsSent: "Candidatura ricevuta.",
      workWithUsSentDesc: "Grazie per il tuo interesse. Ti contatteremo se c'è corrispondenza.",
      workWithUsApplyingTo: "Candidatura per il ruolo:",
      investorsHighlight1: "L'early stage offre il maggior potenziale di valorizzazione",
      investorsHighlight2: "Mercato grande e problema inevitabile",
      investorsHighlight3: "Team solido ed esecuzione qualificata",
      investorsHighlight4: "Trazione e validazione progressive",
      partnersCat1: "Tecnologia & Sensori",
      partnersCat2: "Componenti Elettronici",
      partnersCat3: "Microfluidica",
      partnersCat4: "Nanotecnologia",
      partnersCat5: "Software & IA",
      partnersCat6: "Produzione Industriale",
    },
    productPage: { tab1: "Tecnologia", tab2: "Scheda Prodotto", tab3: "Sicurezza & Conformità", tab4: "Fasi di Sviluppo" },
    companyPage: { tab1: "Missione & Valori", tab2: "Team", tab3: "Certificazioni" },
    projectsPage: { tab1: "Progetti Consortili", tab2: "Partner", tab3: "Affiliazioni" },
    product: {
      techTitle: "Come funziona ablute_",
      techDesc: "ablute_ integra la gestione dell'acqua, i sensori intelligenti e l'analisi della salute in un'unica piattaforma. Ogni componente è progettato per operare autonomamente, senza intervento dell'utente, migliorando continuamente grazie ai dati d'utilizzo.",
      tech1Title: "Sistema di Efficienza Idrica", tech1Desc: "Valvole di micro-dosaggio di precisione riducono il consumo d'acqua fino all'80% rispetto ai modelli convenzionali. Una serie di sensori ad anello chiuso monitora la portata in tempo reale, regolando dinamicamente il ciclo di lavaggio.", tech1p1: "Architettura a valvole di micro-dosaggio", tech1p2: "Monitoraggio del flusso in tempo reale", tech1p3: "Fino all'80% di riduzione dell'acqua",
      tech2Title: "Rilevamento Intelligente", tech2Desc: "Un array di sensori ottici e chimici non invasivi rileva la presenza, il tipo di utilizzo e i marcatori biologici. I dati vengono elaborati localmente — nulla lascia il dispositivo senza consenso esplicito.", tech2p1: "Rilevamento di presenza ottico", tech2p2: "Rilevamento di biomarcatori chimici", tech2p3: "Elaborazione locale edge",
      tech3Title: "Modalità di Lavaggio", tech3Desc: "Cinque profili di lavaggio configurabili si adattano alle preferenze dell'utente e alle condizioni di fornitura idrica. Il sistema apprende i modelli d'uso e ottimizza i cicli in modo proattivo.", tech3p1: "5 profili configurabili", tech3p2: "Apprendimento adattivo dei cicli", tech3p3: "Prestazioni indipendenti dalla pressione",
      tech4Title: "Modalità d'Uso", tech4Desc: "Progettato per contesti condivisi e privati. Il riconoscimento del profilo multi-utente consente impostazioni personalizzate per i membri della famiglia o gli utenti istituzionali.", tech4p1: "Riconoscimento profilo multi-utente", tech4p2: "Impostazioni personalizzate per utente", tech4p3: "Controllo accessi istituzionale",
      sheetTitle: "Specifiche Tecniche", sheetDesc: "Il documento di specifica tecnica ablute_ copre l'architettura del sistema, le specifiche dei componenti, i requisiti di installazione e i benchmark di prestazioni.", sheetDrawing: "Disegno Tecnico",
      specDim: "Dimensioni", specVolt: "Tensione di Esercizio", specWater: "Collegamento Idrico", specDrain: "Collegamento Scarico", specSensor: "Moduli Sensori", specWifi: "Wireless", specWeight: "Peso", specIp: "Grado IP",
      sheetDownload: "Scarica Specifiche Tecniche (PDF)", sheetVersion: "Documento versione 0.7 — Pre-commerciale. Soggetto a modifiche.",
      safetyTitle: "Progetto di Sicurezza", safetyDesc: "ablute_ è progettata fin dai principi fondamentali con la sicurezza come vincolo centrale. L'architettura del sistema prioritizza la protezione degli utenti nelle dimensioni elettrica, meccanica, biologica e di conformità.",
      safe1Title: "Sicurezza Elettrica", safe1Desc: "L'intero sistema attivo opera a 12V DC a bassa tensione, eliminando il rischio di scosse elettriche in ambienti umidi. Tutti i PCB sono rivestiti e incapsulati secondo lo standard IEC 60529.", safe1p1: "Sistema a bassa tensione 12V DC", safe1p2: "Involucri con grado IP67", safe1p3: "Elettronica con rivestimento conforme",
      safe2Title: "Sicurezza Meccanica", safe2Desc: "Il rilevamento delle ostruzioni impedisce la chiusura del vaso se viene rilevato un oggetto o una parte del corpo. Gli attuatori a forza limitata si fermano immediatamente in caso di resistenza.", safe2p1: "Rilevamento ostruzioni sul coperchio", safe2p2: "Attuatori a forza limitata", safe2p3: "Superfici conformi EN 563",
      safe3Title: "Protezione dell'Utente", safe3Desc: "Tutti i materiali a contatto con l'acqua o l'utente sono polimeri certificati alimentari o medicali. Rivestimenti antimicrobici su tutte le superfici bagnate. Nessun bordo tagliente nel design meccanico.", safe3p1: "Materiali alimentari/medicali", safe3p2: "Rivestimenti antimicrobici", safe3p3: "Design senza punti di pizzico",
      safe4Title: "Conformità Tecnica", safe4Desc: "Progettato con il percorso di marcatura CE in mente. Il pacchetto documentale segue i requisiti EMC EN 61000 e il Regolamento Ecodesign UE. Revisione pre-presentazione prevista per il 2025.", safe4p1: "Documentazione percorso CE", safe4p2: "Design EMC EN 61000", safe4p3: "Conforme all'Ecodesign UE",
      safetyNote: "ablute_ si trova attualmente nella fase di sviluppo pre-commerciale. Le certificazioni formali (CE, ISO) sono previste per la fase Pre-Industrial Model. Tutte le specifiche riflettono l'intento progettuale.",
      stagesTitle: "Calendario di Sviluppo", stagesDesc: "ablute_ segue un percorso strutturato di maturità tecnologica dal concetto alla scala commerciale. Ogni fase rappresenta una pietra miliare validata con deliverable ingegneristici misurabili.", inProgress: "In Corso",
      stage1: "Sviluppo del Concetto", stage1d: "Visione centrale del prodotto definita, requisiti di ingegneria iniziali delineati, protezione IP avviata.",
      stage2: "Prototipo Ingegneristico", stage2d: "Primo prototipo funzionale assemblato integrando moduli acqua, sensori e pulizia.",
      stage3: "Dimostrazione Pilota", stage3d: "Test in ambiente controllato con istituzioni partner selezionate. Raccolta dati e iterazione.",
      stage4: "Modello Pre-Industriale", stage4d: "Design per la produzione, qualificazione della supply chain, pre-presentazione normativa.",
      stage5: "Distribuzione Commerciale", stage5d: "Marcatura CE, accordi commerciali, produzione e distribuzione su scala.",
    },
    company: {
      missionTitle: "Il Nostro Scopo",
      missionP1: "ablute_ è stata fondata su un'unica convinzione: l'infrastruttura della vita quotidiana può avere uno scopo molto più grande di quello attuale.",
      missionP2: "Progettiamo sistemi igienico-sanitari che eliminano gli sprechi d'acqua, funzionano senza alcuno sforzo da parte dell'utente e raccolgono passivamente i dati sanitari di cui la medicina preventiva ha bisogno — nel punto di contatto più costante della routine umana.",
      val1Title: "Responsabilità Ambientale", val1Desc: "La scarsità d'acqua sta accelerando. ablute_ è stata costruita per risolverla al punto d'uso — eliminando gli sprechi senza chiedere agli utenti di cambiare comportamento.",
      val2Title: "Eccellenza Ingegneristica", val2Desc: "Crediamo che i prodotti più incisivi siano invisibili nell'uso. La complessità è progettata affinché la semplicità emerga. Ogni componente è intenzionale.",
      val3Title: "Infrastruttura Sanitaria Preventiva", val3Desc: "Il bagno viene visitato più volte al giorno — è il punto di monitoraggio della salute più sottoutilizzato nell'ambiente costruito. Lo stiamo cambiando.",
      quote: "\"Il bagno è l'unica stanza visitata da ogni persona, più volte al giorno, per tutta la durata della propria vita. È il patrimonio sanitario più sottoutilizzato in assoluto.\"",
      quoteAttr: "Tesi fondativa ablute_, 2021",
      foundersLabel: "Fondatori e Leadership", foundersIntro: "La piattaforma ablute_ è sviluppata da un team multidisciplinare che combina ingegneria, scienze mediche e innovazione tecnologica.",
      rdLabel: "Ricerca e Sviluppo", rdIntro: "Il team R&D supporta lo sviluppo della piattaforma ablute_ attraverso la ricerca scientifica, l'ingegneria e la biotecnologia.",
      certsTitle: "Riconoscimento Istituzionale", certsDesc: "ablute_ partecipa a una rete di programmi di innovazione, incubatori e strumenti di finanziamento pubblico che validano e accelerano il nostro percorso di sviluppo.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selezionata per il programma nazionale di supporto alle startup, con accesso a strumenti di finanziamento e rete istituzionale.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidatura presentata all'Acceleratore del Consiglio Europeo per l'Innovazione, con focus su hardware deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Assegnato un voucher di collaborazione R&D per partnership con un istituto politecnico nazionale sullo sviluppo di sensori.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Azienda residente all'Instituto Pedro Nunes, il principale incubatore e acceleratore tecnologico del Portogallo.",
    },
    projects: {
      consortTitle: "R&D Collaborativa", consortDesc: "ablute_ partecipa e guida progetti di innovazione collaborativa con istituti di ricerca, università e partner industriali in tutta Europa.", roleLabel: "Ruolo",
      proj1Desc: "Progetto di ricerca collaborativa che sviluppa sensori ottici non invasivi per il rilevamento di biomarcatori nell'acqua in contesti igienico-sanitari.", proj1Role: "Technology Lead — progettazione del modulo sensore e architettura di elaborazione dei dati.",
      proj2Desc: "Consorzio europeo che esplora l'infrastruttura di monitoraggio passivo della salute in ambienti residenziali e di cura. Focus sulla funzione renale e sui marcatori metabolici.", proj2Role: "Partner Industriale — integrazione della piattaforma e progettazione del protocollo clinico.",
      proj3Desc: "Progetto intersettoriale che punta all'economia circolare dell'acqua alla scala dell'edificio. ablute_ contribuisce con moduli di riduzione intelligente della domanda e sensori per le acque grigie.", proj3Role: "Fornitore di Componenti e Partner Dati",
      partnersTitle: "Rete di Partner", partnersDesc: "La nostra rete di partner comprende istituti di ricerca, università, servizi pubblici e centri tecnologici in Portogallo e in Europa.",
      affiliationsTitle: "Partecipazione all'Ecosistema", affiliationsDesc: "ablute_ è inserita negli ecosistemi innovativi più rilevanti per la sua missione — tecnologia idrica, infrastruttura sanitaria e deep tech.",
      aff1Desc: "Cluster nazionale di tecnologia sanitaria che collega aziende medtech, ospedali e istituzioni di ricerca.",
      aff2Desc: "Piattaforma europea per l'innovazione idrica, la ricerca e le politiche. Membro della rete Water-Oriented Living Labs.",
      aff3Desc: "Programma nazionale dell'ecosistema startup. Riconosciuta come azienda hardware deep tech con potenziale internazionale.",
      aff4Desc: "Comunità di startup biotech e health tech co-localizzate nell'incubatore IPN, Coimbra.",
      aff5Desc: "Associazione imprenditoriale per l'innovazione, che collega aziende ad alta intensità di R&D con industria e accademia.",
      aff6Desc: "Associazione nazionale dei servizi sanitari. Rapporto di consulenza tecnica per gli standard igienico-sanitari nelle strutture di cura.",
    },
  },

  ar: {
    dir: "rtl",
    nav: { product: "المنتج", company: "الشركة", projects: "المشاريع", hideSubnav: "إخفاء القائمة الفرعية" },
    mode: { bathroom: "الحمام", health: "الصحة", label: "mode" },
    cta: { waiting: "انضم إلى قائمة الانتظار", pilot: "تقدم لبرنامج التجريب", noPayment: "لا دفعة مقدمة" },
    hero: {
      eyebrow: "منصة الصرف الصحي الذكي",
      line1: "تصميم فريد", line2: "أعاد اختراع المرحاض", line3: "",
      sub1: "مخفيّ أو بجمالية فريدة", sub2: "— جهاز على صورتك —", sub3: "",
      feat1: "غسيل ذاتي 100%", feat2: "تنظيف شامل: الحوض والمقعد",
      feat3: "قياس توفير المياه <1L", feat4: "",
    },
    health: {
      badge: "ابتكار برتغالي",
      h1a: "المرحاض الذي", h1b: "يحلل", h1c: "صحتك",
      desc: "أول مرحاض ذكي في العالم يجري تحليلات بول غير جراحية، مما يوفر",
      brand: "ablute_",
      cta1: "اعرف المزيد", cta2: "شاهد العرض",
      statWaterLabel: "توفير المياه", statMonitorLabel: "المراقبة", statFlushLabel: "لكل دورة",
      deviceTitle: "مرحاض ذكي", deviceTap: "اضغط لمعرفة المزيد",
      deviceHydration: "الترطيب", deviceHydrationVal: "مثالي",
      deviceBiomarkers: "المؤشرات الحيوية", deviceBiomarkersVal: "طبيعي", deviceScore: "النتيجة",
      badgeEco: "صديق للبيئة", badgeEcoVal: "100% مستدام",
      badgeHealth: "الصحة", badgeHealthVal: "تحليل فوري",
      tabProduct: "المنتج", tabScience: "العلوم", tabForWho: "لمن",
      productTitle: "تقنية ablute_", productDesc: "المنصة التي تحوّل الحمام إلى واجهة للرعاية الصحية الوقائية.",
      tabBiosensing: "المستشعرات الحيوية والطرق", tabAI: "الذكاء الاصطناعي",
      pilotBanner: "هل تريد التحقق من صحة التقنية؟", pilotBannerSub: "انضم إلى البرنامج التجريبي وكن من أوائل مختبري المنصة.",
      scienceTitle: "الأساس العلمي", scienceDesc: "منهجية سريرية مُتحقق منها وبحث متطور.",
      forwhoTitle: "لمن ablute_؟", forwhoDesc: "حلول مصممة لسياقات واحتياجات مختلفة.",
      appModalTitle: "تطبيق ablute_", appModalDesc: "التطبيق غير متاح بعد.", appModalSub: "اترك بريدك الإلكتروني ليتم إخطارك عند إتاحته.",
      appNotify: "أخطرني", appThanks: "شكراً!", appThanksDesc: "ستُخطر عند إتاحة التطبيق.",
      pilotModalTitle: "استضافة برنامج تجريبي", pilotInstitution: "اسم المؤسسة", pilotContact: "الشخص المسؤول",
      pilotEmail: "البريد الإلكتروني", pilotCountry: "الدولة", pilotType: "نوع المؤسسة",
      pilotTypeHospital: "مستشفى", pilotTypeClinic: "عيادة", pilotTypeResearch: "مركز بحثي",
      pilotTypeUniversity: "جامعة", pilotTypeWellness: "مركز العافية",
      pilotSubmit: "إرسال الطلب", pilotSent: "تم إرسال الطلب!", pilotSentDesc: "سنتواصل معك قريباً.",
      demoTitle: "شاهد العرض", demoDesc: "العرض التوضيحي قريباً.", demoSub: "نحن نعد عرضاً تفاعلياً لمنصة ablute_.",
      demoCta: "التقدم لبرنامج تجريبي",
      aiFlowTitle: "من الإشارة إلى الرؤية الصحية",
      aiStep1: "إشارة كيميائية حيوية", aiStep2: "المعالجة", aiStep3: "نموذج الذكاء الاصطناعي", aiStep4: "رؤية شخصية", aiStep5: "إجراء وقائي",
      hostPilot: "استضافة برنامج تجريبي",
    },
    float: {
      client: "منطقة العميل", partners: "الشركاء والموردون", investors: "المستثمرون", contacts: "اتصل بنا",
      clientTitle: "منطقة العميل", clientDesc: "وصول محجوز لعملاء ablute_.",
      clientNome: "الاسم", clientNumero: "رقم العميل أو العقد",
      clientNomePlaceholder: "اسمك", clientNumeroPlaceholder: "مثال: CLI-00123", clientEnter: "تسجيل الدخول",
      clientErrorTitle: "رقم العميل أو العقد غير صالح.", clientErrorDesc: "هذه المنطقة مخصصة للعملاء الحاليين.\nإذا كنت تعتقد أن هناك مشكلة في تسجيل دخولك، أرسل لنا رسالة.",
      clientErrorCta: "طلب دعم تقني", clientRetry: "حاول مجدداً", clientSupport: "طلب دعم تقني",
      clientSupportNome: "الاسم", clientSupportEmail: "البريد الإلكتروني", clientSupportNumero: "رقم العميل أو العقد",
      clientSupportMsg: "الرسالة", clientSupportSubmit: "إرسال طلب الدعم",
      clientSupportSent: "تم إرسال رسالتك.", clientSupportSentDesc: "سيتواصل فريقنا معك قريباً.",
      partnersTitle: "شراكات تكنولوجية وصناعية",
      partnersIntro: "تطور ablute_ تقنيتها بالتعاون مع شركاء صناعيين وموردين متخصصين وشركات تقنية.",
      partnersBullet1: "التطوير التكنولوجي", partnersBullet2: "تكامل الأنظمة",
      partnersBullet3: "الإنتاج الصناعي", partnersBullet4: "توريد مكونات متخصصة",
      partnersCategoriesLabel: "الفئات", partnersProposeBtn: "اقتراح شراكة",
      partnersEmpresa: "اسم الشركة", partnersWebsite: "الموقع الإلكتروني", partnersPais: "الدولة", partnersArea: "مجال التخصص", partnersMensagem: "الرسالة",
      partnersEmpresaPlaceholder: "شركة المحدودة", partnersPaisPlaceholder: "المملكة العربية السعودية",
      partnersAreaPlaceholder: "مثال: مستشعرات MEMS", partnersMensagemPlaceholder: "صف مقترح التعاون...",
      investorsTitle: "المستثمرون",
      investorsDesc: "الاستثمار في ablute_\nهو استثمار في تطور منتج لا غنى عنه — بتأثير بيئي أقل، وقابلية استخدام أفضل، وذكاء أكبر في خدمة المستخدم.",
      investorsNome: "الاسم", investorsEmpresa: "الشركة أو الصندوق", investorsEmail: "البريد الإلكتروني",
      investorsTelefone: "الهاتف", investorsArea: "مجال الاهتمام", investorsMensagem: "الرسالة",
      investorsNomePlaceholder: "اسمك", investorsEmpresaPlaceholder: "اسم الصندوق أو الشركة",
      investorsEmailPlaceholder: "email@fund.com", investorsTelefonePlaceholder: "+971 50 000 0000",
      investorsAreaPlaceholder: "مثال: أجهزة، تكنولوجيا الصحة", investorsMensagemPlaceholder: "ملاحظات إضافية...",
      investorsSubmit: "طلب ملف المستثمر", investorsSent: "تم استلام الطلب.", investorsSentDesc: "سنرسل لك ملف المستثمر قريباً.",
      contactsTitle: "تواصل معنا",
      contactsDesc: "للحصول على معلومات تجارية أو شراكات أو صحافة أو دعم تقني، استخدم النموذج أدناه.",
      contactsNome: "الاسم", contactsEmail: "البريد الإلكتروني", contactsAssunto: "الموضوع", contactsMensagem: "الرسالة",
      contactsNomePlaceholder: "اسمك", contactsEmailPlaceholder: "email@example.com",
      contactsAssuntoPlaceholder: "اختر الموضوع", contactsMensagemPlaceholder: "رسالتك...",
      contactsOpt1: "طلب معلومات", contactsOpt2: "شراكات", contactsOpt3: "مستثمرون",
      contactsOpt4: "الدعم التقني", contactsOpt5: "الصحافة",
      contactsSubmit: "إرسال الرسالة", contactsSent: "تم إرسال الرسالة.", contactsSentDesc: "سيرد فريقنا قريباً.",
      workWithUs: "Work With Us", workWithUsTitle: "Work With Us",
      workWithUsIntro: "نحن نبني مستقبل أنظمة الصرف الصحي الذكية. إذا كنت تشاركنا رؤيتنا، نريد التعرف عليك.",
      workWithUsOpenLabel: "الوظائف المتاحة",
      workWithUsApply: "التقدم لهذه الوظيفة",
      workWithUsSpontLabel: "طلب تلقائي",
      workWithUsNome: "الاسم", workWithUsEmail: "البريد الإلكتروني",
      workWithUsArea: "مجال الاهتمام",
      workWithUsAreaOpt1: "هندسة الأجهزة", workWithUsAreaOpt2: "البرمجيات والذكاء الاصطناعي",
      workWithUsAreaOpt3: "التصميم الصناعي", workWithUsAreaOpt4: "علوم الصحة",
      workWithUsAreaOpt5: "الأعمال والشراكات",
      workWithUsMsg: "رسالة", workWithUsMsgPlaceholder: "أخبرنا عن نفسك وما يحفزك...",
      workWithUsLinkedin: "LinkedIn أو المحفظة", workWithUsLinkedinPlaceholder: "linkedin.com/in/...",
      workWithUsSubmit: "إرسال الطلب", workWithUsSent: "تم استلام الطلب.",
      workWithUsSentDesc: "شكراً لاهتمامك. سنتواصل معك إذا كان هناك تطابق.",
      workWithUsApplyingTo: "التقديم لمنصب:",
      investorsHighlight1: "المرحلة المبكرة تقدم أكبر إمكانية لزيادة القيمة",
      investorsHighlight2: "سوق كبير ومشكلة لا مفر منها",
      investorsHighlight3: "فريق قوي وتنفيذ مؤهل",
      investorsHighlight4: "زخم وتحقق تدريجي",
      partnersCat1: "التكنولوجيا والمستشعرات",
      partnersCat2: "المكونات الإلكترونية",
      partnersCat3: "الميكروفلويديك",
      partnersCat4: "تكنولوجيا النانو",
      partnersCat5: "البرمجيات والذكاء الاصطناعي",
      partnersCat6: "الإنتاج الصناعي",
    },
    productPage: { tab1: "التقنية", tab2: "صحيفة المنتج", tab3: "السلامة والامتثال", tab4: "مراحل التطوير" },
    companyPage: { tab1: "المهمة والقيم", tab2: "الفريق", tab3: "الشهادات" },
    projectsPage: { tab1: "مشاريع الكونسورتيوم", tab2: "الشركاء", tab3: "الانتماءات" },
    product: {
      techTitle: "كيف تعمل ablute_",
      techDesc: "تدمج ablute_ إدارة المياه والاستشعار الذكي وتحليل الصحة في منصة واحدة متكاملة. تم تصميم كل مكون للعمل باستقلالية تامة دون تدخل المستخدم، مع التحسين المستمر بناءً على بيانات الاستخدام.",
      tech1Title: "نظام كفاءة المياه", tech1Desc: "تقلل صمامات الجرعات الدقيقة من استهلاك المياه بنسبة تصل إلى 80٪ مقارنة بالنماذج التقليدية. تراقب مصفوفة المستشعرات في حلقة مغلقة معدل التدفق في الوقت الفعلي وتضبط دورة الغسيل بشكل ديناميكي.", tech1p1: "هندسة صمامات الجرعات الدقيقة", tech1p2: "مراقبة التدفق في الوقت الفعلي", tech1p3: "تخفيض المياه حتى 80٪",
      tech2Title: "الكشف الذكي", tech2Desc: "تكشف مجموعة من أجهزة الاستشعار الضوئية والكيميائية غير الجراحية عن الوجود ونوع الاستخدام والمؤشرات البيولوجية. تتم معالجة البيانات محليًا — لا يغادر شيء الجهاز دون موافقة صريحة.", tech2p1: "كشف الحضور الضوئي", tech2p2: "استشعار المؤشرات الكيميائية الحيوية", tech2p3: "المعالجة المحلية على الحافة",
      tech3Title: "أوضاع الغسيل", tech3Desc: "تتكيف خمسة ملفات تعريف غسيل قابلة للتكوين مع تفضيلات المستخدم وظروف إمداد المياه. يتعلم النظام أنماط الاستخدام ويحسّن الدورات بشكل استباقي.", tech3p1: "5 ملفات تعريف قابلة للتكوين", tech3p2: "تعلم الدورات التكيفي", tech3p3: "أداء مستقل عن الضغط",
      tech4Title: "أوضاع الاستخدام", tech4Desc: "مصمم للسياقات المشتركة والخاصة. يتيح التعرف على ملف تعريف متعدد المستخدمين إعدادات مخصصة لأفراد الأسرة أو المستخدمين المؤسسيين مع التحكم الكامل في الوصول.", tech4p1: "التعرف على ملف تعريف متعدد المستخدمين", tech4p2: "إعدادات مخصصة لكل مستخدم", tech4p3: "التحكم في الوصول المؤسسي",
      sheetTitle: "المواصفات التقنية", sheetDesc: "تغطي وثيقة المواصفات التقنية لـ ablute_ بنية النظام ومواصفات المكونات ومتطلبات التركيب ومعايير الأداء.", sheetDrawing: "الرسم التقني",
      specDim: "الأبعاد", specVolt: "جهد التشغيل", specWater: "توصيل المياه", specDrain: "توصيل الصرف", specSensor: "وحدات الاستشعار", specWifi: "لاسلكي", specWeight: "الوزن", specIp: "تصنيف IP",
      sheetDownload: "تنزيل المواصفات التقنية (PDF)", sheetVersion: "إصدار الوثيقة 0.7 — قبل التجاري. عرضة للتغيير.",
      safetyTitle: "تصميم السلامة", safetyDesc: "تم تصميم ablute_ من المبادئ الأساسية مع السلامة كقيد محوري. تعطي بنية النظام الأولوية لحماية المستخدم في الأبعاد الكهربائية والميكانيكية والبيولوجية والامتثالية.",
      safe1Title: "السلامة الكهربائية", safe1Desc: "يعمل النظام النشط بالكامل على جهد منخفض 12V DC مما يزيل خطر الصعقة الكهربائية في البيئات الرطبة. يتم تغليف جميع اللوحات الإلكترونية وفق معيار IEC 60529.", safe1p1: "نظام جهد منخفض 12V DC", safe1p2: "هياكل مصنفة IP67", safe1p3: "إلكترونيات مغلفة بشكل مطابق",
      safe2Title: "السلامة الميكانيكية", safe2Desc: "يمنع الكشف عن العوائق إغلاق الوعاء إذا تم الكشف عن جسم أو جزء من الجسم. تتوقف المحركات المحدودة القوة فورًا عند المقاومة مما يستوفي معيار EN 563.", safe2p1: "الكشف عن العوائق في الغطاء", safe2p2: "محركات محدودة القوة", safe2p3: "أسطح متوافقة مع EN 563",
      safe3Title: "حماية المستخدم", safe3Desc: "جميع المواد التي تتلامس مع الماء أو المستخدم هي بوليمرات معتمدة للاستخدام الغذائي أو الطبي. طلاءات مضادة للميكروبات على جميع الأسطح المبللة. لا حواف حادة في التصميم الميكانيكي.", safe3p1: "مواد صالحة للاستخدام الغذائي/الطبي", safe3p2: "طلاءات سطحية مضادة للميكروبات", safe3p3: "تصميم خالٍ من نقاط القرص",
      safe4Title: "الامتثال التقني", safe4Desc: "مصمم مع وضع مسار وسم CE في الاعتبار. تتبع حزمة التوثيق متطلبات التوافق الكهرومغناطيسي EN 61000 ولائحة التصميم البيئي للاتحاد الأوروبي.", safe4p1: "توثيق مسار CE", safe4p2: "تصميم EMC وفق EN 61000", safe4p3: "متوافق مع التصميم البيئي الأوروبي",
      safetyNote: "تمر ablute_ حاليًا بمرحلة التطوير ما قبل التجارية. الشهادات الرسمية (CE وISO) مقررة لمرحلة النموذج ما قبل الصناعي. جميع المواصفات أعلاه تعكس نية التصميم والأهداف الهندسية.",
      stagesTitle: "الجدول الزمني للتطوير", stagesDesc: "تتبع ablute_ مسار نضج تقني منظم من المفهوم إلى النطاق التجاري. تمثل كل مرحلة معلمًا موثقًا بمخرجات هندسية قابلة للقياس.", inProgress: "قيد التنفيذ",
      stage1: "تطوير المفهوم", stage1d: "تحديد الرؤية المحورية للمنتج، وتحديد متطلبات الهندسة الأولية، وبدء حماية الملكية الفكرية.",
      stage2: "نموذج هندسي أولي", stage2d: "تجميع أول نموذج أولي وظيفي يدمج وحدات المياه والاستشعار والتنظيف.",
      stage3: "عرض توضيحي تجريبي", stage3d: "اختبار في بيئة خاضعة للرقابة مع مؤسسات شريكة مختارة. جمع البيانات والتكرار.",
      stage4: "نموذج ما قبل الصناعي", stage4d: "التصميم للتصنيع، وتأهيل سلسلة التوريد، والتقديم التنظيمي المسبق.",
      stage5: "النشر التجاري", stage5d: "وسم CE، والاتفاقيات التجارية، والإنتاج والتوزيع على نطاق واسع.",
    },
    company: {
      missionTitle: "هدفنا",
      missionP1: "تأسست ablute_ على قناعة واحدة: يمكن لبنية الحياة اليومية التحتية أن تحمل غرضًا أكبر بكثير مما تفعله حاليًا.",
      missionP2: "نصمم أنظمة صرف صحي تلغي هدر المياه، وتعمل دون جهد من المستخدم، وتجمع بشكل سلبي بيانات الصحة التي تحتاجها الطب الوقائي — عند نقطة الاتصال الأكثر اتساقًا في روتين الإنسان.",
      val1Title: "المسؤولية البيئية", val1Desc: "شح المياه يتسارع. تم بناء ablute_ لحل هذه المشكلة عند نقطة الاستخدام — القضاء على الهدر دون مطالبة المستخدمين بتغيير سلوكهم.",
      val2Title: "التميز الهندسي", val2Desc: "نؤمن أن المنتجات الأكثر تأثيرًا تكون غير مرئية في الاستخدام. يتم دمج التعقيد حتى تبرز البساطة. كل مكون هادف.",
      val3Title: "بنية الصحة الوقائية التحتية", val3Desc: "يُزار الحمام عدة مرات يوميًا — إنه نقطة مراقبة الصحة الأقل استخدامًا في البيئة المبنية. نحن نغير ذلك.",
      quote: "«الحمام هو الغرفة الوحيدة التي يزورها كل شخص، عدة مرات يوميًا، طوال حياته. إنه أكثر الأصول الصحية إهمالًا في الوجود.»",
      quoteAttr: "الأطروحة التأسيسية لـ ablute_، 2021",
      foundersLabel: "المؤسسون والقيادة", foundersIntro: "تم تطوير منصة ablute_ من قبل فريق متعدد التخصصات يجمع بين الهندسة والعلوم الطبية والابتكار التكنولوجي.",
      rdLabel: "البحث والتطوير", rdIntro: "يدعم فريق البحث والتطوير تطوير منصة ablute_ من خلال البحث العلمي والهندسة والتكنولوجيا الحيوية.",
      certsTitle: "الاعتراف المؤسسي", certsDesc: "تشارك ablute_ في شبكة من برامج الابتكار والحاضنات وأدوات التمويل العام التي تتحقق من مسار تطويرنا وتسرعه.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "مختارة لبرنامج دعم الشركات الناشئة الوطني، مع الوصول إلى أدوات التمويل والشبكة المؤسسية.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "تقديم طلب إلى مسرع المجلس الأوروبي للابتكار، مستهدفًا مشاريع أجهزة التقنية العميقة.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "منح قسيمة تعاون في مجال البحث والتطوير للشراكة مع معهد بوليتكني وطني في تطوير أجهزة الاستشعار.",
      cert4Title: "IPN Incubator Member", cert4Desc: "شركة مقيمة في Instituto Pedro Nunes، حاضنة ومسرعة التكنولوجيا الرائدة في البرتغال.",
    },
    projects: {
      consortTitle: "البحث والتطوير التعاوني", consortDesc: "تشارك ablute_ وتقود مشاريع ابتكار تعاونية مع مؤسسات بحثية وجامعات وشركاء صناعيين في جميع أنحاء أوروبا.", roleLabel: "الدور",
      proj1Desc: "مشروع بحثي تعاوني يطور الاستشعار الضوئي غير الجراحي للكشف عن المؤشرات الحيوية في المياه في سياقات الصرف الصحي.", proj1Role: "قائد تقني — تصميم وحدة الاستشعار وهندسة معالجة البيانات.",
      proj2Desc: "اتحاد أوروبي يستكشف بنية مراقبة الصحة السلبية في البيئات السكنية والرعاية. التركيز على وظائف الكلى ومؤشرات صحة التمثيل الغذائي.", proj2Role: "شريك صناعي — تكامل المنصة وتصميم البروتوكول السريري.",
      proj3Desc: "مشروع متعدد القطاعات يستهدف اقتصاد المياه الدائري على مستوى المبنى. تساهم ablute_ بوحدات تخفيض الطلب الذكي واستشعار المياه الرمادية.", proj3Role: "مورد المكونات وشريك البيانات",
      partnersTitle: "شبكة الشركاء", partnersDesc: "تمتد شبكة شركائنا لتشمل معاهد البحث والجامعات والمرافق العامة والمراكز التكنولوجية في البرتغال وأوروبا.",
      affiliationsTitle: "المشاركة في النظام البيئي", affiliationsDesc: "ablute_ مدمجة في أنظمة الابتكار البيئية الأكثر صلة بمهمتها — تقنية المياه والبنية التحتية للصحة والتقنية العميقة.",
      aff1Desc: "مجموعة تقنية صحية وطنية تربط شركات التكنولوجيا الطبية والمستشفيات ومؤسسات البحث.",
      aff2Desc: "منصة أوروبية لابتكار المياه والبحث والسياسات. عضو في شبكة Water-Oriented Living Labs.",
      aff3Desc: "برنامج النظام البيئي الوطني للشركات الناشئة. معترف بها كشركة أجهزة التقنية العميقة ذات إمكانات دولية.",
      aff4Desc: "مجتمع من الشركات الناشئة في مجال التكنولوجيا الحيوية والصحة المتعايشة في حاضنة IPN، كويمبرا.",
      aff5Desc: "جمعية أعمال للابتكار تربط الشركات كثيفة البحث والتطوير بالصناعة والأكاديمية.",
      aff6Desc: "جمعية خدمات الصحة الوطنية. علاقة استشارية تقنية لمعايير الصرف الصحي في مرافق الرعاية.",
    },
  },
};
