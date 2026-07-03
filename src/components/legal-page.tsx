import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";

type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, description, updatedAt, sections }: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[var(--page-bg)] text-[var(--ink)]">
      <header className="border-b border-white/8 bg-[#03091b]">
        <div className="flex items-center justify-between px-5 py-[0.95rem] md:px-6">
          <SiteLogo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[14px] font-medium text-white/68 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar ao site
          </Link>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_left_top,rgba(191,233,237,0.28),transparent_18%),linear-gradient(135deg,#f7f9fb_0%,#ffffff_48%,#edf2f4_100%)]">
        <div className="mx-auto max-w-[1180px] px-5 py-20 md:px-10 md:py-24">
          <div className="section-kicker">
            <span className="section-kicker-line" />
            {eyebrow}
          </div>
          <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,720px)_260px] lg:items-end lg:justify-between">
            <div>
              <h1 className="text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.085em] md:text-[5rem]">
                {title}
              </h1>
              <p className="mt-7 max-w-[720px] text-[1.12rem] leading-[1.78] text-[var(--muted)]">
                {description}
              </p>
            </div>
            <div className="rounded-[1.2rem] border border-[rgba(11,15,33,0.08)] bg-white/78 px-5 py-4 text-[0.9rem] leading-6 text-[var(--muted)] shadow-[0_18px_44px_rgba(9,13,33,0.04)]">
              <span className="block text-[0.73rem] font-medium uppercase tracking-[0.14em] text-[var(--accent)]">
                Atualização
              </span>
              {updatedAt}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[960px] px-5 py-16 md:px-10 md:py-20">
          <div className="rounded-[1.8rem] border border-[rgba(11,15,33,0.07)] bg-white p-6 shadow-[0_24px_70px_rgba(9,13,33,0.045)] md:p-10">
            <div className="space-y-12">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-[1.65rem] font-semibold leading-tight tracking-[-0.055em]">
                    {section.title}
                  </h2>
                  {section.paragraphs ? (
                    <div className="mt-5 space-y-4 text-[1rem] leading-[1.85] text-[var(--muted)]">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}
                  {section.items ? (
                    <ul className="mt-5 space-y-3 text-[1rem] leading-[1.75] text-[var(--muted)]">
                      {section.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
