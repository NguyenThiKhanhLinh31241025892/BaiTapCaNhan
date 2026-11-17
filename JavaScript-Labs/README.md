# JavaScript-Labs – Phát triển ứng dụng TMĐT

## Thông tin sinh viên
- Họ tên: Nguyễn Thị Khánh Linh
- MSSV: 31241025892
- Lớp học phần: [Bổ sung]
- GitHub Repository: [Bổ sung]
- GitHub Pages: [Bổ sung]

## Cấu trúc
- `index.html`: Trang portfolio chính, liên kết 3 Lab.
- `Lab08/`: Gói bài trước, Exercise 8.1–8.6 (chưa bao gồm 8.7–8.11).
- `Lab09/Exercise01` ... `Exercise08`: 8 bài DOM & Events; `app.js` cho từng bài.
- `Lab10/Exercise01` ... `Exercise10`: 10 bài jQuery; thư viện jQuery `js/jquery-3.1.1.min.js` từ ZIP gốc.
- `Lab10/data/cities.json`: Bộ dữ liệu **minh họa dự phòng**, không phải dữ liệu được xác minh từ dịch vụ tác giả.

## Cách chạy
1. Thử tại máy: từ thư mục chứa `JavaScript-Labs`, chạy `python -m http.server 8000` rồi mở `http://localhost:8000/JavaScript-Labs/`.
2. Bấm qua trang giới thiệu của từng Lab, sau đó chọn Exercise.
3. Với Lab 09 Exercise 9.6: mở DevTools (F12) → Sources → file `app.js`, đặt breakpoint ở dòng `alert` rồi rê chuột qua ô `div1`–`div5`.
4. Với Lab 10 Exercise 10.9 và 10.10: cần chạy trên localhost qua HTTP hoặc qua GitHub Pages; mở bằng `file://` có thể bị chặn AJAX. Chương trình thử endpoint HTTPS `randyconnolly.com` trong tài liệu trước, sau đó tự chuyển sang GET file `cities.json` minh họa nếu dịch vụ cũ không dùng được.

## Đưa lên GitHub Pages
1. Sao chép **thư mục** `JavaScript-Labs` vào repository đã dùng cho các bài trước.
2. Cập nhật thông tin cá nhân, GitHub và đoạn tự đánh giá trên trang `index.html` (đề yêu cầu tự viết bằng trải nghiệm bản thân).
3. Commit, push và dùng cấu hình Pages hiện tại. Nếu Pages xuất bản từ nhánh `main` / root, đường dẫn sẽ có dạng `https://<username>.github.io/<repo>/JavaScript-Labs/`.
4. Kiểm tra các đường dẫn, ảnh, Javascript và jQuery tại URL đã công khai.
