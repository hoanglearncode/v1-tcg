const NSN=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSN||{};
function App(){
  const D=window.TCG_DATA;
  const [tag,setTag]=React.useState('Tất cả');
  const [page,setPage]=React.useState(1);
  const PER=4;
  const all=D.news.filter(n=>tag==='Tất cả'||n.tag===tag);
  const pages=Math.max(1,Math.ceil(all.length/PER));
  const cur=Math.min(page,pages);
  const items=all.slice((cur-1)*PER,cur*PER);
  const latest=[...D.news].slice(0,4);
  const featured=D.news[1];
  const setTagAnd=(t)=>{setTag(t);setPage(1)};
  return <div style={{fontFamily:'var(--font-sans)'}}>
    <window.Navbar/>
    <div style={{background:'var(--blue-900)',color:'#fff',padding:'36px 0 24px'}}>
      <div style={{...window.container,display:'grid',gap:16}}>
        <div style={{display:'grid',gap:4}}>
          <span style={{fontSize:'.75rem',fontWeight:600,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-200)'}}>Toàn Cầu ADV</span>
          <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'1.75rem',fontWeight:600}}>Tin tức</h1>
        </div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>
          {D.newsTags.map(t=><button key={t} onClick={()=>setTagAnd(t)} style={{height:34,padding:'0 14px',borderRadius:'var(--radius-full)',border:tag===t?'1px solid #fff':'1px solid rgba(255,255,255,.3)',background:tag===t?'#fff':'transparent',color:tag===t?'var(--blue-800)':'#DBEAFE',fontSize:'.8125rem',fontWeight:600,fontFamily:'var(--font-sans)',cursor:'pointer'}}>{t}</button>)}
        </div>
      </div>
    </div>
    <section style={{padding:'48px 0 72px'}}>
      <div style={{...window.container,display:'grid',gridTemplateColumns:'7fr 3fr',gap:40,alignItems:'start'}}>
        <div style={{display:'grid',gap:20,minWidth:0}}>
          {items.length===0&&<p style={{color:'var(--muted-foreground)'}}>Chưa có bài viết trong mục này.</p>}
          {items.map((n,i)=><article key={n.title} style={{display:'grid',gridTemplateColumns:i===0?'1fr':'220px 1fr',gap:i===0?0:18,background:'#fff',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',overflow:'hidden',boxShadow:'var(--shadow-sm)'}}>
            <img src={n.img} alt="" style={{width:'100%',height:i===0?280:'100%',minHeight:i===0?0:140,objectFit:'cover'}}/>
            <div style={{padding:i===0?'18px 22px 22px':'16px 18px',display:'grid',gap:8,alignContent:'start'}}>
              <div style={{display:'flex',gap:10,alignItems:'center'}}>
                <span style={{fontSize:'.6875rem',fontWeight:600,padding:'2px 10px',borderRadius:'var(--radius-full)',background:'var(--blue-50)',color:'var(--blue-700)'}}>{n.tag}</span>
                <span style={{fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--muted-foreground)'}}>{n.date}</span>
              </div>
              <h2 style={{margin:0,fontSize:i===0?'var(--text-h3)':'var(--text-h4)',fontWeight:600,lineHeight:1.35}}>{n.title}</h2>
              <p style={{margin:0,fontSize:'.9375rem',color:'var(--slate-600)',lineHeight:1.6}}>{n.excerpt}</p>
              <a style={{fontSize:'.875rem',fontWeight:600,color:'var(--primary)',cursor:'pointer'}}>Đọc tiếp →</a>
            </div>
          </article>)}
          <nav aria-label="Phân trang" style={{display:'flex',gap:8,justifyContent:'center',paddingTop:8}}>
            <button disabled={cur===1} onClick={()=>setPage(cur-1)} style={{height:38,padding:'0 14px',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',background:'#fff',color:cur===1?'var(--slate-300)':'var(--primary)',fontWeight:600,cursor:cur===1?'default':'pointer',fontFamily:'var(--font-sans)'}}>← Trước</button>
            {Array.from({length:pages},(_,i)=><button key={i} onClick={()=>setPage(i+1)} style={{width:38,height:38,border:'1px solid '+(cur===i+1?'var(--primary)':'var(--border)'),borderRadius:'var(--radius-md)',background:cur===i+1?'var(--primary)':'#fff',color:cur===i+1?'#fff':'var(--slate-600)',fontWeight:600,fontFamily:'var(--font-mono)',cursor:'pointer'}}>{i+1}</button>)}
            <button disabled={cur===pages} onClick={()=>setPage(cur+1)} style={{height:38,padding:'0 14px',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',background:'#fff',color:cur===pages?'var(--slate-300)':'var(--primary)',fontWeight:600,cursor:cur===pages?'default':'pointer',fontFamily:'var(--font-sans)'}}>Sau →</button>
          </nav>
        </div>
        <aside style={{display:'grid',gap:24,alignContent:'start'}}>
          <div style={{border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',overflow:'hidden',background:'#fff',boxShadow:'var(--shadow-sm)'}}>
            <div style={{padding:'12px 16px',borderBottom:'1px solid var(--border)',fontWeight:600}}>Bài viết nổi bật</div>
            <img src={featured.img} alt="" style={{width:'100%',height:130,objectFit:'cover'}}/>
            <div style={{padding:'12px 16px 16px',display:'grid',gap:6}}>
              <strong style={{fontSize:'.9375rem',lineHeight:1.4}}>{featured.title}</strong>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'.75rem',color:'var(--muted-foreground)'}}>{featured.date}</span>
            </div>
          </div>
          <div style={{border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',background:'#fff',boxShadow:'var(--shadow-sm)'}}>
            <div style={{padding:'12px 16px',borderBottom:'1px solid var(--border)',fontWeight:600}}>Mới nhất</div>
            {latest.map(n=><div key={n.title} style={{display:'grid',gap:2,padding:'12px 16px',borderBottom:'1px solid var(--border)'}}>
              <a style={{fontSize:'.875rem',fontWeight:500,lineHeight:1.45,color:'var(--foreground)',cursor:'pointer'}}>{n.title}</a>
              <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--muted-foreground)'}}>{n.date}</span>
            </div>)}
          </div>
          <div style={{borderRadius:'var(--radius-lg)',background:'var(--blue-900)',color:'#fff',padding:'22px 20px',display:'grid',gap:12}}>
            <strong style={{fontFamily:'var(--font-display)',fontSize:'1.25rem',fontWeight:600,lineHeight:1.3}}>Cần vị trí OOH cho chiến dịch tới?</strong>
            <p style={{margin:0,fontSize:'.875rem',color:'var(--blue-100)',lineHeight:1.6}}>Khám phá bản đồ ~730 vị trí và nhận báo giá trong vài phút.</p>
            <Button variant="cta" onClick={()=>{window.location.href='map.html'}}>Khám phá bản đồ</Button>
            <Button variant="outline-inverse" onClick={()=>{window.location.href='contact.html'}}>Nhận tư vấn</Button>
          </div>
        </aside>
      </div>
    </section>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSN?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);