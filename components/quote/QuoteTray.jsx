import {Button} from '../core/Button.jsx';
export function QuoteTray({count=0,total,onSubmit,onOpen,fixed=false,style}){
  if(!count)return null;
  return React.createElement('div',{style:{display:'flex',alignItems:'center',gap:20,padding:'14px 24px',
    background:'var(--navy-900)',color:'#fff',boxShadow:'var(--shadow-xl)',
    ...(fixed?{position:'fixed',left:0,right:0,bottom:0,zIndex:50}:{borderRadius:'var(--radius-lg)'}),...style}},
    React.createElement('span',{onClick:onOpen,style:{fontWeight:600,cursor:onOpen?'pointer':'default'}},
      React.createElement('span',{style:{fontFamily:'var(--font-mono)',fontWeight:700}},count),' vị trí đã chọn'),
    total&&React.createElement('span',{style:{color:'var(--slate-300)',fontSize:'.9375rem'}},'Tạm tính: ',
      React.createElement('strong',{style:{fontFamily:'var(--font-mono)',color:'#fff'}},total)),
    React.createElement('span',{style:{flex:1}}),
    React.createElement(Button,{variant:'cta',onClick:onSubmit},'Tạo báo giá →'));
}
