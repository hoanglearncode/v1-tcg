Thẻ vị trí OOH — thành phần trung tâm của khu khám phá vị trí.

```jsx
<LocationCard name="Ngã tư Sở, Hà Nội" type="Billboard" city="Hà Nội" size="8×12m"
  price="45.000.000đ/tháng" status="available" score={92}
  reason="Lưu lượng cao, gần khu ăn uống" onAdd={()=>addToQuote(id)} />
```

States: hover (lift + shadow-md), `selected` (ring navy 2px), `status="booked"`/`unavailable` (mờ 60%, ẩn nút thêm). Ảnh 4:3; khi chưa có ảnh hiển thị placeholder navy.
