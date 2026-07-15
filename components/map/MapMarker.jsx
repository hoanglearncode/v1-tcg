export function MapMarker({state='default',count,style}){
  if(state==='cluster')return React.createElement('div',{style:{width:36,height:36,borderRadius:'50%',background:'var(--navy-600)',color:'#fff',display:'grid',placeItems:'center',fontFamily:'var(--font-mono)',fontWeight:700,fontSize:'.8125rem',border:'2px solid #fff',boxShadow:'var(--shadow-md)',...style}},count);
  const sel=state==='selected',hov=state==='hover';
  const c=sel?'var(--cta)':'var(--navy-600)';
  return React.createElement('div',{style:{width:sel||hov?30:24,height:sel||hov?30:24,transition:'all var(--dur-fast) var(--ease-standard)',...style}},
    React.createElement('svg',{viewBox:'0 0 24 24',width:'100%',height:'100%'},
      React.createElement('path',{d:'M12 2C7.6 2 4 5.6 4 10c0 5.4 8 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8z',fill:c,stroke:'#fff',strokeWidth:1.5}),
      React.createElement('circle',{cx:12,cy:10,r:3,fill:'#fff'})));
}
import {AIScoreBadge} from '../badges/AIScoreBadge.jsx';
import {StatusPill} from '../badges/StatusPill.jsx';
export function MapPopup({name,price,score,reason,status='available',image,onDetail,onAdd,style}){
  return React.createElement('div',{style:{width:260,background:'var(--card)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-lg)',overflow:'hidden',...style}},
    React.createElement('div',{style:{height:96,background:'linear-gradient(160deg,var(--navy-100),var(--navy-300))',display:'grid',placeItems:'center',color:'var(--navy-600)',fontSize:'.6875rem',fontWeight:600,letterSpacing:'.06em'}},
      image?React.createElement('img',{src:image,alt:name,style:{width:'100%',height:'100%',objectFit:'cover',display:'block'}}):'ẢNH VỊ TRÍ'),
    React.createElement('div',{style:{padding:'12px 14px',display:'grid',gap:8}},
      React.createElement('div',{style:{fontWeight:600,fontSize:'.9375rem',lineHeight:1.3}},name),
      React.createElement('div',{style:{display:'flex',alignItems:'center',gap:8,flexWrap:'wrap'}},
        price&&React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontWeight:600,fontSize:'.875rem',color:'var(--primary)'}},price),
        score!=null&&React.createElement(AIScoreBadge,{score,reason,size:'sm'}),
        React.createElement(StatusPill,{status})),
      React.createElement('div',{style:{display:'flex',gap:8}},
        React.createElement('button',{onClick:onDetail,style:{flex:1,height:34,borderRadius:'var(--radius-md)',border:'1px solid var(--border)',background:'#fff',color:'var(--primary)',fontWeight:600,fontSize:'.8125rem',fontFamily:'var(--font-sans)',cursor:'pointer'}},'Chi tiết'),
        React.createElement('button',{onClick:onAdd,style:{flex:1.4,height:34,borderRadius:'var(--radius-md)',border:'none',background:'var(--cta)',color:'var(--cta-foreground)',fontWeight:600,fontSize:'.8125rem',fontFamily:'var(--font-sans)',cursor:'pointer'}},'+ Thêm báo giá'))));
}
