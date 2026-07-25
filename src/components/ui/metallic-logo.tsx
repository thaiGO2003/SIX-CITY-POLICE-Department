import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  compact?: boolean;
  className?: string;
};

export function MetallicLogo({ compact = false, className }: BrandLogoProps) {
  return (
    <div className={cn("brand-logo", compact && "brand-logo--compact", className)} aria-label="Six City Police Department">
      <Image
        src="/logo_SIX_city.webp"
        alt="SIX CITY POLICE DEPARTMENT"
        width={compact ? 38 : 48}
        height={compact ? 44 : 56}
        className="brand-logo__img"
        priority
      />
      <div className="brand-logo__type">
        <strong>SIX CITY</strong>
        <span>POLICE DEPARTMENT</span>
      </div>
    </div>
  );
}
