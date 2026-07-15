export function TrustStats({stats=[],inverse=false,style}){
  return React.createElement('div',{style:{display:'flex',flexWrap:'wrap',gap:'32px 64px',justifyContent:'center',...style}},
    stats.map((s,i)=>React.createElement('div',{key:i,style:{display:'grid',gap:4,justifyItems:'center',textAlign:'center'}},
      React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontWeight:700,fontSize:'2.75rem',lineHeight:1.1,color:inverse?'#fff':'var(--primary)'}},s.value),
      React.createElement('div',{style:{fontSize:'var(--text-caption)',fontWeight:600,letterSpacing:'.08em',textTransform:'uppercase',color:inverse?'var(--slate-300)':'var(--muted-foreground)'}},s.label),
      s.note&&React.createElement('div',{style:{fontSize:'.75rem',color:inverse?'var(--slate-400)':'var(--slate-400)'}},s.note))));
}
