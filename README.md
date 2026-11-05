# Invenza — Customer frontend

Frontend khách hàng độc lập, được phát triển từ project POS hiện tại.

## Chạy
Cần Node.js 20.19+ hoặc 22+ và npm.

```sh
npm ci
npm run dev
```

Mở địa chỉ Vite hiển thị (mặc định http://localhost:3000).

```sh
npm run build:react
npm run preview:react
```

Thư mục dist đã kèm bản build. Phục vụ dist qua HTTP; không mở index.html bằng file://. Router dùng hash nên không cần cấu hình rewrite cho các trang con.

## Các trang
- /#/ : Landing, banner, combo, món nổi bật.
- /#/menu : Menu từ dữ liệu POS; lọc, tìm kiếm, tùy chỉnh size/đường/đá/topping, thêm giỏ và thay đổi số lượng.
- /#/checkout : Thông tin giao hàng, số điện thoại hội viên riêng, mã giảm giá riêng, COD.
- /#/confirmation : Mã đơn demo, thông tin giao hàng và chi tiết món.

## Dùng thử
- Hội viên mẫu từ POS: 0900000001, VIP, giảm 10% tự động. Số khác chưa có dữ liệu hội viên.
- CHAO10: đơn từ 100.000đ giảm thêm 10% sau ưu đãi hội viên, tối đa 30.000đ.
- Phí giao hàng minh họa: 15.000đ, miễn từ 150.000đ trước giảm giá.
- Combo và các chính sách giảm giá là cấu hình demo bổ sung, cần được cửa hàng duyệt.
- Chỉ món TS01 có size L +6.000đ theo POS gốc. Combo gồm hai ly M, cùng mức đường/đá, không thêm topping.

## Phần dùng chung và source gốc
Giữ toàn bộ src và assets của project ban đầu trong gói này. Entry src/main.tsx chuyển sang src/customer/CustomerApp.tsx. App.tsx, routes, pages, layouts và component quản trị cũ vẫn còn để tham khảo/tái sử dụng, không đưa vào tuyến khách hàng.

Tái sử dụng trực tiếp: src/data/sales/products.ts, src/components/common/Modal.tsx (focus trap, Escape, trả focus), assets/css/app.css, src/input.css, cấu hình React/TypeScript/Vite/Tailwind. CSS khách hàng nằm tại src/customer/shop.css; dữ liệu combo và tính tiền nằm tại src/customer/model.ts. Không sửa project gốc bên ngoài thư mục này.

## Phạm vi bàn giao
Đây là frontend demo, chưa có backend/API. Giỏ hàng và đơn chỉ nằm trong bộ nhớ phiên, tải lại trang sẽ mất. Không gửi đơn tới POS, không thu tiền và không tích điểm thực. COD là lựa chọn duy nhất; không giả lập thanh toán trực tuyến thành công. Điểm hiển thị chỉ là dự kiến minh họa.

Để vận hành thật cần API menu/tồn kho, xác thực hội viên, tính lại tổng tiền và mã giảm giá ở server, tạo/lưu đơn với khóa chống trùng, tích điểm sau hoàn tất và tích hợp thanh toán nếu cần. Không dùng dữ liệu/giá do trình duyệt gửi làm nguồn quyết định thanh toán.

## Kiểm tra
Đã chạy npm run build:react thành công (TypeScript và Vite). Chưa kiểm tra tương tác trực tiếp trên trình duyệt. Gói không chứa node_modules hay lịch sử .git; package-lock.json được giữ để cài dependency.
