# Báo Cáo Kiểm Thử & Đảm Bảo Chất Lượng

**Dự án:** HBN Pharma Website Redesign  
**QA Lead:** Đỗ Mai Phương  
**Ngày:** 24/11/2026  
**Phiên bản:** 1.0  
**Trạng thái:** ✅ Đủ điều kiện Go-Live (với lưu ý bên dưới)

* * *

## 1\. Phạm Vi Kiểm Thử

| Hạng mục | Phương pháp | Kết quả |
| --- | --- | --- |
| Chức năng các trang | Manual + Playwright E2E | ✅ PASS |
| Đa ngôn ngữ VI/EN | Manual routing test | ✅ PASS |
| Responsive mobile/tablet/desktop | Chrome DevTools + BrowserStack | ✅ PASS |
| Form liên hệ | Unit test + E2E | ✅ PASS |
| Tốc độ tải trang (Lighthouse) | Google Lighthouse CI | ⚠️ 2 lưu ý |
| Bảo mật OWASP Top 10 | ZAP Scanner + Manual | ✅ PASS |
| Kiểm tra XSS / Injection | Manual + automated | ✅ PASS |
| Sanity CMS admin access | Role-based test | ✅ PASS |
| SEO cơ bản | Screaming Frog + Lighthouse | ✅ PASS |

* * *

## 2\. Kết Quả Lighthouse (Performance)

### Desktop

| Chỉ số | Điểm | Tiêu chuẩn |
| --- | --- | --- |
| Performance | 94/100 | ≥ 90 ✅ |
| Accessibility | 96/100 | ≥ 90 ✅ |
| Best Practices | 100/100 | ≥ 90 ✅ |
| SEO | 97/100 | ≥ 90 ✅ |

### Mobile

| Chỉ số | Điểm | Tiêu chuẩn |
| --- | --- | --- |
| Performance | 82/100 | ≥ 80 ✅ |
| Accessibility | 95/100 | ≥ 90 ✅ |
| Best Practices | 100/100 | ≥ 90 ✅ |
| SEO | 97/100 | ≥ 90 ✅ |

**Lưu ý Performance:**

-   ⚠️ **FCP (First Contentful Paint):** 1.8s - khuyến nghị tối ưu ảnh hero banner bằng Next.js `<Image>` với `priority` prop.
-   ⚠️ **LCP (Largest Contentful Paint):** 2.4s - thêm `preload` cho font Be Vietnam Pro từ Google Fonts.

* * *

## 3\. Kiểm Thử Bảo Mật OWASP Top 10

| # | Hạng mục | Kết quả | Ghi chú |
| --- | --- | --- | --- |
| A01 | Broken Access Control | ✅ PASS | Sanity Studio yêu cầu đăng nhập, không lộ endpoint |
| A02 | Cryptographic Failures | ✅ PASS | HTTPS enforced, không lưu dữ liệu nhạy cảm |
| A03 | Injection (XSS/SQLi) | ✅ PASS | Next.js escape output mặc định, form có sanitize |
| A04 | Insecure Design | ✅ PASS | Không có logic nghiệp vụ nhạy cảm |
| A05 | Security Misconfiguration | ✅ PASS | Headers: X-Frame-Options, CSP, HSTS đã cấu hình |
| A06 | Vulnerable Components | ✅ PASS | npm audit: 0 critical, 0 high |
| A07 | Auth Failures | ✅ PASS | Chỉ Sanity Studio cần auth, dùng Sanity identity |
| A08 | Software/Data Integrity | ✅ PASS | Vercel deployment có signature check |
| A09 | Logging Failures | ⚠️ KHẢ NĂNG | Khuyến nghị thêm Sentry error tracking sau go-live |
| A10 | SSRF | ✅ PASS | Không có server-side external fetch từ user input |

* * *

## 4\. Kiểm Thử Đa Ngôn Ngữ

### Routing

-   `/` → redirect đúng sang `/vi` hoặc `/en` theo browser locale ✅
-   `/vi/san-pham` ↔ `/en/products` chuyển đổi chính xác ✅
-   Language Switcher giữ nguyên trang hiện tại khi chuyển ngôn ngữ ✅

### Nội dung

-   Navbar, Footer, Form labels dịch đầy đủ ✅
-   Meta title/description thay đổi theo locale ✅
-   Không có chuỗi hardcode tiếng Việt lọt vào trang EN ✅

* * *

## 5\. Kiểm Thử Form Liên Hệ

| Scenario | Kết quả |
| --- | --- |
| Submit đầy đủ thông tin hợp lệ | ✅ Email gửi thành công qua Resend |
| Submit thiếu trường bắt buộc | ✅ Validation hiển thị đúng |
| Input chứa ký tự đặc biệt (XSS) | ✅ Bị sanitize, không render HTML |
| Submit quá nhanh (spam) | ✅ Rate limit 5 req/phút hoạt động |

* * *

## 6\. Kiểm Thử Responsive

| Breakpoint | Thiết bị đại diện | Kết quả |
| --- | --- | --- |
| 320px | iPhone SE | ✅ PASS |
| 375px | iPhone 14 | ✅ PASS |
| 768px | iPad | ✅ PASS |
| 1024px | iPad Pro ngang | ✅ PASS |
| 1280px | Laptop | ✅ PASS |
| 1920px | Desktop Full HD | ✅ PASS |

* * *

## 7\. Danh Sách Lỗi Cần Sửa Trước Go-Live

| # | Mô tả | Mức độ | Phụ trách |
| --- | --- | --- | --- |
| BUG-01 | Ảnh hero banner chưa dùng `priority` prop của Next.js Image | Trung bình | Đăng Khoa |
| BUG-02 | Font Be Vietnam Pro chưa có `preload` link trong `<head>` | Nhẹ | Đăng Khoa |
| BUG-03 | Nút Language Switcher trên mobile bị che bởi hamburger menu khi scroll | Nhẹ | Đăng Khoa |

* * *

## 8\. Checklist Go-Live

-   [x]  Toàn bộ trang load không lỗi 500/404
-   [x]  Form liên hệ gửi mail thành công
-   [x]  Song ngữ routing hoạt động đúng
-   [x]  Responsive mobile pass
-   [x]  HTTPS enforced
-   [x]  Sanity Studio login hoạt động
-   [ ]  Thêm Sentry error monitoring (sau go-live)
-   [ ]  Setup Google Analytics 4 (Thảo My phối hợp với khách)
-   [ ]  Sitemap XML submit lên Google Search Console

* * *

## 9\. Kết Luận

**Website HBN Pharma đủ điều kiện Go-Live** sau khi Đăng Khoa xử lý 3 bug nhẹ bên trên (ước tính 2-3 giờ).

Điểm Lighthouse đạt ngưỡng tốt, bảo mật OWASP không có lỗ hổng nghiêm trọng, đa ngôn ngữ hoạt động chuẩn. Khuyến nghị thêm Sentry và GA4 trong tuần đầu sau launch.

* * *

*Báo cáo do Đỗ Mai Phương - QA Lead & Security Tester, TechNova Studio.*