import {Link} from '@/navigation';

const POSTS = [
  { id: 1, slug: 'vitamin-c-va-suc-de-khang', title: 'Vitamin C và vai trò tăng cường sức đề kháng', excerpt: 'Tìm hiểu tại sao Vitamin C là vi chất thiết yếu trong mùa cúm và cách bổ sung đúng liều lượng.', date: '2026-11-10', category: 'Sức khỏe', readTime: '4 phút' },
  { id: 2, slug: 'gdp-trong-phan-phoi-duoc-pham', title: 'Tiêu chuẩn GDP và tầm quan trọng trong phân phối dược phẩm', excerpt: 'GDP (Good Distribution Practice) đảm bảo chất lượng thuốc từ nhà máy đến tay người tiêu dùng.', date: '2026-11-01', category: 'Dược phẩm', readTime: '6 phút' },
  { id: 3, slug: 'hbn-pharma-dat-chung-nhan-iso', title: 'HBN Pharma đạt chứng nhận ISO 9001:2015 lần 3', excerpt: 'Niềm tự hào khi HBN Pharma tiếp tục được tái chứng nhận ISO 9001:2015 từ tổ chức Bureau Veritas.', date: '2026-10-20', category: 'Tin công ty', readTime: '3 phút' },
  { id: 4, slug: 'omega-3-va-suc-khoe-tim-mach', title: 'Omega-3 và lợi ích vượt trội cho sức khỏe tim mạch', excerpt: 'Các nghiên cứu mới nhất chứng minh vai trò của Omega-3 trong việc giảm nguy cơ bệnh tim mạch.', date: '2026-10-05', category: 'Sức khỏe', readTime: '5 phút' },
  { id: 5, slug: 'hbn-pharma-tai-trien-lam-pharmed-expo', title: 'HBN Pharma tại triển lãm Pharmed Expo 2026', excerpt: 'Hơn 20 sản phẩm mới ra mắt tại gian hàng HBN Pharma trong triển lãm dược phẩm lớn nhất năm.', date: '2026-09-18', category: 'Tin công ty', readTime: '3 phút' },
  { id: 6, slug: 'canxi-cho-tre-em-va-nguoi-cao-tuoi', title: 'Canxi và tầm quan trọng với trẻ em và người cao tuổi', excerpt: 'Canxi không chỉ quan trọng với trẻ đang phát triển, mà còn thiết yếu để phòng ngừa loãng xương ở người lớn tuổi.', date: '2026-09-02', category: 'Sức khỏe', readTime: '4 phút' },
];

const CATEGORIES = ['Tất cả', 'Sức khỏe', 'Dược phẩm', 'Tin công ty'];

export default function NewsPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-primary-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Tin Tức</h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Cập nhật kiến thức sức khỏe, tin tức ngành dược và hoạt động mới nhất của HBN Pharma
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  cat === 'Tất cả'
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-12 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POSTS.map((post, i) => (
              <article
                key={post.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Image placeholder */}
                <div className="h-48 bg-primary-50 flex items-center justify-center">
                  <span className="text-5xl">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-neutral-400 text-xs">{post.readTime} đọc</span>
                  </div>
                  <h2 className="font-bold text-neutral-900 mb-2 leading-snug hover:text-primary-600 transition-colors">
                    <Link href="/news">{post.title}</Link>
                  </h2>
                  <p className="text-neutral-500 text-sm mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-400 text-xs">{post.date}</span>
                    <Link
                      href="/news"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      Đọc tiếp &rarr;
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          <div className="text-center mt-10">
            <button className="border border-primary-500 text-primary-600 hover:bg-primary-50 font-semibold px-8 py-3 rounded-xl transition-colors">
              Xem thêm bài viết
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
