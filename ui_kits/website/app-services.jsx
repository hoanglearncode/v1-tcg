const NSS=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSS||{};
/* Trang dịch vụ — render 100% từ TCG_DATA.servicesCatalog (collection dạng CMS,
   xem schema trong data.js): thêm/sửa dịch vụ trong dữ liệu là trang tự cập nhật.
   Hero đồng bộ với trang tin tức (blue-900, tiêu đề lớn, chip số liệu) + toolbar
   gồm tab nhóm dịch vụ (tự rút gọn vào menu "Thêm" khi nhiều nhóm) và ô tìm kiếm
   không phân biệt dấu. Danh sách dạng lưới card giàu thông tin: giá từ, quy mô,
   độ phủ, thời gian triển khai, ngành hàng phù hợp (mở rộng trong "Chi tiết").
   Bộ lọc + sắp xếp đồng bộ lên URL (?g=&q=&sort=). */
const HAIR='1px solid var(--border)';
const MAX_TABS=5;
const norm=s=>(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');
const matches=(s,q)=>{const k=norm(q.trim());return !k||[s.name,s.desc,s.group,s.count,s.feats.join(' '),s.cities.join(' '),(s.best||[]).join(' ')].some(f=>norm(f).includes(k))};
const SORTS=[['noi-bat','Nổi bật'],['gia-asc','Giá từ thấp đến cao'],['gia-desc','Giá từ cao đến thấp']];
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
    {open&&<div role="menu" style={{position:'absolute',right:0,top:'calc(100% + 8px)',zIndex:40,minWidth:250,background:'#fff',border:HAIR,borderRadius:'var(--radius-sm)',padding:6,display:'grid'}}>
      {tags.map(t=><button key={t} role="menuitem" onClick={()=>{onTag(t);setOpen(false)}} className="v-menu-item" style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',gap:16,border:'none',background:t===tag?'var(--blue-50)':'none',borderRadius:'var(--radius-sm)',padding:'9px 11px',fontFamily:'var(--font-sans)',fontSize:'.84375rem',fontWeight:t===tag?700:500,color:t===tag?'var(--blue-700)':'var(--foreground)',cursor:'pointer',textAlign:'left'}}>
        {t}<span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',color:'var(--slate-400)'}}>{counts[t]}</span>
      </button>)}
    </div>}
  </div>;
}
function SearchBox({query,setQuery}){
  return <label className="v-search" style={{display:'flex',alignItems:'center',gap:8,border:'1px solid rgba(255,255,255,.22)',borderRadius:'var(--radius-sm)',background:'rgba(255,255,255,.06)',padding:'0 12px',height:38,minWidth:250,marginBottom:8}}>
    <window.Icon name="search" size={15} style={{color:'var(--blue-200)',flexShrink:0}}/>
    <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Tìm dịch vụ, khu vực, ngành hàng…" aria-label="Tìm kiếm dịch vụ"
      style={{border:'none',outline:'none',background:'transparent',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'.84375rem',width:'100%'}}/>
    {query&&<button onClick={()=>setQuery('')} aria-label="Xóa tìm kiếm" style={{border:'none',background:'none',padding:0,color:'var(--blue-200)',cursor:'pointer',display:'grid',placeItems:'center'}}><window.Icon name="x" size={14}/></button>}
  </label>;
}
function Hero({D,tag,onTag,query,setQuery}){
  const cat=D.servicesCatalog;
  const tabs=['Tất cả',...D.serviceGroups];
  const inline=tabs.slice(0,MAX_TABS);
  const overflow=tabs.slice(MAX_TABS);
  const counts=Object.fromEntries(tabs.map(t=>[t,t==='Tất cả'?cat.length:cat.filter(s=>s.group===t).length]));
  const chips=[[cat.length,'loại hình dịch vụ'],['~730','vị trí khai thác'],['30+','tỉnh thành'],['400+','nhãn hàng đồng hành']];
  return <section style={{background:'var(--blue-900)',color:'#fff'}}>
    <div style={{...window.container,padding:'52px 32px 0'}}>
      <span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-300)'}}>Giải pháp quảng cáo ngoài trời trọn gói</span>
      <h1 style={{margin:'14px 0 0',fontFamily:'var(--font-display)',fontSize:'clamp(2.5rem,5.5vw,3.75rem)',fontWeight:700,lineHeight:1.05,letterSpacing:'-.015em'}}>Dịch vụ</h1>
      <p style={{margin:'14px 0 0',maxWidth:640,fontSize:'1.0625rem',lineHeight:1.6,color:'var(--blue-100)'}}>Từ biển bảng truyền thống đến màn hình số và dịch vụ hỗ trợ trọn gói. Chọn nhóm dịch vụ hoặc tìm theo nhu cầu, khu vực, ngành hàng của bạn.</p>
      <div style={{display:'flex',flexWrap:'wrap',gap:10,margin:'24px 0 0'}}>
        {chips.map(([v,k])=><span key={k} style={{display:'inline-flex',alignItems:'baseline',gap:8,border:'1px solid rgba(255,255,255,.18)',borderRadius:'var(--radius-sm)',padding:'7px 12px'}}>
          <strong style={{fontFamily:'var(--font-mono)',fontSize:'.875rem',color:'#fff'}}>{v}</strong>
          <span style={{fontSize:'.71875rem',color:'var(--blue-200)'}}>{k}</span>
        </span>)}
      </div>
      <div className="v-toolbar" style={{display:'flex',alignItems:'flex-end',gap:18,marginTop:36}}>
        <nav aria-label="Nhóm dịch vụ" className="v-tabs" style={{display:'flex',gap:26,overflowX:'auto',whiteSpace:'nowrap',flex:1,minWidth:0}}>
          {inline.map(t=><button key={t} onClick={()=>onTag(t)} className="v-tab" style={tabStyle(tag===t)}>{t}</button>)}
        </nav>
        {overflow.length>0&&<MoreMenu tags={overflow} counts={counts} tag={tag} onTag={onTag}/>}
        <SearchBox query={query} setQuery={setQuery}/>
      </div>
    </div>
  </section>;
}
function Price({s}){
  return s.from
    ?<strong style={{fontFamily:'var(--font-mono)',fontSize:'1.0625rem',color:'var(--blue-700)'}}>từ {s.from}.000.000đ<span style={{fontSize:'.75rem',color:'var(--slate-500)',fontWeight:400}}>/tháng</span></strong>
    :<strong style={{fontSize:'.875rem',color:'var(--blue-700)'}}>Báo giá theo yêu cầu</strong>;
}
function Chip({children}){
  return <span style={{fontSize:'.71875rem',fontWeight:600,color:'var(--slate-600)',background:'var(--slate-50)',border:HAIR,borderRadius:'var(--radius-full)',padding:'4px 10px',whiteSpace:'nowrap'}}>{children}</span>;
}
function ServiceCard({s}){
  const [open,setOpen]=React.useState(false);
  const cities=s.cities.slice(0,3);
  const more=s.cities.length-cities.length;
  return <article className="svc-card" style={{display:'grid',gridTemplateRows:'auto 1fr',border:HAIR,borderRadius:'var(--radius-sm)',overflow:'hidden',background:'#fff',transition:'border-color .15s ease'}}>
    <div style={{position:'relative'}}>
      <img src={s.img} alt={s.name} style={{width:'100%',aspectRatio:'16/10',objectFit:'cover',display:'block'}}/>
      <span style={{position:'absolute',top:12,left:12,fontSize:'.65625rem',fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'var(--blue-700)',background:'#fff',borderRadius:'var(--radius-full)',padding:'5px 11px'}}>{s.group}</span>
    </div>
    <div style={{display:'grid',gap:12,alignContent:'start',padding:'18px 20px 20px'}}>
      <div style={{display:'flex',gap:12,alignItems:'center'}}>
        <span style={{width:40,height:40,borderRadius:'var(--radius-sm)',background:'var(--blue-50)',display:'grid',placeItems:'center',color:'var(--blue-700)',flexShrink:0}}><window.Icon name={s.icon} size={20}/></span>
        <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'1.1875rem',fontWeight:700,lineHeight:1.25}}>{s.name}</h3>
      </div>
      <p className="clamp2" style={{margin:0,fontSize:'.875rem',lineHeight:1.6,color:'var(--slate-600)'}}>{s.desc}</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,padding:'10px 0',borderTop:HAIR,borderBottom:HAIR}}>
        <div style={{display:'grid',gap:2}}><span style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>Giá tham khảo</span><Price s={s}/></div>
        <div style={{display:'grid',gap:2}}><span style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>Quy mô</span><strong style={{fontFamily:'var(--font-mono)',fontSize:'.84375rem'}}>{s.count}</strong></div>
      </div>
      <div style={{display:'flex',flexWrap:'wrap',gap:6}}>
        {cities.map(c=><Chip key={c}>{c}</Chip>)}
        {more>0&&<Chip>+{more} khu vực</Chip>}
      </div>
      {open&&<div style={{display:'grid',gap:12,padding:'12px 0 2px',borderTop:HAIR}}>
        <ul style={{margin:0,padding:0,listStyle:'none',display:'grid',gap:7}}>
          {s.feats.map(f=><li key={f} style={{display:'flex',gap:9,alignItems:'baseline',fontSize:'.84375rem',lineHeight:1.5}}><span style={{color:'var(--success)',fontWeight:700}}>✓</span>{f}</li>)}
        </ul>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14}}>
          <div style={{display:'grid',gap:2}}><span style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>Thời gian triển khai</span><strong style={{fontFamily:'var(--font-mono)',fontSize:'.84375rem'}}>{s.lead}</strong></div>
          <div style={{display:'grid',gap:4}}><span style={{fontSize:'.6875rem',color:'var(--muted-foreground)'}}>Phù hợp ngành hàng</span><span style={{fontSize:'.78125rem',fontWeight:600,color:'var(--slate-700)'}}>{(s.best||[]).join(' · ')}</span></div>
        </div>
      </div>}
      <button onClick={()=>setOpen(o=>!o)} aria-expanded={open} style={{justifySelf:'start',border:'none',background:'none',padding:0,fontFamily:'var(--font-sans)',fontSize:'.78125rem',fontWeight:700,color:'var(--blue-700)',cursor:'pointer'}}>
        {open?'Thu gọn ▴':'Thông tin chi tiết ▾'}
      </button>
      <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:2}}>
        <Button variant="primary" size="sm" onClick={()=>{window.location.href='map.html'}}>Xem vị trí</Button>
        <Button variant="outline" size="sm" onClick={()=>window.goContact()}>Nhận báo giá</Button>
      </div>
    </div>
  </article>;
}
function App(){
  const D=window.TCG_DATA;
  const params=new URLSearchParams(window.location.search);
  const tabs=['Tất cả',...D.serviceGroups];
  const initTag=params.get('g');
  const [tag,setTag]=React.useState(initTag&&tabs.includes(initTag)?initTag:'Tất cả');
  const [query,setQuery]=React.useState(params.get('q')||'');
  const initSort=params.get('sort');
  const [sort,setSort]=React.useState(SORTS.some(([v])=>v===initSort)?initSort:'noi-bat');
  React.useEffect(()=>{ // giữ bộ lọc trên URL để chia sẻ / quay lại không mất trạng thái
    const u=new URL(window.location);
    tag==='Tất cả'?u.searchParams.delete('g'):u.searchParams.set('g',tag);
    query.trim()?u.searchParams.set('q',query.trim()):u.searchParams.delete('q');
    sort==='noi-bat'?u.searchParams.delete('sort'):u.searchParams.set('sort',sort);
    window.history.replaceState(null,'',u);
  },[tag,query,sort]);
  const searching=!!query.trim();
  let items=D.servicesCatalog.filter(s=>(tag==='Tất cả'||s.group===tag)&&matches(s,query));
  if(sort==='gia-asc')items=[...items].sort((a,b)=>(a.from??1e9)-(b.from??1e9));
  else if(sort==='gia-desc')items=[...items].sort((a,b)=>(b.from??-1)-(a.from??-1));
  else items=[...items].sort((a,b)=>(b.featured?1:0)-(a.featured?1:0));
  const onClear=()=>{setTag('Tất cả');setQuery('')};
  const label=searching?<>Kết quả cho “{query.trim()}”{tag!=='Tất cả'&&<> trong nhóm {tag}</>}</>:(tag==='Tất cả'?'Tất cả dịch vụ':tag);
  return <div style={{fontFamily:'var(--font-sans)',background:'#fff'}}>
    <style>{`
      .v-tab:hover{color:#fff!important}
      .v-menu-item:hover{background:var(--slate-50)!important}
      .v-tabs{scrollbar-width:none}.v-tabs::-webkit-scrollbar{display:none}
      .v-search:focus-within{border-color:var(--blue-300)!important}
      .v-search input::placeholder{color:var(--blue-200)}
      .clamp2{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}
      .svc-card:hover{border-color:var(--blue-400)!important}
      .svc-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;align-items:start}
      .steps-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:12px}
      @media(max-width:1080px){.svc-grid{grid-template-columns:repeat(2,1fr)}.steps-grid{grid-template-columns:repeat(3,1fr)}}
      @media(max-width:720px){
        .v-toolbar{flex-wrap:wrap;align-items:stretch}
        .v-toolbar .v-search{order:-1;width:100%;min-width:0}
        .svc-grid{grid-template-columns:1fr}
        .steps-grid{grid-template-columns:repeat(2,1fr)}
      }
    `}</style>
    <window.Navbar/>
    <Hero D={D} tag={tag} onTag={setTag} query={query} setQuery={setQuery}/>
    <section style={{...window.container,padding:'36px 32px 72px'}}>
      <div style={{display:'flex',alignItems:'center',gap:16,flexWrap:'wrap',marginBottom:8}}>
        <strong style={{fontSize:'.71875rem',fontWeight:700,letterSpacing:'.12em',textTransform:'uppercase'}}>{label}</strong>
        <span style={{fontFamily:'var(--font-mono)',fontSize:'.71875rem',color:'var(--slate-400)'}}>{items.length} dịch vụ</span>
        <label style={{marginLeft:'auto',display:'flex',alignItems:'center',gap:8,fontSize:'.78125rem',color:'var(--slate-500)'}}>
          Sắp xếp
          <select value={sort} onChange={e=>setSort(e.target.value)} style={{height:34,border:HAIR,borderRadius:'var(--radius-sm)',background:'#fff',padding:'0 8px',fontFamily:'var(--font-sans)',fontSize:'.8125rem',fontWeight:600,color:'var(--foreground)',cursor:'pointer'}}>
            {SORTS.map(([v,l])=><option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>
      <div style={{height:2,background:'var(--foreground)',marginBottom:26}}></div>
      {items.length===0
        ?<div style={{display:'grid',justifyItems:'start',gap:14,padding:'10px 0 26px'}}>
          <p style={{margin:0,color:'var(--muted-foreground)'}}>Không tìm thấy dịch vụ phù hợp{searching&&<> với từ khóa “{query.trim()}”</>}. Bạn có thể liên hệ để được tư vấn giải pháp riêng.</p>
          <div style={{display:'flex',gap:10}}>
            <Button variant="outline" onClick={onClear}>Xóa bộ lọc</Button>
            <Button variant="primary" onClick={()=>window.goContact()}>Nhận tư vấn</Button>
          </div>
        </div>
        :<div className="svc-grid">{items.map(s=><ServiceCard key={s.slug} s={s}/>)}</div>}
    </section>
    <section style={{background:'var(--muted)',padding:'56px 0'}}><div style={{...window.container,display:'grid',gap:24}}>
      <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h2)',fontWeight:600,color:'var(--primary)',textAlign:'center'}}>Quy trình triển khai</h2>
      <div className="steps-grid">
        {D.steps.map(([ic,label2],i)=><div key={i} style={{display:'grid',gap:10,justifyItems:'center',textAlign:'center',background:'#fff',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'18px 12px'}}>
          <span style={{width:44,height:44,borderRadius:'50%',background:'var(--primary)',color:'#fff',display:'grid',placeItems:'center'}}><window.Icon name={ic} size={20}/></span>
          <span style={{fontSize:'.875rem',fontWeight:600,lineHeight:1.4}}>{label2}</span>
        </div>)}
      </div>
    </div></section>
    <window.CTABand/>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSS&&NSS.Button?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);
