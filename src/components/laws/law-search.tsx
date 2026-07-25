"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import type { Law } from "@/content/types";
import { normalizeVietnamese } from "@/lib/utils";

type LawSearchProps = {
  laws: Law[];
};

export function LawSearch({ laws }: LawSearchProps) {
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeVietnamese(query.trim());
  const results = useMemo(() => {
    if (!normalizedQuery) return laws;
    return laws.filter((law) =>
      normalizeVietnamese(`${law.title} ${law.summary} ${law.categoryLabel}`).includes(normalizedQuery),
    );
  }, [laws, normalizedQuery]);

  return (
    <div className="law-search">
      <label className="search-field">
        <Search size={19} aria-hidden="true" />
        <span className="sr-only">Tìm trong bộ luật</span>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Tìm điều luật, tình huống hoặc chủ đề..."
        />
        {query ? (
          <button type="button" onClick={() => setQuery("")} aria-label="Xóa từ khóa">
            <X size={17} aria-hidden="true" />
          </button>
        ) : null}
      </label>
      <p className="search-result-count" aria-live="polite">
        {results.length} mục phù hợp
      </p>
      <div className="law-search__results">
        {results.map((law) => (
          <Link href={`/laws/${law.slug}`} className="law-search__result" key={law.slug}>
            <span>{law.categoryLabel}</span>
            <strong>{law.title}</strong>
            <p>{law.summary}</p>
          </Link>
        ))}
        {!results.length ? (
          <div className="law-search__empty">
            <strong>Không tìm thấy mục phù hợp.</strong>
            <p>Thử dùng từ khóa ngắn hơn hoặc bỏ dấu tiếng Việt.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
