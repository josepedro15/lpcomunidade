# 🎬 Parallax Effects - Documentação

## Visão Geral

O sistema de parallax implementado cria uma experiência visual profunda e imersiva com múltiplas camadas que se movem em velocidades diferentes durante o scroll, criando sensação de profundidade 3D.

## 🎨 Estrutura do Parallax

### 1. **Background Fixo (Fixed Background)**

O background principal fica **fixo** e sempre visível enquanto o conteúdo rola por cima.

```tsx
<div className="fixed inset-0 z-0">
  {/* Camadas de Orbs em diferentes posições */}
</div>
```

#### Camadas do Background:

1. **Layer 1 - Orb Principal**
   - Posição: Fullscreen
   - Opacidade: 25%
   - Comportamento: Sem rotação no hover
   - Velocidade: Estático (não se move)

2. **Layer 2 - Orb Secundário**
   - Posição: top-right (600x600px)
   - Opacidade: 20%
   - Comportamento: Rotação no hover
   - Velocidade: Estático

3. **Layer 3 - Orb Terciário**
   - Posição: bottom-left (500x500px)
   - Opacidade: 15%
   - Comportamento: Rotação no hover
   - Velocidade: Estático

### 2. **Elementos Decorativos com Parallax**

Círculos e gradientes que se movem em velocidades diferentes:

```tsx
// Movimento lento (0.15)
<div style={{ transform: `translateY(${-parallaxSlow}px)` }} />

// Movimento médio (0.3)
<div style={{ transform: `translateY(${-parallaxMedium}px)` }} />

// Movimento rápido (0.5)
<div style={{ transform: `translateY(${-parallaxFast}px)` }} />
```

### 3. **Partículas Flutuantes**

10 partículas douradas que flutuam em diferentes velocidades e posições, criando profundidade adicional.

```tsx
<FloatingParticles />
```

Características:
- Tamanhos variados (3-6px)
- Animação de pulse
- Blur para efeito etéreo
- Delays diferentes para movimento assíncrono

### 4. **Scroll Indicator**

Indicador animado que desaparece conforme você rola a página:

```tsx
<div 
  style={{ 
    transform: `translateY(${parallaxFast * 0.5}px)`, 
    opacity: 1 - (parallaxSlow / 200) 
  }}
>
  <div className="animate-pulse">Linha</div>
  <div className="animate-bounce">Scroll</div>
</div>
```

---

## 🔧 Hooks Personalizados

### `useParallax(speed)`

Cria efeito parallax baseado no scroll.

```tsx
const offset = useParallax(0.5); // speed: 0-1

return (
  <div style={{ transform: `translateY(${offset}px)` }}>
    Conteúdo com parallax
  </div>
);
```

**Parâmetros:**
- `speed` (number): Velocidade do parallax (0-1)
  - `0.1-0.2`: Movimento muito lento
  - `0.3-0.4`: Movimento médio
  - `0.5-0.7`: Movimento rápido
  - `0.8-1.0`: Movimento muito rápido

### `useInView()`

Detecta quando um elemento está visível na viewport.

```tsx
const { isInView, ref } = useInView();

return (
  <div ref={ref} className={isInView ? 'fade-in' : 'fade-out'}>
    Conteúdo
  </div>
);
```

### `useScrollProgress()`

Retorna o progresso do scroll em porcentagem (0-100).

```tsx
const progress = useScrollProgress();

return (
  <div style={{ width: `${progress}%` }}>
    Barra de progresso
  </div>
);
```

---

## 🎯 Componentes Parallax

### `<ParallaxSection>`

Aplica parallax a uma seção inteira.

```tsx
<ParallaxSection speed={0.3} className="py-24">
  <h2>Conteúdo da seção</h2>
</ParallaxSection>
```

**Props:**
- `speed`: Velocidade do movimento (0-1)
- `className`: Classes CSS adicionais
- `children`: Conteúdo da seção

### `<ParallaxLayer>`

Aplica parallax a elementos individuais com controle de direção.

```tsx
<ParallaxLayer speed={0.5} direction="up" className="absolute">
  <img src="decoracao.png" />
</ParallaxLayer>
```

**Props:**
- `speed`: Velocidade do movimento (0-1)
- `direction`: 'up' ou 'down'
- `className`: Classes CSS adicionais
- `children`: Elemento a ser animado

### `<FloatingParticles>`

Adiciona partículas flutuantes decorativas.

```tsx
<FloatingParticles />
```

Sem props - comportamento fixo com 10 partículas pré-configuradas.

---

## 🎨 Configuração Visual

### Backdrop Blur

Todas as seções de conteúdo usam `backdrop-blur-sm` para criar efeito de vidro:

```tsx
<section className="bg-secondary/20 backdrop-blur-sm">
  {/* Conteúdo */}
</section>
```

### Opacidades

- **Background fixo**: 80% → 60% → 80% (gradiente vertical)
- **Orbs**: 25%, 20%, 15%
- **Elementos decorativos**: 5%, 10%
- **Partículas**: 30%

### Cores

Todas as cores são baseadas na paleta dourada:
- `bg-gold/5` - Muito sutil
- `bg-gold/10` - Sutil
- `bg-gold/30` - Visível

---

## 📐 Performance

