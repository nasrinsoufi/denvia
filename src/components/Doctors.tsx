import { ArrowLeft } from 'lucide-react';

const STATIC_DOCTORS = [
  {
    id: 'dr-ahmadi',
    name: 'دکتر سارا احمدی',
    specialty: 'متخصص دندانپزشکی زیبایی و ترمیمی',
    shortBio: 'بیش از ۱۲ سال تجربه در طراحی لبخند و ترمیم‌های زیبایی با استفاده از جدیدترین متدهای جهانی.',
    image: 'https://images.unsplash.com/photo-1594824436998-058d0126a11c?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'dr-karimi',
    name: 'دکتر علی کریمی',
    specialty: 'جراح و متخصص ایمپلنت',
    shortBio: 'فارغ‌التحصیل از دانشگاه علوم پزشکی تهران، با سابقه بیش از ۳۰۰۰ جراحی موفق ایمپلنت.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop'
  },
  {
    id: 'dr-رضایی',
    name: 'دکتر مریم رضایی',
    specialty: 'متخصص ارتودنسی',
    shortBio: 'عضو هیئت علمی دانشگاه، متخصص در انواع درمان‌های ارتودنسی ثابت، متحرک و نامرئی.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'dr-hosseini',
    name: 'دکتر رضا حسینی',
    specialty: 'متخصص دندانپزشکی کودکان',
    shortBio: 'ایجاد محیطی آرام و بدون ترس برای کودکان، متخصص در درمان‌های پیشگیرانه و ترمیمی اطفال.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop'
  }
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans mb-4">
              <span className="w-8 h-px bg-accent"></span>
              پزشکان دنویا
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
              تخصص و تجربه، <br className="hidden md:block"/>
              <span className="text-accent font-light italic">در کنار شما</span>
            </h2>
          </div>
          <div className="hidden md:block">
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-full text-sm font-medium text-accent hover:bg-accent-soft transition-colors"
            >
              مشاهده همه پزشکان
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATIC_DOCTORS.map((doctor) => (
            <div key={doctor.id} className="group cursor-pointer">
              <div className="relative h-80 md:h-[400px] mb-6 rounded-3xl overflow-hidden bg-bg-secondary">
                <img 
                  src={doctor.image} 
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-denvia-navy/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-text-primary font-medium flex items-center gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    مشاهده پروفایل <ArrowLeft size={16} />
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-1 group-hover:text-accent transition-colors">
                {doctor.name}
              </h3>
              <p className="text-accent text-sm font-medium mb-3">
                {doctor.specialty}
              </p>
              <p className="text-text-secondary text-sm leading-relaxed line-clamp-2">
                {doctor.shortBio}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent rounded-full text-sm font-medium text-accent hover:bg-accent-soft transition-colors"
          >
            مشاهده همه پزشکان
          </a>
        </div>

      </div>
    </section>
  );
}
