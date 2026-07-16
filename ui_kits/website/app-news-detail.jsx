const NSN=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSN||{};
/* Trang chi tiết bài viết — đồng bộ ngôn ngữ với trang tin tức mới:
   hero nền blue-900 (breadcrumb, kicker, tiêu đề lớn, sapo, byline + chia sẻ),
   ảnh chính kéo tràn lên hero (overlap), thân bài bố cục 7/3 với sidebar sticky
   (Mới nhất + CTA), trích dẫn thanh chặn blue, điều hướng bài trước/sau dạng
   card, khối Đọc thêm theo chuyên mục ở cuối. Nhận bài qua ?a=<slug>. */
const HAIR='1px solid var(--border)';
const artHref=n=>'news-detail.html?a='+n.slug;
function RailLabel({children}){
  return <div style={{display:'grid',gap:6}}>
    <strong style={{fontSize:'.71875rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--foreground)'}}>{children}</strong>
    <div style={{height:2,background:'var(--foreground)'}}></div>
  </div>;
}
function ShareBtns({dark}){
  return <div style={{display:'flex',gap:8}}>
    {['facebook','linkedin','link-2'].map(ic=><button key={ic} aria-label={'Chia sẻ '+ic} className="v-share" style={{width:34,height:34,border:dark?'1px solid rgba(255,255,255,.28)':HAIR,borderRadius:'var(--radius-sm)',background:'transparent',display:'grid',placeItems:'center',cursor:'pointer',color:dark?'#fff':'var(--slate-600)',transition:'border-color .15s ease'}}><window.Icon name={ic} size={15}/></button>)}
  </div>;
}
function Hero({n}){
  const initials=n.author?n.author.trim().split(/\s+/).map(w=>w[0]).slice(-2).join(''):'TC';
  return <section style={{background:'var(--blue-900)',color:'#fff'}}>
    <div style={{...window.container,padding:'40px 32px 104px'}}>
      <nav aria-label="Đường dẫn" style={{display:'flex',gap:8,fontFamily:'var(--font-mono)',fontSize:'.71875rem',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--blue-300)'}}>
        <a href="news.html" className="v-crumb" style={{color:'var(--blue-200)',textDecoration:'none',transition:'color .15s ease'}}>Tin tức</a>
        <span>/</span>
        <span style={{color:'#fff'}}>{n.tag}</span>
      </nav>
      <div style={{maxWidth:820,display:'grid',gap:16,marginTop:26}}>
        {n.kicker&&<span style={{fontSize:'.75rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-300)'}}>{n.kicker}</span>}
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'clamp(1.875rem,3.6vw,2.875rem)',fontWeight:700,lineHeight:1.12,letterSpacing:'-.01em',textWrap:'balance'}}>{n.title}</h1>
        <p style={{margin:0,fontSize:'1.125rem',lineHeight:1.6,color:'var(--blue-100)'}}>{n.excerpt}</p>
        <div style={{display:'flex',alignItems:'center',gap:12,marginTop:4}}>
          <span aria-hidden="true" style={{width:38,height:38,borderRadius:'50%',background:'var(--blue-500)',color:'#fff',display:'grid',placeItems:'center',fontSize:'.8125rem',fontWeight:700}}>{initials}</span>
          <div style={{display:'grid',gap:1}}>
            <strong style={{fontSize:'.84375rem'}}>{n.author||'Toàn Cầu ADV'}</strong>
            <span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',color:'var(--blue-200)'}}>{n.date}{n.read?' · '+n.read+' phút đọc':''}</span>
          </div>
          <div style={{marginLeft:'auto'}}><ShareBtns dark/></div>
        </div>
      </div>
    </div>
  </section>;
}
function PullQuote({q}){
  return <figure style={{margin:'8px 0',borderLeft:'3px solid var(--blue-500)',padding:'6px 0 6px 22px',display:'grid',gap:8}}>
    <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:'1.375rem',fontWeight:600,lineHeight:1.4,color:'var(--foreground)'}}>“{q[0]}”</blockquote>
    <figcaption style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--slate-500)'}}>{q[1]}</figcaption>
  </figure>;
}
function ArticleBody({n}){
  const body=n.body&&n.body.length?n.body:[n.excerpt];
  const quoteAt=n.quote?Math.min(1,body.length-1):-1;
  return <div style={{display:'grid',gap:20}}>
    {body.map((p,i)=><React.Fragment key={i}>
      <p style={{margin:0,fontSize:'1.0625rem',lineHeight:1.85,color:'var(--slate-700)'}}>{p}</p>
      {i===quoteAt&&<PullQuote q={n.quote}/>}
    </React.Fragment>)}
  </div>;
}
function PrevNext({prev,next}){
  if(!prev&&!next)return null;
  const Cell=({n,label,right})=>n?<a href={artHref(n)} className="v-card" style={{display:'grid',gap:8,alignContent:'start',border:HAIR,borderRadius:'var(--radius-sm)',padding:'16px 18px',textDecoration:'none',color:'var(--foreground)',textAlign:right?'right':'left',transition:'border-color .15s ease'}}>
    <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',letterSpacing:'.08em',textTransform:'uppercase',color:'var(--slate-500)'}}>{label}</span>
    <span style={{fontFamily:'var(--font-display)',fontSize:'1rem',fontWeight:700,lineHeight:1.35}}>{n.title}</span>
  </a>:<span></span>;
  return <nav aria-label="Bài liền kề" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginTop:6}}>
    <Cell n={prev} label="← Bài cũ hơn"/>
    <Cell n={next} label="Bài mới hơn →" right/>
  </nav>;
}
function Sidebar({D,idx}){
  const latest=D.news.filter((x,i)=>i!==idx).slice(0,5);
  return <aside className="news-side" style={{display:'grid',gap:34,alignContent:'start',position:'sticky',top:24}}>
    <section style={{display:'grid',gap:0}}>
      <RailLabel>Mới nhất</RailLabel>
      {latest.map((x,i)=><a key={x.slug} href={artHref(x)} className="v-hl" style={{display:'grid',gap:5,padding:'13px 0',borderBottom:i<latest.length-1?HAIR:'none',textDecoration:'none',color:'var(--foreground)',transition:'color .15s ease'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--blue-600)'}}>{x.date} · {x.tag}</span>
        <span style={{fontFamily:'var(--font-display)',fontSize:'.9375rem',fontWeight:700,lineHeight:1.35}}>{x.title}</span>
      </a>)}
    </section>
    <div style={{background:'var(--blue-900)',color:'#fff',borderRadius:'var(--radius-sm)',padding:'22px 20px',display:'grid',gap:10}}>
      <strong style={{fontFamily:'var(--font-display)',fontSize:'1.1875rem',fontWeight:700,lineHeight:1.3}}>Cần vị trí OOH cho chiến dịch tới?</strong>
      <p style={{margin:0,fontSize:'.84375rem',color:'var(--blue-100)',lineHeight:1.55}}>Khám phá bản đồ ~730 vị trí, xem điểm AI theo ngành hàng và nhận báo giá trong vài phút.</p>
      <Button variant="cta" onClick={()=>{window.location.href='map.html'}}>Khám phá bản đồ</Button>
      <button onClick={()=>window.goContact()} style={{height:42,border:'1px solid rgba(255,255,255,.4)',borderRadius:'var(--radius-sm)',background:'transparent',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'.875rem',fontWeight:600,cursor:'pointer'}}>Nhận tư vấn</button>
    </div>
  </aside>;
}
function Related({D,n,idx}){
  const items=D.news.filter((x,i)=>i!==idx&&x.tag===n.tag).slice(0,3);
  if(!items.length)return null;
  return <section style={{...window.container,padding:'0 32px 72px'}}>
    <div style={{display:'grid',gap:6,marginBottom:22}}>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between'}}>
        <strong style={{fontSize:'.71875rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase'}}>Đọc thêm · {n.tag}</strong>
        <a href="news.html" className="v-hl" style={{fontSize:'.8125rem',fontWeight:600,color:'var(--blue-700)',textDecoration:'none'}}>Xem tất cả tin tức →</a>
      </div>
      <div style={{height:2,background:'var(--foreground)'}}></div>
    </div>
    <div className="rel-grid">
      {items.map(x=><a key={x.slug} href={artHref(x)} className="v-hl" style={{display:'grid',gap:9,alignContent:'start',textDecoration:'none',color:'var(--foreground)',transition:'color .15s ease'}}>
        <img src={x.img} alt={x.title} style={{width:'100%',aspectRatio:'3/2',objectFit:'cover',display:'block',borderRadius:'var(--radius-sm)'}}/>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--slate-400)'}}>{x.date}</span>
        <span style={{fontFamily:'var(--font-display)',fontSize:'1.0625rem',fontWeight:700,lineHeight:1.3}}>{x.title}</span>
      </a>)}
    </div>
  </section>;
}
function App(){
  const D=window.TCG_DATA;
  const slug=new URLSearchParams(window.location.search).get('a');
  const found=D.news.findIndex(x=>x.slug===slug);
  const idx=found<0?0:found;
  const n=D.news[idx];
  const prev=D.news[idx+1]||null;
  const next=idx>0?D.news[idx-1]:null;
  React.useEffect(()=>{document.title=n.title+' | Toàn Cầu ADV'},[n]);
  return <div style={{fontFamily:'var(--font-sans)',background:'#fff'}}>
    <style>{`
      .v-hl:hover{color:var(--blue-700)!important}
      .v-hl:hover span{color:var(--blue-700)!important}
      .v-crumb:hover{color:#fff!important}
      .v-card:hover{border-color:var(--blue-500)!important}
      .v-share:hover{border-color:var(--blue-400)!important}
      .news-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,3fr);gap:0 44px;align-items:start}
      .news-side{border-left:1px solid var(--border);padding-left:44px}
      .rel-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:28px}
      @media(max-width:960px){
        .news-grid{grid-template-columns:1fr}
        .news-side{position:static!important;border-left:none;padding-left:0;margin-top:44px}
        .rel-grid{grid-template-columns:1fr;gap:24px}
      }
    `}</style>
    <window.Navbar/>
    <Hero n={n}/>
    <div style={{...window.container,padding:'0 32px 56px'}}>
      <div className="news-grid">
        <article style={{display:'grid',gap:26,marginTop:-64}}>
          <figure style={{margin:0,display:'grid',gap:8}}>
            <img src={n.img} alt={n.title} style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',display:'block',borderRadius:'var(--radius-sm)'}}/>
            <figcaption style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--slate-500)'}}>{n.tag} · Ảnh: Toàn Cầu ADV</figcaption>
          </figure>
          <ArticleBody n={n}/>
          <div style={{display:'flex',alignItems:'center',gap:12,paddingTop:8,borderTop:HAIR}}>
            <a href="news.html" style={{fontSize:'.6875rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--blue-700)',textDecoration:'none',background:'var(--blue-50)',borderRadius:'var(--radius-full)',padding:'6px 13px'}}>{n.tag}</a>
            <div style={{marginLeft:'auto'}}><ShareBtns/></div>
          </div>
          <PrevNext prev={prev} next={next}/>
        </article>
        <Sidebar D={D} idx={idx}/>
      </div>
    </div>
    <Related D={D} n={n} idx={idx}/>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSN?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);
