Thanh bộ lọc — chứa Select/FilterChip, hiển thị số kết quả + nút "Xóa lọc".

```jsx
<FilterBar resultCount={128} onClear={...}>
  <Select options={provinces} value={p} onChange={setP} />
  <FilterChip active>Còn trống</FilterChip>
</FilterBar>
```
