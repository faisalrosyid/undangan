"use client";
import { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function UndanganContent() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const searchParams = useSearchParams();
  const namaTamu = searchParams.get('to') || 'Tamu Undangan';

  const handleBuka = () => {
    setIsOpen(true);
    if (audioRef.current) audioRef.current.play();
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4">
      <audio ref={audioRef} loop src="/Feast - Nina.mp3" />
      
      {!isOpen ? (
        // LAYAR DEPAN
        <div className="text-center animate-fade-in">
          <p className="text-stone-500 italic">Kepada Yth:</p>
          <h2 className="text-3xl font-serif font-bold text-rose-900 my-4">{namaTamu}</h2>
          <button 
            onClick={handleBuka}
            className="px-8 py-3 bg-rose-700 text-white rounded-full shadow-lg hover:bg-rose-800 transition"
          >
            Buka Undangan
          </button>
        </div>
      ) : (
        // ISI UNDANGAN
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full border border-rose-100 space-y-6">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-serif text-rose-900">Wildan & Lulu</h1>
            <p className="text-sm text-stone-500 mt-2">15 Agustus 2026</p>
          </div>

          {/* Galeri / Foto */}
          <div className="h-64 w-full bg-stone-200 rounded-xl flex items-center justify-center text-stone-400">
            [Foto Pengantin]
          </div>

          {/* Detail Acara */}
          <div className="space-y-4 text-center">
            <p>Halo, <strong>{namaTamu}</strong>!</p>
            <p className="text-stone-600 text-sm leading-relaxed">
              Dengan penuh kebahagiaan, kami mengundang Anda untuk menjadi bagian dari hari bahagia kami.
            </p>
          </div>

          {/* RSVP */}
          <a 
            href={`https://wa.me/6289690223352?text=Halo, saya ${namaTamu} konfirmasi hadir di acara Wildan & Lulu.`}
            target="_blank"
            className="block w-full py-3 bg-green-600 text-white text-center rounded-xl hover:bg-green-700 transition font-medium"
          >
            Konfirmasi Kehadiran (WhatsApp)
          </a>

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