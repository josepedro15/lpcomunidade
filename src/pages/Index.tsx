import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap, Target, TrendingUp, Users, Brain, Clock, BarChart, Rocket } from "lucide-react";
import { useEffect } from "react";
import Orb from "@/components/Orb";
import { useParallax } from "@/hooks/use-parallax";
import { FloatingParticles } from "@/components/FloatingParticles";

const Index = () => {
  // SEO: Update meta description dynamically
  useEffect(() => {
    document.title = "IA para Empresários | Domine o Mercado com Inteligência Artificial";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Empresários inteligentes já estão usando IA para vender mais, automatizar processos e multiplicar resultados. Entre para a comunidade exclusiva que domina o mercado com IA."
      );
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
        {/* Layer 1 - Orb Principal (fundo) */}
        <div className="absolute inset-0 opacity-25">
          <Orb 
            hue={0}
            hoverIntensity={0.2}
            rotateOnHover={false}
            forceHoverState={false}
          />
        </div>
        
        {/* Layer 2 - Orb Secundário (meio) */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] opacity-20">
          <Orb 
            hue={10}
            hoverIntensity={0.3}
            rotateOnHover={true}
            forceHoverState={false}
          />
        </div>
        
        {/* Layer 3 - Orb Terciário (detalhe) */}
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] opacity-15">
          <Orb 
            hue={-10}
            hoverIntensity={0.25}
            rotateOnHover={true}
            forceHoverState={false}
          />
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80"></div>
        
        {/* Elementos Parallax Decorativos */}
        <div 
          className="absolute top-1/3 left-10 w-32 h-32 rounded-full bg-gold/5 blur-2xl"
          style={{ transform: `translateY(${-parallaxSlow}px)` }}
        />
        <div 
          className="absolute top-2/3 right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl"
          style={{ transform: `translateY(${-parallaxMedium}px)` }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-gold/5 blur-xl"
          style={{ transform: `translateY(${-parallaxFast}px)` }}
        />
      </div>

      {/* Conteúdo Principal - Rola sobre o background */}
      <main className="relative z-10 min-h-screen text-foreground overflow-x-hidden" role="main">
        
        {/* SEÇÃO 1 - HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6" aria-labelledby="hero-heading">
          <div className="relative z-10 max-w-5xl mx-auto text-center animate-fade-in">
          <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight">
            Se você não usar IA <span className="text-gold">AGORA</span>,<br />
            alguém que usa vai tomar seu mercado.
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Empresários inteligentes já estão usando IA para vender mais, automatizar processos e multiplicar resultados.<br />
            <span className="text-foreground/80">Os outros… estão ficando para trás.</span>
          </p>
          
          <Button 
            onClick={handleCTA}
            variant="premium" 
            size="xl" 
            className="text-xl uppercase tracking-wider animate-scale-in"
            aria-label="Entrar para a comunidade de IA para empresários"
          >
            Quero entrar agora
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

      {/* SEÇÃO 2 - AUTORIDADE */}
      <section className="py-24 px-6 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Por que você deve <span className="text-gold">me ouvir?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: TrendingUp, text: "+X anos usando IA para acelerar resultados em negócios reais" },
              { icon: Target, text: "Estratégias aplicadas em operações de vendas, marketing e atendimento" },
              { icon: BarChart, text: "Projetos que aumentaram faturamento, produtividade e previsibilidade" },
              { icon: Brain, text: "Trabalho diário com automações, prompts avançados e IA aplicada a empresas" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start p-6 bg-card border border-gold/20 rounded-lg hover:border-gold/40 transition-all duration-300 animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
                <item.icon className="w-8 h-8 text-gold flex-shrink-0 mt-1" />
                <p className="text-lg text-foreground/90 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - PROVA SOCIAL */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            A verdade é dura, mas é <span className="text-gold">real:</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold mb-16 text-foreground/90 leading-relaxed">
            Quem usa IA hoje já está anos na sua frente.<br />
            <span className="text-gold">Os que não usam… vão virar estatística.</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              "reduzindo custos",
              "automatizando processos inteiros",
              "escalando vendas",
              "aumentando produtividade",
              "dominando mercados",
              "multiplicando resultados"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-card border border-gold/20 p-5 rounded-lg hover:border-gold transition-all duration-300 animate-fade-in" style={{animationDelay: `${idx * 50}ms`}}>
                <Check className="w-6 h-6 text-gold flex-shrink-0" />
                <span className="text-lg font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - O QUE VOCÊ VAI APRENDER */}
      <section className="py-24 px-6 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
            O que você vai <span className="text-gold">aprender</span><br />
            <span className="text-3xl text-muted-foreground">(e aplicar) na primeira semana</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {[
              { icon: Sparkles, text: "Gerar oportunidades todos os dias com IA" },
              { icon: Zap, text: "Criar scripts e argumentos de venda automaticamente" },
              { icon: Rocket, text: "Criar anúncios, ofertas e páginas em minutos" },
              { icon: Clock, text: "Parar de perder tempo com tarefas manuais" },
              { icon: Brain, text: "Usar IA como assistente pessoal" },
              { icon: TrendingUp, text: "Automatizar fluxos simples de vendas e atendimento" },
              { icon: BarChart, text: "Analisar dados e tomar decisões melhores" },
              { icon: Target, text: "Implementar IA sem precisar saber nada técnico" }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center p-6 bg-card border border-gold/20 rounded-lg hover:shadow-gold hover:border-gold transition-all duration-300 group animate-fade-in" style={{animationDelay: `${idx * 80}ms`}}>
                <item.icon className="w-7 h-7 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
                <p className="text-lg font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - PRA QUEM É */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
            Se você é <span className="text-gold">empresário</span>,<br />
            esse é seu lugar.
          </h2>
          
          <div className="space-y-4 mt-16">
            {[
              "Donos de negócios que querem crescer mais rápido",
              "Empreendedores cansados do manual e repetitivo",
              "Quem quer vender mais usando IA",
              "Quem quer clareza, direção e atalhos",
              "Quem quer resultados imediatos"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center p-6 bg-card border-l-4 border-gold rounded-lg hover:bg-card/80 transition-all duration-300 animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
                <Check className="w-7 h-7 text-gold flex-shrink-0" />
                <p className="text-xl font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - O QUE VOCÊ RECEBE */}
      <section className="py-24 px-6 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            O que você <span className="text-gold">recebe</span><br />
            ao entrar para a comunidade
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Lives semanais com especialistas",
              "Conteúdos práticos focados em vendas e produtividade",
              "Tutoriais simples (zero tecnicismo)",
              "Templates e prompts prontos",
              "Cases reais destrinchados",
              "Estratégias atualizadas todos os meses",
              "Comunidade de empresários avançados",
              "Atalhos práticos para resultados imediatos"
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-center p-6 bg-gradient-to-r from-card to-card/50 border border-gold/30 rounded-lg hover:border-gold hover:shadow-gold transition-all duration-300 animate-fade-in" style={{animationDelay: `${idx * 80}ms`}}>
                <Sparkles className="w-6 h-6 text-gold flex-shrink-0" />
                <p className="text-lg font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - DOIS CAMINHOS */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">
            Você tem <span className="text-gold">2 caminhos</span> a partir daqui:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Caminho Negativo */}
            <div className="p-8 bg-muted/20 border border-muted rounded-lg opacity-70 hover:opacity-80 transition-opacity">
              <div className="text-6xl mb-6">❌</div>
              <p className="text-xl leading-relaxed text-muted-foreground">
                Continuar fazendo tudo sozinho. No manual. No lento. No difícil.<br />
                <span className="text-foreground/60">Enquanto seus concorrentes aceleram com IA.</span>
              </p>
            </div>
            
            {/* Caminho Positivo */}
            <div className="p-8 bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold rounded-lg shadow-gold hover:shadow-gold-strong transition-all duration-300 animate-scale-in">
              <div className="text-6xl mb-6">🔥</div>
              <p className="text-xl font-bold leading-relaxed">
                Aprender com especialistas e colocar a IA pra trabalhar por você<br />
                <span className="text-gold">— todos os dias.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - OFERTA */}
      <section id="pricing" className="py-24 px-6 bg-secondary/20 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-center">
            Quanto vale ter IA trabalhando por você<br />
            <span className="text-gold">24h por dia?</span>
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto leading-relaxed">
            A maioria perde meses tentando aprender sozinho. Você não precisa.<br />
            <span className="text-foreground">Vai aprender com atalhos, clareza, direção e acompanhamento de quem faz na prática.</span>
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {/* Plano Essencial */}
            <div className="p-8 bg-card border border-gold/20 rounded-lg hover:border-gold transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Essencial</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-gold">R$ 49</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Acesso às lives semanais</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Comunidade exclusiva</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Conteúdos práticos</li>
              </ul>
              <Button 
                variant="premiumOutline" 
                size="lg" 
                className="w-full" 
                onClick={handleCTA}
                aria-label="Assinar plano Essencial - R$ 49 por mês"
              >
                Começar Agora
              </Button>
            </div>
            
            {/* Plano Completo - DESTAQUE */}
            <div className="p-8 bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold rounded-lg shadow-gold-strong transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 rounded-full text-sm font-bold uppercase">
                Mais Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Completo</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-gold">R$ 97</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Tudo do Essencial</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Templates avançados</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Tutoriais completos</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Materiais exclusivos</li>
              </ul>
              <Button 
                variant="premium" 
                size="lg" 
                className="w-full" 
                onClick={handleCTA}
                aria-label="Assinar plano Completo - R$ 97 por mês (Mais Popular)"
              >
                Quero Este Agora
              </Button>
            </div>
            
            {/* Plano Premium */}
            <div className="p-8 bg-card border border-gold/20 rounded-lg hover:border-gold transition-all duration-300">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-gold">R$ 297</span>
                <span className="text-muted-foreground">/mês</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Tudo do Completo</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Sessões exclusivas</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Análises de caso</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-gold flex-shrink-0 mt-1" /> Suporte prioritário</li>
              </ul>
              <Button 
                variant="premiumOutline" 
                size="lg" 
                className="w-full" 
                onClick={handleCTA}
                aria-label="Assinar plano Premium VIP - R$ 297 por mês"
              >
                Quero VIP
              </Button>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              variant="premium" 
              size="xl" 
              className="text-xl uppercase tracking-wider shadow-glow-gold"
              onClick={handleCTA}
              aria-label="Entrar na comunidade e acelerar resultados com IA"
            >
              Quero entrar agora e acelerar meus resultados
            </Button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - FECHAMENTO */}
      <section className="py-32 px-6 relative">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Você pode continuar sendo <span className="text-muted-foreground">"mais um"</span>.<br />
            Ou entrar para o grupo seleto que está usando IA<br />
            para <span className="text-gold">dominar o jogo.</span>
          </h2>
          
          <p className="text-2xl md:text-3xl font-bold mb-12 text-foreground/90">
            A diferença entre quem cresce e quem estagna é simples:<br />
            <span className="text-gold">uma decisão.</span>
          </p>
          
          <Button 
            variant="premium" 
            size="xl" 
            className="text-xl uppercase tracking-wider shadow-glow-gold animate-pulse"
            onClick={handleCTA}
            aria-label="Decisão final - Entrar para a comunidade IA agora"
          >
            Entrar agora
          </Button>
        </div>
      </section>
      </main>
    </>
  );
};

export default Index;
