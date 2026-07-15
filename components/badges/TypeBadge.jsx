export function TypeBadge({children,style}){
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',padding:'3px 10px',borderRadius:'var(--radius-full)',fontSize:'.75rem',fontWeight:600,background:'var(--muted)',color:'var(--primary)',...style}},children);
}
