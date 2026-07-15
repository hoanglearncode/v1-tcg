const NS=window.ToNCUADVDesignSystem_ce468e||{};
const {Button,TrustStats,FilterChip,FilterBar,LocationCard,CaseStudyCard,Select,Field,Input,Textarea,Checkbox,MapMarker,MapPopup,StatusPill,AIScoreBadge}=NS;
const D=window.TCG_DATA;
function Icon({name,size=20,color='currentColor',stroke=2}){
  const ref=React.useRef();
  React.useEffect(()=>{if(window.lucide&&ref.current){ref.current.innerHTML='';const el=document.createElement('i');el.setAttribute('data-lucide',name);ref.current.appendChild(el);window.lucide.createIcons({attrs:{width:size,height:size,'stroke-width':stroke,stroke:color}, nameAttr:'data-lucide', icons:window.lucide.icons});}},[name]);
  return <span ref={ref} style={{display:'inline-flex',width:size,height:size,color}}/>;
}
const container={maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 32px'};
function Navbar({onQuote}){
  return <header style={{position:'sticky',top:0,zIndex:40,background:'#fff',borderBottom:'1px solid var(--border)',boxShadow:'var(--shadow-sm)'}}>
    <div style={{...container,display:'flex',alignItems:'center',gap:28,height:72}}>
      <a href="index.html" style={{display:'flex',alignItems:'center',gap:10,textDecoration:'none'}}>
        <img src="../../assets/logo-full.png" alt="Toàn Cầu ADV" style={{height:40}}/>
        <span style={{display:'grid',lineHeight:1.15}}>
          <strong style={{color:'var(--primary)',fontSize:'1.125rem',fontFamily:'var(--font-display)',letterSpacing:'.01em'}}></strong>
          <span style={{fontSize:'.6875rem',color:'var(--muted-foreground)',letterSpacing:'.05em'}}></span>
        </span></a>
      <nav style={{display:'flex',gap:22,fontSize:'.9375rem',fontWeight:500,flex:1}}>
        {[['index.html','Trang chủ'],['about.html','Về chúng tôi'],['map.html','Bản đồ'],['services.html','Dịch vụ'],['news.html','Tin tức'],['contact.html','Liên hệ']].map(([h,l])=>
          <a key={h} href={h} style={{color:window.location.pathname.endsWith('/'+h)||(h==='index.html'&&/\/(index\.html)?$/.test(window.location.pathname))?'var(--primary)':'var(--slate-600)',fontWeight:window.location.pathname.endsWith('/'+h)?600:500,textDecoration:'none'}}>{l}</a>)}
      </nav>
      <Button variant="cta" size="sm" onClick={()=>{window.location.href='contact.html'}}>Yêu cầu báo giá</Button>
    </div></header>;
}
const HERO_SLIDES=[
  {img:'https://picsum.photos/seed/tcg-metro-12/1600/900',eyebrow:'Từ 2003 đến nay',title:'Hơn 20 năm cùng ngành quảng cáo Việt Nam',body:'Từ tổ chức sự kiện, in ấn đến biển quảng cáo tấm lớn, Toàn Cầu ADV trưởng thành cùng ngành OOH Việt Nam qua từng giai đoạn.'},
  {img:'https://picsum.photos/seed/tcg-airport-noibai/1600/900',eyebrow:'Mạng lưới sân bay',title:'Tiếp cận nhóm khách chi trả cao',body:'Hệ thống mặt biển tại Nội Bài, Tân Sơn Nhất và các sân bay lớn, nơi tập trung doanh nhân, khách du lịch và khách quốc tế.'},
  {img:'https://picsum.photos/seed/tcg-metro-2/1600/900',eyebrow:'Toàn quốc',title:'Billboard, LED và nhà chờ phủ khắp các tỉnh thành',body:'~730 vị trí quảng cáo ngoài trời từ cao tốc, cửa ngõ đô thị đến nhà chờ xe bus trên khắp Việt Nam.'},
  {img:'https://picsum.photos/seed/tcg-ooh-11/1600/900',eyebrow:'Chuyển đổi số',title:'Bản đồ vị trí và điểm AI gợi ý theo ngành hàng',body:'Tự khám phá vị trí phù hợp, xem điểm AI giải thích rõ lý do, và nhận báo giá PDF trong vài phút.'}
];
function Hero(){
  const [i,setI]=React.useState(0);
  React.useEffect(()=>{
    const t=setInterval(()=>setI(v=>(v+1)%HERO_SLIDES.length),6000);
    return ()=>clearInterval(t);
  },[]);
  const s=HERO_SLIDES[i];
  return <section id="top" style={{position:'relative',color:'#fff',overflow:'hidden',minHeight:560,background:'var(--blue-900)'}}>
    <style>{'.hero-cta{transition:transform .2s var(--ease-standard),box-shadow .2s var(--ease-standard)}.hero-cta:hover{transform:translateY(-2px)}.hero-cta:active{transform:translateY(0) scale(.98)}.hero-dot{transition:all .3s var(--ease-standard)}'}</style>
    <div style={{position:'absolute',right:0,top:0,width:'66%',height:'100%'}}>
      {HERO_SLIDES.map((sl,idx)=><img key={idx} src={sl.img} alt={sl.title} style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:idx===i?1:0,transition:'opacity 1.1s ease'}}/>)}
    </div>
    <svg width="380" height="380" viewBox="0 0 380 380" style={{position:'absolute',top:-50,left:'30%',pointerEvents:'none',zIndex:1}}>
      <path d="M40 380 C 40 200, 200 40, 380 40" fill="none" stroke="var(--blue-500)" strokeWidth="24" strokeLinecap="round"/>
      <path d="M10 380 C 10 170, 170 10, 380 10" fill="none" stroke="var(--blue-300)" strokeWidth="6" strokeLinecap="round" opacity="0.85"/>
    </svg>
    <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg,var(--blue-900) 0%,var(--blue-900) 38%,rgba(13,47,94,.75) 52%,rgba(13,47,94,0) 70%)'}}></div>
    <div style={{position:'relative',zIndex:2,...container,padding:'96px 32px'}}>
      <div style={{display:'grid',gap:20,justifyItems:'start',maxWidth:560}}>
        <span style={{fontSize:'.8125rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-200)'}}>{s.eyebrow}</span>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'clamp(2.25rem,3.4vw,3.25rem)',fontWeight:600,lineHeight:1.16,textWrap:'balance'}}>{s.title}</h1>
        <p style={{margin:0,fontSize:'var(--text-body-lg)',lineHeight:1.6,color:'var(--slate-200)',maxWidth:520}}>{s.body}</p>
        <div style={{display:'flex',gap:12,flexWrap:'wrap',marginTop:6}}>
          <button className="hero-cta" onClick={()=>{window.location.href='map.html'}} style={{display:'inline-flex',alignItems:'center',gap:8,height:52,padding:'0 24px',border:'none',borderRadius:'var(--radius-md)',background:'var(--cta)',color:'var(--cta-foreground)',fontWeight:600,fontSize:'1.0625rem',fontFamily:'var(--font-sans)',cursor:'pointer',boxShadow:'var(--shadow-md)'}}><window.Icon name="map" size={19}/> Khám phá bản đồ vị trí</button>
          <button className="hero-cta" onClick={()=>{window.location.href='contact.html'}} style={{display:'inline-flex',alignItems:'center',gap:8,height:52,padding:'0 24px',border:'1.5px solid rgba(255,255,255,.5)',borderRadius:'var(--radius-md)',background:'transparent',color:'#fff',fontWeight:600,fontSize:'1.0625rem',fontFamily:'var(--font-sans)',cursor:'pointer'}}><window.Icon name="phone-call" size={19}/> Nhận tư vấn</button>
        </div>
        <div style={{display:'flex',gap:8,marginTop:14}}>
          {HERO_SLIDES.map((_,idx)=><button key={idx} aria-label={'Slide '+(idx+1)} onClick={()=>setI(idx)} className="hero-dot" style={{width:idx===i?26:8,height:8,borderRadius:4,border:'none',cursor:'pointer',background:idx===i?'#fff':'rgba(255,255,255,.4)'}}></button>)}
        </div>
      </div>
    </div></section>;
}
function go(h){const el=document.querySelector(h);if(el){const y=el.getBoundingClientRect().top+window.scrollY-80;window.scrollTo({top:y,behavior:'smooth'})}}
function Stats(){
  const names=['Đối tác 1','Đối tác 2','Đối tác 3','Đối tác 4','Đối tác 5','Đối tác 6','Đối tác 7','Đối tác 8'];
  const Row=({dur,delay})=><div style={{overflow:'hidden',width:'100%'}}>
    <div style={{display:'flex',gap:16,width:'max-content',animation:`tcgmarquee ${dur}s linear ${delay}s infinite`}}>
      {[...names,...names].map((n,i)=><div key={i} style={{width:140,height:52,flex:'none',borderRadius:'var(--radius-md)',background:'#fff',border:'1px dashed var(--slate-300)',display:'grid',placeItems:'center',fontSize:'.6875rem',color:'var(--slate-400)',letterSpacing:'.05em'}}>{n.toUpperCase()}</div>)}
    </div></div>;
  return <section style={{background:'var(--muted)',padding:'56px 0'}}>
    <style>{'@keyframes tcgmarquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion: reduce){[style*="tcgmarquee"]{animation:none!important}}'}</style>
    <div style={{...container,display:'grid',gap:14}}>
      <Row dur={30} delay={0}/>
      <Row dur={18} delay={0}/>
    </div></section>;
}
function SectionHead({kicker,title,sub}){
  return <div style={{display:'grid',gap:10,justifyItems:'center',textAlign:'center',marginBottom:40}}>
    {kicker&&<span style={{fontSize:'.75rem',fontWeight:600,letterSpacing:'.12em',textTransform:'uppercase',color:'var(--brick-500)'}}>{kicker}</span>}
    <h2 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h2)',fontWeight:600,lineHeight:1.18,color:'var(--primary)',textWrap:'balance'}}>{title}</h2>
    {sub&&<p style={{margin:0,color:'var(--muted-foreground)',fontSize:'var(--text-body-lg)',maxWidth:640}}>{sub}</p>}
  </div>;
}
const FEATURED_SERVICES=[
  {slug:'san-bay',icon:'plane',label:'Sân bay',title:'Tiếp cận nhóm khách chi trả cao',desc:'Hệ thống mặt biển tại Nội Bài, Tân Sơn Nhất và các sân bay lớn: băng chuyền, sảnh đến/đi, ống lồng. Tiếp cận doanh nhân, khách du lịch và khách quốc tế trong thời gian chờ chuyến kéo dài.',img:'https://picsum.photos/seed/tcg-airport-noibai/800/520',cta:'Xem dịch vụ sân bay'},
  {slug:'billboard',icon:'rectangle-horizontal',label:'Billboard',title:'Hiện diện tại cửa ngõ và trục đường lớn',desc:'Biển quảng cáo tấm lớn tại nút giao, cửa ngõ đô thị và cao tốc trên 30+ tỉnh thành. Khảo sát, thiết kế, in ấn và thi công trọn gói, hỗ trợ giấy phép quảng cáo.',img:'https://picsum.photos/seed/tcg-metro-2/800/520',cta:'Xem dịch vụ billboard'},
  {slug:'led',icon:'monitor',label:'Màn hình LED',title:'Nội dung linh hoạt, đổi theo khung giờ',desc:'LED ngoài trời và LCD/frame tại thang máy, trung tâm thương mại. Đặt theo spot 15 đến 30 giây, đổi nội dung nhanh, báo cáo tần suất phát thực tế.',img:'https://picsum.photos/seed/tcg-metro-6/800/520',cta:'Xem dịch vụ LED'},
  {slug:'pano',icon:'lamp',label:'Pano · Hộp đèn',title:'Phủ dày theo tuyến, chi phí hợp lý',desc:'Quảng cáo tại nhà chờ xe bus, giải phân cách và tuyến phố. Chi phí vào cửa thấp, phù hợp chiến dịch khu vực và mở điểm bán, có combo nhiều mặt giảm chi phí.',img:'https://picsum.photos/seed/tcg-ooh-11/800/520',cta:'Xem dịch vụ pano'},
  {slug:null,icon:'briefcase',label:'Dự án tiêu biểu',title:'Đồng hành cùng 400+ nhãn hàng',desc:'Từ FMCG, ngân hàng đến hàng không và công nghệ. Xem các chiến dịch OOH tiêu biểu Toàn Cầu ADV đã triển khai trên toàn quốc.',img:'https://picsum.photos/seed/tcg-case-fnb/800/520',cta:'Xem dự án tiêu biểu',href:'news.html'}
];
function Spotlight(){
  const [i,setI]=React.useState(0);
  const s=FEATURED_SERVICES[i];
  return <section id="spotlight" style={{padding:'88px 0'}}>
    <div style={container}>
      <SectionHead kicker="Dịch vụ nổi bật" title="Giải pháp OOH của Toàn Cầu" sub="Khám phá các nhóm dịch vụ chính, từ sân bay đến billboard, LED và nhà chờ."/>
      <div style={{display:'grid',gridTemplateColumns:'220px 1.15fr 1fr',gap:28,alignItems:'stretch'}}>
        <div style={{display:'grid',gap:10,alignContent:'start'}}>
          {FEATURED_SERVICES.map((f,idx)=><button key={f.label} onClick={()=>setI(idx)} style={{display:'flex',alignItems:'center',gap:10,height:56,padding:'0 18px',borderRadius:'var(--radius-md)',border:idx===i?'none':'1px solid var(--border)',background:idx===i?'linear-gradient(115deg,var(--blue-900),var(--blue-500))':'#fff',color:idx===i?'#fff':'var(--foreground)',fontWeight:600,fontSize:'.9375rem',fontFamily:'var(--font-sans)',cursor:'pointer',textAlign:'left',boxShadow:idx===i?'var(--shadow-md)':'none',transition:'all var(--dur-fast) var(--ease-standard)'}}>
            <window.Icon name={f.icon} size={18}/>{f.label}
          </button>)}
        </div>
        <div style={{borderRadius:'var(--radius-xl)',overflow:'hidden',border:'1px solid var(--border)',boxShadow:'var(--shadow-md)',minHeight:320}}>
          <img src={s.img} alt={s.label} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
        </div>
        <div style={{display:'grid',gap:14,alignContent:'center'}}>
          <h3 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h3)',fontWeight:600,color:'var(--primary)',lineHeight:1.3}}>{s.title}</h3>
          <p style={{margin:0,fontSize:'.9375rem',color:'var(--slate-600)',lineHeight:1.65}}>{s.desc}</p>
          <div><Button variant="cta" onClick={()=>{window.location.href=s.href||('services.html#svc-'+s.slug)}}>{s.cta}</Button></div>
        </div>
      </div></div></section>;
}
Object.assign(window,{Icon,Navbar,Hero,Stats,SectionHead,Spotlight,go,container});
