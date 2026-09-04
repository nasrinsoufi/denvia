import { MapPin, Phone, Clock, Calendar } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-bg-secondary relative overflow-hidden">
      
      {/* Background Decorative */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-soft -skew-x-12 translate-x-32 -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Info Side */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-accent text-sm font-semibold font-sans mb-4">
              <span className="w-8 h-px bg-accent"></span>
              ارتباط با ما
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8 leading-tight">
              آماده برای ساختن <br/>
              <span className="text-accent font-light italic">لبخند جدید شما</span>
            </h2>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface shadow-sm flex items-center justify-center flex-shrink-0 text-accent">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">آدرس کلینیک</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    تهران، نیاوران، خیابان باهنر،<br/>
                    ساختمان پزشکان اطلس، طبقه ۴
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface shadow-sm flex items-center justify-center flex-shrink-0 text-accent">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">شماره تماس</h4>
                  <p className="text-text-secondary text-sm" dir="ltr">
                    +98 21 2233 4455<br/>
                    +98 21 2233 4456
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-surface shadow-sm flex items-center justify-center flex-shrink-0 text-accent">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-text-primary mb-1">ساعات کاری</h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    شنبه تا چهارشنبه: ۹ صبح تا ۸ شب<br/>
                    پنجشنبه‌ها: ۹ صبح تا ۲ ظهر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            <div className="bg-surface p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-border">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-text-primary mb-2">درخواست رزرو نوبت</h3>
                <p className="text-text-secondary text-sm">لطفاً فرم زیر را تکمیل کنید تا کارشناسان ما برای تایید نهایی با شما تماس بگیرند.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">نام و نام خانوادگی</label>
                    <input 
                      type="text" 
                      placeholder="مثال: علی رضایی"
                      className="w-full bg-bg-secondary border border-border rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">شماره تماس</label>
                    <input 
                      type="tel" 
                      dir="ltr"
                      placeholder="0912 345 6789"
                      className="w-full bg-bg-secondary border border-border rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm text-left"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">بخش درمانی (اختیاری)</label>
                    <select className="w-full bg-bg-secondary border border-border rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm appearance-none cursor-pointer">
                      <option value="">انتخاب کنید...</option>
                      <option value="general">دندانپزشکی عمومی</option>
                      <option value="cosmetic">زیبایی</option>
                      <option value="implant">ایمپلنت</option>
                      <option value="ortho">ارتودنسی</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-text-primary">پزشک معالج (اختیاری)</label>
                    <select className="w-full bg-bg-secondary border border-border rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm appearance-none cursor-pointer">
                      <option value="">بدون ترجیح</option>
                      <option value="dr-ahmadi">دکتر احمدی</option>
                      <option value="dr-karimi">دکتر کریمی</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-text-primary">توضیحات تکمیلی</label>
                  <textarea 
                    rows={4}
                    placeholder="اگر مشکل خاصی دارید یا دارویی مصرف می‌کنید بنویسید..."
                    className="w-full bg-bg-secondary border border-border rounded-2xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-accent/10 focus:border-accent transition-all text-sm resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button"
                  className="w-full bg-accent hover:bg-accent-secondary text-bg-primary px-8 py-4 rounded-2xl text-base font-medium transition-all shadow-lg shadow-accent/20 hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  ثبت درخواست نوبت
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
