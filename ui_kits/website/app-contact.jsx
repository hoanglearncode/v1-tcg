const NSC=window.ToNCUADVDesignSystem_ce468e;
function PageHead({title,sub}){
  return <div style={{background:'var(--blue-900)',color:'#fff',padding:'56px 0'}}>
    <div style={window.container}>
      <h1 style={{margin:0,fontFamily:'var(--font-display)',fontSize:'var(--text-h1)',fontWeight:600,lineHeight:1.12}}>{title}</h1>
      {sub&&<p style={{margin:'12px 0 0',fontSize:'var(--text-body-lg)',color:'var(--blue-100)',maxWidth:640}}>{sub}</p>}
    </div></div>;
}
function App(){
  const [toast,setToast]=React.useState(null);
  return <div style={{fontFamily:'var(--font-sans)'}}>
    <window.Navbar/>
    <PageHead title="Liên hệ Toàn Cầu ADV" sub="Đội ngũ tư vấn liên hệ lại trong 24h làm việc."/>
    <window.LeadForm onToast={t=>{setToast(t);setTimeout(()=>setToast(null),3200)}}/>
    <window.Footer/>
    {toast&&<div style={{position:'fixed',top:88,right:24,zIndex:60}}><NSC.Toast kind={toast.kind} title={toast.title} message={toast.message} onClose={()=>setToast(null)}/></div>}
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSC&&NSC.Toast?<App/>:<div style={{padding:40}}>Đang biên dịch design system… tải lại trang.</div>);