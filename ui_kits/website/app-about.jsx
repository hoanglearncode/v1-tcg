const NSAB=window.ToNCUADVDesignSystem_ce468e;
const {Button}=NSAB||{};
const D=window.TCG_DATA;
const STATS=[
  ['DẪN ĐẦU','Mạng lưới','Sở hữu và khai thác mạng lưới vị trí quảng cáo ngoài trời rộng trên toàn quốc, không chỉ tại sân bay.'],
  ['20+','năm hoạt động','Thành lập từ 2003, hơn 20 năm kinh nghiệm trong ngành quảng cáo và truyền thông tại Việt Nam.'],
  ['~730','vị trí OOH','Mặt biển quảng cáo tại hệ thống sân bay và các vị trí liên quan trên toàn quốc.'],
  ['89.000','m² khai thác','Diện tích quảng cáo đang và đã được khai thác trong toàn bộ lịch sử hoạt động.'],
  ['400+','nhãn hàng','Đã từng hợp tác trong toàn bộ lịch sử hoạt động, thuộc nhiều lĩnh vực khác nhau.'],
  ['5','khu vực','Hiện diện tại Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ và Nghệ An.']
];
function App(){
  return <div style={{fontFamily:'var(--font-sans)'}}>
    <window.Navbar/>
    <section style={{position:'relative',color:'#fff',overflow:'hidden',background:'var(--blue-900)'}}>
      <img src="../../assets/ooh/phapvan-57a.png" alt="Toàn Cầu ADV" style={{position:'absolute',right:0,top:0,width:'55%',height:'100%',objectFit:'cover',opacity:.9}}/>
      <div style={{position:'absolute',inset:0,background:'linear-gradient(100deg,var(--blue-900) 0%,var(--blue-900) 42%,rgba(13,47,94,.7) 56%,rgba(13,47,94,0) 74%)'}}></div>
      <div style={{position:'relative',...window.container,padding:'88px 32px 72px',display:'grid',gap:16,maxWidth:640}}>
        <span style={{fontSize:'.8125rem',fontWeight:700,letterSpacing:'.1em',textTransform:'uppercase',color:'var(--blue-200)'}}>Về chúng tôi</span>
        <div style={{display:'flex',alignItems:'center',gap:20,flexWrap:'wrap'}}>
          <span style={{fontFamily:'var(--font-mono)',fontWeight:700,fontSize:'4rem',lineHeight:1,color:'#fff'}}>20+</span>
          <span style={{fontSize:'.9375rem',color:'var(--blue-100)',maxWidth:220,lineHeight:1.4}}>năm kinh nghiệm quảng cáo ngoài trời tại Việt Nam, từ 2003 đến nay</span>
        </div>
        <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'clamp(2rem,3.2vw,2.75rem)',fontWeight:600,lineHeight:1.2,textWrap:'balance'}}>Doanh nghiệp quảng cáo ngoài trời lâu năm tại Việt Nam</h1>
        <p style={{margin:0,fontSize:'var(--text-body-lg)',lineHeight:1.65,color:'var(--slate-200)'}}>Toàn Cầu ADV là doanh nghiệp quảng cáo ngoài trời có hơn 20 năm kinh nghiệm, sở hữu và khai thác mạng lưới biển quảng cáo đa dạng trên toàn quốc, với thế mạnh trong billboard, pano, sân bay, nhà chờ và các vị trí OOH lưu lượng cao.</p>
        <p style={{margin:0,fontSize:'.9375rem',lineHeight:1.65,color:'var(--slate-300)'}}>Công ty đang chuyển đổi theo hướng hiện đại hóa hoạt động tư vấn, số hóa dữ liệu vị trí và mở rộng sang marketing online nhằm mang đến giải pháp truyền thông hiệu quả, chuyên nghiệp và phù hợp hơn cho từng ngành hàng.</p>
        <div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:6}}>
          <a href="services.html" style={{fontSize:'.875rem',fontWeight:600,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6,padding:'8px 16px',borderRadius:'var(--radius-full)',border:'1px solid rgba(255,255,255,.35)'}}>Dịch vụ Toàn Cầu ADV →</a>
          <a href="map.html" style={{fontSize:'.875rem',fontWeight:600,color:'#fff',textDecoration:'none',display:'inline-flex',alignItems:'center',gap:6,padding:'8px 16px',borderRadius:'var(--radius-full)',border:'1px solid rgba(255,255,255,.35)'}}>Mạng lưới vị trí OOH →</a>
        </div>
      </div>
    </section>

    <window.Journey/>

    <section style={{padding:'80px 0'}}>
      <div style={window.container}>
        <window.SectionHead kicker="Theo thông tin doanh nghiệp cung cấp" title="Toàn Cầu ADV theo con số" sub="Các chỉ số quy mô dùng làm thông tin nền, không phải tuyên bố pháp lý hay cam kết thương mại."/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'32px 24px'}}>
          {STATS.map(([kicker,unit,desc],i)=><div key={i} style={{display:'grid',gap:8,borderTop:'2px solid var(--primary)',paddingTop:14}}>
            <span style={{fontSize:'.75rem',fontWeight:700,letterSpacing:'.08em',color:'var(--slate-500)'}}>{kicker.match(/^[A-ZÀ-Ỹ ]+$/)?kicker:''}</span>
            <div style={{display:'flex',alignItems:'baseline',gap:6}}>
              <strong style={{fontFamily:'var(--font-mono)',fontSize:'2rem',color:'var(--primary)',lineHeight:1}}>{kicker.match(/^[A-ZÀ-Ỹ ]+$/)?'':kicker}</strong>
              <span style={{fontSize:'.9375rem',fontWeight:600,color:'var(--foreground)'}}>{unit}</span>
            </div>
            <p style={{margin:0,fontSize:'.8125rem',color:'var(--muted-foreground)',lineHeight:1.55}}>{desc}</p>
          </div>)}
        </div>
      </div>
    </section>

    <section style={{background:'var(--muted)',padding:'80px 0'}}>
      <div style={window.container}>
        <window.SectionHead title="Lĩnh vực hoạt động chính" sub="Từ biển quảng cáo tấm lớn đến tư vấn, thiết kế và triển khai chiến dịch quảng cáo thực tế."/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:16}}>
          {D.capabilities.map(c=><div key={c.label} style={{display:'grid',gap:10,background:'#fff',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'20px 18px',boxShadow:'var(--shadow-sm)'}}>
            <span style={{width:40,height:40,borderRadius:'var(--radius-md)',background:'var(--blue-50)',display:'grid',placeItems:'center',color:'var(--primary)'}}><window.Icon name={c.icon} size={19}/></span>
            <span style={{fontSize:'.875rem',fontWeight:600,lineHeight:1.4}}>{c.label}</span>
          </div>)}
        </div>
      </div>
    </section>

    <section style={{padding:'80px 0'}}>
      <div style={window.container}>
        <window.SectionHead title="Văn phòng đại diện" sub="Hiện diện tại nhiều khu vực trọng điểm trên toàn quốc."/>
        <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:14}}>
          {D.offices.map(o=><div key={o.city} style={{display:'grid',gap:6,background:'#fff',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',padding:'18px 16px',boxShadow:'var(--shadow-sm)'}}>
            <window.Icon name="map-pin" size={18} color="var(--primary)"/>
            <strong style={{fontSize:'.9375rem'}}>{o.city}</strong>
            <span style={{fontSize:'.75rem',fontWeight:600,color:'var(--primary)'}}>{o.role}</span>
            <span style={{fontSize:'.8125rem',color:'var(--muted-foreground)',lineHeight:1.5}}>{o.addr}</span>
          </div>)}
        </div>
      </div>
    </section>

    <section style={{padding:'0 0 88px'}}>
      <div style={{...window.container,background:'var(--blue-50)',borderRadius:'var(--radius-xl)',padding:'40px 44px',borderLeft:'4px solid var(--primary)'}}>
        <p style={{margin:0,fontFamily:'var(--font-display)',fontSize:'1.375rem',fontWeight:500,lineHeight:1.55,color:'var(--foreground)',fontStyle:'italic'}}>“Toàn Cầu ADV là doanh nghiệp quảng cáo ngoài trời có hơn 20 năm kinh nghiệm, sở hữu và khai thác mạng lưới biển quảng cáo đa dạng trên toàn quốc, với thế mạnh trong billboard, pano, sân bay, nhà chờ và các vị trí OOH lưu lượng cao.”</p>
        <span style={{display:'block',marginTop:14,fontSize:'.8125rem',color:'var(--muted-foreground)'}}>— Định vị thương hiệu đề xuất, Toàn Cầu ADV</span>
      </div>
    </section>

    <window.CTABand/>
    <window.Footer/>
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSAB?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);
