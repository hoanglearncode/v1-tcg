Hệ form lead-capture: Field (label + lỗi có chữ, không chỉ viền đỏ) bọc Input/Textarea/Select/Checkbox. Focus ring navy.

```jsx
<Field label="Họ tên" required error={errors.name}>
  <Input placeholder="Nguyễn Văn A" error={errors.name} />
</Field>
<Field label="Ngành hàng"><Select placeholder="Chọn ngành" options={["F&B","Thời trang & Phụ kiện","Mỹ phẩm & Chăm sóc cá nhân","Đồ gia dụng & Trang trí","Công nghệ & Điện tử"]} /></Field>
<Checkbox label="Đồng ý nhận liên hệ" checked={ok} onChange={setOk} />
```

Tất cả export từ `forms/Input.jsx` (Field, Input, Textarea, Select, Checkbox).
