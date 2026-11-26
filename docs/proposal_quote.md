# Báo Giá & Đề Xuất Hợp Đồng Dịch Vụ
**Dự án:** Thiết kế lại Website Công ty Cổ Phần Dược Phẩm Hiệp Bách Niên (HBN Pharma)  
**Đơn vị thực hiện:** TechNova Studio  
**Client Success Lead:** Vũ Thảo My  
**Ngày lập:** 24/11/2026  
**Hiệu lực báo giá:** 30 ngày

---

## 1. Tóm Tắt Dự Án

| Thông tin | Chi tiết |
|---|---|
| Tên dự án | HBN Pharma Website Redesign |
| Khách hàng | Công ty Cổ Phần Dược Phẩm Hiệp Bách Niên |
| Website cũ | hbnpharma.com.vn |
| Phạm vi | Thiết kế lại toàn bộ, song ngữ VI/EN, có CMS quản trị |
| Tech Stack | Next.js 14, Tailwind CSS, Sanity CMS, Vercel |
| Hosting | Vercel (miễn phí) + tên miền hiện có của khách |

---

## 2. Phạm Vi Công Việc (Scope of Work)

### 2.1 Thiết Kế UI/UX
- Visual Audit website cũ, phân tích điểm cần cải thiện
- Xây dựng Design System: bảng màu, typography, spacing tokens
- Wireframe toàn bộ trang chính (desktop + mobile)
- Design Tokens chuẩn theo bộ nhận diện thương hiệu HBN

### 2.2 Lập Trình Frontend
- Next.js 14 (App Router) + TypeScript
- Routing song ngữ Tiếng Việt / English (`next-intl`)
- Responsive toàn bộ: mobile, tablet, desktop
- Các trang: Trang chủ, Sản phẩm, Chi tiết sản phẩm, Về chúng tôi, Tin tức, Liên hệ

### 2.3 Hệ Thống Quản Trị Nội Dung (CMS)
- Sanity.io Headless CMS - giao diện thân thiện không cần biết lập trình
- Quản trị: bài viết, sản phẩm, thành viên đội ngũ, đối tác, chứng nhận
- Tất cả nội dung đều hỗ trợ song ngữ VI/EN trong CMS
- Studio URL riêng biệt: `studio.hbnpharma.com.vn`

### 2.4 Tích Hợp & Chức Năng
- Form liên hệ gửi email (Resend API - 100 email/ngày miễn phí)
- Google Maps nhúng 2 văn phòng (HCM + Hà Nội)
- Migration nội dung từ website cũ (giữ lại văn bản, hình ảnh)
- Cấu hình domain: trỏ DNS từ Tenten sang Vercel

### 2.5 Kiểm Thử & Bàn Giao
- Playwright E2E test toàn bộ luồng chính
- Lighthouse audit: Performance, SEO, Accessibility
- Kiểm tra bảo mật OWASP Top 10
- Hướng dẫn sử dụng CMS cho nhân viên khách hàng

---

## 3. Báo Giá Chi Tiết

### Hạng mục một lần (One-time)

| # | Hạng mục | Đơn giá | Ghi chú |
|---|---|---|---|
| 1 | Phân tích & Kiến trúc hệ thống | 3.000.000 đ | PM + Tech Lead |
| 2 | Thiết kế UI/UX + Design System | 8.000.000 đ | Lead UI/UX |
| 3 | Lập trình Frontend (7 trang + layout) | 18.000.000 đ | Senior Frontend |
| 4 | Backend / Sanity CMS setup + schema | 7.000.000 đ | Backend Lead |
| 5 | Tích hợp song ngữ VI/EN | 3.000.000 đ | Frontend |
| 6 | Form liên hệ + API email | 2.000.000 đ | Backend |
| 7 | Migration nội dung từ website cũ | 2.000.000 đ | Frontend + PM |
| 8 | Kiểm thử QA + Bảo mật OWASP | 4.000.000 đ | QA Lead |
| 9 | Deploy Vercel + cấu hình DNS | 1.000.000 đ | Backend + PM |
| 10 | Hướng dẫn sử dụng CMS (tài liệu + buổi demo) | 1.000.000 đ | CS Lead |
| | **Tổng chi phí một lần** | **49.000.000 đ** | |

