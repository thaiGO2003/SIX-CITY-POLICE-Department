import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type MetallicLogoProps = {
  compact?: boolean;
  className?: string;
};

export function MetallicLogo({ compact = false, className }: MetallicLogoProps) {
  return (
    <div className={cn("metallic-logo", compact && "metallic-logo--compact", className)} aria-label="Six City Police Department">
      <div className="metallic-logo__shield" aria-hidden="true">
        <Shield strokeWidth={1.25} />
        <span>S</span>
      </div>
      <div className="metallic-logo__type">
        <strong>SIX CITY</strong>
        <span>POLICE DEPARTMENT</span>
      </div>
    </div>
  );
}
