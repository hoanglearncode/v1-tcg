import {AIScoreBadge} from '../badges/AIScoreBadge.jsx';
import {StatusPill} from '../badges/StatusPill.jsx';
import {TypeBadge} from '../badges/TypeBadge.jsx';
import {Button} from '../core/Button.jsx';
export function LocationCard({name,type='Billboard',city,size,price,status='available',score,reason,image,selected=false,unavailable,onSelect,onAdd,style}){
  const [hov,setHov]=React.useState(false);
  const off=unavailable||status==='booked';
  return React.createElement('div',{onMouseEnter:()=>setHov(true),onMouseLeave:()=>setHov(false),onClick:onSelect,
    style:{width:300,background:'var(--card)',border:selected?'2px solid var(--primary)':'1px solid var(--border)',borderRadius:'var(--radius-lg)',overflow:'hidden',
      boxShadow:hov&&!off?'var(--shadow-md)':'var(--shadow-sm)',transform:hov&&!off?'translateY(-2px)':'none',
      transition:'box-shadow var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)',
      opacity:off?.6:1,cursor:onSelect?'pointer':'default',...style}},
    React.createElement('div',{style:{position:'relative',aspectRatio:'4/3',background:'linear-gradient(160deg,var(--navy-100),var(--navy-300))'}},
      image?React.createElement('img',{src:image,alt:name,style:{width:'100%',height:'100%',objectFit:'cover',display:'block'}})
        :React.createElement('div',{style:{position:'absolute',inset:0,display:'grid',placeItems:'center',color:'var(--navy-600)',fontSize:'.75rem',fontWeight:600,letterSpacing:'.06em'}},'ẢNH VỊ TRÍ'),
      React.createElement(TypeBadge,{style:{position:'absolute',top:10,left:10,background:'rgba(255,255,255,.92)'}},type),
      score!=null&&React.createElement(AIScoreBadge,{score,reason,size:'sm',style:{position:'absolute',top:8,right:10}})),
    React.createElement('div',{style:{padding:'14px 16px 16px',display:'grid',gap:8}},
      React.createElement('div',{style:{fontSize:'var(--text-h4)',fontWeight:600,lineHeight:1.3}},name),
      React.createElement('div',{style:{display:'flex',gap:10,alignItems:'baseline',color:'var(--muted-foreground)',fontSize:'.875rem'}},
        city&&React.createElement('span',null,city),
        size&&React.createElement('span',{style:{fontFamily:'var(--font-mono)'}},size)),
      price&&React.createElement('div',{style:{fontFamily:'var(--font-mono)',fontWeight:600,fontSize:'1.0625rem',color:'var(--primary)'}},price),
      React.createElement('div',{style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:8}},
        React.createElement(StatusPill,{status}),
        onAdd&&!off&&React.createElement(Button,{variant:'outline',size:'sm',onClick:e=>{e&&e.stopPropagation&&e.stopPropagation();onAdd()}},'+ Thêm báo giá')),
      reason&&React.createElement('div',{style:{fontSize:'.8125rem',color:'var(--muted-foreground)',borderTop:'1px solid var(--border)',paddingTop:8}},'“'+reason+'”')));
}
