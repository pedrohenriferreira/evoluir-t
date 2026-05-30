import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de Privacidade | Evoluir-T",
  description:
    "Política de Privacidade da Evoluir-T sobre coleta, uso, proteção e direitos relacionados a dados pessoais.",
};

const sections = [
  {
    title: "1. Visão geral",
    paragraphs: [
      "Esta Política de Privacidade explica como a Evoluir-T trata dados pessoais coletados por meio deste site, formulários de contato, inscrições de newsletter, solicitações comerciais e interações institucionais.",
      "Nosso compromisso é usar dados com finalidade clara, proporcionalidade e respeito à privacidade das pessoas que se relacionam com a Evoluir-T.",
    ],
  },
  {
    title: "2. Dados que podemos coletar",
    items: [
      "Dados de identificação e contato, como nome, e-mail, telefone, empresa, cargo e mensagem enviada voluntariamente.",
      "Dados relacionados a interesses comerciais, como tema de palestra, evento, demanda institucional ou serviço solicitado.",
      "Dados técnicos de navegação, como endereço IP, tipo de dispositivo, navegador, páginas acessadas e dados de cookies ou tecnologias semelhantes.",
      "Informações fornecidas espontaneamente em mensagens. Recomendamos que dados sensíveis de saúde não sejam enviados por formulários públicos do site.",
    ],
  },
  {
    title: "3. Como usamos os dados",
    items: [
      "Responder solicitações, contatos, propostas, dúvidas e pedidos de orçamento.",
      "Enviar newsletter, conteúdos editoriais e comunicações institucionais quando houver inscrição ou autorização.",
      "Organizar demandas relacionadas a palestras, pesquisas, parcerias, eventos e serviços da Evoluir-T.",
      "Melhorar a experiência do site, compreender interesse por conteúdos e manter segurança técnica.",
      "Cumprir obrigações legais, regulatórias ou solicitações legítimas de autoridades competentes.",
    ],
  },
  {
    title: "4. Compartilhamento",
    paragraphs: [
      "A Evoluir-T pode compartilhar dados com fornecedores necessários para operar o site, hospedar informações, enviar comunicações, organizar eventos, analisar métricas ou prestar suporte tecnológico.",
      "Também poderemos compartilhar dados quando necessário para cumprir obrigações legais, proteger direitos da Evoluir-T ou atender solicitações de autoridades competentes. Não vendemos dados pessoais.",
    ],
  },
  {
    title: "5. Cookies e tecnologias semelhantes",
    paragraphs: [
      "Podemos usar cookies para funcionamento do site, medição de audiência, melhoria de navegação e entendimento de conteúdos mais acessados. O usuário pode ajustar permissões de cookies diretamente no navegador.",
    ],
  },
  {
    title: "6. Segurança e retenção",
    paragraphs: [
      "Adotamos medidas técnicas e organizacionais razoáveis para proteger dados pessoais contra acessos não autorizados, perda, alteração ou uso indevido.",
      "Os dados são mantidos pelo tempo necessário ao cumprimento das finalidades desta política, de obrigações legais ou para proteção de direitos.",
    ],
  },
  {
    title: "7. Direitos dos titulares",
    paragraphs: [
      "Nos termos da legislação aplicável, você pode solicitar confirmação de tratamento, acesso, correção, anonimização, eliminação, portabilidade, informação sobre compartilhamento e revogação de consentimento.",
      "Para exercer seus direitos ou tirar dúvidas sobre privacidade, entre em contato pelo canal oficial de atendimento da Evoluir-T.",
    ],
  },
  {
    title: "8. Alterações desta política",
    paragraphs: [
      "Esta política pode ser atualizada para refletir mudanças no site, nos serviços, em requisitos legais ou nas práticas internas de privacidade. A versão mais recente ficará sempre disponível nesta página.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacidade"
      title="Política de Privacidade"
      description="Transparência sobre como coletamos, usamos e protegemos informações pessoais em nossas interações digitais e institucionais."
      updatedAt="30 de maio de 2026"
      sections={sections}
    />
  );
}
