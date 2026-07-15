import {Button} from '../core/Button.jsx';
export function FilterBar({resultCount,onClear,children,style}){
  return React.createElement('div',{style:{display:'flex',flexWrap:'wrap',alignItems:'center',gap:10,padding:'12px 16px',
    background:'var(--card)',border:'1px solid var(--border)',borderRadius:'var(--radius-lg)',boxShadow:'var(--shadow-sm)',...style}},
    children,
    React.createElement('span',{style:{flex:1}}),
    resultCount!=null&&React.createElement('span',{style:{fontSize:'.875rem',color:'var(--muted-foreground)'}},
      React.createElement('strong',{style:{fontFamily:'var(--font-mono)',color:'var(--foreground)'}},resultCount),' vị trí'),
    onClear&&React.createElement(Button,{variant:'ghost',size:'sm',onClick:onClear},'Xóa lọc'));
}
