import { SiteHeader } from "@/components/sites/almdrasa/SiteHeader";
import { SiteFooter } from "@/components/sites/almdrasa/SiteFooter";

export default function BlogPage() {
  const posts = [
    {
      title: "كيف تبدأ تعلم البرمجة من الصفر في 2024؟",
      excerpt: "دليلك الشامل لتعلم البرمجة، أهم اللغات المطلوبة، وكيف تختار المسار المناسب لك في سوق العمل الحالي.",
      date: "12 مايو 2024",
      category: "نصائح تقنية",
      image: "https://almdrasa.com/wp-content/uploads/2024/05/og-tracks.jpg"
    },
    {
      title: "أهم 10 أسئلة في مقابلات Front-End",
      excerpt: "جمعنا لك أكثر الأسئلة شيوعاً في مقابلات العمل لوظيفة مطور واجهات أمامية مع إجابات نموذجية.",
      date: "05 أبريل 2024",
      category: "مقابلات العمل",
      image: "https://almdrasa.com/wp-content/uploads/2024/06/og-front-end-diploma.jpg"
    },
    {
      title: "لماذا يجب أن تتعلم TypeScript؟",
      excerpt: "مقارنة شاملة بين JavaScript و TypeScript ولماذا تتجه الشركات الكبرى لاستخدامها.",
      date: "20 مارس 2024",
      category: "تطوير الويب",
      image: "https://almdrasa.com/wp-content/uploads/2023/01/01-9.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F5F6F9] text-foreground">
      <SiteHeader />
      <main className="flex-1 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-4">المدونة التقنية</h1>
              <p className="text-muted-foreground text-lg">أحدث المقالات، النصائح، والدروس في عالم البرمجة.</p>
            </div>
            <div className="mt-6 md:mt-0">
              <select className="bg-white border rounded-lg px-4 py-2 outline-none focus:border-[#5700ff]">
                <option>كل التصنيفات</option>
                <option>تطوير الويب</option>
                <option>نصائح تقنية</option>
                <option>مقابلات العمل</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border">
                <div className="aspect-video bg-gray-200 overflow-hidden relative">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-[#5700ff] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-400 mb-3">{post.date}</div>
                  <h2 className="text-xl font-bold mb-3 hover:text-[#5700ff] transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground line-clamp-3 mb-6 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[#5700ff] font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm">
                    اقرأ المزيد
                    <span>←</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button className="bg-white border-2 border-[#5700ff] text-[#5700ff] hover:bg-[#5700ff] hover:text-white font-bold py-3 px-8 rounded-lg transition-colors">
              تحميل المزيد
            </button>
          </div>

        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
