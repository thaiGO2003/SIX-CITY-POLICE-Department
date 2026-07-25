export type SourceStatus = "canonical" | "approved-doc" | "pending-review";

export type ContentSource = {
  url: string;
  label: string;
  status: SourceStatus;
};

export type LawSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Law = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  summary: string;
  sections: LawSection[];
  relatedSlugs: string[];
  lastReviewed: string;
  source: ContentSource;
};

export type NavigationItem = {
  href: string;
  label: string;
  description: string;
};
