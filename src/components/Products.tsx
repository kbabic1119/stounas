import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ArrowRight } from 'lucide-react';
import { productsTranslations, heroModalTranslations, graniteSpecimens } from '../data/translations';

interface ProductsProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Products({ currentLang }: ProductsProps) {
  const navigate = useNavigate();
  const [selectedSpecimen, setSelectedSpecimen] = useState<any | null>(null);

  const t = productsTranslations[currentLang];
  const modalT = heroModalTranslations[currentLang];

  // Localized specimens
  const specimens = graniteSpecimens.map(spec => ({
    id: spec.id,
    name: spec.name[currentLang],
    origin: spec.origin[currentLang],
    density: spec.density,
    frostResistance: spec.frostResistance[currentLang],
    image: spec.image,
    desc: spec.desc[currentLang],
  }));

  const handleCardClick = (spec: any) => {
    setSelectedSpecimen(spec);
  };

  const handleInquire = (spec: any) => {
    setSelectedSpecimen(null);
    const prefill = {
      LT: `Sveiki, noriu pasiteirauti dėl „${spec.name}“ granito panaudojimo mano projekte.`,
      EN: `Hello, I would like to inquire about using "${spec.name}" granite in my project.`,
      RU: `Здравствуйте, меня интересует гранит «${spec.name}» для моего проекта.`,
    }[currentLang];

    navigate('/kontaktai', { state: { prefilledNotes: prefill } });
  };

  const detailsLabel = {
    LT: 'Spustelėkite plačiau →',
    EN: 'Click for details →',
    RU: 'Нажмите для подробностей →',
  }[currentLang];

  return (
    <section id="produktai" className="py-24 bg-transparent text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(112,179,36,0.06),transparent_50%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-mono font-bold tracking-[0.3em] text-brand-primary block uppercase">
            // {t.headline}
          </span>
          <h2 className="text-3xl sm:text-5xl font-display font-black text-white leading-tight uppercase">
            {t.title}
          </h2>
          <div className="h-[2px] w-20 bg-brand-primary mx-auto rounded-full mt-1" />
          <p className="max-w-xl mx-auto text-zinc-400 text-sm mt-3 leading-relaxed">
            {t.sub}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specimens.map((spec) => (
            <div
              key={spec.id}
              onClick={() => handleCardClick(spec)}
              className="bg-brand-dark border border-white/5 hover:border-brand-primary/30 hover:-translate-y-1 transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer flex flex-col h-full group shadow-2xl relative"
            >
              <div className="h-64 overflow-hidden relative bg-zinc-900">
                <img 
                  src={spec.image} 
                  alt={spec.name} 
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-white group-hover:text-brand-primary transition-colors uppercase">
                    {spec.name}
                  </h3>
                  <p className="text-zinc-500 text-xs font-semibold">
                    {spec.origin}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    <span className="bg-brand-dark-lighter border border-white/5 text-zinc-400 px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider">
                      {spec.density}
                    </span>
                    <span className="bg-brand-dark-lighter border border-white/5 text-zinc-400 px-3 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider">
                      {spec.frostResistance}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3 pt-2">
                    {spec.desc}
                  </p>
                </div>
                
                <div className="text-brand-primary text-xs font-bold text-center pt-2 group-hover:underline">
                  {detailsLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal detail drawer */}
      {selectedSpecimen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
          <div className="bg-brand-dark border border-white/10 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col">
            
            {/* Close button */}
            <button 
              onClick={() => setSelectedSpecimen(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/85 text-white hover:scale-105 border border-white/20 transition-all cursor-pointer z-50 shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Image side */}
                <div className="h-64 md:h-full min-h-[260px] relative overflow-hidden bg-zinc-900">
                  <img 
                    src={selectedSpecimen.image} 
                    alt={selectedSpecimen.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-brand-dark" />
                </div>

                {/* Text side */}
                <div className="p-8 space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-brand-primary uppercase font-bold">
                        // {modalT.graniteSpecimen}
                      </span>
                      <h3 className="text-2xl font-display font-black text-white uppercase leading-tight">
                        {selectedSpecimen.name}
                      </h3>
                    </div>

                    <p className="text-zinc-400 text-xs leading-relaxed">
                      {selectedSpecimen.desc}
                    </p>

                    <div className="border-t border-white/5 pt-4 space-y-2.5 text-xs font-sans">
                      <div className="flex justify-between">
                        <span className="text-zinc-500 font-medium">{modalT.origin}:</span>
                        <span className="text-zinc-200 font-bold">{selectedSpecimen.origin}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500 font-medium">{modalT.density}:</span>
                        <span className="text-zinc-200 font-bold">{selectedSpecimen.density}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-zinc-500 font-medium">{modalT.frost}:</span>
                        <span className="text-zinc-200 font-bold">{selectedSpecimen.frostResistance}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInquire(selectedSpecimen)}
                    className="w-full bg-brand-primary hover:bg-brand-primary-dark text-black font-black py-3 rounded-xl transition-all duration-200 uppercase tracking-wider text-xs cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>{modalT.cta}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
