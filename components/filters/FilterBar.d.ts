/** Filter bar shell (§7.4): hosts selects/chips as children, shows mono result count ("128 vị trí") + "Xóa lọc". */
export interface FilterBarProps {
  resultCount?: number;
  onClear?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FilterBar(props: FilterBarProps): JSX.Element;
