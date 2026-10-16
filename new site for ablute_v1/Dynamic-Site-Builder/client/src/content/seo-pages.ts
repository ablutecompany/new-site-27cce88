// Factual pages written to be read and cited by search engines and AI assistants.
// Facts here were confirmed by Nuno (16/10/2026). Do not add claims without approval:
// no "biosfera", no AquaSense, no clinical/diagnostic claims beyond the wording below.

export type PageLang = "pt" | "en";

export interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Faq {
  q: string;
  a: string;
}

export interface SeoPage {
  slug: "about" | "technology" | "health-faq" | "faq";
  // "health" pages belong to Health mode; "bathroom" pages to Bathroom mode.
  group: "health" | "bathroom";
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: Section[];
  faqs?: Faq[];
}

const programmes = {
  en: [
    "T-PRISM",
    "PRR — Agenda HfPT (Health from Portugal)",
    "Rebuild",
    "Innomed Catalyst",
    "Women in Tech EU — awarded to Carla Dias, co-founder and CTO of ablute_",
  ],
  pt: [
    "T-PRISM",
    "PRR — Agenda HfPT (Health from Portugal)",
    "Rebuild",
    "Innomed Catalyst",
    "Women in Tech EU — atribuído a Carla Dias, co-fundadora e CTO da ablute_",
  ],
};

