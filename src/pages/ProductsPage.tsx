import Products from '../components/Products';

interface ProductsPageProps {
  currentLang: 'LT' | 'EN' | 'RU';
}

export default function ProductsPage({ currentLang }: ProductsPageProps) {
  return (
    <div className="pt-24 min-h-screen bg-transparent">
      <Products currentLang={currentLang} />
    </div>
  );
}
