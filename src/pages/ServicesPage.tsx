import Services from '../components/Services';

interface ServicesPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function ServicesPage({ currentLang }: ServicesPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <Services currentLang={currentLang} />
    </div>
  );
}