### Otimizações Implementadas

1. **will-change: transform**
   - Prepara o navegador para animações
   - Usado em elementos parallax

2. **CSS Transform**
   - Hardware accelerated
   - Melhor performance que `top`/`left`

3. **Throttling implícito**
   - React otimiza updates automáticos
   - Apenas re-renderiza quando necessário

4. **Fixed positioning**
   - Background não reflow/repaint
   - Conteúdo rola em camada separada

### Considerações

- ✅ Funciona bem em desktop moderno
- ⚠️ Pode ser intenso em mobile antigos
- 💡 Considere desabilitar em dispositivos baixa potência:

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

const isMobile = useIsMobile();

{!isMobile && <FloatingParticles />}
```

---

## 🎮 Ajustes e Customização

### Alterar Velocidade do Parallax

No `Index.tsx`:

```tsx
const parallaxSlow = useParallax(0.15);    // Altere aqui
const parallaxMedium = useParallax(0.3);   // Altere aqui
const parallaxFast = useParallax(0.5);     // Altere aqui
```

### Adicionar Mais Partículas

No `FloatingParticles.tsx`, adicione ao array:

```tsx
const particles = [
  // ... partículas existentes
  { size: 4, left: '50%', top: '50%', delay: 0, speed: parallaxMedium },
];
```

### Mudar Opacidade do Background

No `Index.tsx`:

```tsx
<div className="fixed inset-0 z-0">
  <div className="absolute inset-0 opacity-25"> {/* Ajuste aqui */}
    <Orb />
  </div>
</div>
```

### Ajustar Blur do Backdrop

```tsx
<section className="backdrop-blur-sm">  {/* sm, md, lg, xl */}
```

Opções:
- `backdrop-blur-sm` - Leve (padrão)
- `backdrop-blur-md` - Médio
- `backdrop-blur-lg` - Forte
- `backdrop-blur-xl` - Muito forte

---

## 🎯 Exemplos de Uso

### Adicionar Parallax a um Card

```tsx
import { useParallax } from '@/hooks/use-parallax';

const MyCard = () => {
  const parallax = useParallax(0.2);
  
  return (
    <div 
      className="card"
      style={{ transform: `translateY(${parallax}px)` }}
    >
      Conteúdo do card
    </div>
  );
};
```

### Criar Elemento que Move na Direção Oposta

```tsx
const parallax = useParallax(0.3);

<div style={{ transform: `translateY(${-parallax}px)` }}>
  Move para cima enquanto rola para baixo
</div>
```

### Fade Out no Scroll

```tsx
const parallax = useParallax(0.1);

<div style={{ opacity: Math.max(0, 1 - parallax / 300) }}>
  Desaparece conforme rola
</div>
```

---

## 🎬 Efeitos Aplicados

### Na Hero Section

- ✅ Background fixo com 3 camadas de Orbs
- ✅ Partículas flutuantes
- ✅ Elementos decorativos com parallax
- ✅ Scroll indicator animado
- ✅ Fade out do indicator

### Nas Seções de Conteúdo

- ✅ Backdrop blur em todas as seções
- ✅ Opacidade reduzida (20%)
- ✅ Background visível através das seções
- ✅ Camadas de profundidade

### Elementos Decorativos

- ✅ Círculos dourados com blur
- ✅ Movimento em 3 velocidades diferentes
- ✅ Posicionamento estratégico

---

## 🔍 Debugging

### Verificar Valores de Parallax

```tsx
const parallax = useParallax(0.5);
console.log('Parallax offset:', parallax);
```

### Visualizar Camadas

Adicione borders temporários:

```tsx
<div className="fixed inset-0 z-0 border-4 border-red-500">
  {/* Background */}
</div>
```

### Testar Performance

Use DevTools:
1. Abra DevTools (F12)
2. Performance tab
3. Record durante scroll
4. Analise FPS e repaints

---

## 📱 Mobile Considerations

### Desabilitar em Mobile (Opcional)

```tsx
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  const parallaxSlow = useParallax(isMobile ? 0 : 0.15);
  
  return (
    <>
      {!isMobile && <FloatingParticles />}
      {/* resto */}
    </>
  );
};
```

### Reduzir Efeitos em Mobile

```tsx
const parallax = useParallax(isMobile ? 0.1 : 0.5);
```

---

## 🎨 Paleta de Velocidades Recomendadas

| Elemento | Velocidade | Uso |
|----------|-----------|-----|
| Background principal | 0 (fixo) | Orbs principais |
| Elementos distantes | 0.1-0.2 | Camada de fundo |
| Elementos médios | 0.3-0.4 | Decorações |
| Elementos próximos | 0.5-0.7 | Partículas, detalhes |
| Elementos muito próximos | 0.8-1.0 | Hover effects |

---

## 🚀 Melhorias Futuras (Opcional)

### Parallax Horizontal

```tsx
export const useParallaxHorizontal = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return offset;
};
```

### Parallax Baseado em Mouse

```tsx
export const useMouseParallax = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 100;
      const y = (e.clientY / window.innerHeight - 0.5) * 100;
      setPosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return position;
};
```

### Scroll Snapping

```css
.scroll-container {
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: start;
}
```

---

**Última atualização:** 2025-11-16  
**Versão:** 1.0.0

