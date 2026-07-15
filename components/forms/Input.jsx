const fieldBase={width:'100%',height:44,padding:'0 14px',fontSize:'1rem',fontFamily:'var(--font-sans)',color:'var(--foreground)',background:'var(--card)',border:'1px solid var(--border)',borderRadius:'var(--radius-md)',outline:'none',boxSizing:'border-box',transition:'border-color var(--dur-fast),box-shadow var(--dur-fast)'};
export function Field({label,required,error,hint,htmlFor,children}){
  return React.createElement('div',{style:{display:'grid',gap:6}},
    label&&React.createElement('label',{htmlFor,style:{fontSize:'.875rem',fontWeight:600}},label,required&&React.createElement('span',{style:{color:'var(--destructive)'}},' *')),
    children,
    error?React.createElement('div',{role:'alert',style:{display:'flex',gap:6,alignItems:'center',fontSize:'.8125rem',color:'var(--destructive)',fontWeight:500}},'⚠ '+error)
      :hint&&React.createElement('div',{style:{fontSize:'.8125rem',color:'var(--muted-foreground)'}},hint));
}
export function Input({error,disabled,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('input',{disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),
    'aria-invalid':error?'true':undefined,
    style:{...fieldBase,borderColor:error?'var(--destructive)':foc?'var(--ring)':'var(--border)',
      boxShadow:foc?'0 0 0 3px '+(error?'rgba(220,38,38,.15)':'rgba(18,49,94,.15)'):'none',
      opacity:disabled?.55:1,...style},...rest});
}
export function Textarea({error,disabled,rows=4,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('textarea',{disabled,rows,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),
    'aria-invalid':error?'true':undefined,
    style:{...fieldBase,height:'auto',padding:'10px 14px',resize:'vertical',lineHeight:1.5,
      borderColor:error?'var(--destructive)':foc?'var(--ring)':'var(--border)',
      boxShadow:foc?'0 0 0 3px '+(error?'rgba(220,38,38,.15)':'rgba(18,49,94,.15)'):'none',
      opacity:disabled?.55:1,...style},...rest});
}
export function Select({options=[],placeholder,error,disabled,style,...rest}){
  const [foc,setFoc]=React.useState(false);
  return React.createElement('select',{disabled,onFocus:()=>setFoc(true),onBlur:()=>setFoc(false),
    'aria-invalid':error?'true':undefined,
    style:{...fieldBase,appearance:'auto',cursor:disabled?'not-allowed':'pointer',
      borderColor:error?'var(--destructive)':foc?'var(--ring)':'var(--border)',
      boxShadow:foc?'0 0 0 3px rgba(18,49,94,.15)':'none',opacity:disabled?.55:1,...style},...rest},
    placeholder&&React.createElement('option',{value:''},placeholder),
    options.map(o=>typeof o==='string'?React.createElement('option',{key:o,value:o},o):React.createElement('option',{key:o.value,value:o.value},o.label)));
}
export function Checkbox({label,checked,onChange,disabled,style}){
  return React.createElement('label',{style:{display:'inline-flex',alignItems:'center',gap:10,cursor:disabled?'not-allowed':'pointer',opacity:disabled?.55:1,fontSize:'.9375rem',...style}},
    React.createElement('input',{type:'checkbox',checked,disabled,onChange:e=>onChange&&onChange(e.target.checked),
      style:{width:18,height:18,accentColor:'var(--primary)',cursor:'inherit'}}),label);
}
