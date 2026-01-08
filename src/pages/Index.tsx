import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Target, TrendingUp, Users, Brain, Clock, BarChart, Rocket, X, AlertTriangle } from "lucide-react";
import { useEffect } from "react";
import Orb from "@/components/Orb";
import { useParallax } from "@/hooks/use-parallax";
import { FloatingParticles } from "@/components/FloatingParticles";
import BlurText from "@/components/BlurText";
import { seoConfig } from "@/config/seo";
import Footer from "@/components/Footer";

const Index = () => {
  // SEO: Update meta description dynamically
  useEffect(() => {
    document.title = seoConfig.defaultTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", seoConfig.defaultDescription);
    }
  }, []);

  // Parallax effects
  const parallaxSlow = useParallax(0.15);
  const parallaxMedium = useParallax(0.3);
  const parallaxFast = useParallax(0.5);

  const handleCTA = () => {
    window.scrollTo({ top: document.getElementById('pricing')?.offsetTop || 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Partículas Flutuantes */}
      <FloatingParticles />

      {/* Background Parallax Fixo - Sempre Visível */}
      <div className="fixed inset-0 z-0">
        {/* Orb Principal - Único e Mais Visível */}
        <div className="absolute inset-0 opacity-60">
          <Orb
            hue={0}
            hoverIntensity={0.3}
            rotateOnHover={true}
            forceHoverState={false}
          />
        </div>

        {/* Gradient Overlay - Mais Suave */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/40"></div>

        {/* Elementos Parallax Decorativos */}
        <div
          className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-gold/15 blur-2xl"
          style={{ transform: `translateY(${-parallaxSlow}px)` }}
        />
        <div
          className="absolute top-2/3 right-20 w-40 h-40 rounded-full bg-gold/20 blur-3xl"
          style={{ transform: `translateY(${-parallaxMedium}px)` }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gold/15 blur-xl"
          style={{ transform: `translateY(${-parallaxFast}px)` }}
        />
      </div>

      {/* Conteúdo Principal - Rola sobre o background */}
      <main className="relative z-10 min-h-screen text-foreground overflow-x-hidden" role="main">

        {/* SEÇÃO 1 - HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6" aria-labelledby="hero-heading">
          <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
            <h1 id="hero-heading" className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight">
              <BlurText
                text="O futuro do trabalho já começou."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-6xl lg:text-7xl font-black leading-tight"
              />
              <br />
              <BlurText
                text="A pergunta é: você vai se adaptar ou ficar para trás?"
                delay={50}
                animateBy="words"
                direction="top"
                className="text-2xl md:text-5xl lg:text-6xl font-black leading-tight text-gold"
              />
            </h1>

            <div className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              <BlurText
                text="Uma comunidade para quem quer antecipar o futuro, usar Inteligência Artificial de forma prática e criar novas fontes de renda ou acelerar pequenos negócios — mesmo sem ser técnico."
                delay={30}
                animateBy="words"
                direction="bottom"
                className="text-lg md:text-2xl text-muted-foreground leading-relaxed"
              />
            </div>

            <p className="text-base md:text-xl text-foreground/80 mb-12 flex flex-col md:flex-row items-center justify-center gap-2">
              <span className="text-2xl">💡</span>
              <span className="text-center">Trabalho está ficando escasso. Tecnologia está ficando abundante.</span>
            </p>

            <Button
              onClick={handleCTA}
              variant="premium"
              size="xl"
              className="text-lg md:text-xl uppercase tracking-wider animate-scale-in whitespace-normal h-auto py-6 md:py-8 px-6 leading-tight"
              aria-label="Entrar para a comunidade por R$39,90/mês"
            >
              Entrar na Comunidade agora por R$39,90/mês
            </Button>

            {/* Scroll Indicator com Parallax */}
            <div
              className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
              style={{ transform: `translateY(${parallaxFast * 0.5}px)`, opacity: 1 - (parallaxSlow / 200) }}
            >
              <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
              <div className="text-gold text-xs uppercase tracking-widest animate-bounce">Scroll</div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 2 - O PROBLEMA (CONEXÃO EMOCIONAL) */}
        <section className="py-24 px-6 bg-secondary/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              O mundo <span className="text-gold">mudou.</span>
            </h2>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-12">
              Mas a maioria das pessoas ainda está vivendo como se nada estivesse acontecendo.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              {[
                { icon: AlertTriangle, text: "Empregos estão sendo automatizados" },
                { icon: AlertTriangle, text: "Pequenos negócios estão sendo engolidos" },
                { icon: AlertTriangle, text: "Profissões tradicionais estão perdendo valor" },
                { icon: AlertTriangle, text: "Trabalhar mais não significa ganhar mais" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center p-6 bg-card border border-red-500/20 rounded-lg hover:border-red-500/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <item.icon className="w-8 h-8 text-red-400 flex-shrink-0" />
                  <p className="text-lg text-foreground/90 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl md:text-2xl mt-12 text-foreground/90 leading-relaxed">
              Enquanto isso, a Inteligência Artificial está abrindo oportunidades enormes —<br />
              <span className="text-gold font-bold">mas só para quem se antecipa.</span>
            </p>

            <p className="text-2xl font-bold mt-8 text-red-400 flex items-center justify-center gap-2">
              <span>📉</span> Esperar estabilidade virou o maior risco.
            </p>
          </div>
        </section>

        {/* SEÇÃO 3 - A VIRADA (NOVA PERSPECTIVA) */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Nunca foi tão fácil <span className="text-gold">começar ou acelerar</span> um negócio.
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Hoje, uma pessoa comum pode:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {[
                { icon: Brain, text: "Usar IA como sócia invisível" },
                { icon: Rocket, text: "Criar produtos, serviços e renda sem equipe grande" },
                { icon: Zap, text: "Automatizar tarefas que antes exigiam funcionários" },
                { icon: TrendingUp, text: "Competir com empresas muito maiores" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center p-6 bg-gradient-to-r from-gold/10 to-gold/5 border border-gold/30 rounded-lg hover:border-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <item.icon className="w-8 h-8 text-gold flex-shrink-0" />
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-bold mt-16 text-foreground/90">
              O problema não é a tecnologia.<br />
              <span className="text-gold">É não saber como usar.</span>
            </p>
          </div>
        </section>

        {/* SEÇÃO 4 - A SOLUÇÃO (A COMUNIDADE) */}
        <section className="py-24 px-6 bg-secondary/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-8">
              A Comunidade que prepara você para o <span className="text-gold">novo jogo econômico.</span>
            </h2>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Criamos uma comunidade acessível para quem quer:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
              {[
                "Entender o futuro do trabalho",
                "Aprender IA aplicada (sem tecnicismo)",
                "Construir renda, negócio ou vantagem competitiva",
                "Estar cercado de pessoas que não estão esperando o futuro chegar"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center p-6 bg-card border-l-4 border-gold rounded-lg hover:bg-card/80 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Check className="w-7 h-7 text-gold flex-shrink-0" />
                  <p className="text-lg font-medium text-left">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEÇÃO 5 - PARA QUEM É (CLAREZA DE PÚBLICO) */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              Essa comunidade é <span className="text-gold">para você?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Para quem é */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gold flex items-center gap-2">
                  <Check className="w-8 h-8" /> Para quem é:
                </h3>
                <div className="space-y-4">
                  {[
                    "Tem um pequeno negócio e sente que precisa acelerar",
                    "Ainda não empreende, mas sabe que depender só de emprego é arriscado",
                    "Quer aprender IA sem linguagem técnica",
                    "Quer se antecipar às mudanças do mercado",
                    "Busca clareza, método e visão de futuro"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 bg-card border border-gold/20 rounded-lg animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                      <Check className="w-6 h-6 text-gold flex-shrink-0 mt-0.5" />
                      <p className="text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Para quem NÃO é */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-muted-foreground flex items-center gap-2">
                  <X className="w-8 h-8" /> Não é para quem:
                </h3>
                <div className="space-y-4">
                  {[
                    "Quer fórmula mágica",
                    "Não quer mudar mentalidade",
                    "Acredita que \"vai dar tudo certo\" sem agir"
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-3 items-start p-4 bg-muted/20 border border-muted rounded-lg opacity-70 animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                      <X className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <p className="text-lg text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 6 - O QUE VOCÊ VAI RECEBER (VALOR) */}
        <section className="py-24 px-6 bg-secondary/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
              Dentro da Comunidade você terá <span className="text-gold">acesso a:</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Brain, text: "Conteúdos semanais sobre futuro do trabalho, IA e negócios" },
                { icon: Zap, text: "IA aplicada para renda, produtividade e pequenos negócios" },
                { icon: TrendingUp, text: "Estratégias práticas para começar ou acelerar" },
                { icon: Users, text: "Comunidade ativa (networking real)" },
                { icon: Target, text: "Direção estratégica — o que focar agora e o que ignorar" },
                { icon: Rocket, text: "Mentalidade de antecipação, não de reação" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center p-6 bg-gradient-to-r from-card to-card/50 border border-gold/30 rounded-lg hover:border-gold hover:shadow-gold transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 80}ms` }}>
                  <item.icon className="w-8 h-8 text-gold flex-shrink-0" />
                  <p className="text-lg font-semibold">{item.text}</p>
                </div>
              ))}
            </div>

            <p className="text-xl text-center mt-12 text-gold font-semibold">
              Tudo explicado de forma simples, prática e aplicável.
            </p>
          </div>
        </section>

        {/* SEÇÃO 7 - PREÇO (QUEBRA DE OBJEÇÃO) */}
        <section id="pricing" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
              Isso não é um curso.<br />
              <span className="text-gold">É um ambiente de preparação contínua.</span>
            </h2>

            <p className="text-xl md:text-2xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
              Você não paga por conteúdo.<br />
              <span className="text-foreground font-semibold">Você paga para não ficar para trás.</span>
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-16">
              {/* Plano Anual */}
              <div className="p-8 bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold rounded-lg shadow-gold-strong relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 rounded-full text-sm font-bold uppercase">
                  Mais econômico
                </div>
                <h3 className="text-2xl font-bold mb-2">Plano Anual</h3>
                <div className="mb-2">
                  <span className="text-5xl font-black text-gold">R$ 29,90</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground mb-6">Cobrança anual • Melhor custo-benefício</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Conteúdos semanais</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Comunidade exclusiva</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> IA aplicada na prática</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Direção estratégica</li>
                </ul>
                <Button
                  asChild
                  variant="premium"
                  size="lg"
                  className="w-full"
                  aria-label="Assinar plano Anual - R$ 29,90 por mês (cobrança anual)"
                >
                  <a href="https://pay.kiwify.com.br/o1mubNB" target="_blank" rel="noopener noreferrer">Assinar Anual</a>
                </Button>
              </div>

              {/* Plano Mensal */}
              <div className="p-8 bg-card border border-gold/20 rounded-lg hover:border-gold transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Plano Mensal</h3>
                <div className="mb-2">
                  <span className="text-5xl font-black text-gold">R$ 39,90</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
                <p className="text-muted-foreground mb-6">Sem fidelidade • Cancele quando quiser</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Conteúdos semanais</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Comunidade exclusiva</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> IA aplicada na prática</li>
                  <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Direção estratégica</li>
                </ul>
                <Button
                  asChild
                  variant="premiumOutline"
                  size="lg"
                  className="w-full"
                  aria-label="Assinar plano Mensal - R$ 39,90 por mês"
                >
                  <a href="https://pay.kiwify.com.br/rE42c4Y" target="_blank" rel="noopener noreferrer">Assinar Mensal</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* SEÇÃO 8 - PROVA SOCIAL / AUTORIDADE */}
        <section className="py-24 px-6 bg-secondary/10 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12">
              Essa comunidade nasce da <span className="text-gold">prática real:</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Negócios físicos migrando para o digital",
                "Pequenos empresários usando tecnologia para competir",
                "Pessoas comuns criando novas fontes de renda",
                "IA aplicada no mundo real, não em teoria"
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-center p-6 bg-card border border-gold/20 rounded-lg hover:border-gold/40 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                  <Sparkles className="w-7 h-7 text-gold flex-shrink-0" />
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>

            <p className="text-2xl md:text-3xl font-bold mt-16">
              Não é hype.<br />
              <span className="text-gold">É preparação.</span>
            </p>
          </div>
        </section>

        {/* SEÇÃO 9 - URGÊNCIA INTELIGENTE */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-12">
              O futuro <span className="text-gold">não espera</span> você se sentir pronto.
            </h2>

            <div className="space-y-6 text-2xl md:text-3xl font-semibold leading-relaxed">
              <p>Quem entra agora, <span className="text-gold">entra cedo.</span></p>
              <p>Quem entra cedo, <span className="text-gold">aprende mais rápido.</span></p>
              <p>Quem aprende rápido, <span className="text-gold">constrói vantagem.</span></p>
            </div>

            <p className="text-xl md:text-2xl mt-12 text-muted-foreground">
              👉 Entre hoje. <span className="text-foreground font-semibold">Amanhã o jogo já mudou.</span>
            </p>
          </div>
        </section>

        {/* SEÇÃO 10 - CTA FINAL (DECISÃO) */}
        <section className="py-32 px-6 relative">
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              O trabalho vai mudar.<br />
              A pergunta é: <span className="text-gold">você vai mudar antes?</span>
            </h2>

            <Button
              onClick={handleCTA}
              variant="premium"
              size="xl"
              className="text-lg md:text-xl uppercase tracking-wider shadow-glow-gold whitespace-normal h-auto py-6 md:py-8 px-6 leading-tight max-w-full"
              aria-label="Decisão final - Entrar para a comunidade agora"
            >
              🚀 Quero entrar na Comunidade por R$39,90/mês
            </Button>
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </main>
    </>
  );
};

export default Index;
