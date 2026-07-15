/** Filter chip (§7.4). Active = navy border + secondary background + optional ✕ remove. */
export interface FilterChipProps {
  active?: boolean;
  onClick?: () => void;
  /** When set on an active chip, renders a ✕ that removes the filter */
  onRemove?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FilterChip(props: FilterChipProps): JSX.Element;
