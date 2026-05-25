import { useState } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Quality from '../components/Quality';
import Contact from '../components/Contact';

interface HomeProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function Home({ currentLang }: HomeProps) {
  const [prefilledNotes, setPrefilledNotes] = useState('');

  return (
    <>
      <Hero 
        currentLang={currentLang} 
        onContactClick={() => {
          const el = document.getElementById('kontaktai');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
        onSelectSpecimen={(text) => {
          setPrefilledNotes(text);
        }}
      />
      <About currentLang={currentLang} />
      <Services currentLang={currentLang} />
      <Quality currentLang={currentLang} />
      <Contact currentLang={currentLang} prefilledNotes={prefilledNotes} />
    </>
  );
}
