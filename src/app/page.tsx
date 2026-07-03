"use client";

import { useState } from "react";
import { SiteLogo } from "@/components/site-logo";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Briefcase,
  CheckCircle2,
  Flame,
  Handshake,
  Heart,
  Mail,
  MessagesSquare,
  Mic,
  Shield,
  ShieldAlert,
  Users,
} from "lucide-react";

const founderFocusAreas = [
  "saúde mental organizacional",
  "liderança",
  "desenvolvimento humano",
  "relações profissionais",
  "perícia psicológica assistente técnica",
];

const whoWeAreTopics = [
  {
    id: "01",
    title: "Psicologia Organizacional",
    description:
      "Compreendemos como cultura, comportamento, clima e dinâmica de trabalho afetam a saúde das pessoas e a sustentabilidade dos resultados.",
  },
  {
    id: "02",
    title: "Saúde Mental no Trabalho",
    description:
      "Atuamos na construção de ambientes mais seguros e conscientes, com foco em prevenção, acolhimento e fortalecimento emocional nas rotinas organizacionais.",
  },
  {
    id: "03",
    title: "Desenvolvimento Humano",
    description:
      "Apoiamos líderes e equipes no desenvolvimento de competências relacionais, amadurecimento emocional e maior qualidade nas interações de trabalho.",
  },
  {
    id: "04",
    title: "Gestão de Riscos Psicossociais",
    description:
      "Mapeamos sinais críticos, fatores de adoecimento e vulnerabilidades organizacionais para orientar ações mais responsáveis e efetivas.",
  },
  {
    id: "05",
    title: "Visão Sistêmica das Relações",
    description:
      "Observamos a organização como um sistema vivo, onde comunicação, liderança, vínculos e contexto se influenciam mutuamente o tempo todo.",
  },
];

const mentalHealthRoi = [
  {
    stage: "Reativo",
    value: "4.1x",
    description: "apoio depois da deterioração",
  },
  {
    stage: "Proativo",
    value: "4.2x",
    description: "suporte em estágio inicial",
  },
  {
    stage: "Universal",
    value: "6.3x",
    description: "cultura, prevenção e conscientização",
  },
];

const sertFeatures = [
  {
    title: "S - Sistema",
    description:
      "Análise da cultura, estrutura e dinâmica organizacional.",
    Icon: Activity,
  },
  {
    title: "E - Emoções",
    description:
      "Identificação dos fatores emocionais e psicossociais.",
    Icon: Heart,
  },
  {
    title: "R - Relações",
    description:
      "Mapeamento das relações, comunicação e liderança.",
    Icon: Users,
  },
  {
    title: "T - Transformação",
    description:
      "Intervenções práticas e desenvolvimento organizacional.",
    Icon: BarChart3,
  },
];

const sertAudienceCards = [
  {
    title: "Abordagem sistêmica",
    description: "Leitura integrada de cultura, vínculos, contexto e estrutura.",
    Icon: Activity,
  },
  {
    title: "Diagnóstico estruturado",
    description: "Metodologia própria para compreender padrões e prioridades.",
    Icon: Shield,
  },
  {
    title: "Indicadores organizacionais",
    description: "Sinais concretos para orientar análise e tomada de decisão.",
    Icon: Briefcase,
  },
  {
    title: "Desenvolvimento humano",
    description: "Intervenções orientadas por amadurecimento relacional e emocional.",
    Icon: Heart,
  },
  {
    title: "Prevenção psicossocial",
    description: "Ações voltadas para redução de riscos e promoção de saúde.",
    Icon: Users,
  },
  {
    title: "Acompanhamento contínuo",
    description: "Leitura recorrente de sinais e prioridades para sustentar a evolução organizacional.",
    Icon: CheckCircle2,
  },
];

const serviceCards = [
  {
    eyebrow: "Serviços",
    title: "Consultoria em Saúde Mental Organizacional",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
    large: true,
    items: [
      "diagnóstico psicossocial",
      "análise de riscos",
      "clima organizacional",
      "desenvolvimento de lideranças",
    ],
  },
  {
    eyebrow: "Liderança",
    title: "Desenvolvimento de Lideranças",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
    items: [
      "liderança consciente",
      "comunicação",
      "conflitos",
      "inteligência emocional",
    ],
  },
  {
    eyebrow: "Avaliação",
    title: "Diagnóstico Organizacional",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
    prefix: "Inclui:",
    items: ["questionários", "escalas", "dashboard", "relatório técnico"],
  },
  {
    eyebrow: "Perícia Psicológica",
    title: "Assistência Técnica em Perícia Psicológica",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1000&q=80",
    context:
      "Atuação como psicóloga assistente técnica em processos envolvendo:",
    items: [
      "burnout",
      "assédio moral",
      "adoecimento ocupacional",
      "danos psicológicos relacionados ao trabalho",
    ],
    secondaryPrefix: "Inclui:",
    secondaryItems: [
      "análise documental",
      "formulação de quesitos",
      "parecer técnico",
      "acompanhamento pericial",
    ],
  },
];

