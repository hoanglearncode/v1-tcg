/**
 * AI suitability score badge (0–100), explainable by design: mono number + tier
 * label + tier color — never color-only. Tooltip carries the "vì sao đề xuất" reason.
 */
export interface AIScoreBadgeProps {
  /** 0–100 precomputed score. Tiers: 0–39 Thấp · 40–59 Trung bình · 60–79 Khá · 80–100 Cao */
  score: number;
  /** Short explanation shown in tooltip, e.g. "Lưu lượng cao, gần khu ăn uống" */
  reason?: string;
  /** Scoring method shown in tooltip */
  method?: 'rule' | 'llm' | 'hybrid';
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function AIScoreBadge(props: AIScoreBadgeProps): JSX.Element;
