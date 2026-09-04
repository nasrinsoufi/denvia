import { ArrowLeft } from 'lucide-react';

const STATIC_POSTS = [
  {
    id: 1,
    title: 'تاثیر کامپوزیت ونیر بر اصلاح طرح لبخند',
    excerpt: 'آیا می‌دانید کامپوزیت ونیر چگونه می‌تواند در کوتاه‌ترین زمان، لبخندی بی‌نقص و زیبا به شما هدیه دهد؟ بررسی مزایا و معایب.',
    date: '۲۴ مهر ۱۴۰۲',
    category: 'زیبایی',
    image: 'https://images.unsplash.com/photo-1593085260707-5377ba37f868?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'همه چیز درباره ایمپلنت دیجیتال',
    excerpt: 'با تکنولوژی جدید ایمپلنت دیجیتال، دوره نقاهت کوتاه‌تر و جراحی بدون درد و خونریزی را تجربه کنید.',
    date: '۱۵ مهر ۱۴۰۲',
    category: 'جراحی',
    image: 'https://images.unsplash.com/photo-1600649723041-0f730c4e70dd?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'راهکارهای کاهش ترس کودک از دندانپزشکی',
    excerpt: 'چگونه فرزندمان را برای اولین ویزیت دندانپزشکی آماده کنیم تا تجربه‌ای مثبت در ذهن او ثبت شود؟',
    date: '۸ مهر ۱۴۰۲',
    category: 'کودکان',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans mb-4">
              <span className="w-8 h-px bg-accent"></span>
              مجله دنویا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              دانش بیشتر، <br className="hidden md:block"/>
              <span className="text-accent font-light italic">لبخند سالم‌تر</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <a 
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-full text-sm font-medium text-accent hover:bg-accent-soft transition-colors"
            >
              مشاهده همه مقالات
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATIC_POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="h-64 rounded-3xl overflow-hidden bg-bg-secondary mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-accent">
                  {post.category}
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-text-muted mb-4">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>زمان مطالعه: ۵ دقیقه</span>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors leading-tight">
                {post.title}
              </h3>
              
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2 mb-4">
                {post.excerpt}
              </p>
              
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-text-primary transition-colors">
                ادامه مطلب
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-12 md:hidden text-center">
          <a 
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-full text-sm font-medium text-accent hover:bg-accent-soft transition-colors"
          >
            مشاهده همه مقالات
          </a>
        </div>

      </div>
    </section>
  );
}
