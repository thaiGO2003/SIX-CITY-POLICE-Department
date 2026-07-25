import { CheckCircle2, CircleAlert, FileCheck2 } from "lucide-react";
import type { ContentSource } from "@/content/types";

const labels = {
  canonical: { icon: FileCheck2, text: "Nguồn chuẩn" },
  "approved-doc": { icon: CheckCircle2, text: "Đã duyệt" },
  "pending-review": { icon: CircleAlert, text: "Cần rà soát" },
};

export function SourceBadge({ source }: { source: ContentSource }) {
  const config = labels[source.status];
  const Icon = config.icon;
  return (
    <a className={`source-badge source-badge--${source.status}`} href={source.url} target="_blank" rel="noreferrer">
      <Icon size={15} aria-hidden="true" />
      <span>{config.text}</span>
      <span className="source-badge__label">{source.label}</span>
    </a>
  );
}
