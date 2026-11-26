# Wireframe - HBN Pharma Website Redesign
# Tác giả: Nguyễn Khánh Linh - Lead UI/UX | TechNova Studio
# Ngày: 24/11/2026

---

## TRANG CHỦ (Homepage)

```
+--------------------------------------------------+
|  [NAVBAR]                                        |
|  Logo HBN  |  Sản phẩm  Giới thiệu  Tin tức     |
|            |  Chứng nhận  Liên hệ   [VI | EN]   |
+--------------------------------------------------+

[HERO SECTION - full width, min-height: 600px]
+--------------------------------------------------+
| Background: gradient primary-800 -> primary-600  |
|                                                  |
|   Together for long life                         |
|   [H1] Dược Phẩm Chất Lượng                     |
|        Vì Sức Khỏe Cộng Đồng                    |
|   [P] 20+ năm kinh nghiệm...                    |
|                                                  |
|   [CTA: Xem sản phẩm]  [CTA ghost: Liên hệ]    |
|                                                  |
|          [Product image mockup - right]          |
+--------------------------------------------------+

[STATS BAR - bg: white, border-bottom, py-8]
+----------+----------+----------+----------+
|   20+    |   200+   |   500+   |   10M+   |
| Năm KN   | Sản phẩm | Nhà PP   | KH tin dùng |
+----------+----------+----------+----------+

[FEATURED PRODUCTS - py-20, bg: neutral-50]
+--------------------------------------------------+
|  ### Sản Phẩm Nổi Bật                           |
|  [Tab: Tất cả | OTC | ETC | Thực phẩm CN]       |
|                                                  |
|  +------+  +------+  +------+  +------+          |
|  | Img  |  | Img  |  | Img  |  | Img  |          |
|  | Name |  | Name |  | Name |  | Name |          |
|  | Desc |  | Desc |  | Desc |  | Desc |          |
|  | [Btn]|  | [Btn]|  | [Btn]|  | [Btn]|          |
|  +------+  +------+  +------+  +------+          |
|                                                  |
|            [Xem tất cả sản phẩm ->]              |
+--------------------------------------------------+

[ABOUT SNIPPET - py-20, bg: white]
+------------------------+------------------------+
|  ### Về HBN Pharma     |  [Image: facility]      |
|                        |                         |
|  Hơn 20 năm thành lập |                         |
|  ...                   |                         |
|                        |                         |
|  [X] GMP-WHO certified |                         |
|  [X] ISO 9001:2015     |                         |
|  [X] GDP certified     |                         |
|                        |                         |
|  [Tìm hiểu thêm ->]   |                         |
+------------------------+------------------------+

[CERTIFICATIONS - py-16, bg: primary-50]
+--------------------------------------------------+
|  ### Chứng Nhận & Tiêu Chuẩn                    |
|                                                  |
|  [GMP] [GDP] [ISO 9001] [WHO] [...]              |
+--------------------------------------------------+

[PARTNERS - py-16, bg: white]
+--------------------------------------------------+
|  ### Đối Tác Tin Cậy                            |
|  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]       |
+--------------------------------------------------+

[LATEST NEWS - py-16, bg: neutral-50]
+--------------------------------------------------+
|  ### Tin Tức & Sức Khỏe                         |
|                                                  |
|  +--large card--+  +card-+  +card-+              |
|  |   Big post   |  | P2  |  | P3  |              |
|  |   featured   |  |     |  |     |              |
|  +--------------+  +-----+  +-----+              |
|                                                  |
|            [Xem tất cả tin tức ->]               |
+--------------------------------------------------+

[FOOTER - bg: primary-800, text: white]
+----------+----------+----------+----------+
| Logo HBN | Sản phẩm | Về chúng | Liên hệ  |
| Tagline  | - OTC    | tôi      | HCM addr |
| Social   | - ETC    | - Lịch sử| HN addr  |
| icons    | - TPCN   | - Đội ngũ| Email    |
+----------+----------+----------+----------+
| (c) 2026 HBN Pharma. All rights reserved. |
+--------------------------------------------+
```

---

## TRANG SẢN PHẨM (Products)

