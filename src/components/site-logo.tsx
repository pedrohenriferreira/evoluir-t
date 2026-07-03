import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  href?: string;
};

export function SiteLogo({ href = "/" }: SiteLogoProps) {
  return (
    <Link
      href={href}
      className="inline-flex h-8 w-24 shrink-0 items-center justify-center"
      aria-label="Evoluir-T"
    >
      <Image
        src="/evoluir-t_logo_transparente_recortado.png"
        alt="Evoluir-T"
        width={1470}
        height={537}
        preload
        className="h-8 w-auto"
      />
    </Link>
  );
}
