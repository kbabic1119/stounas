import About from '../components/About';

interface AboutUsProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function AboutUs({ currentLang }: AboutUsProps) {
  return (
    <div className="pt-24 min-h-screen bg-neutral-950">
      <About currentLang={currentLang} />
    </div>
  );
}
