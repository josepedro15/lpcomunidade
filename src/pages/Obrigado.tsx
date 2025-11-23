import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { seoConfig, socialLinks } from "@/config/seo";
import Orb from "@/components/Orb";
import { useParallax } from "@/hooks/use-parallax";
import { FloatingParticles } from "@/components/FloatingParticles";

const Obrigado = () => {
  useEffect(() => {
    document.title = "Obrigado pela compra | Comunidade IA";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Compra confirmada. Seu acesso à Comunidade IA foi enviado para o seu e-mail. Confira a caixa de entrada e a pasta de spam e siga as instruções para começar agora."
      );
    }
  }, []);

  const parallaxSlow = useParallax(0.15);
  const parallaxMedium = useParallax(0.3);
  const parallaxFast = useParallax(0.5);

  return (
    <>
      <FloatingParticles />
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 opacity-60">
          <Orb hue={0} hoverIntensity={0.3} rotateOnHover={true} forceHoverState={false} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40"></div>
        <div className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-gold/15 blur-2xl" style={{ transform: `translateY(${-parallaxSlow}px)` }} />
        <div className="absolute top-2/3 right-20 w-40 h-40 rounded-full bg-gold/20 blur-3xl" style={{ transform: `translateY(${-parallaxMedium}px)` }} />
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gold/15 blur-xl" style={{ transform: `translateY(${-parallaxFast}px)` }} />
      </div>

      <main className="relative z-10 min-h-screen text-foreground overflow-x-hidden px-6 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 mb-6">
            <Sparkles className="w-7 h-7 text-gold" />
            <span className="text-gold font-bold uppercase tracking-widest">Comunidade IA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Obrigado pela sua compra</h1>
          <p className="text-lg text-muted-foreground mb-10">
            Seu pagamento foi processado com segurança. Enviamos o e-mail de acesso para {seoConfig.siteName}. Se não encontrar em alguns minutos, verifique a pasta de spam.
          </p>

          <div className="grid gap-4 text-left mb-12">
            {["Confira seu e-mail e siga as instruções", "Verifique a pasta de spam/lixo eletrônico", "Salve o e-mail de acesso para futuras referências"].map((t, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-card border border-gold/20 rounded-lg">
                <Check className="w-5 h-5 text-gold" />
                <span className="text-base">{t}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button asChild variant="premium" size="lg" className="min-w-64">
              <a href={socialLinks.whatsappVip} target="_blank" rel="noopener noreferrer">Entrar no grupo VIP do WhatsApp</a>
            </Button>
            <Button asChild variant="premium" size="lg" className="min-w-64">
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer">Acompanhar no Instagram</a>
            </Button>
            <Button asChild variant="premiumOutline" size="lg" className="min-w-64">
              <Link to="/">Voltar ao início</Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Obrigado;