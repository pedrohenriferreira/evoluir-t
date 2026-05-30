import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Termos de Uso | Evoluir-T",
  description:
    "Termos de Uso da Evoluir-T para acesso ao site, conteúdos, materiais, newsletter e canais institucionais.",
};

const sections = [
  {
    title: "1. Aceitação dos termos",
    paragraphs: [
      "Ao acessar ou utilizar este site, você concorda com estes Termos de Uso. Se não concordar com alguma condição, recomendamos que não utilize o site.",
      "A Evoluir-T pode atualizar estes termos periodicamente. A continuidade de uso após alterações representa ciência da versão vigente.",
    ],
  },
  {
    title: "2. Finalidade do site",
    paragraphs: [
      "O site da Evoluir-T apresenta conteúdos institucionais, editoriais, informações sobre palestras, pesquisas, projetos, serviços e canais de contato.",
      "Os conteúdos publicados têm finalidade informativa, educativa e institucional. Eles não substituem avaliação psicológica, atendimento profissional, orientação clínica individualizada ou aconselhamento jurídico.",
    ],
  },
  {
    title: "3. Uso permitido",
    items: [
      "Acessar conteúdos para fins pessoais, profissionais, educacionais ou institucionais legítimos.",
      "Entrar em contato para solicitar informações, propostas, parcerias, palestras, eventos ou serviços.",
      "Compartilhar links públicos do site, preservando autoria, contexto e integridade das informações.",
    ],
  },
  {
    title: "4. Condutas não permitidas",
    items: [
      "Usar o site para fins ilegais, discriminatórios, abusivos, fraudulentos ou que violem direitos de terceiros.",
      "Tentar acessar áreas restritas, sistemas, servidores ou dados sem autorização.",
      "Copiar, modificar, distribuir ou explorar conteúdos da Evoluir-T sem autorização quando isso violar direitos autorais, marcas ou propriedade intelectual.",
      "Enviar arquivos, códigos, mensagens ou conteúdos que prejudiquem o funcionamento do site ou a segurança de usuários.",
    ],
  },
  {
    title: "5. Propriedade intelectual",
    paragraphs: [
      "Textos, identidade visual, estrutura, imagens, marcas, nomes, materiais, conceitos editoriais e demais elementos do site pertencem à Evoluir-T ou a terceiros licenciadores, quando aplicável.",
      "Nenhum conteúdo deve ser interpretado como concessão de licença ampla de uso, reprodução comercial ou exploração sem autorização prévia.",
    ],
  },
  {
    title: "6. Links externos e integrações",
    paragraphs: [
      "O site pode conter links para páginas, ferramentas ou plataformas de terceiros. A Evoluir-T não controla esses ambientes e não se responsabiliza por suas práticas, conteúdos, políticas ou disponibilidade.",
    ],
  },
  {
    title: "7. Comunicações e newsletter",
    paragraphs: [
      "Ao se inscrever em comunicações da Evoluir-T, você autoriza o envio de conteúdos institucionais, editoriais e informativos. O descadastramento poderá ser solicitado pelos canais indicados nas comunicações.",
    ],
  },
  {
    title: "8. Limitação de responsabilidade",
    paragraphs: [
      "Empregamos esforços razoáveis para manter o site disponível, seguro e atualizado, mas não garantimos funcionamento ininterrupto ou ausência total de erros técnicos.",
      "A Evoluir-T não se responsabiliza por decisões tomadas exclusivamente com base em conteúdos informativos do site sem avaliação profissional adequada ao contexto específico.",
    ],
  },
  {
    title: "9. Contato",
    paragraphs: [
      "Dúvidas sobre estes Termos de Uso podem ser encaminhadas pelo canal oficial de atendimento da Evoluir-T.",
    ],
  },
];

export default function TermsOfUsePage() {
  return (
    <LegalPage
      eyebrow="Termos"
      title="Termos de Uso"
      description="Condições gerais para acesso ao site, conteúdos, materiais, newsletter e canais digitais da Evoluir-T."
      updatedAt="30 de maio de 2026"
      sections={sections}
    />
  );
}
