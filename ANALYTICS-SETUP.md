# 📊 Analytics & Tracking Setup Guide

## Google Analytics 4 (GA4)

### 1. Instalação via Google Tag Manager (Recomendado)

Adicione este código no `<head>` do `index.html` (antes do `</head>`):

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
<!-- End Google Tag Manager -->
```

Adicione este código no `<body>` (logo após `<body>`):

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

**Substitua `GTM-XXXXXXX` pelo seu ID do Google Tag Manager.**

### 2. Instalação Direta do GA4 (Alternativa)

```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Substitua `G-XXXXXXXXXX` pelo seu ID do GA4.**

---

## Facebook Pixel

Adicione no `<head>` do `index.html`:

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

### Eventos de Conversão no Facebook

Adicione na função `handleCTA` no `Index.tsx`:

```typescript
const handleCTA = () => {
  // Facebook Pixel Event
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
  
  window.scrollTo({ top: document.getElementById('pricing')?.offsetTop || 0, behavior: 'smooth' });
};
```

---

## Google Ads Conversion Tracking

```html
<!-- Google Ads Conversion -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-XXXXXXXXX');
</script>
```

### Tracking de Conversão nos Botões

```typescript
// Adicione na função de checkout
const handleCheckout = (plan: string) => {
  // Google Ads Conversion
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      'send_to': 'AW-XXXXXXXXX/xxxxx',
      'value': plan === 'essencial' ? 49 : plan === 'completo' ? 97 : 297,
      'currency': 'BRL'
    });
  }
};
```

---

## Hotjar (Heatmaps & Session Recording)

```html
<!-- Hotjar Tracking Code -->
<script>
    (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:YOUR_HOTJAR_ID,hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
</script>
```

---

## Microsoft Clarity (Alternativa ao Hotjar - Grátis)

```html
<!-- Microsoft Clarity -->
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "YOUR_CLARITY_ID");
</script>
```

---

## LinkedIn Insight Tag

```html
<!-- LinkedIn Insight Tag -->
<script type="text/javascript">
_linkedin_partner_id = "YOUR_PARTNER_ID";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);
</script><script type="text/javascript">
(function(l) {
if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
window.lintrk.q=[]}
var s = document.getElementsByTagName("script")[0];
var b = document.createElement("script");
b.type = "text/javascript";b.async = true;
b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
s.parentNode.insertBefore(b, s);})(window.lintrk);
</script>
<noscript>
<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=YOUR_PARTNER_ID&fmt=gif" />
</noscript>
```

---

## Event Tracking Component (React)

Crie um arquivo: `src/lib/analytics.ts`

```typescript
/**
 * Analytics utility functions
 * Centralized tracking for all analytics platforms
 */

export type EventCategory = 
  | 'cta'
  | 'pricing'
  | 'navigation'
  | 'form'
  | 'video'
  | 'social';

export type EventAction = 
  | 'click'
  | 'view'
  | 'submit'
  | 'play'
  | 'scroll'
  | 'share';

interface EventParams {
  category: EventCategory;
  action: EventAction;
  label?: string;
  value?: number;
  plan?: string;
}

/**
 * Track event across all platforms
 */
export const trackEvent = ({
  category,
  action,
  label,
  value,
  plan,
}: EventParams) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      plan: plan,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    if (category === 'cta' && action === 'click') {
      (window as any).fbq('track', 'Lead');
    }
    if (category === 'pricing' && action === 'click') {
      (window as any).fbq('track', 'InitiateCheckout', {
        content_name: plan,
        value: value,
        currency: 'BRL',
      });
    }
  }

  // LinkedIn Insight
  if (typeof window !== 'undefined' && (window as any).lintrk) {
    (window as any).lintrk('track', { conversion_id: 'YOUR_CONVERSION_ID' });
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event Tracked:', {
      category,
      action,
      label,
      value,
      plan,
    });
  }
};

/**
 * Track page view
 */
export const trackPageView = (url: string, title?: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
      page_title: title,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'PageView');
  }
};

/**
 * Track CTA click
 */
export const trackCTAClick = (location: string) => {
  trackEvent({
    category: 'cta',
    action: 'click',
    label: location,
  });
};

/**
 * Track pricing plan selection
 */
export const trackPricingClick = (plan: string, price: number) => {
  trackEvent({
    category: 'pricing',
    action: 'click',
    label: plan,
    value: price,
    plan: plan,
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (percentage: number) => {
  if (percentage === 25 || percentage === 50 || percentage === 75 || percentage === 100) {
    trackEvent({
      category: 'navigation',
      action: 'scroll',
      label: `${percentage}%`,
      value: percentage,
    });
  }
};
```

