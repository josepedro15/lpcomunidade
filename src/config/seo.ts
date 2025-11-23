/**
 * SEO Configuration
 * Centralized SEO settings for the application
 */

export const seoConfig = {
  siteName: "LP Comunidade IA",
  siteUrl: "https://lpcomunidade.com",
  defaultTitle: "IA para Empresários | Domine o Mercado com Inteligência Artificial",
  defaultDescription:
    "Empresários inteligentes já estão usando IA para vender mais, automatizar processos e multiplicar resultados. Entre para a comunidade exclusiva que domina o mercado com IA. Lives semanais, templates prontos e estratégias práticas.",
  author: "LP Comunidade",
  keywords: [
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
  twitterHandle: "@lpcomunidade",
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
  facebook: "https://facebook.com/lpcomunidade",
  instagram: "https://instagram.com/lpcomunidade",
  linkedin: "https://linkedin.com/company/lpcomunidade",
  twitter: "https://twitter.com/lpcomunidade",
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

