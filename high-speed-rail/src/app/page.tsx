"use client";
import dynamic from 'next/dynamic';

// We need to dynamically import the map component because Leaflet requires window object
const USMap = dynamic(() => import('@/app/components/USMap').then(mod => mod.USMap), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">US High-Speed Rail Network</h1>
      <USMap 
        center={[39.8283, -98.5795]} // Geographic center of the US
        zoom={4}
      />
    </main>
  );
}