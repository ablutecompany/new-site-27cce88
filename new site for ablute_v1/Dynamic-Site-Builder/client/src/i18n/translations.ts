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
    line2b: string;
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
    tabBioFET: string;
    tabAI: string;
    tabAreasApplication: string;
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
    heroDescriptor: string;
    heroPara1: string; heroPara2: string;
    heroCta1: string; heroCta2: string;
    heroFeat1: string; heroFeat1Sub: string;
    heroFeat2Sub: string;
    heroFeat3: string; heroFeat3Sub: string;
    appDesc1: string; appDesc2: string; appDesc3: string;
    subResearch: string; subBiomarkers: string; subEvidence: string;
    subProviders: string; subWellness: string; subInsurers: string; subRD: string;
    satAICategory: string; satAILabel: string; satAITitle: string; satAIDesc: string; satAIBtn: string;
    satLabCategory: string; satLabLabel: string; satLabTitle: string; satLabDesc: string; satLabBtn: string;
    satBioCategory: string; satBioLabel: string; satBioTitle: string; satBioDesc: string; satBioBtn: string;
    appDownload: string; appComingSoon: string; appRegister: string;
    whyTitle: string; why1: string; why2: string; why3: string; why4: string; why5: string;
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
    invRoleOtherHealth: string;
    invSubject: string;
    invSubjectPlaceholder: string;
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
    workWithUsShare: string;
    workWithUsApplyNow: string;
    workWithUsCopyLink: string;
    workWithUsCopied: string;
    workWithUsNomeCompleto: string;
    workWithUsMorada: string;
    workWithUsTelefone: string;
    workWithUsCvLabel: string;
    workWithUsCartaLabel: string;
    workWithUsNotaLabel: string;
    workWithUsNotaPlaceholder: string;
    workWithUsContract: string;
    workWithUsBack: string;
    workWithUsShareTitle: string;
    workWithUsSpontDesc: string;
    workWithUsLinkedinLabel: string;
    workWithUsLinkedinPlaceholderShort: string;
    workWithUsSubmitError: string;
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
    partnersCat7: string;
    partnersCat8: string;
    partnersOutroPlaceholder: string;
    partnersSelectError: string;
    partnersEmailLabel: string;
  };
  productPage: {
    tab1: string; tab2: string; tab3: string; tab4: string;
  };
  companyPage: {
    tab1: string; tab2: string; tab3: string; tab4: string;
  };
  projectsPage: {
    tab1: string; tab2: string; tab3: string; tab4: string; tabAwards: string; projectSheetLink: string;
  };
  product: {
    techTitle: string; techDesc: string;
    tech1Title: string; tech1Desc: string; tech1p1: string; tech1p2: string; tech1p3: string;
    tech2Title: string; tech2Desc: string; tech2p1: string; tech2p2: string; tech2p3: string;
    tech3Title: string; tech3Desc: string; tech3p1: string; tech3p2: string; tech3p3: string;
    tech4Title: string; tech4Desc: string; tech4p1: string; tech4p2: string; tech4p3: string;
    tech5sub: string; tech5Title1: string; tech5Title2: string; tech5Desc: string; tech5p1: string; tech5p2: string; tech5p3: string; tech5p4: string;
    sheetTitle: string; sheetDesc: string; sheetDrawing: string;
tech6Title: string; tech6Desc: string; tech6tag1: string; tech6tag2: string;
    tech6tag3: string; tech6tag4: string;
tech7sub: string; tech7Title: string; tech7Desc: string;
tech8sub: string; tech8Title: string; tech8Desc: string; tech8tag: string; 
    specInstall: string;
    specDim: string; specVolt: string; specWater: string; specDrain: string;
    specSensor: string; specWifi: string; specWeight: string; specIp: string;
    sheetDownload: string; sheetVersion: string;
    specInstallDet: string;
    specDimDet: string; specVoltDet: string; specWaterDet: string; specDrainDet: string;
    specSensorDet: string; specIpDet: string;
    installGuideTitle: string; installGuideDesc: string;
    installStep1Title: string; installStep1Desc: string;
    installStep2Title: string; installStep2Desc: string;
    installStep3Title: string; installStep3Desc: string;
    installStep4Title: string; installStep4Desc: string;
    installStep5Title: string; installStep5Desc: string;
    installGuideDownload: string; sheetLangNote: string;
    safetyTitle: string; safetyDesc: string; safetyNote: string;
    safe1Title: string; safe1Desc: string; safe1p1: string; safe1p2: string; safe1p3: string;
    safe2Title: string; safe2Desc: string; safe2p1: string; safe2p2: string; safe2p3: string;
    safe3Title: string; safe3Desc: string; safe3p1: string; safe3p2: string; safe3p3: string;
    safe4Title: string; safe4Desc: string; safe4p1: string; safe4p2: string; safe4p3: string;
    stagesTitle: string; stagesDesc: string; inProgress: string;
    stage1: string; stage1d: string; stage2: string; stage2d: string;
    stage3: string; stage3d: string; stage3e: string; stage4: string; stage4d: string; stage4e: string; stage5: string; stage5d: string;
     PilotVidTitle: string; PilotVidtag1: string; PilotVidtag2: string;
  };
  company: {
    missionTitle: string; missionP1: string; missionP2: string;
    missionCeoLabel: string; missionCeoP1: string; missionCeoP2: string;
    purposeLine1: string; purposeLine2: string; purposeLine3: string;
    missionLabel: string; missionText: string; valuesLabel: string;
    val1Title: string; val1Desc: string;
    val2Title: string; val2Desc: string;
    val3Title: string; val3Desc: string;
    val4Title: string; val4Desc: string;
    val5Title: string; val5Desc: string;
    quote: string; quoteAttr: string;
    foundersLabel: string; foundersIntro: string;
    bio1: string; bio2: string; bio3: string; bio4: string; bio5: string; bio6: string; bio7: string; bio8: string;
    rdLabel: string; rdIntro: string;
    investorsLabel: string; investorsDesc: string; investorRole: string; officialWebsite: string;
    advisorsLabel: string; advisorsDesc: string; advisorPlaceholder: string;
    certsTitle: string; certsDesc: string;
    cert1Title: string; cert1Desc: string;
    cert2Title: string; cert2Desc: string;
    cert3Title: string; cert3Desc: string;
    cert4Title: string; cert4Desc: string;
    infraEyebrow: string; infraHeadP1: string; infraHeadP2: string; infraHeadP3: string;
    infra1Title: string; infra1Intro: string; infra1Body: string; infra1B1: string; infra1B2: string; infra1B3: string; infra1B4: string; infra1Footer: string;
    infra2Title: string; infra2Intro: string; infra2Body: string; infra2B1: string; infra2B2: string; infra2B3: string; infra2B4: string; infra2Footer: string;
    infra3Title: string; infra3Intro: string; infra3Body: string; infra3B1: string; infra3B2: string; infra3B3: string; infra3B4: string; infra3Footer: string;
    infra4Title: string; infra4Intro: string; infra4Body: string; infra4B1: string; infra4B2: string; infra4B3: string; infra4B4: string; infra4B5: string; infra4Footer: string;
    infra5Title: string; infra5Intro: string; infra5Body: string; infra5B1: string; infra5B2: string; infra5B3: string; infra5B4: string; infra5Footer: string;
  };
  projects: {
    consortTitle: string; consortDesc: string; roleLabel: string;
    consortLabel: string; grantsLabel: string;
    proj1Desc: string; proj1Role: string;
    proj2Desc: string; proj2Role: string;
    proj3Desc: string; proj3Role: string;
    proj4Desc: string; proj4Role: string;
    partnersTitle: string; partnersDesc: string;
    affiliationsTitle: string; affiliationsDesc: string;
    aff1Desc: string; aff2Desc: string; aff3Desc: string;
    aff4Desc: string; aff5Desc: string; aff6Desc: string;
  };
  waterImpact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    conventional: string;
    perUse: string;
    note: string;
    since: string;
  };
}

