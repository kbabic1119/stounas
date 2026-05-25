import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactTranslations } from '../data/translations';

interface ContactProps {
  currentLang: 'LT' | 'EN' | 'RU';
  prefilledNotes: string;
}

export default function Contact({ currentLang, prefilledNotes }: ContactProps) {
  
  // States of contact form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Prefill notes from calculator selection
  useEffect(() => {
    if (prefilledNotes) {
      setNotes((prev) => {
        if (prev.includes(prefilledNotes)) return prev;
        return prev ? `${prev}\n\n${prefilledNotes}` : prefilledNotes;
      });
      
      // Auto scroll to contact form smoothly when quote matches
      const formElement = document.getElementById('kontaktai');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [prefilledNotes]);
  const t = contactTranslations[currentLang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      setSubmitError(true);
      setTimeout(() => setSubmitError(false), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(false);

    // Simulated API response delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Clean up fields
      setName('');
      setEmail('');
      setPhone('');
      setNotes('');
    }, 1500);
  };

  return (
    <section id="kontaktai" className="py-24 bg-neutral-950 text-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(112,179,36,0.05),transparent_40%)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-20">
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

        {/* Form and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column - Form Card */}
          <div className="lg:col-span-7 bg-brand-dark border border-white/5 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
            
            {submitSuccess ? (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <CheckCircle2 size={56} className="text-brand-primary mx-auto" />
                <h3 className="text-2xl font-display font-black uppercase text-zinc-100">{t.success_title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-md mx-auto">{t.success_desc}</p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-6 inline-flex items-center space-x-2 text-xs font-bold text-brand-primary uppercase hover:underline cursor-pointer"
                >
                  <span>Siųsti kitą užklausą</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {submitError && (
                  <div className="bg-red-950/25 border border-red-900/40 p-4 rounded-xl flex items-start space-x-3 text-red-400 text-xs animate-fade-in">
                    <AlertCircle size={18} className="shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <strong className="font-bold block uppercase">{t.error_title}</strong>
                      <span>{t.error_desc}</span>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">{t.name_lbl} *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Pvz: Mantas V."
                      className="w-full bg-brand-dark-lighter border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary/50 transition-colors"
                    />
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">{t.phone_lbl} *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Pvz: +370 646 03391"
                      className="w-full bg-brand-dark-lighter border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary/50 transition-colors"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">{t.email_lbl}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="El. paštas (nebūtinas)"
                    className="w-full bg-brand-dark-lighter border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary/50 transition-colors"
                  />
                </div>

                {/* Remarks / Custom spec */}
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 font-sans">{t.msg_lbl}</label>
                  <textarea
                    rows={5}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Čia galite įrašyti papildomus matmenis, kapo vietovę ar kitas detales..."
                    className="w-full bg-brand-dark-lighter border border-white/5 rounded-xl px-4 py-3.5 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-brand-primary/50 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-primary hover:bg-brand-primary-dark disabled:bg-zinc-800 text-black font-black py-4.5 rounded-xl shadow-lg transition-all duration-200 transform active:scale-[0.99] uppercase tracking-wider text-sm flex items-center justify-center space-x-2.5 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Send size={16} className="animate-pulse" />
                      <span>{t.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>{t.send_btn}</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Right Column - Info panel */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            
            <div className="bg-brand-dark border border-white/5 rounded-3xl p-8 space-y-6">
              <h3 className="font-display font-extrabold text-xl text-zinc-100 uppercase tracking-wider border-b border-white/5 pb-4">
                {t.info_title}
              </h3>

              {/* Box 1 */}
              <div className="flex items-start">
                <MapPin className="text-brand-primary mr-4 mt-1 shrink-0" size={20} />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">{t.address_lbl}</div>
                  <div className="text-sm font-semibold text-zinc-200">{t.address_val}</div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="flex items-start">
                <Clock className="text-brand-primary mr-4 mt-1 shrink-0" size={20} />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">{t.work_lbl}</div>
                  <div className="text-sm font-semibold text-zinc-200 space-y-0.5">
                    <div>{t.work_val1}</div>
                    <div className="text-xs text-zinc-400">{t.work_val2}</div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="flex items-start">
                <Phone className="text-brand-primary mr-4 mt-1 shrink-0" size={20} />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">{t.phone_lbl_title}</div>
                  <a href="tel:+37064603391" className="text-sm font-bold text-zinc-100 hover:text-brand-primary transition-colors block">
                    +370 646 03391
                  </a>
                </div>
              </div>

              {/* Box 4 */}
              <div className="flex items-start">
                <Mail className="text-brand-primary mr-4 mt-1 shrink-0" size={20} />
                <div className="space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-widest">{t.email_lbl_title}</div>
                  <a href="mailto:info@mbstounas.lt" className="text-sm font-bold text-zinc-100 hover:text-brand-primary transition-colors block">
                    info@mbstounas.lt
                  </a>
                </div>
              </div>

            </div>

            {/* Geographical scope pill bar */}
            <div className="bg-gradient-to-r from-brand-dark to-zinc-900 border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-brand-primary/10 transition-colors">
              <div className="absolute right-0 top-0 w-24 h-24 bg-brand-primary/5 rounded-full filter blur-xl" />
              <div className="space-y-2">
                <h4 className="text-xs font-sans font-black tracking-widest text-brand-primary uppercase">
                  ✓ {t.map_guide}
                </h4>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {t.map_desc}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
