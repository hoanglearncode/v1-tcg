window.TCG_DATA={
industries:['F&B','Thời trang','Mỹ phẩm','Gia dụng','Công nghệ'],
locations:[
{id:'HN-BB-042',lat:21.003,lng:105.821,img:'https://picsum.photos/seed/tcg-metro-3/640/480',name:'Ngã tư Sở, Hà Nội',type:'Billboard',city:'Hà Nội',size:'8×12m',priceN:45,status:'available',
 scores:{'F&B':[92,'Lưu lượng cao, gần khu ăn uống'],'Thời trang':[74,'Trục mua sắm nội đô'],'Mỹ phẩm':[70,'Tệp trẻ đô thị'],'Gia dụng':[66,'Khu dân cư đông'],'Công nghệ':[62,'Gần trường đại học']}},
{id:'HN-AP-011',lat:21.214,lng:105.803,img:'https://picsum.photos/seed/tcg-airport-noibai/640/480',name:'Nội Bài T2, băng chuyền đến',type:'Sân bay',city:'Hà Nội',size:'6×4m',priceN:60,status:'available',
 scores:{'F&B':[85,'Tiếp cận khách bay, thu nhập cao'],'Thời trang':[88,'Khách quốc tế, chi trả cao'],'Mỹ phẩm':[84,'Khách du lịch mua sắm'],'Gia dụng':[58,'Ít quyết định mua tại chỗ'],'Công nghệ':[80,'Doanh nhân công tác']}},
{id:'HN-LED-007',lat:21.016,lng:105.779,img:'https://picsum.photos/seed/tcg-metro-6/640/480',name:'LED Phạm Hùng, Hà Nội',type:'LED',city:'Hà Nội',size:'10×6m',priceN:40,status:'soon',
 scores:{'F&B':[71,'Giờ cao điểm văn phòng'],'Thời trang':[65,'Trục đường lớn'],'Mỹ phẩm':[60,'Tệp văn phòng'],'Gia dụng':[55,'Xe qua nhanh'],'Công nghệ':[78,'Khu văn phòng, đúng tệp công nghệ']}},
{id:'SG-BB-118',lat:10.801,lng:106.711,img:'https://picsum.photos/seed/tcg-metro-2/640/480',name:'Cầu vượt Hàng Xanh, TP.HCM',type:'Billboard',city:'TP.HCM',size:'12×8m',priceN:55,status:'available',
 scores:{'F&B':[81,'Nút giao lưu lượng lớn'],'Thời trang':[72,'Cửa ngõ trung tâm'],'Mỹ phẩm':[69,'Tệp trẻ năng động'],'Gia dụng':[73,'Trục về khu dân cư'],'Công nghệ':[64,'Đa dạng tệp']}},
{id:'SG-AP-023',lat:10.813,lng:106.664,img:'https://picsum.photos/seed/tcg-airport-tsn/640/480',name:'Tân Sơn Nhất, sảnh quốc nội',type:'Sân bay',city:'TP.HCM',size:'5×3m',priceN:58,status:'available',
 scores:{'F&B':[79,'Khách chờ bay, thời gian tiếp xúc dài'],'Thời trang':[83,'Tệp trung–cao cấp'],'Mỹ phẩm':[86,'Khách bay nữ giới cao'],'Gia dụng':[54,'Ít liên quan bối cảnh'],'Công nghệ':[76,'Doanh nhân nội địa']}},
{id:'DN-PN-031',lat:16.061,lng:108.245,img:'https://picsum.photos/seed/tcg-ooh-11/640/480',name:'Pano Võ Nguyên Giáp, Đà Nẵng',type:'Pano',city:'Đà Nẵng',size:'6×9m',priceN:32,status:'booked',
 scores:{'F&B':[68,'Trục du lịch biển'],'Thời trang':[61,'Khách du lịch'],'Mỹ phẩm':[63,'Tệp du lịch nghỉ dưỡng'],'Gia dụng':[48,'Ngoài bối cảnh mua'],'Công nghệ':[45,'Tệp không tập trung']}}],
fmt:n=>n.toLocaleString('vi-VN')+'.000.000đ/tháng',
services:[
{icon:'plane',name:'Sân bay',slug:'san-bay',desc:'Nội Bài, Tân Sơn Nhất, Đà Nẵng. Nhóm khách chi trả cao.',from:35,count:'~730 mặt biển',feats:['Băng chuyền, sảnh đến/đi, ống lồng','Tệp khách doanh nhân, du lịch, quốc tế','Thời gian tiếp xúc dài khi chờ chuyến']},
{icon:'rectangle-horizontal',name:'Billboard',slug:'billboard',desc:'Tấm lớn cao tốc, cửa ngõ và nội đô toàn quốc.',from:40,count:'30+ tỉnh/thành',feats:['Vị trí nút giao, cửa ngõ lưu lượng cao','Khảo sát + thiết kế + in ấn + thi công trọn gói','Hỗ trợ giấy phép quảng cáo']},
{icon:'monitor',name:'Màn hình LED',slug:'led',desc:'LED ngoài trời & LCD/frame thang máy, TTTM.',from:25,count:'Phát theo khung giờ',feats:['Đặt theo spot 15-30 giây, đổi nội dung nhanh','Khung giờ vàng khu văn phòng, TTTM','Báo cáo tần suất phát thực tế']},
{icon:'lamp',name:'Pano · Hộp đèn',slug:'pano',desc:'Nhà chờ xe bus, giải phân cách, tuyến phố.',from:8,count:'Chuỗi phủ tuyến phố',feats:['Chi phí vào cửa thấp, phủ dày theo tuyến','Phù hợp chiến dịch khu vực, mở điểm bán','Combo nhiều mặt giảm chi phí/điểm']}],
steps:[['map','Khám phá bản đồ & lọc vị trí'],['sparkles','Xem điểm AI theo ngành hàng'],['square-check','Chọn vị trí muốn thuê'],['file-text','Nhận báo giá PDF nháp tự động'],['phone','Sales liên hệ & chốt']],
clusters:[[105.72,21.06,15],[105.75,20.98,8],[105.76,21.10,7],[105.78,21.05,12],[105.80,20.95,5],[105.80,21.09,13],[105.81,21.00,9],[105.82,21.06,20],[105.83,20.97,6],[105.84,21.03,27],[105.85,21.10,18],[105.86,20.99,11],[105.87,21.05,4],[105.88,21.01,13],[105.89,21.08,16],[105.90,20.96,5],[105.91,21.03,28],[105.92,21.07,9],[105.94,21.00,3],[105.95,21.05,16],[105.77,20.93,3],[105.86,20.92,22]],
newsTags:['Tất cả','Hệ thống vị trí','Sản phẩm số','Hợp tác','Thị trường OOH'],
offices:[
{city:'Hà Nội',role:'Trụ sở chính',addr:'265 Thụy Khuê, Phường Tây Hồ, TP Hà Nội'},
{city:'TP. Hồ Chí Minh',role:'Văn phòng đại diện',addr:'Khu vực miền Nam'},
{city:'Đà Nẵng',role:'Văn phòng đại diện',addr:'Khu vực miền Trung'},
{city:'Cần Thơ',role:'Văn phòng đại diện',addr:'Khu vực Đồng bằng sông Cửu Long'},
{city:'Nghệ An',role:'Văn phòng đại diện',addr:'Khu vực Bắc Trung Bộ'}
],
capabilities:[
{icon:'rectangle-horizontal',label:'Biển quảng cáo tấm lớn ngoài trời'},
{icon:'plane',label:'Quảng cáo tại sân bay'},
{icon:'bus',label:'Quảng cáo tại nhà chờ, trên xe bus, taxi'},
{icon:'monitor',label:'Màn hình LED ngoài trời'},
{icon:'tablet-smartphone',label:'LCD/frame tại thang máy, TTTM'},
{icon:'compass',label:'Tư vấn, quy hoạch quảng cáo'},
{icon:'palette',label:'Thiết kế, in ấn, thi công'},
{icon:'calendar-days',label:'Roadshow, tổ chức sự kiện'}
],
news:[
{img:'https://picsum.photos/seed/tcg-metro-8/800/450',date:'02.07.2026',tag:'Hệ thống vị trí',title:'Toàn Cầu mở rộng hệ thống LED tại trục Phạm Hùng',excerpt:'Bổ sung 4 màn hình LED mới tại khu văn phòng phía Tây Hà Nội, khai thác từ quý 3/2026.'},
{img:'https://picsum.photos/seed/tcg-metro-2/800/450',date:'18.06.2026',tag:'Sản phẩm số',title:'Ra mắt bản đồ vị trí OOH tra cứu trực tuyến',excerpt:'Khách hàng tự khám phá vị trí, xem điểm AI theo ngành hàng và tạo báo giá PDF trong vài phút.'},
{img:'https://picsum.photos/seed/tcg-ooh-11/800/450',date:'05.06.2026',tag:'Hợp tác',title:'Hợp tác quảng cáo tại nhà chờ xe bus 5 tỉnh thành',excerpt:'Mạng lưới nhà chờ mở rộng tại Hà Nội, TP.HCM, Đà Nẵng, Cần Thơ và Nghệ An.'},
{img:'https://picsum.photos/seed/tcg-metro-12/800/450',date:'22.05.2026',tag:'Thị trường OOH',title:'Xu hướng OOH 2026: dữ liệu vị trí và điểm phù hợp ngành hàng',excerpt:'Quảng cáo ngoài trời chuyển dịch sang mô hình chọn vị trí theo dữ liệu lưu lượng và tệp khách.'},
{img:'https://picsum.photos/seed/tcg-airport-noibai/800/450',date:'10.05.2026',tag:'Hệ thống vị trí',title:'Bổ sung 12 mặt biển tại nhà ga T2 Nội Bài',excerpt:'Các vị trí băng chuyền và sảnh đến quốc tế sẵn sàng khai thác từ tháng 6.'},
{img:'https://picsum.photos/seed/tcg-metro-4/800/450',date:'28.04.2026',tag:'Hợp tác',title:'Đồng hành cùng hãng hàng không trong chiến dịch hè 2026',excerpt:'Chuỗi vị trí sân bay hai miền phục vụ chiến dịch quảng bá đường bay mới.'}],
cases:[{img:'https://picsum.photos/seed/tcg-case-fnb/800/450',brand:'Nhãn hàng F&B',industry:'F&B',result:'Phủ 12 billboard nội đô Hà Nội'},{img:'https://picsum.photos/seed/tcg-metro-4/800/450',brand:'Hãng hàng không',industry:'Hàng không',result:'Chuỗi vị trí sân bay 2 miền'},{img:'https://picsum.photos/seed/tcg-case-tech/800/450',brand:'Thương hiệu điện tử',industry:'Điện tử',result:'LED giờ vàng trục văn phòng'}]
};
