import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, BarChart3, CheckCircle2, Mic, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contrate nossos serviços | Evoluir-T",
  description:
    "Escolha entre contratar uma palestra da Evoluir-T ou conhecer o Método SERT para acompanhamento de saúde corporativa.",
};

const serviceOptions = [
  {
    eyebrow: "Para o seu evento",
    title: "Contratar uma palestra",
    description:
      "Leve para sua organização uma experiência profunda sobre pessoas, cultura, liderança e saúde mental no trabalho.",
    href: "https://wa.me/5511976222228?text=Ol%C3%A1%21%20Quero%20contratar%20uma%20palestra%20da%20Evoluir-T.",
    cta: "Quero contratar palestra",
    Icon: Mic,
    highlights: [
      "Keynotes e masterclasses sob medida",
      "Temas conectados à psicologia organizacional",
      "Conteúdo aplicável para líderes, RH e equipes",
    ],
  },
  {
    eyebrow: "Nossa plataforma",
    title: "Contratar o Método SERT",
    description:
      "Acompanhe adesão, mapeie riscos e organize prioridades de cuidado com uma plataforma inteligente para saúde corporativa.",
    href: "https://metodo-sert-rzvb.vercel.app/",
    cta: "Conheça mais o SERT",
    Icon: BarChart3,
    highlights: [
      "Métricas de adesão em tempo real",
      "Mapeamento de riscos psicossociais",
      "Prioridades de cuidado para tomada de decisão",
    ],
  },
];

export default function HireServicesPage() {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="border-b border-[rgba(11,15,33,0.06)] bg-[rgba(250,251,253,0.98)]">
        <div className="flex items-center justify-between px-5 py-[0.95rem] md:px-6">
          <Link href="/" className="text-[1.34rem] font-semibold leading-none tracking-[-0.07em]">
            Evoluir-<span className="text-[var(--accent)]">T</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--muted)] hover:text-[var(--ink)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_left_top,rgba(191,233,237,0.28),transparent_18%),linear-gradient(135deg,#f7f9fb_0%,#ffffff_48%,#edf2f4_100%)]">
        <div className="mx-auto max-w-[1180px] px-5 py-18 md:px-10 md:py-24">
          <div className="section-kicker">
            <span className="section-kicker-line" />
            Contrate nossos serviços
          </div>
          <div className="mt-8 max-w-[820px]">
            <h1 className="text-[3.05rem] font-semibold leading-[0.98] tracking-[-0.085em] md:text-[5rem]">
              Escolha como a Evoluir-T pode apoiar sua organização.
            </h1>
            <p className="mt-7 max-w-[720px] text-[1.12rem] leading-[1.78] text-[var(--muted)]">
              Você pode levar a nossa inteligência para um encontro, evento ou jornada de
              liderança, ou avançar para uma plataforma de acompanhamento contínuo com o Método
              SERT.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-14 md:px-10 md:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {serviceOptions.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-[520px] flex-col rounded-[1.8rem] border border-[rgba(11,15,33,0.08)] bg-white p-7 shadow-[0_24px_70px_rgba(9,13,33,0.045)] transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(10,151,166,0.38)] hover:shadow-[0_30px_80px_rgba(9,13,33,0.08)] md:p-9"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[1rem] bg-[rgba(10,151,166,0.1)] text-[var(--accent)]">
                    <service.Icon className="h-7 w-7" strokeWidth={1.9} />
                  </div>
                  <span className="rounded-full bg-[rgba(11,15,33,0.04)] px-4 py-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] text-[var(--muted)]">
                    {service.eyebrow}
                  </span>
                </div>

                <h2 className="mt-10 text-[2.35rem] font-semibold leading-[1.02] tracking-[-0.075em] md:text-[3.35rem]">
                  {service.title}
                </h2>
                <p className="mt-6 text-[1.03rem] leading-[1.75] text-[var(--muted)]">
                  {service.description}
                </p>

                <div className="mt-8 space-y-4">
                  {service.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3 text-[0.98rem] text-[var(--muted)]">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-10">
                  <Link
                    href={service.href}
                    className="inline-flex h-[56px] items-center justify-center gap-3 rounded-full bg-[#070a1b] px-7 text-[0.98rem] font-medium text-white shadow-[0_14px_28px_rgba(7,10,27,0.16)] group-hover:bg-[var(--accent)] group-hover:text-[#031018]"
                  >
                    {service.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-[1.3rem] border border-[rgba(11,15,33,0.07)] bg-[linear-gradient(135deg,#ffffff_0%,#f6f8fa_100%)] px-6 py-5 text-[0.95rem] leading-7 text-[var(--muted)] md:px-8">
            <div className="flex gap-3">
              <ShieldCheck className="mt-1 h-5 w-5 shrink-0 text-[var(--accent)]" />
              <p>
                Se você ainda não sabe qual caminho faz mais sentido, comece pela opção de palestra
                para abrir a conversa com líderes e equipes. O Método SERT entra quando a empresa
                quer transformar essa conversa em acompanhamento contínuo.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
