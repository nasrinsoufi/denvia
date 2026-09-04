import { motion } from 'motion/react';

export default function PatientJourney() {
  const steps = [
    {
      id: '01',
      title: 'مشاوره و معاینه',
      description: 'ثبت تاریخچه پزشکی، بررسی نیازها و معاینه اولیه دهان و دندان.'
    },
    {
      id: '02',
      title: 'تشخیص و بررسی',
      description: 'استفاده از تجهیزات دیجیتال برای تصویربرداری و تشخیص دقیق مشکلات.'
    },
    {
      id: '03',
      title: 'طراحی برنامه درمان',
      description: 'ارائه طرح درمانی اختصاصی با زمان‌بندی شفاف و برآورد هزینه‌ها.'
    },
    {
      id: '04',
      title: 'شروع درمان',
      description: 'آغاز روند درمان در محیطی آرام و با بالاترین استانداردهای پزشکی.'
    }
  ];

  return (
    <section className="py-24 bg-bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
            مسیر درمان شما
          </h2>
          <p className="text-text-secondary leading-relaxed text-lg">
            ما در دنویا دنتال تلاش کرده‌ایم تا پروسه درمان شما به شفاف‌ترین و ساده‌ترین شکل ممکن طی شود.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-border z-0">
            <motion.div 
              className="absolute top-0 right-0 h-full bg-accent origin-right"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {steps.map((step, index) => (
            <div key={step.id} className="relative flex flex-col items-center text-center">
              {/* Step Circle */}
              <div className="w-24 h-24 rounded-full bg-surface border-4 border-bg-secondary shadow-lg flex items-center justify-center text-2xl font-bold text-accent mb-6 relative z-10">
                {step.id}
                {/* Decorative dot */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-accent"></div>
              </div>
              
              <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed max-w-[250px]">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
