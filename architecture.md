# architecture.md - HBN Pharma Website Redesign
# Tác giả: Trần Minh Trí - PM & Tech Lead | TechNova Studio
# Phiên bản: 1.1 (cập nhật 24/11/2026 - thêm deploy strategy)

---

## 1. Tổng quan dự án

**Khách hàng:** Công ty Cổ Phần Dược Phẩm Hiệp Bách Niên (HBN Pharma)
**Website cũ:** https://www.hbnpharma.com.vn/
**Yêu cầu chính:** Thiết kế lại toàn bộ website, song ngữ Việt - Anh, CMS quản trị bài viết không cần lập trình, dễ nâng cấp sau này.

---

## 2. Tech Stack đã chốt

| Lớp | Công nghệ | Lý do |
|---|---|---|
| Frontend | Next.js 14 (App Router) + TypeScript | SSR tốt, i18n sẵn, dễ nâng cấp |
| Styling | Tailwind CSS + shadcn/ui | Tốc độ phát triển, dễ customize |
| CMS | Sanity.io (headless CMS) | Studio GUI thân thiện, không cần code để sửa nội dung |
| Đa ngôn ngữ | next-intl | Routing /vi/... và /en/... tự động |
| Hosting | Vercel (miễn phí) | CDN toàn cầu, SSL tự động, deploy tự động |
| Domain | Giữ hbnpharma.com.vn ở Tenten, trỏ DNS về Vercel | Zero migration risk |
| Email API | Resend (100 email/ngày free tier) | Form liên hệ |
| Maps | Google Maps Embed API | Bản đồ 2 văn phòng |

---

## 3. Cấu trúc trang

- **Trang chủ** - Hero, stats, sản phẩm nổi bật, giới thiệu, chứng nhận, đối tác, tin tức mới
- **Sản phẩm** - Danh mục filter, lưới sản phẩm, trang chi tiết từng sản phẩm
- **Về chúng tôi** - Lịch sử timeline, sứ mệnh & tầm nhìn, giá trị cốt lõi, đội ngũ lãnh đạo
- **Chứng nhận** - Danh sách chứng nhận GDP, GMP, ISO...
- **Tin tức** - Blog list + chi tiết, phân loại chuyên mục
- **Liên hệ** - Form gửi mail + thông tin 2 văn phòng + Google Maps

---

## 4. Cấu trúc i18n

```
/vi/              -> Trang chủ tiếng Việt
/en/              -> Homepage in English
/vi/san-pham      -> Sản phẩm (VI)
/en/products      -> Products (EN)
/vi/gioi-thieu    -> Về chúng tôi (VI)
/en/about         -> About (EN)
/vi/tin-tuc       -> Tin tức (VI)
/en/news          -> News (EN)
/vi/lien-he       -> Liên hệ (VI)
/en/contact       -> Contact (EN)
```

Language switcher: toggle button VI/EN cố định trong Navbar, giữ nguyên đường dẫn khi chuyển.

---

## 5. CMS Sanity - Schemas đã định nghĩa

| Schema | Mô tả | Có song ngữ |
|---|---|---|
| product | Sản phẩm dược phẩm | Có (name, desc, body VI + EN) |
| post | Bài viết / Tin tức | Có (title, excerpt, body VI + EN) |
| teamMember | Thành viên đội ngũ | Có (role, bio VI + EN) |
| partner | Đối tác | Chỉ logo + tên |
| certification | Chứng nhận, giấy phép | Có (name VI + EN) |

Sanity Studio URL: `studio.hbnpharma.com.vn` (deploy trên Vercel cùng repo)

---

## 6. Deploy Strategy (Phương án 1 - Vercel)

```
GitHub repo
    |
    v Merge to main
Vercel (auto deploy)
    |-- hbnpharma.com.vn (Next.js frontend, DNS từ Tenten)
    |-- studio.hbnpharma.com.vn (Sanity Studio)
    
Sanity backend: hosted by Sanity.io (SaaS)
Email: Resend API
```

**Checklist deploy:**
- [ ] Tạo Vercel account, kết nối GitHub repo
- [ ] Tạo Sanity project, lấy Project ID và Dataset
- [ ] Điền env vars: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `RESEND_API_KEY`
- [ ] Trỏ CNAME của hbnpharma.com.vn từ Tenten về Vercel
- [ ] Deploy Sanity Studio lên `studio.hbnpharma.com.vn`
- [ ] Test routing song ngữ /vi và /en
- [ ] Test form liên hệ gửi email thành công

---

## 7. Phân công team

| Thành viên | Nhiệm vụ | Trạng thái |
|---|---|---|
| Khánh Linh (UI/UX) | Design Tokens, Wireframe toàn bộ trang | DONE |
| Đăng Khoa (Frontend) | Next.js skeleton, trang chủ, liên hệ | DONE |
| Đăng Khoa (Frontend) | Trang Sản phẩm, Về chúng tôi, Tin tức, chi tiết SP | DONE |
| Quốc Huy (Backend) | Sanity schemas, Studio config, GROQ queries | DONE |
| Mai Phương (QA) | Test đa ngôn ngữ, Lighthouse, OWASP | DONE |
| Thảo My (CS) | Báo giá chi tiết, timeline, hợp đồng | DONE |

---

## 8. Nội dung migration

Nội dung từ website cũ hbnpharma.com.vn sẽ được:
1. Giữ nguyên trong giai đoạn đầu (placeholder text + ảnh cũ)
2. Khách hàng tự cập nhật qua Sanity Studio sau go-live
3. Nhà phát triển hỗ trợ import hàng loạt nếu cần

---

## 9. Timeline ước tính

| Giai đoạn | Nội dung | Thời gian |
|---|---|---|
| Design | Design Tokens + Wireframe | 1 tuần |
| Frontend | Toàn bộ trang + i18n | 2-3 tuần |
| Backend | Sanity setup + schemas | 1 tuần |
| Integration | Nối frontend + Sanity | 1 tuần |
| QA + Fix | Test + sửa lỗi | 1 tuần |
| Go-live | Deploy + DNS + UAT | 3-5 ngày |
| **Tổng** | | **6-8 tuần** |
