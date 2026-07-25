import Link from "next/link";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { MetallicLogo } from "@/components/ui/metallic-logo";
import { quickLinks, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div className="site-footer__identity">
          <MetallicLogo compact />
          <p>{site.description}</p>
          <p className="site-footer__motto"><ShieldCheck size={16} /> {site.motto}</p>
        </div>
        <div>
          <p className="footer-label">Quick links</p>
          <nav aria-label="Liên kết nhanh">
            <ul className="footer-links">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    {item.label}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="site-footer__source">
          <p className="footer-label">Nguồn quy định</p>
          <p>Nội dung luật được chuẩn hóa từ nguồn Google Sites do SCPD chỉ định.</p>
          <a href={site.sourceUrl} target="_blank" rel="noreferrer">
            Mở nguồn gốc <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <span>© {new Date().getFullYear()} Six City Police Department</span>
        <span>Roleplay information portal</span>
      </div>
    </footer>
  );
}