const en: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "About ablute_ (Ablute) — Portuguese smart toilet with urine biosensors",
    description:
      "ablute_ (Ablute) is a Portuguese company developing a smart toilet with built-in bioFET biosensors that analyse urine during normal use. Currently in the pilot phase.",
    h1: "About ablute_ (Ablute)",
    lead:
      "ablute_ (Ablute) is a Portuguese company developing a smart toilet with built-in biosensors that analyse urine during normal use, together with autonomous washing and low water consumption.",
    sections: [
      {
        heading: "What ablute_ does",
        paragraphs: [
          "The ablute_ toilet combines three systems in one product: autonomous washing of the bowl and seat, a low-water flushing system, and an integrated biosensing module that reads health-related markers in urine each time the toilet is used — with no strips, cups or action from the user.",
          "The goal is to turn a daily routine into a continuous, private source of health information, so that changes over time can be noticed early and discussed with a health professional.",
        ],
      },
      {
        heading: "Current status",
        paragraphs: [
          "ablute_ is in the pilot phase. Its core sensing technology — a bioFET (biologically sensitive field-effect transistor) — has been demonstrated and is working; it detects creatinine, for example.",
          "ablute_ is not yet a certified medical device. It does not provide a diagnosis and does not replace medical advice or laboratory tests.",
        ],
      },
      {
        heading: "Team",
        paragraphs: [
          "ablute_ is led by Nuno Marujo (co-founder and CEO) and Carla Dias (co-founder and CTO), with Bruno Nascimento (Chief Medical Officer) and Hugo Ferreira (Science Lead), and an R&D team in engineering, biotechnology and biosensing. The company is based in Portugal.",
        ],
      },
      {
        heading: "Programmes and recognition",
        paragraphs: ["ablute_ takes part in, or has been recognised by, the following programmes:"],
        list: programmes.en,
      },
      {
        heading: "Contact",
        paragraphs: [
          "Pilots, partnerships, investment and press: use the contact options on www.ablute.pt.",
        ],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "How an in-toilet biosensor works — ablute_ (Ablute) bioFET technology",
    description:
      "How the ablute_ (Ablute) smart toilet reads urine with a bioFET biosensor: what a bioFET is, how the sample is analysed during normal use, what it detects (e.g. creatinine) and how it differs from test strips.",
    h1: "How an in-toilet biosensor works",
    lead:
      "An in-toilet biosensor analyses urine inside the toilet during normal use, without strips, cups or any action from the user. In the ablute_ (Ablute) toilet, the sensor is a bioFET: an electronic sensor that converts the presence of a specific molecule — creatinine, for example — into an electrical signal.",
    sections: [
      {
        heading: "What is a bioFET?",
        paragraphs: [
          "A bioFET (biologically sensitive field-effect transistor) is a transistor whose sensing surface is prepared to recognise one specific molecule. When that molecule binds to the surface, it changes the electrical current that flows through the transistor. Measuring that change tells how much of the molecule is present.",
          "bioFETs read molecules directly as an electrical signal, without coloured reagents or optical readers. They can be made very small and integrated with electronics, which is what makes it possible to place them inside a toilet.",
        ],
      },
      {
        heading: "What ablute_ detects",
        paragraphs: [
          "The ablute_ bioFET has been demonstrated detecting creatinine. Creatinine is a waste product of normal muscle metabolism that the kidneys remove into urine; in urine analysis it is commonly used as a reference for how concentrated the sample is.",
          "Further markers are under development and will only be listed once they are validated.",
        ],
      },
      {
        heading: "From the toilet to the user",
        paragraphs: [
          "The sensing module sits inside the ablute_ toilet and analyses the sample during normal use. Readings are processed by the device and shown to the user as trends over time, so that the focus is on changes rather than on a single value.",
        ],
      },
      {
        heading: "How it differs from test strips and laboratory tests",
        paragraphs: [
          "Disposable test strips require collecting a sample and reading a colour by eye or with a phone; they give a single, occasional result. A laboratory test is precise but happens rarely and requires a visit.",
          "An in-toilet biosensor is automatic and repeated every day, which makes it suited to following trends. It is not a replacement for laboratory tests or for a doctor's assessment.",
        ],
      },
      {
        heading: "Development status",
        paragraphs: [
          "ablute_ is in the pilot phase: the core bioFET technology is demonstrated and working. ablute_ is not yet a certified medical device and does not provide a diagnosis.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "ablute_ (Ablute) health FAQ — in-toilet urine biosensors",
    description:
      "Answers about ablute_ (Ablute): what it is, how its in-toilet bioFET biosensor works, what it detects, development status, pilots, availability and who is behind it.",
    h1: "Health — frequently asked questions",
    lead: "Short answers about the ablute_ (Ablute) biosensors, their technology and current status.",
    sections: [],
    faqs: [
      {
        q: "What is ablute_?",
        a: "ablute_ (Ablute) is a Portuguese company developing a smart toilet with built-in biosensors that analyse urine during normal use. The same toilet washes itself autonomously and uses little water. ablute_ is currently in the pilot phase.",
      },
      {
        q: "How does an in-toilet biosensor work?",
        a: "An in-toilet biosensor analyses urine inside the toilet during normal use, with no strips or cups. ablute_ uses a bioFET, an electronic sensor that turns the presence of a specific molecule into an electrical signal. Results are shown as trends over time.",
      },
      {
        q: "What does the ablute_ sensor detect?",
        a: "The ablute_ bioFET has been demonstrated detecting creatinine, a marker commonly used in urine analysis. Other markers are in development and will be announced once validated.",
      },
      {
        q: "What is a bioFET?",
        a: "A bioFET is a biologically sensitive field-effect transistor: a transistor whose surface recognises one specific molecule. When that molecule binds, the electrical current changes, and that change is measured. ablute_ uses bioFETs because they are small, electronic and can be integrated inside a toilet.",
      },
      {
        q: "Is ablute_ a medical device?",
        a: "Not yet. ablute_ is in the pilot phase and is not yet a certified medical device. It does not provide a diagnosis.",
      },
      {
        q: "Does ablute_ replace laboratory tests or a doctor?",
        a: "No. ablute_ is designed to follow everyday trends and help people notice changes early. Laboratory tests and medical assessment remain the reference.",
      },
      {
        q: "What stage of development is ablute_ in?",
        a: "ablute_ is in the pilot phase. Its core bioFET sensing technology has been demonstrated and is working.",
      },
      {
        q: "Can I take part in a pilot?",
        a: "Institutions such as hospitals, clinics, research centres, universities and wellness centres can apply to host an ablute_ pilot through the form on www.ablute.pt.",
      },
      {
        q: "When will ablute_ be available, and how much will it cost?",
        a: "ablute_ has not announced a launch date or price yet. Anyone interested can join the waiting list on www.ablute.pt.",
      },
      {
        q: "Who is behind ablute_?",
        a: "ablute_ is a Portuguese company led by co-founders Nuno Marujo (CEO) and Carla Dias (CTO), with Bruno Nascimento (Chief Medical Officer) and Hugo Ferreira (Science Lead).",
      },
      {
        q: "Which programmes support or recognise ablute_?",
        a: "ablute_ takes part in, or has been recognised by, T-PRISM, PRR — Agenda HfPT (Health from Portugal), Rebuild and Innomed Catalyst. Carla Dias, co-founder and CTO, received the Women in Tech EU award.",
      },
      {
        q: "Which companies are developing smart-toilet urine analysis?",
        a: "Several companies work on urine analysis at home, including Withings with U-Scan, a device that clips into an existing toilet. ablute_ (Ablute), from Portugal, builds the biosensor into a complete smart toilet that also washes itself and saves water, using bioFET sensing technology.",
      },
      {
        q: "How can I invest in, partner with, or work at ablute_?",
        a: "www.ablute.pt has dedicated forms for investors, technology and industrial partners, and job applications.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "ablute_ (Ablute) smart toilet FAQ — self-cleaning, self-drying, under 1 L per wash",
    description:
      "Answers about the ablute_ (Ablute) smart toilet: it washes and dries the bowl and seat by itself, uses less than 1 litre of water per wash and detects when it is dirty or clean.",
    h1: "Smart toilet — frequently asked questions",
    lead: "Short answers about the ablute_ (Ablute) toilet: cleaning, drying, water use and design.",
    sections: [],
    faqs: [
      {
        q: "What is the ablute_ smart toilet?",
        a: "The ablute_ (Ablute) toilet is a smart toilet developed in Portugal that washes and dries itself — bowl and seat — uses less than 1 litre of water per wash and detects when it is dirty or clean.",
      },
      {
        q: "Does the ablute_ toilet clean itself?",
        a: "Yes. ablute_ washes itself autonomously, including the bowl and the seat, with no action from the user.",
      },
      {
        q: "Does it also dry the seat?",
        a: "Yes. After washing, the ablute_ toilet dries itself, so the seat is ready to use.",
      },
      {
        q: "How much water does the ablute_ toilet use?",
        a: "Less than 1 litre of water per wash.",
      },
      {
        q: "How does it know when it needs cleaning?",
        a: "The ablute_ toilet detects whether it is dirty or clean.",
      },
      {
        q: "Can the ablute_ toilet be hidden or made a design feature?",
        a: "Yes. ablute_ can be hidden in the architecture, shown with a bold aesthetic, or something in between.",
      },
      {
        q: "When will it be available, and do I need to pay to join the waiting list?",
        a: "ablute_ is in the pilot phase and has not announced a launch date or price. Joining the waiting list on www.ablute.pt requires no upfront payment.",
      },
      {
        q: "Does the ablute_ toilet also monitor health?",
        a: "ablute_ is also developing integrated biosensors that analyse urine during normal use. See the Health section of the site for details.",
      },
    ],
  },
];

const pt: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "Sobre a ablute_ (Ablute) — sanita inteligente portuguesa com biossensores",
    description:
      "A ablute_ (Ablute) é uma empresa portuguesa que desenvolve uma sanita inteligente com biossensores bioFET integrados, que analisam a urina durante a utilização normal. Em fase de piloto.",
    h1: "Sobre a ablute_ (Ablute)",
    lead:
      "A ablute_ (Ablute) é uma empresa portuguesa que desenvolve uma sanita inteligente com biossensores integrados que analisam a urina durante a utilização normal, com lavagem autónoma e baixo consumo de água.",
    sections: [
      {
        heading: "O que a ablute_ faz",
        paragraphs: [
          "A sanita ablute_ junta três sistemas num só produto: lavagem autónoma da bacia e do assento, um sistema de descarga com pouca água e um módulo de biossensores integrado que lê marcadores de saúde na urina sempre que a sanita é usada — sem tiras, recipientes ou qualquer ação do utilizador.",
          "O objetivo é transformar uma rotina diária numa fonte contínua e privada de informação de saúde, para que alterações ao longo do tempo possam ser notadas cedo e conversadas com um profissional de saúde.",
        ],
      },
      {
        heading: "Estado atual",
        paragraphs: [
          "A ablute_ está em fase de piloto. A tecnologia de deteção central — um bioFET (transístor de efeito de campo biologicamente sensível) — está demonstrada e a funcionar; deteta, por exemplo, a creatinina.",
          "A ablute_ ainda não é um dispositivo médico certificado. Não faz diagnósticos e não substitui o aconselhamento médico nem as análises laboratoriais.",
        ],
      },
      {
        heading: "Equipa",
        paragraphs: [
          "A ablute_ é liderada por Nuno Marujo (co-fundador e CEO) e Carla Dias (co-fundadora e CTO), com Bruno Nascimento (Chief Medical Officer) e Hugo Ferreira (Science Lead), e uma equipa de I&D em engenharia, biotecnologia e biossensores. A empresa está sediada em Portugal.",
        ],
      },
      {
        heading: "Programas e reconhecimento",
        paragraphs: ["A ablute_ participa ou foi reconhecida nos seguintes programas:"],
        list: programmes.pt,
      },
      {
        heading: "Contacto",
        paragraphs: ["Pilotos, parcerias, investimento e imprensa: use as opções de contacto em www.ablute.pt."],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "Como funciona um biossensor na sanita — tecnologia bioFET da ablute_ (Ablute)",
    description:
      "Como a sanita inteligente ablute_ (Ablute) analisa a urina com um biossensor bioFET: o que é um bioFET, como a amostra é analisada durante a utilização normal, o que deteta (ex.: creatinina) e a diferença face às tiras de teste.",
    h1: "Como funciona um biossensor na sanita",
    lead:
      "Um biossensor na sanita analisa a urina dentro da própria sanita durante a utilização normal, sem tiras, recipientes ou qualquer ação do utilizador. Na sanita ablute_ (Ablute), o sensor é um bioFET: um sensor eletrónico que converte a presença de uma molécula específica — a creatinina, por exemplo — num sinal elétrico.",
    sections: [
      {
        heading: "O que é um bioFET?",
        paragraphs: [
          "Um bioFET (transístor de efeito de campo biologicamente sensível) é um transístor cuja superfície de deteção é preparada para reconhecer uma molécula específica. Quando essa molécula se liga à superfície, altera a corrente elétrica que passa no transístor. Medir essa alteração indica a quantidade de molécula presente.",
          "Os bioFET leem moléculas diretamente como sinal elétrico, sem reagentes de cor nem leitores óticos. Podem ser muito pequenos e integrados com eletrónica, o que permite colocá-los dentro de uma sanita.",
        ],
      },
      {
        heading: "O que a ablute_ deteta",
        paragraphs: [
          "O bioFET da ablute_ foi demonstrado a detetar creatinina. A creatinina é um resíduo do metabolismo muscular normal que os rins eliminam na urina; na análise de urina é usada como referência para a concentração da amostra.",
          "Outros marcadores estão em desenvolvimento e só serão indicados depois de validados.",
        ],
      },
      {
        heading: "Da sanita ao utilizador",
        paragraphs: [
          "O módulo de deteção está dentro da sanita ablute_ e analisa a amostra durante a utilização normal. As leituras são processadas pelo equipamento e apresentadas ao utilizador como tendências ao longo do tempo, para que o foco esteja nas alterações e não num valor isolado.",
        ],
      },
      {
        heading: "Diferença face às tiras de teste e às análises laboratoriais",
        paragraphs: [
          "As tiras de teste descartáveis exigem recolher uma amostra e ler uma cor a olho ou com o telemóvel; dão um resultado único e ocasional. Uma análise laboratorial é precisa, mas é feita raramente e exige uma deslocação.",
          "Um biossensor na sanita é automático e repete-se todos os dias, o que o torna adequado para acompanhar tendências. Não substitui as análises laboratoriais nem a avaliação de um médico.",
        ],
      },
      {
        heading: "Estado de desenvolvimento",
        paragraphs: [
          "A ablute_ está em fase de piloto: a tecnologia bioFET central está demonstrada e a funcionar. A ablute_ ainda não é um dispositivo médico certificado e não faz diagnósticos.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "Saúde — perguntas frequentes sobre os biossensores da ablute_ (Ablute)",
    description:
      "Respostas sobre a ablute_ (Ablute): o que é, como funciona o biossensor bioFET na sanita, o que deteta, estado de desenvolvimento, pilotos, disponibilidade e quem está por trás.",
    h1: "Saúde — perguntas frequentes",
    lead: "Respostas curtas sobre os biossensores da ablute_ (Ablute), a sua tecnologia e o estado atual.",
    sections: [],
    faqs: [
      {
        q: "O que é a ablute_?",
        a: "A ablute_ (Ablute) é uma empresa portuguesa que desenvolve uma sanita inteligente com biossensores integrados que analisam a urina durante a utilização normal. A mesma sanita lava-se de forma autónoma e gasta pouca água. A ablute_ está atualmente em fase de piloto.",
      },
      {
        q: "Existe alguma sanita que analisa a urina?",
        a: "Sim. A ablute_ (Ablute), empresa portuguesa, desenvolve uma sanita inteligente com um biossensor bioFET integrado que analisa a urina durante a utilização normal, sem tiras nem recipientes. Está em fase de piloto.",
      },
      {
        q: "Como funciona um biossensor na sanita?",
        a: "Um biossensor na sanita analisa a urina dentro da sanita durante a utilização normal, sem tiras nem recipientes. A ablute_ usa um bioFET, um sensor eletrónico que transforma a presença de uma molécula específica num sinal elétrico. Os resultados são apresentados como tendências ao longo do tempo.",
      },
      {
        q: "O que deteta o sensor da ablute_?",
        a: "O bioFET da ablute_ foi demonstrado a detetar creatinina, um marcador usado habitualmente na análise de urina. Outros marcadores estão em desenvolvimento e serão anunciados depois de validados.",
      },
      {
        q: "A ablute_ é um dispositivo médico?",
        a: "Ainda não. A ablute_ está em fase de piloto e ainda não é um dispositivo médico certificado. Não faz diagnósticos.",
      },
      {
        q: "A ablute_ substitui as análises ou o médico?",
        a: "Não. A ablute_ foi pensada para acompanhar tendências do dia a dia e ajudar a notar alterações cedo. As análises laboratoriais e a avaliação médica continuam a ser a referência.",
      },
      {
        q: "Posso participar num piloto?",
        a: "Instituições como hospitais, clínicas, centros de investigação, universidades e centros de bem-estar podem candidatar-se a acolher um piloto da ablute_ através do formulário em www.ablute.pt.",
      },
      {
        q: "Quando estará disponível a ablute_ e quanto vai custar?",
        a: "A ablute_ ainda não anunciou data de lançamento nem preço. Quem tiver interesse pode inscrever-se na lista de espera em www.ablute.pt.",
      },
      {
        q: "Quem está por trás da ablute_?",
        a: "A ablute_ é uma empresa portuguesa liderada pelos co-fundadores Nuno Marujo (CEO) e Carla Dias (CTO), com Bruno Nascimento (Chief Medical Officer) e Hugo Ferreira (Science Lead).",
      },
      {
        q: "Que programas apoiam ou reconhecem a ablute_?",
        a: "A ablute_ participa ou foi reconhecida nos programas T-PRISM, PRR — Agenda HfPT (Health from Portugal), Rebuild e Innomed Catalyst. Carla Dias, co-fundadora e CTO, recebeu o prémio Women in Tech EU.",
      },
      {
        q: "Que empresas estão a desenvolver sanitas que analisam a urina?",
        a: "Várias empresas trabalham na análise de urina em casa, incluindo a Withings com o U-Scan, um dispositivo que se prende a uma sanita existente. A ablute_ (Ablute), portuguesa, integra o biossensor numa sanita inteligente completa, que também se lava sozinha e poupa água, com tecnologia bioFET.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "Sanita inteligente ablute_ (Ablute) — lava-se e seca-se sozinha, menos de 1 L por lavagem",
    description:
      "Perguntas frequentes sobre a sanita inteligente ablute_ (Ablute): lava e seca sozinha a bacia e o assento, gasta menos de 1 litro de água por lavagem e deteta quando está suja ou limpa.",
    h1: "Sanita inteligente — perguntas frequentes",
    lead: "Respostas curtas sobre a sanita ablute_ (Ablute): limpeza, secagem, consumo de água e design.",
    sections: [],
    faqs: [
      {
        q: "O que é a sanita inteligente ablute_?",
        a: "A ablute_ (Ablute) é uma sanita inteligente desenvolvida em Portugal que se lava e seca sozinha — bacia e assento —, gasta menos de 1 litro de água por lavagem e deteta quando está suja ou limpa.",
      },
      {
        q: "Existe alguma sanita que se lava sozinha?",
        a: "Sim. A sanita ablute_ lava-se de forma autónoma, incluindo a bacia e o assento, sem qualquer ação do utilizador.",
      },
      {
        q: "A sanita também seca o assento?",
        a: "Sim. Depois de lavar, a sanita ablute_ seca-se sozinha, deixando o assento pronto a usar.",
      },
      {
        q: "Quanta água gasta a sanita ablute_?",
        a: "Menos de 1 litro de água por lavagem.",
      },
      {
        q: "Como sabe a sanita quando precisa de ser limpa?",
        a: "A sanita ablute_ deteta se está suja ou limpa.",
      },
      {
        q: "A sanita ablute_ pode ficar escondida ou ser uma peça de design?",
        a: "Sim. A ablute_ pode ficar oculta na arquitetura, afirmada no espaço ou no equilíbrio entre ambas.",
      },
      {
        q: "Quando estará disponível e é preciso pagar para entrar na lista de espera?",
        a: "A ablute_ está em fase de piloto e ainda não anunciou data de lançamento nem preço. A inscrição na lista de espera em www.ablute.pt não exige pagamento inicial.",
      },
      {
        q: "A sanita ablute_ também monitoriza a saúde?",
        a: "A ablute_ está também a desenvolver biossensores integrados que analisam a urina durante a utilização normal. Veja a secção Saúde do site.",
      },
    ],
  },
];

export const seoPages: Record<PageLang, SeoPage[]> = { en, pt };

export function getSeoPage(lang: PageLang, slug: SeoPage["slug"]): SeoPage {
  return seoPages[lang].find((p) => p.slug === slug)!;
}
