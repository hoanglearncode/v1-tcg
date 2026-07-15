/**
 * Sticky bottom quote-builder tray (§7.6). Renders nothing until count ≥ 1.
 * Navy-900 bar: mono count + mono running total + amber "Tạo báo giá" CTA.
 */
export interface QuoteTrayProps {
  count: number;
  /** e.g. "145.000.000đ/tháng" */
  total?: string;
  onSubmit?: () => void;
  /** Tap on the count label (mobile opens selection sheet) */
  onOpen?: () => void;
  /** position:fixed at viewport bottom */
  fixed?: boolean;
  style?: React.CSSProperties;
}
export declare function QuoteTray(props: QuoteTrayProps): JSX.Element;
