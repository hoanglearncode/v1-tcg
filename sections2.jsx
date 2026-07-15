const NS2 = window.ToNCUADVDesignSystem_ce468e || {};
const { Button, FilterBar, FilterChip, Select, LocationCard, CaseStudyCard, Field, Input, Textarea, Checkbox, MapMarker, MapPopup, StatusPill, AIScoreBadge, Toast, QuoteTray } = NS2;
const D2 = window.TCG_DATA;

const ESRI_TILES = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const OSM_TILES = 'https://basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}@2x.png';
function statusPillStyle(st) {
  const c = st === 'booked' ? { bg: 'rgba(244,114,182,.18)', fg: '#F472B6', label: 'Đã thuê' } : st === 'soon' ? { bg: 'rgba(245,158,11,.18)', fg: '#F59E0B', label: 'Sắp hết' } : { bg: 'rgba(45,212,191,.16)', fg: '#2DD4BF', label: 'Còn trống' };
  return c;
}
function MapSection({ onAdd, hideHead }) {
  const locs = D2.locations;
  const mapEl = React.useRef(null);
  const mapRef = React.useRef(null);
  const onAddRef = React.useRef(onAdd);
  onAddRef.current = onAdd;
  const [sel, setSel] = React.useState(null);
  const [ready, setReady] = React.useState(false);
  const [baseMap, setBaseMap] = React.useState('satellite');
  const switchBase = (mode) => {
    setBaseMap(mode);
    const map = mapRef.current;
    if (!map) return;
    map.setLayoutProperty('esri', 'visibility', mode === 'satellite' ? 'visible' : 'none');
    map.setLayoutProperty('osm', 'visibility', mode === 'street' ? 'visible' : 'none');
  };
  const openPopup = (map, l) => {
    const el = document.createElement('div');
    el.style.cssText = 'font-family:var(--font-sans);display:grid;gap:8px;width:230px';
    el.innerHTML = '<img src="' + l.img + '" alt="" style="width:100%;height:110px;object-fit:cover;border-radius:2px"/>' +
    '<strong style="font-size:14px;line-height:1.35">' + l.name + '</strong>' +
    '<span style="font-family:var(--font-mono);font-size:13px;color:var(--primary);font-weight:600">' + D2.fmt(l.priceN) + '</span>';
    const pill = statusPillStyle(l.status);
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:8px;align-items:center';
    row.innerHTML = '<span style="font-size:11px;font-weight:600;padding:2px 8px;border-radius:999px;background:' + pill.bg + ';color:' + (l.status === 'available' ? '#0F766E' : l.status === 'soon' ? '#92400E' : '#9D174D') + '">' + pill.label + '</span>';
    if (l.status !== 'booked') {
      const btn = document.createElement('button');
      btn.textContent = '+ Thêm báo giá';
      btn.style.cssText = 'flex:1;height:32px;border:none;border-radius:2px;background:var(--cta);color:#fff;font-weight:600;font-size:12.5px;font-family:var(--font-sans);cursor:pointer';
      btn.onclick = () => onAddRef.current && onAddRef.current(l);
      row.appendChild(btn);
    }
    el.appendChild(row);
    new window.maplibregl.Popup({ offset: 14, maxWidth: '260px', closeOnClick: false }).setLngLat([l.lng, l.lat]).setDOMContent(el).addTo(map);
  };
  React.useEffect(() => {
    if (!window.maplibregl || !mapEl.current) return;
    const map = new window.maplibregl.Map({
      container: mapEl.current,
      style: { version: 8, sources: { esri: { type: 'raster', tiles: [ESRI_TILES], tileSize: 256, attribution: 'Tiles © Esri | Esri, Maxar, Earthstar Geographics, and the GIS User Community' }, osm: { type: 'raster', tiles: [OSM_TILES], tileSize: 512, attribution: '© OpenStreetMap contributors © CARTO' } }, layers: [{ id: 'esri', type: 'raster', source: 'esri' }, { id: 'osm', type: 'raster', source: 'osm', layout: { visibility: 'none' } }] },
      center: [105.845, 21.02], zoom: 10.4, attributionControl: { compact: false } });
    mapRef.current = map;
    map.addControl(new window.maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
    map.addControl(new window.maplibregl.ScaleControl({ maxWidth: 110 }), 'bottom-left');
    D2.clusters.forEach(([lng, lat, count]) => {
      const el = document.createElement('div');
      const big = count >= 25;
      el.style.cssText = 'width:' + (big ? 38 : 30) + 'px;height:' + (big ? 38 : 30) + 'px;border-radius:50%;display:grid;place-items:center;font:600 ' + (big ? 14 : 12.5) + 'px var(--font-mono);color:#053B34;background:' + (big ? '#F5A524' : '#2DD4BF') + ';border:2.5px solid rgba(255,255,255,.92);box-shadow:0 2px 8px rgba(0,0,0,.35);cursor:pointer';
      if (big) el.style.color = '#4A2A00';
      el.textContent = count;
      el.title = count + ' vị trí trong khu vực';
      el.onclick = (e) => {e.stopPropagation();map.flyTo({ center: [lng, lat], zoom: 12.5, essential: true });};
      new window.maplibregl.Marker({ element: el }).setLngLat([lng, lat]).addTo(map);
    });
    locs.forEach((l, i) => {
      const el = document.createElement('div');
      el.style.cssText = 'width:26px;height:26px;border-radius:50%;display:grid;place-items:center;background:var(--blue-500);border:2.5px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.4);color:#fff;font-size:13px;cursor:pointer';
      el.textContent = '★';
      el.title = l.name;
      el.onclick = (e) => {e.stopPropagation();setSel(i);map.flyTo({ center: [l.lng, l.lat], zoom: 12.8, essential: true });openPopup(map, l);};
      new window.maplibregl.Marker({ element: el }).setLngLat([l.lng, l.lat]).addTo(map);
    });
    setReady(true);
    return () => {map.remove();mapRef.current = null;};
  }, []);
  const focus = (i) => {
    setSel(i);
    const map = mapRef.current,l = locs[i];
    if (map) {map.flyTo({ center: [l.lng, l.lat], zoom: l.city === 'Hà Nội' ? 12.8 : 11.5, essential: true });openPopup(map, l);}
  };
  const legendDot = (c, label) => <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '.75rem', color: '#E2E8F0' }}><span style={{ width: 9, height: 9, borderRadius: '50%', background: c }}></span>{label}</span>;
  return <section id="map" style={{ background: 'var(--muted)', padding: hideHead ? '0' : '88px 0 0' }}>
    {!hideHead && <div style={{ ...window.container, paddingBottom: 40 }}>
      <window.SectionHead title="Bản đồ vị trí OOH toàn quốc" sub="Lọc theo tỉnh/thành, loại biển, ngân sách, chọn vị trí để nhận báo giá." />
    </div>}
    <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: hideHead ? 'calc(100vh - 72px)' : 600, minHeight: 520 }}>
      <aside style={{ background: 'var(--slate-900)', color: '#F1F5F9', display: 'grid', gridTemplateRows: 'auto 1fr', minHeight: 0 }}>
        <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(255,255,255,.1)', fontSize: '.8125rem', color: 'var(--slate-400)' }}>
          Hiển thị <strong style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{locs.length}/2.008</strong> kết quả. Thu hẹp bộ lọc để chính xác hơn.
        </div>
        <div style={{ overflowY: 'auto', minHeight: 0 }}>
          {locs.map((l, i) => <div key={l.id} onClick={() => focus(i)} style={{ display: 'flex', gap: 12, padding: '14px 16px', cursor: 'pointer', borderBottom: '1px solid rgba(255,255,255,.07)', background: sel === i ? 'rgba(54,143,255,.14)' : 'transparent', borderLeft: sel === i ? '3px solid var(--blue-400)' : '3px solid transparent' }}>
            <img src={l.img} alt="" style={{ width: 56, height: 42, objectFit: 'cover', borderRadius: 2, flex: 'none' }} />
            <div style={{ display: 'grid', gap: 4, alignContent: 'start', minWidth: 0, flex: 1 }}>
              <strong style={{ fontSize: '.875rem', lineHeight: 1.3 }}>★ {l.name}</strong>
              <span style={{ fontSize: '.75rem', color: 'var(--slate-400)' }}>{l.type} · <span style={{ fontFamily: 'var(--font-mono)' }}>{l.size}</span></span>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                {(() => {const p = statusPillStyle(l.status);return <span style={{ fontFamily: 'var(--font-mono)', fontSize: '.6875rem', fontWeight: 600, padding: '2px 9px', borderRadius: 'var(--radius-full)', background: p.bg, color: p.fg }}>{p.label}</span>;})()}
                {l.status !== 'booked' && <button onClick={(e) => {e.stopPropagation();onAdd && onAdd(l);}} style={{ marginLeft: 'auto', height: 26, padding: '0 10px', border: '1px solid rgba(255,255,255,.25)', borderRadius: 2, background: 'transparent', color: '#BFDBFE', fontSize: '.6875rem', fontWeight: 600, fontFamily: 'var(--font-sans)', cursor: 'pointer' }}>+ Báo giá</button>}
              </div>
            </div>
          </div>)}
        </div>
      </aside>
      <div style={{ position: 'relative', minHeight: 0 }}>
        <div ref={mapEl} style={{ position: 'absolute', inset: 0 }}></div>
        {!window.maplibregl && <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'var(--slate-100)', color: 'var(--muted-foreground)', fontSize: '.875rem' }}>Không tải được MapLibre GL. Kiểm tra kết nối rồi tải lại trang.</div>}
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 5, display: 'flex', borderRadius: 4, overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '1px solid rgba(255,255,255,.25)' }}>
          {[['satellite', 'Vệ tinh'], ['street', 'Bản đồ']].map(([m, l]) => <button key={m} onClick={() => switchBase(m)} style={{ height: 36, padding: '0 16px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '.8125rem', fontWeight: 600, background: baseMap === m ? 'var(--primary)' : 'rgba(15,23,42,.85)', color: baseMap === m ? '#fff' : '#CBD5E1' }}>{l}</button>)}
        </div>
        <div style={{ position: 'absolute', top: 12, left: 12, zIndex: 5, background: 'rgba(15,23,42,.88)', borderRadius: 4, padding: '10px 14px', display: 'grid', gap: 8, boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', gap: 14 }}>{legendDot('#2DD4BF', 'Còn trống')}{legendDot('#F472B6', 'Đã cho thuê')}</div>
          <div style={{ display: 'flex', gap: 14 }}>{legendDot('#2DD4BF', 'Cụm vị trí')}{legendDot('#F5A524', 'Cụm lớn ≥25')}{legendDot('var(--blue-500)', '★ Vị trí tiêu biểu')}</div>
        </div>
      </div>
    </div>
  </section>;
}
function Process() {
  return <section style={{ padding: '88px 0' }}>
    <div style={window.container}>
      <window.SectionHead title="Hoạt động thế nào? Tự phục vụ 24/7" sub="Nhận báo giá PDF trong vài phút, không cần chờ sales." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, position: 'relative' }}>
        <div style={{ position: 'absolute', top: 26, left: '10%', right: '10%', height: 2, background: 'var(--border)' }}></div>
        {D2.steps.map(([ic, label], i) => <div key={i} style={{ display: 'grid', gap: 12, justifyItems: 'center', textAlign: 'center', position: 'relative', padding: '0 10px' }}>
          <span style={{ width: 52, height: 52, borderRadius: '50%', background: i === 3 ? 'var(--cta)' : 'var(--primary)', color: i === 3 ? 'var(--cta-foreground)' : '#fff', display: 'grid', placeItems: 'center', border: '4px solid #fff', boxShadow: 'var(--shadow-sm)' }}><window.Icon name={ic} size={22} color="currentColor" /></span>
          <span style={{ fontSize: '.9375rem', fontWeight: 600, lineHeight: 1.4 }}>{label}</span>
        </div>)}
      </div></div></section>;
}
function Services() {
  return <section id="services" style={{ background: 'var(--muted)', padding: '88px 0' }}>
    <div style={window.container}>
      <window.SectionHead title="Giải pháp OOH của Toàn Cầu" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {D2.services.map((s) => <div key={s.name} className="svc" style={{ display: 'grid', gap: 10, alignContent: 'start', background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '22px 20px', boxShadow: 'var(--shadow-sm)' }}>
          <span style={{ width: 44, height: 44, borderRadius: 'var(--radius-md)', background: 'var(--navy-50)', display: 'grid', placeItems: 'center', color: 'var(--primary)' }}><window.Icon name={s.icon} size={22} /></span>
          <strong style={{ fontSize: 'var(--text-h4)', fontWeight: 600 }}>{s.name}</strong>
          <p style={{ margin: 0, fontSize: '.875rem', color: 'var(--muted-foreground)', lineHeight: 1.55 }}>{s.desc}</p>
          <a style={{ fontSize: '.875rem', fontWeight: 600, color: 'var(--primary)', cursor: 'pointer' }}>Tìm hiểu →</a>
        </div>)}
      </div></div></section>;
}
function Cases() {
  return <section id="cases" style={{ padding: '88px 0' }}>
    <div style={window.container}>
      <window.SectionHead title="Dự án & chiến dịch tiêu biểu" sub="Nội dung mẫu, chờ case study thật từ Content/Sales." />
      <div style={{ display: 'flex', gap: 20, justifyContent: 'center', flexWrap: 'wrap' }}>
        {D2.cases.map((c) => <CaseStudyCard key={c.brand} brand={c.brand} image={c.img} industry={c.industry} result={c.result} onDetail={() => {}} />)}
      </div></div></section>;
}
function LeadForm({ onToast }) {
  const [st, setSt] = React.useState('idle');
  const [ok, setOk] = React.useState(false);
  const submit = () => {setSt('submitting');setTimeout(() => {setSt('success');onToast({ kind: 'success', title: 'Đã gửi yêu cầu tư vấn', message: 'Đội ngũ Toàn Cầu sẽ liên hệ trong 24h.' });}, 1200);};
  return <section id="lead" style={{ background: 'var(--navy-50)', padding: '88px 0' }}>
    <div style={{ ...window.container, display: 'grid', gridTemplateColumns: '.9fr 1.1fr', gap: 48, alignItems: 'start' }}>
      <div style={{ display: 'grid', gap: 16 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 600, color: 'var(--primary)', lineHeight: 1.18 }}>Nhận tư vấn OOH miễn phí</h2>
        <p style={{ margin: 0, fontSize: 'var(--text-body-lg)', color: 'var(--slate-600)' }}>Để lại thông tin, đội ngũ Toàn Cầu liên hệ trong 24h.</p>
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: 10 }}>
          {['Tư vấn vị trí theo ngành hàng', 'Báo giá PDF nhanh', '20 năm kinh nghiệm OOH'].map((x) => <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'center', fontWeight: 500 }}><span style={{ color: 'var(--success)', fontWeight: 700 }}>✓</span>{x}</li>)}
        </ul></div>
      {st === 'success' ?
      <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 40, display: 'grid', gap: 10, justifyItems: 'center', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
          <span style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--success)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 26, fontWeight: 700 }}>✓</span>
          <strong style={{ fontSize: 'var(--text-h3)' }}>Đã nhận yêu cầu của bạn</strong>
          <p style={{ margin: 0, color: 'var(--muted-foreground)' }}>Chúng tôi sẽ liên hệ trong 24h làm việc. Mã yêu cầu: <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>TC-2607-018</span></p>
          <Button variant="outline" onClick={() => setSt('idle')}>Gửi yêu cầu khác</Button>
        </div> :
      <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, boxShadow: 'var(--shadow-md)' }}>
        <Field label="Họ tên" required><Input placeholder="Nguyễn Văn A" /></Field>
        <Field label="Số điện thoại" required><Input placeholder="09xx xxx xxx" /></Field>
        <Field label="Doanh nghiệp"><Input placeholder="Tên công ty" /></Field>
        <Field label="Email"><Input placeholder="ban@congty.vn" /></Field>
        <Field label="Ngành hàng"><Select placeholder="Chọn ngành hàng" options={['F&B', 'Thời trang & Phụ kiện', 'Mỹ phẩm & Chăm sóc cá nhân', 'Đồ gia dụng & Trang trí', 'Công nghệ & Điện tử']} /></Field>
        <Field label="Ngân sách"><Select placeholder="Chọn khoảng" options={['< 50 triệu/tháng', '50-150 triệu/tháng', '> 150 triệu/tháng']} /></Field>
        <div style={{ gridColumn: '1/-1' }}><Field label="Nhu cầu / ghi chú"><Textarea rows={3} placeholder="Mô tả ngắn nhu cầu quảng cáo…" /></Field></div>
        <Checkbox label="Đồng ý nhận liên hệ" checked={ok} onChange={setOk} />
        <div style={{ justifySelf: 'end' }}><Button variant="cta" loading={st === 'submitting'} disabled={!ok} onClick={submit}>{st === 'submitting' ? 'Đang gửi…' : 'Gửi yêu cầu tư vấn'}</Button></div>
      </div>}
    </div></section>;
}
function CTABand() {
  return <section style={{ background: 'var(--navy-800)', padding: '64px 0' }}>
    <div style={{ ...window.container, display: 'grid', gap: 20, justifyItems: 'center', textAlign: 'center' }}>
      <h2 style={{ margin: 0, color: '#fff', fontFamily: 'var(--font-display)', fontSize: 'var(--text-h2)', fontWeight: 600, textWrap: 'balance' }}>Sẵn sàng tìm vị trí OOH cho chiến dịch tiếp theo?</h2>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <Button variant="outline-inverse" size="lg" onClick={() => {window.location.href = 'map.html';}}>Khám phá bản đồ vị trí</Button>
        <Button variant="cta" size="lg" onClick={() => {window.location.href = 'contact.html';}}>Yêu cầu báo giá</Button>
      </div>
      <span style={{ fontSize: '.8125rem', color: 'var(--slate-400)' }}>Bạn là chủ biển muốn cho thuê? Sàn OOH sắp ra mắt.</span>
    </div></section>;
}
const socialCircle = { width: 36, height: 36, borderRadius: 'var(--radius-full)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--primary)', cursor: 'pointer' };
function Footer() {
  const info = (label, val) => <p style={{ margin: 0, fontSize: '.9375rem', lineHeight: 1.7, color: 'var(--slate-700)' }}><strong style={{ color: 'var(--foreground)' }}>{label}:</strong> {val}</p>;
  const col = (t, items) => <div style={{ display: 'grid', gap: 12, alignContent: 'start' }}>
    <strong style={{ fontSize: '1rem', color: 'var(--foreground)' }}>{t}</strong>
    {items.map((x, i) => typeof x === 'string' ?
    <a key={i} style={{ color: 'var(--slate-600)', fontSize: '.9375rem', cursor: 'pointer', textDecoration: 'none' }}>{x}</a> :
    <div key={i} style={{ display: 'grid', gap: 2 }}><span style={{ color: 'var(--slate-600)', fontSize: '.9375rem' }}>{x[0]}</span><strong style={{ fontFamily: 'var(--font-mono)', fontSize: '1.0625rem', color: 'var(--foreground)' }}>{x[1]}</strong></div>)}
  </div>;
  return <footer style={{ background: '#fff', borderTop: '1px solid var(--border)', padding: '56px 0 24px' }}>
    <div style={{ ...window.container, display: 'grid', gap: 36 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 48, alignItems: 'start' }}>
        <div style={{ display: 'grid', gap: 12, justifyItems: 'start' }}>
          <img src="../../assets/logo-full.png" alt="Toàn Cầu ADV" style={{ height: 52 }} />
          <strong style={{ fontSize: '1.0625rem' }}>Công Ty Cổ Phần Tập Đoàn Quảng Cáo Toàn Cầu</strong>
          {info('Trụ sở chính', '265 Thụy Khuê, Phường Tây Hồ, TP Hà Nội, Việt Nam')}
          {info('Hotline', '024 3929 0088')}
          {info('Email', 'info@toancauadv.vn')}
          {info('Thời gian làm việc', 'Giờ hành chính từ thứ 2 đến sáng thứ 7')}
          <span style={{ fontSize: '.9375rem', color: 'var(--slate-700)', marginTop: 6 }}>Theo dõi chúng tôi qua:</span>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={socialCircle} aria-label="Facebook"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg></span>
            <span style={socialCircle} aria-label="YouTube"><svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></span>
            <span style={socialCircle} aria-label="Zalo / điện thoại"><window.Icon name="phone" size={16} /></span>
          </div>
        </div>
        <div style={{ position: 'relative', minHeight: 280, borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border)', background: 'linear-gradient(150deg,#E8F0FA,#DCE8F5 55%,#D2E1F0)' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(35,116,217,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(35,116,217,.07) 1px,transparent 1px)', backgroundSize: '40px 40px' }}></div>
          <div style={{ position: 'absolute', left: '52%', top: '44%', transform: 'translate(-50%,-100%)' }}><NS2.MapMarker state="selected" /></div>
          <div style={{ position: 'absolute', left: 12, top: 12, background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-md)', padding: '10px 14px', display: 'grid', gap: 2 }}>
            <strong style={{ fontSize: '.875rem' }}>265 Thụy Khuê, Tây Hồ</strong>
            <span style={{ fontSize: '.75rem', color: 'var(--muted-foreground)' }}>Trụ sở Toàn Cầu ADV, Hà Nội</span>
          </div>
          <span style={{ position: 'absolute', right: 10, bottom: 8, fontSize: '.6875rem', color: 'var(--slate-500)' }}>Bản đồ minh hoạ. Production: nhúng Google Maps.</span>
        </div>
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 32, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 32 }}>
        {col('Doanh nghiệp', ['Về Toàn Cầu', 'Khách hàng', 'Tin tức', 'Tuyển dụng', 'Liên hệ'])}
        {col('Dịch vụ', ['Quảng cáo sân bay', 'Billboard · Pano', 'Màn hình LED', 'Nhà chờ xe bus'])}
        {col('Vị trí OOH', ['Bản đồ vị trí', 'Theo tỉnh/thành', 'Vị trí còn trống'])}
        {col('Hotline', [['Tư vấn quảng cáo', '024 3929 0088'], ['Chăm sóc khách hàng', '1900 6522']])}
      </div>
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 18, display: 'flex', gap: 16, fontSize: '.8125rem', color: 'var(--muted-foreground)', flexWrap: 'wrap' }}>
        <span>© 2026 Công ty Cổ phần Tập đoàn Quảng cáo Toàn Cầu</span><span style={{ flex: 1 }}></span><span>Chính sách bảo mật</span><span>Điều khoản</span>
      </div></div></footer>;
}
Object.assign(window, { MapSection, Process, Services, Cases, LeadForm, CTABand, Footer });