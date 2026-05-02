export type TechnicalSpec = {
  label: string;
  value: string;
};

export type ProductLine = {
  name: string;
  slug: string;
  subtitle: string;
  image: string;
  gallery: string[];
  materials: string[];
  machines: string[];
  gritOptions: string[];
  hardness?: string[];
  sizes?: string[];
  couplings?: string[];
  details: string[];
};

export type FinalDataField = {
  key: string;
  label: string;
  status: "ready" | "needs_real_data";
  notes?: string;
};

export const finalDataFields = {
  identity: [
    { key: "company.legalName", label: "Nome legal da empresa", status: "ready" },
    { key: "company.brandName", label: "Marca comercial", status: "ready" },
    {
      key: "company.tagline",
      label: "Tagline institucional",
      status: "ready",
      notes: "Preenchido com a formulação final fornecida."
    }
  ],
  contacts: [
    {
      key: "contact.email",
      label: "Email comercial principal",
      status: "ready",
      notes: "Usado no formulário, no footer e em blocos de contacto direto."
    },
    {
      key: "contact.phone",
      label: "Telefone comercial",
      status: "ready",
      notes: "Usado no formulário e em contacto direto."
    },
    {
      key: "contact.whatsapp",
      label: "Número de WhatsApp",
      status: "ready",
      notes: "O botão fixo aparece automaticamente com este valor."
    },
    {
      key: "contact.locationLabel",
      label: "Etiqueta de localização/âmbito comercial",
      status: "ready",
      notes: "Preenchido com o local indicado."
    },
    {
      key: "contact.locationValue",
      label: "Valor da localização/âmbito comercial",
      status: "ready",
      notes: "Preenchido com o país indicado."
    },
    {
      key: "contact.responseWindow",
      label: "Prazo de resposta comercial",
      status: "ready",
      notes: "Promessa comercial já definida."
    }
  ],
  ctas: [
    {
      key: "cta.primaryQuote",
      label: "CTA principal de orçamento",
      status: "ready"
    },
    {
      key: "cta.primaryProducts",
      label: "CTA principal de catálogo/produtos",
      status: "ready"
    },
    {
      key: "cta.secondaryCompany",
      label: "CTA secundário institucional",
      status: "ready"
    },
    {
      key: "cta.formSubmit",
      label: "CTA de envio do formulário",
      status: "ready"
    }
  ],
  footer: [
    {
      key: "footer.summary",
      label: "Resumo institucional no footer",
      status: "ready"
    },
    {
      key: "footer.contactNote",
      label: "Nota de contacto comercial no footer",
      status: "ready"
    }
  ],
  form: [
    {
      key: "form.title",
      label: "Título do formulário",
      status: "ready"
    },
    {
      key: "form.description",
      label: "Descrição de enquadramento do formulário",
      status: "ready"
    },
    {
      key: "form.linePlaceholder",
      label: "Placeholder da linha de produto",
      status: "ready"
    },
    {
      key: "form.applicationPlaceholder",
      label: "Placeholder da aplicação",
      status: "ready"
    },
    {
      key: "form.compatibilityPlaceholder",
      label: "Placeholder de material/compatibilidade",
      status: "ready"
    }
  ],
  institutional: [
    {
      key: "company.heroTitle",
      label: "Headline principal da homepage",
      status: "ready",
      notes: "Preenchida com a versão final fornecida."
    },
    {
      key: "company.heroDescription",
      label: "Subheadline principal da homepage",
      status: "ready",
      notes: "Preenchida com a versão final fornecida."
    },
    {
      key: "company.about",
      label: "Texto base institucional",
      status: "ready",
      notes: "Revisto com a formulação enviada."
    },
    {
      key: "company.companyStatement",
      label: "Declaração institucional de posicionamento",
      status: "ready",
      notes: "Revista com a formulação enviada."
    }
  ]
} satisfies Record<string, FinalDataField[]>;

export const cta = {
  primaryQuote: "Pedir orçamento",
  primaryProducts: "Ver linhas de produto",
  secondaryCompany: "Conhecer a empresa",
  formSubmit: "Enviar pedido"
} as const;

export const company = {
  legalName: "Abrasives NT Europe Lda",
  brandName: "Abrasivos NT",
  tagline: "Abrasivos Resinoides para todos os tipos de pedras naturais ou artificiais.",
  heroTitle: "Abrasivos Ceramicos para todos os tipos de pedras naturais e artificiais.",
  heroDescription:
    "A Abrasivos NT fornece soluções abrasivas para polimento e acabamento no setor da pedra, com foco em clareza técnica, apoio comercial direto e escolha adequada para cada aplicação.",
  about:
    "A Abrasivos NT é a marca comercial da Abrasives NT Europe Lda, dedicada à comercialização de abrasivos para trabalhos de polimento, acabamento e preparação de superfícies para todos os tipos de pedras naturais ou artificiais. O foco da empresa está numa oferta clara, técnica e orientada às necessidades reais de profissionais e empresas do setor.",
  companyStatement:
    "Trabalhamos com uma abordagem comercial simples e objetiva: ajudar cada cliente a identificar o abrasivo mais adequado ao material, à máquina e ao resultado pretendido. Num mercado técnico, acreditamos que confiança, clareza e resposta comercial rápida fazem a diferença.",
  trustHighlights: [
    "Especialização em abrasivos para pedra",
    "Leitura por aplicação, material e máquina",
    "Estrutura comercial orientada a orçamento",
    "Base preparada para crescimento do catálogo"
  ],
  audience: [
    "Empresas de transformação de pedra",
    "Marmorarias",
    "Profissionais de acabamento e polimento",
    "Compradores técnicos e responsáveis de produção"
  ]
};

