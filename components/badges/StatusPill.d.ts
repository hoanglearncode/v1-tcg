/** Availability pill for an OOH location — dot + Vietnamese label, never color-only. "Đã đặt" is gray, not red (it's not an error). */
export interface StatusPillProps {
  status: 'available' | 'soon' | 'booked';
  style?: React.CSSProperties;
}
export declare function StatusPill(props: StatusPillProps): JSX.Element;
