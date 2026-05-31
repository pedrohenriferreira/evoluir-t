"use client";

import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  CheckCircle2,
  Heart,
  Mail,
  Mic,
  Shield,
  Users,
} from "lucide-react";

const domains = [
  {
    id: "01",
    title: "Comportamento Organizacional",
    description:
      "Análise profunda das dinâmicas interpessoais, motivação e psicologia aplicada ao ambiente corporativo. Como indivíduos e grupos interagem e afetam o desempenho sistêmico.",
  },
  {
    id: "02",
    title: "Liderança Complexa",
    description:
      "Estudos sobre tomada de decisão em contextos ambíguos, novas competências de liderança e os limites dos modelos lineares de gestão.",
  },
  {
    id: "03",
    title: "Cultura & Pertencimento",
    description:
      "Investigações sobre pertencimento, inclusão, rituais culturais e os mecanismos que sustentam ambientes mais saudáveis e resilientes.",
  },
  {
    id: "04",
    title: "Futuro do Trabalho",
    description:
      "Pesquisas sobre modelos híbridos, integração de IA nas rotinas produtivas e as novas fronteiras da colaboração humana na era digital.",
  },
];

const signatureTopics = [
  "A Psicologia da Liderança Adaptativa",
  "Segurança Psicológica na Prática",
  "Burnout, Resiliência e Alta Performance Sustentável",
  "O Futuro do Trabalho é Humano",
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
    title: "Métricas de Adesão",
    description:
      "Monitore o engajamento real das iniciativas de bem-estar com dados precisos e contínuos.",
    Icon: Activity,
  },
  {
    title: "Mapeamento de Riscos",
    description:
      "Identifique sinais precoces de burnout e esgotamento antes que se tornem problemas crônicos.",
    Icon: Shield,
  },
  {
    title: "Prioridades de Cuidado",
    description:
      "Direcione seus recursos para as áreas e times que mais precisam de intervenção no momento.",
    Icon: Heart,
  },
];

const sertAudienceCards = [
  {
    title: "Para o RH",
    description: "Visibilidade total em tempo real.",
    Icon: Users,
  },
  {
    title: "Para a Liderança",
    description: "Ferramentas práticas de gestão.",
    Icon: Briefcase,
  },
  {
    title: "Para o Colaborador",
    description: "Acolhimento e privacidade.",
    Icon: Heart,
  },
];