> **Ưu đãi ra mắt (nếu ký hợp đồng trước 15/12/2026):** Giảm 10% = **44.100.000 đ**

### Chi Phí Vận Hành Hàng Tháng (Sau Go-Live)

| Dịch vụ | Chi phí/tháng | Ghi chú |
|---|---|---|
| Hosting Vercel | **0 đ** | Miễn phí cho quy mô hiện tại |
| Sanity CMS | **0 đ** | Free tier đủ dùng (20 user, 10GB) |
| Email (Resend) | **0 đ** | 100 email/ngày miễn phí |
| Domain (đang có) | Giữ nguyên | Khách tự gia hạn với Tenten |
| **Tổng vận hành** | **0 đ/tháng** | |

---

## 4. Gói Bảo Hành & Hỗ Trợ

### Bảo hành 12 tháng (bao gồm trong hợp đồng)
- Sửa tất cả lỗi kỹ thuật phát sinh sau bàn giao
- Hỗ trợ cấu hình CMS khi có thay đổi cấu trúc nội dung
- Phản hồi yêu cầu hỗ trợ trong vòng 24 giờ làm việc

### Hỗ Trợ Mở Rộng (tùy chọn, sau 12 tháng)
| Gói | Giá/tháng | Nội dung |
|---|---|---|
| Basic | 1.500.000 đ | Hỗ trợ 4h/tháng, sửa lỗi, cập nhật minor |
| Standard | 3.000.000 đ | Hỗ trợ 8h/tháng + thêm tính năng nhỏ |
| Premium | 5.000.000 đ | Hỗ trợ 16h/tháng + ưu tiên phản hồi 4h |

---

## 5. Timeline Thực Hiện

```
Tuần 1-2  │ Kickoff, kiến trúc, Design System, wireframe
Tuần 3-4  │ Lập trình Frontend - Layout, Homepage, Sản phẩm
Tuần 5    │ Lập trình Frontend - Tin tức, Liên hệ, Về chúng tôi
           │ Backend - Sanity CMS setup và schema
Tuần 6    │ Tích hợp Sanity vào Frontend, migration nội dung
Tuần 7    │ Kiểm thử QA, bug fix, Lighthouse audit
Tuần 8    │ Nghiệm thu, deploy Vercel, cấu hình DNS, bàn giao
```

**Tổng thời gian:** 6-8 tuần kể từ ngày ký hợp đồng và nhận đặt cọc.

---

## 6. Điều Khoản Hợp Đồng

### Phương thức thanh toán
| Đợt | Mốc | Tỷ lệ | Số tiền (trước ưu đãi) |
|---|---|---|---|
| Đặt cọc | Ký hợp đồng | 30% | 14.700.000 đ |
| Giữa dự án | Hoàn thành Frontend (Tuần 5) | 40% | 19.600.000 đ |
| Nghiệm thu | Go-live thành công | 30% | 14.700.000 đ |

### Điều khoản chính
- **Quyền sở hữu code:** Toàn bộ mã nguồn thuộc về khách hàng sau khi thanh toán đủ.
- **Thay đổi phạm vi:** Thay đổi lớn ngoài SOW sẽ được báo giá bổ sung và ký phụ lục.
- **Nội dung:** Khách hàng cung cấp nội dung văn bản và hình ảnh theo tiến độ. Delay nội dung có thể kéo dài timeline.
- **Bảo mật:** TechNova Studio cam kết bảo mật thông tin dự án.
- **Bảo hành:** 12 tháng kể từ ngày Go-Live chính thức.

---

## 7. Thông Tin Liên Hệ & Ký Kết

**TechNova Studio**  
Client Success Lead: Vũ Thảo My  
Email: thaomy@technova.studio  
Hotline: 0901 234 567

---

*Báo giá có hiệu lực 30 ngày kể từ ngày lập. Giá trên đã bao gồm VAT.*  
*TechNova Studio - Chuyên thiết kế và phát triển giải pháp số cho doanh nghiệp.*
