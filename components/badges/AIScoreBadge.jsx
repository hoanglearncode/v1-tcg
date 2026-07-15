export function AIScoreBadge({score=0,reason,method,size='md',style}){
  const tier=score>=80?{label:'Cao',c:'var(--score-high)'}:score>=60?{label:'Khá',c:'var(--score-good)'}:score>=40?{label:'Trung bình',c:'var(--score-mid)'}:{label:'Thấp',c:'var(--score-low)'};
  const sm=size==='sm';
  return React.createElement('span',{title:reason?`${reason}${method?` · phương pháp: ${method}`:''}`:undefined,
    style:{display:'inline-flex',alignItems:'center',gap:6,padding:sm?'2px 8px':'4px 10px',borderRadius:'var(--radius-full)',
      background:'#fff',border:`1.5px solid ${tier.c}`,boxShadow:'var(--shadow-sm)',...style}},
    React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontWeight:700,fontSize:sm?'.8125rem':'.9375rem',color:tier.c}},'◆ '+score),
    React.createElement('span',{style:{fontSize:sm?'.6875rem':'.75rem',fontWeight:600,color:'var(--foreground)'}},tier.label));
}