const readingCards = [
  {
    title: "A falácia da resiliência tóxica nas organizações de alta performance",
    type: "Ensaio",
    time: "8 min",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    large: true,
  },
  {
    title: "Como a arquitetura de escritórios molda a segurança psicológica",
    type: "Estudo de Caso",
    time: "12 min",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Diálogos sobre o fim da gestão por controle",
    type: "Entrevista",
    time: "15 min",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  const [activeDomain, setActiveDomain] = useState(domains[0]);

  return (
    <main className="page-shell bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="sticky top-0 z-50 border-b border-[rgba(11,15,33,0.06)] bg-[rgba(250,251,253,0.98)] backdrop-blur-xl">
        <div className="flex items-center justify-between px-5 py-[0.95rem] md:px-6">
          <div className="flex items-center gap-10">
            <a href="#top" className="text-[1.34rem] font-semibold leading-none tracking-[-0.07em]">
              Evoluir-<span className="text-[var(--accent)]">T</span>
            </a>
            <nav className="hidden items-center gap-7 text-[13px] font-medium text-[var(--muted)] md:flex">
              <a href="#manifesto" className="hover:text-[var(--ink)]">Manifesto</a>
              <a href="#areas" className="hover:text-[var(--ink)]">Áreas</a>
              <a href="#pesquisas" className="hover:text-[var(--ink)]">Pesquisas</a>
              <a href="#metodo-sert" className="hover:text-[var(--ink)]">Método SERT</a>
              <a href="#palestras" className="hover:text-[var(--ink)]">Palestras</a>
            </nav>
          </div>

          <a
            href="/contrate-nossos-servicos"
            className="hidden items-center gap-2 text-[14px] font-medium text-[var(--ink)] md:inline-flex"
          >
            Contrate nossos serviços
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section
        id="top"
        className="relative overflow-hidden bg-[radial-gradient(circle_at_left_top,rgba(191,233,237,0.34),transparent_20%),radial-gradient(circle_at_center,rgba(255,255,255,0.9),transparent_44%),radial-gradient(circle_at_left_bottom,rgba(220,225,230,0.88),transparent_34%),linear-gradient(135deg,#f2f6f8_0%,#f9fbfc_46%,#edf1f4_100%)]"
      >
        <div className="mx-auto max-w-[1360px] px-5 pb-18 pt-28 md:px-10 md:pb-18 md:pt-32">
          <div className="mx-auto max-w-[1030px] text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(11,15,33,0.08)] bg-white px-3.5 py-1.5 text-[11px] font-medium uppercase tracking-[0.11em] text-[var(--muted)] shadow-[0_10px_25px_rgba(13,17,35,0.03)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[var(--soft-accent)]" />
              Inteligência Organizacional
            </div>

            <h1 className="mx-auto mt-10 max-w-[980px] text-[3.55rem] font-semibold leading-[0.9] tracking-[-0.095em] text-[var(--ink)] md:text-[6.15rem]">
              <span className="block">O futuro das</span>
              <span className="block">organizações começa</span>
              <span className="block">
                pelas{" "}
                <span className="hero-people-text">pessoas.</span>
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-[760px] text-[1.15rem] leading-[1.75] text-[var(--muted)] md:text-[1.15rem]">
              Um hub editorial de pesquisa, dados e conhecimento sobre comportamento humano,
              cultura e o desenvolvimento sustentável do trabalho.
            </p>

            <div className="hero-orbit mx-auto mt-10 max-w-[850px] px-6 pb-18 pt-10 md:px-10">
              <div className="relative z-10 mx-auto flex max-w-[470px] flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="#biblioteca"
                  className="inline-flex h-[3.35rem] items-center justify-center rounded-full bg-[#090c1d] px-8 text-[0.98rem] font-medium text-white shadow-[0_16px_32px_rgba(9,12,29,0.2)]"
                >
                  Explorar Biblioteca
                </a>
                <a
                  href="#manifesto"
                  className="inline-flex h-[3.35rem] items-center justify-center rounded-full border border-[rgba(11,15,33,0.1)] bg-white/88 px-8 text-[0.98rem] font-medium text-[var(--ink)] shadow-[0_10px_22px_rgba(255,255,255,0.55)]"
                >
                  Conheça o Manifesto
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,rgba(245,248,250,0),rgba(247,249,251,0.82)_62%,rgba(250,250,251,0.96)_86%,#fbfbfc_100%)]" />
      </section>

      <section id="manifesto" className="bg-white">
        <div className="mx-auto max-w-[1360px] px-5 pb-24 pt-10 md:px-10 md:pb-30 md:pt-12">
          <div className="grid items-center gap-12 lg:grid-cols-[620px_minmax(0,1fr)]">
            <div className="relative">
              <div
                className="manifest-photo h-[744px] rounded-[2rem] bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80')",
                  backgroundPosition: "center center",
                }}
              />
              <div className="manifest-quote absolute -bottom-6 right-[-22px] max-w-[192px] rounded-[1.2rem] px-5 py-5 text-[13px] leading-[1.52] text-[var(--ink)]">
                &quot;Não existe evolução dos negócios sem a evolução de quem os constrói.&quot;
              </div>
            </div>

            <div className="max-w-[760px] lg:pl-8">
              <div className="section-kicker">
                <span className="section-kicker-line" />
                Manifesto
              </div>
              <h2 className="mt-8 max-w-[620px] text-[2.45rem] font-semibold leading-[0.98] tracking-[-0.08em] md:text-[3.35rem]">
                Evoluir é compreender antes de agir.
              </h2>
              <div className="mt-10 max-w-[760px] space-y-5 text-[1rem] leading-[1.85] font-medium text-[rgba(106,116,138,0.98)]">
                <p>
                  Vivemos em uma era de mudanças aceleradas. Tecnologias emergem, mercados se
                  transformam e processos são automatizados. No entanto, o núcleo de qualquer
                  organização inovadora permanece inalterado: as pessoas.
                </p>
                <p>
                  O <strong>Evoluir-T</strong> nasceu da necessidade de criar um espaço de reflexão profunda. Não
                  somos apenas um repositório de artigos; somos um ecossistema de inteligência
                  dedicado a decifrar a complexidade do comportamento humano no trabalho.
                </p>
                <p>
                  Acreditamos que líderes extraordinários e culturas resilientes não são
                  construídos com fórmulas prontas, mas com dados, empatia, pesquisa e um
                  compromisso inegociável com o desenvolvimento sustentável.
                </p>
              </div>
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
                Territórios
              </div>

              <div className="mt-11">
                <h2 className="max-w-[480px] text-[3.05rem] font-semibold leading-[0.9] tracking-[-0.09em] text-white md:text-[4.15rem]">
                  Domínios de
                  <span className="block text-white/62">Investigação</span>
                </h2>
              </div>

              <div className="mt-[110px] space-y-0">
                {domains.map((domain) => {
                  const isActive = activeDomain.id === domain.id;

                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onMouseEnter={() => setActiveDomain(domain)}
                      onFocus={() => setActiveDomain(domain)}
                      className="group flex w-full items-center gap-6 border-b border-white/8 py-[34px] text-left"
                    >
                      <span
                        className={`territory-index w-[52px] ${isActive ? "text-[var(--accent)]" : "text-white/24"}`}
                      >
                        {domain.id}
                      </span>
                      <span
                        className={`flex-1 text-[2.05rem] font-medium tracking-[-0.06em] ${isActive ? "text-white" : "text-white/62 group-hover:text-white/82"}`}
                      >
                        {domain.title}
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

            <div className="pt-[84px] lg:pl-2">
              <p className="ml-auto max-w-[430px] text-right text-[1.03rem] leading-[1.68] text-white/50">
                Nossos eixos temáticos são projetados para desconstruir e reconstruir a forma
                como pensamos o trabalho.
              </p>

              <div className="mt-[112px]">
                <div className="domain-card flex min-h-[500px] flex-col rounded-[2rem] border border-white/7 px-10 py-10">
                  <div
                    key={activeDomain.id}
                    className="domain-card-panel animate-fade-up animate-duration-500 animate-ease-out animate-once animate-fill-both flex min-h-[420px] flex-1 flex-col"
                  >
                    <p className="territory-index animate-fade animate-duration-300 animate-ease-out animate-once animate-fill-both text-[var(--accent)]">
                      {activeDomain.id}
                    </p>
                    <p className="mt-11 max-w-[410px] animate-fade-up animate-duration-500 animate-delay-75 animate-ease-out animate-once animate-fill-both text-[1.16rem] leading-[1.74] text-white/94">
                      {activeDomain.description}
                    </p>
                    <a
                      href="#biblioteca"
                      className="mt-auto inline-flex animate-fade-up animate-duration-500 animate-delay-150 animate-ease-out animate-once animate-fill-both items-center gap-3 pt-10 text-[15px] font-medium uppercase tracking-[0.12em] text-white"
                    >
                      Explorar domínio
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
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

      <section id="biblioteca" className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start">
          <div>
            <h2 className="text-[3.05rem] font-semibold leading-none tracking-[-0.07em] md:text-[4.2rem]">
              Leituras Essenciais
            </h2>
            <p className="mt-4 text-[1.14rem] text-[var(--muted)]">
              Curadoria semanal de conteúdos transformadores.
            </p>
          </div>
          <a
            href="#newsletter"
            className="mt-3 inline-flex items-center gap-3 text-[1rem] font-medium uppercase tracking-[0.08em] text-[var(--accent)]"
          >
            Ver todas as publicações
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_430px]">
          <ReadingCard card={readingCards[0]} />
          <div className="grid gap-6">
            <ReadingCard card={readingCards[1]} />
            <ReadingCard card={readingCards[2]} />
          </div>
        </div>
      </section>

      <section id="metodo-sert" className="relative overflow-hidden bg-[#050716] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-[820px] text-center">
            <div className="inline-flex items-center gap-3 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-[#14d6ea]">
              <span className="h-px w-8 bg-[#14d6ea]" />
              Nossa Plataforma
              <span className="h-px w-8 bg-[#14d6ea]" />
            </div>

            <h2 className="mt-7 text-[2.65rem] font-semibold leading-tight text-white md:text-[4rem]">
              Conheça o <span className="text-[#19d8de]">Método SERT</span>
            </h2>
            <p className="mx-auto mt-5 max-w-[760px] text-[1.08rem] leading-[1.62] text-white/70">
              Mais do que uma metodologia, uma plataforma inteligente que ajuda sua empresa a
              acompanhar adesão, mapear sinais de risco e definir prioridades de cuidado em uma
              experiência unificada.
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
                href="/contrate-nossos-servicos"
                className="mt-14 inline-flex h-[58px] items-center justify-center gap-3 rounded-full bg-[#0aaeb0] px-8 text-[0.98rem] font-semibold text-[#031018] shadow-[0_18px_34px_rgba(10,174,176,0.22)] hover:bg-[#12c2c5]"
              >
                Conheça mais o SERT
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="sert-panel rounded-[1.45rem] border border-white/10 p-7 md:p-8">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-[#12c8e8]" strokeWidth={2} />
                    <h3 className="text-[1.45rem] font-semibold text-white">Ecossistema SERT</h3>
                  </div>
                  <p className="mt-1 text-[0.82rem] text-white/48">
                    Visão integrada de saúde corporativa
                  </p>
                </div>
                <div className="mt-2 flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff0a68]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff9b18]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#16bec8]" />
                </div>
              </div>

              <div className="mt-12 grid gap-4 md:grid-cols-3">
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

              <div className="mt-8 h-px bg-white/10" />

              <div className="mt-8 space-y-5">
                <div className="grid grid-cols-[minmax(0,1fr)_82px] items-center gap-4">
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.065]">
                    <div className="h-full w-[85%] rounded-full bg-[#0aaeb0]" />
                  </div>
                  <p className="font-mono text-[0.78rem] text-[#18dce7]">85% Saúde</p>
                </div>
                <div className="grid grid-cols-[minmax(0,1fr)_82px] items-center gap-4">
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.065]">
                    <div className="h-full w-[12%] rounded-full bg-[#ff0a68]" />
                  </div>
                  <p className="font-mono text-[0.78rem] text-[#ff2b78]">12% Alerta</p>
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
                    Transforme seu evento corporativo com insights baseados em ciência
                    comportamental e dados reais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-[690px] lg:pl-0">
            <div className="section-kicker">
              <span className="section-kicker-line" />
              Para o seu evento
            </div>

            <h2 className="mt-9 max-w-[700px] text-[2.95rem] font-semibold leading-[1.02] tracking-[-0.075em] text-[var(--ink)] md:text-[4rem]">
              Eleve o nível do debate sobre{" "}
              <span className="talks-highlight">pessoas e cultura.</span>
            </h2>

            <p className="mt-7 max-w-[690px] text-[1.08rem] leading-[1.68] text-[var(--muted)]">
              Nossas palestras e masterclasses não são motivacionais — são jornadas
              intelectuais. Levamos ao palco a mesma profundidade de nossas pesquisas,
              conectando psicologia, estratégia e o futuro do trabalho de forma provocativa e
              memorável.
            </p>

            <div className="mt-12">
              <p className="text-[0.95rem] font-semibold text-[var(--ink)]">
                Temas de Assinatura:
              </p>
              <div className="mt-5 space-y-4">
                {signatureTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-3 text-[1rem] text-[var(--muted)]">
                    <CheckCircle2 className="h-4.5 w-4.5 shrink-0 text-[var(--accent)]" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-14 flex flex-col gap-3 sm:flex-row">
              <a
                href="/contrate-nossos-servicos"
                className="inline-flex h-[54px] items-center justify-center gap-3 rounded-full bg-[#070a1b] px-8 text-[0.98rem] font-medium text-white shadow-[0_14px_28px_rgba(7,10,27,0.18)]"
              >
                Solicitar Orçamento
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#newsletter"
                className="inline-flex h-[54px] items-center justify-center rounded-full border border-[rgba(11,15,33,0.1)] bg-white px-8 text-[0.98rem] font-medium text-[var(--ink)]"
              >
                Ver Mídia Kit
              </a>
            </div>
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
              Conhecimento destilado,
              <span className="block text-[#9ba2af]">direto na sua caixa de entrada.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-[620px] text-[1.04rem] leading-[1.62] text-white/68">
              Junte-se a milhares de líderes e pesquisadores que recebem nossos insights semanais
              sobre o futuro do comportamento organizacional.
            </p>

            <form className="mx-auto mt-10 flex max-w-[514px] flex-col gap-3.5 sm:flex-row">
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                className="h-[58px] flex-1 rounded-full border border-white/10 bg-[rgba(255,255,255,0.055)] px-6 text-[1rem] text-white outline-none placeholder:text-white/28 focus:border-[rgba(16,191,226,0.55)]"
              />
              <button
                type="submit"
                className="h-[58px] rounded-full bg-[#0ea8ab] px-10 text-[1rem] font-medium text-[#030f18] shadow-[0_14px_34px_rgba(14,168,171,0.23)]"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <footer>
          <div className="mx-auto max-w-[1488px] px-5 md:px-10">
            <div className="h-px bg-white/[0.08]" />
          </div>

          <div className="mx-auto max-w-[1488px] px-5 pb-8 pt-[84px] md:px-10">
            <div className="grid gap-14 lg:grid-cols-[320px_240px_260px_260px] lg:justify-between">
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
                title="Explorar"
                items={["Manifesto", "Áreas de Conhecimento", "Pesquisas e Dados", "Biblioteca de Artigos"]}
              />
              <FooterColumn
                title="Comunidade"
                items={["Eventos", "Fóruns de Discussão", "Seja um Contribuidor", "Parcerias Acadêmicas"]}
              />
              <FooterColumn
                title="Social"
                items={["LinkedIn", "Twitter (X)", "Instagram"]}
              />
            </div>

            <div className="mt-[64px] h-px bg-white/[0.08]" />

            <div className="flex flex-col gap-6 pt-8 text-[13px] text-white/32 md:flex-row md:items-center md:justify-between">
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
  card: { title: string; type: string; time: string; image: string; large?: boolean };
}) {
  return (
    <article
      className={`reading-card group relative overflow-hidden rounded-[1.75rem] ${
        card.large ? "min-h-[560px]" : "min-h-[270px]"
      }`}
    >
      <div
        className="reading-card-image absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.06]"
        style={{ backgroundImage: `url('${card.image}')` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,10,21,0.1),rgba(7,10,21,0.76)_72%,rgba(7,10,21,0.9)_100%)]" />
      <div className="relative flex h-full flex-col justify-end p-7 md:p-8">
        <div className="flex items-center gap-4 text-white/80">
          <span className="rounded-full bg-white/18 px-4 py-1.5 text-[14px]">{card.type}</span>
          <span className="text-[15px]">{card.time}</span>
        </div>
        <h3
          className={`mt-5 max-w-[92%] font-medium leading-[1.15] tracking-[-0.05em] text-white ${
            card.large ? "text-[2.1rem] md:text-[3rem]" : "text-[1.45rem] md:text-[1.8rem]"
          }`}
        >
          {card.title}
        </h3>
        <span className="mt-7 h-[3px] w-14 bg-[var(--accent)] transition-all duration-300 group-hover:w-20" />
      </div>
    </article>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-[0.94rem] font-medium uppercase tracking-[0.08em] text-white/82">{title}</p>
      <div className="mt-8 space-y-5 text-[0.93rem] text-white/46">
        {items.map((item) => (
          <a key={item} href="#top" className="block hover:text-white/76">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
