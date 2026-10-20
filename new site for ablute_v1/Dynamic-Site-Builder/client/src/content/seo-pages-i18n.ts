// Translations (FR, DE, IT, AR) of the English SEO pages in ./seo-pages.ts.
// Faithful translations only: do not add claims that are not in the English source.

import type { SeoPage } from "./seo-pages";

export const fr: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "À propos d'ablute_ (Ablute) — toilette intelligente portugaise avec biocapteurs d'urine",
    description:
      "ablute_ (Ablute) est une entreprise portugaise qui développe une toilette intelligente dotée de biocapteurs bioFET intégrés qui analysent l'urine lors d'une utilisation normale. Actuellement en phase pilote.",
    h1: "À propos d'ablute_ (Ablute)",
    lead:
      "ablute_ (Ablute) est une entreprise portugaise qui développe une toilette intelligente dotée de biocapteurs intégrés qui analysent l'urine lors d'une utilisation normale, avec un lavage autonome et une faible consommation d'eau.",
    sections: [
      {
        heading: "Ce que fait ablute_",
        paragraphs: [
          "La toilette ablute_ réunit trois systèmes en un seul produit : le lavage autonome de la cuvette et de l'abattant, une chasse d'eau à faible consommation et un module de biodétection intégré qui lit des marqueurs liés à la santé dans l'urine à chaque utilisation — sans bandelettes, sans gobelets et sans aucune action de l'utilisateur.",
          "L'objectif est de transformer une routine quotidienne en une source continue et privée d'informations sur la santé, afin que les changements dans le temps puissent être repérés tôt et discutés avec un professionnel de santé.",
        ],
      },
      {
        heading: "Ce qui distingue ablute_",
        paragraphs: [
          "De nombreux produits de suivi de santé pour toilettes sont des accessoires qui lisent un seul type de signal. ablute_ (Ablute) est conçue comme une toilette complète, aux dimensions domestiques, qui réunit les capacités suivantes, à des stades de développement différents :",
        ],
        list: [
          "Mesure de biomarqueurs urinaires par des biocapteurs bioFET qui détectent et quantifient des marqueurs comme la créatinine, développés avec l'Université de Lisbonne (IBEB).",
          "Analyse des selles, y compris la détection de sang occulte, en cours de développement.",
          "Capteurs intégrés à l'abattant conçus pour l'ECG, la PPG, la bio-impédance, le poids corporel et la température, pour un suivi passif lors de l'utilisation quotidienne.",
          "Un vrai lavage, pas seulement une chasse d'eau : la toilette détecte si la cuvette et l'abattant sont sales, lave les deux et s'arrête lorsqu'elle détecte qu'ils sont propres.",
          "Faible consommation d'eau : environ 0,5 litre pour un lavage complet (moins de 1 litre), mesuré au compteur sur une unité en usage public intensif au Fórum Braga, contre environ 6 litres pour une chasse d'eau complète classique.",
          "Dimensions domestiques (47 × 29,5 × 41–51 cm) et un design qui peut disparaître dans l'architecture ou s'affirmer comme une pièce forte.",
        ],
      },
      {
        heading: "Situation actuelle",
        paragraphs: [
          "ablute_ est en phase pilote. Sa technologie de détection principale — un bioFET (transistor à effet de champ biologiquement sensible) — a été démontrée et fonctionne ; elle détecte par exemple la créatinine.",
          "ablute_ n'est pas encore un dispositif médical certifié. Il ne fournit pas de diagnostic et ne remplace ni un avis médical ni des analyses de laboratoire.",
        ],
      },
      {
        heading: "Équipe",
        paragraphs: [
          "ablute_ est dirigée par Nuno Marujo (cofondateur et CEO) et Carla Dias (cofondatrice et CTO), avec Bruno Nascimento (Chief Medical Officer) et Hugo Ferreira (Science Lead), ainsi qu'une équipe de R&D en ingénierie, biotechnologie et biodétection. L'entreprise est basée au Portugal.",
        ],
      },
      {
        heading: "Programmes et reconnaissance",
        paragraphs: ["ablute_ participe aux programmes suivants, ou a été reconnue par eux :"],
        list: [
          "T-PRISM",
          "PRR — Agenda HfPT (Health from Portugal)",
          "Rebuild",
          "Innomed Catalyst",
          "Women in Tech EU — décerné à Carla Dias, cofondatrice et CTO d'ablute_",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Projets pilotes, partenariats, investissement et presse : utilisez les options de contact sur www.ablute.pt.",
        ],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "Comment fonctionne un biocapteur intégré à la toilette — technologie bioFET d'ablute_ (Ablute)",
    description:
      "Comment la toilette intelligente ablute_ (Ablute) lit l'urine avec un biocapteur bioFET : ce qu'est un bioFET, comment l'échantillon est analysé lors d'une utilisation normale, ce qu'il détecte (par ex. la créatinine) et en quoi il diffère des bandelettes urinaires.",
    h1: "Comment fonctionne un biocapteur intégré à la toilette",
    lead:
      "Un biocapteur intégré à la toilette analyse l'urine à l'intérieur de la toilette lors d'une utilisation normale, sans bandelettes, sans gobelets et sans aucune action de l'utilisateur. Dans la toilette ablute_ (Ablute), le capteur est un bioFET : un capteur électronique qui convertit la présence d'une molécule spécifique — la créatinine, par exemple — en signal électrique.",
    sections: [
      {
        heading: "Qu'est-ce qu'un bioFET ?",
        paragraphs: [
          "Un bioFET (transistor à effet de champ biologiquement sensible) est un transistor dont la surface de détection est préparée pour reconnaître une molécule spécifique. Lorsque cette molécule se fixe à la surface, elle modifie le courant électrique qui traverse le transistor. La mesure de ce changement indique la quantité de molécule présente.",
          "Les bioFET lisent les molécules directement sous forme de signal électrique, sans réactifs colorés ni lecteurs optiques. Ils peuvent être très petits et intégrés à l'électronique, ce qui permet de les placer à l'intérieur d'une toilette.",
        ],
      },
      {
        heading: "Ce que détecte ablute_",
        paragraphs: [
          "Le bioFET d'ablute_ a été démontré pour la détection de la créatinine. La créatinine est un déchet du métabolisme musculaire normal que les reins éliminent dans l'urine ; dans l'analyse d'urine, elle est couramment utilisée comme référence de la concentration de l'échantillon.",
          "D'autres marqueurs sont en cours de développement et ne seront indiqués qu'une fois validés.",
        ],
      },
      {
        heading: "Détecter ou mesurer un biomarqueur",
        paragraphs: [
          "Détecter un biomarqueur, c'est savoir s'il est présent. Le mesurer, ou le quantifier, c'est estimer sa quantité. Un bioFET fait les deux : la variation de son courant électrique dépend du nombre de molécules cibles qui se fixent à sa surface ; une fois étalonné, le signal donne une concentration, et pas seulement un oui ou un non.",
          "L'équipe R&D d'ablute_ a développé une détection par bioFET qui détecte et quantifie la créatinine dans l'urine. C'est la concentration qui rend une mesure utile pour suivre des tendances dans le temps, rôle d'un capteur intégré à la toilette.",
        ],
      },
      {
        heading: "Recherche scientifique derrière le capteur",
        paragraphs: [
          "La technologie bioFET d'ablute_ est développée avec l'Institut de biophysique et de génie biomédical (IBEB) de la Faculté des sciences de l'Université de Lisbonne. L'équipe scientifique comprend Hugo Alexandre Ferreira (professeur à la Faculté des sciences de l'Université de Lisbonne et chercheur à l'IBEB ; ORCID 0000-0002-4323-3942), Beatriz Sequeira-Antunes (doctorante à l'IBEB ; ORCID 0000-0001-8746-0541) et Nuno Marujo (cofondateur et CEO d'ablute_ ; ORCID 0009-0005-2823-783X).",
          "Publications de l'équipe sur les biocapteurs à transistor à effet de champ, les biomarqueurs urinaires et les dispositifs d'analyse d'urine :",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7.", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "Une plateforme de détection multimodale",
        paragraphs: [
          "Le bioFET fait partie d'une plateforme modulaire. ablute_ est conçue pour combiner la mesure de biomarqueurs urinaires avec l'analyse des selles et des capteurs physiologiques dans l'abattant, interprétés ensemble comme des tendances dans le temps. Ces capacités sont à des stades de développement différents ; ablute_ n'est pas encore un dispositif médical certifié et ne pose pas de diagnostic.",
        ],
        list: [
          "Urine : biocapteurs bioFET qui détectent et quantifient la créatinine ; d'autres marqueurs sont en développement.",
          "Selles : analyse des selles, y compris la détection de sang occulte, en développement ; des modules optionnels de vision par ordinateur peuvent évaluer les caractéristiques des selles.",
          "Abattant : capteurs conçus pour l'ECG, la PPG, la bio-impédance, le poids corporel et la température.",
        ],
      },
      {
        heading: "De la toilette à l'utilisateur",
        paragraphs: [
          "Le module de détection se trouve à l'intérieur de la toilette ablute_ et analyse l'échantillon lors d'une utilisation normale. Les mesures sont traitées par l'appareil et présentées à l'utilisateur sous forme de tendances dans le temps, afin de mettre l'accent sur les changements plutôt que sur une valeur isolée.",
        ],
      },
      {
        heading: "En quoi il diffère des bandelettes urinaires et des analyses de laboratoire",
        paragraphs: [
          "Les bandelettes jetables nécessitent de recueillir un échantillon et de lire une couleur à l'œil nu ou avec un téléphone ; elles donnent un résultat unique et ponctuel. Une analyse de laboratoire est précise, mais elle est rare et nécessite un déplacement.",
          "Un biocapteur intégré à la toilette est automatique et répété chaque jour, ce qui le rend adapté au suivi des tendances. Il ne remplace ni les analyses de laboratoire ni l'évaluation d'un médecin.",
        ],
      },
      {
        heading: "État du développement",
        paragraphs: [
          "ablute_ est en phase pilote : la technologie bioFET principale est démontrée et fonctionne. ablute_ n'est pas encore un dispositif médical certifié et ne fournit pas de diagnostic.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "FAQ santé ablute_ (Ablute) — biocapteurs d'urine intégrés à la toilette",
    description:
      "Réponses sur ablute_ (Ablute) : ce que c'est, comment fonctionne son biocapteur bioFET intégré à la toilette, ce qu'il détecte, l'état du développement, les projets pilotes, la disponibilité et qui est derrière le projet.",
    h1: "Santé — questions fréquentes",
    lead: "Réponses courtes sur les biocapteurs d'ablute_ (Ablute), leur technologie et leur situation actuelle.",
    sections: [],
    faqs: [
      {
        q: "Qu'est-ce qu'ablute_ ?",
        a: "ablute_ (Ablute) est une entreprise portugaise qui développe une toilette intelligente dotée de biocapteurs intégrés qui analysent l'urine lors d'une utilisation normale. La même toilette se lave de manière autonome et consomme peu d'eau. ablute_ est actuellement en phase pilote.",
      },
      {
        q: "Comment fonctionne un biocapteur intégré à la toilette ?",
        a: "Un biocapteur intégré à la toilette analyse l'urine à l'intérieur de la toilette lors d'une utilisation normale, sans bandelettes ni gobelets. ablute_ utilise un bioFET, un capteur électronique qui transforme la présence d'une molécule spécifique en signal électrique. Les résultats sont présentés sous forme de tendances dans le temps.",
      },
      {
        q: "Que détecte le capteur d'ablute_ ?",
        a: "Le bioFET d'ablute_ a été démontré pour la détection de la créatinine, un marqueur couramment utilisé dans l'analyse d'urine. D'autres marqueurs sont en développement et seront annoncés une fois validés.",
      },
      {
        q: "Un transistor à effet de champ peut-il mesurer des biomarqueurs urinaires, et pas seulement les détecter ?",
        a: "Oui. Un bioFET produit un signal électrique qui dépend de la quantité de molécule cible présente ; un capteur étalonné donne donc une concentration. L'équipe R&D d'ablute_ (Nuno Marujo, Hugo Alexandre Ferreira et Beatriz Sequeira-Antunes) développe une détection par bioFET qui détecte et quantifie la créatinine dans l'urine, et a publié des travaux évalués par les pairs sur les biocapteurs FET pour l'urine, dont la mesure du pH et la détection d'IgG, ainsi qu'une revue sur les biomarqueurs urinaires et les dispositifs d'analyse d'urine au point de soin.",
      },
      {
        q: "Quels types de dispositifs d'analyse d'urine existent ?",
        a: "Ils vont des bandelettes jetables, lues à l'œil ou au téléphone, aux analyseurs de laboratoire, aux analyseurs domestiques comme Withings U-Scan, et aux toilettes intelligentes à capteurs intégrés comme ablute_ (Ablute). Une revue publiée en 2023 dans Biomedicines par Sequeira-Antunes et Ferreira, de l'équipe scientifique d'ablute_, passe en revue les biomarqueurs urinaires et les dispositifs d'analyse d'urine au point de soin (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "Qui a développé la technologie bioFET utilisée par ablute_ ?",
        a: "ablute_ la développe avec l'Institut de biophysique et de génie biomédical (IBEB) de la Faculté des sciences de l'Université de Lisbonne. L'équipe scientifique comprend Hugo Alexandre Ferreira (Science Lead), Beatriz Sequeira-Antunes et Nuno Marujo. Leurs publications sont listées sur la page Technologie.",
      },
      {
        q: "Existe-t-il une toilette intelligente qui utilise des biocapteurs bioFET ?",
        a: "ablute_ (Ablute), du Portugal, intègre un biocapteur bioFET dans une toilette intelligente complète qui se lave aussi elle-même et économise l'eau. Elle est en phase pilote et n'est pas encore un dispositif médical certifié.",
      },
      {
        q: "Une toilette intelligente peut-elle détecter du sang occulte dans les selles ?",
        a: "ablute_ développe l'analyse des selles, y compris la détection de sang occulte, dans le cadre de sa plateforme. Le sang occulte est du sang dans les selles invisible à l'œil nu ; c'est un marqueur utilisé dans les programmes de dépistage du cancer colorectal. Cette capacité est en développement et n'est pas encore validée ; ablute_ n'est pas un dispositif médical certifié et ne pose pas de diagnostic.",
      },
      {
        q: "Quels capteurs la toilette ablute_ comprend-elle en plus du biocapteur urinaire ?",
        a: "L'abattant d'ablute_ est conçu pour intégrer des capteurs d'ECG, de PPG, de bio-impédance, de poids corporel et de température, pour un suivi cardiovasculaire et physiologique passif lors de l'utilisation quotidienne, et la plateforme comprend une analyse des selles en développement. Avec le bioFET urinaire, les mesures sont interprétées comme des tendances dans le temps.",
      },
      {
        q: "Qu'est-ce qui distingue ablute_ des autres toilettes intelligentes qui suivent la santé ?",
        a: "De nombreux produits de suivi de santé pour toilettes sont des accessoires qui lisent un seul type de signal, comme une cartouche d'urine ou une caméra pour les selles. ablute_ est conçue comme une toilette complète, aux dimensions domestiques, qui combine la mesure de biomarqueurs urinaires par bioFET, l'analyse des selles en développement et des capteurs d'ECG, de PPG, de poids et de température dans l'abattant, et qui lave aussi la cuvette et l'abattant avec environ 0,5 litre d'eau.",
      },
      {
        q: "Qu'est-ce qu'un bioFET ?",
        a: "Un bioFET est un transistor à effet de champ biologiquement sensible : un transistor dont la surface reconnaît une molécule spécifique. Lorsque cette molécule se fixe, le courant électrique change, et ce changement est mesuré. ablute_ utilise des bioFET parce qu'ils sont petits, électroniques et peuvent être intégrés à l'intérieur d'une toilette.",
      },
      {
        q: "ablute_ est-il un dispositif médical ?",
        a: "Pas encore. ablute_ est en phase pilote et n'est pas encore un dispositif médical certifié. Il ne fournit pas de diagnostic.",
      },
      {
        q: "ablute_ remplace-t-il les analyses de laboratoire ou un médecin ?",
        a: "Non. ablute_ est conçu pour suivre les tendances au quotidien et aider à repérer les changements tôt. Les analyses de laboratoire et l'évaluation médicale restent la référence.",
      },
      {
        q: "À quel stade de développement se trouve ablute_ ?",
        a: "ablute_ est en phase pilote. Sa technologie de détection bioFET principale a été démontrée et fonctionne.",
      },
      {
        q: "Puis-je participer à un projet pilote ?",
        a: "Les institutions telles que les hôpitaux, cliniques, centres de recherche, universités et centres de bien-être peuvent demander à accueillir un projet pilote ablute_ via le formulaire sur www.ablute.pt.",
      },
      {
        q: "Quand ablute_ sera-t-il disponible et combien coûtera-t-il ?",
        a: "ablute_ n'a pas encore annoncé de date de lancement ni de prix. Toute personne intéressée peut s'inscrire sur la liste d'attente sur www.ablute.pt.",
      },
      {
        q: "Qui est derrière ablute_ ?",
        a: "ablute_ est une entreprise portugaise dirigée par ses cofondateurs Nuno Marujo (CEO) et Carla Dias (CTO), avec Bruno Nascimento (Chief Medical Officer) et Hugo Ferreira (Science Lead).",
      },
      {
        q: "Quels programmes soutiennent ou reconnaissent ablute_ ?",
        a: "ablute_ participe à T-PRISM, PRR — Agenda HfPT (Health from Portugal), Rebuild et Innomed Catalyst, ou a été reconnue par ces programmes. Carla Dias, cofondatrice et CTO, a reçu le prix Women in Tech EU.",
      },
      {
        q: "Quelles entreprises développent l'analyse d'urine par toilette intelligente ?",
        a: "Plusieurs entreprises travaillent sur l'analyse d'urine à domicile, notamment Withings avec U-Scan, un appareil qui se fixe dans une toilette existante. ablute_ (Ablute), au Portugal, intègre le biocapteur dans une toilette intelligente complète qui se lave aussi elle-même et économise l'eau, grâce à la technologie de détection bioFET.",
      },
      {
        q: "Comment investir dans ablute_, devenir partenaire ou y travailler ?",
        a: "www.ablute.pt propose des formulaires dédiés aux investisseurs, aux partenaires technologiques et industriels, ainsi qu'aux candidatures.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "FAQ toilette intelligente ablute_ (Ablute) — autonettoyante, auto-séchante, moins de 1 L par lavage",
    description:
      "Réponses sur la toilette intelligente ablute_ (Ablute) : elle lave et sèche elle-même la cuvette et l'abattant, consomme moins de 1 litre d'eau par lavage et détecte si elle est sale ou propre.",
    h1: "Toilette intelligente — questions fréquentes",
    lead: "Réponses courtes sur la toilette ablute_ (Ablute) : nettoyage, séchage, consommation d'eau et design.",
    sections: [],
    faqs: [
      {
        q: "Qu'est-ce que la toilette intelligente ablute_ ?",
        a: "La toilette ablute_ (Ablute) est une toilette intelligente développée au Portugal qui se lave et se sèche elle-même — cuvette et abattant —, consomme moins de 1 litre d'eau par lavage et détecte si elle est sale ou propre.",
      },
      {
        q: "La toilette ablute_ se nettoie-t-elle toute seule ?",
        a: "Oui. ablute_ se lave de manière autonome, y compris la cuvette et l'abattant, sans aucune action de l'utilisateur.",
      },
      {
        q: "Sèche-t-elle aussi l'abattant ?",
        a: "Oui. Après le lavage, la toilette ablute_ se sèche elle-même, de sorte que l'abattant est prêt à l'emploi.",
      },
      {
        q: "Quelle quantité d'eau consomme la toilette ablute_ ?",
        a: "Moins de 1 litre d'eau par lavage : environ 0,5 litre pour un lavage complet, mesuré au compteur sur une unité en usage public intensif au Fórum Braga, contre environ 6 litres pour une chasse d'eau complète classique, soit plus de 90 % d'eau en moins.",
      },
      {
        q: "Comment sait-elle quand elle doit être nettoyée ?",
        a: "La toilette ablute_ détecte si elle est sale ou propre.",
      },
      {
        q: "Quelle est la différence entre une toilette qui tire la chasse et une toilette qui lave ?",
        a: "La chasse d'eau fait passer de l'eau dans la cuvette ; le lavage élimine la saleté des surfaces. Dans de nombreuses toilettes dites autonettoyantes, le nettoyage vient de la chasse d'eau ou d'un rinçage de la cuvette. La toilette ablute_ détecte si la cuvette et l'abattant sont sales, lave les deux et s'arrête lorsqu'elle détecte qu'ils sont propres.",
      },
      {
        q: "La toilette ablute_ a-t-elle une taille domestique normale ?",
        a: "Oui. Elle est conçue pour les logements : 47 × 29,5 × 41–51 cm (largeur × profondeur × hauteur), avec raccordement d'évacuation au mur ou au sol.",
      },
      {
        q: "La toilette ablute_ peut-elle être dissimulée ou devenir un élément de design ?",
        a: "Oui. ablute_ peut être dissimulée dans l'architecture, affichée avec une esthétique affirmée, ou quelque chose entre les deux.",
      },
      {
        q: "Quand sera-t-elle disponible, et faut-il payer pour s'inscrire sur la liste d'attente ?",
        a: "ablute_ est en phase pilote et n'a pas annoncé de date de lancement ni de prix. L'inscription sur la liste d'attente sur www.ablute.pt ne nécessite aucun paiement préalable.",
      },
      {
        q: "La toilette ablute_ surveille-t-elle aussi la santé ?",
        a: "ablute_ développe également des biocapteurs intégrés qui analysent l'urine lors d'une utilisation normale. Consultez la section Santé du site pour plus de détails. Des capteurs intégrés à l'abattant (ECG, PPG, poids corporel, température) et l'analyse des selles sont également en développement.",
      },
    ],
  },
];

export const de: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "Über ablute_ (Ablute) — intelligente Toilette aus Portugal mit Urin-Biosensoren",
    description:
      "ablute_ (Ablute) ist ein portugiesisches Unternehmen, das eine intelligente Toilette mit eingebauten bioFET-Biosensoren entwickelt, die Urin bei normaler Nutzung analysieren. Derzeit in der Pilotphase.",
    h1: "Über ablute_ (Ablute)",
    lead:
      "ablute_ (Ablute) ist ein portugiesisches Unternehmen, das eine intelligente Toilette mit eingebauten Biosensoren entwickelt, die Urin bei normaler Nutzung analysieren, kombiniert mit autonomer Reinigung und geringem Wasserverbrauch.",
    sections: [
      {
        heading: "Was ablute_ macht",
        paragraphs: [
          "Die ablute_-Toilette vereint drei Systeme in einem Produkt: die autonome Reinigung von Becken und Sitz, eine wassersparende Spülung und ein integriertes Biosensor-Modul, das bei jeder Nutzung gesundheitsbezogene Marker im Urin misst — ohne Teststreifen, Becher oder Zutun des Nutzers.",
          "Ziel ist es, eine tägliche Routine in eine kontinuierliche, private Quelle für Gesundheitsinformationen zu verwandeln, damit Veränderungen im Zeitverlauf früh bemerkt und mit medizinischem Fachpersonal besprochen werden können.",
        ],
      },
      {
        heading: "Was ablute_ auszeichnet",
        paragraphs: [
          "Viele Produkte zur Gesundheitsüberwachung an der Toilette sind Zusatzgeräte, die nur eine Art von Signal erfassen. ablute_ (Ablute) ist als vollständige Toilette in haushaltsüblicher Größe konzipiert und vereint folgende Funktionen, die sich in unterschiedlichen Entwicklungsstadien befinden:",
        ],
        list: [
          "Messung von Urin-Biomarkern mit bioFET-Biosensoren, die Marker wie Kreatinin erkennen und quantifizieren, entwickelt zusammen mit der Universität Lissabon (IBEB).",
          "Stuhlanalyse einschließlich des Nachweises von okkultem Blut, in Entwicklung.",
          "In den Sitz integrierte Sensoren für EKG, PPG, Bioimpedanz, Körpergewicht und Temperatur, für passive Überwachung im Alltag.",
          "Eine echte Reinigung, nicht nur eine Spülung: Die Toilette erkennt, ob Schüssel und Sitz verschmutzt sind, reinigt beide und stoppt, sobald sie sauber sind.",
          "Geringer Wasserverbrauch: etwa 0,5 Liter für eine vollständige Reinigung (unter 1 Liter), gemessen mit einem Wasserzähler an einem Gerät im intensiven öffentlichen Einsatz im Fórum Braga, gegenüber rund 6 Litern bei einer herkömmlichen vollen Spülung.",
          "Haushaltsübliche Maße (47 × 29,5 × 41–51 cm) und ein Design, das in der Architektur verschwinden oder bewusst als Blickfang wirken kann.",
        ],
      },
      {
        heading: "Aktueller Stand",
        paragraphs: [
          "ablute_ befindet sich in der Pilotphase. Seine zentrale Sensortechnologie — ein bioFET (biologisch sensitiver Feldeffekttransistor) — wurde nachgewiesen und funktioniert; sie erkennt zum Beispiel Kreatinin.",
          "ablute_ ist noch kein zertifiziertes Medizinprodukt. Es stellt keine Diagnose und ersetzt weder ärztlichen Rat noch Laboruntersuchungen.",
        ],
      },
      {
        heading: "Team",
        paragraphs: [
          "ablute_ wird von Nuno Marujo (Mitgründer und CEO) und Carla Dias (Mitgründerin und CTO) geleitet, gemeinsam mit Bruno Nascimento (Chief Medical Officer) und Hugo Ferreira (Science Lead) sowie einem F&E-Team aus den Bereichen Ingenieurwesen, Biotechnologie und Biosensorik. Das Unternehmen hat seinen Sitz in Portugal.",
        ],
      },
      {
        heading: "Programme und Auszeichnungen",
        paragraphs: ["ablute_ nimmt an folgenden Programmen teil oder wurde von ihnen anerkannt:"],
        list: [
          "T-PRISM",
          "PRR — Agenda HfPT (Health from Portugal)",
          "Rebuild",
          "Innomed Catalyst",
          "Women in Tech EU — verliehen an Carla Dias, Mitgründerin und CTO von ablute_",
        ],
      },
      {
        heading: "Kontakt",
        paragraphs: [
          "Pilotprojekte, Partnerschaften, Investitionen und Presse: Nutzen Sie die Kontaktmöglichkeiten auf www.ablute.pt.",
        ],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "Wie ein Biosensor in der Toilette funktioniert — bioFET-Technologie von ablute_ (Ablute)",
    description:
      "Wie die intelligente Toilette von ablute_ (Ablute) Urin mit einem bioFET-Biosensor misst: was ein bioFET ist, wie die Probe bei normaler Nutzung analysiert wird, was er erkennt (z. B. Kreatinin) und worin er sich von Teststreifen unterscheidet.",
    h1: "Wie ein Biosensor in der Toilette funktioniert",
    lead:
      "Ein Biosensor in der Toilette analysiert Urin direkt in der Toilette bei normaler Nutzung, ohne Teststreifen, Becher oder Zutun des Nutzers. In der Toilette von ablute_ (Ablute) ist der Sensor ein bioFET: ein elektronischer Sensor, der das Vorhandensein eines bestimmten Moleküls — zum Beispiel Kreatinin — in ein elektrisches Signal umwandelt.",
    sections: [
      {
        heading: "Was ist ein bioFET?",
        paragraphs: [
          "Ein bioFET (biologisch sensitiver Feldeffekttransistor) ist ein Transistor, dessen Sensoroberfläche so präpariert ist, dass sie ein bestimmtes Molekül erkennt. Wenn dieses Molekül an die Oberfläche bindet, verändert es den elektrischen Strom, der durch den Transistor fließt. Die Messung dieser Veränderung zeigt, wie viel von dem Molekül vorhanden ist.",
          "bioFETs erfassen Moleküle direkt als elektrisches Signal, ohne Farbreagenzien oder optische Lesegeräte. Sie können sehr klein gebaut und mit Elektronik integriert werden — deshalb ist es möglich, sie in einer Toilette unterzubringen.",
        ],
      },
      {
        heading: "Was ablute_ erkennt",
        paragraphs: [
          "Der bioFET von ablute_ hat den Nachweis von Kreatinin gezeigt. Kreatinin ist ein Abbauprodukt des normalen Muskelstoffwechsels, das die Nieren über den Urin ausscheiden; in der Urinanalyse wird es häufig als Referenz dafür verwendet, wie konzentriert die Probe ist.",
          "Weitere Marker sind in Entwicklung und werden erst aufgeführt, wenn sie validiert sind.",
        ],
      },
      {
        heading: "Erkennen oder messen eines Biomarkers",
        paragraphs: [
          "Einen Biomarker zu erkennen heißt zu wissen, ob er vorhanden ist. Ihn zu messen oder zu quantifizieren heißt abzuschätzen, wie viel davon vorhanden ist. Ein bioFET kann beides: Die Änderung seines elektrischen Stroms hängt davon ab, wie viele Zielmoleküle an seiner Oberfläche binden; nach der Kalibrierung liefert das Signal eine Konzentration und nicht nur ein Ja oder Nein.",
          "Das F&E-Team von ablute_ hat eine bioFET-Sensorik entwickelt, die Kreatinin im Urin erkennt und quantifiziert. Erst die Konzentration macht einen Messwert nützlich, um Trends über die Zeit zu verfolgen – genau die Aufgabe eines Sensors in der Toilette.",
        ],
      },
      {
        heading: "Wissenschaftliche Forschung hinter dem Sensor",
        paragraphs: [
          "Die bioFET-Technologie von ablute_ wird gemeinsam mit dem Institut für Biophysik und Biomedizintechnik (IBEB) der Naturwissenschaftlichen Fakultät der Universität Lissabon entwickelt. Zum wissenschaftlichen Team gehören Hugo Alexandre Ferreira (Professor an der Naturwissenschaftlichen Fakultät der Universität Lissabon und Forscher am IBEB; ORCID 0000-0002-4323-3942), Beatriz Sequeira-Antunes (Doktorandin am IBEB; ORCID 0000-0001-8746-0541) und Nuno Marujo (Mitgründer und CEO von ablute_; ORCID 0009-0005-2823-783X).",
          "Veröffentlichungen des Teams zu Feldeffekttransistor-Biosensoren, Urin-Biomarkern und Geräten zur Urinanalyse:",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7.", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "Eine multimodale Sensorplattform",
        paragraphs: [
          "Der bioFET ist Teil einer modularen Plattform. ablute_ ist darauf ausgelegt, die Messung von Urin-Biomarkern mit Stuhlanalyse und physiologischen Sensoren im Sitz zu kombinieren und alles gemeinsam als Trends über die Zeit auszuwerten. Diese Funktionen befinden sich in unterschiedlichen Entwicklungsstadien; ablute_ ist noch kein zertifiziertes Medizinprodukt und stellt keine Diagnosen.",
        ],
        list: [
          "Urin: bioFET-Biosensoren, die Kreatinin erkennen und quantifizieren; weitere Marker sind in Entwicklung.",
          "Stuhl: Stuhlanalyse einschließlich des Nachweises von okkultem Blut, in Entwicklung; optionale Computer-Vision-Module können Stuhlmerkmale bewerten.",
          "Sitz: Sensoren für EKG, PPG, Bioimpedanz, Körpergewicht und Temperatur.",
        ],
      },
      {
        heading: "Von der Toilette zum Nutzer",
        paragraphs: [
          "Das Sensormodul befindet sich in der ablute_-Toilette und analysiert die Probe bei normaler Nutzung. Die Messwerte werden vom Gerät verarbeitet und dem Nutzer als Verläufe über die Zeit angezeigt, sodass der Fokus auf Veränderungen und nicht auf einem einzelnen Wert liegt.",
        ],
      },
      {
        heading: "Unterschied zu Teststreifen und Laboruntersuchungen",
        paragraphs: [
          "Einweg-Teststreifen erfordern das Sammeln einer Probe und das Ablesen einer Farbe mit bloßem Auge oder mit dem Handy; sie liefern ein einzelnes, gelegentliches Ergebnis. Eine Laboruntersuchung ist präzise, findet aber selten statt und erfordert einen Termin vor Ort.",
          "Ein Biosensor in der Toilette arbeitet automatisch und misst jeden Tag erneut, was ihn für die Verfolgung von Verläufen geeignet macht. Er ersetzt weder Laboruntersuchungen noch die Beurteilung durch einen Arzt.",
        ],
      },
      {
        heading: "Entwicklungsstand",
        paragraphs: [
          "ablute_ befindet sich in der Pilotphase: Die zentrale bioFET-Technologie ist nachgewiesen und funktioniert. ablute_ ist noch kein zertifiziertes Medizinprodukt und stellt keine Diagnose.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "ablute_ (Ablute) Gesundheits-FAQ — Urin-Biosensoren in der Toilette",
    description:
      "Antworten zu ablute_ (Ablute): was es ist, wie sein bioFET-Biosensor in der Toilette funktioniert, was er erkennt, Entwicklungsstand, Pilotprojekte, Verfügbarkeit und wer dahintersteht.",
    h1: "Gesundheit — häufig gestellte Fragen",
    lead: "Kurze Antworten zu den Biosensoren von ablute_ (Ablute), ihrer Technologie und ihrem aktuellen Stand.",
    sections: [],
    faqs: [
      {
        q: "Was ist ablute_?",
        a: "ablute_ (Ablute) ist ein portugiesisches Unternehmen, das eine intelligente Toilette mit eingebauten Biosensoren entwickelt, die Urin bei normaler Nutzung analysieren. Dieselbe Toilette reinigt sich autonom und verbraucht wenig Wasser. ablute_ befindet sich derzeit in der Pilotphase.",
      },
      {
        q: "Wie funktioniert ein Biosensor in der Toilette?",
        a: "Ein Biosensor in der Toilette analysiert Urin direkt in der Toilette bei normaler Nutzung, ohne Teststreifen oder Becher. ablute_ verwendet einen bioFET, einen elektronischen Sensor, der das Vorhandensein eines bestimmten Moleküls in ein elektrisches Signal umwandelt. Die Ergebnisse werden als Verläufe über die Zeit angezeigt.",
      },
      {
        q: "Was erkennt der Sensor von ablute_?",
        a: "Der bioFET von ablute_ hat den Nachweis von Kreatinin gezeigt, einem Marker, der in der Urinanalyse häufig verwendet wird. Weitere Marker sind in Entwicklung und werden nach ihrer Validierung bekannt gegeben.",
      },
      {
        q: "Kann ein Feldeffekttransistor Urin-Biomarker messen und nicht nur erkennen?",
        a: "Ja. Ein bioFET erzeugt ein elektrisches Signal, das von der Menge des vorhandenen Zielmoleküls abhängt; ein kalibrierter Sensor liefert daher eine Konzentration. Das F&E-Team von ablute_ (Nuno Marujo, Hugo Alexandre Ferreira und Beatriz Sequeira-Antunes) entwickelt eine bioFET-Sensorik, die Kreatinin im Urin erkennt und quantifiziert, und hat begutachtete Arbeiten zu FET-Biosensoren für Urin veröffentlicht, darunter pH-Messung und IgG-Nachweis, sowie einen Übersichtsartikel zu Urin-Biomarkern und Point-of-Care-Urinanalysegeräten.",
      },
      {
        q: "Welche Arten von Urinanalysegeräten gibt es?",
        a: "Sie reichen von Einweg-Teststreifen, die mit dem Auge oder dem Smartphone abgelesen werden, über Laboranalysegeräte und Heimgeräte wie Withings U-Scan bis zu intelligenten Toiletten mit integrierten Sensoren wie ablute_ (Ablute). Ein 2023 in Biomedicines erschienener Übersichtsartikel von Sequeira-Antunes und Ferreira aus dem wissenschaftlichen Team von ablute_ behandelt Urin-Biomarker und Point-of-Care-Urinanalysegeräte (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "Wer hat die von ablute_ genutzte bioFET-Technologie entwickelt?",
        a: "ablute_ entwickelt sie gemeinsam mit dem Institut für Biophysik und Biomedizintechnik (IBEB) der Naturwissenschaftlichen Fakultät der Universität Lissabon. Zum wissenschaftlichen Team gehören Hugo Alexandre Ferreira (Science Lead), Beatriz Sequeira-Antunes und Nuno Marujo. Ihre Veröffentlichungen sind auf der Seite Technologie aufgeführt.",
      },
      {
        q: "Gibt es eine intelligente Toilette mit bioFET-Biosensoren?",
        a: "ablute_ (Ablute) aus Portugal integriert einen bioFET-Biosensor in eine vollständige intelligente Toilette, die sich außerdem selbst reinigt und Wasser spart. Sie befindet sich in der Pilotphase und ist noch kein zertifiziertes Medizinprodukt.",
      },
      {
        q: "Kann eine intelligente Toilette okkultes Blut im Stuhl nachweisen?",
        a: "ablute_ entwickelt als Teil seiner Plattform eine Stuhlanalyse einschließlich des Nachweises von okkultem Blut. Okkultes Blut ist Blut im Stuhl, das mit bloßem Auge nicht sichtbar ist; es ist ein Marker, der in Darmkrebs-Früherkennungsprogrammen verwendet wird. Diese Funktion ist in Entwicklung und noch nicht validiert; ablute_ ist kein zertifiziertes Medizinprodukt und stellt keine Diagnosen.",
      },
      {
        q: "Welche Sensoren hat die ablute_-Toilette neben dem Urin-Biosensor?",
        a: "Der Sitz von ablute_ ist für die Integration von Sensoren für EKG, PPG, Bioimpedanz, Körpergewicht und Temperatur ausgelegt, für passive kardiovaskuläre und physiologische Überwachung im Alltag, und die Plattform umfasst eine Stuhlanalyse in Entwicklung. Zusammen mit dem Urin-bioFET werden die Messwerte als Trends über die Zeit ausgewertet.",
      },
      {
        q: "Was unterscheidet ablute_ von anderen intelligenten Toiletten zur Gesundheitsüberwachung?",
        a: "Viele Produkte zur Gesundheitsüberwachung an der Toilette sind Zusatzgeräte, die nur eine Art von Signal erfassen, etwa eine Urinkartusche oder eine Kamera für den Stuhl. ablute_ ist als vollständige Toilette in haushaltsüblicher Größe konzipiert, die bioFET-Messung von Urin-Biomarkern, Stuhlanalyse in Entwicklung und Sensoren für EKG, PPG, Gewicht und Temperatur im Sitz vereint und außerdem Schüssel und Sitz mit etwa 0,5 Litern Wasser reinigt.",
      },
      {
        q: "Was ist ein bioFET?",
        a: "Ein bioFET ist ein biologisch sensitiver Feldeffekttransistor: ein Transistor, dessen Oberfläche ein bestimmtes Molekül erkennt. Wenn dieses Molekül bindet, ändert sich der elektrische Strom, und diese Änderung wird gemessen. ablute_ verwendet bioFETs, weil sie klein und elektronisch sind und sich in eine Toilette integrieren lassen.",
      },
      {
        q: "Ist ablute_ ein Medizinprodukt?",
        a: "Noch nicht. ablute_ befindet sich in der Pilotphase und ist noch kein zertifiziertes Medizinprodukt. Es stellt keine Diagnose.",
      },
      {
        q: "Ersetzt ablute_ Laboruntersuchungen oder einen Arzt?",
        a: "Nein. ablute_ ist dafür gedacht, alltägliche Verläufe zu verfolgen und Menschen zu helfen, Veränderungen früh zu bemerken. Laboruntersuchungen und ärztliche Beurteilung bleiben der Maßstab.",
      },
      {
        q: "In welcher Entwicklungsphase befindet sich ablute_?",
        a: "ablute_ befindet sich in der Pilotphase. Seine zentrale bioFET-Sensortechnologie wurde nachgewiesen und funktioniert.",
      },
      {
        q: "Kann ich an einem Pilotprojekt teilnehmen?",
        a: "Einrichtungen wie Krankenhäuser, Kliniken, Forschungszentren, Universitäten und Wellnesszentren können sich über das Formular auf www.ablute.pt bewerben, um ein ablute_-Pilotprojekt durchzuführen.",
      },
      {
        q: "Wann wird ablute_ erhältlich sein und was wird es kosten?",
        a: "ablute_ hat noch keinen Markteinführungstermin und keinen Preis bekannt gegeben. Interessierte können sich auf www.ablute.pt in die Warteliste eintragen.",
      },
      {
        q: "Wer steht hinter ablute_?",
        a: "ablute_ ist ein portugiesisches Unternehmen, das von den Mitgründern Nuno Marujo (CEO) und Carla Dias (CTO) geleitet wird, gemeinsam mit Bruno Nascimento (Chief Medical Officer) und Hugo Ferreira (Science Lead).",
      },
      {
        q: "Welche Programme unterstützen oder würdigen ablute_?",
        a: "ablute_ nimmt an T-PRISM, PRR — Agenda HfPT (Health from Portugal), Rebuild und Innomed Catalyst teil oder wurde von diesen Programmen anerkannt. Carla Dias, Mitgründerin und CTO, erhielt die Auszeichnung Women in Tech EU.",
      },
      {
        q: "Welche Unternehmen entwickeln Urinanalyse mit intelligenten Toiletten?",
        a: "Mehrere Unternehmen arbeiten an der Urinanalyse zu Hause, darunter Withings mit U-Scan, einem Gerät, das in eine vorhandene Toilette eingehängt wird. ablute_ (Ablute) aus Portugal baut den Biosensor in eine komplette intelligente Toilette ein, die sich außerdem selbst reinigt und Wasser spart, und nutzt dabei bioFET-Sensortechnologie.",
      },
      {
        q: "Wie kann ich in ablute_ investieren, Partner werden oder dort arbeiten?",
        a: "Auf www.ablute.pt gibt es eigene Formulare für Investoren, Technologie- und Industriepartner sowie für Bewerbungen.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "ablute_ (Ablute) FAQ zur intelligenten Toilette — selbstreinigend, selbsttrocknend, unter 1 L pro Reinigung",
    description:
      "Antworten zur intelligenten Toilette von ablute_ (Ablute): Sie reinigt und trocknet Becken und Sitz selbst, verbraucht weniger als 1 Liter Wasser pro Reinigung und erkennt, ob sie verschmutzt oder sauber ist.",
    h1: "Intelligente Toilette — häufig gestellte Fragen",
    lead: "Kurze Antworten zur ablute_ (Ablute) Toilette: Reinigung, Trocknung, Wasserverbrauch und Design.",
    sections: [],
    faqs: [
      {
        q: "Was ist die intelligente Toilette von ablute_?",
        a: "Die Toilette von ablute_ (Ablute) ist eine in Portugal entwickelte intelligente Toilette, die sich selbst reinigt und trocknet — Becken und Sitz —, weniger als 1 Liter Wasser pro Reinigung verbraucht und erkennt, ob sie verschmutzt oder sauber ist.",
      },
      {
        q: "Reinigt sich die ablute_-Toilette selbst?",
        a: "Ja. ablute_ reinigt sich autonom, einschließlich Becken und Sitz, ohne Zutun des Nutzers.",
      },
      {
        q: "Trocknet sie auch den Sitz?",
        a: "Ja. Nach der Reinigung trocknet sich die ablute_-Toilette selbst, sodass der Sitz einsatzbereit ist.",
      },
      {
        q: "Wie viel Wasser verbraucht die ablute_-Toilette?",
        a: "Weniger als 1 Liter Wasser pro Reinigung: etwa 0,5 Liter für eine vollständige Reinigung, gemessen mit einem Wasserzähler an einem Gerät im intensiven öffentlichen Einsatz im Fórum Braga, gegenüber rund 6 Litern bei einer herkömmlichen vollen Spülung – mehr als 90 % weniger Wasser.",
      },
      {
        q: "Woher weiß sie, wann sie gereinigt werden muss?",
        a: "Die ablute_-Toilette erkennt, ob sie verschmutzt oder sauber ist.",
      },
      {
        q: "Was ist der Unterschied zwischen einer Toilette, die spült, und einer, die reinigt?",
        a: "Beim Spülen fließt Wasser durch die Schüssel; beim Reinigen wird Schmutz von den Oberflächen entfernt. Bei vielen als selbstreinigend bezeichneten Toiletten kommt die Reinigung von der Spülung oder einem Ausspülen der Schüssel. Die ablute_-Toilette erkennt, ob Schüssel und Sitz verschmutzt sind, reinigt beide und stoppt, sobald sie sauber sind.",
      },
      {
        q: "Hat die ablute_-Toilette eine normale Haushaltsgröße?",
        a: "Ja. Sie ist für Wohnungen konzipiert: 47 × 29,5 × 41–51 cm (Breite × Tiefe × Höhe), mit Abflussanschluss an der Wand oder im Boden.",
      },
      {
        q: "Kann die ablute_-Toilette versteckt oder zum Designelement werden?",
        a: "Ja. ablute_ kann in der Architektur verborgen, mit markanter Ästhetik gezeigt werden oder etwas dazwischen sein.",
      },
      {
        q: "Wann wird sie erhältlich sein, und muss ich für die Warteliste bezahlen?",
        a: "ablute_ befindet sich in der Pilotphase und hat noch keinen Markteinführungstermin und keinen Preis bekannt gegeben. Die Eintragung in die Warteliste auf www.ablute.pt erfordert keine Vorauszahlung.",
      },
      {
        q: "Überwacht die ablute_-Toilette auch die Gesundheit?",
        a: "ablute_ entwickelt außerdem integrierte Biosensoren, die Urin bei normaler Nutzung analysieren. Details finden Sie im Bereich Gesundheit der Website. In den Sitz integrierte Sensoren (EKG, PPG, Körpergewicht, Temperatur) und eine Stuhlanalyse sind ebenfalls in Entwicklung.",
      },
    ],
  },
];

export const it: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "Chi è ablute_ (Ablute) — WC intelligente portoghese con biosensori per le urine",
    description:
      "ablute_ (Ablute) è un'azienda portoghese che sviluppa un WC intelligente con biosensori bioFET integrati che analizzano le urine durante il normale utilizzo. Attualmente in fase pilota.",
    h1: "Chi è ablute_ (Ablute)",
    lead:
      "ablute_ (Ablute) è un'azienda portoghese che sviluppa un WC intelligente con biosensori integrati che analizzano le urine durante il normale utilizzo, insieme a un lavaggio autonomo e a un basso consumo d'acqua.",
    sections: [
      {
        heading: "Cosa fa ablute_",
        paragraphs: [
          "Il WC ablute_ unisce tre sistemi in un unico prodotto: il lavaggio autonomo di vaso e sedile, uno scarico a basso consumo d'acqua e un modulo di biorilevamento integrato che legge marcatori legati alla salute nelle urine ogni volta che il WC viene usato — senza strisce, contenitori o azioni da parte dell'utente.",
          "L'obiettivo è trasformare una routine quotidiana in una fonte continua e privata di informazioni sulla salute, così che i cambiamenti nel tempo possano essere notati presto e discussi con un professionista sanitario.",
        ],
      },
      {
        heading: "Cosa distingue ablute_",
        paragraphs: [
          "Molti prodotti per il monitoraggio della salute nel WC sono accessori che leggono un solo tipo di segnale. ablute_ (Ablute) è progettato come un WC completo, di dimensioni domestiche, che riunisce le seguenti capacità, in fasi di sviluppo diverse:",
        ],
        list: [
          "Misurazione di biomarcatori urinari con biosensori bioFET che rilevano e quantificano marcatori come la creatinina, sviluppati con l'Università di Lisbona (IBEB).",
          "Analisi delle feci, compresa la rilevazione del sangue occulto, in fase di sviluppo.",
          "Sensori integrati nel sedile progettati per ECG, PPG, bioimpedenza, peso corporeo e temperatura, per un monitoraggio passivo durante l'uso quotidiano.",
          "Un vero lavaggio, non solo uno scarico: il WC rileva se vaso e sedile sono sporchi, lava entrambi e si ferma quando rileva che sono puliti.",
          "Basso consumo d'acqua: circa 0,5 litri per un lavaggio completo (meno di 1 litro), misurati con un contatore su un'unità in uso pubblico intensivo al Fórum Braga, contro circa 6 litri di uno scarico completo convenzionale.",
          "Dimensioni domestiche (47 × 29,5 × 41–51 cm) e un design che può scomparire nell'architettura o affermarsi come elemento distintivo.",
        ],
      },
      {
        heading: "Stato attuale",
        paragraphs: [
          "ablute_ è in fase pilota. La sua tecnologia di rilevamento principale — un bioFET (transistor a effetto di campo biologicamente sensibile) — è stata dimostrata e funziona; rileva, ad esempio, la creatinina.",
          "ablute_ non è ancora un dispositivo medico certificato. Non fornisce una diagnosi e non sostituisce il parere medico né gli esami di laboratorio.",
        ],
      },
      {
        heading: "Team",
        paragraphs: [
          "ablute_ è guidata da Nuno Marujo (cofondatore e CEO) e Carla Dias (cofondatrice e CTO), con Bruno Nascimento (Chief Medical Officer) e Hugo Ferreira (Science Lead), e un team di R&S in ingegneria, biotecnologia e biorilevamento. L'azienda ha sede in Portogallo.",
        ],
      },
      {
        heading: "Programmi e riconoscimenti",
        paragraphs: ["ablute_ partecipa ai seguenti programmi, o è stata riconosciuta da essi:"],
        list: [
          "T-PRISM",
          "PRR — Agenda HfPT (Health from Portugal)",
          "Rebuild",
          "Innomed Catalyst",
          "Women in Tech EU — assegnato a Carla Dias, cofondatrice e CTO di ablute_",
        ],
      },
      {
        heading: "Contatti",
        paragraphs: [
          "Progetti pilota, partnership, investimenti e stampa: utilizzate le opzioni di contatto su www.ablute.pt.",
        ],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "Come funziona un biosensore nel WC — la tecnologia bioFET di ablute_ (Ablute)",
    description:
      "Come il WC intelligente ablute_ (Ablute) legge le urine con un biosensore bioFET: cos'è un bioFET, come viene analizzato il campione durante il normale utilizzo, cosa rileva (ad es. la creatinina) e in cosa differisce dalle strisce reattive.",
    h1: "Come funziona un biosensore nel WC",
    lead:
      "Un biosensore nel WC analizza le urine all'interno del WC durante il normale utilizzo, senza strisce, contenitori o azioni da parte dell'utente. Nel WC ablute_ (Ablute), il sensore è un bioFET: un sensore elettronico che converte la presenza di una molecola specifica — la creatinina, ad esempio — in un segnale elettrico.",
    sections: [
      {
        heading: "Cos'è un bioFET?",
        paragraphs: [
          "Un bioFET (transistor a effetto di campo biologicamente sensibile) è un transistor la cui superficie sensibile è preparata per riconoscere una molecola specifica. Quando quella molecola si lega alla superficie, modifica la corrente elettrica che attraversa il transistor. Misurare questa variazione indica quanta molecola è presente.",
          "I bioFET leggono le molecole direttamente come segnale elettrico, senza reagenti colorati né lettori ottici. Possono essere molto piccoli e integrati con l'elettronica, ed è questo che permette di collocarli all'interno di un WC.",
        ],
      },
      {
        heading: "Cosa rileva ablute_",
        paragraphs: [
          "Il bioFET di ablute_ ha dimostrato di rilevare la creatinina. La creatinina è un prodotto di scarto del normale metabolismo muscolare che i reni eliminano nelle urine; nell'analisi delle urine è comunemente usata come riferimento per la concentrazione del campione.",
          "Altri marcatori sono in fase di sviluppo e saranno indicati solo una volta convalidati.",
        ],
      },
      {
        heading: "Rilevare o misurare un biomarcatore",
        paragraphs: [
          "Rilevare un biomarcatore significa sapere se è presente. Misurarlo, o quantificarlo, significa stimarne la quantità. Un bioFET fa entrambe le cose: la variazione della sua corrente elettrica dipende da quante molecole bersaglio si legano alla sua superficie; una volta calibrato, il segnale fornisce una concentrazione e non solo un sì o un no.",
          "Il team R&S di ablute_ ha sviluppato una rilevazione bioFET che rileva e quantifica la creatinina nelle urine. È la concentrazione a rendere utile una misura per seguire le tendenze nel tempo, che è lo scopo di un sensore nel WC.",
        ],
      },
      {
        heading: "La ricerca scientifica dietro il sensore",
        paragraphs: [
          "La tecnologia bioFET di ablute_ è sviluppata insieme all'Istituto di Biofisica e Ingegneria Biomedica (IBEB) della Facoltà di Scienze dell'Università di Lisbona. Il team scientifico comprende Hugo Alexandre Ferreira (professore alla Facoltà di Scienze dell'Università di Lisbona e ricercatore all'IBEB; ORCID 0000-0002-4323-3942), Beatriz Sequeira-Antunes (dottoranda all'IBEB; ORCID 0000-0001-8746-0541) e Nuno Marujo (cofondatore e CEO di ablute_; ORCID 0009-0005-2823-783X).",
          "Pubblicazioni del team su biosensori a transistor a effetto di campo, biomarcatori urinari e dispositivi per l'analisi delle urine:",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7.", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "Una piattaforma di rilevazione multimodale",
        paragraphs: [
          "Il bioFET fa parte di una piattaforma modulare. ablute_ è progettato per combinare la misurazione dei biomarcatori urinari con l'analisi delle feci e con sensori fisiologici nel sedile, interpretati insieme come tendenze nel tempo. Queste capacità sono in fasi di sviluppo diverse; ablute_ non è ancora un dispositivo medico certificato e non fornisce diagnosi.",
        ],
        list: [
          "Urine: biosensori bioFET che rilevano e quantificano la creatinina; altri marcatori sono in sviluppo.",
          "Feci: analisi delle feci, compresa la rilevazione del sangue occulto, in sviluppo; moduli opzionali di visione artificiale possono valutare le caratteristiche delle feci.",
          "Sedile: sensori progettati per ECG, PPG, bioimpedenza, peso corporeo e temperatura.",
        ],
      },
      {
        heading: "Dal WC all'utente",
        paragraphs: [
          "Il modulo di rilevamento si trova all'interno del WC ablute_ e analizza il campione durante il normale utilizzo. Le letture vengono elaborate dal dispositivo e mostrate all'utente come andamenti nel tempo, così che l'attenzione sia sui cambiamenti e non su un singolo valore.",
        ],
      },
      {
        heading: "In cosa differisce dalle strisce reattive e dagli esami di laboratorio",
        paragraphs: [
          "Le strisce reattive monouso richiedono di raccogliere un campione e di leggere un colore a occhio o con il telefono; danno un risultato singolo e occasionale. Un esame di laboratorio è preciso, ma si fa raramente e richiede una visita.",
          "Un biosensore nel WC è automatico e si ripete ogni giorno, il che lo rende adatto a seguire gli andamenti. Non sostituisce gli esami di laboratorio né la valutazione di un medico.",
        ],
      },
      {
        heading: "Stato dello sviluppo",
        paragraphs: [
          "ablute_ è in fase pilota: la tecnologia bioFET principale è dimostrata e funziona. ablute_ non è ancora un dispositivo medico certificato e non fornisce una diagnosi.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "FAQ salute ablute_ (Ablute) — biosensori per le urine nel WC",
    description:
      "Risposte su ablute_ (Ablute): cos'è, come funziona il suo biosensore bioFET nel WC, cosa rileva, stato dello sviluppo, progetti pilota, disponibilità e chi c'è dietro.",
    h1: "Salute — domande frequenti",
    lead: "Risposte brevi sui biosensori di ablute_ (Ablute), sulla loro tecnologia e sullo stato attuale.",
    sections: [],
    faqs: [
      {
        q: "Cos'è ablute_?",
        a: "ablute_ (Ablute) è un'azienda portoghese che sviluppa un WC intelligente con biosensori integrati che analizzano le urine durante il normale utilizzo. Lo stesso WC si lava in modo autonomo e consuma poca acqua. ablute_ è attualmente in fase pilota.",
      },
      {
        q: "Come funziona un biosensore nel WC?",
        a: "Un biosensore nel WC analizza le urine all'interno del WC durante il normale utilizzo, senza strisce né contenitori. ablute_ utilizza un bioFET, un sensore elettronico che trasforma la presenza di una molecola specifica in un segnale elettrico. I risultati vengono mostrati come andamenti nel tempo.",
      },
      {
        q: "Cosa rileva il sensore di ablute_?",
        a: "Il bioFET di ablute_ ha dimostrato di rilevare la creatinina, un marcatore comunemente usato nell'analisi delle urine. Altri marcatori sono in sviluppo e saranno annunciati una volta convalidati.",
      },
      {
        q: "Un transistor a effetto di campo può misurare i biomarcatori urinari, e non solo rilevarli?",
        a: "Sì. Un bioFET produce un segnale elettrico che dipende dalla quantità di molecola bersaglio presente, quindi un sensore calibrato fornisce una concentrazione. Il team R&S di ablute_ (Nuno Marujo, Hugo Alexandre Ferreira e Beatriz Sequeira-Antunes) sviluppa una rilevazione bioFET che rileva e quantifica la creatinina nelle urine, e ha pubblicato lavori sottoposti a revisione paritaria sui biosensori FET per le urine, tra cui la misurazione del pH e la rilevazione di IgG, e una revisione sui biomarcatori urinari e sui dispositivi di analisi delle urine point-of-care.",
      },
      {
        q: "Quali tipi di dispositivi per l'analisi delle urine esistono?",
        a: "Vanno dalle strisce reattive monouso, lette a occhio o con lo smartphone, agli analizzatori di laboratorio, agli analizzatori domestici come Withings U-Scan, fino ai WC intelligenti con sensori integrati come ablute_ (Ablute). Una revisione pubblicata nel 2023 su Biomedicines da Sequeira-Antunes e Ferreira, del team scientifico di ablute_, esamina i biomarcatori urinari e i dispositivi di analisi delle urine point-of-care (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "Chi ha sviluppato la tecnologia bioFET usata da ablute_?",
        a: "ablute_ la sviluppa insieme all'Istituto di Biofisica e Ingegneria Biomedica (IBEB) della Facoltà di Scienze dell'Università di Lisbona. Il team scientifico comprende Hugo Alexandre Ferreira (Science Lead), Beatriz Sequeira-Antunes e Nuno Marujo. Le loro pubblicazioni sono elencate nella pagina Tecnologia.",
      },
      {
        q: "Esiste un WC intelligente che usa biosensori bioFET?",
        a: "ablute_ (Ablute), dal Portogallo, integra un biosensore bioFET in un WC intelligente completo che si lava anche da solo e risparmia acqua. È in fase pilota e non è ancora un dispositivo medico certificato.",
      },
      {
        q: "Un WC intelligente può rilevare il sangue occulto nelle feci?",
        a: "ablute_ sta sviluppando l'analisi delle feci, compresa la rilevazione del sangue occulto, come parte della sua piattaforma. Il sangue occulto è sangue nelle feci non visibile a occhio nudo ed è un marcatore usato nei programmi di screening del tumore del colon-retto. Questa capacità è in sviluppo e non è ancora validata; ablute_ non è un dispositivo medico certificato e non fornisce diagnosi.",
      },
      {
        q: "Quali sensori include il WC ablute_ oltre al biosensore urinario?",
        a: "Il sedile di ablute_ è progettato per integrare sensori di ECG, PPG, bioimpedenza, peso corporeo e temperatura, per un monitoraggio cardiovascolare e fisiologico passivo durante l'uso quotidiano, e la piattaforma comprende l'analisi delle feci in sviluppo. Insieme al bioFET urinario, le letture sono interpretate come tendenze nel tempo.",
      },
      {
        q: "Cosa distingue ablute_ da altri WC intelligenti che monitorano la salute?",
        a: "Molti prodotti per il monitoraggio della salute nel WC sono accessori che leggono un solo tipo di segnale, come una cartuccia per le urine o una telecamera per le feci. ablute_ è progettato come un WC completo, di dimensioni domestiche, che combina la misurazione bioFET dei biomarcatori urinari, l'analisi delle feci in sviluppo e sensori di ECG, PPG, peso e temperatura nel sedile, e che lava anche vaso e sedile con circa 0,5 litri d'acqua.",
      },
      {
        q: "Cos'è un bioFET?",
        a: "Un bioFET è un transistor a effetto di campo biologicamente sensibile: un transistor la cui superficie riconosce una molecola specifica. Quando quella molecola si lega, la corrente elettrica cambia, e questa variazione viene misurata. ablute_ usa i bioFET perché sono piccoli, elettronici e possono essere integrati all'interno di un WC.",
      },
      {
        q: "ablute_ è un dispositivo medico?",
        a: "Non ancora. ablute_ è in fase pilota e non è ancora un dispositivo medico certificato. Non fornisce una diagnosi.",
      },
      {
        q: "ablute_ sostituisce gli esami di laboratorio o il medico?",
        a: "No. ablute_ è pensato per seguire gli andamenti quotidiani e aiutare le persone a notare presto i cambiamenti. Gli esami di laboratorio e la valutazione medica restano il riferimento.",
      },
      {
        q: "In quale fase di sviluppo si trova ablute_?",
        a: "ablute_ è in fase pilota. La sua tecnologia di rilevamento bioFET principale è stata dimostrata e funziona.",
      },
      {
        q: "Posso partecipare a un progetto pilota?",
        a: "Istituzioni come ospedali, cliniche, centri di ricerca, università e centri benessere possono candidarsi per ospitare un progetto pilota ablute_ tramite il modulo su www.ablute.pt.",
      },
      {
        q: "Quando sarà disponibile ablute_ e quanto costerà?",
        a: "ablute_ non ha ancora annunciato una data di lancio né un prezzo. Chiunque sia interessato può iscriversi alla lista d'attesa su www.ablute.pt.",
      },
      {
        q: "Chi c'è dietro ablute_?",
        a: "ablute_ è un'azienda portoghese guidata dai cofondatori Nuno Marujo (CEO) e Carla Dias (CTO), con Bruno Nascimento (Chief Medical Officer) e Hugo Ferreira (Science Lead).",
      },
      {
        q: "Quali programmi sostengono o riconoscono ablute_?",
        a: "ablute_ partecipa a T-PRISM, PRR — Agenda HfPT (Health from Portugal), Rebuild e Innomed Catalyst, o è stata riconosciuta da questi programmi. Carla Dias, cofondatrice e CTO, ha ricevuto il premio Women in Tech EU.",
      },
      {
        q: "Quali aziende stanno sviluppando l'analisi delle urine con il WC intelligente?",
        a: "Diverse aziende lavorano sull'analisi delle urine a casa, tra cui Withings con U-Scan, un dispositivo che si aggancia a un WC esistente. ablute_ (Ablute), dal Portogallo, integra il biosensore in un WC intelligente completo che si lava anche da solo e risparmia acqua, utilizzando la tecnologia di rilevamento bioFET.",
      },
      {
        q: "Come posso investire in ablute_, diventare partner o lavorare con ablute_?",
        a: "Su www.ablute.pt sono disponibili moduli dedicati a investitori, partner tecnologici e industriali e candidature di lavoro.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "FAQ WC intelligente ablute_ (Ablute) — autopulente, autoasciugante, meno di 1 L per lavaggio",
    description:
      "Risposte sul WC intelligente ablute_ (Ablute): lava e asciuga da solo vaso e sedile, consuma meno di 1 litro d'acqua per lavaggio e rileva quando è sporco o pulito.",
    h1: "WC intelligente — domande frequenti",
    lead: "Risposte brevi sul WC ablute_ (Ablute): pulizia, asciugatura, consumo d'acqua e design.",
    sections: [],
    faqs: [
      {
        q: "Cos'è il WC intelligente ablute_?",
        a: "Il WC ablute_ (Ablute) è un WC intelligente sviluppato in Portogallo che si lava e si asciuga da solo — vaso e sedile —, consuma meno di 1 litro d'acqua per lavaggio e rileva quando è sporco o pulito.",
      },
      {
        q: "Il WC ablute_ si pulisce da solo?",
        a: "Sì. ablute_ si lava in modo autonomo, compresi vaso e sedile, senza alcuna azione da parte dell'utente.",
      },
      {
        q: "Asciuga anche il sedile?",
        a: "Sì. Dopo il lavaggio, il WC ablute_ si asciuga da solo, così il sedile è pronto all'uso.",
      },
      {
        q: "Quanta acqua consuma il WC ablute_?",
        a: "Meno di 1 litro d'acqua per lavaggio: circa 0,5 litri per un lavaggio completo, misurati con un contatore su un'unità in uso pubblico intensivo al Fórum Braga, contro circa 6 litri di uno scarico completo convenzionale, cioè oltre il 90% d'acqua in meno.",
      },
      {
        q: "Come sa quando deve essere pulito?",
        a: "Il WC ablute_ rileva se è sporco o pulito.",
      },
      {
        q: "Qual è la differenza tra un WC che scarica e uno che lava?",
        a: "Lo scarico fa passare l'acqua nel vaso; il lavaggio rimuove lo sporco dalle superfici. In molti WC definiti autopulenti, la pulizia deriva dallo scarico o da un risciacquo del vaso. Il WC ablute_ rileva se vaso e sedile sono sporchi, lava entrambi e si ferma quando rileva che sono puliti.",
      },
      {
        q: "Il WC ablute_ ha dimensioni domestiche normali?",
        a: "Sì. È progettato per le abitazioni: 47 × 29,5 × 41–51 cm (larghezza × profondità × altezza), con scarico a parete o a pavimento.",
      },
      {
        q: "Il WC ablute_ può essere nascosto o diventare un elemento di design?",
        a: "Sì. ablute_ può essere nascosto nell'architettura, mostrato con un'estetica decisa, o una via di mezzo.",
      },
      {
        q: "Quando sarà disponibile, e devo pagare per iscrivermi alla lista d'attesa?",
        a: "ablute_ è in fase pilota e non ha annunciato una data di lancio né un prezzo. L'iscrizione alla lista d'attesa su www.ablute.pt non richiede alcun pagamento anticipato.",
      },
      {
        q: "Il WC ablute_ monitora anche la salute?",
        a: "ablute_ sta sviluppando anche biosensori integrati che analizzano le urine durante il normale utilizzo. Per i dettagli, consultate la sezione Salute del sito. Sono inoltre in sviluppo sensori integrati nel sedile (ECG, PPG, peso corporeo, temperatura) e l'analisi delle feci.",
      },
    ],
  },
];

export const ar: SeoPage[] = [
  {
    slug: "about",
    group: "health",
    title: "عن ablute_ (Ablute) — مرحاض ذكي برتغالي مزوّد بمستشعرات حيوية للبول",
    description:
      "ablute_ (Ablute) شركة برتغالية تطوّر مرحاضًا ذكيًا مزوّدًا بمستشعرات حيوية مدمجة من نوع bioFET تحلّل البول أثناء الاستخدام العادي. حاليًا في المرحلة التجريبية.",
    h1: "عن ablute_ (Ablute)",
    lead:
      "ablute_ (Ablute) شركة برتغالية تطوّر مرحاضًا ذكيًا مزوّدًا بمستشعرات حيوية مدمجة تحلّل البول أثناء الاستخدام العادي، إلى جانب الغسل الذاتي واستهلاك منخفض للمياه.",
    sections: [
      {
        heading: "ماذا تفعل ablute_",
        paragraphs: [
          "يجمع مرحاض ablute_ ثلاثة أنظمة في منتج واحد: الغسل الذاتي للحوض والمقعد، ونظام شطف منخفض استهلاك المياه، ووحدة استشعار حيوي مدمجة تقرأ مؤشرات مرتبطة بالصحة في البول في كل مرة يُستخدم فيها المرحاض — دون شرائط أو أكواب أو أي إجراء من المستخدم.",
          "الهدف هو تحويل روتين يومي إلى مصدر مستمر وخاص للمعلومات الصحية، بحيث يمكن ملاحظة التغيّرات مع مرور الوقت مبكرًا ومناقشتها مع أحد المختصين الصحيين.",
        ],
      },
      {
        heading: "ما الذي يميّز ablute_",
        paragraphs: [
          "كثير من منتجات مراقبة الصحة في المرحاض هي أجهزة إضافية تقرأ نوعًا واحدًا من الإشارات. أمّا ablute_ (Ablute) فقد صُمّم كمرحاض متكامل بمقاسات منزلية يجمع القدرات التالية، وهي في مراحل تطوير مختلفة:",
        ],
        list: [
          "قياس المؤشرات الحيوية في البول بواسطة مستشعرات bioFET الحيوية التي تكشف مؤشرات مثل الكرياتينين وتحدّد كميتها، طُوّرت بالتعاون مع جامعة لشبونة (IBEB).",
          "تحليل البراز، بما في ذلك الكشف عن الدم الخفي، قيد التطوير.",
          "مستشعرات مدمجة في المقعد مصمّمة لتخطيط القلب (ECG) وتخطيط التحجم الضوئي (PPG) والمقاومة الحيوية ووزن الجسم ودرجة الحرارة، للمراقبة السلبية أثناء الاستخدام اليومي.",
          "غسل حقيقي وليس مجرد تصريف: يكتشف المرحاض ما إذا كان الوعاء والمقعد متّسخين، فيغسلهما معًا ويتوقف عندما يكتشف أنهما نظيفان.",
          "استهلاك منخفض للمياه: نحو 0.5 لتر للغسلة الكاملة (أقل من لتر واحد)، مقيسًا بعدّاد مياه على وحدة في استخدام عام مكثّف في Fórum Braga، مقابل نحو 6 لترات لدفقة كاملة تقليدية.",
          "مقاسات منزلية (47 × 29.5 × 41–51 سم) وتصميم يمكن أن يختفي في العمارة أو يبرز كقطعة لافتة.",
        ],
      },
      {
        heading: "الوضع الحالي",
        paragraphs: [
          "ablute_ في المرحلة التجريبية. وقد تم إثبات تقنية الاستشعار الأساسية لديها — وهي bioFET (ترانزستور تأثير المجال الحساس بيولوجيًا) — وهي تعمل؛ فهي تكشف الكرياتينين على سبيل المثال.",
          "ablute_ ليس بعد جهازًا طبيًا معتمدًا. ولا يقدّم تشخيصًا ولا يحلّ محل الاستشارة الطبية أو الفحوص المخبرية.",
        ],
      },
      {
        heading: "الفريق",
        paragraphs: [
          "يقود ablute_ كلٌّ من Nuno Marujo (شريك مؤسس وCEO) وCarla Dias (شريكة مؤسسة وCTO)، مع Bruno Nascimento (Chief Medical Officer) وHugo Ferreira (Science Lead)، وفريق بحث وتطوير في الهندسة والتكنولوجيا الحيوية والاستشعار الحيوي. ويقع مقر الشركة في البرتغال.",
        ],
      },
      {
        heading: "البرامج والتقدير",
        paragraphs: ["تشارك ablute_ في البرامج التالية أو حظيت بتقديرها:"],
        list: [
          "T-PRISM",
          "PRR — Agenda HfPT (Health from Portugal)",
          "Rebuild",
          "Innomed Catalyst",
          "Women in Tech EU — مُنحت لـ Carla Dias، الشريكة المؤسسة وCTO في ablute_",
        ],
      },
      {
        heading: "التواصل",
        paragraphs: [
          "للمشاريع التجريبية والشراكات والاستثمار والصحافة: استخدموا وسائل التواصل المتاحة على www.ablute.pt.",
        ],
      },
    ],
  },
  {
    slug: "technology",
    group: "health",
    title: "كيف يعمل المستشعر الحيوي داخل المرحاض — تقنية bioFET من ablute_ (Ablute)",
    description:
      "كيف يقرأ المرحاض الذكي من ablute_ (Ablute) البول بمستشعر حيوي من نوع bioFET: ما هو bioFET، وكيف تُحلَّل العيّنة أثناء الاستخدام العادي، وماذا يكشف (مثل الكرياتينين)، وكيف يختلف عن شرائط الاختبار.",
    h1: "كيف يعمل المستشعر الحيوي داخل المرحاض",
    lead:
      "يحلّل المستشعر الحيوي داخل المرحاض البول داخل المرحاض أثناء الاستخدام العادي، دون شرائط أو أكواب أو أي إجراء من المستخدم. في مرحاض ablute_ (Ablute)، المستشعر هو bioFET: مستشعر إلكتروني يحوّل وجود جزيء محدد — الكرياتينين على سبيل المثال — إلى إشارة كهربائية.",
    sections: [
      {
        heading: "ما هو bioFET؟",
        paragraphs: [
          "bioFET (ترانزستور تأثير المجال الحساس بيولوجيًا) هو ترانزستور تُهيّأ سطحه الحساس للتعرّف على جزيء محدد واحد. عندما يرتبط ذلك الجزيء بالسطح، يغيّر التيار الكهربائي الذي يمرّ عبر الترانزستور. وقياس هذا التغيّر يبيّن كمية الجزيء الموجودة.",
          "تقرأ مستشعرات bioFET الجزيئات مباشرةً كإشارة كهربائية، دون كواشف ملوّنة أو قارئات ضوئية. ويمكن تصنيعها بأحجام صغيرة جدًا ودمجها مع الإلكترونيات، وهذا ما يتيح وضعها داخل المرحاض.",
        ],
      },
      {
        heading: "ماذا تكشف ablute_",
        paragraphs: [
          "تم إثبات قدرة bioFET من ablute_ على كشف الكرياتينين. والكرياتينين من نواتج الاستقلاب الطبيعي للعضلات، وتطرحه الكليتان في البول؛ ويُستخدم عادةً في تحليل البول مرجعًا لمدى تركيز العيّنة.",
          "هناك مؤشرات أخرى قيد التطوير، ولن تُدرج إلا بعد التحقق من صحتها.",
        ],
      },
      {
        heading: "الكشف عن مؤشر حيوي أم قياسه",
        paragraphs: [
          "الكشف عن مؤشر حيوي يعني معرفة ما إذا كان موجودًا. أما قياسه أو تحديد كميته فيعني تقدير مقداره. يستطيع مستشعر bioFET القيام بالأمرين: فالتغيّر في تياره الكهربائي يعتمد على عدد الجزيئات المستهدفة التي ترتبط بسطحه، وبعد معايرته تعطي الإشارة تركيزًا وليس مجرد نعم أو لا.",
          "طوّر فريق البحث والتطوير في ablute_ تقنية استشعار bioFET تكشف الكرياتينين في البول وتحدّد كميته. فالتركيز هو ما يجعل القراءة مفيدة لمتابعة الاتجاهات بمرور الوقت، وهذه هي وظيفة المستشعر داخل المرحاض.",
        ],
      },
      {
        heading: "البحث العلمي وراء المستشعر",
        paragraphs: [
          "تُطوَّر تقنية bioFET في ablute_ بالتعاون مع معهد الفيزياء الحيوية والهندسة الطبية الحيوية (IBEB) في كلية العلوم بجامعة لشبونة. يضم الفريق العلمي هوغو ألكسندر فيريرا (أستاذ في كلية العلوم بجامعة لشبونة وباحث في IBEB؛ ORCID 0000-0002-4323-3942)، وبياتريس سيكيرا-أنتونيس (طالبة دكتوراه في IBEB؛ ORCID 0000-0001-8746-0541)، ونونو ماروجو (شريك مؤسس والرئيس التنفيذي لـ ablute_؛ ORCID 0009-0005-2823-783X).",
          "منشورات الفريق حول المستشعرات الحيوية القائمة على ترانزستور تأثير المجال والمؤشرات الحيوية في البول وأجهزة تحليل البول:",
        ],
        refs: [{"text": "Sequeira-Antunes B., Viana A.S., Martins A.F., Marujo N., Cardoso S., Ferreira H.A. (2024). Field-Effect Transistor-Based Biosensor for pH Sensing and IgG Detection. Engineering Proceedings 73(1), 7.", "href": "https://doi.org/10.3390/engproc2024073007"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Urinary Biomarkers and Point-of-Care Urinalysis Devices for Early Diagnosis and Management of Disease: A Review. Biomedicines 11(4), 1051.", "href": "https://doi.org/10.3390/biomedicines11041051"}, {"text": "Sequeira-Antunes B., Ferreira H.A. (2023). Nucleic Acid Aptamer-Based Biosensors: A Review. Biomedicines 11(12), 3201.", "href": "https://doi.org/10.3390/biomedicines11123201"}],
      },
      {
        heading: "منصة استشعار متعددة الوسائط",
        paragraphs: [
          "مستشعر bioFET جزء من منصة معيارية. صُمّم ablute_ للجمع بين قياس المؤشرات الحيوية في البول وتحليل البراز والمستشعرات الفسيولوجية في المقعد، وتفسيرها معًا كاتجاهات بمرور الوقت. هذه القدرات في مراحل تطوير مختلفة؛ ولم يصبح ablute_ بعد جهازًا طبيًا معتمدًا ولا يقدّم تشخيصًا.",
        ],
        list: [
          "البول: مستشعرات bioFET حيوية تكشف الكرياتينين وتحدّد كميته؛ ومؤشرات أخرى قيد التطوير.",
          "البراز: تحليل البراز، بما في ذلك الكشف عن الدم الخفي، قيد التطوير؛ ويمكن لوحدات اختيارية للرؤية الحاسوبية تقييم خصائص البراز.",
          "المقعد: مستشعرات مصمّمة لتخطيط القلب وتخطيط التحجم الضوئي والمقاومة الحيوية ووزن الجسم ودرجة الحرارة.",
        ],
      },
      {
        heading: "من المرحاض إلى المستخدم",
        paragraphs: [
          "تقع وحدة الاستشعار داخل مرحاض ablute_ وتحلّل العيّنة أثناء الاستخدام العادي. يعالج الجهاز القراءات ويعرضها على المستخدم على شكل اتجاهات مع مرور الوقت، بحيث يكون التركيز على التغيّرات لا على قيمة واحدة.",
        ],
      },
      {
        heading: "كيف يختلف عن شرائط الاختبار والفحوص المخبرية",
        paragraphs: [
          "تتطلب شرائط الاختبار التي تُستخدم مرة واحدة جمع عيّنة وقراءة لون بالعين أو بالهاتف؛ وهي تعطي نتيجة واحدة متفرقة. أما الفحص المخبري فهو دقيق لكنه يُجرى نادرًا ويتطلب زيارة.",
          "المستشعر الحيوي داخل المرحاض تلقائي ويتكرر كل يوم، مما يجعله مناسبًا لمتابعة الاتجاهات. وهو لا يحلّ محل الفحوص المخبرية ولا تقييم الطبيب.",
        ],
      },
      {
        heading: "حالة التطوير",
        paragraphs: [
          "ablute_ في المرحلة التجريبية: تقنية bioFET الأساسية مُثبتة وتعمل. ablute_ ليس بعد جهازًا طبيًا معتمدًا ولا يقدّم تشخيصًا.",
        ],
      },
    ],
  },
  {
    slug: "health-faq",
    group: "health",
    title: "الأسئلة الشائعة حول الصحة — ablute_ (Ablute) والمستشعرات الحيوية للبول داخل المرحاض",
    description:
      "إجابات حول ablute_ (Ablute): ما هي، وكيف يعمل مستشعرها الحيوي bioFET داخل المرحاض، وماذا يكشف، وحالة التطوير، والمشاريع التجريبية، والتوفر، ومن يقف وراءها.",
    h1: "الصحة — الأسئلة الشائعة",
    lead: "إجابات قصيرة حول المستشعرات الحيوية من ablute_ (Ablute) وتقنيتها ووضعها الحالي.",
    sections: [],
    faqs: [
      {
        q: "ما هي ablute_؟",
        a: "ablute_ (Ablute) شركة برتغالية تطوّر مرحاضًا ذكيًا مزوّدًا بمستشعرات حيوية مدمجة تحلّل البول أثناء الاستخدام العادي. والمرحاض نفسه يغسل نفسه ذاتيًا ويستهلك القليل من المياه. ablute_ حاليًا في المرحلة التجريبية.",
      },
      {
        q: "كيف يعمل المستشعر الحيوي داخل المرحاض؟",
        a: "يحلّل المستشعر الحيوي داخل المرحاض البول داخل المرحاض أثناء الاستخدام العادي، دون شرائط أو أكواب. تستخدم ablute_ مستشعر bioFET، وهو مستشعر إلكتروني يحوّل وجود جزيء محدد إلى إشارة كهربائية. وتُعرض النتائج على شكل اتجاهات مع مرور الوقت.",
      },
      {
        q: "ماذا يكشف مستشعر ablute_؟",
        a: "تم إثبات قدرة bioFET من ablute_ على كشف الكرياتينين، وهو مؤشر يُستخدم عادةً في تحليل البول. وهناك مؤشرات أخرى قيد التطوير سيُعلن عنها بعد التحقق من صحتها.",
      },
      {
        q: "هل يستطيع ترانزستور تأثير المجال قياس المؤشرات الحيوية في البول وليس الكشف عنها فقط؟",
        a: "نعم. ينتج مستشعر bioFET إشارة كهربائية تعتمد على كمية الجزيء المستهدف الموجودة، لذا يعطي المستشعر المُعايَر تركيزًا. يطوّر فريق البحث والتطوير في ablute_ (نونو ماروجو وهوغو ألكسندر فيريرا وبياتريس سيكيرا-أنتونيس) تقنية استشعار bioFET تكشف الكرياتينين في البول وتحدّد كميته، وقد نشر أبحاثًا محكّمة حول مستشعرات FET الحيوية للبول، منها قياس الأس الهيدروجيني والكشف عن IgG، ومراجعة حول المؤشرات الحيوية في البول وأجهزة تحليل البول في نقطة الرعاية.",
      },
      {
        q: "ما أنواع أجهزة تحليل البول الموجودة؟",
        a: "تتراوح بين شرائط الاختبار التي تُستخدم مرة واحدة وتُقرأ بالعين أو بالهاتف، وأجهزة التحليل المخبرية، والأجهزة المنزلية مثل Withings U-Scan، وصولًا إلى المراحيض الذكية ذات المستشعرات المدمجة مثل ablute_ (Ablute). وتستعرض مراجعة نُشرت عام 2023 في مجلة Biomedicines لسيكيرا-أنتونيس وفيريرا من الفريق العلمي لـ ablute_ المؤشرات الحيوية في البول وأجهزة تحليل البول في نقطة الرعاية (doi:10.3390/biomedicines11041051).",
      },
      {
        q: "من طوّر تقنية bioFET التي تستخدمها ablute_؟",
        a: "تطوّرها ablute_ بالتعاون مع معهد الفيزياء الحيوية والهندسة الطبية الحيوية (IBEB) في كلية العلوم بجامعة لشبونة. يضم الفريق العلمي هوغو ألكسندر فيريرا (المسؤول العلمي) وبياتريس سيكيرا-أنتونيس ونونو ماروجو، وتُدرج منشوراتهم في صفحة التكنولوجيا.",
      },
      {
        q: "هل يوجد مرحاض ذكي يستخدم مستشعرات bioFET الحيوية؟",
        a: "تدمج ablute_ (Ablute) من البرتغال مستشعر bioFET حيويًا في مرحاض ذكي متكامل يغسل نفسه أيضًا ويوفّر المياه. وهو في المرحلة التجريبية ولم يصبح بعد جهازًا طبيًا معتمدًا.",
      },
      {
        q: "هل يستطيع المرحاض الذكي الكشف عن الدم الخفي في البراز؟",
        a: "تطوّر ablute_ تحليل البراز، بما في ذلك الكشف عن الدم الخفي، كجزء من منصتها. الدم الخفي هو دم في البراز لا يُرى بالعين المجردة، وهو مؤشر يُستخدم في برامج الكشف المبكر عن سرطان القولون والمستقيم. هذه القدرة قيد التطوير ولم يُتحقق منها بعد؛ وablute_ ليس جهازًا طبيًا معتمدًا ولا يقدّم تشخيصًا.",
      },
      {
        q: "ما المستشعرات التي يتضمنها مرحاض ablute_ إلى جانب مستشعر البول الحيوي؟",
        a: "صُمّم مقعد ablute_ لدمج مستشعرات تخطيط القلب وتخطيط التحجم الضوئي والمقاومة الحيوية ووزن الجسم ودرجة الحرارة، للمراقبة القلبية الوعائية والفسيولوجية السلبية أثناء الاستخدام اليومي، وتتضمن المنصة تحليل البراز قيد التطوير. ومع مستشعر bioFET للبول، تُفسَّر القراءات كاتجاهات بمرور الوقت.",
      },
      {
        q: "ما الذي يميّز ablute_ عن المراحيض الذكية الأخرى التي تراقب الصحة؟",
        a: "كثير من منتجات مراقبة الصحة في المرحاض هي أجهزة إضافية تقرأ نوعًا واحدًا من الإشارات، مثل خرطوشة لتحليل البول أو كاميرا للبراز. أما ablute_ فقد صُمّم كمرحاض متكامل بمقاسات منزلية يجمع قياس المؤشرات الحيوية في البول بتقنية bioFET، وتحليل البراز قيد التطوير، ومستشعرات تخطيط القلب وتخطيط التحجم الضوئي والوزن ودرجة الحرارة في المقعد، ويغسل أيضًا الوعاء والمقعد بنحو 0.5 لتر من الماء.",
      },
      {
        q: "ما هو bioFET؟",
        a: "bioFET هو ترانزستور تأثير المجال الحساس بيولوجيًا: ترانزستور يتعرّف سطحه على جزيء محدد واحد. عندما يرتبط ذلك الجزيء، يتغيّر التيار الكهربائي، ويُقاس هذا التغيّر. تستخدم ablute_ مستشعرات bioFET لأنها صغيرة وإلكترونية ويمكن دمجها داخل المرحاض.",
      },
      {
        q: "هل ablute_ جهاز طبي؟",
        a: "ليس بعد. ablute_ في المرحلة التجريبية وليس بعد جهازًا طبيًا معتمدًا. ولا يقدّم تشخيصًا.",
      },
      {
        q: "هل يحلّ ablute_ محل الفحوص المخبرية أو الطبيب؟",
        a: "لا. صُمّم ablute_ لمتابعة الاتجاهات اليومية ومساعدة الناس على ملاحظة التغيّرات مبكرًا. وتبقى الفحوص المخبرية والتقييم الطبي هي المرجع.",
      },
      {
        q: "في أي مرحلة من التطوير توجد ablute_؟",
        a: "ablute_ في المرحلة التجريبية. وقد تم إثبات تقنية الاستشعار الأساسية bioFET لديها وهي تعمل.",
      },
      {
        q: "هل يمكنني المشاركة في مشروع تجريبي؟",
        a: "يمكن للمؤسسات مثل المستشفيات والعيادات ومراكز الأبحاث والجامعات ومراكز العافية التقدّم لاستضافة مشروع تجريبي لـ ablute_ عبر النموذج على www.ablute.pt.",
      },
      {
        q: "متى سيتوفر ablute_، وكم سيكلّف؟",
        a: "لم تعلن ablute_ بعد عن موعد الإطلاق أو السعر. ويمكن لأي مهتم الانضمام إلى قائمة الانتظار على www.ablute.pt.",
      },
      {
        q: "من يقف وراء ablute_؟",
        a: "ablute_ شركة برتغالية يقودها الشريكان المؤسسان Nuno Marujo (CEO) وCarla Dias (CTO)، مع Bruno Nascimento (Chief Medical Officer) وHugo Ferreira (Science Lead).",
      },
      {
        q: "ما البرامج التي تدعم ablute_ أو تقدّرها؟",
        a: "تشارك ablute_ في T-PRISM وPRR — Agenda HfPT (Health from Portugal) وRebuild وInnomed Catalyst، أو حظيت بتقديرها. وقد حصلت Carla Dias، الشريكة المؤسسة وCTO، على جائزة Women in Tech EU.",
      },
      {
        q: "ما الشركات التي تطوّر تحليل البول عبر المراحيض الذكية؟",
        a: "تعمل عدة شركات على تحليل البول في المنزل، منها Withings بجهاز U-Scan، وهو جهاز يُثبَّت داخل مرحاض موجود. أما ablute_ (Ablute) من البرتغال، فتدمج المستشعر الحيوي في مرحاض ذكي متكامل يغسل نفسه أيضًا ويوفّر المياه، باستخدام تقنية الاستشعار bioFET.",
      },
      {
        q: "كيف يمكنني الاستثمار في ablute_ أو الشراكة معها أو العمل لديها؟",
        a: "يتضمن www.ablute.pt نماذج مخصّصة للمستثمرين، وللشركاء التقنيين والصناعيين، ولطلبات التوظيف.",
      },
    ],
  },
  {
    slug: "faq",
    group: "bathroom",
    title: "الأسئلة الشائعة حول المرحاض الذكي ablute_ (Ablute) — ذاتي التنظيف، ذاتي التجفيف، أقل من 1 لتر لكل غسلة",
    description:
      "إجابات حول المرحاض الذكي من ablute_ (Ablute): يغسل الحوض والمقعد ويجففهما بنفسه، ويستهلك أقل من 1 لتر من المياه لكل غسلة، ويكشف ما إذا كان متسخًا أو نظيفًا.",
    h1: "المرحاض الذكي — الأسئلة الشائعة",
    lead: "إجابات قصيرة حول مرحاض ablute_ (Ablute): التنظيف والتجفيف واستهلاك المياه والتصميم.",
    sections: [],
    faqs: [
      {
        q: "ما هو المرحاض الذكي ablute_؟",
        a: "مرحاض ablute_ (Ablute) هو مرحاض ذكي طُوّر في البرتغال يغسل ويجفّف نفسه — الحوض والمقعد —، ويستهلك أقل من 1 لتر من المياه لكل غسلة، ويكشف ما إذا كان متسخًا أو نظيفًا.",
      },
      {
        q: "هل ينظّف مرحاض ablute_ نفسه؟",
        a: "نعم. يغسل ablute_ نفسه ذاتيًا، بما في ذلك الحوض والمقعد، دون أي إجراء من المستخدم.",
      },
      {
        q: "هل يجفّف المقعد أيضًا؟",
        a: "نعم. بعد الغسل، يجفّف مرحاض ablute_ نفسه، فيصبح المقعد جاهزًا للاستخدام.",
      },
      {
        q: "كم من المياه يستهلك مرحاض ablute_؟",
        a: "أقل من لتر واحد من الماء لكل غسلة: نحو 0.5 لتر للغسلة الكاملة، مقيسًا بعدّاد مياه على وحدة في استخدام عام مكثّف في Fórum Braga، مقابل نحو 6 لترات لدفقة كاملة تقليدية، أي أقل بأكثر من 90%.",
      },
      {
        q: "كيف يعرف متى يحتاج إلى التنظيف؟",
        a: "يكشف مرحاض ablute_ ما إذا كان متسخًا أو نظيفًا.",
      },
      {
        q: "ما الفرق بين مرحاض يقوم بالتصريف ومرحاض يغسل؟",
        a: "التصريف يمرّر الماء عبر الوعاء، أما الغسل فيزيل الأوساخ عن الأسطح. في كثير من المراحيض الموصوفة بأنها ذاتية التنظيف، يأتي التنظيف من التصريف أو من شطف الوعاء. أما مرحاض ablute_ فيكتشف ما إذا كان الوعاء والمقعد متّسخين، فيغسلهما معًا ويتوقف عندما يكتشف أنهما نظيفان.",
      },
      {
        q: "هل لمرحاض ablute_ مقاسات منزلية عادية؟",
        a: "نعم. صُمّم للمنازل بمقاسات 47 × 29.5 × 41–51 سم (العرض × العمق × الارتفاع)، مع توصيل الصرف بالجدار أو بالأرضية.",
      },
      {
        q: "هل يمكن إخفاء مرحاض ablute_ أو جعله عنصرًا تصميميًا؟",
        a: "نعم. يمكن إخفاء ablute_ ضمن التصميم المعماري، أو إظهاره بطابع جمالي جريء، أو أي خيار بينهما.",
      },
      {
        q: "متى سيتوفر، وهل عليّ الدفع للانضمام إلى قائمة الانتظار؟",
        a: "ablute_ في المرحلة التجريبية ولم يُعلن عن موعد إطلاق أو سعر. والانضمام إلى قائمة الانتظار على www.ablute.pt لا يتطلب أي دفعة مسبقة.",
      },
      {
        q: "هل يراقب مرحاض ablute_ الصحة أيضًا؟",
        a: "تطوّر ablute_ أيضًا مستشعرات حيوية مدمجة تحلّل البول أثناء الاستخدام العادي. راجعوا قسم الصحة في الموقع لمزيد من التفاصيل. كما أن المستشعرات المدمجة في المقعد (تخطيط القلب، تخطيط التحجم الضوئي، وزن الجسم، درجة الحرارة) وتحليل البراز قيد التطوير.",
      },
    ],
  },
];
