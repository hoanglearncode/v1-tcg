const NSN=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSN||{};
/* Trang tin tức — hero typographic trên nền blue-900 (tham chiếu linear.app/now):
   tiêu đề lớn, mô tả ngắn, chip số liệu mono; hàng công cụ dưới hero gồm tab
   chuyên mục (tự rút gọn vào menu "Thêm" khi nhiều chuyên mục) và ô tìm kiếm
   theo tin (không phân biệt dấu). Bộ lọc đồng bộ lên URL (?c=&q=).
   Thân trang kiểu theverge.com: bố cục 7/3, cột trái là feed bài viết, cột phải
   là rail Tin vắn + Góc nhìn + CTA. Phẳng, bo góc nhỏ, accent brand blue. */
const HAIR='1px solid var(--border)';
const MAX_TABS=5; // số chuyên mục hiển thị inline, phần còn lại vào menu "Thêm"
const artHref=n=>'news-detail.html?a='+n.slug;
const norm=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
const matches=(n,q)=>{const k=norm(q.trim());return !k||[n.title,n.excerpt,n.author,n.tag].some(f=>norm(f).includes(k))};
function Kicker({n}){
  return <div style={{display:'flex',gap:12,alignItems:'baseline'}}>
    <span style={{fontSize:'.6875rem',fontWeight:700,letterSpacing:'.09em',textTransform:'uppercase',color:'var(--blue-600)'}}>{n.tag}</span>
    <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--slate-400)'}}>{n.date}</span>
  </div>;
}
function Byline({n}){
  return <span style={{fontSize:'.75rem',color:'var(--slate-500)'}}>
    {n.author?'Bởi '+n.author:''}{n.author&&n.read?' · ':''}{n.read?n.read+' phút đọc':''}
  </span>;
}
function Headline({n,size='1.25rem',lh=1.25}){
  return <h3 style={{margin:0}}>
    <a className="v-hl" href={artHref(n)} style={{display:'block',fontFamily:'var(--font-display)',fontSize:size,fontWeight:700,lineHeight:lh,color:'var(--foreground)',textDecoration:'none',textWrap:'balance',transition:'color .15s ease'}}>{n.title}</a>
  </h3>;
}
function RailLabel({children}){
  return <div style={{display:'grid',gap:6}}>
    <strong style={{fontSize:'.71875rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--foreground)'}}>{children}</strong>
    <div style={{height:2,background:'var(--foreground)'}}></div>
  </div>;
}
const tabStyle=active=>({border:'none',background:'none',padding:'0 0 12px',fontFamily:'var(--font-sans)',fontSize:'.78125rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:active?'#fff':'var(--blue-200)',borderBottom:active?'2px solid var(--blue-300)':'2px solid transparent',cursor:'pointer',transition:'color .15s ease',whiteSpace:'nowrap'});
function MoreMenu({tags,counts,tag,onTag}){
  const [open,setOpen]=React.useState(false);
  const ref=React.useRef(null);
  React.useEffect(()=>{
    if(!open)return;
    const close=e=>{if(ref.current&&!ref.current.contains(e.target))setOpen(false)};
    document.addEventListener('mousedown',close);
    return()=>document.removeEventListener('mousedown',close);
  },[open]);
  const active=tags.includes(tag);
  return <div ref={ref} style={{position:'relative'}}>
    <button onClick={()=>setOpen(o=>!o)} className="v-tab" aria-expanded={open} style={tabStyle(active)}>
      {active?tag:'Thêm'} <window.Icon name="chevron-down" size={13} style={{verticalAlign:-2}}/>
    </button>
    {open&&<div role="menu" style={{position:'absolute',right:0,top:'calc(100% + 8px)',zIndex:40,minWidth:240,background:'#fff',border:HAIR,borderRadius:'var(--radius-sm)',padding:6,display:'grid'}}>
      {tags.map(t=><button key={t} role="menuitem" onClick={()=>{onTag(t);setOpen(false)}} className="v-menu-item" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16,border:'none',background:tag===t?'var(--blue-50)':'none',borderRadius:'var(--radius-sm)',padding:'9px 11px',fontFamily:'var(--font-sans)',fontSize:'.84375rem',fontWeight:tag===t?700:500,color:tag===t?'var(--blue-700)':'var(--foreground)',cursor:'pointer',textAlign:'left'}}>
        {t}<span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',color:'var(--slate-400)'}}>{counts[t]}</span>
      </button>)}
    </div>}
  </div>;
}
function SearchBox({query,setQuery}){
  return <label className="v-search" style={{display:'flex',alignItems:'center',gap:8,border:'1px solid rgba(255,255,255,.22)',borderRadius:'var(--radius-sm)',background:'rgba(255,255,255,.06)',padding:'0 12px',height:38,minWidth:240,marginBottom:8}}>
    <window.Icon name="search" size={15} style={{color:'var(--blue-200)',flexShrink:0}}/>
    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm kiếm tin tức…" aria-label="Tìm kiếm tin tức"
      style={{border:'none',outline:'none',background:'transparent',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'.84375rem',width:'100%'}}/>
    {query&&<button onClick={()=>setQuery('')} aria-label="Xóa tìm kiếm" style={{border:'none',background:'none',padding:0,color:'var(--blue-200)',cursor:'pointer',display:'grid',placeItems:'center'}}><window.Icon name="x" size={14}/></button>}
  </label>;
}
function Hero({D,tag,onTag,query,setQuery}){
  const inline=D.newsTags.slice(0,MAX_TABS);
  const overflow=D.newsTags.slice(MAX_TABS);
  const counts=Object.fromEntries(D.newsTags.map(t=>[t,t==='Tất cả'?D.news.length:D.news.filter(n=>n.tag===t).length]));
  return <section style={{background:'var(--blue-900)',color:'#fff'}}>
    <div style={{...window.container,padding:'52px 32px 0'}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-300)'}}>Bản tin quảng cáo ngoài trời · Cập nhật {D.news[0].date}</span>
      <h1 style={{margin:'14px 0 0',fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,5.5vw,3.75rem)',fontWeight:700,lineHeight:1.05,letterSpacing:'-.015em'}}>Tin tức</h1>
      <p style={{margin:'14px 0 0',maxWidth:620,fontSize:'1.0625rem',lineHeight:1.6,color:'var(--blue-100)'}}>Hệ thống vị trí, sản phẩm số, hợp tác và những chuyển động mới của thị trường OOH Việt Nam.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:10,margin:'24px 0 0'}}>
        {D.newsNumbers.map(([k,v])=><span key={k} style={{display:'inline-flex',alignItems:'baseline',gap:8,border:'1px solid rgba(255,255,255,.18)',borderRadius:'var(--radius-sm)',padding:'7px 12px'}}>
          <strong style={{fontFamily:'var(--font-mono)',fontSize:'.875rem',color:'#fff'}}>{v}</strong>
          <span style={{fontSize:'.71875rem',color:'var(--blue-200)'}}>{k}</span>
        </span>)}
      </div>
      <div className="v-toolbar" style={{display:'flex',alignItems:'flex-end',gap:18,marginTop:36}}>
        <nav aria-label="Chuyên mục" className="v-tabs" style={{display:'flex',gap:26,overflowX:'auto',whiteSpace:'nowrap',flex:1,minWidth:0}}>
          {inline.map(t=><button key={t} onClick={()=>onTag(t)} className="v-tab" style={tabStyle(tag===t)}>{t}</button>)}
        </nav>
        {overflow.length>0&&<MoreMenu tags={overflow} counts={counts} tag={tag} onTag={onTag}/>}
        <SearchBox query={query} setQuery={setQuery}/>
      </div>
    </div>
  </section>;
}
function LeadStory({n}){
  return <article style={{display:'grid',gap:14}}>
    <a href={artHref(n)}><img src={n.img} alt={n.title} style={{width:'100%',aspectRatio:'16/9',objectFit:'cover',display:'block',borderRadius:'var(--radius-sm)'}}/></a>
    <div style={{display:'grid',gap:10}}>
      <Kicker n={n}/>
      <Headline n={n} size="clamp(1.75rem,2.8vw,2.375rem)" lh={1.12}/>
      <p style={{margin:0,fontSize:'1.0625rem',lineHeight:1.6,color:'var(--slate-600)'}}>{n.excerpt}</p>
      <Byline n={n}/>
    </div>
  </article>;
}
function FeedStory({n,first}){
  return <article className="v-row" style={{padding:'24px 0',borderTop:first?'none':HAIR}}>
    <div style={{display:'grid',gap:9,alignContent:'start'}}>
      <Kicker n={n}/>
      <Headline n={n} size="1.375rem" lh={1.22}/>
      <p style={{margin:0,fontSize:'.9375rem',lineHeight:1.6,color:'var(--slate-600)'}}>{n.excerpt}</p>
      <Byline n={n}/>
    </div>
    <a href={artHref(n)}><img src={n.img} alt={n.title} style={{width:'100%',aspectRatio:'3/2',objectFit:'cover',display:'block',borderRadius:'var(--radius-sm)'}}/></a>
  </article>;
}
function MainCol({D,tag,query,onClear}){
  const isAll=tag==='Tất cả';
  const searching=!!query.trim();
  const base=isAll?D.news:D.news.filter(n=>n.tag===tag);
  const all=base.filter(n=>matches(n,query));
  const lead=isAll&&!searching?all[0]:null;
  const rest=lead?all.slice(1):all;
  const [limit,setLimit]=React.useState(8);
  React.useEffect(()=>{setLimit(8)},[tag,query]);
  const items=rest.slice(0,limit);
  const label=searching
    ?<>Kết quả cho “{query.trim()}”{!isAll&&<> trong mục {tag}</>}</>
    :(isAll?'Mới nhất':tag);
  return <main style={{display:'grid',alignContent:'start'}}>
    {lead&&<LeadStory n={lead}/>}
    <div style={{display:'grid',gap:6,margin:lead?'36px 0 0':'0'}}>
      <div style={{display:'flex',alignItems:'baseline',justifyContent:'space-between',gap:16}}>
        <strong style={{fontSize:'.71875rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase'}}>{label}</strong>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',color:'var(--slate-400)',whiteSpace:'nowrap'}}>{all.length} bài viết</span>
      </div>
      <div style={{height:2,background:'var(--foreground)'}}></div>
    </div>
    {all.length===0&&<div style={{display:'grid',justifyItems:'start',gap:14,padding:'26px 0'}}>
      <p style={{margin:0,color:'var(--muted-foreground)'}}>Không tìm thấy bài viết phù hợp{searching&&<> với từ khóa “{query.trim()}”</>}.</p>
      <Button variant="outline" onClick={onClear}>Xóa bộ lọc</Button>
    </div>}
    {items.map((n,i)=><FeedStory key={n.slug} n={n} first={i===0}/>)}
    {limit<rest.length&&<div style={{display:'flex',justifyContent:'center',padding:'22px 0 0',borderTop:HAIR}}>
      <Button variant="outline" onClick={()=>setLimit(l=>l+8)}>Xem thêm bài viết</Button>
    </div>}
  </main>;
}
function Sidebar({D}){
  return <aside className="news-side" style={{display:'grid',gap:34,alignContent:'start'}}>
    <section style={{display:'grid',gap:0}}>
      <RailLabel>Tin vắn</RailLabel>
      {D.newsBriefs.map(([d,t],i)=><div key={t} style={{display:'grid',gap:5,padding:'13px 0',borderBottom:i<D.newsBriefs.length-1?HAIR:'none'}}>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.6875rem',color:'var(--blue-600)'}}>{d}</span>
        <span style={{fontSize:'.859375rem',lineHeight:1.5,fontWeight:500,color:'var(--foreground)'}}>{t}</span>
      </div>)}
    </section>
    <section style={{display:'grid',gap:12}}>
      <RailLabel>Góc nhìn</RailLabel>
      {D.newsOpinions.map(o=><figure key={o.author} style={{margin:0,background:'var(--slate-50)',border:HAIR,borderRadius:'var(--radius-sm)',padding:'16px 16px 14px',display:'grid',gap:8}}>
        <blockquote style={{margin:0,fontFamily:'var(--font-display)',fontStyle:'italic',fontSize:'.9375rem',fontWeight:600,lineHeight:1.45,color:'var(--foreground)'}}>“{o.title}”</blockquote>
        <figcaption style={{fontSize:'.6875rem',fontWeight:600,letterSpacing:'.06em',textTransform:'uppercase',color:'var(--slate-500)'}}>{o.author} · {o.role}</figcaption>
      </figure>)}
    </section>
    <div style={{background:'var(--blue-900)',color:'#fff',borderRadius:'var(--radius-sm)',padding:'22px 20px',display:'grid',gap:10}}>
      <strong style={{fontFamily:'var(--font-display)',fontSize:'1.1875rem',fontWeight:700,lineHeight:1.3}}>Cần vị trí OOH cho chiến dịch tới?</strong>
      <p style={{margin:0,fontSize:'.84375rem',color:'var(--blue-100)',lineHeight:1.55}}>Khám phá bản đồ ~730 vị trí, xem điểm AI theo ngành hàng và nhận báo giá trong vài phút.</p>
      <Button variant="cta" onClick={()=>{window.location.href='map.html'}}>Khám phá bản đồ</Button>
      <button onClick={()=>window.goContact()} style={{height:42,border:'1px solid rgba(255,255,255,.4)',borderRadius:'var(--radius-sm)',background:'transparent',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'.875rem',fontWeight:600,cursor:'pointer'}}>Nhận tư vấn</button>
    </div>
  </aside>;
}
function App(){
  const D=window.TCG_DATA;
  const params=new URLSearchParams(window.location.search);
  const initTag=params.get('c');
  const [tag,setTag]=React.useState(initTag&&D.newsTags.includes(initTag)?initTag:'Tất cả');
  const [query,setQuery]=React.useState(params.get('q')||'');
  React.useEffect(()=>{ // giữ bộ lọc trên URL để chia sẻ / quay lại không mất trạng thái
    const u=new URL(window.location);
    tag==='Tất cả'?u.searchParams.delete('c'):u.searchParams.set('c',tag);
    query.trim()?u.searchParams.set('q',query.trim()):u.searchParams.delete('q');
    window.history.replaceState(null,'',u);
  },[tag,query]);
  const onClear=()=>{setTag('Tất cả');setQuery('')};
  return <div style={{fontFamily:'var(--font-sans)',background:'#fff'}}>
    <style>{`
      .v-hl:hover{color:var(--blue-700)!important}
      .v-tab:hover{color:#fff!important}
      .v-menu-item:hover{background:var(--slate-50)!important}
      .v-tabs{scrollbar-width:none}.v-tabs::-webkit-scrollbar{display:none}
      .v-search:focus-within{border-color:var(--blue-300)!important}
      .v-search input::placeholder{color:var(--blue-200)}
      .news-grid{display:grid;grid-template-columns:minmax(0,7fr) minmax(0,3fr);gap:0 44px;align-items:start}
      .news-side{border-left:1px solid var(--border);padding-left:44px}
      .v-row{display:grid;grid-template-columns:1fr 210px;gap:24px}
      @media(max-width:960px){
        .news-grid{grid-template-columns:1fr}
        .news-side{border-left:none;padding-left:0;margin-top:44px}
      }
      @media(max-width:720px){
        .v-toolbar{flex-wrap:wrap;align-items:stretch}
        .v-toolbar .v-search{order:-1;width:100%;min-width:0}
      }
      @media(max-width:640px){.v-row{grid-template-columns:1fr;gap:12px}.v-row>a{order:-1}}
    `}</style>
    <window.Navbar/>
    <Hero D={D} tag={tag} onTag={setTag} query={query} setQuery={setQuery}/>
    <div style={{...window.container,padding:'40px 32px 72px'}}>
      <div className="news-grid">
        <MainCol D={D} tag={tag} query={query} onClear={onClear}/>
        <Sidebar D={D}/>
      </div>
    </div>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSN?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);
