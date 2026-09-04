import { Star } from 'lucide-react';

const STATIC_TESTIMONIALS = [
  {
    id: 1,
    name: 'مریم حسینی',
    text: 'از برخورد پرسنل تا تخصص پزشکان، همه‌چیز در دنویا دنتال عالی بود. سال‌ها از دندانپزشکی ترس داشتم اما محیط آرام اینجا باعث شد با خیال راحت درمان ایمپلنتم را انجام دهم.',
    service: 'ایمپلنت دندان',
    rating: 5,
  },
  {
    id: 2,
    name: 'علی رستمی',
    text: 'برای طراحی لبخند به کلینیک دنویا مراجعه کردم. نتیجه کار بسیار طبیعی و فراتر از انتظارم بود. از دکتر احمدی عزیز بابت دقت و ظرافت کارشون بی‌نهایت سپاسگزارم.',
    service: 'دندانپزشکی زیبایی',
    rating: 5,
  },
  {
    id: 3,
    name: 'سارا سعیدی',
    text: 'دخترم برای اولین بار بود که به دندانپزشکی می‌رفت و دکتر حسینی با مهربانی و حوصله زیاد کاری کردند که دخترم اصلا نترسه. واقعا کلینیک حرفه‌ای و تمیزی هست.',
    service: 'دندانپزشکی کودکان',
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-accent-soft text-text-primary overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative">
        
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-surface/50 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans mb-4">
            <span className="w-8 h-px bg-accent"></span>
            تجربه بیماران ما
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            اعتماد شما، <br className="hidden md:block"/>
            <span className="text-accent font-light italic">ارزشمندترین بخش کار ماست</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {STATIC_TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-surface p-8 rounded-3xl border border-border hover:bg-surface-hover transition-colors shadow-sm"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                «{testimonial.text}»
              </p>
              
              <div className="mt-auto border-t border-border pt-6">
                <h4 className="font-bold text-text-primary mb-1">{testimonial.name}</h4>
                <p className="text-sm text-text-muted">بیمار بخش {testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
