/**
 * Form primitives (§7.7): Field wrapper (label + error/hint), Input, Textarea,
 * Select, Checkbox. Errors always carry text (never border-only) + aria-invalid.
 * Navy focus ring. Lead forms must never fail silently: idle → submitting → success | error.
 */
export interface FieldProps { label?: string; required?: boolean; error?: string; hint?: string; htmlFor?: string; children?: React.ReactNode; }
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { error?: string; }
export declare function Field(props: FieldProps): JSX.Element;
export declare function Input(props: InputProps): JSX.Element;