---

## Uso no Componente Index.tsx

Atualize o `Index.tsx`:

```typescript
import { trackCTAClick, trackPricingClick } from "@/lib/analytics";

const Index = () => {
  const handleCTA = (location: string) => {
    trackCTAClick(location);
    window.scrollTo({ top: document.getElementById('pricing')?.offsetTop || 0, behavior: 'smooth' });
  };

  const handlePlanClick = (plan: string, price: number) => {
    trackPricingClick(plan, price);
    // Redirecionar para checkout
    window.location.href = `https://seu-checkout.com/${plan}`;
  };

  return (
    // ... seu código
    <Button 
      onClick={() => handleCTA('hero')}
      variant="premium"
    >
      Quero entrar agora
    </Button>
    // ...
    <Button 
      onClick={() => handlePlanClick('essencial', 49)}
      variant="premiumOutline"
    >
      Começar Agora
    </Button>
  );
};
```

---

## Scroll Tracking Hook

Crie: `src/hooks/useScrollTracking.ts`

```typescript
import { useEffect } from 'react';
import { trackScrollDepth } from '@/lib/analytics';

export const useScrollTracking = () => {
  useEffect(() => {
    let tracked25 = false;
    let tracked50 = false;
    let tracked75 = false;
    let tracked100 = false;

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercentage >= 25 && !tracked25) {
        tracked25 = true;
        trackScrollDepth(25);
      }
      if (scrollPercentage >= 50 && !tracked50) {
        tracked50 = true;
        trackScrollDepth(50);
      }
      if (scrollPercentage >= 75 && !tracked75) {
        tracked75 = true;
        trackScrollDepth(75);
      }
      if (scrollPercentage >= 100 && !tracked100) {
        tracked100 = true;
        trackScrollDepth(100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
```

Use no `Index.tsx`:

```typescript
import { useScrollTracking } from '@/hooks/useScrollTracking';

const Index = () => {
  useScrollTracking(); // Adicione esta linha
  
  // ... resto do código
};
```

---

## Cookie Consent Banner (LGPD/GDPR)

Instale a biblioteca:

```bash
npm install react-cookie-consent
```

Adicione no `App.tsx`:

```typescript
import CookieConsent from "react-cookie-consent";

const App = () => (
  <>
    {/* ... seu código existente ... */}
    
    <CookieConsent
      location="bottom"
      buttonText="Aceitar"
      declineButtonText="Recusar"
      enableDeclineButton
      cookieName="lpcomunidade_consent"
      style={{ background: "#000000", borderTop: "2px solid #D4AF37" }}
      buttonStyle={{ 
        background: "#D4AF37", 
        color: "#000000", 
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "6px"
      }}
      declineButtonStyle={{
        background: "transparent",
        border: "2px solid #D4AF37",
        color: "#D4AF37",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "6px"
      }}
      expires={365}
    >
      Este site usa cookies para melhorar sua experiência e analisar o tráfego.
      <a href="/politica-de-privacidade" style={{ color: "#D4AF37", marginLeft: "8px" }}>
        Política de Privacidade
      </a>
    </CookieConsent>
  </>
);
```

---

## Testing Your Analytics

### Chrome DevTools

1. Abra DevTools (F12)
2. Vá para a aba "Network"
3. Filtre por "Analytics" ou "gtm"
4. Clique nos botões e verifique as requisições

### GA4 Debug Mode

Adicione ao código do GA4:

```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'debug_mode': true
});
```

### Browser Extensions

- **Tag Assistant** (Google)
- **Facebook Pixel Helper**
- **LinkedIn Insight Tag Helper**

---

## Environment Variables

Crie `.env`:

```env
# Analytics IDs
VITE_GA4_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
VITE_FB_PIXEL_ID=XXXXXXXXXXXXXXXXX
VITE_HOTJAR_ID=XXXXXXX
VITE_CLARITY_ID=XXXXXXXXX
VITE_LINKEDIN_PARTNER_ID=XXXXXXX

# Checkout URLs
VITE_CHECKOUT_URL_ESSENCIAL=https://...
VITE_CHECKOUT_URL_COMPLETO=https://...
VITE_CHECKOUT_URL_PREMIUM=https://...
```

Use no código:

```typescript
const GA4_ID = import.meta.env.VITE_GA4_ID;
```

---

**Última atualização:** 2025-11-16

