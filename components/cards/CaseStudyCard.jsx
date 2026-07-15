export function CaseStudyCard({brand,industry,result,image,onDetail,style}){
  const [hov,setHov]=React.useState(false);
  return React.createElement('div',{onMouseEnter:()=>setHov(true),onMouseLeave:()=>setHov(false),
    style:{width:340,background:'var(--card)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',overflow:'hidden',
      boxShadow:hov?'var(--shadow-md)':'var(--shadow-sm)',transform:hov?'translateY(-2px)':'none',
      transition:'box-shadow var(--dur-fast) var(--ease-standard),transform var(--dur-fast) var(--ease-standard)',display:'flex',flexDirection:'column',...style}},
    React.createElement('div',{style:{aspectRatio:'16/9',background:'linear-gradient(160deg,var(--slate-200),var(--slate-400))',display:'grid',placeItems:'center',color:'var(--slate-600)',fontSize:'.75rem',fontWeight:600,letterSpacing:'.06em'}},
      image?React.createElement('img',{src:image,alt:brand,style:{width:'100%',height:'100%',objectFit:'cover',display:'block'}}):'ẢNH CHIẾN DỊCH'),
    React.createElement('div',{style:{padding:'16px 18px 18px',display:'grid',gap:6,flex:1,alignContent:'start'}},
      React.createElement('div',{style:{fontSize:'var(--text-h4)',fontWeight:600}},brand),
      React.createElement('div',{style:{fontSize:'.875rem',color:'var(--muted-foreground)'}},[industry,result].filter(Boolean).join(' · ')),
      onDetail&&React.createElement('a',{onClick:onDetail,style:{marginTop:6,fontSize:'.875rem',fontWeight:600,color:'var(--primary)',cursor:'pointer'}},'Xem chi tiết →')));
}
