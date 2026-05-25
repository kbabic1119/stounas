import Quality from '../components/Quality';

interface QualityPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function QualityPage({ currentLang }: QualityPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <Quality currentLang={currentLang} />
    </div>
  );
}
