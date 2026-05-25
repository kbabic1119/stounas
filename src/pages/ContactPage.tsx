import Contact from '../components/Contact';

interface ContactPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function ContactPage({ currentLang }: ContactPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <Contact currentLang={currentLang} prefilledNotes="" />
    </div>
  );
}
