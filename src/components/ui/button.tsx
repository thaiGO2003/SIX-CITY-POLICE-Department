import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "brass" | "silver" | "quiet";
};

export function Button({ className, variant = "brass", ...props }: ButtonProps) {
  return <Link className={cn("button", `button--${variant}`, className)} {...props} />;
}
