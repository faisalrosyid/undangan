"use client";
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function UndanganContent() {
  const [isOpen, setIsOpen] = useState(false);
  const searchParams = useSearchParams();
  const namaTamu = searchParams.get('to') || 'Tamu Undangan';

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {!isOpen ? (
        <div className="text-center">
          <p className="mb-2">Kepada Yth:</p>
          <h2 className="text-xl font-bold mb-6">{namaTamu}</h2>
          <button 
            onClick={() => setIsOpen(true)}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700"
          >
            Buka Undangan
          </button>
        </div>
      ) : (
        <div className="text-center p-6 bg-white shadow-xl rounded-lg">
          <h1 className="text-2xl font-bold">Halo, {namaTamu}!</h1>
          <p className="mt-2">Terima kasih sudah hadir di acara kami.</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UndanganContent />
    </Suspense>
  );
}