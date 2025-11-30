# UIT_WEB_LAB4
# React Intermediate Lab (Frontend only)

Ứng dụng Vite + React chứa toàn bộ bài tập (mỗi trang một section). Màu nền #F1F3E0, tiêu đề #778873, nút/tab #D2DCB6, font Arial.

## Chạy ứng dụng
```bash
npm install
npm run dev
```
Vite phục vụ tại http://localhost:5173. Mở trình duyệt và dùng thanh điều hướng để truy cập từng bài.

## API mẫu
Các trang PostFetcher/BlogDash gọi trực tiếp JSONPlaceholder:
- Danh sách: https://jsonplaceholder.typicode.com/posts
- Chi tiết: https://jsonplaceholder.typicode.com/posts/:id

## Nội dung
- useEffect concepts, dependency arrays, MouseTracker với cleanup
- useRef UncontrolledLogin, controlled signup form
- PostFetcher với loading/error, demo Router cơ bản và nested params
- Context toggle, custom hook useLocalStorage
- BlogDash mini app với ProtectedRoute, useFetch, useParams, login redirect

## SSH key (gợi ý push)
Nếu cần push qua SSH, tạo khóa mới (không commit file khóa vào repo):
```bash
ssh-keygen -t ed25519 -C "github-ssh" -f ~/.ssh/id_ed25519 -N ""
cat ~/.ssh/id_ed25519.pub  # copy lên GitHub > Settings > SSH and GPG keys
ssh -T git@github.com      # kiểm tra kết nối
```
Sau đó đặt remote dạng `git@github.com:<username>/<repo>.git` và dùng `git push -u origin HEAD`.