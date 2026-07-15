export function Button({variant='primary',size='md',loading=false,disabled=false,children,onClick,style,...rest}){
  const pal={
    primary:{bg:'var(--primary)',fg:'var(--primary-foreground)',hov:'var(--navy-500)',act:'var(--navy-700)',bd:'transparent'},
    cta:{bg:'var(--cta)',fg:'var(--cta-foreground)',hov:'var(--amber-500)',act:'var(--amber-600)',bd:'transparent'},
    secondary:{bg:'var(--secondary)',fg:'var(--secondary-foreground)',hov:'var(--slate-200)',act:'var(--slate-300)',bd:'transparent'},
    outline:{bg:'transparent',fg:'var(--primary)',hov:'var(--navy-50)',act:'var(--navy-100)',bd:'var(--border)'},
    'outline-inverse':{bg:'transparent',fg:'#fff',hov:'rgba(255,255,255,.12)',act:'rgba(255,255,255,.2)',bd:'rgba(255,255,255,.4)'},
    ghost:{bg:'transparent',fg:'var(--primary)',hov:'var(--navy-50)',act:'var(--navy-100)',bd:'transparent'},
    destructive:{bg:'var(--destructive)',fg:'#fff',hov:'#B91C1C',act:'#991B1B',bd:'transparent'}
  }[variant]||{};
  const sz={sm:{h:36,px:14,fs:'.875rem'},md:{h:44,px:20,fs:'1rem'},lg:{h:52,px:28,fs:'1.125rem'}}[size];
  const [hov,setHov]=React.useState(false),[act,setAct]=React.useState(false);
  const off=disabled||loading;
  return React.createElement('button',{
    onClick:off?undefined:onClick,disabled:off,
    onMouseEnter:()=>setHov(true),onMouseLeave:()=>{setHov(false);setAct(false)},
    onMouseDown:()=>setAct(true),onMouseUp:()=>setAct(false),
    style:{display:'inline-flex',alignItems:'center',justifyContent:'center',gap:8,
      height:sz.h,padding:`0 ${sz.px}px`,fontSize:sz.fs,fontWeight:600,fontFamily:'var(--font-sans)',
      background:off?pal.bg:act?pal.act:hov?pal.hov:pal.bg,color:pal.fg,
      border:`1px solid ${pal.bd}`,borderRadius:'var(--radius-md)',cursor:off?'not-allowed':'pointer',
      opacity:disabled?.55:1,transition:'background var(--dur-fast) var(--ease-standard)',whiteSpace:'nowrap',...style},
    ...rest},
    loading&&React.createElement('span',{style:{width:16,height:16,border:'2px solid currentColor',borderTopColor:'transparent',borderRadius:'50%',animation:'tcgspin .7s linear infinite',flex:'none'}}),
    children,
    loading&&injectSpin());
}
function injectSpin(){if(typeof document!=='undefined'&&!document.getElementById('tcgspin')){const s=document.createElement('style');s.id='tcgspin';s.textContent='@keyframes tcgspin{to{transform:rotate(360deg)}}';document.head.appendChild(s)}return null}
