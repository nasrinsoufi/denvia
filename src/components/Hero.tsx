export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Full Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/hero.png" 
          alt="Denvia Dental Clinic" 
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark overlay to ensure text readability (dark on the right where text is, fading to left) */}
        <div className="absolute inset-0 bg-gradient-to-l from-bg-primary via-bg-primary/70 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-bg-primary/20 z-10"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Content (Right Side in RTL) */}
          <div className="flex flex-col items-start gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface/80 backdrop-blur-sm border border-border text-text-secondary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              پذیرش بیماران جدید
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-[1.2]">
              دندانپزشکی مدرن،
              <br />
              با مراقبتی <span className="text-accent font-light italic">انسانی.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-text-secondary max-w-lg leading-relaxed">
              در کلینیک دنویا، تجربه دندانپزشکی را با محیطی آرام، متخصصان مجرب و تکنولوژی روز دنیا بازتعریف کرده‌ایم تا لبخندی سالم و زیبا را به شما هدیه دهیم.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a 
                href="#contact"
                className="bg-accent hover:bg-accent-secondary text-bg-primary px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5"
              >
                رزرو نوبت آنلاین
              </a>
              <a 
                href="#services"
                className="bg-surface/50 backdrop-blur-sm hover:bg-accent-soft text-accent hover:text-text-primary border border-accent px-8 py-3.5 rounded-full text-base font-medium transition-all hover:-translate-y-0.5"
              >
                آشنایی با خدمات
              </a>
            </div>

            {/* Quick Stats */}
            <div className="flex items-center gap-8 pt-8 mt-4 border-t border-border/50 w-full max-w-md">
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent">۱۵+</span>
                <span className="text-sm text-text-secondary">سال تجربه</span>
              </div>
              <div className="w-px h-10 bg-border/50"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent">۸</span>
                <span className="text-sm text-text-secondary">پزشک متخصص</span>
              </div>
              <div className="w-px h-10 bg-border/50"></div>
              <div className="flex flex-col gap-1">
                <span className="text-2xl font-bold text-accent">۵۰۰۰+</span>
                <span className="text-sm text-text-secondary">بیمار راضی</span>
              </div>
            </div>
          </div>

          {/* Empty column to push content to the right (in RTL, first column is on the right) */}
          <div className="hidden lg:block"></div>

        </div>
      </div>
    </section>
  );
}
