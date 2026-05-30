"use client";

import { useState } from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

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

const archiveItems = [
  { title: "Psicologia da Liderança", count: "42 publicações" },
  { title: "Design de Culturas", count: "38 publicações" },
  { title: "Bem-estar e Performance", count: "56 publicações" },
  { title: "Diversidade Sistêmica", count: "24 publicações" },
  { title: "O Futuro do Trabalho", count: "61 publicações" },
  { title: "Ética e IA no RH", count: "19 publicações" },
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
              <a href="#biblioteca" className="hover:text-[var(--ink)]">Biblioteca</a>
            </nav>
          </div>

          <a
            href="#newsletter"
            className="hidden items-center gap-2 text-[14px] font-medium text-[var(--ink)] md:inline-flex"
          >
            Assinar Newsletter
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
              A evidência por trás da evolução.
            </h2>
            <p className="mt-8 text-[1.17rem] leading-[1.8] text-[var(--muted)]">
              Nossa equipe de pesquisadores coleta, analisa e traduz dados complexos sobre o
              mercado de trabalho em insights acionáveis. Transformamos intuição em evidência.
            </p>

            <div className="mt-9 grid max-w-[640px] grid-cols-2 gap-6 border-t border-[rgba(11,15,33,0.08)] pt-9">
              <div>
                <p className="text-[4rem] font-semibold tracking-[-0.08em] text-[var(--ink)]">84%</p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--muted)]">
                  Das empresas repensando modelos de liderança.
                </p>
              </div>
              <div>
                <p className="text-[4rem] font-semibold tracking-[-0.08em] text-[var(--ink)]">2.4x</p>
                <p className="mt-2 text-[1rem] leading-7 text-[var(--muted)]">
                  Aumento na retenção em culturas de alta confiança.
                </p>
              </div>
            </div>

            <a
              href="#newsletter"
              className="mt-14 inline-flex items-center justify-center rounded-full bg-[#090c1d] px-8 py-4 text-[1rem] font-medium text-white shadow-[0_14px_32px_rgba(9,12,29,0.14)]"
            >
              Acessar Relatório Anual
            </a>
          </div>

          <div className="relative overflow-hidden rounded-[1.9rem] bg-[linear-gradient(145deg,#19002d_0%,#120022_35%,#07102d_100%)] p-8 shadow-[0_26px_65px_rgba(18,0,46,0.18)]">
            <div className="absolute inset-0 opacity-90">
              <div className="network-grid" />
            </div>
            <div className="relative">
              <div className="ml-auto flex w-fit items-center gap-2 rounded-full bg-[rgba(255,255,255,0.84)] px-5 py-3 text-[14px] font-medium text-[var(--ink)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--soft-accent)]" />
                LIVE DATA
              </div>

              <div className="mt-[18rem] max-w-[360px] rounded-[1.5rem] bg-[rgba(219,211,241,0.92)] px-6 py-6 text-[var(--ink)] shadow-[0_18px_40px_rgba(20,12,51,0.22)]">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/60">
                  <div className="h-full w-[70%] rounded-full bg-[linear-gradient(90deg,#0ea6a4,#58d2ff)]" />
                </div>
                <p className="mt-5 text-[1.15rem] font-medium">Índice de Adaptação Cultural</p>
                <p className="mt-2 text-[15px] text-[rgba(11,15,33,0.56)]">Atualizado neste trimestre</p>
              </div>
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

      <section className="border-t border-[rgba(11,15,33,0.06)] bg-white">
        <div className="mx-auto max-w-[1360px] px-5 py-24 md:px-10">
          <div className="max-w-[690px]">
            <h2 className="text-[3.05rem] font-semibold leading-none tracking-[-0.07em] md:text-[4.2rem]">
              Acervo Digital
            </h2>
            <p className="mt-5 max-w-[720px] text-[1.18rem] leading-[1.7] text-[var(--muted)]">
              Explore nossa biblioteca de ensaios, pesquisas empíricas e estudos de caso
              organizados por eixos temáticos.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {archiveItems.map((item) => (
              <article
                key={item.title}
                className="archive-card archive-card-idle group min-h-[184px] rounded-[1.8rem] border px-8 py-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="archive-badge rounded-full bg-[rgba(11,15,33,0.04)] px-4 py-2 text-[14px] text-[var(--muted)]">
                    {item.count}
                  </span>
                  <span
                    className="archive-arrow flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(11,15,33,0.12)] text-[rgba(11,15,33,0.38)] transition-all"
                  >
                    <ArrowRight className="h-4 w-4 rotate-[-90deg] group-hover:hidden" />
                    <ArrowUpRight className="hidden h-4 w-4 group-hover:block" />
                  </span>
                </div>

                <h3 className="mt-18 max-w-[360px] text-[1.55rem] font-medium tracking-[-0.06em] text-[var(--ink)]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="newsletter" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(8,186,223,0.18),transparent_24%),linear-gradient(90deg,#070b1d_0%,#081120_55%,#032733_100%)] text-white">
        <div className="mx-auto max-w-[1360px] px-5 py-26 md:px-10">
          <div className="mx-auto max-w-[800px] text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-[1.1rem] border border-white/15 bg-white/6 text-[var(--accent)] shadow-[0_16px_40px_rgba(0,0,0,0.18)]">
              <Mail className="h-8 w-8" />
            </div>
            <h2 className="mx-auto mt-8 max-w-[900px] text-[3.55rem] font-semibold leading-[0.95] tracking-[-0.08em] text-white md:text-[5rem]">
              Conhecimento destilado,
              <span className="block text-white/56">direto na sua caixa de entrada.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-[720px] text-[1.2rem] leading-[1.75] text-white/68">
              Junte-se a milhares de líderes e pesquisadores que recebem nossos insights semanais
              sobre o futuro do comportamento organizacional.
            </p>

            <form className="mx-auto mt-12 flex max-w-[640px] flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="seu.email@exemplo.com"
                className="h-16 flex-1 rounded-full border border-white/10 bg-[rgba(255,255,255,0.04)] px-6 text-[1.05rem] text-white outline-none placeholder:text-white/28 focus:border-[var(--accent)]"
              />
              <button
                type="submit"
                className="h-16 rounded-full bg-[#18c3ea] px-10 text-[1.1rem] font-medium text-[#03111a] shadow-[0_18px_40px_rgba(24,195,234,0.24)]"
              >
                Inscrever-se
              </button>
            </form>

            <p className="mt-6 text-[14px] text-white/28">Sem spam. Apenas conteúdo de altíssimo nível.</p>
          </div>
        </div>

        <footer className="border-t border-white/8">
          <div className="mx-auto max-w-[1360px] px-5 py-18 md:px-10">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div>
                <a href="#top" className="text-[2.2rem] font-semibold leading-none tracking-[-0.05em]">
                  Evoluir-<span className="text-[var(--accent)]">T</span>
                </a>
                <p className="mt-8 max-w-[340px] text-[1.05rem] leading-[1.8] text-white/46">
                  O hub definitivo de inteligência e pesquisa sobre pessoas, cultura e a
                  evolução do trabalho.
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
                items={["LinkedIn", "Twitter (X)", "Instagram", "Spotify (Podcast)"]}
              />
            </div>

            <div className="mt-18 flex flex-col gap-6 border-t border-white/8 pt-8 text-[14px] text-white/34 md:flex-row md:items-center md:justify-between">
              <p>© 2026 Evoluir-T. Todos os direitos reservados.</p>
              <div className="flex items-center gap-8">
                <a href="#top">Política de Privacidade</a>
                <a href="#top">Termos de Uso</a>
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
      <p className="text-[1rem] font-medium uppercase tracking-[0.08em] text-white/82">{title}</p>
      <div className="mt-8 space-y-5 text-[1.02rem] text-white/46">
        {items.map((item) => (
          <a key={item} href="#top" className="block hover:text-white/76">
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}
