/** Trust-stat row (§7.9): large mono numbers + uppercase caption labels ("20+ NĂM OOH", "~730 VỊ TRÍ OOH"). */
export interface TrustStatsProps {
  stats: { value: string; label: string; note?: string }[];
  /** White numerals for navy backgrounds */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export declare function TrustStats(props: TrustStatsProps): JSX.Element;
