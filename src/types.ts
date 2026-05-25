export interface Product {
  id: string;
  name: string;
  category: 'monuments' | 'slabs' | 'coverings' | 'sculptures';
  image: string;
  description: string;
  priceEstimate: string;
  colors: string[];
  dimensions: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface GraniteType {
  id: string;
  name: string;
  origin: string;
  colorHex: string;
  image: string;
  description: string;
}

export interface CalculatorState {
  monumentType: string;
  graniteId: string;
  size: 'small' | 'medium' | 'large';
  engravingLines: number;
  hasCoverSlab: boolean;
  hasCurbing: boolean;
}
