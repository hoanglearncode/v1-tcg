export function FilterChip({active=false,onClick,onRemove,children,style}){
  const [hov,setHov]=React.useState(false);
  return React.createElement('button',{onClick,onMouseEnter:()=>setHov(true),onMouseLeave:()=>setHov(false),
    style:{display:'inline-flex',alignItems:'center',gap:6,height:36,padding:'0 14px',borderRadius:'var(--radius-full)',
      fontSize:'.875rem',fontWeight:600,fontFamily:'var(--font-sans)',cursor:'pointer',
      background:active?'var(--secondary)':hov?'var(--slate-50)':'#fff',
      color:active?'var(--secondary-foreground)':'var(--slate-600)',
      border:active?'1.5px solid var(--primary)':'1px solid var(--border)',
      transition:'background var(--dur-fast) var(--ease-standard)',...style}},
    children,
    active&&onRemove&&React.createElement('span',{onClick:e=>{e.stopPropagation();onRemove()},'aria-label':'Gỡ bộ lọc',
      style:{fontWeight:700,lineHeight:1,padding:'0 2px'}},'✕'));
}
