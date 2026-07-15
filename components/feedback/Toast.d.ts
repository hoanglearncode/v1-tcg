/**
 * Feedback set (§7.10): Toast (success/error/info), Skeleton loader,
 * EmptyState ("Không có vị trí phù hợp" + loosen-filter hint), ErrorState (with retry —
 * every network call gets one; leads never fail silently).
 */
export interface ToastProps { kind?: 'success' | 'error' | 'info'; title: string; message?: string; onClose?: () => void; style?: React.CSSProperties; }
export declare function Toast(props: ToastProps): JSX.Element;