const corporateTalkThemes = [
  {
    title: "Saúde Mental no Trabalho",
    description: "Estresse, equilíbrio emocional e prevenção.",
    Icon: Brain,
    accentClass: "text-[#0a97a6]",
    iconBgClass: "bg-[rgba(10,151,166,0.12)]",
    pillClass: "text-[#0a97a6]",
  },
  {
    title: "Liderança Consciente",
    description: "Desenvolvimento de líderes mais humanos e estratégicos.",
    Icon: Users,
    accentClass: "text-[#126b7a]",
    iconBgClass: "bg-[rgba(18,107,122,0.12)]",
    pillClass: "text-[#126b7a]",
  },
  {
    title: "Burnout e Estresse Ocupacional",
    description: "Prevenção e gestão emocional.",
    Icon: Flame,
    accentClass: "text-[#c56d1f]",
    iconBgClass: "bg-[rgba(197,109,31,0.12)]",
    pillClass: "text-[#c56d1f]",
  },
  {
    title: "Assédio Moral",
    description: "Relações saudáveis e responsabilidade organizacional.",
    Icon: ShieldAlert,
    accentClass: "text-[#a53b54]",
    iconBgClass: "bg-[rgba(165,59,84,0.12)]",
    pillClass: "text-[#a53b54]",
  },
  {
    title: "Comunicação e Relações Humanas",
    description: "Melhoria da convivência e produtividade.",
    Icon: MessagesSquare,
    accentClass: "text-[#6a59b2]",
    iconBgClass: "bg-[rgba(106,89,178,0.12)]",
    pillClass: "text-[#6a59b2]",
  },
  {
    title: "Cumplicidade Profissional e Resultados",
    description: "Fortalecimento das relações e cultura organizacional.",
    Icon: Handshake,
    accentClass: "text-[#15806a]",
    iconBgClass: "bg-[rgba(21,128,106,0.12)]",
    pillClass: "text-[#15806a]",
  },
];

const workflowSteps = [
  {
    step: "1. Diagnóstico",
    title: "Diagnóstico",
    description: "Entendemos o cenário organizacional.",
    Icon: Activity,
    accentClass: "text-[#0a97a6]",
    iconBgClass: "bg-[rgba(10,151,166,0.12)]",
    glowClass: "bg-[radial-gradient(circle_at_top_left,rgba(10,151,166,0.16),transparent_58%)]",
  },
  {
    step: "2. Análise",
    title: "Análise",
    description: "Identificamos riscos e oportunidades.",
    Icon: BarChart3,
    accentClass: "text-[#126b7a]",
    iconBgClass: "bg-[rgba(18,107,122,0.12)]",
    glowClass: "bg-[radial-gradient(circle_at_top_left,rgba(18,107,122,0.14),transparent_58%)]",
  },
  {
    step: "3. Intervenção",
    title: "Intervenção",
    description: "Aplicamos ações práticas.",
    Icon: Briefcase,
    accentClass: "text-[#c56d1f]",
    iconBgClass: "bg-[rgba(197,109,31,0.12)]",
    glowClass: "bg-[radial-gradient(circle_at_top_left,rgba(197,109,31,0.14),transparent_58%)]",
  },
  {
    step: "4. Transformação",
    title: "Transformação",
    description: "Consolidamos mudanças e fortalecemos a evolução organizacional.",
    Icon: CheckCircle2,
    accentClass: "text-[#15806a]",
    iconBgClass: "bg-[rgba(21,128,106,0.12)]",
    glowClass: "bg-[radial-gradient(circle_at_top_left,rgba(21,128,106,0.14),transparent_58%)]",
  },
];

const heroSolutionCards = [
  {
    title: "Diagnóstico Organizacional",
    description: "Leitura estruturada dos riscos psicossociais, clima e relações de trabalho.",
    Icon: Heart,
  },
  {
    title: "Saúde Mental no Trabalho",
    description: "Estratégias de prevenção, cuidado e fortalecimento da cultura organizacional.",
    Icon: Brain,
  },
  {
    title: "Desenvolvimento de Lideranças",
    description: "Formação de líderes mais conscientes, relacionais e preparados para sustentar resultados.",
    Icon: BarChart3,
  },
  {
    title: "Método SERT",
    description: "Abordagem própria para analisar sistema, emoções, relações e transformação.",
    Icon: Shield,
  },
  {
    title: "Palestras e Treinamentos",
    description: "Conteúdos práticos para sensibilizar equipes e desenvolver competências humanas.",
    Icon: Mic,
  },
];

