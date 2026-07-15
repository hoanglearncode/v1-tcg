/**
 * Toàn Cầu ADV button. Variants per design-system.md §7.1. Amber `cta` is reserved
 * for the main conversion actions ("Yêu cầu báo giá", "Nhận tư vấn").
 * @startingPoint section="Components" subtitle="Nút hành động — primary navy, CTA amber" viewport="700x260"
 */
export interface ButtonProps {
  /** primary = navy (main action) · cta = amber+ink (quote/consult CTAs) · outline-inverse = on navy backgrounds */
  variant?: 'primary' | 'cta' | 'secondary' | 'outline' | 'outline-inverse' | 'ghost' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
  /** Shows spinner, disables, keeps width (no layout jump) */
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
