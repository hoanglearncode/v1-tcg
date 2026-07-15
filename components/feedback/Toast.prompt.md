Phản hồi hệ thống: Toast, Skeleton, EmptyState, ErrorState (đều export từ `feedback/Toast.jsx`).

```jsx
<Toast kind="success" title="Đã gửi yêu cầu tư vấn" message="Đội ngũ Toàn Cầu sẽ liên hệ trong 24h." />
<Skeleton width={300} height={200} />
<EmptyState action={<Button variant="outline">Xóa lọc</Button>} />
<ErrorState onRetry={refetch} />
```
