import { useLocation } from 'react-router-dom';
import Contact from '../components/Contact';

interface ContactPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function ContactPage({ currentLang }: ContactPageProps) {
  const location = useLocation();
  const prefilledNotes = (location.state as any)?.prefilledNotes || "";

  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <Contact currentLang={currentLang} prefilledNotes={prefilledNotes} />
    </div>
  );
}
