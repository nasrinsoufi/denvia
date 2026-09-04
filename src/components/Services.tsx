import { ArrowLeft } from 'lucide-react';

const STATIC_SERVICES = [
  {
    id: '01',
    title: 'دندانپزشکی عمومی',
    description: 'معاینه، تشخیص و درمان مشکلات رایج دندان و دهان.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    )
  },
  {
    id: '02',
    title: 'دندانپزشکی زیبایی',
    description: 'طراحی لبخند و بهبود ظاهر دندان‌ها با روش‌های مدرن زیبایی.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    )
  },
  {
    id: '03',
    title: 'ترمیم و بازسازی',
    description: 'بازگرداندن عملکرد و ظاهر طبیعی دندان‌های آسیب‌دیده.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    )
  },
  {
    id: '04',
    title: 'ارتودنسی',
    description: 'اصلاح نظم دندان‌ها و بهبود هماهنگی فک و لبخند.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    id: '05',
    title: 'ایمپلنت و جراحی',
    description: 'راهکارهای تخصصی برای جایگزینی دندان‌های از دست‌رفته.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    )
  },
  {
    id: '06',
    title: 'دندانپزشکی کودکان',
    description: 'مراقبت تخصصی از دندان‌ها و سلامت دهان کودکان.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    )
  },
  {
    id: '07',
    title: 'درمان لثه',
    description: 'تشخیص و درمان بیماری‌های لثه و مراقبت‌های پریودنتال.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    )
  }
];

export default function Services() {
  // In Phase 1 we use static data, this will be dynamic in later phases
  const services = STATIC_SERVICES;

  return (
    <section id="services" className="py-24 bg-surface">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans mb-4">
            <span className="w-8 h-px bg-accent"></span>
            خدمات ما
            <span className="w-8 h-px bg-accent"></span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary">
            مراقبت کامل برای سلامت و <br className="hidden md:block"/>
            <span className="text-accent font-light italic">زیبایی لبخند شما</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`bg-surface p-8 rounded-3xl border border-border shadow-sm hover:bg-surface-hover hover:shadow-xl transition-all duration-300 group cursor-pointer ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : '' // make the grid flow nicer if odd number
              }`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-accent-soft flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-text-primary transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="text-4xl font-bold text-denvia-blue-light group-hover:text-accent-light transition-colors">
                  {service.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">{service.title}</h3>
              <p className="text-text-secondary mb-8 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent group-hover:text-text-primary transition-colors">
                  مشاهده خدمات
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
