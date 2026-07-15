/** Case-study / campaign card (§7.9): 16:9 image, brand, industry · result, detail link. Content pending real material — keep placeholders honest. */
export interface CaseStudyCardProps {
  brand: string;
  industry?: string;
  result?: string;
  image?: string;
  onDetail?: () => void;
  style?: React.CSSProperties;
}
export declare function CaseStudyCard(props: CaseStudyCardProps): JSX.Element;
