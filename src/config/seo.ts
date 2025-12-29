/**
 * SEO Configuration
 * Centralized SEO settings for the application
 */

export const seoConfig = {
  siteName: "Comunidade VisionarIA",
  siteUrl: "https://visionaria.com.br",
  defaultTitle: "Comunidade VisionarIA | Empresários Visionários Dominam o Mercado com IA",
  defaultDescription:
    "Empresários visionários já estão usando IA para vender mais, automatizar processos e multiplicar resultados. Entre para a Comunidade VisionarIA e domine o mercado. Lives semanais, templates prontos e estratégias práticas.",
  author: "Comunidade VisionarIA",
  keywords: [
    "comunidade visionaria",
    "visionaria ia",
    "inteligência artificial",
    "IA para empresários",
    "IA para vendas",
    "automação com IA",
    "produtividade com IA",
    "comunidade IA",
    "curso IA",
    "consultoria IA",
    "ChatGPT para empresas",
    "automação de vendas",
    "estratégias com IA",
    "templates de IA",
    "prompts avançados",
    "IA aplicada",
  ],
  twitterHandle: "@visionaria_ia",
  ogImage: "/og-image.jpg",
  twitterImage: "/twitter-image.jpg",
  locale: "pt_BR",
  type: "website",
} as const;

export const pricingPlans = {
  anual: {
    name: "Plano Anual",
    price: 29.9,
    currency: "BRL",
    description: "Cobrança anual. Melhor custo-benefício.",
    features: [
      "Lives semanais",
      "Comunidade exclusiva",
      "Conteúdos práticos",
    ],
    popular: true,
  },
  mensal: {
    name: "Plano Mensal",
    price: 39.9,
    currency: "BRL",
    description: "Sem fidelidade. Cancele quando quiser.",
    features: [
      "Lives semanais",
      "Comunidade exclusiva",
      "Conteúdos práticos",
    ],
  },
} as const;

export const socialLinks = {
  facebook: "https://facebook.com/comunidadevisionaria",
  instagram: "https://instagram.com/visionaria.ia",
  linkedin: "https://linkedin.com/company/comunidadevisionaria",
  twitter: "https://twitter.com/visionaria_ia",
  whatsappVip: "https://chat.whatsapp.com/SEU_LINK_VIP",
} as const;

export const structuredData = {
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    description: seoConfig.defaultDescription,
    inLanguage: "pt-BR",
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: seoConfig.siteName,
    url: seoConfig.siteUrl,
    logo: `${seoConfig.siteUrl}/logo.png`,
    description: seoConfig.defaultDescription,
    sameAs: Object.values(socialLinks),
  },
} as const;

