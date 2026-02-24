'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

const STORAGE_KEY = 'formModalDismissed';
const DELAY_MS = 10_000;

export const FormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* SSR / private-mode guard */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }

    const timer = setTimeout(() => setIsOpen(true), DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, close]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <button
          onClick={close}
          aria-label="Close form"
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <FiX className="text-lg text-gray-600" />
        </button>

        <iframe
          id="JotFormIFrame-260546421535050"
          title="Registration Form"
          allowTransparency={true}
          allow="geolocation; microphone; camera; fullscreen; payment"
          src="https://form.jotform.com/260546421535050"
          style={{
            width: '100%',
            height: '539px',
            border: 'none',
          }}
        />
      </div>
    </div>
  );
};
