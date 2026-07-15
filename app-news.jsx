const NSN = window.ToNCUADVDesignSystem_ce468e;
function PageHead({ title, sub }) {
  return <div style={{ background: 'var(--blue-900)', color: '#fff', padding: '56px 0' }}>
    <div style={window.container}>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h1)', fontWeight: 600, lineHeight: 1.12 }}>{title}</h1>
      {sub && <p style={{ margin: '12px 0 0', fontSize: 'var(--text-body-lg)', color: 'var(--blue-100)', maxWidth: 640 }}>{sub}</p>}
    </div></div>;
}
function App() {
  const D = window.TCG_DATA;
  return <div style={{ fontFamily: 'var(--font-sans)' }}>
    <window.Navbar />
    <PageHead title="Tin tức" sub="Cập nhật hệ thống vị trí, sản phẩm và hoạt động của Toàn Cầu ADV." />
    <section style={{ padding: '72px 0' }}><div style={{ ...window.container, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
      {D.news.map((n) => <article key={n.title} style={{ display: 'grid', gap: 0, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
        <img src={n.img} alt="" style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
        <div style={{ padding: '18px 20px 22px', display: 'grid', gap: 8, alignContent: 'start' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.8125rem', color: 'var(--muted-foreground)' }}>{n.date}</span>
          <h2 style={{ margin: 0, fontSize: 'var(--text-h4)', fontWeight: 600, lineHeight: 1.4 }}>{n.title}</h2>
          <p style={{ margin: 0, fontSize: '.9375rem', color: 'var(--slate-600)', lineHeight: 1.6 }}>{n.excerpt}</p>
          <a style={{ fontSize: '.9375rem', fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>Đọc tiếp →</a>
        </div>
      </article>)}
    </div></section>
    <window.Footer />
  </div>;
}
ReactDOM.createRoot(document.getElementById('root')).render(NSN ? <App /> : <div style={{ padding: 40 }}>Đang biên dịch design system… tải lại trang.</div>);