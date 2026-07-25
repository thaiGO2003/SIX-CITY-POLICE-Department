import Link from "next/link";
import { BookOpenText, CircleHelp, HeartHandshake, Shield, UsersRound } from "lucide-react";
import { MobileMenu } from "@/components/shell/mobile-menu";
import { MetallicLogo } from "@/components/ui/metallic-logo";
import { navigation } from "@/content/site";

const navIcons = {
  "Trang chủ": Shield,
  "Bộ luật": BookOpenText,
  Rules: CircleHelp,
  Roster: UsersRound,
  "Join us": UsersRound,
  Donate: HeartHandshake,
};

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__signal" aria-hidden="true" />
      <div className="shell site-header__inner">
        <Link href="/" className="brand-link">
          <MetallicLogo />
        </Link>
        <nav className="desktop-nav" aria-label="Điều hướng chính">
          {navigation.map((item) => {
            const Icon = navIcons[item.label as keyof typeof navIcons];
            return (
              <Link key={item.href} href={item.href} title={item.description}>
                <Icon size={16} aria-hidden="true" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
}
