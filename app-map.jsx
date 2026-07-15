const NSM = window.ToNCUADVDesignSystem_ce468e;
function PageHead({ title, sub }) {
  return <div style={{ background: 'var(--blue-900)', color: '#fff', padding: '56px 0' }}>
    <div style={window.container}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 600, lineHeight: 1.12 }}>{title}</h1>
      {sub && <p style={{ margin: '12px 0 0', fontSize: 'var(--text-body-lg)', color: 'var(--blue-100)', maxWidth: 640 }}>{sub}</p>}
    </div></div>;
}
function App() {
  const [cart, setCart] = React.useState([]);
  const [toast, setToast] = React.useState(null);
  const add = (l) => {setCart((c) => c.some((x) => x.id === l.id) ? c : [...c, l]);setToast({ kind: 'success', title: 'Đã thêm vào báo giá', message: l.name });setTimeout(() => setToast(null), 2600);};
  const total = cart.reduce((s, l) => s + l.priceN, 0);
  return <div style={{ fontFamily: 'var(--font-sans)' }}>
    <window.Navbar />
    <PageHead title="Bản đồ vị trí OOH toàn quốc" sub="Lọc theo tỉnh/thành, loại biển, ngân sách. Chọn vị trí để nhận báo giá trong vài phút." />
    <window.MapSection onAdd={add} hideHead />
    <window.Footer />
    <NSM.QuoteTray fixed count={cart.length} total={total ? window.TCG_DATA.fmt(total) : null} onSubmit={() => {setToast({ kind: 'success', title: 'Báo giá PDF nháp đang được tạo', message: cart.length + ' vị trí đã chọn' });setTimeout(() => setToast(null), 3000);}} />
    {toast && <div style={{ position: 'fixed', top: 88, right: 24, zIndex: 60 }}><NSM.Toast kind={toast.kind} title={toast.title} message={toast.message} onClose={() => setToast(null)} /></div>}
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSM && NSM.QuoteTray ? <App /> : <div style={{ padding: 40 }}>Đang biên dịch design system… tải lại trang.</div>);