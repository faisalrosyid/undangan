"use client";
'use client'; // Wajib ada untuk komponen interaktif di Next.js

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

// Komponen utama undangan
function UndanganContent() {
  const searchParams = useSearchParams();
  const namaTamu = searchParams.get('to') || 'Tamu Undangan';

  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
      {/* Kartu Utama */}
      <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-md w-full border border-stone-100 overflow-hidden text-center transition-all duration-500">
        
        {/* Dekorasi Bunga Sudut */}
        <div className="absolute top-4 left-4 text-rose-300 text-3xl opacity-70">✿</div>
        <div className="absolute bottom-4 right-4 text-rose-300 text-3xl opacity-70 rotate-180">✿</div>

        {/* Judul */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif text-rose-950 mb-2">
            Wildan <span className="text-rose-300">&</span> Lulu
          </h1>
          <p className="text-sm text-stone-400 tracking-widest uppercase mt-1">15 Agustus 2026</p>
        </div>

        {/* Foto */}
        <div className="mb-8 aspect-[3/4] w-full max-w-xs mx-auto overflow-hidden rounded-2xl shadow-inner border border-stone-100">
          <img 
            src="/DSC_0111" 
            alt="Pengantin" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Sapaan */}
        <div className="space-y-3 mb-8">
          <p className="text-stone-500 font-medium italic text-base">Halo, {namaTamu}!</p>
          <p className="text-stone-600 text-sm leading-relaxed max-w-sm mx-auto">
            Dengan penuh kebahagiaan, kami mengundang Anda untuk merayakan momen istimewa pernikahan kami. Kehadiran Anda adalah anugerah bagi kami.
          </p>
        </div>

        {/* Tombol Konfirmasi */}
        <a 
          href={`https://wa.me/6289690223352?text=Halo, saya ${namaTamu} konfirmasi hadir di acara Wildan & Lulu.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 bg-rose-900 text-white rounded-full shadow-lg hover:bg-rose-950 transition-all font-semibold tracking-wide text-sm"
        >
          Konfirmasi Kehadiran
        </a>
      </div>
    </div>
  );
}

// Dibungkus dengan Suspense karena menggunakan useSearchParams
export default function Page() {
  return (
    <Suspense fallback={<div>Memuat...</div>}>
      <UndanganContent />
    </Suspense>
  );
}