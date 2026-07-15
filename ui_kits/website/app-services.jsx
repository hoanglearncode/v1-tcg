const NSS=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSS||{};
const svcImgs={['san-bay']:'https://picsum.photos/seed/tcg-airport-noibai/800/520',billboard:'https://picsum.photos/seed/tcg-metro-2/800/520',led:'https://picsum.photos/seed/tcg-metro-6/800/520',pano:'https://picsum.photos/seed/tcg-ooh-11/800/520'};
function App(){
  const D=window.TCG_DATA;
  const goSvc=(slug)=>{const el=document.getElementById('svc-'+slug);if(el){const y=el.getBoundingClientRect().top+window.scrollY-130;window.scrollTo({top:y,behavior:'smooth'})}};
  return <div style={{fontFamily:'var(--font-sans)'}}>
    <window.Navbar/>
    <div style={{background:'var(--blue-900)',color:'#fff',padding:'36px 0 24px'}}>
      <div style={{...window.container,display:'grid',gap:16}}>
        <div style={{display:'grid',gap:4}}>
          <span style={{fontSize:'.75rem',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-200)'}}>Toàn Cầu ADV</span>
          <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'1.75rem',fontWeight:600}}>Dịch vụ quảng cáo ngoài trời</h1>
        </div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {D.services.map(s=><button key={s.slug} onClick={()=>goSvc(s.slug)} style={{height:34,padding:'0 14px',borderRadius:'var(--radius-full)',border:'1px solid rgba(255,255,255,.3)',background:'transparent',color:'#DBEAFE',fontSize:'.8125rem',fontWeight:600,fontFamily:'var(--font-sans)',cursor:'pointer'}}>{s.name}</button>)}
        </div>
      </div>
    </div>
    <section style={{padding:'56px 0'}}><div style={{...window.container,display:'grid',gap:48}}>
      {D.services.map((s,i)=><div id={'svc-'+s.slug} key={s.slug} style={{display:'grid',gridTemplateColumns:i%2?'1fr 1.1fr':'1.1fr 1fr',gap:40,alignItems:'center'}}>
        {i%2===0&&<img src={svcImgs[s.slug]} alt={s.name} style={{width:'100%',aspectRatio:'8/5',objectFit:'cover',borderRadius:'var(--radius-xl)',border:'1px solid var(--border)'}}/>}
        <div style={{display:'grid',gap:14,justifyItems:'start'}}>
          <div style={{display:'flex',gap:12,alignItems:'center'}}>
            <span style={{width:44,height:44,borderRadius:'var(--radius-md)',background:'var(--blue-50)',display:'grid',placeItems:'center',color:'var(--primary)'}}><window.Icon name={s.icon} size={22}/></span>
            <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h2)',fontWeight:600,color:'var(--primary)'}}>{s.name}</h2>
          </div>
          <p style={{margin:0,fontSize:'var(--text-body-lg)',lineHeight:1.65,color:'var(--slate-600)',maxWidth:520}}>{s.desc}</p>
          <ul style={{margin:0,padding:0,listStyle:'none',display:'grid',gap:8}}>
            {s.feats.map(f=><li key={f} style={{display:'flex',gap:10,alignItems:'baseline',fontSize:'.9375rem'}}><span style={{color:'var(--success)',fontWeight:700}}>✓</span>{f}</li>)}
          </ul>
          <div style={{display:'flex',gap:28,padding:'12px 0',borderTop:'1px solid var(--border)'}}>
            <div style={{display:'grid',gap:2}}><span style={{fontSize:'.75rem',color:'var(--muted-foreground)'}}>Giá tham khảo từ</span><strong style={{fontFamily:'var(--font-mono)',fontSize:'1.25rem',color:'var(--primary)'}}>{s.from}.000.000đ<span style={{fontSize:'.8125rem',color:'var(--muted-foreground)',fontWeight:400}}>/tháng</span></strong></div>
            <div style={{display:'grid',gap:2}}><span style={{fontSize:'.75rem',color:'var(--muted-foreground)'}}>Quy mô</span><strong style={{fontFamily:'var(--font-mono)',fontSize:'1.25rem'}}>{s.count}</strong></div>
          </div>
          <div style={{display:'flex',gap:10,flexWrap:'wrap'}}>
            <Button variant="primary" onClick={()=>{window.location.href='map.html'}}>Xem vị trí trên bản đồ</Button>
            <Button variant="outline" onClick={()=>{window.location.href='contact.html'}}>Nhận tư vấn & báo giá</Button>
          </div>
        </div>
        {i%2===1&&<img src={svcImgs[s.slug]} alt={s.name} style={{width:'100%',aspectRatio:'8/5',objectFit:'cover',borderRadius:'var(--radius-xl)',border:'1px solid var(--border)'}}/>}
      </div>)}
    </div></section>
    <section style={{background:'var(--muted)',padding:'56px 0'}}><div style={{...window.container,display:'grid',gap:24}}>
      <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h2)',fontWeight:600,color:'var(--primary)',textAlign:'center'}}>Quy trình triển khai</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:12}}>
        {D.steps.map(([ic,label],i)=><div key={i} style={{display:'grid',gap:10,justifyItems:'center',textAlign:'center',background:'#fff',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'18px 12px'}}>
          <span style={{width:44,height:44,borderRadius:'50%',background:'var(--primary)',color:'#fff',display:'grid',placeItems:'center'}}><window.Icon name={ic} size={20}/></span>
          <span style={{fontSize:'.875rem',fontWeight:600,lineHeight:1.4}}>{label}</span>
        </div>)}
      </div>
    </div></section>
    <window.CTABand/>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSS&&NSS.Button?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);