import Contact from '../components/Contact';

interface ContactPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function ContactPage({ currentLang }: ContactPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <Contact currentLang={currentLang} prefilledNotes="" />
    </div>
  );
}
