export function Skeleton({width='100%',height=16,radius='var(--radius-md)',style}){
  injectPulse();
  return React.createElement('div',{style:{width,height,borderRadius:radius,background:'var(--muted)',animation:'tcgpulse 1.4s ease-in-out infinite',...style}});
}
function injectPulse(){if(typeof document!=='undefined'&&!document.getElementById('tcgpulse')){const s=document.createElement('style');s.id='tcgpulse';s.textContent='@keyframes tcgpulse{0%,100%{opacity:1}50%{opacity:.45}}@media (prefers-reduced-motion: reduce){[style*="tcgpulse"]{animation:none}}';document.head.appendChild(s)}}
export function Toast({kind='success',title,message,onClose,style}){
  const m={success:{c:'var(--success)',icon:'✓'},error:{c:'var(--destructive)',icon:'✕'},info:{c:'var(--info)',icon:'ℹ'}}[kind];
  return React.createElement('div',{role:'status',style:{display:'flex',gap:12,alignItems:'flex-start',width:360,padding:'14px 16px',
    background:'var(--card)',border:'1px solid var(--border)',borderLeft:`3px solid ${m.c}`,borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',...style}},
    React.createElement('span',{style:{width:22,height:22,borderRadius:'50%',background:m.c,color:'#fff',display:'grid',placeItems:'center',fontSize:'.75rem',fontWeight:700,flex:'none'}},m.icon),
    React.createElement('div',{style:{display:'grid',gap:2,flex:1}},
      React.createElement('div',{style:{fontWeight:600,fontSize:'.9375rem'}},title),
      message&&React.createElement('div',{style:{fontSize:'.875rem',color:'var(--muted-foreground)'}},message)),
    onClose&&React.createElement('button',{onClick:onClose,'aria-label':'Đóng',style:{border:'none',background:'none',cursor:'pointer',color:'var(--muted-foreground)',fontSize:'1rem',lineHeight:1}},'✕'));
}
export function EmptyState({title='Không có vị trí phù hợp',hint='Thử nới rộng bộ lọc hoặc chọn tỉnh/thành khác.',action,style}){
  return React.createElement('div',{style:{display:'grid',justifyItems:'center',gap:8,padding:'40px 24px',textAlign:'center',...style}},
    React.createElement('div',{style:{width:48,height:48,borderRadius:'50%',background:'var(--muted)',display:'grid',placeItems:'center',color:'var(--muted-foreground)',fontSize:'1.25rem'}},'⌕'),
    React.createElement('div',{style:{fontWeight:600,fontSize:'1.0625rem'}},title),
    React.createElement('div',{style:{fontSize:'.875rem',color:'var(--muted-foreground)',maxWidth:360}},hint),
    action);
}
export function ErrorState({title='Không tải được dữ liệu',hint='Vui lòng kiểm tra kết nối và thử lại.',onRetry,style}){
  return React.createElement('div',{style:{display:'grid',justifyItems:'center',gap:8,padding:'40px 24px',textAlign:'center',...style}},
    React.createElement('div',{style:{width:48,height:48,borderRadius:'50%',background:'rgba(220,38,38,.1)',display:'grid',placeItems:'center',color:'var(--destructive)',fontSize:'1.1rem',fontWeight:700}},'!'),
    React.createElement('div',{style:{fontWeight:600,fontSize:'1.0625rem'}},title),
    React.createElement('div',{style:{fontSize:'.875rem',color:'var(--muted-foreground)',maxWidth:360}},hint),
    onRetry&&React.createElement('button',{onClick:onRetry,style:{marginTop:6,height:40,padding:'0 18px',borderRadius:'var(--radius-md)',border:'1px solid var(--border)',background:'#fff',color:'var(--primary)',fontWeight:600,fontFamily:'var(--font-sans)',cursor:'pointer'}},'Thử lại'));
}