export const footerContent = {
  summary:
    "Abrasivos cerâmicos para todos os tipos de pedras naturais e artificiais, com foco numa produção personalizada de acordo com a necessidade específica de cada cliente e apoio técnico e comercial especializado.",
  contactNote:
    "Para informações comerciais, compatibilidades e pedidos de orçamento, entre em contacto com a nossa equipa."
};

export const formContent = {
  title: "Peça o seu orçamento",
  description:
    "Indique o produto, a aplicação ou o tipo de material com que trabalha. A nossa equipa comercial responde com a maior brevidade possível.",
  linePlaceholder: "Ex.: Frankfurt Plus, Mó 125 mm ou Fickert 140",
  applicationPlaceholder: "Ex.: Polimento de mármore, granito ou terrazzo",
  compatibilityPlaceholder: "Ex.: Máquina, material ou necessidade específica",
  messagePlaceholder:
    "Descreva o que procura, o tipo de pedra, a aplicação e qualquer detalhe técnico relevante."
};

const commonDetails = [
  "Identificação individual por marcação com botão numérico de cor.",
  "Desenvolvimento de formulações exclusivas para todos os tipos de pedra.",
  "Armazenamento indefinido.",
  "Aumento de produtividade e redução de custos face aos abrasivos tradicionais.",
  "Redução de custos energéticos devido à grande diminuição de paragens da máquina."
];

export const productLines: ProductLine[] = [
  {
    name: "Frankfurt Plus",
    slug: "frankfurt-plus",
    subtitle: "Abrasivo resinoide para polimento e acabamento técnico em pedra natural ou artificial.",
    image: "/products/frankfurt-plus-main.png",
    gallery: ["/products/frankfurt-plus-sheet.png"],
    materials: ["Granito", "Quartzo", "Betão", "Mármore", "Terrazzo"],
    machines: ["Máquina automática", "Planetária / pisos", "Semi-automática", "CNC"],
    gritOptions: ["#36", "#46", "#60", "#80", "#120", "#220", "#320", "#400", "#600", "#800", "#1000", "#1500", "#3000", "#5000", "#10000"],
    hardness: ["Soft", "Medium", "Hard"],
    details: commonDetails
  },
  {
    name: "Mó 125 mm",
    slug: "mo-125mm",
    subtitle: "Solução versátil para polimento de topos, pisos e operações de acabamento com diferentes acoplamentos.",
    image: "/products/mo-125mm-main.png",
    gallery: ["/products/mo-125mm-sheet.png"],
    materials: ["Granito", "Quartzo", "Mármore", "Terrazzo"],
    machines: ["Edge polisher", "Floors", "CNC"],
    gritOptions: ["#60", "#80", "#120", "#220", "#400", "#800", "#1500", "#3000", "#5000"],
    sizes: ["100 mm / 4\"", "125 mm / 5\"", "150 mm / 6\""],
    couplings: ["Snail DX - SX", "Metric M14", "Velcro"],
    details: commonDetails
  },
  {
    name: "Fickert 140",
    slug: "fickert-140",
    subtitle: "Linha técnica para polimento industrial de granito, quartzo e materiais de maior dureza.",
    image: "/products/fickert-140-main.png",
    gallery: ["/products/fickert-140-sheet.png"],
    materials: ["Granito", "Quartzo", "Betão", "Mármore", "Terrazzo"],
    machines: ["Máquina automática", "Semi-automática", "CNC"],
    gritOptions: ["#36", "#46", "#60", "#80", "#120", "#220", "#320", "#400", "#600", "#800", "#1000", "#1500", "#3000", "#5000"],
    hardness: ["Soft", "Medium", "Hard"],
    details: commonDetails
  }
];

export const trustPillars = [
  {
    title: "Catálogo técnico claro",
    description: "Apresentação objetiva por linha, aplicação, material e compatibilidade de máquina."
  },
  {
    title: "Comunicação comercial simples",
    description: "Estrutura pensada para transformar dúvida técnica em pedido de orçamento qualificado."
  },
  {
    title: "Posicionamento profissional",
    description: "Visual corporate, linguagem especializada e foco no setor da pedra."
  }
];

export const processHighlights = [
  {
    title: "Mármore",
    description: "Soluções orientadas para polimento progressivo, acabamento e brilho em mármore."
  },
  {
    title: "Granito",
    description: "Linhas adequadas a granito e materiais duros, com leitura técnica para contexto industrial."
  },
  {
    title: "Polimento de Topos",
    description: "Entrada direta para operações de topo, detalhe e acabamento localizado."
  }
];

export const contact = {
  intro:
    "O contacto comercial deve recolher contexto técnico suficiente para orientar o orçamento com mais rapidez e precisão.",
  email: "geral.carlospinto@outlook.com",
  phone: "+351 963537100",
  whatsapp: "+351 963537100",
  locationLabel: "Salir de Matos",
  locationValue: "Portugal",
  responseWindow: "Resposta comercial com a maior brevidade possível."
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Empresa", href: "/empresa" },
  { label: "Produtos", href: "/produtos" },
  { label: "Contato", href: "/orcamento" }
] as const;


