export default function About() {
  return (
    <section id="about" className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative grid grid-cols-2 gap-4 h-[500px] md:h-[600px]">
            <div className="space-y-4 pt-12">
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg bg-border">
                <img 
                  src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=1920&auto=format&fit=crop" 
                  alt="Modern Dental Equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-border">
                <img 
                  src="https://images.unsplash.com/photo-1598256989800-fea5ce5146f2?q=80&w=2070&auto=format&fit=crop" 
                  alt="Patient consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 rounded-3xl overflow-hidden shadow-lg bg-border">
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Dental care" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-64 rounded-3xl overflow-hidden shadow-lg bg-border">
                <img 
                  src="https://images.unsplash.com/photo-1570624068307-55a013fa0cb8?q=80&w=2070&auto=format&fit=crop" 
                  alt="Clinic interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-6 rounded-full shadow-xl flex items-center justify-center flex-col w-32 h-32 border-4 border-bg-secondary">
              <span className="text-3xl font-bold text-accent">۱۵</span>
              <span className="text-xs text-text-secondary font-medium text-center">سال تجربه<br/>تخصصی</span>
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans">
              <span className="w-8 h-px bg-accent"></span>
              درباره دنویا دنتال
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">
              ترکیب علم، هنر و <br className="hidden md:block"/>
              <span className="text-accent font-light italic">مراقبت دلسوزانه</span>
            </h2>
            
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                کلینیک دنویا با هدف ارائه بالاترین سطح خدمات دندانپزشکی در محیطی آرام و دور از استرس تاسیس شده است. ما معتقدیم که هر بیمار نیازمند توجه ویژه و برنامه‌ریزی درمانی اختصاصی است.
              </p>
              <p>
                تیم متخصصان ما با بهره‌گیری از پیشرفته‌ترین تجهیزات روز دنیا و تکنیک‌های مدرن درمانی، تجربه‌ای متفاوت از دندانپزشکی را برای شما رقم می‌زنند. از اولین مشاوره تا پایان درمان، ما همراه شما هستیم.
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 mt-4 w-full">
              {[
                'تجهیزات مدرن و دیجیتال',
                'محیط آرام و بدون استرس',
                'پزشکان متخصص و مجرب',
                'استریلیزاسیون استاندارد',
                'مواد با بالاترین کیفیت',
                'پشتیبانی و پیگیری مستمر'
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text-secondary font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-accent-soft flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <a 
              href="#doctors"
              className="mt-6 border-b border-accent text-accent hover:text-text-primary hover:border-accent-secondary font-medium transition-colors pb-1 inline-flex items-center gap-2"
            >
              آشنایی با تیم پزشکی ما
              <svg className="w-4 h-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
