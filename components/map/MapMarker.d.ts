/**
 * Map primitives (§7.5): MapMarker (navy pin · hover enlarged · selected amber ·
 * cluster count disc) and MapPopup (mini location card for marker click).
 * Cosmetic recreations — production uses MapLibre GL with clustering.
 */
export interface MapMarkerProps {
  state?: 'default' | 'hover' | 'selected' | 'cluster';
  /** Cluster count when state="cluster" */
  count?: number;
  style?: React.CSSProperties;
}
export declare function MapMarker(props: MapMarkerProps): JSX.Element;
