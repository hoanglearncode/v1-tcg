export function StatusPill({status='available',style}){
  const m={available:{label:'Còn trống',c:'var(--status-available)'},soon:{label:'Sắp hết',c:'var(--status-soon)'},booked:{label:'Đã đặt',c:'var(--status-booked)'}}[status];
  return React.createElement('span',{style:{display:'inline-flex',alignItems:'center',gap:6,padding:'3px 10px',borderRadius:'var(--radius-full)',fontSize:'.75rem',fontWeight:600,color:m.c,background:'color-mix(in srgb, '+(status==='booked'?'#94A3B8':status==='soon'?'#F59E0B':'#16A34A')+' 12%, white)',...style}},
    React.createElement('span',{style:{width:7,height:7,borderRadius:'50%',background:m.c,flex:'none'}}),m.label);
}
