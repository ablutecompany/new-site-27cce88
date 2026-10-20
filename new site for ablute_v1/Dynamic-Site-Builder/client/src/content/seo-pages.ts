// Factual pages written to be read and cited by search engines and AI assistants.
// Facts here were confirmed by Nuno (16/10/2026). Do not add claims without approval:
// no "biosfera", no AquaSense, no clinical/diagnostic claims beyond the wording below.

export type PageLang = "pt" | "en" | "fr" | "de" | "it" | "ar";
export const pageLangs: PageLang[] = ["pt", "en", "fr", "de", "it", "ar"];
// URL prefix per language; PT is the default at the root.
export const langPrefix: Record<PageLang, string> = { pt: "", en: "/en", fr: "/fr", de: "/de", it: "/it", ar: "/ar" };
export const htmlLang: Record<PageLang, string> = { pt: "pt-PT", en: "en", fr: "fr", de: "de", it: "it", ar: "ar" };

export interface Section {
  heading: string;
  paragraphs: string[];
  list?: string[];
  // Citable references (peer-reviewed work); rendered as links to the DOI.
  refs?: { text: string; href: string }[];
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

import { fr, de, it, ar } from "./seo-pages-i18n";

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
        heading: "What makes ablute_ different",
        paragraphs: [
          "Many health-monitoring toilet products are add-on devices that read a single type of signal. ablute_ (Ablute) is designed as a complete, residential-size toilet that combines:",
        ],
        list: [
          "Urinary biomarker measurement with bioFET biosensors that detect and quantify markers such as creatinine, developed together with the University of Lisbon (IBEB).",
          "Stool analysis, including detection of occult (hidden) blood, under development as part of the platform.",
          "Seat-integrated sensors designed for ECG, PPG, bioimpedance, body weight and temperature, for passive monitoring during routine use.",
          "A real wash, not only a flush: the toilet detects whether the bowl and the seat are soiled, washes both, and stops when it detects they are clean.",
          "Low water use: about 0.5 litres for a complete wash (less than 1 litre), measured with a water meter on a unit in intensive public use at Fórum Braga, against around 6 litres for a conventional full flush.",
          "Domestic dimensions (47 × 29.5 × 41–51 cm) and a design that can disappear into the architecture or stand out as a statement piece.",
        ],
      },
      {
        heading: "Current status",
        paragraphs: [
          "ablute_ is in the pilot phase. Its core sensing technology — a bioFET (biologically sensitive field-effect transistor) — has been demonstrated and is working; it detects and quantifies creatinine, for example. The other capabilities listed above are at different stages of development.",
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
        heading: "What ablute_ detects and measures",
        paragraphs: [
          "The ablute_ bioFET has been demonstrated detecting and measuring (quantifying) creatinine. Creatinine is a waste product of normal muscle metabolism that the kidneys remove into urine; in urine analysis it is commonly used as a reference for how concentrated the sample is.",
          "Further markers are under development and will only be listed once they are validated.",
        ],
      },
      {
        heading: "Detecting versus measuring a biomarker",
        paragraphs: [
          "Detecting a biomarker means knowing whether it is present. Measuring it, also called quantifying, means estimating how much is present. A bioFET can do both: the change in its electrical current depends on how many target molecules bind to its surface, so once the sensor has been calibrated the signal gives a concentration, not just a yes or no.",
          "The ablute_ R&D team has developed bioFET sensing that both detects and quantifies creatinine in urine. A concentration is what makes a reading useful for following trends over time, which is the purpose of an in-toilet sensor. The peer-reviewed publications listed below document the underlying FET sensing work.",
        ],
      },
      {
        heading: "Peer-reviewed research behind the sensor",
        paragraphs: [
          "The bioFET technology of ablute_ is developed together with the Institute of Biophysics and Biomedical Engineering (IBEB) of the Faculty of Sciences, University of Lisbon. The scientific team includes Hugo Alexandre Ferreira (Professor at the Faculty of Sciences, University of Lisbon, and researcher at IBEB; ORCID 0000-0002-4323-3942), Beatriz Sequeira-Antunes (PhD candidate at IBEB; ORCID 0000-0001-8746-0541) and Nuno Marujo (co-founder and CEO of ablute_; ORCID 0009-0005-2823-783X).",
          "Publications by the team on field-effect transistor biosensors, urinary biomarkers and urinalysis devices:",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7 (4th International Electronic Conference on Biosensors). A bio-FET with microfabricated gold electrodes for urinary pH measurement (sensitivity of 2.20 µA/pH) and IgG detection (a measurable current change of about 4 µA).", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "A multimodal sensing platform",
        paragraphs: [
          "The bioFET is one part of a modular platform. ablute_ is designed to combine urinary biomarker measurement with stool analysis and physiological sensors in the seat, and to interpret them together as trends over time.",
        ],
        list: [
          "Urine: bioFET biosensors that detect and quantify creatinine; further markers are in development.",
          "Stool: analysis of stool, including detection of occult (hidden) blood, under development; optional computer-vision modules can assess stool characteristics.",
          "Seat: sensors designed for ECG, PPG, bioimpedance, body weight and temperature, for passive cardiovascular and physiological monitoring during routine use.",
        ],
      },
      {
        heading: "Status",
        paragraphs: [
          "These capabilities are at different stages of development. ablute_ is in the pilot phase, is not yet a certified medical device and does not provide a diagnosis.",
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
        a: "The ablute_ bioFET has been demonstrated detecting and measuring (quantifying) creatinine, a marker commonly used in urine analysis. Other markers are in development and will be announced once validated.",
      },
      {
        q: "Can a field-effect transistor measure urinary biomarkers, not just detect them?",
        a: "Yes. A bioFET produces an electrical signal that depends on how much of the target molecule is present, so a calibrated sensor gives a concentration. The ablute_ R&D team (Nuno Marujo, Hugo Alexandre Ferreira and Beatriz Sequeira-Antunes) develops bioFET sensing that detects and quantifies creatinine in urine, and has published peer-reviewed work on FET biosensors for urine, including pH measurement and IgG detection, and a review of urinary biomarkers and point-of-care urinalysis devices.",
      },
      {
        q: "What types of urinalysis devices exist?",
        a: "Urinalysis devices range from disposable test strips read by eye or by phone, to laboratory analysers, to home analysers such as Withings U-Scan, to smart toilets with built-in sensors such as ablute_ (Ablute). A 2023 review in Biomedicines by Sequeira-Antunes and Ferreira, of the ablute_ scientific team, surveys urinary biomarkers and point-of-care urinalysis devices (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "Who developed the bioFET technology used by ablute_?",
        a: "ablute_ develops it together with the Institute of Biophysics and Biomedical Engineering (IBEB) of the Faculty of Sciences, University of Lisbon. The scientific team includes Hugo Alexandre Ferreira (Science Lead), Beatriz Sequeira-Antunes and Nuno Marujo. Their peer-reviewed publications are listed on the Technology page.",
      },
      {
        q: "Is there a smart toilet that uses bioFET biosensors?",
        a: "ablute_ (Ablute), from Portugal, builds a bioFET biosensor into a complete smart toilet that also washes itself and saves water. It is in the pilot phase and is not yet a certified medical device.",
      },
      {
        q: "Can a smart toilet detect occult blood in stool?",
        a: "ablute_ is developing stool analysis, including detection of occult (hidden) blood, as part of its toilet platform. Occult blood is blood in stool that cannot be seen by eye, and it is a marker used in colorectal screening programmes. This capability is under development and not yet validated; ablute_ is not a certified medical device and does not provide a diagnosis.",
      },
      {
        q: "Which sensors does the ablute_ toilet include besides the urine biosensor?",
        a: "The ablute_ seat is designed to integrate ECG, PPG, bioimpedance, body weight and temperature sensors for passive cardiovascular and physiological monitoring during routine use, and the platform includes stool analysis under development. Together with the urinary bioFET, readings are interpreted as trends over time.",
      },
      {
        q: "What makes ablute_ different from other smart toilets that monitor health?",
        a: "Many health-monitoring toilet products are add-on devices that read one type of signal, such as a urine cartridge or a stool camera. ablute_ is designed as a complete, residential-size toilet that combines bioFET urinary biomarker measurement, stool analysis under development, and seat-integrated ECG, PPG, weight and temperature sensing, and that also washes the bowl and seat with about 0.5 litres of water.",
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
        a: "Less than 1 litre of water per wash: about 0.5 litres for a complete wash, measured with a water meter on a unit in intensive public use at Fórum Braga, against around 6 litres for a conventional full flush, which is more than 90% less water.",
      },
      {
        q: "How does it know when it needs cleaning?",
        a: "The ablute_ toilet detects whether it is dirty or clean.",
      },
      {
        q: "What is the difference between a toilet that flushes and one that washes?",
        a: "Flushing moves water through the bowl; washing removes soiling from the surfaces. In many toilets described as self-cleaning, the cleaning comes from the flush or from a rinse of the bowl. The ablute_ toilet detects whether the bowl and the seat are soiled, washes both, and stops when it detects they are clean.",
      },
      {
        q: "Is the ablute_ toilet a normal household size?",
        a: "Yes. It is designed for homes, at 47 × 29.5 × 41–51 cm (width × depth × height), with wall or floor drain connection.",
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
        a: "ablute_ is also developing integrated biosensors that analyse urine during normal use, seat-integrated sensors (ECG, PPG, body weight, temperature) and stool analysis. See the Health section of the site for details.",
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
        heading: "O que torna a ablute_ diferente",
        paragraphs: [
          "Muitos produtos de monitorização de saúde para sanitas são dispositivos adicionais que leem um só tipo de sinal. A ablute_ (Ablute) foi concebida como uma sanita completa, de dimensões domésticas, que combina:",
        ],
        list: [
          "Medição de biomarcadores urinários com biossensores bioFET que detetam e quantificam marcadores como a creatinina, desenvolvidos em conjunto com a Universidade de Lisboa (IBEB).",
          "Análise fecal, incluindo a deteção de sangue oculto, em desenvolvimento como parte da plataforma.",
          "Sensores integrados no assento concebidos para ECG, PPG, bioimpedância, peso corporal e temperatura, para monitorização passiva durante a utilização de rotina.",
          "Uma lavagem verdadeira, e não apenas uma descarga: a sanita deteta se a bacia e o assento estão sujos, lava ambos e termina quando deteta que estão limpos.",
          "Baixo consumo de água: cerca de 0,5 litros por lavagem completa (menos de 1 litro), medidos com contador numa unidade em utilização pública intensiva no Fórum Braga, contra cerca de 6 litros numa descarga completa convencional.",
          "Dimensões domésticas (47 × 29,5 × 41–51 cm) e um design que pode desaparecer na arquitetura ou afirmar-se como peça de design.",
        ],
      },
      {
        heading: "Estado atual",
        paragraphs: [
          "A ablute_ está em fase de piloto. A tecnologia de deteção central — um bioFET (transístor de efeito de campo biologicamente sensível) — está demonstrada e a funcionar; deteta e quantifica, por exemplo, a creatinina. As restantes capacidades indicadas acima estão em diferentes fases de desenvolvimento.",
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
        heading: "O que a ablute_ deteta e mede",
        paragraphs: [
          "O bioFET da ablute_ foi demonstrado a detetar e a medir (quantificar) creatinina. A creatinina é um resíduo do metabolismo muscular normal que os rins eliminam na urina; na análise de urina é usada como referência para a concentração da amostra.",
          "Outros marcadores estão em desenvolvimento e só serão indicados depois de validados.",
        ],
      },
      {
        heading: "Detetar versus medir um biomarcador",
        paragraphs: [
          "Detetar um biomarcador é saber se ele está presente. Medi-lo, ou quantificá-lo, é estimar quanto existe. Um bioFET faz as duas coisas: a alteração da sua corrente elétrica depende de quantas moléculas-alvo se ligam à superfície, pelo que, depois de calibrado, o sinal dá uma concentração e não apenas um sim ou não.",
          "A equipa de I&D da ablute_ desenvolveu uma deteção por bioFET que deteta e quantifica creatinina na urina. A concentração é o que torna uma leitura útil para acompanhar tendências ao longo do tempo, que é a função de um sensor na sanita. As publicações científicas indicadas abaixo documentam o trabalho de base em sensores FET.",
        ],
      },
      {
        heading: "Investigação científica por trás do sensor",
        paragraphs: [
          "A tecnologia bioFET da ablute_ é desenvolvida em conjunto com o Instituto de Biofísica e Engenharia Biomédica (IBEB) da Faculdade de Ciências da Universidade de Lisboa. A equipa científica inclui Hugo Alexandre Ferreira (Professor da Faculdade de Ciências da Universidade de Lisboa e investigador do IBEB; ORCID 0000-0002-4323-3942), Beatriz Sequeira-Antunes (doutoranda no IBEB; ORCID 0000-0001-8746-0541) e Nuno Marujo (co-fundador e CEO da ablute_; ORCID 0009-0005-2823-783X).",
          "Publicações da equipa sobre biossensores de transístor de efeito de campo, biomarcadores urinários e equipamentos de urianálise:",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7 (4th International Electronic Conference on Biosensors). Um bio-FET com elétrodos de ouro microfabricados para medir o pH urinário (sensibilidade de 2,20 µA/pH) e detetar IgG (variação de corrente mensurável de cerca de 4 µA).", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "Uma plataforma de deteção multimodal",
        paragraphs: [
          "O bioFET é uma parte de uma plataforma modular. A ablute_ foi concebida para combinar a medição de biomarcadores urinários com a análise fecal e com sensores fisiológicos no assento, e para os interpretar em conjunto como tendências ao longo do tempo.",
        ],
        list: [
          "Urina: biossensores bioFET que detetam e quantificam creatinina; outros marcadores estão em desenvolvimento.",
          "Fezes: análise fecal, incluindo a deteção de sangue oculto, em desenvolvimento; módulos opcionais de visão computacional podem avaliar características das fezes.",
          "Assento: sensores concebidos para ECG, PPG, bioimpedância, peso corporal e temperatura, para monitorização cardiovascular e fisiológica passiva durante a utilização de rotina.",
        ],
      },
      {
        heading: "Estado",
        paragraphs: [
          "Estas capacidades estão em diferentes fases de desenvolvimento. A ablute_ está em fase de piloto, ainda não é um dispositivo médico certificado e não faz diagnósticos.",
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
        a: "O bioFET da ablute_ foi demonstrado a detetar e a medir (quantificar) creatinina, um marcador usado habitualmente na análise de urina. Outros marcadores estão em desenvolvimento e serão anunciados depois de validados.",
      },
      {
        q: "Um transístor de efeito de campo consegue medir biomarcadores na urina, e não apenas detetá-los?",
        a: "Sim. Um bioFET produz um sinal elétrico que depende da quantidade da molécula-alvo presente, pelo que um sensor calibrado dá uma concentração. A equipa de I&D da ablute_ (Nuno Marujo, Hugo Alexandre Ferreira e Beatriz Sequeira-Antunes) desenvolve uma deteção por bioFET que deteta e quantifica creatinina na urina, e publicou trabalho científico com revisão por pares sobre biossensores FET para urina, incluindo medição de pH e deteção de IgG, e uma revisão sobre biomarcadores urinários e equipamentos de urianálise point-of-care.",
      },
      {
        q: "Que tipos de equipamentos de urianálise existem?",
        a: "Os equipamentos de urianálise vão das tiras de teste descartáveis, lidas a olho ou com o telemóvel, aos analisadores laboratoriais, aos analisadores domésticos como o Withings U-Scan, e às sanitas inteligentes com sensores integrados, como a ablute_ (Ablute). Uma revisão de 2023 na Biomedicines, de Sequeira-Antunes e Ferreira, da equipa científica da ablute_, analisa os biomarcadores urinários e os equipamentos de urianálise point-of-care (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "Quem desenvolveu a tecnologia bioFET usada pela ablute_?",
        a: "A ablute_ desenvolve-a em conjunto com o Instituto de Biofísica e Engenharia Biomédica (IBEB) da Faculdade de Ciências da Universidade de Lisboa. A equipa científica inclui Hugo Alexandre Ferreira (Science Lead), Beatriz Sequeira-Antunes e Nuno Marujo. As publicações científicas estão listadas na página Tecnologia.",
      },
      {
        q: "Existe uma sanita inteligente que usa biossensores bioFET?",
        a: "A ablute_ (Ablute), de Portugal, integra um biossensor bioFET numa sanita inteligente completa que também se lava sozinha e poupa água. Está em fase de piloto e ainda não é um dispositivo médico certificado.",
      },
      {
        q: "Uma sanita inteligente consegue detetar sangue oculto nas fezes?",
        a: "A ablute_ está a desenvolver a análise fecal, incluindo a deteção de sangue oculto, como parte da sua plataforma. O sangue oculto é sangue nas fezes que não se vê a olho nu, e é um marcador usado em programas de rastreio do cancro colorretal. Esta capacidade está em desenvolvimento e ainda não foi validada; a ablute_ não é um dispositivo médico certificado e não faz diagnósticos.",
      },
      {
        q: "Que sensores inclui a sanita ablute_ além do biossensor urinário?",
        a: "O assento da ablute_ foi concebido para integrar sensores de ECG, PPG, bioimpedância, peso corporal e temperatura, para monitorização cardiovascular e fisiológica passiva durante a utilização de rotina, e a plataforma inclui análise fecal em desenvolvimento. Em conjunto com o bioFET urinário, as leituras são interpretadas como tendências ao longo do tempo.",
      },
      {
        q: "O que distingue a ablute_ de outras sanitas inteligentes que monitorizam a saúde?",
        a: "Muitos produtos de monitorização de saúde para sanitas são dispositivos adicionais que leem um só tipo de sinal, como um cartucho de urina ou uma câmara para fezes. A ablute_ foi concebida como uma sanita completa, de dimensões domésticas, que combina medição de biomarcadores urinários por bioFET, análise fecal em desenvolvimento e sensores no assento para ECG, PPG, peso e temperatura, e que também lava a bacia e o assento com cerca de 0,5 litros de água.",
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
        a: "Menos de 1 litro de água por lavagem: cerca de 0,5 litros por lavagem completa, medidos com contador numa unidade em utilização pública intensiva no Fórum Braga, contra cerca de 6 litros numa descarga completa convencional, o que representa mais de 90% menos água.",
      },
      {
        q: "Como sabe a sanita quando precisa de ser limpa?",
        a: "A sanita ablute_ deteta se está suja ou limpa.",
      },
      {
        q: "Qual é a diferença entre uma sanita que faz descarga e uma que lava?",
        a: "A descarga faz passar água pela bacia; a lavagem remove a sujidade das superfícies. Em muitas sanitas descritas como autolimpantes, a limpeza resulta da descarga ou de um enxaguamento da bacia. A sanita ablute_ deteta se a bacia e o assento estão sujos, lava ambos e termina quando deteta que estão limpos.",
      },
      {
        q: "A sanita ablute_ tem dimensões domésticas normais?",
        a: "Sim. Foi concebida para habitações, com 47 × 29,5 × 41–51 cm (largura × profundidade × altura), com ligação de drenagem à parede ou ao chão.",
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
        a: "A ablute_ está também a desenvolver biossensores integrados que analisam a urina durante a utilização normal, sensores no assento (ECG, PPG, peso corporal, temperatura) e análise fecal. Veja a secção Saúde do site.",
      },
    ],
  },
];

export const seoPages: Record<PageLang, SeoPage[]> = { en, pt, fr, de, it, ar };

export function getSeoPage(lang: PageLang, slug: SeoPage["slug"]): SeoPage {
  return seoPages[lang].find((p) => p.slug === slug)!;
}
