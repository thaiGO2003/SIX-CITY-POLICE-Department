import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, description, as: Heading = "h2" }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading>{title}</Heading>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
