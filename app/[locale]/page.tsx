import {getTranslations} from 'next-intl/server';
import {ReactNode} from 'react';

export default async function Home({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations('HomePage');
  const nav = await getTranslations('Navigation');
  
  const isRtl = locale === 'ar';

  const renderBrand = (children: ReactNode) => {
    const text = children?.toString() || '';
    return (
      <span className="inline-flex">
        <span className="text-brand-blue">{text[0]}</span>
        <span className="text-brand-red">{text.slice(1)}</span>
      </span>
    );
  };

  return (
    <div className={`flex flex-col min-h-screen bg-white font-sans text-stone-950 ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <header className="border-b-8 border-brand-red bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 h-28 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img 
              src="/logo.jpg" 
              alt="Petrowell Logo" 
              className="h-20 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center gap-12">
            <a href="#home" className="text-sm font-black uppercase hover:text-brand-red border-b-2 border-transparent hover:border-brand-red transition-all">{nav('home')}</a>
            <a href="#about" className="text-sm font-black uppercase hover:text-brand-red border-b-2 border-transparent hover:border-brand-red transition-all">{nav('about')}</a>
            <a href="#services" className="text-sm font-black uppercase hover:text-brand-red border-b-2 border-transparent hover:border-brand-red transition-all">{nav('services')}</a>
            <a href="#contact" className="text-sm font-black uppercase hover:text-brand-red border-b-2 border-transparent hover:border-brand-red transition-all">{nav('contact')}</a>
            <div className="h-4 w-1 bg-brand-blue/20" />
            <a href={isRtl ? '/en' : '/ar'} className="bg-brand-blue px-4 py-2 text-white text-[10px] font-black uppercase tracking-widest hover:bg-brand-red transition-colors">
              {isRtl ? 'English' : 'العربية'}
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="py-32 px-8 bg-white border-b-2 border-brand-blue/10">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-4xl space-y-10">
              <div className="flex items-center gap-4">
                <span className="text-brand-red font-black text-sm uppercase tracking-[0.5em]">Partner</span>
                <div className="h-1 flex-grow bg-brand-red/10" />
              </div>
              <h1 className="text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-stone-950">
                {t.rich('title', {
                  brand: (children) => (
                    <span className="block mb-4">
                      {renderBrand(children)}
                    </span>
                  ),
                  subtitle: (children) => <span className="block text-brand-red">{children}</span>
                })}
              </h1>
              <p className="text-2xl md:text-3xl font-bold text-stone-600 max-w-2xl leading-tight border-l-8 border-brand-blue pl-8">
                {t('description')}
              </p>
              <div className="pt-8 flex gap-6">
                <button className="h-20 px-12 bg-brand-red text-white text-xl font-black uppercase tracking-widest hover:bg-brand-blue transition-colors shadow-[8px_8px_0px_0px_rgba(0,0,128,1)]">
                  {t('cta')}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-8 bg-zinc-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-20">
              <div className="lg:col-span-12 mb-10">
                <h2 className="text-xs font-black tracking-[0.6em] uppercase text-brand-red mb-4">Strategic Vision</h2>
                <h3 className="text-6xl font-black uppercase text-stone-950">
                  {t.rich('about.title', {
                    brand: (children) => renderBrand(children)
                  })}
                </h3>
              </div>
              <div className="lg:col-span-12">
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="p-10 bg-white border-t-8 border-brand-blue shadow-xl">
                    <h4 className="text-2xl font-black uppercase text-brand-blue mb-6 border-b-2 border-brand-red pb-2 inline-block italic">{t('about.vision')}</h4>
                    <p className="text-lg font-bold text-stone-700 leading-relaxed italic">"{t('about.visionText')}"</p>
                  </div>
                  <div className="p-10 bg-white border-t-8 border-brand-red shadow-xl">
                    <h4 className="text-2xl font-black uppercase text-brand-red mb-6 border-b-2 border-brand-blue pb-2 inline-block">{t('about.mission')}</h4>
                    <p className="text-lg font-bold text-stone-700 leading-relaxed">{t('about.missionText')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-8 bg-zinc-50 border-y-2 border-brand-blue/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-24 gap-10">
              <div className="flex-grow">
                <h2 className="text-xs font-black tracking-[0.6em] uppercase text-brand-blue mb-4">Core Competencies</h2>
                <h3 className="text-6xl font-black uppercase text-stone-950 leading-none">{t('services.title')}</h3>
              </div>
              <div className="hidden lg:block w-32 h-32 border-8 border-brand-red flex-shrink-0" />
            </div>
            <div className="grid md:grid-cols-2 gap-12">
              <ServiceCard title={t('services.drilling')} number="01" />
              <ServiceCard title={t('services.engineering')} number="02" />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20">
              <div>
                <h2 className="text-xs font-black tracking-[0.6em] uppercase text-brand-red mb-4">Ready to Partner</h2>
                <h3 className="text-6xl font-black uppercase text-stone-950 leading-tight mb-10">{t('contact.title')}</h3>
                <div className="space-y-8">
                  <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-blue flex-shrink-0 flex items-center justify-center text-white font-black italic">A</div>
                    <div>
                      <div className="text-xs font-black uppercase text-brand-blue tracking-widest mb-1 italic">Location</div>
                      <div className="text-xl font-bold uppercase">{t('contact.address')}</div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-red flex-shrink-0 flex items-center justify-center text-white font-black italic">P</div>
                    <div>
                      <div className="text-xs font-black uppercase text-brand-red tracking-widest mb-1 italic">Operations</div>
                      <div className="text-xl font-bold uppercase">{t('contact.phone')}</div>
                    </div>
                  </div>
                  <div className="flex gap-8 items-start">
                    <div className="w-12 h-12 bg-brand-blue flex-shrink-0 flex items-center justify-center text-white font-black italic">E</div>
                    <div>
                      <div className="text-xs font-black uppercase text-brand-blue tracking-widest mb-1 italic">Direct Line</div>
                      <div className="text-xl font-bold lowercase">{t('contact.email')}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-red p-12 flex flex-col justify-center shadow-[16px_16px_0px_0px_rgba(0,0,128,1)]">
                <h4 className="text-4xl font-black text-white uppercase leading-none mb-6">Expert Solutions for the Oil & Gas Industry.</h4>
                <div className="h-1 w-24 bg-white mb-10" />
                <button className="h-20 bg-white text-brand-red text-xl font-black uppercase tracking-widest hover:bg-brand-blue hover:text-white transition-all">
                  Request Information
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-blue text-white py-24 border-t-8 border-brand-red">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
            <div className="space-y-10">
              <div className="bg-white p-6 inline-flex">
                <img 
                  src="/logo.jpg" 
                  alt="Petrowell Logo" 
                  className="h-24 w-auto"
                />
              </div>
              <p className="max-w-md text-sm font-black uppercase tracking-widest leading-loose text-white opacity-80">
                Partner for Oil and Gas Development in Libya. delivering Excellence in Field Operations and Desert Logistics.
              </p>
            </div>
            <div className="text-right space-y-4">
              <div className="h-1 w-24 bg-brand-red ml-auto" />
              <div className="text-sm font-black tracking-widest uppercase">© 2026 PetroWell Oil & Gas Services</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({title, number}: {title: string, number: string}) {
  return (
    <div className="p-12 border-4 border-stone-950 hover:border-brand-red hover:bg-brand-red hover:text-white transition-all group relative overflow-hidden">
      <div className="text-7xl font-black opacity-10 absolute -top-4 -right-4 group-hover:opacity-20 transition-opacity uppercase">{number}</div>
      <div className="text-sm font-black text-brand-blue group-hover:text-white mb-10 tracking-widest transition-colors uppercase">{number}/02</div>
      <h4 className="text-3xl font-black uppercase leading-tight tracking-tighter">{title}</h4>
      <div className="mt-8 w-12 h-2 bg-brand-blue group-hover:bg-white transition-all group-hover:w-full" />
    </div>
  );
}