export default function Home() {
  const [activeWhoWeAreTopic, setActiveWhoWeAreTopic] = useState(whoWeAreTopics[0]);

  return (
    <main className="page-shell bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-white/8 bg-[#03091b]">
        <div className="flex items-center justify-between px-5 py-[0.95rem] md:px-6">
          <div className="flex items-center gap-10">
            <SiteLogo href="#top" />
            <nav className="hidden items-center gap-7 text-[13px] font-medium text-white/64 md:flex">
              <a href="#manifesto" className="hover:text-white">Manifesto</a>
              <a href="#areas" className="hover:text-white">Áreas</a>
              <a href="#pesquisas" className="hover:text-white">Pesquisas</a>
              <a href="#metodo-sert" className="hover:text-white">Método SERT</a>
              <a href="#palestras" className="hover:text-white">Fundadora</a>
            </nav>
          </div>

          <a
            href="/contrate-nossos-servicos"
            className="hidden items-center gap-2 rounded-full border border-white/14 bg-white/[0.04] px-5 py-2 text-[14px] font-medium text-white md:inline-flex"
          >
            Contrate nossos serviços
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section
        id="top"
        className="premium-hero relative overflow-hidden bg-[linear-gradient(130deg,#04101d_0%,#07172a_42%,#0a2630_100%)] text-white"
      >
        <div className="mx-auto max-w-[1460px] px-5 pb-24 pt-24 md:px-8 md:pb-24 md:pt-30 xl:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:gap-2">
            <div className="relative z-10 max-w-[640px] lg:-translate-y-10 xl:-translate-y-12">
              <div className="section-kicker text-[var(--soft-accent)]">
                <span className="section-kicker-line bg-[var(--soft-accent)]" />
                Consultoria em saúde mental
              </div>

              <h1 className="mt-8 max-w-[620px] font-[var(--font-cormorant)] text-[3rem] leading-[0.95] tracking-[-0.05em] text-white md:text-[4.8rem]">
                <span className="block">Transformamos</span>
                <span className="block text-[var(--soft-accent)]">pessoas.</span>
                <span className="mt-2 block">Fortalecemos</span>
                <span className="block text-[var(--accent)]">organizações.</span>
              </h1>

              <p className="mt-8 max-w-[560px] text-[1.05rem] leading-[1.85] text-white/72 md:text-[1.14rem]">
                Soluções estratégicas em saúde mental organizacional para promover bem-estar,
                reduzir riscos psicossociais e impulsionar resultados sustentáveis.
              </p>

              <div className="mt-10 flex max-w-[560px] flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="https://wa.me/5511976222228?text=Ol%C3%A1%21%20Quero%20solicitar%20um%20diagn%C3%B3stico%20para%20minha%20empresa."
                  className="inline-flex h-[3.7rem] items-center justify-center gap-3 rounded-full bg-[var(--accent)] px-7 text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-[#04101d] shadow-[0_18px_42px_rgba(10,151,166,0.28)]"
                >
                  <Activity className="h-5 w-5" />
                  Agendar Diagnóstico
                </a>
                <a
                  href="/contrate-nossos-servicos"
                  className="inline-flex h-[3.7rem] items-center justify-center gap-3 rounded-full border border-white/18 bg-white/[0.03] px-7 text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-white"
                >
                  <ArrowRight className="h-5 w-5" />
                  Conheça Nossas Soluções
                </a>
              </div>
            </div>

            <div className="relative z-10 lg:-ml-10 lg:-mr-24 lg:-translate-y-20">
              <div
                className="premium-hero-visual mx-auto max-w-[860px] lg:w-[124%] lg:max-w-none"
                role="img"
                aria-label="Profissionais participando de uma reunião corporativa"
              >
                <svg viewBox="0 0 468 336" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient
                      id="hero-image-alpha-x"
                      x1="0"
                      y1="0"
                      x2="468"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="black" />
                      <stop offset="0.2" stopColor="white" />
                      <stop offset="0.7" stopColor="white" />
                      <stop offset="0.92" stopColor="black" />
                      <stop offset="1" stopColor="black" />
                    </linearGradient>
                    <linearGradient
                      id="hero-image-alpha-y"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="336"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="black" />
                      <stop offset="0.15" stopColor="white" />
                      <stop offset="0.68" stopColor="white" />
                      <stop offset="0.94" stopColor="black" />
                      <stop offset="1" stopColor="black" />
                    </linearGradient>
                    <filter
                      id="hero-image-edge-soften"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="6" />
                    </filter>
                    <mask
                      id="hero-image-vertical-fade"
                      x="-20"
                      y="-20"
                      width="508"
                      height="376"
                      maskUnits="userSpaceOnUse"
                    >
                      <rect x="-20" y="-20" width="508" height="376" fill="url(#hero-image-alpha-y)" />
                    </mask>
                    <mask
                      id="hero-image-mask"
                      x="-20"
                      y="-20"
                      width="508"
                      height="376"
                      maskUnits="userSpaceOnUse"
                    >
                      <path
                        d="M264 4C205 36 165 96 126 155C88 213 62 260 10 302C3 308-4 313-12 318V332H464V4H264Z"
                        fill="url(#hero-image-alpha-x)"
                        filter="url(#hero-image-edge-soften)"
                        mask="url(#hero-image-vertical-fade)"
                      />
                    </mask>
                    <linearGradient id="hero-image-tint" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#04101d" stopOpacity="0.92" />
                      <stop offset="0.32" stopColor="#04101d" stopOpacity="0.46" />
                      <stop offset="0.64" stopColor="#07172a" stopOpacity="0.04" />
                      <stop offset="1" stopColor="#04101d" stopOpacity="0.2" />
                    </linearGradient>
                    <linearGradient id="hero-image-bottom" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0.55" stopColor="#04101d" stopOpacity="0" />
                      <stop offset="1" stopColor="#04101d" stopOpacity="0.9" />
                    </linearGradient>
                    <linearGradient
                      id="hero-curve-stroke"
                      x1="10"
                      y1="302"
                      x2="264"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#0a97a6" stopOpacity="0" />
                      <stop offset="0.12" stopColor="#0a97a6" stopOpacity="0.54" />
                      <stop offset="0.5" stopColor="#8fd9df" stopOpacity="0.94" />
                      <stop offset="0.88" stopColor="#0a97a6" stopOpacity="0.58" />
                      <stop offset="1" stopColor="#0a97a6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="hero-curve-end-alpha"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="336"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="black" />
                      <stop offset="0.14" stopColor="white" />
                      <stop offset="0.8" stopColor="white" />
                      <stop offset="1" stopColor="black" />
                    </linearGradient>
                    <mask
                      id="hero-curve-end-mask"
                      x="-120"
                      y="0"
                      width="600"
                      height="336"
                      maskUnits="userSpaceOnUse"
                    >
                      <rect x="-120" width="600" height="336" fill="url(#hero-curve-end-alpha)" />
                    </mask>
                    <filter id="hero-curve-fade" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="22" />
                    </filter>
                  </defs>

                  <g mask="url(#hero-image-mask)">
                    <image
                      href="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1600&q=85"
                      width="468"
                      height="336"
                      preserveAspectRatio="xMaxYMid slice"
                    />
                    <rect width="468" height="336" fill="url(#hero-image-tint)" />
                    <path
                      d="M360 -100C315-68 288-35 264-8C205 36 165 96 126 155C88 213 62 260 10 302C3 308-4 313-12 318C-45 342-75 363-112 382"
                      fill="none"
                      stroke="#04101d"
                      strokeOpacity="0.88"
                      strokeWidth="82"
                      filter="url(#hero-curve-fade)"
                    />
                    <rect width="468" height="336" fill="url(#hero-image-bottom)" />
                  </g>

                  <g mask="url(#hero-curve-end-mask)">
                    <path
                      d="M226 0C177 34 136 92 98 150C62 205 37 249-8 285"
                      fill="none"
                      stroke="url(#hero-curve-stroke)"
                      strokeOpacity="0.58"
                      strokeWidth="1"
                      strokeLinecap="round"
                    />
                    <path
                      d="M264 0C205 36 165 96 126 155C88 213 62 260 10 302"
                      fill="none"
                      stroke="url(#hero-curve-stroke)"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="manifesto"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(10,151,166,0.1),transparent_28%),linear-gradient(135deg,#f8fafb_0%,#f2f7f7_58%,#eaf3f3_100%)] py-24 text-[var(--ink)] md:min-h-[760px] md:py-30"
      >
        <div className="mx-auto max-w-[1360px] px-5 md:px-10">
          <div>
            <div className="border-b border-[rgba(11,15,33,0.1)] pb-10 md:pb-12">
              <div className="max-w-[760px]">
                <div className="section-kicker text-[var(--accent)]">
                  <span className="section-kicker-line bg-[var(--accent)]" />
                  Frentes de atuação
                </div>
                <h2 className="mt-7 text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.075em] text-[var(--ink)] md:text-[4rem]">
                  Soluções conectadas para diagnosticar, desenvolver e transformar.
                </h2>
              </div>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {heroSolutionCards.map(({ title, description, Icon }) => (
                <article
                  key={title}
                  className="premium-solution-card px-6 py-8 text-[var(--ink)] lg:min-h-[310px]"
                >
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-[rgba(10,151,166,0.2)] bg-[rgba(10,151,166,0.08)] text-[var(--accent)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-[1.16rem] font-semibold leading-6">{title}</h3>
                  <p className="mt-4 text-[0.97rem] leading-7 text-[var(--muted)]">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="areas"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_100%_0%,rgba(0,110,134,0.14),transparent_15%),linear-gradient(90deg,#040715_0%,#040716_64%,#021c24_100%)] text-white"
      >
        <div className="mx-auto max-w-[1504px] px-5 py-[58px] md:px-10 md:pb-[92px] md:pt-[62px]">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.72fr] lg:items-start lg:gap-8">
            <div>
              <div className="section-kicker text-[var(--accent)]">
                <span className="section-kicker-line bg-[var(--accent)]" />
                Quem somos
              </div>

              <div className="mt-11">
                <h2 className="max-w-[620px] text-[3.05rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[4.15rem]">
                  EVOLUIR-T
                  <span className="block text-white/62">Consultoria Organizacional</span>
                </h2>
              </div>

              <p className="mt-10 max-w-[620px] text-[1.15rem] leading-[1.8] text-white/74">
                A EVOLUIR-T atua no desenvolvimento da saúde mental organizacional, liderança e
                relações humanas no trabalho.
              </p>

              <div className="mt-[72px] space-y-0">
                {whoWeAreTopics.map((topic) => {
                  const isActive = activeWhoWeAreTopic.id === topic.id;

                  return (
                    <button
                      key={topic.id}
                      type="button"
                      onMouseEnter={() => setActiveWhoWeAreTopic(topic)}
                      onFocus={() => setActiveWhoWeAreTopic(topic)}
                      className="group flex w-full items-center gap-6 border-b border-white/8 py-[30px] text-left"
                    >
                      <span
                        className={`territory-index w-[52px] ${isActive ? "text-[var(--accent)]" : "text-white/24"}`}
                      >
                        {topic.id}
                      </span>
                      <span
                        className={`flex-1 text-[1.7rem] font-medium tracking-[-0.05em] ${isActive ? "text-white" : "text-white/62 group-hover:text-white/82"}`}
                      >
                        {topic.title}
                      </span>
                      <span
                        className={`flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-transparent text-sm shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)] transition-all ${
                          isActive
                            ? "border-white/38 bg-white/[0.02] text-white"
                            : "border-white/24 text-white/32 group-hover:border-white/70 group-hover:bg-white/[0.08] group-hover:text-white"
                        }`}
                      >
                        {isActive ? (
                          <ArrowRight className="h-5 w-5" />
                        ) : (
                          <ArrowUpRight className="h-4.5 w-4.5" />
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-[188px] lg:pl-2">
              <p className="ml-auto max-w-[430px] text-right text-[1.03rem] leading-[1.68] text-white/50">
                Nossa atuação integra cuidado emocional, desenvolvimento de lideranças e leitura
                sistêmica das relações para fortalecer ambientes organizacionais.
              </p>

              <div className="mt-[148px]">
                <div className="domain-card flex min-h-[500px] flex-col rounded-[2rem] border border-white/7 px-10 py-10">
                  <div
                    key={activeWhoWeAreTopic.id}
                    className="domain-card-panel animate-fade-up animate-duration-500 animate-ease-out animate-once animate-fill-both flex min-h-[420px] flex-1 flex-col"
                  >
                    <p className="territory-index animate-fade animate-duration-300 animate-ease-out animate-once animate-fill-both text-[var(--accent)]">
                      {activeWhoWeAreTopic.id}
                    </p>
                    <h3 className="mt-10 max-w-[430px] text-[2rem] font-medium leading-[1.02] tracking-[-0.06em] text-white">
                      {activeWhoWeAreTopic.title}
                    </h3>
                    <p className="mt-8 max-w-[430px] animate-fade-up animate-duration-500 animate-delay-75 animate-ease-out animate-once animate-fill-both text-[1.16rem] leading-[1.74] text-white/94">
                      {activeWhoWeAreTopic.description}
                    </p>
                    <a
                      href="/contrate-nossos-servicos"
                      className="mt-auto inline-flex animate-fade-up animate-duration-500 animate-delay-150 animate-ease-out animate-once animate-fill-both items-center gap-3 pt-10 text-[15px] font-medium uppercase tracking-[0.12em] text-white"
                    >
                      Conheça nossa atuação
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="palestras" className="bg-white">
        <div className="mx-auto grid max-w-[1360px] items-center gap-14 px-5 py-16 md:px-10 lg:grid-cols-[642px_minmax(0,1fr)] lg:gap-[58px]">
          <div className="relative min-h-[800px] overflow-hidden rounded-[2rem] bg-[#8f8c95] shadow-[0_24px_70px_rgba(10,15,28,0.08)]">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/foto-palestras.png')",
                backgroundPosition: "center center",
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,22,0)_58%,rgba(7,8,22,0.78)_100%)]" />

            <div className="absolute inset-x-[30px] bottom-[30px] rounded-[0.8rem] bg-[#0b0c1b] px-6 py-6 text-white shadow-[0_24px_50px_rgba(4,6,18,0.22)]">
              <div className="flex items-start gap-4">
                <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[rgba(11,169,177,0.58)] bg-[rgba(10,151,166,0.22)] text-[var(--accent)]">
                  <Mic className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-[1rem] font-semibold tracking-[-0.02em]">
                    Elaine Ferreira:
                  </h3>
                  <p className="mt-2 max-w-[470px] text-[0.86rem] leading-[1.55] text-white/74">
                    Atua conectando escuta clínica, leitura sistêmica e desenvolvimento humano
                    para fortalecer relações, lideranças e ambientes de trabalho mais saudáveis.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[690px] lg:pl-0">
            <div className="section-kicker">
              <span className="section-kicker-line" />
              Sobre a fundadora
            </div>

            <h2 className="mt-9 max-w-[700px] text-[2.95rem] font-semibold leading-[1.02] tracking-[-0.075em] text-[var(--ink)] md:text-[4rem]">
              Elaine Ferreira
            </h2>

            <p className="mt-7 max-w-[690px] text-[1.08rem] leading-[1.68] text-[var(--muted)]">
              Psicóloga | Terapeuta de Família e Casal | Consultora Organizacional
            </p>

            <p className="mt-5 max-w-[690px] text-[1.08rem] leading-[1.68] text-[var(--muted)]">
              Psicóloga apaixonada pelo desenvolvimento humano e pelas relações, Elaine Ferreira
              desenvolve seu trabalho a partir de uma escuta sensível e de uma compreensão
              profunda das dinâmicas emocionais que atravessam pessoas, equipes e organizações.
            </p>

            <p className="mt-5 max-w-[690px] text-[1.08rem] leading-[1.68] text-[var(--muted)]">
              Sua atuação integra olhar clínico, leitura organizacional e visão sistêmica para
              apoiar processos de transformação em contextos onde saúde mental, liderança e
              qualidade das relações são partes centrais da sustentabilidade do trabalho.
            </p>

            <p className="mt-5 max-w-[690px] text-[1.08rem] leading-[1.68] text-[var(--muted)]">
              Ao longo de sua trajetória, vem contribuindo com empresas e profissionais que
              desejam construir ambientes mais conscientes, humanos e capazes de sustentar
              desenvolvimento com responsabilidade emocional.
            </p>

            <div className="mt-12">
              <p className="text-[0.95rem] font-semibold text-[var(--ink)]">
                Atua com foco em:
              </p>
              <div className="mt-5 space-y-4">
                {founderFocusAreas.map((topic) => (
                  <div key={topic} className="flex items-center gap-3 text-[1rem] text-[var(--muted)]">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[var(--accent)]" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="pesquisas" className="border-b border-[rgba(11,15,33,0.06)] bg-white">
        <div className="mx-auto grid max-w-[1360px] items-center gap-14 px-5 py-24 md:px-10 md:py-26 lg:grid-cols-[minmax(0,1fr)_minmax(500px,640px)]">
          <div className="max-w-[620px]">
            <div className="section-kicker">
              <span className="section-kicker-line" />
              Inteligência & Dados
            </div>
            <h2 className="mt-8 max-w-[560px] text-[3.2rem] font-semibold leading-[0.96] tracking-[-0.07em] md:text-[4.3rem]">
              Saúde mental também é dado de gestão.
            </h2>
            <p className="mt-8 text-[1.17rem] leading-[1.8] text-[var(--muted)]">
              Acompanhar o bem-estar psicológico dos colaboradores reduz perdas invisíveis,
              orienta intervenções precoces e transforma cuidado em produtividade sustentável.
              A evolução começa quando a empresa enxerga sinais antes que eles virem crise.
            </p>

            <div className="mt-9 grid max-w-[640px] grid-cols-1 gap-6 border-t border-[rgba(11,15,33,0.08)] pt-9 sm:grid-cols-2">
              <div>
                <p className="text-[3.2rem] font-semibold tracking-[-0.08em] text-[var(--ink)] md:text-[4rem]">US$1 tri</p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--muted)]">
                  em produtividade perdida por depressão e ansiedade a cada ano, segundo a OMS.
                </p>
              </div>
              <div>
                <p className="text-[3.2rem] font-semibold tracking-[-0.08em] text-[var(--ink)] md:text-[4rem]">4.7x</p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--muted)]">
                  de retorno médio para cada £1 investido em saúde mental no trabalho.
                </p>
              </div>
            </div>

            <a
              href="#newsletter"
              className="mt-14 inline-flex items-center justify-center rounded-full bg-[#090c1d] px-8 py-4 text-[1rem] font-medium text-white shadow-[0_14px_32px_rgba(9,12,29,0.14)]"
            >
              Conversar sobre diagnóstico
            </a>
          </div>

          <div className="evidence-chart-card evidence-chart-card-soft relative overflow-hidden rounded-[1.7rem] p-8 shadow-[0_22px_54px_rgba(7,12,30,0.08)] md:p-10">
            <div className="relative z-10">
              <div className="ml-auto flex w-fit items-center gap-2 rounded-full border border-[rgba(11,15,33,0.08)] bg-white/86 px-5 py-3 text-[14px] font-medium text-[var(--ink)] shadow-[0_12px_26px_rgba(9,13,33,0.05)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[#58dce4]" />
                DADOS REAIS
              </div>

              <div className="mt-11">
                <p className="text-[0.82rem] font-medium uppercase tracking-[0.22em] text-[#0a97a6]">
                  Retorno por maturidade da intervenção
                </p>
                <h3 className="mt-5 max-w-[570px] text-[1.95rem] font-semibold leading-[1.06] tracking-[-0.075em] text-[var(--ink)] md:text-[2.25rem]">
                  Programas preventivos performam melhor que ações apenas reativas.
                </h3>
              </div>

              <div className="relative mt-10 h-[280px] rounded-[1.4rem] p-5 md:h-[300px]">
                <div className="absolute inset-x-5 bottom-[58px] h-px bg-[rgba(9,13,33,0.08)]" />
                <div className="absolute inset-x-5 bottom-[122px] h-px bg-[rgba(9,13,33,0.08)]" />
                <div className="absolute inset-x-5 bottom-[186px] h-px bg-[rgba(9,13,33,0.08)]" />

                <svg className="h-full w-full overflow-visible" viewBox="0 0 540 250" aria-hidden="true">
                  <path
                    d="M44 205 C138 176 184 124 270 101 C356 83 416 52 492 30"
                    className="evidence-line"
                    fill="none"
                    stroke="url(#evidenceGradient)"
                    strokeLinecap="round"
                    strokeWidth="5"
                  />
                  <defs>
                    <linearGradient id="evidenceGradient" x1="44" x2="492" y1="205" y2="30">
                      <stop stopColor="#087f8b" />
                      <stop offset="0.52" stopColor="#0aadb8" />
                      <stop offset="1" stopColor="#19d8de" />
                    </linearGradient>
                  </defs>
                  <g className="evidence-point">
                    <circle cx="44" cy="205" r="8" fill="#0aadb8" />
                    <circle cx="44" cy="205" r="17" fill="rgba(10,173,184,0.16)" />
                  </g>
                  <g className="evidence-point evidence-point-delay-1">
                    <circle cx="270" cy="101" r="8" fill="#12c2c5" />
                    <circle cx="270" cy="101" r="17" fill="rgba(18,194,197,0.16)" />
                  </g>
                  <g className="evidence-point evidence-point-delay-2">
                    <circle cx="492" cy="30" r="8" fill="#19d8de" />
                    <circle cx="492" cy="30" r="17" fill="rgba(25,216,222,0.18)" />
                  </g>
                </svg>

                <div className="absolute bottom-5 left-5 text-[12px] font-medium uppercase tracking-[0.15em] text-[rgba(102,113,135,0.74)]">
                  reativo
                </div>
                <div className="absolute bottom-5 left-[45%] text-[12px] font-medium uppercase tracking-[0.15em] text-[rgba(102,113,135,0.74)]">
                  proativo
                </div>
                <div className="absolute bottom-5 right-5 text-[12px] font-medium uppercase tracking-[0.15em] text-[rgba(102,113,135,0.74)]">
                  universal
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                {mentalHealthRoi.map((item) => (
                  <div key={item.stage} className="rounded-[1rem] border border-white/70 bg-white/62 p-4 shadow-[0_14px_30px_rgba(9,13,33,0.045)] md:p-5">
                    <p className="text-[1.85rem] font-semibold tracking-[-0.07em] text-[var(--ink)]">{item.value}</p>
                    <p className="mt-2 text-[0.82rem] font-medium uppercase tracking-[0.15em] text-[#0a97a6]">
                      {item.stage}
                    </p>
                    <p className="mt-3 text-[0.83rem] leading-5 text-[rgba(102,113,135,0.84)]">{item.description}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[12px] leading-5 text-[rgba(102,113,135,0.74)]">
                Fontes: OMS/ILO sobre perdas globais por depressão e ansiedade; Deloitte UK
                Mental Health and Employers 2024, ROI médio e por estágio de intervenção.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="metodo-sert" className="relative overflow-hidden bg-[#050716] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex items-center gap-3 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-[#14d6ea]">
              <span className="h-px w-8 bg-[#14d6ea]" />
              Método SERT
              <span className="h-px w-8 bg-[#14d6ea]" />
            </div>

            <h2 className="mt-7 text-[2.65rem] font-semibold leading-tight text-white md:text-[4rem]">
              O que é o <span className="text-[#19d8de]">Método SERT</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[1.08rem] leading-[1.62] text-white/70">
              Uma metodologia própria voltada para diagnóstico e transformação das relações no
              ambiente organizacional.
            </p>
          </div>

          <div className="mt-18 grid gap-14 lg:grid-cols-[minmax(360px,490px)_minmax(0,1fr)] lg:items-center">
            <div>
              <div className="space-y-10">
                {sertFeatures.map((feature) => (
                  <div key={feature.title} className="grid grid-cols-[54px_minmax(0,1fr)] gap-5">
                    <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[0.9rem] border border-white/12 bg-white/[0.045] text-[#19d8de]">
                      <feature.Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3 className="text-[1.1rem] font-semibold text-white">{feature.title}</h3>
                      <p className="mt-2 max-w-[470px] text-[0.98rem] leading-[1.62] text-white/54">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://metodo-sert-rzvb.vercel.app/"
                className="mt-14 inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#0aaeb0] px-8 text-[0.98rem] font-semibold text-[#031018] shadow-[0_18px_34px_rgba(10,174,176,0.22)] hover:bg-[#12c2c5]"
              >
                Conheça o Método SERT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="sert-panel rounded-[1.45rem] border border-white/10 p-7 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-[#12c8e8]" strokeWidth={2} />
                    <h3 className="text-[1.45rem] font-semibold text-white">Diferenciais</h3>
                  </div>
                  <p className="mt-1 text-[0.82rem] text-white/48">
                    Diagnóstico e transformação das relações organizacionais
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff0a68]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff9b18]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#16bec8]" />
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-2">
                {sertAudienceCards.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-[0.8rem] border border-white/10 bg-white/[0.055] px-5 py-6"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a6572]/55 text-[#16d7e1]">
                      <card.Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                    </div>
                    <h4 className="mt-6 text-[0.95rem] font-semibold text-white">{card.title}</h4>
                    <p className="mt-3 text-[0.76rem] leading-5 text-white/42">{card.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="biblioteca" className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div>
            <h2 className="text-[3.05rem] font-semibold leading-none tracking-[-0.07em] md:text-[4.2rem]">
              Serviços
            </h2>
            <p className="mt-4 max-w-[780px] text-[1.14rem] text-[var(--muted)]">
              Mantemos a dinâmica da vitrine e passamos a destacar as principais frentes de
              atuação da Evoluir-T para empresas, lideranças e contextos periciais.
            </p>
          </div>
          <a
            href="/contrate-nossos-servicos"
            className="mt-3 inline-flex items-center gap-3 text-[1rem] font-medium uppercase tracking-[0.08em] text-[var(--accent)]"
          >
            Solicitar atendimento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {serviceCards.map((card) => (
            <ReadingCard key={card.title} card={card} />
          ))}
        </div>
      </section>

      <section id="palestras-corporativas" className="bg-[#f3f6f8]">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <div className="section-kicker">
                <span className="section-kicker-line" />
                Palestras Corporativas
              </div>
              <h2 className="mt-7 max-w-[780px] text-[3.05rem] font-semibold leading-none tracking-[-0.07em] md:text-[4.2rem]">
                Temas para conversas que fortalecem cultura, liderança e saúde emocional.
              </h2>
              <p className="mt-5 max-w-[760px] text-[1.14rem] leading-[1.72] text-[var(--muted)]">
                Uma seleção de palestras pensadas para abrir diálogo, ampliar repertório e apoiar
                equipes em desafios concretos do trabalho contemporâneo.
              </p>
            </div>
            <a
              href="/contrate-nossos-servicos"
              className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#090c1d] px-7 text-[0.98rem] font-medium text-white shadow-[0_14px_28px_rgba(9,12,29,0.16)]"
            >
              Solicitar palestra
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {corporateTalkThemes.map((theme, index) => (
              <article
                key={theme.title}
                className="group relative overflow-hidden rounded-[1.6rem] border border-[rgba(11,15,33,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcfd_100%)] px-6 py-7 shadow-[0_18px_44px_rgba(9,13,33,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,151,166,0.22)] hover:shadow-[0_24px_56px_rgba(9,13,33,0.09)]"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(10,151,166,0.08),transparent_65%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className={`relative flex h-12 w-12 items-center justify-center rounded-[1rem] ${theme.iconBgClass} ${theme.accentClass} transition-transform duration-300 group-hover:scale-110`}
                >
                  <theme.Icon className="h-5 w-5" strokeWidth={1.9} />
                </div>
                <p
                  className={`mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] ${theme.pillClass}`}
                >
                  Tema {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 max-w-[320px] text-[1.55rem] font-semibold leading-[1.08] tracking-[-0.05em] text-[var(--ink)]">
                  {theme.title}
                </h3>
                <p className="mt-4 max-w-[340px] text-[0.98rem] leading-[1.7] text-[var(--muted)]">
                  {theme.description}
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <span className={`h-[3px] w-12 rounded-full ${theme.iconBgClass}`} />
                  <span className="text-[0.82rem] text-[rgba(102,113,135,0.82)]">
                    palestra corporativa
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-white">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
          <div className="mx-auto max-w-[860px] text-center">
            <div className="section-kicker">
              <span className="section-kicker-line" />
              Como Funciona
            </div>
            <h2 className="mt-7 text-[3.05rem] font-semibold leading-none tracking-[-0.07em] md:text-[4.2rem]">
              Um fluxo claro para transformar leitura organizacional em ação.
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[1.14rem] leading-[1.72] text-[var(--muted)]">
              Da compreensão do cenário até a transformação, cada etapa orienta decisões mais
              conscientes e intervenções alinhadas à realidade da empresa.
            </p>
          </div>

          <div className="mt-16 grid gap-5 xl:grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)_40px_minmax(0,1fr)] xl:items-stretch">
            {workflowSteps.map((item, index) => (
              <div key={item.step} className="contents">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-[rgba(11,15,33,0.08)] bg-[linear-gradient(180deg,#ffffff_0%,#f9fbfc_100%)] p-7 shadow-[0_18px_44px_rgba(9,13,33,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,151,166,0.18)] hover:shadow-[0_26px_60px_rgba(9,13,33,0.08)]">
                  <div className={`pointer-events-none absolute inset-0 opacity-80 ${item.glowClass}`} />
                  <div className="relative flex items-start justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-[1rem] ${item.iconBgClass} ${item.accentClass} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <item.Icon className="h-5 w-5" strokeWidth={1.9} />
                    </div>
                    <div className="rounded-full border border-[rgba(11,15,33,0.08)] bg-white/80 px-3 py-1 text-[0.8rem] font-medium text-[rgba(102,113,135,0.92)] backdrop-blur-sm">
                      Etapa {index + 1}
                    </div>
                  </div>
                  <p className={`relative mt-6 text-[0.78rem] font-medium uppercase tracking-[0.14em] ${item.accentClass}`}>
                    {item.step}
                  </p>
                  <h3 className="relative mt-3 text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.05em] text-[var(--ink)]">
                    {item.title}
                  </h3>
                  <p className="relative mt-4 max-w-[320px] flex-1 text-[1rem] leading-[1.72] text-[var(--muted)]">
                    {item.description}
                  </p>
                  <div className="relative mt-7 flex items-center">
                    <span className={`block h-[3px] w-14 rounded-full ${item.iconBgClass}`} />
                  </div>
                </article>

                {index < workflowSteps.length - 1 ? (
                  <div className="flex items-center justify-center py-1 xl:py-0">
                    <ArrowDown className="h-5 w-5 text-[var(--accent)] xl:hidden" strokeWidth={1.9} />
                    <ArrowRight className="hidden h-5 w-5 text-[var(--accent)] xl:block" strokeWidth={1.9} />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="newsletter"
        className="relative overflow-hidden bg-[radial-gradient(ellipse_760px_430px_at_50%_43%,rgba(5,66,75,0.66)_0%,rgba(4,38,49,0.34)_42%,rgba(5,8,20,0.04)_72%,rgba(5,7,18,0)_100%),linear-gradient(90deg,#070817_0%,#050716_44%,#050716_62%,#060817_100%)] text-white"
      >
        <div className="mx-auto flex min-h-[632px] max-w-[1504px] justify-center px-5 pb-[98px] pt-[96px] md:px-10">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1rem] border border-white/18 bg-white/[0.075] text-[#10bfe2] shadow-[0_14px_34px_rgba(0,0,0,0.18)]">
              <Mail className="h-8 w-8" strokeWidth={2.2} />
            </div>

            <h2 className="mx-auto mt-9 max-w-[760px] text-[2.8rem] font-semibold leading-[0.98] tracking-[-0.055em] text-white md:text-[3.15rem]">
              Sua empresa está pronta para evoluir?
            </h2>

            <p className="mx-auto mt-7 max-w-[720px] text-[1.04rem] leading-[1.7] text-white/68">
              Fortaleça lideranças, cuide das relações de trabalho e transforme desafios
              organizacionais em caminhos mais saudáveis, conscientes e produtivos.
            </p>

            <div className="mt-10">
              <a
                href="https://wa.me/5511976222228?text=Ol%C3%A1%21%20Quero%20agendar%20um%20diagn%C3%B3stico%20organizacional."
                className="inline-flex h-[58px] items-center justify-center rounded-full bg-[#0ea8ab] px-9 text-[0.96rem] font-medium text-[#030f18] shadow-[0_14px_34px_rgba(14,168,171,0.23)]"
              >
                Agendar Diagnóstico
              </a>
            </div>
          </div>
        </div>

        <footer>
          <div className="mx-auto max-w-[1488px] px-5 md:px-10">
            <div className="h-px bg-white/[0.08]" />
          </div>

          <div className="mx-auto max-w-[1488px] px-5 pb-8 pt-[56px] md:px-10">
            <div className="grid gap-10 lg:grid-cols-[320px_240px] lg:justify-between">
              <div>
                <a href="#top" className="text-[1.55rem] font-semibold leading-none tracking-[-0.04em]">
                  Evoluir-<span className="text-[var(--accent)]">T</span>
                </a>
                <p className="mt-8 max-w-[320px] text-[0.93rem] leading-[1.85] text-white/46">
                  Um ecossistema de pesquisa, reflexão e desenvolvimento sobre pessoas, cultura
                  e os futuros do trabalho.
                </p>
              </div>
              <FooterColumn
                title="Social"
                items={["E-mail", "LinkedIn", "Twitter (X)", "Instagram"]}
              />
            </div>

            <div className="mt-[40px] h-px bg-white/[0.08]" />

            <div className="flex flex-col gap-4 pt-6 text-[13px] text-white/32 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Evoluir-T. Todos os direitos reservados.</p>
              <div className="flex items-center gap-8">
                <a href="/politica-de-privacidade">Política de Privacidade</a>
                <a href="/termos-de-uso">Termos de Uso</a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </main>
  );
}

function ReadingCard({
  card,
}: {
  card: {
    title: string;
    eyebrow: string;
    image: string;
    large?: boolean;
    context?: string;
    prefix?: string;
    items: string[];
    secondaryPrefix?: string;
    secondaryItems?: string[];
  };
}) {
  return (
    <article
      className={`reading-card group relative overflow-hidden rounded-[1.75rem] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_rgba(9,13,33,0.14)] ${
        card.large ? "min-h-[420px] md:min-h-[460px]" : "min-h-[320px]"
      }`}
    >
      <div
        className="reading-card-image absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
        style={{ backgroundImage: `url('${card.image}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,21,0.18),rgba(7,10,21,0.72)_48%,rgba(7,10,21,0.94)_100%)]" />
      <div className="relative flex h-full flex-col justify-end p-7 md:p-8">
        <div className="flex items-center gap-4 text-white/80">
          <span className="rounded-full border border-white/10 bg-white/18 px-4 py-1.5 text-[14px] backdrop-blur-sm">
            {card.eyebrow}
          </span>
          <span className="text-[15px]">{card.items.length} frentes</span>
        </div>
        <h3
          className={`mt-5 max-w-[92%] font-medium leading-[1.15] tracking-[-0.05em] text-white ${
            card.large ? "text-[2rem] md:text-[2.35rem]" : "text-[1.45rem] md:text-[1.8rem]"
          }`}
        >
          {card.title}
        </h3>
        {card.context ? (
          <p className="mt-4 max-w-[92%] text-[0.92rem] leading-6 text-white/74">{card.context}</p>
        ) : null}
        {card.prefix ? (
          <p className="mt-4 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#8de7ef]">
            {card.prefix}
          </p>
        ) : null}
        <div className="mt-5 flex flex-wrap gap-2.5">
          {card.items.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/12 bg-white/10 px-3 py-1.5 text-[0.8rem] text-white/88 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/14"
            >
              {item}
            </span>
          ))}
        </div>
        {card.secondaryPrefix ? (
          <p className="mt-5 text-[0.8rem] font-medium uppercase tracking-[0.12em] text-[#8de7ef]">
            {card.secondaryPrefix}
          </p>
        ) : null}
        {card.secondaryItems?.length ? (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {card.secondaryItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/12 bg-white/[0.075] px-3 py-1.5 text-[0.8rem] text-white/76 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/[0.12]"
              >
                {item}
              </span>
            ))}
          </div>
        ) : null}
        <span className="mt-7 h-[3px] w-14 bg-[var(--accent)] transition-all duration-300 group-hover:w-20" />
      </div>
    </article>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  const isSocial = title === "Social";

  return (
    <div>
      <p className="text-[0.94rem] font-medium uppercase tracking-[0.08em] text-white/82">{title}</p>
      <div
        className={
          isSocial
            ? "mt-8 grid grid-cols-2 gap-x-6 gap-y-5 text-[0.93rem] text-white/46"
            : "mt-8 space-y-5 text-[0.93rem] text-white/46"
        }
      >
        {items.map((item) => (
          <a key={item} href="#top" className="block hover:text-white/76">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
