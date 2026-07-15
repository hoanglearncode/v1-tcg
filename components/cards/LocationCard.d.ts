/**
 * OOH location card (design-system.md §7.2): 4:3 photo, type badge + AI score
 * overlays, name, city + size (mono), price (mono), availability pill, add-to-quote.
 * @startingPoint section="Components" subtitle="Thẻ vị trí OOH — ảnh, điểm AI, giá, trạng thái" viewport="700x420"
 */
export interface LocationCardProps {
  name: string;
  /** Loại biển: "Billboard" | "Sân bay" | "LED" | "Pano"… */
  type?: string;
  city?: string;
  /** e.g. "8×12m" — rendered in mono */
  size?: string;
  /** e.g. "45.000.000đ/tháng" — rendered in mono */
  price?: string;
  status?: 'available' | 'soon' | 'booked';
  /** AI suitability 0–100; shows AIScoreBadge overlay when present */
  score?: number;
  /** "Vì sao đề xuất" — shown as quoted footnote */
  reason?: string;
  image?: string;
  selected?: boolean;
  unavailable?: boolean;
  onSelect?: () => void;
  /** "+ Thêm báo giá" — pushes into QuoteTray */
  onAdd?: () => void;
  style?: React.CSSProperties;
}
export declare function LocationCard(props: LocationCardProps): JSX.Element;
