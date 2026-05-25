import About from '../components/About';

interface AboutUsProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function AboutUs({ currentLang }: AboutUsProps) {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <About currentLang={currentLang} />
    </div>
  );
}