export const translations: Record<Lang, Translations> = {
  pt: {
    dir: "ltr",
    nav: { product: "Produto", company: "Empresa", projects: "Projetos", hideSubnav: "Ocultar subnavegação" },
    mode: { bathroom: "Bathroom", health: "Health", label: "mode" },
    cta: { waiting: "Join the Waiting List", pilot: "Apply for a Pilot", noPayment: "Sem pagamento inicial" },
    hero: {
      eyebrow: "Sensitiva, Inteligente e Motora",
      line1: "Um design único", line2: "reinventou a", line2b: "sanita", line3: "",
      sub1: "*oculta* na arquitetura\n*afirmada* no espaço\nou no *equilíbrio* entre ambas", sub2: "", sub3: "",
      feat1: "Lavagem 100% autónoma", feat2: "Limpeza integral: bacia e assento",
      feat3: "Recorde de poupança de água <1L", feat4: "",
    },
    health: {
      badge: "Deep Tech de Vanguarda Europeia",
      h1a: "Análise Multimodal de Apoio Clínico,", h1b: "fiável, rápida, prática e barata.", h1c: "",
      desc: "a primeira sanita inteligente do mundo que realiza análises de urina não invasivas, economizando",
      brand: "ablute_",
      cta1: "Quero Saber Mais", cta2: "Ver Demo",
      statWaterLabel: "Economia de Água", statMonitorLabel: "Monitoramento", statFlushLabel: "Por Descarga",
      deviceTitle: "Sanita Inteligente", deviceTap: "Toque para saber mais",
      deviceHydration: "Hidratação", deviceHydrationVal: "Ótima",
      deviceBiomarkers: "Biomarcadores", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Eco-friendly", badgeEcoVal: "100% Sustentável",
      badgeHealth: "Saúde", badgeHealthVal: "Análise em Tempo Real",
      tabProduct: "Dispositivo de Análise", tabScience: "Ciência", tabForWho: "Para Quem",
      productTitle: "Tecnologia ablute_", productDesc: "A plataforma que transforma o WC numa interface de saúde preventiva.",
      tabBiosensing: "Biossensores & Métodos", tabBioFET: "Tecnologia Core — bioFET", tabAI: "Inteligência Artificial", tabAreasApplication: "Áreas de Aplicação",
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
      heroDescriptor: "Biossensores · Monitorização Fisiológica Multimodal · Interpretação por IA",
      heroPara1: "A plataforma ablute_ integra tecnologias de biossensores, aquisição de sinal fisiológico e interpretação apoiada por IA para transformar sinais biológicos de rotina em insights de saúde estruturados.",
      heroPara2: "Concebido para monitorização passiva e longitudinal, o sistema permite a observação de tendências fisiológicas ao longo do tempo e apoia abordagens mais informadas à saúde preventiva.",
      heroCta1: "Atualizações Científicas Gratuitas", heroCta2: "Quero Envolver-me",
      heroFeat1: "Sistema Totalmente Autónomo", heroFeat1Sub: "Fluxo de deteção autónomo com interação mínima do utilizador",
      heroFeat2Sub: "Processamento automatizado e aquisição rápida de sinal",
      heroFeat3: "Biossensores de Alta Precisão", heroFeat3Sub: "Deteção fiável de sinais fisiológicos e bioquímicos",
      appDesc1: "A plataforma ablute_ incluirá uma aplicação de acompanhamento concebida para apresentar sinais fisiológicos e insights de biomarcadores num formato estruturado e interpretável.",
      appDesc2: "A aplicação permitirá a utilizadores e profissionais de saúde visualizar tendências, contextualizar valores de biomarcadores e receber insights estruturados gerados pelo motor de interpretação de dados da ablute_.",
      appDesc3: "Como a aplicação está atualmente em desenvolvimento, os utilizadores podem registar-se para ser notificados quando estiver disponível.",
      subResearch: "Investigação & Publicações", subBiomarkers: "Biomarcadores & Insights de Saúde", subEvidence: "Evidência Clínica",
      subProviders: "Prestadores de Saúde", subWellness: "Wellness", subInsurers: "Seguradoras", subRD: "I&D",
      satAICategory: "Tecnologia", satAILabel: "Motor de IA", satAITitle: "Interpretação por IA",
      satAIDesc: "A ablute_ utiliza modelos analíticos para interpretar sinais e medições passivas, destacando alterações, tendências e padrões relevantes para apoio à monitorização preventiva da saúde.",
      satAIBtn: "Explorar / Inteligência Artificial",
      satLabCategory: "Biossensores", satLabLabel: "Tecnologia Lab", satLabTitle: "Tecnologia de Nível Laboratorial",
      satLabDesc: "A plataforma ablute_ integra tecnologia de deteção e processamento desenvolvida para suportar recolha recorrente, análise passiva e futura validação de biomarcadores em contexto real.",
      satLabBtn: "Explorar / Biossensores",
      satBioCategory: "Ciência", satBioLabel: "Insights de Biomarcadores", satBioTitle: "Insights de Biomarcadores",
      satBioDesc: "A ablute_ foi concebida para transformar sinais biológicos passivos em informação útil, permitindo acompanhar tendências fisiológicas e identificar alterações relevantes ao longo do tempo.",
      satBioBtn: "Explorar / Ciência",
      appDownload: "Download", appComingSoon: "Em Breve", appRegister: "Registar para ser notificado",
      whyTitle: "Porquê é necessário?", why1: "Deteção precoce previne episódios agudos dispendiosos", why2: "Dados contínuos captam alterações entre consultas", why3: "Envelhecimento populacional e peso das doenças crónicas", why4: "Escassez de médicos — necessidade de ferramentas de eficiência", why5: "Reembolso migra para cuidados baseados em valor",
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
      invRoleOtherHealth: "Outro Profissional de Saúde", invSubject: "Assunto", invSubjectPlaceholder: "Indique o assunto",
      contactsOpt1: "Pedido de informação", contactsOpt2: "Parcerias", contactsOpt3: "Investidores",
      contactsOpt4: "Suporte técnico", contactsOpt5: "Imprensa",
      contactsSubmit: "Enviar mensagem", contactsSent: "Mensagem enviada.", contactsSentDesc: "A nossa equipa responderá brevemente.",
      workWithUs: "Ofertas de Trabalho", workWithUsTitle: "Ofertas de Trabalho",
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
      workWithUsShare: "Enviar a alguém", workWithUsApplyNow: "Candidatar-me imediatamente",
      workWithUsCopyLink: "Copiar ligação", workWithUsCopied: "Copiado!",
      workWithUsNomeCompleto: "Nome completo", workWithUsMorada: "Morada",
      workWithUsTelefone: "Telefone / Telemóvel", workWithUsCvLabel: "Curriculum Vitae (PDF / DOC)",
      workWithUsCartaLabel: "Carta de Motivação (opcional)", workWithUsNotaLabel: "Nota adicional",
      workWithUsNotaPlaceholder: "Sensores e ensaios em que trabalhou · Técnicas de laboratório independentes · Exemplo de um problema experimental resolvido do início ao fim.",
      workWithUsContract: "Contrato Temporário", workWithUsBack: "← Voltar", workWithUsShareTitle: "Partilhar esta oferta",
      workWithUsSpontDesc: "Não encontrou uma vaga adequada? Envie-nos a sua candidatura e perfil.",
      workWithUsLinkedinLabel: "LinkedIn ou Portfólio (opcional)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "Não foi possível enviar a candidatura. Tente novamente ou envie directamente para talent@ablute.pt",
      investorsHighlight1: "Early stage é o maior potencial de valorização",
      investorsHighlight2: "Mercado grande e problema inevitável",
      investorsHighlight3: "Equipa forte e execução qualificada",
      investorsHighlight4: "Tração e validação progressiva",
      partnersCat1: "Componentes eletrónicos",
      partnersCat2: "Serviços de nanotecnologia",
      partnersCat3: "Produtos de nanotecnologia",
      partnersCat4: "IA",
      partnersCat5: "Produção industrial",
      partnersCat6: "Metalúrgica",
      partnersCat7: "Moldes & polímeros",
      partnersCat8: "Outro (especificar qual)",
      partnersOutroPlaceholder: "Especifique a sua área de atuação",
      partnersSelectError: "Por favor selecione pelo menos uma categoria",
      partnersEmailLabel: "Email",
    },
    productPage: { tab1: "Tecnologia", tab2: "Ficha de Produto", tab3: "Segurança e Conformidade", tab4: "Fases de Desenvolvimento" },
    companyPage: { tab1: "Missão e Valores", tab2: "Equipa", tab3: "Certificações", tab4: "Infraestruturas" },
    projectsPage: { tab1: "Projetos financiados e em consórcio", tab2: "Parceiros", tab3: "Afiliações", tab4: "Papel Social", tabAwards: "Prémios", projectSheetLink: "Ver ficha do projeto" },
    product: {
      techTitle: "Como funciona a ablute_",
      techDesc: "A ablute_ integra sensores para tornar a lavagem eficiente ao nível do consumo de água e da higienização. Encerra sozinha e inicia o ciclo de lavagem autonomamente. Termina o processo de lavagem quando deteta que está limpa. Aspersores dinâmicos permitem um eficaz uso da água, enquanto uma bomba maceradora suga toda a matéria. No fim, uma poderosa turbina deixa a superfície do assento seca. Tudo isto num equipamento de dimensões domésticas, capaz de se integrar em w.c.'s já existentes.",
      tech1Title: "Sistema de Eficiência Hídrica", tech1Desc: "Válvulas de microdoseamento de precisão reduzem o consumo de água até >90% face aos modelos convencionais. Uma matriz de sensores em malha fechada monitoriza o caudal em tempo real, ajustando o ciclo de lavagem para usar exatamente a água necessária.", tech1p1: "Arquitetura de válvulas de microdoseamento", tech1p2: "Monitorização de caudal em tempo real", tech1p3: "Até **>90%** de redução de água",
      tech2Title: "Deteção Inteligente", tech2Desc: "Um conjunto de sensores óticos e químicos não invasivos deteta a presença, o tipo de utilização e os marcadores biológicos. Os dados são processados localmente — nada sai do dispositivo sem consentimento explícito.", tech2p1: "Deteção de presença ótica", tech2p2: "Sensoriamento de biomarcadores químicos", tech2p3: "Processamento local na extremidade",
      tech3Title: "1 Modo de Lavagem — Sempre Perfeita", tech3Desc: "O sistema integra sensores que detetam se a sanita está suja e adaptam a água usada por lavagem. Quando fica limpa, interrompe o uso de água para não haver desperdício. Estas capacidades — lavagem adaptativa e autónoma — fazem desta a sanita mais adequada a WC abertos ao público: poupam água e garantem higienização permanente e autónoma.", tech3p1: "Perfeita para quartos-de-banho com elevada frequência", tech3p2: "Ideal para habitações de luxo", tech3p3: "",
      tech4Title: "Modos de Utilização", tech4Desc: "Concebido para contextos partilhados e privados. O reconhecimento de perfil multi-utilizador permite definições personalizadas para membros do agregado familiar ou utilizadores institucionais.", tech4p1: "Reconhecimento de perfil multi-utilizador", tech4p2: "Definições personalizadas por utilizador", tech4p3: "Controlo de acesso institucional",
      tech5sub: "Integração arquitectónica", tech5Title1: "Um sistema concebido", tech5Title2: "para desaparecer", tech5Desc: "A ablute_ integra-se na parede ou no chão como qualquer sanita suspensa de alta gama. Não requer intervenção do utilizador — funciona de forma completamente autónoma, silenciosa e invisível.", tech5p1: "Lavagem completa: bacia e assento", tech5p2: "Sem piaçá, sem detergentes", tech5p3: "Secagem do assento", tech5p4: "Instalação fácil e em qualquer WC",
      tech6Title: "Design que reinventa a sanita", tech6Desc: "A ablute_ combina engenharia avançada com integração arquitetónica, permitindo instalações discretas ou com presença estética marcante.", tech6tag1: "Integração arquitetónica — design de autor", tech6tag2: "Instalação em ambiente premium", tech6tag3: "Ambientes de alta exigência estética", tech6tag4: "Suite residencial de luxo",
      tech7sub: "Produto", tech7Title: "Integrado na arquitetura", tech7Desc: "A ablute_ foi concebida para integrar-se em ambientes residenciais e institucionais sem comprometer estética ou funcionalidade.", 
      tech8sub: "Produto em contexto real", tech8Title: "Do conceito à realidade", tech8Desc: "Captação real do sistema em operação em ambientes reais.", tech8tag: "Produto em operação — captação real",
      sheetTitle: "Especificação Técnica", sheetDesc: "O documento de especificação técnica da ablute_ cobre a arquitetura do sistema, as especificações dos componentes, os requisitos de instalação e os benchmarks de desempenho.", sheetDrawing: "Desenho Técnico",
      specInstall: "Instalação",
      specDim: "Dimensões", specVolt: "Tensão de Funcionamento", specWater: "Ligação de Água", specDrain: "Ligação de Drenagem", specSensor: "Módulos de Sensores", specWifi: "Sem Fios", specWeight: "Peso", specIp: "Classificação de Proteção",
      specInstallDet: "Parede / Chão — múltiplas configurações",
        specDimDet: "47 × 29,5 × 41–51 cm (L × P × A) · Aberto: 80–90 cm", specVoltDet: "12V DC — 220–240 V, 50/60 Hz, 200 W máx.", specWaterDet: "1–10 bar · Ref.: 15 cm alt. / 17 cm do esgoto", specDrainDet: "Parede 18–20 cm · Chão até 12 cm", specSensorDet: "Óptico + movimento — touchless", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "Descarregar Especificação Técnica (PDF)", sheetVersion: "Documento versão 0.7 — Pré-lançamento comercial. Sujeito a alterações.",
      installGuideTitle: "Guia de Instalação", installGuideDesc: "Informação essencial para preparação da instalação do equipamento ablute_.",
      installStep1Title: "Compatibilidade de Instalação", installStep1Desc: "A ablute_ pode ser instalada em diferentes configurações de WC, adaptando-se a diversas disposições de esgoto e alimentação de água.",
      installStep2Title: "Preparação do Espaço", installStep2Desc: "Garantir espaço suficiente para a instalação e funcionamento do equipamento, incluindo abertura completa do mecanismo da bacia.",
      installStep3Title: "Ligação de Água", installStep3Desc: "Confirmar a existência de ponto de água dentro dos parâmetros de pressão recomendados (1–10 bar).",
      installStep4Title: "Ligação de Drenagem", installStep4Desc: "Verificar se o esgoto é compatível com ligação à parede ou ao chão e respeita as distâncias recomendadas.",
      installStep5Title: "Alimentação Elétrica", installStep5Desc: "A alimentação é feita através de transformador de baixa tensão 12V, ligado à rede elétrica 220–240 V.",
      installGuideDownload: "Descarregar Guia de Instalação (PDF)", sheetLangNote: "Disponível em inglês. Para outras línguas, contacte-nos em",
      safetyTitle: "Design de Segurança", safetyDesc: "A ablute_ foi concebida desde os princípios fundamentais com a segurança como restrição central. A arquitetura do sistema prioriza a proteção do utilizador nas dimensões elétrica, mecânica, biológica e de conformidade.",
      safe1Title: "Segurança Elétrica", safe1Desc: "Todo o sistema ativo opera a 12V DC de baixa tensão, eliminando o risco de choque elétrico em ambientes húmidos. Todos os PCBs são revestidos e encapsulados de acordo com a norma IEC 60529.", safe1p1: "Sistema de baixa tensão 12V DC", safe1p2: "Invólucros classificação IP67", safe1p3: "Eletrónica com revestimento conformal",
      safe2Title: "Segurança Mecânica", safe2Desc: "A deteção de obstrução impede o fecho da bacia se for detetado um objeto ou parte do corpo. Os atuadores com força limitada param imediatamente em caso de resistência, cumprindo a norma EN 563.", safe2p1: "Deteção de obstrução na tampa", safe2p2: "Atuadores com força limitada", safe2p3: "Superfícies em conformidade com EN 563",
      safe3Title: "Proteção do Utilizador", safe3Desc: "Todos os materiais em contacto com água ou utilizador são polímeros certificados para uso alimentar ou médico. Revestimentos antimicrobianos em todas as superfícies molhadas. Sem arestas vivas no design mecânico.", safe3p1: "Materiais de grau alimentar/médico", safe3p2: "Revestimentos antimicrobianos", safe3p3: "Design sem pontos de aperto",
      safe4Title: "Conformidade Técnica", safe4Desc: "Concebido tendo em conta a via de marcação CE. O pacote de documentação segue os requisitos CEM EN 61000 e o Regulamento de Ecodesign da UE para produtos relacionados com a água.", safe4p1: "Documentação da via CE", safe4p2: "Design CEM EN 61000", safe4p3: "Alinhado com Ecodesign UE",
      safetyNote: "A ablute_ encontra-se atualmente na fase de desenvolvimento pré-comercial. As certificações formais (CE, ISO) estão previstas para a fase de Modelo Pré-Industrial. Todas as especificações acima refletem a intenção de design e os objetivos de engenharia.",
      stagesTitle: "Cronograma de Desenvolvimento", stagesDesc: "A ablute_ segue uma via estruturada de maturidade tecnológica, desde o conceito até à escala comercial. Cada fase representa um marco validado com entregáveis de engenharia mensuráveis.", inProgress: "Em curso",
      stage1: "Validação de Conceito e Problema", stage1d: "Necessidade clínica identificada através de discussões com médicos e instituições de saúde, confirmando as limitações dos testes laboratoriais ocasionais e a oportunidade de monitorização passiva de biomarcadores.",
      stage2: "Protótipo de Engenharia", stage2d: "Primeiro protótipo funcional da ablute_ desenvolvido, integrando o sistema de saneamento inteligente, manuseamento automatizado de amostras, módulos de sensoriamento e software de controlo.",
      stage3: "Demonstração Piloto", stage3d: "Implantação piloto em ambiente real validando a durabilidade do hardware, mecanismos de limpeza automatizados e consumo ultra-reduzido de água em uso público intensivo.", stage3e: "Concluído",
      stage4: "Validação Clínica", stage4d: "Pilotos clínicos com parceiros de saúde, apoiados por Cartas de Intenção assinadas (LOIs), a avaliar o valor diagnóstico da análise frequente de biomarcadores comparada com os testes laboratoriais episódicos tradicionais.", stage4e: "Em aceleração",
      stage5: "Industrialização e Implementação Comercial", stage5d: "Preparação para fabricação em escala, certificação regulatória e primeiras implementações comerciais em instituições de saúde.",
      PilotVidTitle: "Demonstração Piloto", PilotVidtag1: "Registo de demonstração piloto", PilotVidtag2: "Fase 3 em curso. Não é footage comercial final.",
    },
    company: {
      missionTitle: "O Nosso Propósito",
      missionP1: "A ablute_ nasce da convicção que os objetos mais presentes na rotina humana irão fazer muito mais do que apenas uma função básica.",
      missionP2: "Desenvolvemos uma nova geração de equipamentos que combinam engenharia de precisão, eficiência hídrica extrema e tecnologia de sensorização avançada para transformar um momento quotidiano numa oportunidade silenciosa de monitorização e cuidado com a saúde.",
      missionCeoLabel: "Nota do CEO da ablute_",
      missionCeoP1: "O presente que estamos a construir ainda é um mundo primitivo, onde todos aqueles que amamos viverão menos do que gostaríamos. Enquanto a morte rouba espaço e tempo para abraçarmos, queremos contribuir para prolongar a vida.",
      missionCeoP2: "A nossa missão é comum ao Ser Humano: é tão importante viver mais tempo, quanto viver com qualidade. A ablute_ não constroi uma plataforma de monitorização, nós participamos de forma empenhada para prolongarmos a nossa própria existência. Facilitando o fardo das vicissitudes, estimulando uma rede de inteligência em que todos cuidam de todos e cada um de si.",
      purposeLine1: "Sem alterar hábitos.", purposeLine2: "Sem exigir esforço.", purposeLine3: "Apenas tecnologia que trabalha de forma invisível, integrada na vida diária.",
      missionLabel: "Missão", missionText: "Contribuir para a certeza de vivermos mais tempo, com melhor qualidade e substituindo pequenos [dispensáveis] fardos da vida.",
      valuesLabel: "Valores",
      val1Title: "Engenharia com propósito", val1Desc: "Desenvolvemos tecnologia que resolve problemas reais, combinando rigor científico, engenharia avançada e design funcional.",
      val2Title: "Eficiência de recursos", val2Desc: "Acreditamos que inovação tecnológica deve contribuir para reduzir desperdício e utilizar os recursos naturais de forma mais responsável.",
      val3Title: "Tecnologia invisível", val3Desc: "Criamos sistemas que funcionam de forma autónoma e discreta, integrados na rotina das pessoas sem exigir mudanças de comportamento.",
      val4Title: "Ciência aplicada", val4Desc: "Valorizamos a investigação, a validação científica e a colaboração com instituições académicas e tecnológicas.",
      val5Title: "Impacto positivo", val5Desc: "Procuramos desenvolver soluções que contribuam para melhorar simultaneamente a saúde das pessoas e a sustentabilidade do planeta.",
      quote: "\"A casa de banho é o único compartimento visitado por todas as pessoas, várias vezes por dia, ao longo de toda a sua vida. É o ativo de saúde mais subutilizado existente.\"",
      quoteAttr: "Tese fundadora da ablute_, 2021",
      foundersLabel: "Fundadores e Liderança", foundersIntro: "A plataforma ablute_ é desenvolvida por uma equipa multidisciplinar que combina engenharia, ciências médicas e inovação tecnológica.",
      bio1: "Responsável pela estratégia da empresa, parcerias e desenvolvimento de negócio, liderando o crescimento e o posicionamento global da plataforma ablute_.",
      bio2: "Lidera a arquitetura técnica da plataforma ablute_, incluindo o design do sistema, desenvolvimento de software e integração de tecnologias de deteção. Vencedora do EU Woman in Tech Award.",
      bio3: "Médica responsável pela visão clínica da plataforma ablute_, ligando a monitorização de biomarcadores à saúde preventiva e personalizada.",
      bio4: "Investigador especializado em nanotecnologia e biossensores para diagnóstico in vitro, responsável pela direção científica das tecnologias de deteção da ablute_.",
      bio5: "Coordena as atividades de investigação e desenvolvimento e contribui para o avanço científico e tecnológico da plataforma ablute_.",
      bio6: "Investigadora que trabalha em tecnologias de biossensores e sistemas de deteção de biomarcadores associados à plataforma ablute_.",
      bio7: "Contribui para a investigação em biotecnologia e biomarcadores que suportam o desenvolvimento do sistema de biossensores ablute_.",
      bio8: "Responsável pelo desenvolvimento de sistemas eletrónicos e integração de hardware na plataforma ablute_.",
      rdLabel: "Investigação e Desenvolvimento", rdIntro: "A equipa de I&D apoia o desenvolvimento da plataforma ablute_ através de investigação científica, engenharia e biotecnologia.",
      investorsLabel: "Investidores", investorsDesc: "A ablute_ é apoiada pelo investidor institucional Portugal Ventures — que apoia o crescimento da empresa, o desenvolvimento tecnológico e a ambição de longo prazo no mercado.", investorRole: "Investidor", officialWebsite: "Website oficial",
      advisorsLabel: "Advisors", advisorsDesc: "A ablute_ está a constituir um conselho consultivo de especialistas nas áreas da saúde, tecnologia e negócio.", advisorPlaceholder: "A ser anunciado em breve",
      certsTitle: "Reconhecimento Institucional", certsDesc: "A ablute_ participa numa rede de programas de inovação, incubadoras e instrumentos de financiamento público que validam e aceleram o nosso caminho de desenvolvimento.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selecionada para o programa nacional de apoio a startups, com acesso a instrumentos de financiamento e rede institucional.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidatura submetida ao Acelerador do Conselho Europeu de Inovação, direcionada para hardware de deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Atribuído um voucher de colaboração em I&D para parceria com um instituto politécnico nacional no desenvolvimento de sensores.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Empresa residente no Instituto Pedro Nunes, a principal incubadora e aceleradora tecnológica de Portugal.",
      infraEyebrow: "Infraestrutura Científica e Tecnológica", infraHeadP1: "O desenvolvimento da plataforma ablute_ decorre num ecossistema científico e tecnológico colaborativo que proporciona acesso a infraestrutura avançada de investigação.", infraHeadP2: "Através de parcerias com institutos de investigação, laboratórios e organizações de inovação, a ablute_ opera num ambiente onde equipamentos especializados, instalações laboratoriais e recursos computacionais estão disponíveis para apoiar o desenvolvimento, teste e validação de novas tecnologias.", infraHeadP3: "Este modelo de infraestrutura distribuída permite à empresa combinar agilidade empreendedora com as capacidades de instituições científicas consolidadas.",
      infra1Title: "Laboratórios e Infraestrutura Científica", infra1Intro: "O desenvolvimento do sistema ablute_ beneficia do acesso a ambientes laboratoriais especializados através da colaboração com instituições de investigação e centros tecnológicos.", infra1Body: "Estes ambientes proporcionam capacidades essenciais para o desenvolvimento e validação de tecnologias de deteção avançadas, incluindo:", infra1B1: "Laboratórios de desenvolvimento de biossensores", infra1B2: "Instalações de investigação em microeletrónica e semicondutores", infra1B3: "Ambientes de sala limpa para microfabricação e nanotecnologia", infra1B4: "Laboratórios bioquímicos e bioanalíticos", infra1Footer: "Esta infraestrutura permite a validação experimental de tecnologias de deteção, o desenvolvimento de arquiteturas eletrónicas e o teste de sistemas biomédicos integrados.",
      infra2Title: "Infraestrutura de Microeletrónica e Sensores", infra2Intro: "As tecnologias de deteção integradas na plataforma ablute_ requerem ambientes especializados de desenvolvimento e teste.", infra2Body: "Através de colaborações com institutos tecnológicos e centros de investigação em semicondutores, o projeto pode aceder a instalações dedicadas a:", infra2B1: "Fabricação de dispositivos semicondutores", infra2B2: "Caracterização de sensores", infra2B3: "Prototipagem microeletrónica", infra2B4: "Validação de aquisição e processamento de sinal", infra2Footer: "Estas instalações permitem o desenvolvimento e avaliação de tecnologias de biossensores, como sensores baseados em transístores de efeito de campo e outras arquiteturas de deteção avançadas.",
      infra3Title: "Infraestrutura Computacional", infra3Intro: "A análise de dados e o desenvolvimento de inteligência artificial requerem acesso a recursos computacionais capazes de processar grandes volumes de dados fisiológicos.", infra3Body: "Através de programas nacionais e europeus de inovação e colaborações de investigação, a ablute_ pode aceder a infraestrutura computacional avançada que suporta:", infra3B1: "Desenvolvimento de machine learning", infra3B2: "Análise de dados em larga escala", infra3B3: "Simulação e modelação", infra3B4: "Processamento de sinais biomédicos", infra3Footer: "Esta capacidade computacional apoia o desenvolvimento do motor de interpretação de dados da plataforma e a melhoria contínua de insights de saúde assistidos por IA.",
      infra4Title: "Ecossistema de Inovação", infra4Intro: "Para além da infraestrutura física, a ablute_ opera num ecossistema de inovação mais amplo, composto por instituições de investigação, centros tecnológicos, startups e organizações de saúde.", infra4Body: "Esta rede proporciona acesso a:", infra4B1: "Experiência científica", infra4B2: "Colaboração multidisciplinar", infra4B3: "Ambientes de validação", infra4B4: "Canais de transferência de tecnologia", infra4B5: "Instalações especializadas", infra4Footer: "Operar neste ecossistema permite à ablute_ combinar investigação tecnológica, desenvolvimento de engenharia e relevância clínica na criação de tecnologias de saúde de nova geração.",
      infra5Title: "Programas de Investigação e Inovação", infra5Intro: "A participação em iniciativas de investigação nacionais e europeias permite o acesso a infraestrutura, ambientes de investigação colaborativa e experiência especializada.", infra5Body: "Estes programas facilitam:", infra5B1: "Colaboração com organizações de investigação de referência", infra5B2: "Acesso a infraestrutura laboratorial e computacional avançada", infra5B3: "Desenvolvimento multidisciplinar de novas tecnologias", infra5B4: "Tradução da investigação científica em aplicações práticas", infra5Footer: "Estes quadros são uma componente importante no apoio ao desenvolvimento e validação de tecnologias de saúde inovadoras.",
    },
    projects: {
      consortTitle: "Projetos", consortDesc: "A ablute_ avança através de uma combinação de projetos colaborativos e iniciativas apoiadas por financiamento, focadas na saúde, sustentabilidade e engenharia sanitária avançada. Estas atividades suportam o desenvolvimento tecnológico, validação, preparação para certificação e preparação para implementação real.", roleLabel: "Papel da ablute_", consortLabel: "Projetos de Consórcio", grantsLabel: "Bolsas",
      proj1Desc: "Projeto orientado ao apoio à preparação e submissão de candidaturas a programas europeus, reforçando a capacidade de internacionalização e aumentando a participação e a taxa de sucesso em projetos europeus.", proj1Role: "Reforço da capacidade interna da ablute_ para preparação e submissão de candidaturas europeias de I&D e inovação.",
      proj2Desc: "Agenda mobilizadora orientada ao desenvolvimento de soluções avançadas para o setor da saúde, assentes em inovação e tecnologia.", proj2Role: "Desenvolvimento de um dispositivo de urina embutido numa sanita para monitorização contínua de biomarcadores em ambiente abrangente e naturalista.",
      proj3Desc: "Projeto focado na demonstração, em ambiente real, da operacionalidade do equipamento ablute_ com consumo de água reduzido e no arranque dos processos de certificação.", proj3Role: "Demonstração da operacionalidade do equipamento ablute_ em contexto real e início dos processos certificativos.",
      proj4Desc: "Projeto de investigação colaborativa focado em tecnologias avançadas de sensoriamento e monitorização digital da saúde.", proj4Role: "Desenvolvimento e integração tecnológica.",
      partnersTitle: "Rede de Parceiros", partnersDesc: "A ablute_ desenvolve a sua tecnologia em colaboração com instituições científicas, centros de investigação e empresas tecnológicas que contribuem para o desenvolvimento de soluções avançadas nas áreas da saúde digital, biossensores, materiais avançados e engenharia de sistemas.",
      affiliationsTitle: "Participação no Ecossistema", affiliationsDesc: "A ablute_ integra ecossistemas institucionais e redes de inovação estratégicas que reforçam a credibilidade da empresa, ampliam o acesso a colaborações e financiamento, e aceleram a ligação ao mercado europeu de saúde digital. Cada afiliação representa um posicionamento deliberado nas redes mais relevantes para a missão da ablute_.",
      aff1Desc: "Cluster nacional de tecnologia de saúde que conecta empresas de medtech, hospitais e instituições de investigação.",
      aff2Desc: "Plataforma europeia para inovação, investigação e políticas da água. Membro da rede Water-Oriented Living Labs.",
      aff3Desc: "Programa nacional do ecossistema de startups. Reconhecida como empresa de hardware deep tech com potencial internacional.",
      aff4Desc: "Comunidade de startups de biotecnologia e tecnologia de saúde co-localizadas na incubadora IPN, Coimbra.",
      aff5Desc: "Associação empresarial para a inovação, conectando empresas intensivas em I&D com a indústria e a academia.",
      aff6Desc: "Associação nacional de serviços de saúde. Relação de aconselhamento técnico para normas de saneamento em unidades de cuidados.",
    },
    waterImpact: {
      eyebrow: "Impacto hídrico",
      title: "Água poupada",
      subtitle: "desde o início do projeto",
      conventional: "Sanita convencional",
      perUse: "por utilização",
      note: "Estimativa baseada em 20 utilizações diárias de uma sanita ablute_ vs. uma convencional (6 L).",
      since: "Desde 2 jan 2023",
    },
  },

  en: {
    dir: "ltr",
    nav: { product: "Product", company: "Company", projects: "Projects", hideSubnav: "Hide sub-navigation" },
    mode: { bathroom: "Bathroom", health: "Health", label: "mode" },
    cta: { waiting: "Join the Waiting List", pilot: "Apply for a Pilot", noPayment: "No upfront payment required" },
    hero: {
      eyebrow: "Sensitive, Intelligent & Motorised Toilet",
      line1: "A unique design", line2: "reinvented the toilet", line2b: "", line3: "",
      sub1: "hidden, with a bold aesthetic, or something between", sub2: "", sub3: "",
      feat1: "100% autonomous washing", feat2: "Complete cleaning: bowl and seat",
      feat3: "Record water savings <1L", feat4: "",
    },
    health: {
      badge: "European Vanguard Deep Tech",
      h1a: "Multimodal Clinical Support Analysis,", h1b: "reliable, fast, practical and affordable.", h1c: "",
      desc: "the world's first smart toilet that performs non-invasive urine analysis, saving",
      brand: "ablute_",
      cta1: "Learn More", cta2: "View Demo",
      statWaterLabel: "Water Savings", statMonitorLabel: "Monitoring", statFlushLabel: "Per Flush",
      deviceTitle: "Smart Toilet", deviceTap: "Tap to learn more",
      deviceHydration: "Hydration", deviceHydrationVal: "Optimal",
      deviceBiomarkers: "Biomarkers", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Eco-friendly", badgeEcoVal: "100% Sustainable",
      badgeHealth: "Health", badgeHealthVal: "Real-time Analysis",
      tabProduct: "Analysis Device", tabScience: "Science", tabForWho: "For Whom",
      productTitle: "ablute_ Technology", productDesc: "The platform that transforms the bathroom into a preventive health interface.",
      tabBiosensing: "Biosensors & Methods", tabBioFET: "Core Technology — bioFET", tabAI: "Artificial Intelligence", tabAreasApplication: "Application Areas",
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
      heroDescriptor: "Biosensing · Multimodal Physiological Monitoring · AI-Supported Interpretation",
      heroPara1: "The ablute_ platform integrates biosensing technologies, physiological signal acquisition and AI-supported interpretation to transform routine biological signals into structured health insights.",
      heroPara2: "Designed for passive and longitudinal monitoring, the system enables the observation of physiological trends over time and supports more informed approaches to preventive health.",
      heroCta1: "Free Scientific Updates", heroCta2: "I Want to Get Involved",
      heroFeat1: "Full Autonomous System", heroFeat1Sub: "Autonomous sensing workflow with minimal user interaction",
      heroFeat2Sub: "Automated processing and rapid signal acquisition",
      heroFeat3: "High-Precision Biosensors", heroFeat3Sub: "Reliable physiological and biochemical signal detection",
      appDesc1: "The ablute_ platform will include a companion application designed to present physiological signals and biomarker insights in a structured and interpretable format.",
      appDesc2: "The application will enable users and health professionals to visualise trends, contextualise biomarker values and receive structured insights generated through the ablute_ data interpretation engine.",
      appDesc3: "As the application is currently under development, users can register to be notified when it becomes available.",
      subResearch: "Research & Publications", subBiomarkers: "Biomarkers & Health Insights", subEvidence: "Clinical Evidence",
      subProviders: "Health Providers", subWellness: "Wellness", subInsurers: "Insurers", subRD: "R&D",
      satAICategory: "Technology", satAILabel: "AI Engine", satAITitle: "AI-powered Interpretation",
      satAIDesc: "ablute_ uses analytical models to interpret passive signals and measurements, highlighting changes, trends and patterns relevant to preventive health monitoring.",
      satAIBtn: "Explore / Artificial Intelligence",
      satLabCategory: "Biosensing", satLabLabel: "Lab-Grade Technology", satLabTitle: "Lab-Grade Technology",
      satLabDesc: "The ablute_ platform integrates detection and processing technology developed to support recurring collection, passive analysis and future biomarker validation in real-world contexts.",
      satLabBtn: "Explore / Biosensors",
      satBioCategory: "Science", satBioLabel: "Biomarker Insights", satBioTitle: "Biomarker Insights",
      satBioDesc: "ablute_ is designed to transform passive biological signals into useful information, enabling the tracking of physiological trends and identifying relevant changes over time.",
      satBioBtn: "Explore / Science",
      appDownload: "Download", appComingSoon: "Coming Soon", appRegister: "Register to be notified",
      whyTitle: "Why Is It Needed?", why1: "Early detection prevents costly acute episodes", why2: "Continuous data catches changes between visits", why3: "Aging population, chronic disease burden", why4: "Physician shortage — need efficiency tools", why5: "Reimbursement shifting to value-based care",
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
      invRoleOtherHealth: "Other Health Professional", invSubject: "Subject", invSubjectPlaceholder: "Describe the subject",
      contactsOpt1: "Information request", contactsOpt2: "Partnerships", contactsOpt3: "Investors",
      contactsOpt4: "Technical support", contactsOpt5: "Press",
      contactsSubmit: "Send message", contactsSent: "Message sent.", contactsSentDesc: "Our team will respond shortly.",
      workWithUs: "Job Openings", workWithUsTitle: "Job Openings",
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
      workWithUsShare: "Share this job", workWithUsApplyNow: "Apply immediately",
      workWithUsCopyLink: "Copy link", workWithUsCopied: "Copied!",
      workWithUsNomeCompleto: "Full name", workWithUsMorada: "Address",
      workWithUsTelefone: "Phone / Mobile", workWithUsCvLabel: "Curriculum Vitae (PDF / DOC)",
      workWithUsCartaLabel: "Cover Letter (optional)", workWithUsNotaLabel: "Additional note",
      workWithUsNotaPlaceholder: "Sensors / assays you've worked on · Lab techniques you can run independently · One example of an experimental problem you solved end-to-end.",
      workWithUsContract: "Temporary Contract", workWithUsBack: "← Back", workWithUsShareTitle: "Share this position",
      workWithUsSpontDesc: "Didn't find a suitable position? Send us your application and profile.",
      workWithUsLinkedinLabel: "LinkedIn or Portfolio (optional)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "Unable to send your application. Please try again or send directly to talent@ablute.pt",
      investorsHighlight1: "Early stage offers the greatest valuation upside",
      investorsHighlight2: "Large market and an unavoidable problem",
      investorsHighlight3: "Strong team and qualified execution",
      investorsHighlight4: "Progressive traction and validation",
      partnersCat1: "Electronic Components",
      partnersCat2: "Nanotechnology Services",
      partnersCat3: "Nanotechnology Products",
      partnersCat4: "AI",
      partnersCat5: "Industrial Production",
      partnersCat6: "Metallurgy",
      partnersCat7: "Moulds & Polymers",
      partnersCat8: "Other (please specify)",
      partnersOutroPlaceholder: "Specify your area of activity",
      partnersSelectError: "Please select at least one category",
      partnersEmailLabel: "Email",
    },
    productPage: { tab1: "Technology", tab2: "Product Sheet", tab3: "Safety & Compliance", tab4: "Development Stages" },
    companyPage: { tab1: "Mission & Values", tab2: "Team", tab3: "Certifications", tab4: "Infrastructure" },
    projectsPage: { tab1: "Funded & Consortium Projects", tab2: "Partners", tab3: "Affiliations", tab4: "Social Role", tabAwards: "Awards", projectSheetLink: "View project sheet" },
    product: {
      techTitle: "How ablute_ Works",
      techDesc: "ablute_ integrates water management, intelligent sensing, and health analytics into a single, seamlessly engineered platform. Every component is designed to operate autonomously, require zero user intervention, and continuously improve through learned usage data.",
      tech1Title: "Water Efficiency System", tech1Desc: "Precision micro-dosing valves reduce water consumption by up to >90% versus conventional models. A closed-loop sensor array monitors flow rate in real time, adjusting the wash cycle dynamically to use exactly the water required — never more.", tech1p1: "Micro-dosing valve architecture", tech1p2: "Real-time flow monitoring", tech1p3: "Up to **>90%** water reduction",
      tech2Title: "Intelligent Detection", tech2Desc: "An array of non-invasive optical and chemical sensors detects presence, usage type, and biological markers. Data is processed locally — nothing leaves the device without explicit user consent.", tech2p1: "Optical presence detection", tech2p2: "Chemical biomarker sensing", tech2p3: "Local edge processing",
      tech3Title: "1 Washing Mode — Always Perfect", tech3Desc: "The system integrates sensors that detect whether the toilet is dirty and adapt the water used per wash. When clean, it stops water use to prevent waste. These capabilities — adaptive and autonomous washing — make this the most suitable toilet for high-traffic public bathrooms: saving water while ensuring permanent, autonomous hygiene.", tech3p1: "Perfect for high-frequency bathrooms", tech3p2: "Ideal for luxury residences", tech3p3: "",
      tech4Title: "Usage Modes", tech4Desc: "Designed for shared and private contexts. Multi-user profile recognition enables personalised settings across household members or institutional users, with full access control and audit logging.", tech4p1: "Multi-user profile recognition", tech4p2: "Personalised settings per user", tech4p3: "Institutional access control",
      tech5sub: "Architectural integration", tech5Title1: "A system designed", tech5Title2: "to disappear", tech5Desc: "The ablute_ integrates into the wall or floor like any high-end wall-hung toilet. It requires no user intervention — it operates completely autonomously, silently, and invisibly.", tech5p1: "Standard installation in any toilet", tech5p2: "No buttons, no manual interaction", tech5p3: "Integrated Wi-Fi and Bluetooth connectivity", tech5p4: "Compatible with home automation systems",
      tech6Title: "Design that reinvents the toilet", tech6Desc: "The ablute_ combines advanced engineering with architectural integration, allowing for discreet installations or those with a striking aesthetic presence.", tech6tag1: "Architectural integration — designer", tech6tag2: "Installation in a premium environment", tech6tag3: "Environments with high aesthetic demands", tech6tag4: "Luxury residential suite",
      tech7sub: "Product", tech7Title: "Integrated into the architecture", tech7Desc: "The ablute_ was designed to integrate into residential and institutional environments without compromising aesthetics or functionality.",
      tech8sub: "Product in real context", tech8Title: "From concept to reality", tech8Desc: "Real capture of the system in operation in real environments.", tech8tag: "Product in operation — real capture",
      sheetTitle: "Technical Specification", sheetDesc: "The ablute_ technical specification document covers system architecture, component specifications, installation requirements, and performance benchmarks.", sheetDrawing: "Technical Drawing",
      specInstall: "Installation",
      specDim: "Dimensions", specVolt: "Operating Voltage", specWater: "Water Connection", specDrain: "Drain Connection", specSensor: "Sensor Modules", specWifi: "Wireless", specWeight: "Weight", specIp: "Protection Rating",
      specInstallDet: "Wall / Floor — multiple configurations",
      specDimDet: "47 × 29.5 × 41–51 cm (W × D × H) · Open: 80–90 cm", specVoltDet: "12V DC — 220–240 V, 50/60 Hz, 200 W max.", specWaterDet: "1–10 bar · Ref.: 15 cm height / 17 cm from drain", specDrainDet: "Wall 18–20 cm · Floor up to 12 cm", specSensorDet: "Optical + motion — touchless", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "Download Technical Specification (PDF)", sheetVersion: "Document version 0.7 — Pre-commercial release. Subject to change.",
      installGuideTitle: "Installation Guide", installGuideDesc: "Essential information for preparing the ablute_ equipment installation.",
      installStep1Title: "Installation Compatibility", installStep1Desc: "ablute_ can be installed in different bathroom configurations, adapting to various drainage and water supply arrangements.",
      installStep2Title: "Space Preparation", installStep2Desc: "Ensure sufficient space for installation and operation of the equipment, including full opening of the bowl mechanism.",
      installStep3Title: "Water Connection", installStep3Desc: "Confirm the existence of a water supply point within the recommended pressure parameters (1–10 bar).",
      installStep4Title: "Drain Connection", installStep4Desc: "Verify that the drain is compatible with wall or floor connection and respects the recommended distances.",
      installStep5Title: "Electrical Supply", installStep5Desc: "Power is supplied via a 12V low-voltage transformer connected to the 220–240 V mains.",
      installGuideDownload: "Download Installation Guide (PDF)", sheetLangNote: "Available in English. For other languages, contact us at",
      safetyTitle: "Safety Design", safetyDesc: "ablute_ is designed from first principles with safety as a core constraint, not an afterthought. The system architecture prioritises user protection across electrical, mechanical, biological, and compliance dimensions.",
      safe1Title: "Electrical Safety", safe1Desc: "The entire active system operates at 12V DC low-voltage, eliminating risk of electric shock in humid environments. All PCBs are conformally coated and encapsulated to IEC 60529 standards.", safe1p1: "12V DC low-voltage system", safe1p2: "IP67-rated enclosures", safe1p3: "Conformal-coated electronics",
      safe2Title: "Mechanical Safety", safe2Desc: "Obstruction detection prevents bowl closure if an object or body part is detected in the closing path. Force-limited actuators stop immediately on resistance, meeting EN 563 contact temperature guidelines.", safe2p1: "Obstruction detection on lid", safe2p2: "Force-limited actuators", safe2p3: "EN 563 compliant surfaces",
      safe3Title: "User Protection", safe3Desc: "All materials in contact with water or user are certified food-grade or medical-grade polymers. Antimicrobial coatings on all wetted surfaces. No sharp edges or pinch points in the mechanical design.", safe3p1: "Food/medical-grade materials", safe3p2: "Antimicrobial surface coatings", safe3p3: "Zero pinch-point design",
      safe4Title: "Technical Compliance", safe4Desc: "Designed with CE marking pathway in mind. Documentation package follows EN 61000 EMC requirements and the EU Ecodesign Regulation for water-related products. Pre-submission review planned for 2025.", safe4p1: "CE pathway documentation", safe4p2: "EN 61000 EMC design", safe4p3: "EU Ecodesign aligned",
      safetyNote: "ablute_ is currently in the pre-commercial development phase. Formal certifications (CE, ISO) are scheduled for the Pre-Industrial Model stage. All specifications above reflect design intent and engineering targets.",
      stagesTitle: "Development Timeline", stagesDesc: "ablute_ follows a structured technology readiness pathway from concept to commercial scale. Each stage represents a validated milestone with measurable engineering deliverables.", inProgress: "In Progress",
      stage1: "Concept & Problem Validation", stage1d: "Clinical need identified through discussions with physicians and healthcare institutions, confirming the limitations of infrequent laboratory testing and the opportunity for passive biomarker monitoring.",
      stage2: "Engineering Prototype", stage2d: "First functional ablute_ prototype developed, integrating the intelligent sanitation system, automated sample handling, sensing modules and control software.",
      stage3: "Pilot Demonstration", stage3d: "Real-world pilot deployment validating hardware durability, automated cleaning mechanisms and ultra-low water consumption under intensive public use.", stage3e: "Completed",
      stage4: "Clinical Validation", stage4d: "Clinical pilots with healthcare partners, supported by signed Letters of Intent (LOIs), evaluating the diagnostic value of frequent biomarker analysis compared with traditional episodic laboratory testing.", stage4e: "Moving fast",
      stage5: "Industrialization & Commercial Deployment", stage5d: "Preparation for scaled manufacturing, regulatory certification and first commercial deployments in healthcare institutions.",
      PilotVidTitle: "Pilot Demonstration", PilotVidtag1: "Pilot Demonstration Log", PilotVidtag2: "Phase 3 in progress. Not final commercial footage.",
    },
    company: {
      missionTitle: "Our Purpose",
      missionP1: "ablute_ is born from a simple conviction: the objects most present in the daily human routine can do far more than simply fulfil their basic function.",
      missionP2: "We develop a new generation of equipment combining precision engineering, extreme water efficiency and advanced sensing technology to transform a daily moment into a silent opportunity for health monitoring and care.",
      missionCeoLabel: "Note from the CEO of ablute_", missionCeoP1: "The present we are building is still a primitive world, where all those we love will live less than we would wish. While death steals the space and time for our embrace, we want to contribute to extending life.", missionCeoP2: "Our mission is common to all Human Beings: it is as important to live longer as it is to live with quality. ablute_ does not build a monitoring platform — we participate with deep commitment to extending our own existence. Easing the burden of adversity, nurturing a network of intelligence where everyone cares for everyone, and each one for themselves.",
      purposeLine1: "Without changing habits.", purposeLine2: "Without requiring effort.", purposeLine3: "Just technology working invisibly, integrated into daily life.",
      missionLabel: "Mission", missionText: "To develop intelligent equipment that integrates advanced technology, resource efficiency and the capability to collect health-relevant data, transforming the daily routine into a continuous source of useful information for preventive medicine.",
      valuesLabel: "Values",
      val1Title: "Engineering with purpose", val1Desc: "We develop technology that solves real problems, combining scientific rigour, advanced engineering and functional design.",
      val2Title: "Resource efficiency", val2Desc: "We believe technological innovation should contribute to reducing waste and using natural resources more responsibly.",
      val3Title: "Invisible technology", val3Desc: "We create systems that operate autonomously and discreetly, integrated into people's routines without requiring behaviour changes.",
      val4Title: "Applied science", val4Desc: "We value research, scientific validation and collaboration with academic and technology institutions.",
      val5Title: "Positive impact", val5Desc: "We seek to develop solutions that simultaneously improve people's health and the sustainability of the planet.",
      quote: "\"The bathroom is the only room visited by every person, multiple times daily, for the entire course of their life. It is the most underutilised health asset in existence.\"",
      quoteAttr: "ablute_ founding thesis, 2021",
      foundersLabel: "Founders & Leadership", foundersIntro: "The ablute_ platform is developed by a multidisciplinary team combining engineering, medical science and technological innovation.",
      bio1: "Responsible for company strategy, partnerships and business development, leading the growth and global positioning of the ablute_ platform.", bio2: "Leads the technical architecture of the ablute_ platform, including system design, software development and integration of sensing technologies. EU Woman in Tech Award recipient.", bio3: "Medical doctor responsible for the clinical vision of the ablute_ platform, connecting biomarker monitoring with preventive and personalised healthcare.", bio4: "Researcher specialised in nanotechnology and biosensors for in vitro diagnostics, responsible for the scientific direction of the ablute_ sensing technologies.", bio5: "Coordinates research and development activities and contributes to the scientific and technological advancement of the ablute_ platform.", bio6: "Researcher working on biosensing technologies and biomarker detection systems associated with the ablute_ platform.", bio7: "Contributes to biotechnology and biomarker research supporting the development of the ablute_ biosensing system.", bio8: "Responsible for electronic system development and hardware integration within the ablute_ platform.",
      rdLabel: "Research & Development", rdIntro: "The R&D team supports the development of the ablute_ platform through scientific research, engineering and biotechnology.",
      investorsLabel: "Investors", investorsDesc: "ablute_ is backed by the institutional investor Portugal Ventures — who support the company's growth, technology development and long-term market ambition.", investorRole: "Investor", officialWebsite: "Official website",
      advisorsLabel: "Advisors", advisorsDesc: "ablute_ is building an advisory board of experts across health, technology and business.", advisorPlaceholder: "To be announced soon",
      certsTitle: "Institutional Recognition", certsDesc: "ablute_ participates in a network of innovation programs, incubators, and public funding instruments that validate and accelerate our development pathway.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selected for the national startup support program, providing access to funding instruments and institutional network.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Submitted application to the European Innovation Council Accelerator, targeting deep tech hardware ventures.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Awarded an R&D collaboration voucher for partnership with a national polytechnic institute on sensor development.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Resident company at Instituto Pedro Nunes, Portugal's leading technology incubator and accelerator.",
      infraEyebrow: "Scientific and Technological Infrastructure", infraHeadP1: "The development of the ablute_ platform takes place within a collaborative scientific and technological ecosystem that provides access to advanced research infrastructure.", infraHeadP2: "Through partnerships with research institutes, laboratories and innovation organisations, ablute_ operates in an environment where specialised equipment, laboratory facilities and computational resources are available to support the development, testing and validation of new technologies.", infraHeadP3: "This distributed infrastructure model allows the company to combine entrepreneurial agility with the capabilities of established scientific institutions.",
      infra1Title: "Laboratories and Scientific Infrastructure", infra1Intro: "The development of the ablute_ system benefits from access to specialised laboratory environments through collaboration with research institutions and technological centres.", infra1Body: "These environments provide capabilities essential for the development and validation of advanced sensing technologies, including:", infra1B1: "Biosensor development laboratories", infra1B2: "Microelectronics and semiconductor research facilities", infra1B3: "Cleanroom environments for microfabrication and nanotechnology", infra1B4: "Biochemical and bioanalytical laboratories", infra1Footer: "Such infrastructure enables the experimental validation of sensing technologies, the development of electronic architectures and the testing of integrated biomedical systems.",
      infra2Title: "Microelectronics and Sensor Infrastructure", infra2Intro: "The sensing technologies integrated into the ablute_ platform require specialised development and testing environments.", infra2Body: "Through collaborations with technology institutes and semiconductor research centres, the project can access facilities dedicated to:", infra2B1: "Semiconductor device fabrication", infra2B2: "Sensor characterisation", infra2B3: "Microelectronic prototyping", infra2B4: "Signal acquisition and processing validation", infra2Footer: "These facilities enable the development and evaluation of biosensing technologies such as field-effect transistor based sensors and other advanced sensing architectures.",
      infra3Title: "Computational Infrastructure", infra3Intro: "Data analysis and artificial intelligence development require access to computational resources capable of processing large volumes of physiological data.", infra3Body: "Through national and European innovation programmes and research collaborations, ablute_ can access advanced computing infrastructure supporting:", infra3B1: "Machine learning development", infra3B2: "Large-scale data analysis", infra3B3: "Simulation and modelling", infra3B4: "Biomedical signal processing", infra3Footer: "This computational capacity supports the development of the platform's data interpretation engine and the continuous improvement of AI-assisted health insights.",
      infra4Title: "Innovation Ecosystem", infra4Intro: "Beyond physical infrastructure, ablute_ operates within a broader innovation ecosystem composed of research institutions, technology centres, startups and healthcare organisations.", infra4Body: "This network provides access to:", infra4B1: "Scientific expertise", infra4B2: "Multidisciplinary collaboration", infra4B3: "Validation environments", infra4B4: "Technology transfer channels", infra4B5: "Specialised facilities", infra4Footer: "Operating within this ecosystem enables ablute_ to combine technological research, engineering development and clinical relevance in the creation of next-generation health technologies.",
      infra5Title: "Research and Innovation Programmes", infra5Intro: "Participation in national and European research initiatives enables access to infrastructure, collaborative research environments and specialised expertise.", infra5Body: "These programmes facilitate:", infra5B1: "Collaboration with leading research organisations", infra5B2: "Access to advanced laboratory and computing infrastructure", infra5B3: "Multidisciplinary development of new technologies", infra5B4: "Translation of scientific research into practical applications", infra5Footer: "Such frameworks are an important component in supporting the development and validation of innovative health technologies.",
    },
    projects: {
      consortTitle: "Projects", consortDesc: "ablute_ advances through a combination of collaborative projects and grant-supported initiatives focused on health, sustainability and advanced sanitary engineering. These activities support technology development, validation, certification readiness and preparation for real-world deployment.", roleLabel: "ablute_'s Role", consortLabel: "Consortium Projects", grantsLabel: "Grants",
      proj1Desc: "Project aimed at supporting the preparation and submission of applications to European programmes, strengthening internationalisation capacity and increasing participation and success rates in European projects.", proj1Role: "Strengthening ablute_'s internal capacity for preparing and submitting European R&D and innovation applications.",
      proj2Desc: "Mobilising agenda aimed at developing advanced solutions for the health sector, based on innovation and technology.", proj2Role: "Development of a toilet-embedded urine device for continuous biomarker monitoring in a comprehensive and naturalistic environment.",
      proj3Desc: "Project focused on demonstrating, in a real environment, the operability of the ablute_ equipment with reduced water consumption and on initiating the certification processes.", proj3Role: "Demonstration of the operability of the ablute_ equipment in a real context and initiation of the certification processes.",
      proj4Desc: "Collaborative research project focused on advanced sensing technologies and digital health monitoring.", proj4Role: "Technology development and integration.",
      partnersTitle: "Partner Network", partnersDesc: "Our partner network spans research institutes, universities, public utilities, and technology centres across Portugal and Europe.",
      affiliationsTitle: "Ecosystem Participation", affiliationsDesc: "ablute_ is embedded in institutional ecosystems and innovation networks that strengthen the company's credibility, broaden access to strategic collaborations and funding, and accelerate connectivity to the European digital health market. Each affiliation reflects a deliberate positioning within the networks most relevant to ablute_'s mission.",
      aff1Desc: "National health technology cluster connecting medtech companies, hospitals, and research institutions.",
      aff2Desc: "European platform for water innovation, research, and policy. Member of the Water-Oriented Living Labs network.",
      aff3Desc: "National startup ecosystem programme. Recognised as a deep tech hardware company with international potential.",
      aff4Desc: "Community of biotech and health technology startups co-located at IPN incubator, Coimbra.",
      aff5Desc: "Business association for innovation, connecting R&D-intensive companies with industry and academia.",
      aff6Desc: "National health services association. Technical advisory relationship for sanitation standards in care facilities.",
    },
    waterImpact: {
      eyebrow: "Water impact",
      title: "Water saved",
      subtitle: "since the project's inception",
      conventional: "Conventional toilet",
      perUse: "per use",
      note: "Estimate based on 20 daily uses of one ablute_ toilet vs. a conventional one (6 L).",
      since: "Since Jan 2, 2023",
    },
  },

  fr: {
    dir: "ltr",
    nav: { product: "Produit", company: "Entreprise", projects: "Projets", hideSubnav: "Masquer la sous-navigation" },
    mode: { bathroom: "Salle de bain", health: "Santé", label: "mode" },
    cta: { waiting: "Rejoindre la Liste d'Attente", pilot: "Candidater au Pilote", noPayment: "Sans paiement initial" },
    hero: {
      eyebrow: "WC Sensitif, Intelligent et Motorisé",
      line1: "Un design unique", line2: "a réinventé les toilettes", line2b: "", line3: "",
      sub1: "discrète, à l'esthétique affirmée, ou quelque chose entre les deux", sub2: "", sub3: "",
      feat1: "Lavage 100% autonome", feat2: "Nettoyage intégral : cuvette et abattant",
      feat3: "Record d'économie d'eau <1L", feat4: "",
    },
    health: {
      badge: "Deep Tech d'Avant-Garde Européenne",
      h1a: "Analyse Multimodale d'Appui Clinique,", h1b: "fiable, rapide, pratique et abordable.", h1c: "",
      desc: "les premières toilettes intelligentes au monde qui effectuent des analyses d'urine non invasives, économisant",
      brand: "ablute_",
      cta1: "En Savoir Plus", cta2: "Voir la Démo",
      statWaterLabel: "Économies d'Eau", statMonitorLabel: "Surveillance", statFlushLabel: "Par Chasse",
      deviceTitle: "Toilettes Intelligentes", deviceTap: "Appuyer pour en savoir plus",
      deviceHydration: "Hydratation", deviceHydrationVal: "Optimale",
      deviceBiomarkers: "Biomarqueurs", deviceBiomarkersVal: "Normal", deviceScore: "Score",
      badgeEco: "Écologique", badgeEcoVal: "100% Durable",
      badgeHealth: "Santé", badgeHealthVal: "Analyse en Temps Réel",
      tabProduct: "Dispositif d'Analyse", tabScience: "Science", tabForWho: "Pour Qui",
      productTitle: "Technologie ablute_", productDesc: "La plateforme qui transforme la salle de bain en interface de santé préventive.",
      tabBiosensing: "Biocapteurs & Méthodes", tabBioFET: "Technologie Core — bioFET", tabAI: "Intelligence Artificielle", tabAreasApplication: "Domaines d'Application",
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
      heroDescriptor: "Biocapteurs · Surveillance Physiologique Multimodale · Interprétation par IA",
      heroPara1: "La plateforme ablute_ intègre des technologies de biocapteurs, l'acquisition de signaux physiologiques et l'interprétation assistée par IA pour transformer les signaux biologiques de routine en informations de santé structurées.",
      heroPara2: "Conçu pour une surveillance passive et longitudinale, le système permet l'observation des tendances physiologiques dans le temps et soutient des approches plus éclairées de la santé préventive.",
      heroCta1: "Mises à Jour Scientifiques Gratuites", heroCta2: "Je Veux M'impliquer",
      heroFeat1: "Système Entièrement Autonome", heroFeat1Sub: "Flux de détection autonome avec interaction minimale de l'utilisateur",
      heroFeat2Sub: "Traitement automatisé et acquisition rapide du signal",
      heroFeat3: "Biocapteurs Haute Précision", heroFeat3Sub: "Détection fiable des signaux physiologiques et biochimiques",
      appDesc1: "La plateforme ablute_ inclura une application compagnon conçue pour présenter les signaux physiologiques et les insights sur les biomarqueurs dans un format structuré et interprétable.",
      appDesc2: "L'application permettra aux utilisateurs et aux professionnels de santé de visualiser les tendances, contextualiser les valeurs de biomarqueurs et recevoir des informations structurées générées par le moteur d'interprétation des données ablute_.",
      appDesc3: "Comme l'application est actuellement en cours de développement, les utilisateurs peuvent s'inscrire pour être notifiés de sa disponibilité.",
      subResearch: "Recherche & Publications", subBiomarkers: "Biomarqueurs & Analyses", subEvidence: "Preuves Cliniques",
      subProviders: "Prestataires de Santé", subWellness: "Bien-être", subInsurers: "Assureurs", subRD: "R&D",
      satAICategory: "Technologie", satAILabel: "Moteur IA", satAITitle: "Interprétation par IA",
      satAIDesc: "ablute_ utilise des modèles analytiques pour interpréter les signaux et mesures passifs, en mettant en évidence les changements, tendances et modèles pertinents pour le suivi préventif de la santé.",
      satAIBtn: "Explorer / Intelligence Artificielle",
      satLabCategory: "Biocapteurs", satLabLabel: "Techno. Labo", satLabTitle: "Technologie de Niveau Laboratoire",
      satLabDesc: "La plateforme ablute_ intègre une technologie de détection et de traitement développée pour soutenir la collecte récurrente, l'analyse passive et la future validation de biomarqueurs.",
      satLabBtn: "Explorer / Biocapteurs",
      satBioCategory: "Science", satBioLabel: "Insights Biomarqueurs", satBioTitle: "Insights sur les Biomarqueurs",
      satBioDesc: "ablute_ est conçu pour transformer les signaux biologiques passifs en informations utiles, permettant de suivre les tendances physiologiques et d'identifier les changements pertinents.",
      satBioBtn: "Explorer / Science",
      appDownload: "Télécharger", appComingSoon: "Bientôt disponible", appRegister: "S'inscrire pour être notifié",
      whyTitle: "Pourquoi est-ce Nécessaire ?", why1: "La détection précoce prévient les épisodes aigus coûteux", why2: "Les données continues captent les changements entre les visites", why3: "Vieillissement de la population et fardeau des maladies chroniques", why4: "Pénurie de médecins — besoin d'outils d'efficacité", why5: "Remboursement migrant vers les soins basés sur la valeur",
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
      invRoleOtherHealth: "Autre professionnel de santé", invSubject: "Sujet", invSubjectPlaceholder: "Décrivez le sujet",
      contactsOpt1: "Demande d'information", contactsOpt2: "Partenariats", contactsOpt3: "Investisseurs",
      contactsOpt4: "Support technique", contactsOpt5: "Presse",
      contactsSubmit: "Envoyer le message", contactsSent: "Message envoyé.", contactsSentDesc: "Notre équipe répondra prochainement.",
      workWithUs: "Offres d'Emploi", workWithUsTitle: "Offres d'Emploi",
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
      workWithUsShare: "Partager cette offre", workWithUsApplyNow: "Postuler immédiatement",
      workWithUsCopyLink: "Copier le lien", workWithUsCopied: "Copié !",
      workWithUsNomeCompleto: "Nom complet", workWithUsMorada: "Adresse",
      workWithUsTelefone: "Téléphone / Mobile", workWithUsCvLabel: "Curriculum Vitae (PDF / DOC)",
      workWithUsCartaLabel: "Lettre de motivation (optionnel)", workWithUsNotaLabel: "Note additionnelle",
      workWithUsNotaPlaceholder: "Capteurs / essais sur lesquels vous avez travaillé · Techniques de laboratoire maîtrisées · Exemple d'un problème expérimental résolu de A à Z.",
      workWithUsContract: "Contrat temporaire", workWithUsBack: "← Retour", workWithUsShareTitle: "Partager cette offre",
      workWithUsSpontDesc: "Vous n'avez pas trouvé le poste idéal ? Envoyez-nous votre candidature et votre profil.",
      workWithUsLinkedinLabel: "LinkedIn ou Portfolio (optionnel)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "Impossible d'envoyer la candidature. Réessayez ou envoyez directement à talent@ablute.pt",
      investorsHighlight1: "Le stade précoce offre le plus grand potentiel de valorisation",
      investorsHighlight2: "Grand marché et problème inévitable",
      investorsHighlight3: "Équipe solide et exécution qualifiée",
      investorsHighlight4: "Traction et validation progressives",
      partnersCat1: "Composants Électroniques",
      partnersCat2: "Services de Nanotechnologie",
      partnersCat3: "Produits de Nanotechnologie",
      partnersCat4: "IA",
      partnersCat5: "Production Industrielle",
      partnersCat6: "Métallurgie",
      partnersCat7: "Moules & Polymères",
      partnersCat8: "Autre (préciser lequel)",
      partnersOutroPlaceholder: "Précisez votre domaine d'activité",
      partnersSelectError: "Veuillez sélectionner au moins une catégorie",
      partnersEmailLabel: "Email",
    },
    productPage: { tab1: "Technologie", tab2: "Fiche Produit", tab3: "Sécurité & Conformité", tab4: "Étapes de Développement" },
    companyPage: { tab1: "Mission & Valeurs", tab2: "Équipe", tab3: "Certifications", tab4: "Infrastructures" },
    projectsPage: { tab1: "Projets financés et en consortium", tab2: "Partenaires", tab3: "Affiliations", tab4: "Rôle Social", tabAwards: "Prix", projectSheetLink: "Voir la fiche du projet" },
    product: {
      techTitle: "Comment fonctionne ablute_",
      techDesc: "ablute_ intègre la gestion de l'eau, la détection intelligente et l'analyse de santé en une seule plateforme. Chaque composant est conçu pour fonctionner de manière autonome, sans intervention de l'utilisateur, s'améliorant continuellement grâce aux données d'utilisation.",
      tech1Title: "Système d'Efficacité Hydrique", tech1Desc: "Des vannes de micro-dosage de précision réduisent la consommation d'eau jusqu'à >90% par rapport aux modèles conventionnels. Un réseau de capteurs en boucle fermée surveille le débit en temps réel, ajustant dynamiquement le cycle de lavage.", tech1p1: "Architecture de vannes à micro-dosage", tech1p2: "Surveillance du débit en temps réel", tech1p3: "Jusqu'à **>90%** de réduction d'eau",
      tech2Title: "Détection Intelligente", tech2Desc: "Un ensemble de capteurs optiques et chimiques non invasifs détecte la présence, le type d'utilisation et les marqueurs biologiques. Les données sont traitées localement — rien ne quitte l'appareil sans consentement explicite.", tech2p1: "Détection de présence optique", tech2p2: "Détection de biomarqueurs chimiques", tech2p3: "Traitement local en périphérie",
      tech3Title: "1 Mode de Lavage — Toujours Parfait", tech3Desc: "Le système intègre des capteurs qui détectent si les toilettes sont sales et adaptent l'eau utilisée par lavage. Lorsqu'elles sont propres, il interrompt l'utilisation d'eau pour éviter le gaspillage. Ces capacités — lavage adaptatif et autonome — en font les toilettes les mieux adaptées aux WC publics très fréquentés : économisant l'eau tout en garantissant une hygiène permanente et autonome.", tech3p1: "Parfait pour les salles de bain à haute fréquentation", tech3p2: "Idéal pour les résidences de luxe", tech3p3: "",
      tech4Title: "Modes d'Utilisation", tech4Desc: "Conçu pour les contextes partagés et privés. La reconnaissance de profil multi-utilisateur permet des paramètres personnalisés pour les membres du foyer ou les utilisateurs institutionnels.", tech4p1: "Reconnaissance de profil multi-utilisateur", tech4p2: "Paramètres personnalisés par utilisateur", tech4p3: "Contrôle d'accès institutionnel",
      tech5sub : "Intégration architecturale", tech5Title1 : "Un système conçu ", tech5Title2 : "pour disparaître", tech5Desc : "ablute_ s’intègre au mur ou au sol comme n’importe quel WC suspendu haut de gamme. Il ne nécessite aucune intervention de l’utilisateur : il fonctionne de manière totalement autonome, silencieuse et invisible.", tech5p1 : "Installation standard dans toutes les salles de bains", tech5p2 : "Sans boutons, sans interaction manuelle", tech5p3 : "Connectivité Wi-Fi et Bluetooth intégrée", tech5p4 : "Compatible avec les systèmes domotiques",
      tech6Title: "Un design qui réinvente les toilettes", tech6Desc: "ablute_ allie ingénierie de pointe et intégration architecturale, permettant des installations discrètes ou à l’esthétique remarquable.", tech6tag1: "Intégration architecturale – design", tech6tag2: "Installation dans un environnement haut de gamme", tech6tag3: "Environnements exigeants sur le plan esthétique", tech6tag4: "Suite résidentielle de luxe",
      tech7sub: "Produit", tech7Title: "Intégré à l'architecture", tech7Desc: "L'ablute_ a été conçu pour s'intégrer dans les environnements résidentiels et institutionnels sans compromettre l'esthétique ni la fonctionnalité.",
      tech8sub: "Produit dans un contexte réel", tech8Title: "Du concept à la réalité", tech8Desc: "Capture réelle du système en fonctionnement dans des environnements réels.", tech8tag: "Produit en fonctionnement — collecte de données réelles",
      sheetTitle: "Spécification Technique", sheetDesc: "Le document de spécification technique ablute_ couvre l'architecture du système, les spécifications des composants, les exigences d'installation et les performances.", sheetDrawing: "Dessin Technique",
      specInstall: "Installation",
      specDim: "Dimensions", specVolt: "Tension de Fonctionnement", specWater: "Raccordement Eau", specDrain: "Raccordement Évacuation", specSensor: "Modules Capteurs", specWifi: "Sans Fil", specWeight: "Poids", specIp: "Indice de Protection",
      specInstallDet: "Mural / Sol — configurations multiples",
        specDimDet: "47 × 29,5 × 41–51 cm (L × P × A) · Ouvert: 80–90 cm", specVoltDet: "12V DC — 220–240 V, 50/60 Hz, 200 W máx.", specWaterDet: "1–10 bar · Ref.: 15 cm alt. / 17 cm du drain", specDrainDet: "Mural 18–20 cm · Sol jusqu'à 12 cm", specSensorDet: "Optique + mouvement — sans contact", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "Télécharger la Spécification Technique (PDF)", sheetVersion: "Document version 0.7 — Avant commercialisation. Susceptible de modification.",
      installGuideTitle: "Guide d'Installation", installGuideDesc: "Informations essentielles pour la préparation de l'installation de l'équipement ablute_.",
      installStep1Title: "Compatibilité d'Installation", installStep1Desc: "ablute_ peut être installée dans différentes configurations de WC, s'adaptant à diverses dispositions d'évacuation et d'alimentation en eau.",
      installStep2Title: "Préparation de l'Espace", installStep2Desc: "S'assurer d'un espace suffisant pour l'installation et le fonctionnement de l'équipement, y compris l'ouverture complète du mécanisme.",
      installStep3Title: "Raccordement Eau", installStep3Desc: "Vérifier l'existence d'un point d'eau dans les paramètres de pression recommandés (1–10 bar).",
      installStep4Title: "Raccordement Évacuation", installStep4Desc: "Vérifier que l'évacuation est compatible avec une connexion murale ou au sol et respecte les distances recommandées.",
      installStep5Title: "Alimentation Électrique", installStep5Desc: "L'alimentation est fournie via un transformateur 12V basse tension connecté au réseau 220–240 V.",
      installGuideDownload: "Télécharger le Guide d'Installation (PDF)", sheetLangNote: "Disponible en anglais. Pour d'autres langues, contactez-nous à",
      safetyTitle: "Conception Sécuritaire", safetyDesc: "ablute_ est conçue depuis ses principes fondamentaux avec la sécurité comme contrainte centrale. L'architecture du système priorise la protection des utilisateurs sur les dimensions électrique, mécanique, biologique et réglementaire.",
      safe1Title: "Sécurité Électrique", safe1Desc: "L'ensemble du système actif fonctionne en basse tension 12V DC, éliminant tout risque d'électrocution en milieu humide. Tous les PCB sont encapsulés selon la norme IEC 60529.", safe1p1: "Système basse tension 12V DC", safe1p2: "Boîtiers indice IP67", safe1p3: "Électronique à revêtement conforme",
      safe2Title: "Sécurité Mécanique", safe2Desc: "La détection d'obstruction empêche la fermeture du bol si un objet ou une partie du corps est détecté. Les actionneurs à force limitée s'arrêtent immédiatement en cas de résistance.", safe2p1: "Détection d'obstruction sur le couvercle", safe2p2: "Actionneurs à force limitée", safe2p3: "Surfaces conformes EN 563",
      safe3Title: "Protection de l'Utilisateur", safe3Desc: "Tous les matériaux en contact avec l'eau ou l'utilisateur sont des polymères certifiés alimentaires ou médicaux. Revêtements antimicrobiens sur toutes les surfaces mouillées. Aucun bord tranchant.", safe3p1: "Matériaux alimentaires/médicaux", safe3p2: "Revêtements antimicrobiens", safe3p3: "Conception sans points de pincement",
      safe4Title: "Conformité Technique", safe4Desc: "Conçu dans l'optique du marquage CE. Le dossier de documentation suit les exigences CEM EN 61000 et le Règlement Écoconception de l'UE. Révision pré-soumission prévue pour 2025.", safe4p1: "Documentation parcours CE", safe4p2: "Conception CEM EN 61000", safe4p3: "Conforme à l'Écoconception UE",
      safetyNote: "ablute_ est actuellement en phase de développement pré-commercial. Les certifications formelles (CE, ISO) sont prévues pour la phase de Modèle Pré-Industriel. Toutes les spécifications ci-dessus reflètent les intentions de conception.",
      stagesTitle: "Calendrier de Développement", stagesDesc: "ablute_ suit un parcours structuré de maturité technologique, du concept à l'échelle commerciale. Chaque étape représente un jalon validé avec des livrables d'ingénierie mesurables.", inProgress: "En cours",
      stage1: "Validation du Concept et du Problème", stage1d: "Besoin clinique identifié lors de discussions avec des médecins et des établissements de soins, confirmant les limites des tests de laboratoire épisodiques et l'opportunité d'une surveillance passive des biomarqueurs.",
      stage2: "Prototype d'Ingénierie", stage2d: "Premier prototype fonctionnel ablute_ développé, intégrant le système de sanitaire intelligent, la gestion automatisée des échantillons, les modules de capteurs et le logiciel de contrôle.",
      stage3: "Démonstration Pilote", stage3d: "Déploiement pilote en situation réelle validant la durabilité du matériel, les mécanismes de nettoyage automatisés et la consommation d'eau ultra-faible en usage public intensif.", stage3e: "Terminé",
      stage4: "Validation Clinique", stage4d: "Pilotes cliniques avec des partenaires de santé, soutenus par des Lettres d'Intention signées (LOIs), évaluant la valeur diagnostique de l'analyse fréquente des biomarqueurs par rapport aux tests de laboratoire épisodiques traditionnels.", stage4e: "En accélération",
      stage5: "Industrialisation & Déploiement Commercial", stage5d: "Préparation à la fabrication à grande échelle, à la certification réglementaire et aux premiers déploiements commerciaux dans les établissements de soins.",
      PilotVidTitle : "Démonstration pilote", PilotVidtag1 : "Enregistrement de démonstration pilote", PilotVidtag2 : "Phase 3 en cours. Images non commerciales finales.",
    },
    company: {
      missionTitle: "Notre Objectif",
      missionP1: "ablute_ a été fondée sur une conviction unique : l'infrastructure de la vie quotidienne peut avoir un objectif bien plus grand qu'actuellement.",
      missionP2: "Nous concevons des systèmes d'assainissement qui éliminent le gaspillage d'eau, fonctionnent sans effort de l'utilisateur et collectent passivement les données de santé dont la médecine préventive a besoin — au point de contact le plus régulier de la routine humaine.",
      missionCeoLabel: "Note du CEO d'ablute_", missionCeoP1: "Le présent que nous construisons est encore un monde primitif, où tous ceux que nous aimons vivront moins longtemps que nous le souhaiterions. Tandis que la mort vole l'espace et le temps pour nous embrasser, nous voulons contribuer à prolonger la vie.", missionCeoP2: "Notre mission est commune à l'Être Humain : il est aussi important de vivre plus longtemps que de vivre avec qualité. ablute_ ne construit pas une plateforme de surveillance — nous participons avec un engagement profond pour prolonger notre propre existence. En allégeant le fardeau des vicissitudes, en stimulant un réseau d'intelligence où chacun prend soin de tous et chacun de soi.",
      purposeLine1: "Sans modifier les habitudes.", purposeLine2: "Sans exiger d'effort.", purposeLine3: "Juste une technologie qui travaille de manière invisible, intégrée dans la vie quotidienne.",
      missionLabel: "Mission", missionText: "Développer des équipements intelligents qui intègrent la technologie avancée, l'efficacité des ressources et la capacité de collecter des données pertinentes pour la santé, transformant la routine quotidienne en une source continue d'informations utiles pour la médecine préventive.",
      valuesLabel: "Valeurs",
      val1Title: "Ingénierie avec un but", val1Desc: "Nous développons une technologie qui résout de vrais problèmes, en combinant rigueur scientifique, ingénierie avancée et design fonctionnel.",
      val2Title: "Efficacité des ressources", val2Desc: "Nous croyons que l'innovation technologique doit contribuer à réduire les déchets et à utiliser les ressources naturelles de manière plus responsable.",
      val3Title: "Technologie invisible", val3Desc: "Nous créons des systèmes qui fonctionnent de manière autonome et discrète, intégrés dans la routine des gens sans exiger de changements de comportement.",
      val4Title: "Science appliquée", val4Desc: "Nous valorisons la recherche, la validation scientifique et la collaboration avec des institutions académiques et technologiques.",
      val5Title: "Impact positif", val5Desc: "Nous cherchons à développer des solutions qui contribuent à améliorer simultanément la santé des personnes et la durabilité de la planète.",
      quote: "\"La salle de bain est la seule pièce visitée par chaque personne, plusieurs fois par jour, tout au long de sa vie. C'est l'atout de santé le plus sous-exploité qui soit.\"",
      quoteAttr: "Thèse fondatrice ablute_, 2021",
      foundersLabel: "Fondateurs et Direction", foundersIntro: "La plateforme ablute_ est développée par une équipe multidisciplinaire combinant ingénierie, sciences médicales et innovation technologique.",
      bio1: "Responsable de la stratégie de l’entreprise, des partenariats et du développement commercial, dirigeant la croissance et le positionnement mondial de la plateforme ablute_.",
      bio2: "Dirige l’architecture technique de la plateforme ablute_, y compris la conception du système, le développement logiciel et l’intégration des technologies de détection. Lauréate du EU Woman in Tech Award.",
      bio3: "Médecin responsable de la vision clinique de la plateforme ablute_, reliant le suivi des biomarqueurs à la médecine préventive et personnalisée.",
      bio4: "Chercheur spécialisée en nanotechnologie et biosenseurs pour le diagnostic in vitro, responsable de la direction scientifique des technologies de détection ablute_.",
      bio5: "Coordonne les activités de recherche et développement et contribue aux avancées scientifiques et technologiques de la plateforme ablute_.",
      bio6: "Chercheuse développant les technologies de biosensing et les systèmes de détection de biomarqueurs associés à la plateforme ablute_.",
      bio7: "Contribue à la recherche en biotechnologie et biomarqueurs soutenant le développement du système de biosensing ablute_.",
      bio8: "Responsable du développement des systèmes électroniques et de l’intégration matérielle au sein de la plateforme ablute_.",
      rdLabel: "Recherche et Développement", rdIntro: "L'équipe R&D soutient le développement de la plateforme ablute_ par la recherche scientifique, l'ingénierie et la biotechnologie.",
      investorsLabel: "Investisseurs", investorsDesc: "ablute_ est soutenue par l'investisseur institutionnel Portugal Ventures — qui soutient la croissance de l'entreprise, le développement technologique et l'ambition à long terme sur le marché.", investorRole: "Investisseur", officialWebsite: "Site officiel",
      advisorsLabel: "Conseillers", advisorsDesc: "ablute_ constitue un conseil consultatif d'experts en santé, technologie et affaires.", advisorPlaceholder: "À annoncer prochainement",
      certsTitle: "Reconnaissance Institutionnelle", certsDesc: "ablute_ participe à un réseau de programmes d'innovation, d'incubateurs et d'instruments de financement public qui valident et accélèrent notre parcours de développement.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Sélectionnée pour le programme national de soutien aux startups, donnant accès aux instruments de financement et au réseau institutionnel.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidature soumise à l'Accélérateur du Conseil Européen de l'Innovation, ciblant les ventures hardware deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Attribution d'un bon de collaboration R&D pour un partenariat avec un institut polytechnique national sur le développement de capteurs.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Entreprise résidente à l'Instituto Pedro Nunes, le principal incubateur et accélérateur technologique du Portugal.",
      infraEyebrow: "Infrastructure Scientifique et Technologique", infraHeadP1: "Le développement de la plateforme ablute_ s'inscrit dans un écosystème scientifique et technologique collaboratif offrant accès à une infrastructure de recherche avancée.", infraHeadP2: "Grâce à des partenariats avec des instituts de recherche, des laboratoires et des organisations d'innovation, ablute_ opère dans un environnement où équipements spécialisés, installations de laboratoire et ressources informatiques sont disponibles pour soutenir le développement, les tests et la validation de nouvelles technologies.", infraHeadP3: "Ce modèle d'infrastructure distribuée permet à l'entreprise de combiner agilité entrepreneuriale et capacités des institutions scientifiques établies.",
      infra1Title: "Laboratoires et Infrastructure Scientifique", infra1Intro: "Le développement du système ablute_ bénéficie d'un accès à des environnements de laboratoire spécialisés par le biais de collaborations avec des institutions de recherche et des centres technologiques.", infra1Body: "Ces environnements fournissent des capacités essentielles pour le développement et la validation de technologies de détection avancées, notamment :", infra1B1: "Laboratoires de développement de biocapteurs", infra1B2: "Installations de recherche en microélectronique et semi-conducteurs", infra1B3: "Environnements de salle blanche pour la microfabrication et la nanotechnologie", infra1B4: "Laboratoires biochimiques et bioanalytiques", infra1Footer: "Une telle infrastructure permet la validation expérimentale des technologies de détection, le développement d'architectures électroniques et les tests de systèmes biomédicaux intégrés.",
      infra2Title: "Infrastructure Microélectronique et Capteurs", infra2Intro: "Les technologies de détection intégrées dans la plateforme ablute_ nécessitent des environnements de développement et de test spécialisés.", infra2Body: "Grâce à des collaborations avec des instituts technologiques et des centres de recherche sur les semi-conducteurs, le projet peut accéder à des installations dédiées à :", infra2B1: "Fabrication de dispositifs semi-conducteurs", infra2B2: "Caractérisation des capteurs", infra2B3: "Prototypage microélectronique", infra2B4: "Validation de l'acquisition et du traitement des signaux", infra2Footer: "Ces installations permettent le développement et l'évaluation de technologies de biocapteurs telles que les capteurs à transistor à effet de champ et d'autres architectures de détection avancées.",
      infra3Title: "Infrastructure Informatique", infra3Intro: "L'analyse des données et le développement de l'intelligence artificielle nécessitent un accès à des ressources informatiques capables de traiter de grands volumes de données physiologiques.", infra3Body: "Grâce aux programmes d'innovation nationaux et européens et aux collaborations de recherche, ablute_ peut accéder à une infrastructure informatique avancée prenant en charge :", infra3B1: "Développement du machine learning", infra3B2: "Analyse de données à grande échelle", infra3B3: "Simulation et modélisation", infra3B4: "Traitement des signaux biomédicaux", infra3Footer: "Cette capacité de calcul soutient le développement du moteur d'interprétation des données de la plateforme et l'amélioration continue des analyses de santé assistées par IA.",
      infra4Title: "Écosystème d'Innovation", infra4Intro: "Au-delà de l'infrastructure physique, ablute_ évolue dans un écosystème d'innovation plus large composé d'institutions de recherche, de centres technologiques, de startups et d'organisations de santé.", infra4Body: "Ce réseau offre accès à :", infra4B1: "Expertise scientifique", infra4B2: "Collaboration multidisciplinaire", infra4B3: "Environnements de validation", infra4B4: "Canaux de transfert de technologie", infra4B5: "Installations spécialisées", infra4Footer: "Évoluer dans cet écosystème permet à ablute_ de combiner recherche technologique, développement ingénieur et pertinence clinique dans la création de technologies de santé de nouvelle génération.",
      infra5Title: "Programmes de Recherche et d'Innovation", infra5Intro: "La participation à des initiatives de recherche nationales et européennes permet l'accès à l'infrastructure, aux environnements de recherche collaborative et à l'expertise spécialisée.", infra5Body: "Ces programmes facilitent :", infra5B1: "La collaboration avec des organisations de recherche de premier plan", infra5B2: "L'accès à une infrastructure de laboratoire et informatique avancée", infra5B3: "Le développement multidisciplinaire de nouvelles technologies", infra5B4: "La translation de la recherche scientifique en applications pratiques", infra5Footer: "Ces cadres constituent un élément important du soutien au développement et à la validation de technologies de santé innovantes.",
    },
    projects: {
      consortTitle: "Projets", consortDesc: "ablute_ progresse grâce à une combinaison de projets collaboratifs et d'initiatives soutenues par des subventions, axées sur la santé, la durabilité et le génie sanitaire avancé. Ces activités soutiennent le développement technologique, la validation, la préparation à la certification et le déploiement réel.", roleLabel: "Rôle d'ablute_", consortLabel: "Projets Consortiaux", grantsLabel: "Subventions",
      proj1Desc: "Projet visant à soutenir la préparation et la soumission de candidatures à des programmes européens, renforçant la capacité d'internationalisation et augmentant la participation et le taux de réussite dans les projets européens.", proj1Role: "Renforcement de la capacité interne d'ablute_ pour la préparation et la soumission de candidatures européennes de R&D et d'innovation.",
      proj2Desc: "Agenda mobilisateur orienté vers le développement de solutions avancées pour le secteur de la santé, fondées sur l'innovation et la technologie.", proj2Role: "Développement d'un dispositif urinaire intégré aux toilettes pour la surveillance continue des biomarqueurs dans un environnement complet et naturaliste.",
      proj3Desc: "Projet axé sur la démonstration, en environnement réel, de l'opérabilité de l'équipement ablute_ avec une consommation d'eau réduite et sur le lancement des processus de certification.", proj3Role: "Démonstration de l'opérabilité de l'équipement ablute_ en contexte réel et lancement des processus de certification.",
      proj4Desc: "Projet de recherche collaborative axé sur les technologies avancées de capteurs et la surveillance numérique de la santé.", proj4Role: "Développement et intégration technologique.",
      partnersTitle: "Réseau de Partenaires", partnersDesc: "Notre réseau de partenaires couvre des instituts de recherche, des universités, des services publics et des centres technologiques au Portugal et en Europe.",
      affiliationsTitle: "Participation à l'Écosystème", affiliationsDesc: "ablute_ est intégrée dans des écosystèmes institutionnels et des réseaux d'innovation qui renforcent la crédibilité de l'entreprise, élargissent l'accès aux collaborations stratégiques et accélèrent la connexion au marché européen de la santé numérique.",
      aff1Desc: "Cluster national de technologie de santé connectant entreprises medtech, hôpitaux et institutions de recherche.",
      aff2Desc: "Plateforme européenne pour l'innovation, la recherche et les politiques de l'eau. Membre du réseau Water-Oriented Living Labs.",
      aff3Desc: "Programme national de l'écosystème startup. Reconnue comme entreprise hardware deep tech à potentiel international.",
      aff4Desc: "Communauté de startups en biotechnologie et technologie de santé co-localisées à l'incubateur IPN, Coimbra.",
      aff5Desc: "Association d'entreprises pour l'innovation, reliant les entreprises intensives en R&D à l'industrie et au monde académique.",
      aff6Desc: "Association nationale des services de santé. Relation de conseil technique pour les normes d'assainissement dans les établissements de soins.",
    },
    waterImpact: {
      eyebrow: "Impact hydrique",
      title: "Eau économisée",
      subtitle: "depuis le lancement du projet",
      conventional: "Toilette conventionnelle",
      perUse: "par utilisation",
      note: "Estimation basée sur 20 utilisations quotidiennes d'une toilette ablute_ vs. une conventionnelle (6 L).",
      since: "Depuis le 2 jan 2023",
    },
  },

  de: {
    dir: "ltr",
    nav: { product: "Produkt", company: "Unternehmen", projects: "Projekte", hideSubnav: "Unternavigation ausblenden" },
    mode: { bathroom: "Badezimmer", health: "Gesundheit", label: "mode" },
    cta: { waiting: "Warteliste beitreten", pilot: "Pilotprogramm beantragen", noPayment: "Keine Vorauszahlung erforderlich" },
    hero: {
      eyebrow: "Sensitive, intelligente & motorisierte Toilette",
      line1: "Ein einzigartiges Design", line2: "hat die Toilette neu erfunden", line2b: "", line3: "",
      sub1: "verborgen, mit kühner Ästhetik, oder etwas dazwischen", sub2: "", sub3: "",
      feat1: "100% autonomes Waschen", feat2: "Vollständige Reinigung: Becken und Sitz",
      feat3: "Wasserersparnis-Rekord <1L", feat4: "",
    },
    health: {
      badge: "Europäische Vanguard Deep Tech",
      h1a: "Multimodale klinische Unterstützungsanalyse,", h1b: "zuverlässig, schnell, praktisch und günstig.", h1c: "",
      desc: "die erste intelligente Toilette der Welt, die nicht-invasive Urinanalysen durchführt und",
      brand: "ablute_",
      cta1: "Mehr erfahren", cta2: "Demo ansehen",
      statWaterLabel: "Wassereinsparung", statMonitorLabel: "Überwachung", statFlushLabel: "Pro Spülung",
      deviceTitle: "Intelligente Toilette", deviceTap: "Tippen für mehr Infos",
      deviceHydration: "Hydration", deviceHydrationVal: "Optimal",
      deviceBiomarkers: "Biomarker", deviceBiomarkersVal: "Normal", deviceScore: "Punktzahl",
      badgeEco: "Umweltfreundlich", badgeEcoVal: "100% nachhaltig",
      badgeHealth: "Gesundheit", badgeHealthVal: "Echtzeit-Analyse",
      tabProduct: "Analysegerät", tabScience: "Wissenschaft", tabForWho: "Für wen",
      productTitle: "ablute_ Technologie", productDesc: "Die Plattform, die das Bad in eine präventive Gesundheitsschnittstelle verwandelt.",
      tabBiosensing: "Biosensoren & Methoden", tabBioFET: "Kerntechnologie — bioFET", tabAI: "Künstliche Intelligenz", tabAreasApplication: "Anwendungsbereiche",
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
      heroDescriptor: "Biosensing · Multimodale Physiologische Überwachung · KI-gestützte Interpretation",
      heroPara1: "Die ablute_-Plattform integriert Biosensing-Technologien, physiologische Signalerfassung und KI-gestützte Interpretation, um routinemäßige biologische Signale in strukturierte Gesundheitsinformationen umzuwandeln.",
      heroPara2: "Für passive und longitudinale Überwachung konzipiert, ermöglicht das System die Beobachtung physiologischer Trends über die Zeit und unterstützt fundiertere Ansätze zur Präventivgesundheit.",
      heroCta1: "Kostenlose Wissenschaftliche Updates", heroCta2: "Ich Möchte Mitmachen",
      heroFeat1: "Vollständig Autonomes System", heroFeat1Sub: "Autonomer Erfassungsworkflow mit minimaler Benutzerinteraktion",
      heroFeat2Sub: "Automatisierte Verarbeitung und schnelle Signalerfassung",
      heroFeat3: "Hochpräzise Biosensoren", heroFeat3Sub: "Zuverlässige physiologische und biochemische Signalerfassung",
      appDesc1: "Die ablute_-Plattform wird eine Begleitanwendung umfassen, die physiologische Signale und Biomarker-Erkenntnisse in einem strukturierten und interpretierbaren Format darstellt.",
      appDesc2: "Die Anwendung ermöglicht es Benutzern und Gesundheitsfachleuten, Trends zu visualisieren, Biomarker-Werte zu kontextualisieren und strukturierte Erkenntnisse aus der ablute_-Dateninterpretationsmaschine zu erhalten.",
      appDesc3: "Da die Anwendung derzeit in Entwicklung ist, können Nutzer sich registrieren, um benachrichtigt zu werden, wenn sie verfügbar ist.",
      subResearch: "Forschung & Publikationen", subBiomarkers: "Biomarker & Erkenntnisse", subEvidence: "Klinische Evidenz",
      subProviders: "Gesundheitsdienstleister", subWellness: "Wellness", subInsurers: "Versicherungen", subRD: "F&E",
      satAICategory: "Technologie", satAILabel: "KI-Motor", satAITitle: "KI-gestützte Interpretation",
      satAIDesc: "ablute_ nutzt analytische Modelle, um passive Signale und Messungen zu interpretieren und relevante Veränderungen, Trends und Muster für die präventive Gesundheitsüberwachung hervorzuheben.",
      satAIBtn: "Erkunden / Künstliche Intelligenz",
      satLabCategory: "Biosensorik", satLabLabel: "Labor-Technologie", satLabTitle: "Labortechnologie",
      satLabDesc: "Die ablute_-Plattform integriert Erkennungs- und Verarbeitungstechnologie für wiederkehrende Erfassung, passive Analyse und zukünftige Biomarker-Validierung.",
      satLabBtn: "Erkunden / Biosensoren",
      satBioCategory: "Wissenschaft", satBioLabel: "Biomarker-Erkenntnisse", satBioTitle: "Biomarker-Erkenntnisse",
      satBioDesc: "ablute_ ist darauf ausgelegt, passive biologische Signale in nützliche Informationen umzuwandeln und physiologische Trends zu verfolgen sowie relevante Veränderungen zu identifizieren.",
      satBioBtn: "Erkunden / Wissenschaft",
      appDownload: "Herunterladen", appComingSoon: "Bald verfügbar", appRegister: "Registrieren für Benachrichtigung",
      whyTitle: "Warum wird es benötigt?", why1: "Früherkennung verhindert kostspielige akute Episoden", why2: "Kontinuierliche Daten erfassen Veränderungen zwischen Besuchen", why3: "Alternde Bevölkerung und chronische Krankheitslast", why4: "Ärztemangel — Bedarf an Effizienztools", why5: "Vergütung verlagert sich zu wertorientierter Versorgung",
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
      invRoleOtherHealth: "Anderer Gesundheitsfachmann", invSubject: "Betreff", invSubjectPlaceholder: "Betreff beschreiben",
      contactsOpt1: "Informationsanfrage", contactsOpt2: "Partnerschaften", contactsOpt3: "Investoren",
      contactsOpt4: "Technischer Support", contactsOpt5: "Presse",
      contactsSubmit: "Nachricht senden", contactsSent: "Nachricht gesendet.", contactsSentDesc: "Unser Team wird in Kürze antworten.",
      workWithUs: "Stellenangebote", workWithUsTitle: "Stellenangebote",
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
      workWithUsShare: "Position teilen", workWithUsApplyNow: "Jetzt bewerben",
      workWithUsCopyLink: "Link kopieren", workWithUsCopied: "Kopiert!",
      workWithUsNomeCompleto: "Vollständiger Name", workWithUsMorada: "Adresse",
      workWithUsTelefone: "Telefon / Mobiltelefon", workWithUsCvLabel: "Lebenslauf (PDF / DOC)",
      workWithUsCartaLabel: "Motivationsschreiben (optional)", workWithUsNotaLabel: "Zusätzliche Notiz",
      workWithUsNotaPlaceholder: "Sensoren / Assays · Labortechniken · Beispiel eines experimentellen Problems, das Sie vollständig gelöst haben.",
      workWithUsContract: "Zeitvertrag", workWithUsBack: "← Zurück", workWithUsShareTitle: "Stelle teilen",
      workWithUsSpontDesc: "Keine passende Stelle gefunden? Senden Sie uns Ihre Bewerbung und Ihr Profil.",
      workWithUsLinkedinLabel: "LinkedIn oder Portfolio (optional)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "Bewerbung konnte nicht gesendet werden. Versuchen Sie es erneut oder senden Sie direkt an talent@ablute.pt",
      investorsHighlight1: "Early Stage bietet das größte Wertsteigerungspotenzial",
      investorsHighlight2: "Großer Markt und unvermeidliches Problem",
      investorsHighlight3: "Starkes Team und qualifizierte Ausführung",
      investorsHighlight4: "Progressive Traktion und Validierung",
      partnersCat1: "Elektronische Komponenten",
      partnersCat2: "Nanotechnologie-Dienstleistungen",
      partnersCat3: "Nanotechnologie-Produkte",
      partnersCat4: "KI",
      partnersCat5: "Industrielle Fertigung",
      partnersCat6: "Metallurgie",
      partnersCat7: "Formen & Polymere",
      partnersCat8: "Sonstiges (bitte angeben)",
      partnersOutroPlaceholder: "Geben Sie Ihren Tätigkeitsbereich an",
      partnersSelectError: "Bitte wählen Sie mindestens eine Kategorie",
      partnersEmailLabel: "E-Mail",
    },
    productPage: { tab1: "Technologie", tab2: "Produktblatt", tab3: "Sicherheit & Compliance", tab4: "Entwicklungsphasen" },
    companyPage: { tab1: "Mission & Werte", tab2: "Team", tab3: "Zertifizierungen", tab4: "Infrastruktur" },
    projectsPage: { tab1: "Geförderte und Konsortialprojekte", tab2: "Partner", tab3: "Mitgliedschaften", tab4: "Soziale Rolle", tabAwards: "Auszeichnungen", projectSheetLink: "Projektblatt ansehen" },
    product: {
      techTitle: "So funktioniert ablute_",
      techDesc: "ablute_ vereint Wassermanagement, intelligente Sensorik und Gesundheitsanalytik in einer einzigen Plattform. Jede Komponente ist darauf ausgelegt, autonom zu arbeiten, keine Benutzereingriffe zu erfordern und sich durch Nutzungsdaten kontinuierlich zu verbessern.",
      tech1Title: "Wassereffizienz-System", tech1Desc: "Präzisions-Mikrodosierventile reduzieren den Wasserverbrauch um bis zu >90% gegenüber herkömmlichen Modellen. Ein geschlossener Sensorring überwacht die Durchflussmenge in Echtzeit und passt den Waschzyklus dynamisch an.", tech1p1: "Mikrodosierventil-Architektur", tech1p2: "Echtzeit-Durchflussüberwachung", tech1p3: "Bis zu **>90%** Wasserreduzierung",
      tech2Title: "Intelligente Erkennung", tech2Desc: "Eine Reihe nicht-invasiver optischer und chemischer Sensoren erkennt Anwesenheit, Nutzungsart und biologische Marker. Die Daten werden lokal verarbeitet — nichts verlässt das Gerät ohne ausdrückliche Zustimmung.", tech2p1: "Optische Anwesenheitserkennung", tech2p2: "Chemische Biomarker-Erkennung", tech2p3: "Lokale Edge-Verarbeitung",
      tech3Title: "1 Waschmodus — Immer Perfekt", tech3Desc: "Das System integriert Sensoren, die erkennen, ob die Toilette verschmutzt ist, und die pro Spülung verwendete Wassermenge anpassen. Wenn sie sauber ist, wird die Wassernutzung gestoppt, um Verschwendung zu vermeiden. Diese Fähigkeiten — adaptives und autonomes Waschen — machen diese Toilette zur am besten geeigneten für stark frequentierte öffentliche WC-Anlagen: Wassersparen und dauerhafte, autonome Hygiene.", tech3p1: "Perfekt für stark frequentierte Badezimmer", tech3p2: "Ideal für Luxuswohnungen", tech3p3: "",
      tech4Title: "Nutzungsmodi", tech4Desc: "Für gemeinsame und private Kontexte konzipiert. Die Multi-Benutzer-Profilerkennung ermöglicht personalisierte Einstellungen für Haushaltsmitglieder oder institutionelle Nutzer mit vollständiger Zugriffskontrolle.", tech4p1: "Multi-Benutzer-Profilerkennung", tech4p2: "Personalisierte Einstellungen pro Benutzer", tech4p3: "Institutionelle Zugriffskontrolle",
      tech5sub: "Architecturale integratie", tech5Title1: "Een systeem ontworpen", tech5Title2: "om te verdwijnen", tech5Desc: "De ablute_ integreert in de muur of vloer zoals elk hoogwaardig wandtoilet. Het vereist geen tussenkomst van de gebruiker - het werkt volledig autonoom, stil en onzichtbaar.", tech5p1: "Standaard installatie in elke badkamer", tech5p2: "Geen knoppen, geen handmatige bediening", tech5p3: "Geïntegreerde wifi- en Bluetooth-connectiviteit", tech5p4: "Compatibel met domoticasystemen",
      tech6Title: "Ontwerp dat het toilet opnieuw uitvindt", tech6Desc: "De ablute_ combineert geavanceerde techniek met architectonische integratie, waardoor discrete installaties of installaties met een opvallende esthetische uitstraling mogelijk zijn.", tech6tag1: "Architectonische integratie — ontwerper", tech6tag2: "Installatie in een premium omgeving", tech6tag3: "Omgevingen met hoge esthetische eisen", tech6tag4: "Luxe woonsuite",
      tech7sub: "Product", tech7Title: "Geïntegreerd in de architectuur", tech7Desc: "De ablute_ is ontworpen om naadloos te integreren in woon- en institutionele omgevingen, zonder concessies te doen aan esthetiek of functionaliteit.",
      tech8sub: "Product in echte context", tech8Title: "Van concept tot realiteit", tech8Desc: "Echte opname van het systeem in werking in echte omgevingen.", tech8tag: "Product in werking — daadwerkelijke gegevensverzameling",
      sheetTitle: "Technische Spezifikation", sheetDesc: "Das technische Spezifikationsdokument von ablute_ umfasst Systemarchitektur, Komponentenspezifikationen, Installationsanforderungen und Leistungsbenchmarks.", sheetDrawing: "Technische Zeichnung",
      specInstall: "Installation",
      specDim: "Abmessungen", specVolt: "Betriebsspannung", specWater: "Wasseranschluss", specDrain: "Ablaufanschluss", specSensor: "Sensormodule", specWifi: "Drahtlos", specWeight: "Gewicht", specIp: "Schutzklasse",
      specInstallDet: "Wand / Vloer — meerdere configuraties",
      specDimDet: "47 × 29,5 × 41–51 cm (B × D × H) · Open: 80–90 cm", specVoltDet: "12V DC — 220–240 V, 50/60 Hz, 200 W max.", specWaterDet: "1–10 bar · Ref.: 15 cm hoogte / 17 cm vanaf afvoer", specDrainDet: "Wand 18–20 cm · Vloer tot 12 cm", specSensorDet: "Optisch + beweging — contactloos", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "Technische Spezifikation herunterladen (PDF)", sheetVersion: "Dokumentversion 0.7 — Vorkommerziell. Änderungen vorbehalten.",
      installGuideTitle: "Installationsanleitung", installGuideDesc: "Wesentliche Informationen zur Vorbereitung der ablute_-Geräteinstallation.",
      installStep1Title: "Installationskompatibilität", installStep1Desc: "ablute_ kann in verschiedenen Badezimmerkonfigurationen installiert werden und passt sich verschiedenen Abwasser- und Wasserversorgungsanordnungen an.",
      installStep2Title: "Raumvorbereitung", installStep2Desc: "Ausreichend Platz für die Installation und den Betrieb des Geräts sicherstellen, einschließlich der vollständigen Öffnung des Beckenmechanismus.",
      installStep3Title: "Wasseranschluss", installStep3Desc: "Das Vorhandensein eines Wasserversorgungspunkts innerhalb der empfohlenen Druckparameter bestätigen (1–10 bar).",
      installStep4Title: "Ablaufanschluss", installStep4Desc: "Prüfen, ob der Ablauf mit einem Wand- oder Bodenanschluss kompatibel ist und die empfohlenen Abstände einhält.",
      installStep5Title: "Stromversorgung", installStep5Desc: "Die Stromversorgung erfolgt über einen 12V-Niederspannungstransformator, der an das 220–240 V Stromnetz angeschlossen ist.",
      installGuideDownload: "Installationsanleitung herunterladen (PDF)", sheetLangNote: "Verfügbar auf Englisch. Für andere Sprachen kontaktieren Sie uns unter",
      safetyTitle: "Sicherheitsdesign", safetyDesc: "ablute_ wurde von Grund auf mit Sicherheit als zentraler Anforderung entwickelt. Die Systemarchitektur priorisiert den Benutzerschutz in elektrischer, mechanischer, biologischer und Compliance-Hinsicht.",
      safe1Title: "Elektrische Sicherheit", safe1Desc: "Das gesamte Aktivsystem arbeitet mit 12V DC Niederspannung und eliminiert das Risiko eines Stromschlags in feuchter Umgebung. Alle Leiterplatten sind nach IEC 60529 beschichtet und vergossen.", safe1p1: "12V DC Niederspannungssystem", safe1p2: "IP67-zertifizierte Gehäuse", safe1p3: "Konform beschichtete Elektronik",
      safe2Title: "Mechanische Sicherheit", safe2Desc: "Die Hinderniserkennung verhindert das Schließen der Schüssel, wenn ein Objekt oder Körperteil erkannt wird. Kraftbegrenzte Aktuatoren stoppen sofort bei Widerstand und erfüllen EN 563.", safe2p1: "Hinderniserkennung am Deckel", safe2p2: "Kraftbegrenzte Aktuatoren", safe2p3: "EN 563-konforme Oberflächen",
      safe3Title: "Benutzerschutz", safe3Desc: "Alle Materialien, die mit Wasser oder dem Benutzer in Berührung kommen, sind zertifizierte Lebensmittel- oder Medizinqualitätspolymere. Antimikrobielle Beschichtungen auf allen benetzten Oberflächen. Keine scharfen Kanten.", safe3p1: "Lebensmittel-/Medizinqualitätsmaterialien", safe3p2: "Antimikrobielle Oberflächenbeschichtungen", safe3p3: "Keine Klemmstellen im Design",
      safe4Title: "Technische Konformität", safe4Desc: "Unter Berücksichtigung des CE-Kennzeichnungswegs entwickelt. Dokumentationspaket folgt EN 61000 EMV-Anforderungen und EU-Ökodesign-Verordnung. Vor-Einreichungs-Review für 2025 geplant.", safe4p1: "CE-Weg-Dokumentation", safe4p2: "EN 61000 EMV-Design", safe4p3: "EU-Ökodesign-konform",
      safetyNote: "ablute_ befindet sich derzeit in der vorkommerziellen Entwicklungsphase. Formale Zertifizierungen (CE, ISO) sind für die Pre-Industrial-Model-Phase geplant. Alle Spezifikationen spiegeln die Designabsicht wider.",
      stagesTitle: "Entwicklungszeitplan", stagesDesc: "ablute_ folgt einem strukturierten Technologiereifepfad vom Konzept bis zur kommerziellen Skalierung. Jede Stufe stellt einen validierten Meilenstein mit messbaren Ingenieur-Deliverables dar.", inProgress: "In Bearbeitung",
      stage1: "Konzept- und Problemvalidierung", stage1d: "Klinischer Bedarf durch Gespräche mit Ärzten und Gesundheitseinrichtungen identifiziert, wobei die Grenzen sporadischer Labortests und die Chance der passiven Biomarkerüberwachung bestätigt wurden.",
      stage2: "Ingenieurprototyp", stage2d: "Erster funktionsfähiger ablute_-Prototyp entwickelt, der das intelligente Sanitärsystem, automatisierte Probenhandhabung, Sensormodule und Steuerungssoftware integriert.",
      stage3: "Pilotdemonstration", stage3d: "Realer Piloteinsatz zur Validierung der Hardwarebeständigkeit, automatisierter Reinigungsmechanismen und ultraniedrigem Wasserverbrauch bei intensivem öffentlichem Gebrauch.", stage3e: "Abgeschlossen",
      stage4: "Klinische Validierung", stage4d: "Klinische Pilotprojekte mit Gesundheitspartnern, unterstützt durch unterzeichnete Absichtserklärungen (LOIs), zur Bewertung des diagnostischen Werts häufiger Biomarkeranalysen im Vergleich zu herkömmlichen episodischen Labortests.", stage4e: "Schnell vorwärts",
      stage5: "Industrialisierung & Kommerzieller Einsatz", stage5d: "Vorbereitung auf skalierte Fertigung, regulatorische Zertifizierung und erste kommerzielle Einsätze in Gesundheitseinrichtungen.",
      PilotVidTitle: "Pilotdemonstratie", PilotVidtag1: "Logboek pilotdemonstratie", PilotVidtag2: "Fase 3 in uitvoering. Nog geen definitieve commerciële beelden.",
    },
    company: {
      missionTitle: "Unser Ziel",
      missionP1: "ablute_ wurde auf einer einzigen Überzeugung gegründet: Die Infrastruktur des täglichen Lebens kann einen weitaus größeren Zweck erfüllen als derzeit.",
      missionP2: "Wir entwickeln Sanitärsysteme, die Wasserverschwendung eliminieren, ohne Benutzeraufwand funktionieren und passiv die Gesundheitsdaten sammeln, die die Präventivmedizin benötigt — am konsistentesten Berührungspunkt in der menschlichen Routine.",
      missionCeoLabel: "Notiz des CEO von ablute_", missionCeoP1: "Die Gegenwart, die wir aufbauen, ist noch eine primitive Welt, in der alle, die wir lieben, weniger lang leben werden, als wir uns wünschen. Während der Tod Raum und Zeit für unsere Umarmungen stiehlt, wollen wir dazu beitragen, das Leben zu verlängern.", missionCeoP2: "Unsere Mission ist dem Menschen gemein: Es ist genauso wichtig, länger zu leben wie mit Qualität zu leben. ablute_ baut keine Überwachungsplattform — wir engagieren uns mit tiefer Überzeugung, unsere eigene Existenz zu verlängern. Den Ballast des Widrigkeiten erleichtern, ein Netz der Intelligenz fördern, in dem jeder für alle sorgt und jeder für sich selbst.",
      purposeLine1: "Ohne Gewohnheiten zu ändern.", purposeLine2: "Ohne Aufwand zu erfordern.", purposeLine3: "Nur Technologie, die unsichtbar arbeitet, integriert in das tägliche Leben.",
      missionLabel: "Mission", missionText: "Intelligente Geräte zu entwickeln, die fortschrittliche Technologie, Ressourceneffizienz und die Fähigkeit zur Erfassung gesundheitsrelevanter Daten integrieren und den Tagesablauf in eine kontinuierliche Quelle nützlicher Informationen für die Präventivmedizin verwandeln.",
      valuesLabel: "Werte",
      val1Title: "Ingenieurwesen mit Zweck", val1Desc: "Wir entwickeln Technologie, die echte Probleme löst und wissenschaftliche Strenge, fortschrittliches Engineering und funktionales Design kombiniert.",
      val2Title: "Ressourceneffizienz", val2Desc: "Wir glauben, dass technologische Innovation dazu beitragen sollte, Verschwendung zu reduzieren und natürliche Ressourcen verantwortungsvoller zu nutzen.",
      val3Title: "Unsichtbare Technologie", val3Desc: "Wir schaffen Systeme, die autonom und diskret arbeiten und in den Alltag der Menschen integriert sind, ohne Verhaltensänderungen zu erfordern.",
      val4Title: "Angewandte Wissenschaft", val4Desc: "Wir schätzen Forschung, wissenschaftliche Validierung und Zusammenarbeit mit akademischen und technologischen Institutionen.",
      val5Title: "Positive Wirkung", val5Desc: "Wir streben danach, Lösungen zu entwickeln, die gleichzeitig die Gesundheit der Menschen und die Nachhaltigkeit des Planeten verbessern.",
      quote: "\"Das Badezimmer ist der einzige Raum, der von jedem Menschen mehrmals täglich sein ganzes Leben lang aufgesucht wird. Es ist das am meisten untergenutzte Gesundheitsgut, das es gibt.\"",
      quoteAttr: "ablute_ Gründungsthese, 2021",
      foundersLabel: "Gründer und Führung", foundersIntro: "Die ablute_-Plattform wird von einem multidisziplinären Team entwickelt, das Ingenieurwesen, Medizinwissenschaften und technologische Innovation vereint.",
      bio1: "Verantwortlich für die Unternehmensstrategie, Partnerschaften und Geschäftsentwicklung und leitet das Wachstum sowie die globale Positionierung der ablute_-Plattform.",
      bio2: "Leitet die technische Architektur der ablute_-Plattform, einschließlich Systemdesign, Softwareentwicklung und Integration von Sensortechnologien. Preisträgerin des EU Woman in Tech Award.",
      bio3: "Ärztin verantwortlich für die klinische Vision der ablute_-Plattform und verbindet Biomarker-Monitoring mit präventiver und personalisierter Gesundheitsversorgung.",
      bio4: "Forscherin spezialisiert auf Nanotechnologie und Biosensoren für die In-vitro-Diagnostik, verantwortlich für die wissenschaftliche Leitung der ablute_-Sensortechnologien.",
      bio5: "Koordiniert Forschungs- und Entwicklungsaktivitäten und trägt zum wissenschaftlichen und technologischen Fortschritt der ablute_-Plattform bei.",
      bio6: "Forscherin, die an Biosensing-Technologien und Biomarker-Nachweissystemen im Zusammenhang mit der ablute_-Plattform arbeitet.",
      bio7: "Trägt zur Forschung in Biotechnologie und Biomarkern bei, die die Entwicklung des ablute_-Biosensing-Systems unterstützt.",
      bio8: "Verantwortlich für die Entwicklung elektronischer Systeme und die Hardware-Integration innerhalb der ablute_-Plattform.",
      rdLabel: "Forschung und Entwicklung", rdIntro: "Das F&E-Team unterstützt die Entwicklung der ablute_-Plattform durch wissenschaftliche Forschung, Ingenieurwesen und Biotechnologie.",
      investorsLabel: "Investoren", investorsDesc: "ablute_ wird vom institutionellen Investor Portugal Ventures unterstützt — der das Wachstum des Unternehmens, die Technologieentwicklung und den langfristigen Marktanspruch fördert.", investorRole: "Investor", officialWebsite: "Offizielle Website",
      advisorsLabel: "Berater", advisorsDesc: "ablute_ baut einen Beirat aus Experten aus den Bereichen Gesundheit, Technologie und Wirtschaft auf.", advisorPlaceholder: "Demnächst bekannt gegeben",
      certsTitle: "Institutionelle Anerkennung", certsDesc: "ablute_ nimmt an einem Netzwerk von Innovationsprogrammen, Inkubatoren und öffentlichen Förderinstrumenten teil, die unseren Entwicklungsweg validieren und beschleunigen.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Ausgewählt für das nationale Startup-Förderprogramm, mit Zugang zu Finanzierungsinstrumenten und institutionellem Netzwerk.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Antrag beim European Innovation Council Accelerator eingereicht, ausgerichtet auf Deep-Tech-Hardware-Ventures.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Vergabe eines F&E-Kooperationsgutscheins für die Zusammenarbeit mit einem nationalen Polytechnikum zur Sensorentwicklung.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Ansässiges Unternehmen am Instituto Pedro Nunes, Portugals führendem Technologieinkubator und -akzelerator.",
      infraEyebrow: "Wissenschaftliche und Technologische Infrastruktur", infraHeadP1: "Die Entwicklung der ablute_-Plattform findet in einem kollaborativen wissenschaftlich-technologischen Ökosystem statt, das Zugang zu fortschrittlicher Forschungsinfrastruktur bietet.", infraHeadP2: "Durch Partnerschaften mit Forschungsinstituten, Laboratorien und Innovationsorganisationen operiert ablute_ in einem Umfeld, in dem spezialisierte Geräte, Laboreinrichtungen und Computerressourcen zur Unterstützung der Entwicklung, des Tests und der Validierung neuer Technologien verfügbar sind.", infraHeadP3: "Dieses verteilte Infrastrukturmodell ermöglicht es dem Unternehmen, unternehmerische Agilität mit den Fähigkeiten etablierter wissenschaftlicher Institutionen zu verbinden.",
      infra1Title: "Labore und Wissenschaftliche Infrastruktur", infra1Intro: "Die Entwicklung des ablute_-Systems profitiert vom Zugang zu spezialisierten Laborumgebungen durch die Zusammenarbeit mit Forschungseinrichtungen und Technologiezentren.", infra1Body: "Diese Umgebungen bieten wesentliche Fähigkeiten für die Entwicklung und Validierung fortschrittlicher Sensortechnologien, darunter:", infra1B1: "Labore für die Entwicklung von Biosensoren", infra1B2: "Forschungseinrichtungen für Mikroelektronik und Halbleiter", infra1B3: "Reinraumumgebungen für Mikrofabrikation und Nanotechnologie", infra1B4: "Biochemische und bioanalytische Laboratorien", infra1Footer: "Eine solche Infrastruktur ermöglicht die experimentelle Validierung von Sensortechnologien, die Entwicklung elektronischer Architekturen und das Testen integrierter biomedizinischer Systeme.",
      infra2Title: "Mikroelektronik- und Sensorinfrastruktur", infra2Intro: "Die in die ablute_-Plattform integrierten Sensortechnologien erfordern spezialisierte Entwicklungs- und Testumgebungen.", infra2Body: "Durch Kooperationen mit Technologieinstituten und Halbleiterforschungszentren kann das Projekt auf Einrichtungen zugreifen, die für Folgendes gewidmet sind:", infra2B1: "Herstellung von Halbleiterbauelementen", infra2B2: "Sensorcharakterisierung", infra2B3: "Mikroelektronisches Prototyping", infra2B4: "Validierung der Signalerfassung und -verarbeitung", infra2Footer: "Diese Einrichtungen ermöglichen die Entwicklung und Bewertung von Biosensortechnologien wie feldeffekttransistorbasierte Sensoren und andere fortschrittliche Sensorarchitekturen.",
      infra3Title: "Computerinfrastruktur", infra3Intro: "Datenanalyse und die Entwicklung künstlicher Intelligenz erfordern Zugang zu Computerressourcen, die in der Lage sind, große Mengen physiologischer Daten zu verarbeiten.", infra3Body: "Durch nationale und europäische Innovationsprogramme und Forschungskooperationen kann ablute_ auf fortschrittliche Computing-Infrastruktur zugreifen, die Folgendes unterstützt:", infra3B1: "Entwicklung von maschinellem Lernen", infra3B2: "Großmaßstäbliche Datenanalyse", infra3B3: "Simulation und Modellierung", infra3B4: "Biomedizinische Signalverarbeitung", infra3Footer: "Diese Computerkapazität unterstützt die Entwicklung der Dateninterpretations-Engine der Plattform und die kontinuierliche Verbesserung KI-gestützter Gesundheitserkenntnisse.",
      infra4Title: "Innovationsökosystem", infra4Intro: "Über die physische Infrastruktur hinaus operiert ablute_ in einem breiteren Innovationsökosystem aus Forschungseinrichtungen, Technologiezentren, Startups und Gesundheitsorganisationen.", infra4Body: "Dieses Netzwerk bietet Zugang zu:", infra4B1: "Wissenschaftlicher Expertise", infra4B2: "Multidisziplinärer Zusammenarbeit", infra4B3: "Validierungsumgebungen", infra4B4: "Technologietransferkanälen", infra4B5: "Spezialisierten Einrichtungen", infra4Footer: "Die Tätigkeit in diesem Ökosystem ermöglicht es ablute_, technologische Forschung, Ingenieurentwicklung und klinische Relevanz bei der Schaffung von Gesundheitstechnologien der nächsten Generation zu verbinden.",
      infra5Title: "Forschungs- und Innovationsprogramme", infra5Intro: "Die Teilnahme an nationalen und europäischen Forschungsinitiativen ermöglicht den Zugang zu Infrastruktur, kollaborativen Forschungsumgebungen und spezialisierter Expertise.", infra5Body: "Diese Programme erleichtern:", infra5B1: "Zusammenarbeit mit führenden Forschungsorganisationen", infra5B2: "Zugang zu fortschrittlicher Labor- und Computerinfrastruktur", infra5B3: "Multidisziplinäre Entwicklung neuer Technologien", infra5B4: "Umsetzung wissenschaftlicher Forschung in praktische Anwendungen", infra5Footer: "Solche Rahmenbedingungen sind ein wichtiger Bestandteil bei der Unterstützung der Entwicklung und Validierung innovativer Gesundheitstechnologien.",
    },
    projects: {
      consortTitle: "Projekte", consortDesc: "ablute_ entwickelt sich durch eine Kombination aus kollaborativen Projekten und fördermittelgestützten Initiativen weiter, die sich auf Gesundheit, Nachhaltigkeit und fortschrittliche Sanitärtechnik konzentrieren. Diese Aktivitäten unterstützen Technologieentwicklung, Validierung, Zertifizierungsvorbereitung und den realen Einsatz.", roleLabel: "Rolle von ablute_", consortLabel: "Konsortialsprojekte", grantsLabel: "Fördermittel",
      proj1Desc: "Projekt zur Unterstützung der Vorbereitung und Einreichung von Bewerbungen für europäische Programme, Stärkung der Internationalisierungskapazität und Erhöhung der Beteiligung und Erfolgsquote bei europäischen Projekten.", proj1Role: "Stärkung der internen Kapazität von ablute_ für die Vorbereitung und Einreichung europäischer F&E- und Innovationsbewerbungen.",
      proj2Desc: "Mobilisierungsagenda zur Entwicklung fortschrittlicher Lösungen für den Gesundheitssektor auf Basis von Innovation und Technologie.", proj2Role: "Entwicklung eines in die Toilette eingebetteten Uringeräts zur kontinuierlichen Biomarkerüberwachung in einer umfassenden und naturalistischen Umgebung.",
      proj3Desc: "Projekt zur Demonstration der Betriebsfähigkeit der ablute_-Ausrüstung in realer Umgebung mit reduziertem Wasserverbrauch und zur Einleitung der Zertifizierungsprozesse.", proj3Role: "Demonstration der Betriebsfähigkeit der ablute_-Ausrüstung in realem Kontext und Einleitung der Zertifizierungsprozesse.",
      proj4Desc: "Kollaboratives Forschungsprojekt mit Fokus auf fortschrittliche Sensortechnologien und digitale Gesundheitsüberwachung.", proj4Role: "Technologieentwicklung und -integration.",
      partnersTitle: "Partnernetzwerk", partnersDesc: "Unser Partnernetzwerk umfasst Forschungsinstitute, Universitäten, öffentliche Versorgungsunternehmen und Technologiezentren in Portugal und Europa.",
      affiliationsTitle: "Ökosystem-Beteiligung", affiliationsDesc: "ablute_ ist in institutionellen Ökosystemen und Innovationsnetzwerken verankert, die die Glaubwürdigkeit des Unternehmens stärken, den Zugang zu strategischen Kooperationen erweitern und die Anbindung an den europäischen digitalen Gesundheitsmarkt beschleunigen.",
      aff1Desc: "Nationaler Gesundheitstechnologie-Cluster, der Medtech-Unternehmen, Krankenhäuser und Forschungseinrichtungen verbindet.",
      aff2Desc: "Europäische Plattform für Wasserinnovation, Forschung und Politik. Mitglied des Water-Oriented Living Labs-Netzwerks.",
      aff3Desc: "Nationales Startup-Ökosystem-Programm. Anerkannt als Deep-Tech-Hardware-Unternehmen mit internationalem Potenzial.",
      aff4Desc: "Gemeinschaft von Biotech- und Gesundheitstechnologie-Startups, die gemeinsam im IPN-Inkubator, Coimbra, ansässig sind.",
      aff5Desc: "Unternehmensverband für Innovation, der F&E-intensive Unternehmen mit Industrie und Wissenschaft verbindet.",
      aff6Desc: "Nationaler Gesundheitsdienstleistungsverband. Technische Beratungsbeziehung für Sanitärstandards in Pflegeeinrichtungen.",
    },
    waterImpact: {
      eyebrow: "Wasserauswirkung",
      title: "Gesparte Wassermenge",
      subtitle: "seit Projektbeginn",
      conventional: "Konventionelle Toilette",
      perUse: "pro Nutzung",
      note: "Schätzung basierend auf 20 täglichen Nutzungen einer ablute_ Toilette vs. einer konventionellen (6 L).",
      since: "Seit 2. Jan 2023",
    },
  },

  it: {
    dir: "ltr",
    nav: { product: "Prodotto", company: "Azienda", projects: "Progetti", hideSubnav: "Nascondi sottonavigazione" },
    mode: { bathroom: "Bagno", health: "Salute", label: "mode" },
    cta: { waiting: "Unisciti alla Lista d'Attesa", pilot: "Candidati al Pilota", noPayment: "Nessun pagamento anticipato" },
    hero: {
      eyebrow: "Sanitario Sensitivo, Intelligente e Motorizzato",
      line1: "Un design unico", line2: "ha reinventato il water", line2b: "", line3: "",
      sub1: "nascosto, con un'estetica decisa, o qualcosa nel mezzo", sub2: "", sub3: "",
      feat1: "Lavaggio 100% autonomo", feat2: "Pulizia integrale: tazza e sedile",
      feat3: "Record di risparmio idrico <1L", feat4: "",
    },
    health: {
      badge: "Deep Tech d'Avanguardia Europea",
      h1a: "Analisi Multimodale di Supporto Clinico,", h1b: "affidabile, rapida, pratica ed economica.", h1c: "",
      desc: "il primo water intelligente al mondo che esegue analisi delle urine non invasive, risparmiando",
      brand: "ablute_",
      cta1: "Scopri di più", cta2: "Guarda la Demo",
      statWaterLabel: "Risparmio Idrico", statMonitorLabel: "Monitoraggio", statFlushLabel: "Per Scarico",
      deviceTitle: "Water Intelligente", deviceTap: "Tocca per saperne di più",
      deviceHydration: "Idratazione", deviceHydrationVal: "Ottimale",
      deviceBiomarkers: "Biomarcatori", deviceBiomarkersVal: "Normale", deviceScore: "Punteggio",
      badgeEco: "Ecologico", badgeEcoVal: "100% Sostenibile",
      badgeHealth: "Salute", badgeHealthVal: "Analisi in Tempo Reale",
      tabProduct: "Dispositivo di Analisi", tabScience: "Scienza", tabForWho: "Per Chi",
      productTitle: "Tecnologia ablute_", productDesc: "La piattaforma che trasforma il bagno in un'interfaccia di salute preventiva.",
      tabBiosensing: "Biosensori & Metodi", tabBioFET: "Tecnologia Core — bioFET", tabAI: "Intelligenza Artificiale", tabAreasApplication: "Aree di Applicazione",
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
      heroDescriptor: "Biosensori · Monitoraggio Fisiologico Multimodale · Interpretazione tramite IA",
      heroPara1: "La piattaforma ablute_ integra tecnologie di biosensori, acquisizione di segnali fisiologici e interpretazione supportata dall'IA per trasformare i segnali biologici di routine in informazioni sanitarie strutturate.",
      heroPara2: "Progettato per il monitoraggio passivo e longitudinale, il sistema consente l'osservazione delle tendenze fisiologiche nel tempo e supporta approcci più informati alla salute preventiva.",
      heroCta1: "Aggiornamenti Scientifici Gratuiti", heroCta2: "Voglio Partecipare",
      heroFeat1: "Sistema Completamente Autonomo", heroFeat1Sub: "Flusso di rilevamento autonomo con interazione minima dell'utente",
      heroFeat2Sub: "Elaborazione automatizzata e acquisizione rapida del segnale",
      heroFeat3: "Biosensori ad Alta Precisione", heroFeat3Sub: "Rilevamento affidabile dei segnali fisiologici e biochimici",
      appDesc1: "La piattaforma ablute_ includerà un'applicazione companion progettata per presentare segnali fisiologici e informazioni sui biomarcatori in un formato strutturato e interpretabile.",
      appDesc2: "L'applicazione consentirà a utenti e professionisti sanitari di visualizzare le tendenze, contestualizzare i valori dei biomarcatori e ricevere informazioni strutturate generate dal motore di interpretazione dei dati ablute_.",
      appDesc3: "Poiché l'applicazione è attualmente in fase di sviluppo, gli utenti possono registrarsi per essere avvisati quando sarà disponibile.",
      subResearch: "Ricerca & Pubblicazioni", subBiomarkers: "Biomarcatori & Analisi", subEvidence: "Evidenza Clinica",
      subProviders: "Fornitori Sanitari", subWellness: "Wellness", subInsurers: "Assicuratori", subRD: "R&S",
      satAICategory: "Tecnologia", satAILabel: "Motore AI", satAITitle: "Interpretazione AI",
      satAIDesc: "ablute_ utilizza modelli analitici per interpretare segnali e misurazioni passive, evidenziando cambiamenti, tendenze e modelli rilevanti per il monitoraggio preventivo della salute.",
      satAIBtn: "Esplora / Intelligenza Artificiale",
      satLabCategory: "Biosensori", satLabLabel: "Tecnologia Lab", satLabTitle: "Tecnologia di Livello Laboratoriale",
      satLabDesc: "La piattaforma ablute_ integra tecnologia di rilevamento e elaborazione sviluppata per supportare la raccolta ricorrente, l'analisi passiva e la futura validazione dei biomarcatori.",
      satLabBtn: "Esplora / Biosensori",
      satBioCategory: "Scienza", satBioLabel: "Analisi sui Biomarcatori", satBioTitle: "Analisi sui Biomarcatori",
      satBioDesc: "ablute_ è progettato per trasformare i segnali biologici passivi in informazioni utili, consentendo il monitoraggio delle tendenze fisiologiche e l'identificazione dei cambiamenti rilevanti nel tempo.",
      satBioBtn: "Esplora / Scienza",
      appDownload: "Scarica", appComingSoon: "Prossimamente", appRegister: "Registrati per essere notificato",
      whyTitle: "Perché è Necessario?", why1: "La diagnosi precoce previene costosi episodi acuti", why2: "I dati continui rilevano i cambiamenti tra le visite", why3: "Invecchiamento della popolazione e carico di malattie croniche", why4: "Carenza di medici — necessità di strumenti di efficienza", why5: "Rimborso che si sposta verso cure basate sul valore",
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
      invRoleOtherHealth: "Altro professionista sanitario", invSubject: "Oggetto", invSubjectPlaceholder: "Descrivi l'oggetto",
      contactsOpt1: "Richiesta di informazioni", contactsOpt2: "Partnership", contactsOpt3: "Investitori",
      contactsOpt4: "Supporto tecnico", contactsOpt5: "Stampa",
      contactsSubmit: "Invia messaggio", contactsSent: "Messaggio inviato.", contactsSentDesc: "Il nostro team risponderà a breve.",
      workWithUs: "Offerte di Lavoro", workWithUsTitle: "Offerte di Lavoro",
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
      workWithUsShare: "Condividi questa offerta", workWithUsApplyNow: "Candidarsi immediatamente",
      workWithUsCopyLink: "Copia link", workWithUsCopied: "Copiato!",
      workWithUsNomeCompleto: "Nome completo", workWithUsMorada: "Indirizzo",
      workWithUsTelefone: "Telefono / Cellulare", workWithUsCvLabel: "Curriculum Vitae (PDF / DOC)",
      workWithUsCartaLabel: "Lettera di motivazione (opzionale)", workWithUsNotaLabel: "Nota aggiuntiva",
      workWithUsNotaPlaceholder: "Sensori / saggi · Tecniche di laboratorio indipendenti · Esempio di un problema sperimentale risolto dall'inizio alla fine.",
      workWithUsContract: "Contratto temporaneo", workWithUsBack: "← Indietro", workWithUsShareTitle: "Condividi questa posizione",
      workWithUsSpontDesc: "Non ha trovato la posizione giusta? Inviateci la vostra candidatura e il vostro profilo.",
      workWithUsLinkedinLabel: "LinkedIn o Portfolio (opzionale)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "Impossibile inviare la candidatura. Riprova o invia direttamente a talent@ablute.pt",
      investorsHighlight1: "L'early stage offre il maggior potenziale di valorizzazione",
      investorsHighlight2: "Mercato grande e problema inevitabile",
      investorsHighlight3: "Team solido ed esecuzione qualificata",
      investorsHighlight4: "Trazione e validazione progressive",
      partnersCat1: "Componenti Elettronici",
      partnersCat2: "Servizi di Nanotecnologia",
      partnersCat3: "Prodotti di Nanotecnologia",
      partnersCat4: "IA",
      partnersCat5: "Produzione Industriale",
      partnersCat6: "Metallurgia",
      partnersCat7: "Stampi & Polimeri",
      partnersCat8: "Altro (specificare quale)",
      partnersOutroPlaceholder: "Specifica la tua area di attività",
      partnersSelectError: "Seleziona almeno una categoria",
      partnersEmailLabel: "Email",
    },
    productPage: { tab1: "Tecnologia", tab2: "Scheda Prodotto", tab3: "Sicurezza & Conformità", tab4: "Fasi di Sviluppo" },
    companyPage: { tab1: "Missione & Valori", tab2: "Team", tab3: "Certificazioni", tab4: "Infrastrutture" },
    projectsPage: { tab1: "Progetti finanziati e in consorzio", tab2: "Partner", tab3: "Affiliazioni", tab4: "Ruolo Sociale", tabAwards: "Premi", projectSheetLink: "Vedi la scheda del progetto" },
    product: {
      techTitle: "Come funziona ablute_",
      techDesc: "ablute_ integra la gestione dell'acqua, i sensori intelligenti e l'analisi della salute in un'unica piattaforma. Ogni componente è progettato per operare autonomamente, senza intervento dell'utente, migliorando continuamente grazie ai dati d'utilizzo.",
      tech1Title: "Sistema di Efficienza Idrica", tech1Desc: "Valvole di micro-dosaggio di precisione riducono il consumo d'acqua fino al >90% rispetto ai modelli convenzionali. Una serie di sensori ad anello chiuso monitora la portata in tempo reale, regolando dinamicamente il ciclo di lavaggio.", tech1p1: "Architettura a valvole di micro-dosaggio", tech1p2: "Monitoraggio del flusso in tempo reale", tech1p3: "Fino al **>90%** di riduzione dell'acqua",
      tech2Title: "Rilevamento Intelligente", tech2Desc: "Un array di sensori ottici e chimici non invasivi rileva la presenza, il tipo di utilizzo e i marcatori biologici. I dati vengono elaborati localmente — nulla lascia il dispositivo senza consenso esplicito.", tech2p1: "Rilevamento di presenza ottico", tech2p2: "Rilevamento di biomarcatori chimici", tech2p3: "Elaborazione locale edge",
      tech3Title: "1 Modalità di Lavaggio — Sempre Perfetta", tech3Desc: "Il sistema integra sensori che rilevano se il water è sporco e adattano l'acqua utilizzata per ogni lavaggio. Quando è pulito, interrompe l'uso dell'acqua per evitare sprechi. Queste capacità — lavaggio adattivo e autonomo — rendono questo sanitario il più adatto ai bagni pubblici ad alta frequenza: risparmio idrico e igienizzazione permanente e autonoma.", tech3p1: "Perfetto per bagni ad alta frequenza", tech3p2: "Ideale per abitazioni di lusso", tech3p3: "",
      tech4Title: "Modalità d'Uso", tech4Desc: "Progettato per contesti condivisi e privati. Il riconoscimento del profilo multi-utente consente impostazioni personalizzate per i membri della famiglia o gli utenti istituzionali.", tech4p1: "Riconoscimento profilo multi-utente", tech4p2: "Impostazioni personalizzate per utente", tech4p3: "Controllo accessi istituzionale",
      tech5sub: "Integrazione architettonica", tech5Title1: "Un sistema progettato", tech5Title2: "per scomparire", tech5Desc: "Ablute_ si integra nella parete o nel pavimento come qualsiasi WC sospeso di alta gamma. Non richiede alcun intervento da parte dell'utente: funziona in modo completamente autonomo, silenzioso e invisibile.", tech5p1: "Installazione standard in qualsiasi bagno", tech5p2: "Nessun pulsante, nessuna interazione manuale", tech5p3: "Connettività Wi-Fi e Bluetooth integrata", tech5p4: "Compatibile con i sistemi di domotica",
      tech6Title: "Il design che reinventa il bagno", tech6Desc: "ablute_ unisce ingegneria avanzata e integrazione architettonica, consentendo installazioni discrete o con una presenza estetica sorprendente.", tech6tag1: "Integrazione architettonica — designer", tech6tag2: "Installazione in un ambiente premium", tech6tag3: "Ambienti con elevate esigenze estetiche", tech6tag4: "Suite residenziale di lusso",
      tech7sub: "Prodotto", tech7Title: "Integrato nell'architettura", tech7Desc: "L'ablute_ è stato progettato per integrarsi in ambienti residenziali e istituzionali senza compromettere l'estetica o la funzionalità.",
      tech8sub: "Prodotto in contesto reale", tech8Title: "Dal concetto alla realtà", tech8Desc: "Cattura reale del sistema in funzione in ambienti reali.", tech8tag: "Prodotto in funzione — raccolta dati effettiva",
      sheetTitle: "Specifiche Tecniche", sheetDesc: "Il documento di specifica tecnica ablute_ copre l'architettura del sistema, le specifiche dei componenti, i requisiti di installazione e i benchmark di prestazioni.", sheetDrawing: "Disegno Tecnico",
      specInstall: "Installazione",
      specDim: "Dimensioni", specVolt: "Tensione di Esercizio", specWater: "Collegamento Idrico", specDrain: "Collegamento Scarico", specSensor: "Moduli Sensori", specWifi: "Wireless", specWeight: "Peso", specIp: "Grado di Protezione",
      specInstallDet: "Parete / Pavimento — configurazioni multiple",
      specDimDet: "47 × 29,5 × 41–51 cm (L × P × A) · Aperto: 80–90 cm", specVoltDet: "12 V CC — 220–240 V, 50/60 Hz, 200 W max.", specWaterDet: "1–10 bar · Rif.: 15 cm di altezza / 17 cm dallo scarico", specDrainDet: "Parete 18–20 cm · Pavimento fino a 12 cm", specSensorDet: "Ottico + movimento — senza contatto", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "Scarica Specifiche Tecniche (PDF)", sheetVersion: "Documento versione 0.7 — Pre-commerciale. Soggetto a modifiche.",
      installGuideTitle: "Guida all'Installazione", installGuideDesc: "Informazioni essenziali per la preparazione dell'installazione dell'apparecchiatura ablute_.",
      installStep1Title: "Compatibilità di Installazione", installStep1Desc: "ablute_ può essere installata in diverse configurazioni di bagno, adattandosi a varie disposizioni di scarico e alimentazione idrica.",
      installStep2Title: "Preparazione dello Spazio", installStep2Desc: "Garantire spazio sufficiente per l'installazione e il funzionamento dell'apparecchiatura, inclusa l'apertura completa del meccanismo.",
      installStep3Title: "Collegamento Idrico", installStep3Desc: "Confermare l'esistenza di un punto di alimentazione idrica nei parametri di pressione raccomandati (1–10 bar).",
      installStep4Title: "Collegamento Scarico", installStep4Desc: "Verificare che lo scarico sia compatibile con il collegamento a parete o a pavimento e rispetti le distanze raccomandate.",
      installStep5Title: "Alimentazione Elettrica", installStep5Desc: "L'alimentazione è fornita tramite un trasformatore a bassa tensione 12V collegato alla rete 220–240 V.",
      installGuideDownload: "Scarica la Guida all'Installazione (PDF)", sheetLangNote: "Disponibile in inglese. Per altre lingue, contattaci a",
      safetyTitle: "Progetto di Sicurezza", safetyDesc: "ablute_ è progettata fin dai principi fondamentali con la sicurezza come vincolo centrale. L'architettura del sistema prioritizza la protezione degli utenti nelle dimensioni elettrica, meccanica, biologica e di conformità.",
      safe1Title: "Sicurezza Elettrica", safe1Desc: "L'intero sistema attivo opera a 12V DC a bassa tensione, eliminando il rischio di scosse elettriche in ambienti umidi. Tutti i PCB sono rivestiti e incapsulati secondo lo standard IEC 60529.", safe1p1: "Sistema a bassa tensione 12V DC", safe1p2: "Involucri con grado IP67", safe1p3: "Elettronica con rivestimento conforme",
      safe2Title: "Sicurezza Meccanica", safe2Desc: "Il rilevamento delle ostruzioni impedisce la chiusura del vaso se viene rilevato un oggetto o una parte del corpo. Gli attuatori a forza limitata si fermano immediatamente in caso di resistenza.", safe2p1: "Rilevamento ostruzioni sul coperchio", safe2p2: "Attuatori a forza limitata", safe2p3: "Superfici conformi EN 563",
      safe3Title: "Protezione dell'Utente", safe3Desc: "Tutti i materiali a contatto con l'acqua o l'utente sono polimeri certificati alimentari o medicali. Rivestimenti antimicrobici su tutte le superfici bagnate. Nessun bordo tagliente nel design meccanico.", safe3p1: "Materiali alimentari/medicali", safe3p2: "Rivestimenti antimicrobici", safe3p3: "Design senza punti di pizzico",
      safe4Title: "Conformità Tecnica", safe4Desc: "Progettato con il percorso di marcatura CE in mente. Il pacchetto documentale segue i requisiti EMC EN 61000 e il Regolamento Ecodesign UE. Revisione pre-presentazione prevista per il 2025.", safe4p1: "Documentazione percorso CE", safe4p2: "Design EMC EN 61000", safe4p3: "Conforme all'Ecodesign UE",
      safetyNote: "ablute_ si trova attualmente nella fase di sviluppo pre-commerciale. Le certificazioni formali (CE, ISO) sono previste per la fase Pre-Industrial Model. Tutte le specifiche riflettono l'intento progettuale.",
      stagesTitle: "Calendario di Sviluppo", stagesDesc: "ablute_ segue un percorso strutturato di maturità tecnologica dal concetto alla scala commerciale. Ogni fase rappresenta una pietra miliare validata con deliverable ingegneristici misurabili.", inProgress: "In Corso",
      stage1: "Validazione del Concetto e del Problema", stage1d: "Necessità clinica identificata attraverso discussioni con medici e istituzioni sanitarie, confermando i limiti dei test di laboratorio episodici e l'opportunità del monitoraggio passivo dei biomarcatori.",
      stage2: "Prototipo Ingegneristico", stage2d: "Primo prototipo funzionale ablute_ sviluppato, integrando il sistema sanitario intelligente, la gestione automatizzata dei campioni, i moduli di rilevamento e il software di controllo.",
      stage3: "Dimostrazione Pilota", stage3d: "Distribuzione pilota nel mondo reale che valida la durata dell'hardware, i meccanismi di pulizia automatizzati e il consumo ultra-ridotto di acqua in uso pubblico intensivo.", stage3e: "Completato",
      stage4: "Validazione Clinica", stage4d: "Piloti clinici con partner sanitari, supportati da Lettere di Intento firmate (LOIs), che valutano il valore diagnostico dell'analisi frequente dei biomarcatori rispetto ai test di laboratorio episodici tradizionali.", stage4e: "In rapido avanzamento",
      stage5: "Industrializzazione & Distribuzione Commerciale", stage5d: "Preparazione per la produzione su scala, la certificazione normativa e i primi dispiegamenti commerciali nelle istituzioni sanitarie.",
      PilotVidTitle: "Dimostrazione pilota", PilotVidtag1: "Registro della dimostrazione pilota", PilotVidtag2: "Fase 3 in corso. Filmati commerciali non definitivi.",
    },
    company: {
      missionTitle: "Il Nostro Scopo",
      missionP1: "ablute_ è stata fondata su un'unica convinzione: l'infrastruttura della vita quotidiana può avere uno scopo molto più grande di quello attuale.",
      missionP2: "Progettiamo sistemi igienico-sanitari che eliminano gli sprechi d'acqua, funzionano senza alcuno sforzo da parte dell'utente e raccolgono passivamente i dati sanitari di cui la medicina preventiva ha bisogno — nel punto di contatto più costante della routine umana.",
      missionCeoLabel: "Nota del CEO di ablute_", missionCeoP1: "Il presente che stiamo costruendo è ancora un mondo primitivo, dove tutti quelli che amiamo vivranno meno di quanto vorremmo. Mentre la morte ruba spazio e tempo per abbracciarci, vogliamo contribuire a prolungare la vita.", missionCeoP2: "La nostra missione è comune all'Essere Umano: è tanto importante vivere più a lungo quanto vivere con qualità. ablute_ non costruisce una piattaforma di monitoraggio — partecipiamo con profondo impegno per prolungare la nostra stessa esistenza. Alleviando il peso delle vicissitudini, stimolando una rete di intelligenza in cui tutti si prendono cura di tutti e ciascuno di sé.",
      purposeLine1: "Senza cambiare le abitudini.", purposeLine2: "Senza richiedere sforzo.", purposeLine3: "Solo tecnologia che lavora in modo invisibile, integrata nella vita quotidiana.",
      missionLabel: "Missione", missionText: "Sviluppare apparecchiature intelligenti che integrino tecnologia avanzata, efficienza delle risorse e la capacità di raccogliere dati rilevanti per la salute, trasformando la routine quotidiana in una fonte continua di informazioni utili per la medicina preventiva.",
      valuesLabel: "Valori",
      val1Title: "Ingegneria con uno scopo", val1Desc: "Sviluppiamo tecnologia che risolve problemi reali, combinando rigore scientifico, ingegneria avanzata e design funzionale.",
      val2Title: "Efficienza delle risorse", val2Desc: "Crediamo che l'innovazione tecnologica debba contribuire a ridurre gli sprechi e a utilizzare le risorse naturali in modo più responsabile.",
      val3Title: "Tecnologia invisibile", val3Desc: "Creiamo sistemi che funzionano in modo autonomo e discreto, integrati nella routine delle persone senza richiedere cambiamenti di comportamento.",
      val4Title: "Scienza applicata", val4Desc: "Valorizziamo la ricerca, la validazione scientifica e la collaborazione con istituzioni accademiche e tecnologiche.",
      val5Title: "Impatto positivo", val5Desc: "Cerchiamo di sviluppare soluzioni che contribuiscano simultaneamente a migliorare la salute delle persone e la sostenibilità del pianeta.",
      quote: "\"Il bagno è l'unica stanza visitata da ogni persona, più volte al giorno, per tutta la durata della propria vita. È il patrimonio sanitario più sottoutilizzato in assoluto.\"",
      quoteAttr: "Tesi fondativa ablute_, 2021",
      foundersLabel: "Fondatori e Leadership", foundersIntro: "La piattaforma ablute_ è sviluppata da un team multidisciplinare che combina ingegneria, scienze mediche e innovazione tecnologica.",
      bio1: "Responsabile della strategia aziendale, delle partnership e dello sviluppo commerciale, guidando la crescita e il posizionamento globale della piattaforma ablute_.",
      bio2: "Guida l’architettura tecnica della piattaforma ablute_, inclusi progettazione del sistema, sviluppo software e integrazione delle tecnologie di rilevamento. Vincitrice dell’EU Woman in Tech Award.",
      bio3: "Medico responsabile della visione clinica della piattaforma ablute_, collegando il monitoraggio dei biomarcatori alla medicina preventiva e personalizzata.",
      bio4: "Ricercatrice specializzata in nanotecnologia e biosensori per la diagnostica in vitro, responsabile della direzione scientifica delle tecnologie di rilevamento ablute_.",
      bio5: "Coordina le attività di ricerca e sviluppo e contribuisce al progresso scientifico e tecnologico della piattaforma ablute_.",
      bio6: "Ricercatrice che lavora su tecnologie di biosensing e sistemi di rilevamento dei biomarcatori associati alla piattaforma ablute_.",
      bio7: "Contribuisce alla ricerca in biotecnologia e biomarcatori a supporto dello sviluppo del sistema di biosensing ablute_.",
      bio8: "Responsabile dello sviluppo dei sistemi elettronici e dell’integrazione hardware all’interno della piattaforma ablute_.",
      rdLabel: "Ricerca e Sviluppo", rdIntro: "Il team R&D supporta lo sviluppo della piattaforma ablute_ attraverso la ricerca scientifica, l'ingegneria e la biotecnologia.",
      investorsLabel: "Investitori", investorsDesc: "ablute_ è sostenuta dall'investitore istituzionale Portugal Ventures — che supporta la crescita dell'azienda, lo sviluppo tecnologico e l'ambizione a lungo termine nel mercato.", investorRole: "Investitore", officialWebsite: "Sito ufficiale",
      advisorsLabel: "Consulenti", advisorsDesc: "ablute_ sta costruendo un consiglio consultivo di esperti in salute, tecnologia e business.", advisorPlaceholder: "Da annunciare a breve",
      certsTitle: "Riconoscimento Istituzionale", certsDesc: "ablute_ partecipa a una rete di programmi di innovazione, incubatori e strumenti di finanziamento pubblico che validano e accelerano il nostro percorso di sviluppo.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "Selezionata per il programma nazionale di supporto alle startup, con accesso a strumenti di finanziamento e rete istituzionale.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "Candidatura presentata all'Acceleratore del Consiglio Europeo per l'Innovazione, con focus su hardware deep tech.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "Assegnato un voucher di collaborazione R&D per partnership con un istituto politecnico nazionale sullo sviluppo di sensori.",
      cert4Title: "IPN Incubator Member", cert4Desc: "Azienda residente all'Instituto Pedro Nunes, il principale incubatore e acceleratore tecnologico del Portogallo.",
      infraEyebrow: "Infrastruttura Scientifica e Tecnologica", infraHeadP1: "Lo sviluppo della piattaforma ablute_ avviene all'interno di un ecosistema scientifico e tecnologico collaborativo che fornisce accesso a un'infrastruttura di ricerca avanzata.", infraHeadP2: "Attraverso partnership con istituti di ricerca, laboratori e organizzazioni innovative, ablute_ opera in un ambiente in cui attrezzature specializzate, strutture di laboratorio e risorse computazionali sono disponibili per supportare lo sviluppo, il test e la validazione di nuove tecnologie.", infraHeadP3: "Questo modello di infrastruttura distribuita consente all'azienda di combinare agilità imprenditoriale con le capacità di istituzioni scientifiche consolidate.",
      infra1Title: "Laboratori e Infrastruttura Scientifica", infra1Intro: "Lo sviluppo del sistema ablute_ beneficia dell'accesso ad ambienti di laboratorio specializzati attraverso la collaborazione con istituzioni di ricerca e centri tecnologici.", infra1Body: "Questi ambienti forniscono capacità essenziali per lo sviluppo e la validazione di tecnologie di rilevamento avanzate, tra cui:", infra1B1: "Laboratori per lo sviluppo di biosensori", infra1B2: "Strutture di ricerca in microelettronica e semiconduttori", infra1B3: "Ambienti cleanroom per microfabbricazione e nanotecnologia", infra1B4: "Laboratori biochimici e bioanalitici", infra1Footer: "Tale infrastruttura consente la validazione sperimentale delle tecnologie di rilevamento, lo sviluppo di architetture elettroniche e il test di sistemi biomedici integrati.",
      infra2Title: "Infrastruttura di Microelettronica e Sensori", infra2Intro: "Le tecnologie di rilevamento integrate nella piattaforma ablute_ richiedono ambienti di sviluppo e test specializzati.", infra2Body: "Attraverso collaborazioni con istituti tecnologici e centri di ricerca sui semiconduttori, il progetto può accedere a strutture dedicate a:", infra2B1: "Fabbricazione di dispositivi a semiconduttore", infra2B2: "Caratterizzazione dei sensori", infra2B3: "Prototipazione microelettronica", infra2B4: "Validazione dell'acquisizione e del processamento dei segnali", infra2Footer: "Queste strutture consentono lo sviluppo e la valutazione di tecnologie di biosensori come sensori basati su transistor a effetto di campo e altre architetture di rilevamento avanzate.",
      infra3Title: "Infrastruttura Computazionale", infra3Intro: "L'analisi dei dati e lo sviluppo dell'intelligenza artificiale richiedono accesso a risorse computazionali capaci di elaborare grandi volumi di dati fisiologici.", infra3Body: "Attraverso programmi di innovazione nazionali ed europei e collaborazioni di ricerca, ablute_ può accedere a un'infrastruttura di calcolo avanzata che supporta:", infra3B1: "Sviluppo del machine learning", infra3B2: "Analisi dei dati su larga scala", infra3B3: "Simulazione e modellazione", infra3B4: "Elaborazione di segnali biomedici", infra3Footer: "Questa capacità computazionale supporta lo sviluppo del motore di interpretazione dei dati della piattaforma e il miglioramento continuo degli insight di salute assistiti dall'IA.",
      infra4Title: "Ecosistema dell'Innovazione", infra4Intro: "Oltre all'infrastruttura fisica, ablute_ opera all'interno di un ecosistema di innovazione più ampio, composto da istituzioni di ricerca, centri tecnologici, startup e organizzazioni sanitarie.", infra4Body: "Questa rete fornisce accesso a:", infra4B1: "Competenza scientifica", infra4B2: "Collaborazione multidisciplinare", infra4B3: "Ambienti di validazione", infra4B4: "Canali di trasferimento tecnologico", infra4B5: "Strutture specializzate", infra4Footer: "Operare in questo ecosistema consente ad ablute_ di combinare ricerca tecnologica, sviluppo ingegneristico e rilevanza clinica nella creazione di tecnologie sanitarie di nuova generazione.",
      infra5Title: "Programmi di Ricerca e Innovazione", infra5Intro: "La partecipazione ad iniziative di ricerca nazionali ed europee consente l'accesso a infrastrutture, ambienti di ricerca collaborativa e competenze specializzate.", infra5Body: "Questi programmi facilitano:", infra5B1: "Collaborazione con organizzazioni di ricerca di primo piano", infra5B2: "Accesso a infrastrutture di laboratorio e di calcolo avanzate", infra5B3: "Sviluppo multidisciplinare di nuove tecnologie", infra5B4: "Trasposizione della ricerca scientifica in applicazioni pratiche", infra5Footer: "Tali framework costituiscono un componente importante nel supporto allo sviluppo e alla validazione di tecnologie sanitarie innovative.",
    },
    projects: {
      consortTitle: "Progetti", consortDesc: "ablute_ avanza attraverso una combinazione di progetti collaborativi e iniziative supportate da finanziamenti focalizzate sulla salute, la sostenibilità e l'ingegneria sanitaria avanzata. Queste attività supportano lo sviluppo tecnologico, la validazione, la preparazione alla certificazione e il dispiegamento reale.", roleLabel: "Ruolo", consortLabel: "Progetti Consortili", grantsLabel: "Sovvenzioni",
      proj1Desc: "Progetto orientato al supporto alla preparazione e presentazione di candidature a programmi europei, rafforzando la capacità di internazionalizzazione e aumentando la partecipazione e il tasso di successo nei progetti europei.", proj1Role: "Rafforzamento della capacità interna di ablute_ per la preparazione e presentazione di candidature europee di R&S e innovazione.",
      proj2Desc: "Agenda mobilizzatrice orientata allo sviluppo di soluzioni avanzate per il settore sanitario, basate sull'innovazione e la tecnologia.", proj2Role: "Sviluppo di un dispositivo urinario integrato nella toilette per il monitoraggio continuo dei biomarcatori in un ambiente completo e naturalistico.",
      proj3Desc: "Progetto focalizzato sulla dimostrazione, in ambiente reale, dell'operatività dell'apparecchiatura ablute_ con consumo ridotto di acqua e sull'avvio dei processi di certificazione.", proj3Role: "Dimostrazione dell'operatività dell'apparecchiatura ablute_ in contesto reale e avvio dei processi di certificazione.",
      proj4Desc: "Progetto di ricerca collaborativa focalizzato su tecnologie avanzate di rilevamento e monitoraggio digitale della salute.", proj4Role: "Sviluppo e integrazione tecnologica.",
      partnersTitle: "Rete di Partner", partnersDesc: "La nostra rete di partner comprende istituti di ricerca, università, servizi pubblici e centri tecnologici in Portogallo e in Europa.",
      affiliationsTitle: "Partecipazione all'Ecosistema", affiliationsDesc: "ablute_ è integrata in ecosistemi istituzionali e reti di innovazione che rafforzano la credibilità dell'azienda, ampliano l'accesso a collaborazioni strategiche e accelerano il collegamento al mercato europeo della salute digitale.",
      aff1Desc: "Cluster nazionale di tecnologia sanitaria che collega aziende medtech, ospedali e istituzioni di ricerca.",
      aff2Desc: "Piattaforma europea per l'innovazione idrica, la ricerca e le politiche. Membro della rete Water-Oriented Living Labs.",
      aff3Desc: "Programma nazionale dell'ecosistema startup. Riconosciuta come azienda hardware deep tech con potenziale internazionale.",
      aff4Desc: "Comunità di startup biotech e health tech co-localizzate nell'incubatore IPN, Coimbra.",
      aff5Desc: "Associazione imprenditoriale per l'innovazione, che collega aziende ad alta intensità di R&D con industria e accademia.",
      aff6Desc: "Associazione nazionale dei servizi sanitari. Rapporto di consulenza tecnica per gli standard igienico-sanitari nelle strutture di cura.",
    },
    waterImpact: {
      eyebrow: "Impatto idrico",
      title: "Acqua risparmiata",
      subtitle: "dall'inizio del progetto",
      conventional: "Sanitario convenzionale",
      perUse: "per utilizzo",
      note: "Stima basata su 20 utilizzi giornalieri di un sanitario ablute_ vs. uno convenzionale (6 L).",
      since: "Dal 2 gen 2023",
    },
  },

  ar: {
    dir: "rtl",
    nav: { product: "المنتج", company: "الشركة", projects: "المشاريع", hideSubnav: "إخفاء القائمة الفرعية" },
    mode: { bathroom: "الحمام", health: "الصحة", label: "mode" },
    cta: { waiting: "انضم إلى قائمة الانتظار", pilot: "تقدم لبرنامج التجريب", noPayment: "لا دفعة مقدمة" },
    hero: {
      eyebrow: "مرحاض حساس وذكي وآلي",
      line1: "تصميم فريد", line2: "أعاد اختراع المرحاض", line2b: "", line3: "",
      sub1: "مخفيّ، بجمالية جريئة، أو شيء بينهما", sub2: "", sub3: "",
      feat1: "غسيل ذاتي 100%", feat2: "تنظيف شامل: الحوض والمقعد",
      feat3: "قياس توفير المياه <1L", feat4: "",
    },
    health: {
      badge: "تقنية عميقة رائدة أوروبية",
      h1a: "تحليل متعدد الوسائط للدعم السريري،", h1b: "موثوق، سريع، عملي وبأسعار معقولة.", h1c: "",
      desc: "أول مرحاض ذكي في العالم يجري تحليلات بول غير جراحية، مما يوفر",
      brand: "ablute_",
      cta1: "اعرف المزيد", cta2: "شاهد العرض",
      statWaterLabel: "توفير المياه", statMonitorLabel: "المراقبة", statFlushLabel: "لكل دورة",
      deviceTitle: "مرحاض ذكي", deviceTap: "اضغط لمعرفة المزيد",
      deviceHydration: "الترطيب", deviceHydrationVal: "مثالي",
      deviceBiomarkers: "المؤشرات الحيوية", deviceBiomarkersVal: "طبيعي", deviceScore: "النتيجة",
      badgeEco: "صديق للبيئة", badgeEcoVal: "100% مستدام",
      badgeHealth: "الصحة", badgeHealthVal: "تحليل فوري",
      tabProduct: "جهاز التحليل", tabScience: "العلوم", tabForWho: "لمن",
      productTitle: "تقنية ablute_", productDesc: "المنصة التي تحوّل الحمام إلى واجهة للرعاية الصحية الوقائية.",
      tabBiosensing: "المستشعرات الحيوية والطرق", tabBioFET: "التكنولوجيا الأساسية — bioFET", tabAI: "الذكاء الاصطناعي", tabAreasApplication: "مجالات التطبيق",
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
      heroDescriptor: "الاستشعار البيولوجي · المراقبة الفيزيولوجية متعددة النماذج · التفسير بالذكاء الاصطناعي",
      heroPara1: "تدمج منصة ablute_ تقنيات الاستشعار البيولوجي واكتساب الإشارة الفيزيولوجية والتفسير بدعم من الذكاء الاصطناعي لتحويل الإشارات البيولوجية الروتينية إلى رؤى صحية منظّمة.",
      heroPara2: "مصمّم للمراقبة السلبية والطولية، يُتيح النظام مراقبة الاتجاهات الفيزيولوجية بمرور الوقت، ويدعم مناهج أكثر استنارة للصحة الوقائية.",
      heroCta1: "تحديثات علمية مجانية", heroCta2: "أريد المشاركة",
      heroFeat1: "نظام مستقل بالكامل", heroFeat1Sub: "سير عمل استشعار مستقل مع تفاعل أدنى من المستخدم",
      heroFeat2Sub: "معالجة آلية واكتساب سريع للإشارة",
      heroFeat3: "مستشعرات بيولوجية عالية الدقة", heroFeat3Sub: "كشف موثوق للإشارات الفيزيولوجية والكيميائية الحيوية",
      appDesc1: "ستتضمن منصة ablute_ تطبيقاً مرافقاً مصمماً لعرض الإشارات الفيزيولوجية ورؤى المؤشرات الحيوية في تنسيق منظّم وقابل للتفسير.",
      appDesc2: "سيُمكِّن التطبيق المستخدمين والمتخصصين الصحيين من تصور الاتجاهات وتوضيح قيم المؤشرات الحيوية وتلقي رؤى منظّمة يولّدها محرّك تفسير البيانات الخاص بـ ablute_.",
      appDesc3: "نظراً لأن التطبيق قيد التطوير حالياً، يمكن للمستخدمين التسجيل ليتم إخطارهم عند توفّره.",
      subResearch: "البحث والمنشورات", subBiomarkers: "المؤشرات الحيوية والرؤى", subEvidence: "الأدلة السريرية",
      subProviders: "مقدمو الرعاية الصحية", subWellness: "العافية", subInsurers: "شركات التأمين", subRD: "البحث والتطوير",
      satAICategory: "تقنية", satAILabel: "محرك الذكاء الاصطناعي", satAITitle: "التفسير بالذكاء الاصطناعي",
      satAIDesc: "تستخدم ablute_ نماذج تحليلية لتفسير الإشارات والقياسات السلبية، وإبراز التغييرات والاتجاهات والأنماط ذات الصلة لدعم مراقبة الصحة الوقائية.",
      satAIBtn: "استكشف / الذكاء الاصطناعي",
      satLabCategory: "الاستشعار الحيوي", satLabLabel: "تقنية المختبر", satLabTitle: "تقنية مستوى المختبر",
      satLabDesc: "تدمج منصة ablute_ تقنية الكشف والمعالجة المطوّرة لدعم الجمع المتكرر والتحليل السلبي والتحقق المستقبلي من المؤشرات الحيوية.",
      satLabBtn: "استكشف / المستشعرات الحيوية",
      satBioCategory: "علم", satBioLabel: "رؤى المؤشرات الحيوية", satBioTitle: "رؤى المؤشرات الحيوية",
      satBioDesc: "صُمّمت ablute_ لتحويل الإشارات البيولوجية السلبية إلى معلومات مفيدة، مما يتيح تتبع الاتجاهات الفسيولوجية وتحديد التغييرات ذات الصلة بمرور الوقت.",
      satBioBtn: "استكشف / العلوم",
      appDownload: "تحميل", appComingSoon: "قريباً", appRegister: "سجّل للإشعار",
      whyTitle: "لماذا هو ضروري؟", why1: "الكشف المبكر يمنع النوبات الحادة المكلفة", why2: "البيانات المستمرة ترصد التغييرات بين الزيارات", why3: "شيخوخة السكان وعبء الأمراض المزمنة", why4: "نقص الأطباء — الحاجة إلى أدوات الكفاءة", why5: "التحول في التعويض نحو الرعاية القائمة على القيمة",
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
      invRoleOtherHealth: "متخصص صحي آخر", invSubject: "الموضوع", invSubjectPlaceholder: "صف الموضوع",
      contactsOpt1: "طلب معلومات", contactsOpt2: "شراكات", contactsOpt3: "مستثمرون",
      contactsOpt4: "الدعم التقني", contactsOpt5: "الصحافة",
      contactsSubmit: "إرسال الرسالة", contactsSent: "تم إرسال الرسالة.", contactsSentDesc: "سيرد فريقنا قريباً.",
      workWithUs: "فرص العمل", workWithUsTitle: "فرص العمل",
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
      workWithUsShare: "مشاركة هذا المنصب", workWithUsApplyNow: "التقديم فوراً",
      workWithUsCopyLink: "نسخ الرابط", workWithUsCopied: "تم النسخ!",
      workWithUsNomeCompleto: "الاسم الكامل", workWithUsMorada: "العنوان",
      workWithUsTelefone: "الهاتف / الجوال", workWithUsCvLabel: "السيرة الذاتية (PDF / DOC)",
      workWithUsCartaLabel: "خطاب التحفيز (اختياري)", workWithUsNotaLabel: "ملاحظة إضافية",
      workWithUsNotaPlaceholder: "أجهزة الاستشعار / الفحوصات · تقنيات المختبر المستقلة · مثال على مشكلة تجريبية حُلّت من البداية إلى النهاية.",
      workWithUsContract: "عقد مؤقت", workWithUsBack: "← رجوع", workWithUsShareTitle: "مشاركة هذا المنصب",
      workWithUsSpontDesc: "لم تجد وظيفة مناسبة؟ أرسل لنا طلبك وملفك الشخصي.",
      workWithUsLinkedinLabel: "LinkedIn أو المحفظة (اختياري)", workWithUsLinkedinPlaceholderShort: "linkedin.com/in/...",
      workWithUsSubmitError: "تعذر إرسال الطلب. حاول مرة أخرى أو أرسل مباشرة إلى talent@ablute.pt",
      investorsHighlight1: "المرحلة المبكرة تقدم أكبر إمكانية لزيادة القيمة",
      investorsHighlight2: "سوق كبير ومشكلة لا مفر منها",
      investorsHighlight3: "فريق قوي وتنفيذ مؤهل",
      investorsHighlight4: "زخم وتحقق تدريجي",
      partnersCat1: "المكونات الإلكترونية",
      partnersCat2: "خدمات النانو تكنولوجي",
      partnersCat3: "منتجات النانو تكنولوجي",
      partnersCat4: "ذكاء اصطناعي",
      partnersCat5: "الإنتاج الصناعي",
      partnersCat6: "علم المعادن",
      partnersCat7: "قوالب وبوليمرات",
      partnersCat8: "أخرى (حدد أيها)",
      partnersOutroPlaceholder: "حدد مجال نشاطك",
      partnersSelectError: "يرجى اختيار فئة واحدة على الأقل",
      partnersEmailLabel: "البريد الإلكتروني",
    },
    productPage: { tab1: "التقنية", tab2: "صحيفة المنتج", tab3: "السلامة والامتثال", tab4: "مراحل التطوير" },
    companyPage: { tab1: "المهمة والقيم", tab2: "الفريق", tab3: "الشهادات", tab4: "البنية التحتية" },
    projectsPage: { tab1: "المشاريع الممولة والمشتركة", tab2: "الشركاء", tab3: "الانتماءات", tab4: "الدور الاجتماعي", tabAwards: "الجوائز", projectSheetLink: "عرض بطاقة المشروع" },
    product: {
      techTitle: "كيف تعمل ablute_",
      techDesc: "تدمج ablute_ إدارة المياه والاستشعار الذكي وتحليل الصحة في منصة واحدة متكاملة. تم تصميم كل مكون للعمل باستقلالية تامة دون تدخل المستخدم، مع التحسين المستمر بناءً على بيانات الاستخدام.",
      tech1Title: "نظام كفاءة المياه", tech1Desc: "تقلل صمامات الجرعات الدقيقة من استهلاك المياه بنسبة تصل إلى >90٪ مقارنة بالنماذج التقليدية. تراقب مصفوفة المستشعرات في حلقة مغلقة معدل التدفق في الوقت الفعلي وتضبط دورة الغسيل بشكل ديناميكي.", tech1p1: "هندسة صمامات الجرعات الدقيقة", tech1p2: "مراقبة التدفق في الوقت الفعلي", tech1p3: "تخفيض المياه حتى **>90٪**",
      tech2Title: "الكشف الذكي", tech2Desc: "تكشف مجموعة من أجهزة الاستشعار الضوئية والكيميائية غير الجراحية عن الوجود ونوع الاستخدام والمؤشرات البيولوجية. تتم معالجة البيانات محليًا — لا يغادر شيء الجهاز دون موافقة صريحة.", tech2p1: "كشف الحضور الضوئي", tech2p2: "استشعار المؤشرات الكيميائية الحيوية", tech2p3: "المعالجة المحلية على الحافة",
      tech3Title: "وضع غسيل واحد — دائماً مثالي", tech3Desc: "يدمج النظام مستشعرات تكتشف ما إذا كانت المرحاض متسخة وتكيّف الماء المستخدم في كل غسلة. عندما تصبح نظيفة، يوقف استخدام الماء لتجنب الهدر. هذه القدرات — الغسيل التكيفي والمستقل — تجعلها المرحاض الأكثر ملاءمة للحمامات العامة عالية الاستخدام: توفير المياه وضمان النظافة الدائمة والمستقلة.", tech3p1: "مثالية للحمامات عالية التردد", tech3p2: "رائعة للمساكن الفاخرة", tech3p3: "",
      tech4Title: "أوضاع الاستخدام", tech4Desc: "مصمم للسياقات المشتركة والخاصة. يتيح التعرف على ملف تعريف متعدد المستخدمين إعدادات مخصصة لأفراد الأسرة أو المستخدمين المؤسسيين مع التحكم الكامل في الوصول.", tech4p1: "التعرف على ملف تعريف متعدد المستخدمين", tech4p2: "إعدادات مخصصة لكل مستخدم", tech4p3: "التحكم في الوصول المؤسسي",
      tech5sub: "تكامل معماري", tech5Title1: "نظام مصمم", tech5Title2: "ليختفي", tech5Desc: "يندمج نظام ablute_ في الجدار أو الأرضية مثل أي مرحاض معلق فاخر. لا يتطلب أي تدخل من المستخدم - فهو يعمل بشكل مستقل تمامًا، بصمت ودون أن يُرى.", tech5p1: "تركيب قياسي في أي حمام", tech5p2: "لا أزرار، لا تفاعل يدوي", tech5p3: "اتصال واي فاي وبلوتوث مدمج", tech5p4: "متوافق مع أنظمة التشغيل الآلي للمنزل",
      tech6Title: "تصميم يُعيد ابتكار المرحاض", tech6Desc: "يجمع ablute_ بين الهندسة المتقدمة والتكامل المعماري، مما يسمح بتركيبات سرية أو تلك التي تتمتع بحضور جمالي لافت للنظر.", tech6tag1: "التكامل المعماري - المصمم", tech6tag2: "التركيب في بيئة راقية", tech6tag3: "بيئات ذات متطلبات جمالية عالية", tech6tag4: "جناح سكني فاخر.",
      tech7sub: "المنتج", tech7Title: "مدمج في الهندسة المعمارية", tech7Desc: "تم تصميم ablute_ ليتكامل مع البيئات السكنية والمؤسسية دون المساس بالجماليات أو الوظائف.",
      tech8sub: "المنتج في سياق العالم الحقيقي", tech8Title: "من الفكرة إلى الواقع", tech8Desc: "تصوير واقعي للنظام أثناء التشغيل في بيئات العالم الحقيقي.", tech8tag: "المنتج قيد التشغيل - تصوير واقعي.",
      sheetTitle: "المواصفات التقنية", sheetDesc: "تغطي وثيقة المواصفات التقنية لـ ablute_ بنية النظام ومواصفات المكونات ومتطلبات التركيب ومعايير الأداء.", sheetDrawing: "الرسم التقني",
      specInstall: "التركيب",
      specDim: "الأبعاد", specVolt: "جهد التشغيل", specWater: "توصيل المياه", specDrain: "توصيل الصرف", specSensor: "وحدات الاستشعار", specWifi: "لاسلكي", specWeight: "الوزن", specIp: "درجة الحماية",
      specInstallDet: "جدار / أرضية — تكوينات متعددة",
      specDimDet: "47 × 29.5 × 41-51 سم (العرض × العمق × الارتفاع) · عند الفتح: 80-90 سم", specVoltDet: "12 فولت تيار مستمر — 220-240 فولت، 50/60 هرتز، 200 واط كحد أقصى.", specWaterDet: "1-10 بار · المرجع: ارتفاع 15 سم / 17 سم من فتحة التصريف", specDrainDet: "سُمك الجدار: 18-20 سم؛ سُمك الأرضية: حتى 12 سم", specSensorDet: "بصري + حركة — بدون لمس", specIpDet: "IEC 60529 — IPX4",
      sheetDownload: "تنزيل المواصفات التقنية (PDF)", sheetVersion: "إصدار الوثيقة 0.7 — قبل التجاري. عرضة للتغيير.",
      installGuideTitle: "دليل التركيب", installGuideDesc: "معلومات أساسية للتحضير لتركيب جهاز ablute_.",
      installStep1Title: "توافق التركيب", installStep1Desc: "يمكن تركيب ablute_ في تكوينات مختلفة للحمام، متكيفة مع ترتيبات الصرف وإمدادات المياه المختلفة.",
      installStep2Title: "تحضير المساحة", installStep2Desc: "ضمان مساحة كافية لتركيب الجهاز وتشغيله، بما في ذلك الفتح الكامل لآلية الوعاء.",
      installStep3Title: "توصيل المياه", installStep3Desc: "تأكيد وجود نقطة مياه ضمن معاملات الضغط الموصى بها (1–10 bar).",
      installStep4Title: "توصيل الصرف", installStep4Desc: "التحقق من أن الصرف متوافق مع الاتصال بالجدار أو الأرضية ويحترم المسافات الموصى بها.",
      installStep5Title: "الإمداد الكهربائي", installStep5Desc: "يتم توفير الطاقة عبر محول منخفض الجهد 12V متصل بالشبكة الكهربائية 220–240 فولت.",
      installGuideDownload: "تحميل دليل التركيب (PDF)", sheetLangNote: "متاح باللغة الإنجليزية. للغات الأخرى، اتصل بنا على",
      safetyTitle: "تصميم السلامة", safetyDesc: "تم تصميم ablute_ من المبادئ الأساسية مع السلامة كقيد محوري. تعطي بنية النظام الأولوية لحماية المستخدم في الأبعاد الكهربائية والميكانيكية والبيولوجية والامتثالية.",
      safe1Title: "السلامة الكهربائية", safe1Desc: "يعمل النظام النشط بالكامل على جهد منخفض 12V DC مما يزيل خطر الصعقة الكهربائية في البيئات الرطبة. يتم تغليف جميع اللوحات الإلكترونية وفق معيار IEC 60529.", safe1p1: "نظام جهد منخفض 12V DC", safe1p2: "هياكل مصنفة IP67", safe1p3: "إلكترونيات مغلفة بشكل مطابق",
      safe2Title: "السلامة الميكانيكية", safe2Desc: "يمنع الكشف عن العوائق إغلاق الوعاء إذا تم الكشف عن جسم أو جزء من الجسم. تتوقف المحركات المحدودة القوة فورًا عند المقاومة مما يستوفي معيار EN 563.", safe2p1: "الكشف عن العوائق في الغطاء", safe2p2: "محركات محدودة القوة", safe2p3: "أسطح متوافقة مع EN 563",
      safe3Title: "حماية المستخدم", safe3Desc: "جميع المواد التي تتلامس مع الماء أو المستخدم هي بوليمرات معتمدة للاستخدام الغذائي أو الطبي. طلاءات مضادة للميكروبات على جميع الأسطح المبللة. لا حواف حادة في التصميم الميكانيكي.", safe3p1: "مواد صالحة للاستخدام الغذائي/الطبي", safe3p2: "طلاءات سطحية مضادة للميكروبات", safe3p3: "تصميم خالٍ من نقاط القرص",
      safe4Title: "الامتثال التقني", safe4Desc: "مصمم مع وضع مسار وسم CE في الاعتبار. تتبع حزمة التوثيق متطلبات التوافق الكهرومغناطيسي EN 61000 ولائحة التصميم البيئي للاتحاد الأوروبي.", safe4p1: "توثيق مسار CE", safe4p2: "تصميم EMC وفق EN 61000", safe4p3: "متوافق مع التصميم البيئي الأوروبي",
      safetyNote: "تمر ablute_ حاليًا بمرحلة التطوير ما قبل التجارية. الشهادات الرسمية (CE وISO) مقررة لمرحلة النموذج ما قبل الصناعي. جميع المواصفات أعلاه تعكس نية التصميم والأهداف الهندسية.",
      stagesTitle: "الجدول الزمني للتطوير", stagesDesc: "تتبع ablute_ مسار نضج تقني منظم من المفهوم إلى النطاق التجاري. تمثل كل مرحلة معلمًا موثقًا بمخرجات هندسية قابلة للقياس.", inProgress: "قيد التنفيذ",
      stage1: "التحقق من المفهوم والمشكلة", stage1d: "تم تحديد الاحتياج السريري من خلال المناقشات مع الأطباء والمؤسسات الصحية، مما أكد محدودية الاختبارات المختبرية غير المتكررة وفرصة مراقبة المؤشرات الحيوية بشكل سلبي.",
      stage2: "نموذج هندسي أولي", stage2d: "تطوير أول نموذج أولي وظيفي لـ ablute_، يدمج نظام الصرف الصحي الذكي ومعالجة العينات الآلية ووحدات الاستشعار وبرنامج التحكم.",
      stage3: "عرض توضيحي تجريبي", stage3d: "نشر تجريبي في الواقع الفعلي للتحقق من متانة الأجهزة وآليات التنظيف الآلي والاستهلاك المنخفض جداً للمياه في الاستخدام العام المكثف.", stage3e: "مكتمل",
      stage4: "التحقق السريري", stage4d: "تجارب سريرية مع شركاء الرعاية الصحية، مدعومة بخطابات نوايا موقعة (LOIs)، لتقييم القيمة التشخيصية لتحليل المؤشرات الحيوية المتكرر مقارنةً بالاختبارات المختبرية التقليدية غير المنتظمة.", stage4e: "تقدم سريع",
      stage5: "التصنيع والنشر التجاري", stage5d: "التحضير للتصنيع على نطاق واسع والاعتماد التنظيمي وأولى عمليات النشر التجاري في المؤسسات الصحية.",
      PilotVidTitle: "عرض تجريبي", PilotVidtag1: "تسجيل العرض التجريبي", PilotVidtag2: "المرحلة الثالثة قيد التنفيذ. ليس هذا هو الفيديو التجاري النهائي.",
    },
    company: {
      missionTitle: "هدفنا",
      missionP1: "تولد ablute_ من قناعة بسيطة: الأشياء الأكثر حضوراً في الروتين اليومي للإنسان يمكنها فعل ما هو أكثر بكثير من مجرد أداء وظيفتها الأساسية.",
      missionP2: "نطور جيلاً جديداً من الأجهزة التي تجمع بين الهندسة الدقيقة وكفاءة استخدام المياه القصوى وتكنولوجيا الاستشعار المتقدمة لتحويل لحظة يومية إلى فرصة صامتة لمراقبة الصحة والرعاية.",
      missionCeoLabel: "ملاحظة الرئيس التنفيذي لـ ablute_", missionCeoP1: "الحاضر الذي نبنيه لا يزال عالمًا بدائيًا، حيث سيعيش كل من نحبهم أقل مما نتمنى. بينما تسرق الموتُ المساحةَ والوقتَ لأحضاننا، نريد أن نساهم في إطالة الحياة.", missionCeoP2: "مهمتنا مشتركة بين البشر: من المهم بقدر واحد أن نعيش أطول وأن نعيش بجودة. ablute_ لا تبني منصة للمراقبة — نحن نشارك بالتزام عميق لإطالة وجودنا. نخفف عبء الصعاب، ونحفز شبكة من الذكاء حيث يهتم الجميع بالجميع وكل واحد بنفسه.",
      purposeLine1: "دون تغيير العادات.", purposeLine2: "دون الحاجة إلى جهد.", purposeLine3: "فقط تكنولوجيا تعمل بشكل غير مرئي، متكاملة في الحياة اليومية.",
      missionLabel: "المهمة", missionText: "تطوير أجهزة ذكية تدمج التكنولوجيا المتقدمة وكفاءة استخدام الموارد والقدرة على جمع البيانات ذات الصلة بالصحة، وتحويل الروتين اليومي إلى مصدر مستمر لمعلومات مفيدة للطب الوقائي.",
      valuesLabel: "قيمنا",
      val1Title: "هندسة هادفة", val1Desc: "نطور تكنولوجيا تحل مشاكل حقيقية، بدمج الدقة العلمية والهندسة المتقدمة والتصميم الوظيفي.",
      val2Title: "كفاءة الموارد", val2Desc: "نؤمن بأن الابتكار التكنولوجي يجب أن يساهم في تقليل الهدر واستخدام الموارد الطبيعية بطريقة أكثر مسؤولية.",
      val3Title: "تكنولوجيا غير مرئية", val3Desc: "نبتكر أنظمة تعمل بشكل مستقل وتقديري، مدمجة في روتين الناس دون أن تتطلب تغييرات في السلوك.",
      val4Title: "علم تطبيقي", val4Desc: "نقدر البحث والتحقق العلمي والتعاون مع المؤسسات الأكاديمية والتكنولوجية.",
      val5Title: "تأثير إيجابي", val5Desc: "نسعى لتطوير حلول تساهم في تحسين صحة الناس واستدامة الكوكب في آن واحد.",
      quote: "«الحمام هو الغرفة الوحيدة التي يزورها كل شخص، عدة مرات يوميًا، طوال حياته. إنه أكثر الأصول الصحية إهمالًا في الوجود.»",
      quoteAttr: "الأطروحة التأسيسية لـ ablute_، 2021",
      foundersLabel: "المؤسسون والقيادة", foundersIntro: "تم تطوير منصة ablute_ من قبل فريق متعدد التخصصات يجمع بين الهندسة والعلوم الطبية والابتكار التكنولوجي.",
      bio1: "مسؤولة عن استراتيجية الشركة والشراكات وتطوير الأعمال، وتقود نمو المنصة ablute_ وتموضعها على المستوى العالمي.",
      bio2: "تقود البنية التقنية لمنصة ablute_، بما في ذلك تصميم النظام وتطوير البرمجيات ودمج تقنيات الاستشعار. حاصلة على جائزة EU Woman in Tech.",
      bio3: "طبيبة مسؤولة عن الرؤية السريرية لمنصة ablute_، وتربط مراقبة المؤشرات الحيوية بالرعاية الصحية الوقائية والشخصية.",
      bio4: "باحثة متخصصة في تقنيات النانو وأجهزة الاستشعار الحيوية للتشخيص في المختبر، ومسؤولة عن التوجيه العلمي لتقنيات الاستشعار في ablute_.",
      bio5: "تنسق أنشطة البحث والتطوير وتساهم في التقدم العلمي والتكنولوجي لمنصة ablute_.",
      bio6: "باحثة تعمل على تقنيات الاستشعار الحيوي وأنظمة كشف المؤشرات الحيوية المرتبطة بمنصة ablute_.",
      bio7: "تساهم في أبحاث التكنولوجيا الحيوية والمؤشرات الحيوية لدعم تطوير نظام الاستشعار الحيوي ablute_.",
      bio8: "مسؤولة عن تطوير الأنظمة الإلكترونية ودمج العتاد ضمن منصة ablute_.",
      rdLabel: "البحث والتطوير", rdIntro: "يدعم فريق البحث والتطوير تطوير منصة ablute_ من خلال البحث العلمي والهندسة والتكنولوجيا الحيوية.",
      investorsLabel: "المستثمرون", investorsDesc: "تحظى ablute_ بدعم المستثمر المؤسسي Portugal Ventures — الذي يدعم نمو الشركة وتطوير التكنولوجيا وطموحها طويل الأمد في السوق.", investorRole: "مستثمر", officialWebsite: "الموقع الرسمي",
      advisorsLabel: "المستشارون", advisorsDesc: "تقوم ablute_ ببناء مجلس استشاري من الخبراء في مجالات الصحة والتكنولوجيا والأعمال.", advisorPlaceholder: "سيتم الإعلان قريباً",
      certsTitle: "الاعتراف المؤسسي", certsDesc: "تشارك ablute_ في شبكة من برامج الابتكار والحاضنات وأدوات التمويل العام التي تتحقق من مسار تطويرنا وتسرعه.",
      cert1Title: "Startup Portugal Recognition", cert1Desc: "مختارة لبرنامج دعم الشركات الناشئة الوطني، مع الوصول إلى أدوات التمويل والشبكة المؤسسية.",
      cert2Title: "EIC Accelerator Application", cert2Desc: "تقديم طلب إلى مسرع المجلس الأوروبي للابتكار، مستهدفًا مشاريع أجهزة التقنية العميقة.",
      cert3Title: "ANI Innovation Voucher", cert3Desc: "منح قسيمة تعاون في مجال البحث والتطوير للشراكة مع معهد بوليتكني وطني في تطوير أجهزة الاستشعار.",
      cert4Title: "IPN Incubator Member", cert4Desc: "شركة مقيمة في Instituto Pedro Nunes، حاضنة ومسرعة التكنولوجيا الرائدة في البرتغال.",
      infraEyebrow: "البنية التحتية العلمية والتكنولوجية", infraHeadP1: "يتم تطوير منصة ablute_ ضمن نظام بيئي علمي وتكنولوجي تعاوني يوفر الوصول إلى بنية تحتية بحثية متقدمة.", infraHeadP2: "من خلال الشراكات مع معاهد البحث والمختبرات ومنظمات الابتكار، تعمل ablute_ في بيئة تتوفر فيها أجهزة متخصصة ومرافق مختبرية وموارد حاسوبية لدعم تطوير واختبار والتحقق من التقنيات الجديدة.", infraHeadP3: "يتيح نموذج البنية التحتية الموزعة هذا للشركة الجمع بين الرشاقة الريادية وقدرات المؤسسات العلمية الراسخة.",
      infra1Title: "المختبرات والبنية التحتية العلمية", infra1Intro: "يستفيد تطوير نظام ablute_ من الوصول إلى بيئات مختبرية متخصصة من خلال التعاون مع مؤسسات البحث والمراكز التكنولوجية.", infra1Body: "توفر هذه البيئات قدرات أساسية لتطوير والتحقق من تقنيات الاستشعار المتقدمة، بما في ذلك:", infra1B1: "مختبرات تطوير المستشعرات الحيوية", infra1B2: "مرافق بحث الإلكترونيات الدقيقة وأشباه الموصلات", infra1B3: "بيئات الغرف النظيفة للتصنيع الدقيق وتقنية النانو", infra1B4: "مختبرات كيميائية حيوية وتحليلية حيوية", infra1Footer: "تتيح هذه البنية التحتية التحقق التجريبي من تقنيات الاستشعار وتطوير البنى الإلكترونية واختبار الأنظمة الطبية الحيوية المتكاملة.",
      infra2Title: "بنية تحتية للإلكترونيات الدقيقة والمستشعرات", infra2Intro: "تتطلب تقنيات الاستشعار المدمجة في منصة ablute_ بيئات متخصصة للتطوير والاختبار.", infra2Body: "من خلال التعاون مع المعاهد التكنولوجية ومراكز أبحاث أشباه الموصلات، يمكن للمشروع الوصول إلى مرافق مخصصة لـ:", infra2B1: "تصنيع أجهزة أشباه الموصلات", infra2B2: "توصيف المستشعرات", infra2B3: "النمذجة الأولية للإلكترونيات الدقيقة", infra2B4: "التحقق من اكتساب الإشارة ومعالجتها", infra2Footer: "تمكّن هذه المرافق من تطوير وتقييم تقنيات المستشعرات الحيوية مثل المستشعرات القائمة على ترانزستور تأثير المجال وبنى الاستشعار المتقدمة الأخرى.",
      infra3Title: "البنية التحتية الحاسوبية", infra3Intro: "يتطلب تحليل البيانات وتطوير الذكاء الاصطناعي الوصول إلى موارد حاسوبية قادرة على معالجة كميات كبيرة من البيانات الفسيولوجية.", infra3Body: "من خلال برامج الابتكار الوطنية والأوروبية والتعاون البحثي، يمكن لـ ablute_ الوصول إلى بنية تحتية حوسبة متقدمة تدعم:", infra3B1: "تطوير التعلم الآلي", infra3B2: "تحليل البيانات على نطاق واسع", infra3B3: "المحاكاة والنمذجة", infra3B4: "معالجة الإشارات الطبية الحيوية", infra3Footer: "تدعم هذه القدرة الحاسوبية تطوير محرك تفسير بيانات المنصة والتحسين المستمر لرؤى الصحة المدعومة بالذكاء الاصطناعي.",
      infra4Title: "النظام البيئي للابتكار", infra4Intro: "تتجاوز ablute_ البنية التحتية المادية لتعمل ضمن نظام بيئي ابتكاري أوسع يضم مؤسسات بحثية ومراكز تكنولوجية وشركات ناشئة ومنظمات رعاية صحية.", infra4Body: "يوفر هذا الشبكة الوصول إلى:", infra4B1: "الخبرة العلمية", infra4B2: "التعاون متعدد التخصصات", infra4B3: "بيئات التحقق", infra4B4: "قنوات نقل التكنولوجيا", infra4B5: "المرافق المتخصصة", infra4Footer: "يتيح العمل ضمن هذا النظام البيئي لـ ablute_ الجمع بين البحث التكنولوجي والتطوير الهندسي والأهمية السريرية في إنشاء تقنيات صحية من الجيل التالي.",
      infra5Title: "برامج البحث والابتكار", infra5Intro: "تتيح المشاركة في مبادرات البحث الوطنية والأوروبية الوصول إلى البنية التحتية وبيئات البحث التعاوني والخبرات المتخصصة.", infra5Body: "تيسّر هذه البرامج:", infra5B1: "التعاون مع منظمات البحث الرائدة", infra5B2: "الوصول إلى البنية التحتية المتقدمة للمختبرات والحوسبة", infra5B3: "التطوير متعدد التخصصات لتقنيات جديدة", infra5B4: "ترجمة البحث العلمي إلى تطبيقات عملية", infra5Footer: "تُعد هذه الأطر مكوناً مهماً في دعم تطوير والتحقق من تقنيات الصحة المبتكرة.",
    },
    projects: {
      consortTitle: "المشاريع", consortDesc: "تتقدم ablute_ من خلال مزيج من المشاريع التعاونية والمبادرات المدعومة بالمنح، المركزة على الصحة والاستدامة والهندسة الصحية المتقدمة. تدعم هذه الأنشطة تطوير التكنولوجيا والتحقق والاستعداد للشهادات والنشر الفعلي.", roleLabel: "دور ablute_", consortLabel: "مشاريع الكونسورتيوم", grantsLabel: "المنح",
      proj1Desc: "مشروع موجه لدعم إعداد وتقديم طلبات للبرامج الأوروبية، مما يعزز القدرة على التدويل ويزيد من المشاركة ومعدل النجاح في المشاريع الأوروبية.", proj1Role: "تعزيز القدرة الداخلية لـ ablute_ على إعداد وتقديم طلبات أبحاث وتطوير وابتكار أوروبية.",
      proj2Desc: "أجندة تعبئة موجهة نحو تطوير حلول متقدمة لقطاع الصحة، مبنية على الابتكار والتكنولوجيا.", proj2Role: "تطوير جهاز بول مدمج في المرحاض لمراقبة مستمرة للمؤشرات الحيوية في بيئة شاملة وطبيعية.",
      proj3Desc: "مشروع يركز على إثبات، في بيئة حقيقية، قدرة تشغيل معدات ablute_ مع تقليل استهلاك المياه وبدء عمليات التصديق.", proj3Role: "إثبات قدرة تشغيل معدات ablute_ في سياق حقيقي وبدء عمليات التصديق.",
      proj4Desc: "مشروع بحثي تعاوني يركز على تقنيات الاستشعار المتقدمة والمراقبة الصحية الرقمية.", proj4Role: "تطوير التكنولوجيا وتكاملها.",
      partnersTitle: "شبكة الشركاء", partnersDesc: "تمتد شبكة شركائنا لتشمل معاهد البحث والجامعات والمرافق العامة والمراكز التكنولوجية في البرتغال وأوروبا.",
      affiliationsTitle: "المشاركة في النظام البيئي", affiliationsDesc: "تنتمي ablute_ إلى أنظمة بيئية مؤسسية وشبكات ابتكار تعزز مصداقية الشركة، وتوسع الوصول إلى التعاون الاستراتيجي والتمويل، وتسرّع الاندماج في سوق الصحة الرقمية الأوروبية.",
      aff1Desc: "مجموعة تقنية صحية وطنية تربط شركات التكنولوجيا الطبية والمستشفيات ومؤسسات البحث.",
      aff2Desc: "منصة أوروبية لابتكار المياه والبحث والسياسات. عضو في شبكة Water-Oriented Living Labs.",
      aff3Desc: "برنامج النظام البيئي الوطني للشركات الناشئة. معترف بها كشركة أجهزة التقنية العميقة ذات إمكانات دولية.",
      aff4Desc: "مجتمع من الشركات الناشئة في مجال التكنولوجيا الحيوية والصحة المتعايشة في حاضنة IPN، كويمبرا.",
      aff5Desc: "جمعية أعمال للابتكار تربط الشركات كثيفة البحث والتطوير بالصناعة والأكاديمية.",
      aff6Desc: "جمعية خدمات الصحة الوطنية. علاقة استشارية تقنية لمعايير الصرف الصحي في مرافق الرعاية.",
    },
    waterImpact: {
      eyebrow: "الأثر المائي",
      title: "المياه الموفَّرة",
      subtitle: "منذ انطلاق المشروع",
      conventional: "مرحاض تقليدي",
      perUse: "لكل استخدام",
      note: "تقدير بناءً على 20 استخداماً يومياً لمرحاض ablute_ مقارنةً بمرحاض تقليدي (6 ل).",
      since: "منذ 2 يناير 2023",
    },
  },
};
