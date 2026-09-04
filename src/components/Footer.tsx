import { Instagram, Linkedin, Send } from 'lucide-react';

const STATIC_SERVICES = [
  'دندانپزشکی عمومی',
  'دندانپزشکی زیبایی',
  'ترمیم و بازسازی',
  'ارتودنسی',
  'ایمپلنت و جراحی',
  'دندانپزشکی کودکان',
  'درمان لثه'
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-denvia-navy text-text-muted pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-6">
            <div>
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="text-2xl font-bold tracking-tight text-text-primary inline-block"
              >
                دنویا<span className="text-accent font-light">دنتال</span>
              </a>
            </div>
            <p className="text-sm leading-relaxed">
              کلینیک دندانپزشکی دنویا با بهره‌گیری از دانش روز دنیا و متخصصین مجرب، تجربه‌ای متفاوت از درمان‌های دندانپزشکی را به شما ارائه می‌دهد.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center hover:bg-accent transition-colors text-text-primary">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center hover:bg-accent transition-colors text-text-primary">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-bg-secondary flex items-center justify-center hover:bg-accent transition-colors text-text-primary">
                <Send size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-lg">دسترسی سریع</h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'صفحه اصلی', href: '#home' },
                { label: 'درباره ما', href: '#about' },
                { label: 'خدمات', href: '#services' },
                { label: 'پزشکان', href: '#doctors' },
                { label: 'نظرات بیماران', href: '#testimonials' },
                { label: 'بلاگ', href: '#blog' },
                { label: 'تماس با ما', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-lg">خدمات ما</h4>
            <ul className="flex flex-col gap-3">
              {STATIC_SERVICES.map((service, index) => (
                <li key={index}>
                  <span className="hover:text-accent transition-colors text-sm cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-text-primary font-bold mb-6 text-lg">تماس با ما</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>
                <span>تهران، نیاوران، خیابان باهنر، ساختمان پزشکان اطلس، طبقه ۴</span>
              </li>
              <li className="flex items-start justify-end gap-3 text-sm" dir="ltr">
                <span className="text-right flex-1">+98 21 2233 4455</span>
                <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 text-right">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-6 h-6 rounded-full bg-bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-accent"></span>
                </div>
                <span>شنبه تا چهارشنبه: ۹ تا ۲۰<br/>پنجشنبه‌ها: ۹ تا ۱۴</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
          <div className="font-sans tracking-wide">
            Designed by <a href="https://t.me/Galaxy_wr" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent transition-colors">SOUFI</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
