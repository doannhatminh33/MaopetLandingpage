import { notFound } from 'next/navigation';
import products from '../../../data/products.json';

// Add this function for static export
export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <main style={{ padding: 32 }}>
      <h1 style={{ fontSize: 32, fontWeight: 'bold' }}>{product.name}</h1>
      <p style={{ fontSize: 20, margin: '16px 0' }}>{product.description}</p>
      <p style={{ fontSize: 24, color: '#008080' }}>Price: ${product.price}</p>
    </main>
  );
} 