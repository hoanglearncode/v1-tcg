Marker + popup bản đồ vị trí OOH (cả hai export từ `map/MapMarker.jsx`).

```jsx
<MapMarker state="default" /> <MapMarker state="selected" /> <MapMarker state="cluster" count={24} />
<MapPopup name="Nội Bài T2" price="60.000.000đ/tháng" score={85} status="available" onAdd={...} onDetail={...} />
```

Pin navy = mặc định; amber = đang chọn; cluster = đĩa navy đếm số. Bản production dùng MapLibre GL.
