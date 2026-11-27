import { defineType, defineField } from 'sanity';

// ===== Product Schema =====
export const productSchema = defineType({
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tên sản phẩm (VI)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'nameEn', title: 'Product Name (EN)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' }, validation: (r) => r.required() }),
    defineField({ name: 'category', title: 'Danh mục', type: 'string', options: { list: ['otc', 'etc', 'thucpham', 'thietbi'] }, validation: (r) => r.required() }),
    defineField({ name: 'shortDesc', title: 'Mô tả ngắn (VI)', type: 'text', rows: 2 }),
    defineField({ name: 'shortDescEn', title: 'Short Description (EN)', type: 'text', rows: 2 }),
    defineField({ name: 'fullDesc', title: 'Mô tả đầy đủ (VI)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'fullDescEn', title: 'Full Description (EN)', type: 'array', of: [{ type: 'block' }] }),
    defineField({ name: 'ingredients', title: 'Thành phần (VI)', type: 'text' }),
    defineField({ name: 'ingredientsEn', title: 'Ingredients (EN)', type: 'text' }),
    defineField({ name: 'uses', title: 'Công dụng (VI)', type: 'text' }),
    defineField({ name: 'usesEn', title: 'Uses (EN)', type: 'text' }),
    defineField({ name: 'dosage', title: 'Liều dùng (VI)', type: 'text' }),
    defineField({ name: 'dosageEn', title: 'Dosage (EN)', type: 'text' }),
    defineField({ name: 'warnings', title: 'Cảnh báo (VI)', type: 'text' }),
    defineField({ name: 'warningsEn', title: 'Warnings (EN)', type: 'text' }),
    defineField({ name: 'image', title: 'Ảnh chính', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'gallery', title: 'Thư viện ảnh', type: 'array', of: [{ type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'registrationNumber', title: 'Số đăng ký', type: 'string' }),
    defineField({ name: 'manufacturer', title: 'Nhà sản xuất', type: 'string' }),
    defineField({ name: 'isFeatured', title: 'Nổi bật trang chủ', type: 'boolean', initialValue: false }),
    defineField({ name: 'isNew', title: 'Sản phẩm mới', type: 'boolean', initialValue: false }),
    defineField({ name: 'order', title: 'Thứ tự sắp xếp', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'category', media: 'image' },
  },
});

// ===== Post (News/Blog) Schema =====
export const postSchema = defineType({
  name: 'post',
  title: 'Bài viết / Tin tức',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Tiêu đề (VI)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'titleEn', title: 'Title (EN)', type: 'string' }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'excerpt', title: 'Tóm tắt (VI)', type: 'text', rows: 3 }),
    defineField({ name: 'excerptEn', title: 'Excerpt (EN)', type: 'text', rows: 3 }),
    defineField({ name: 'body', title: 'Nội dung (VI)', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'bodyEn', title: 'Body (EN)', type: 'array', of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] }),
    defineField({ name: 'category', title: 'Chuyên mục', type: 'string', options: { list: ['Sức khỏe', 'Dược phẩm', 'Tin công ty', 'Nghiên cứu'] } }),
    defineField({ name: 'image', title: 'Ảnh đại diện', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'publishedAt', title: 'Ngày đăng', type: 'datetime', initialValue: () => new Date().toISOString() }),
    defineField({ name: 'author', title: 'Tác giả', type: 'string' }),
    defineField({ name: 'readTime', title: 'Thời gian đọc (phút)', type: 'number' }),
  ],
  preview: {
    select: { title: 'title', subtitle: 'publishedAt', media: 'image' },
  },
});

// ===== Team Member Schema =====
export const teamMemberSchema = defineType({
  name: 'teamMember',
  title: 'Thành viên đội ngũ',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Họ tên', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'role', title: 'Chức vụ (VI)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'roleEn', title: 'Role (EN)', type: 'string' }),
    defineField({ name: 'photo', title: 'Ảnh', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'bio', title: 'Tiểu sử (VI)', type: 'text' }),
    defineField({ name: 'bioEn', title: 'Bio (EN)', type: 'text' }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'role', media: 'photo' },
  },
});

// ===== Partner Schema =====
export const partnerSchema = defineType({
  name: 'partner',
  title: 'Đối tác',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tên đối tác', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'logo', title: 'Logo', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', media: 'logo' },
  },
});

// ===== Certification Schema =====
export const certificationSchema = defineType({
  name: 'certification',
  title: 'Chứng nhận - Giấy phép',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Tên chứng nhận (VI)', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'nameEn', title: 'Name (EN)', type: 'string' }),
    defineField({ name: 'issuedBy', title: 'Cơ quan cấp', type: 'string' }),
    defineField({ name: 'image', title: 'Hình ảnh chứng nhận', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'validUntil', title: 'Hiệu lực đến', type: 'date' }),
    defineField({ name: 'order', title: 'Thứ tự', type: 'number' }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'issuedBy', media: 'image' },
  },
});

// ===== Site Settings Schema (Hotline, Địa chỉ, Email) =====
export const siteSettingsSchema = defineType({
  name: 'siteSettings',
  title: 'Cài đặt Website & Thông tin liên hệ',
  type: 'document',
  fields: [
    defineField({ name: 'hotline', title: 'Số điện thoại Hotline', type: 'string', initialValue: '028 3930 0000', validation: (r) => r.required() }),
    defineField({ name: 'email', title: 'Email liên hệ', type: 'string', initialValue: 'contact@hbnpharma.com.vn' }),
    defineField({ name: 'addressHcm', title: 'Địa chỉ TP.HCM (VI)', type: 'text', rows: 2, initialValue: '123 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP. Hồ Chí Minh' }),
    defineField({ name: 'addressHcmEn', title: 'Address HCM (EN)', type: 'text', rows: 2, initialValue: '123 Nguyen Thi Minh Khai, Ward 6, District 3, Ho Chi Minh City' }),
    defineField({ name: 'addressHn', title: 'Địa chỉ Hà Nội (VI)', type: 'text', rows: 2, initialValue: '456 Trần Duy Hưng, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội' }),
    defineField({ name: 'addressHnEn', title: 'Address Hanoi (EN)', type: 'text', rows: 2, initialValue: '456 Tran Duy Hung, Trung Hoa, Cau Giay, Hanoi' }),
    defineField({ name: 'workingHours', title: 'Giờ làm việc', type: 'string', initialValue: 'Thứ Hai - Thứ Sáu: 08:00 - 17:30' }),
    defineField({ name: 'facebookUrl', title: 'Đường dẫn Facebook', type: 'url' }),
    defineField({ name: 'zaloPhone', title: 'Số Zalo liên hệ', type: 'string' }),
  ],
  preview: {
    select: { title: 'hotline', subtitle: 'email' },
  },
});
