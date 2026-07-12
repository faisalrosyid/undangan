"use client";
import { useState, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

<div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
  {/* Kartu Utama dengan background putih dan bayangan lembut */}
  <div className="relative bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full border border-stone-100 overflow-hidden text-center">
    
    {/* Dekorasi Bunga di sudut */}
    <div className="absolute top-4 left-4 text-rose-200 text-3xl">✿</div>
    <div className="absolute bottom-4 right-4 text-rose-200 text-3xl rotate-180">✿</div>

    {/* Judul dengan font serif agar mewah */}
    <div className="mb-8">
      <h1 className="text-4xl font-serif text-rose-950 mb-2">Wildan <span className="text-rose-300">&</span> Lulu</h1>
      <div className="w-16 h-0.5 bg-rose-200 mx-auto mt-4"></div>
    </div>

    {/* Foto (Tambahkan class object-cover agar foto tidak gepeng) */}
    <div className="mb-8 overflow-hidden rounded-2xl shadow-inner border border-stone-100">
      <img 
        src="/foto-pengantin.jpg" 
        alt="Pengantin" 
        className="w-full h-64 object-cover transform hover:scale-105 transition duration-500"
      />
    </div>

    {/* Pesan Sapaan */}
    <div className="space-y-4 mb-8">
      <p className="text-stone-500 font-medium italic">Halo, {namaTamu}!</p>
      <p className="text-stone-600 text-sm leading-relaxed px-2">
        Kami mengundang Anda untuk merayakan momen bahagia pernikahan kami. Kehadiran Anda adalah kehormatan bagi kami.
      </p>
    </div>

    {/* Tombol RSVP yang lebih modern */}
    <a 
      href={`https://wa.me/6281234567890?text=Halo, saya ${namaTamu} konfirmasi hadir.`}
      target="_blank"
      className="block w-full py-4 bg-rose-900 text-white rounded-xl shadow-lg hover:bg-rose-950 transition-all font-semibold tracking-wide uppercase text-sm"
    >
      Konfirmasi Kehadiran
    </a>
  </div>
</div>