```
[HERO - compact, bg: primary-800]
+--------------------------------------------------+
|  Sản Phẩm                                        |
|  Hơn 200 sản phẩm chất lượng cao               |
+--------------------------------------------------+

[FILTER BAR - sticky, bg: white, border-b]
+--------------------------------------------------+
| [Tất cả] [OTC] [ETC] [TPCN] [Thiết bị]  [Search]|
+--------------------------------------------------+

[PRODUCT GRID - py-12, bg: neutral-50]
+--------+  +--------+  +--------+  +--------+
| [Img]  |  | [Img]  |  | [Img]  |  | [Img]  |
| [Name] |  | [Name] |  | [Name] |  | [Name] |
| [Desc] |  | [Desc] |  | [Desc] |  | [Desc] |
| [Btn]  |  | [Btn]  |  | [Btn]  |  | [Btn]  |
+--------+  +--------+  +--------+  +--------+
                 ... (8 cards per row of 4)

[CTA DISTRIBUTOR - py-16, bg: primary-800]
Trở thành nhà phân phối | [Liên hệ ngay]
```

---

## TRANG CHI TIẾT SẢN PHẨM

```
[Breadcrumb: Trang chủ / Sản phẩm / Tên SP]

+------------------------+------------------------+
|  [Product Image]       |  [Category badge]       |
|  [Gallery thumbnails]  |  [H1 Product Name]      |
|                        |  [Short description]    |
|                        |                         |
|                        |  --- Thành phần ---     |
|                        |  --- Công dụng ---      |
|                        |  --- Liều dùng ---      |
|                        |  --- Cảnh báo ---       |
|                        |                         |
|                        |  [Liên hệ] [Xem thêm]  |
+------------------------+------------------------+

[Related products]
```

---

## TRANG VỀ CHÚNG TÔI (About)

```
[HERO - py-20, bg: primary-800]
Về Chúng Tôi | 20+ năm đồng hành sức khỏe

[MISSION & VISION - py-20, bg: white]
+------------------------+------------------------+
|  ### Sứ mệnh & Tầm nhìn                        |
|  [Border-left card: Sứ mệnh]                   |
|  [Border-left card: Tầm nhìn]                  |
+------------------------+------------------------+
|  Stats: 20+ | 200+ | 500+ | 10M+              |
+------------------------+------------------------+

[TIMELINE - py-20, bg: neutral-50]
### Lịch Sử Phát Triển
         2003
           |
     [milestone card]
           |
         2008
     [milestone card]
           ... (zig-zag layout)

[CORE VALUES - py-20, bg: white, 4-col grid]
[icon] Chất lượng
[icon] Tin cậy
[icon] Đổi mới
[icon] Trách nhiệm

[LEADERSHIP - py-20, bg: neutral-50]
### Đội Ngũ Lãnh Đạo
+--------+  +--------+  +--------+  +--------+
| Avatar |  | Avatar |  | Avatar |  | Avatar |
| Name   |  | Name   |  | Name   |  | Name   |
| Role   |  | Role   |  | Role   |  | Role   |
+--------+  +--------+  +--------+  +--------+
```

---

## TRANG LIÊN HỆ (Contact)

```
[HERO - compact, bg: primary-800]
Liên Hệ | Chúng tôi luôn sẵn sàng hỗ trợ

[CONTACT CONTENT - py-20]
+------------------------+------------------------+
|  ### Thông Tin Liên Hệ |  ### Gửi Tin Nhắn      |
|                        |                        |
|  HCM Office:           |  [Họ tên*]             |
|  Địa chỉ...            |  [Email*]              |
|  SĐT                   |  [Điện thoại]          |
|                        |  [Chủ đề]              |
|  HN Office:            |  [Nội dung*]           |
|  Địa chỉ...            |                        |
|  SĐT                   |  [Gửi tin nhắn ->]     |
|                        |                        |
|  Email: info@hbn...    |                        |
+------------------------+------------------------+

[MAP - full width, height: 400px]
Google Maps embed - 2 markers (HCM + HN)
```

---

## MOBILE BREAKPOINTS

```
Tất cả grid 4-col -> 1-col trên mobile (< 768px)
Navbar -> Hamburger menu + slide drawer
Hero -> Text centered, full width
Timeline -> Vertical stack (không zig-zag)
Contact -> Form trên, Info dưới
```

---

## NOTES CHO ĐĂNG KHOA

- Navbar: `fixed top-0`, `backdrop-blur-sm` khi scroll, logo trái, menu giữa, language switcher phải
- Màu hover tất cả links: `text-primary-600`, `underline`
- Card product: `hover:shadow-md`, `hover:-translate-y-0.5`, `transition-all duration-200`
- CTA button primary: `bg-primary-500 hover:bg-primary-600`, border-radius: `rounded-xl`
- Section spacing: `py-20` desktop, `py-12` mobile (`md:py-20`)
- Container max-width: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
