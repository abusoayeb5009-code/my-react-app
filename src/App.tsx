import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import type { Technology } from './types';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MainLayout from './components/MainLayout';
import Footer from './components/Footer';

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [stack, setStack] = useState<Technology[]>([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Data fetch korte somossa hoyeche');
        const data: Technology[] = await response.json();
        setTechnologies(data);
      } catch (err: any) {
        setError(err.message || 'Somossa hoyeche');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Dhap 8: Add to Stack & Duplicate Check Logic
  const handleAddToStack = (tech: Technology) => {
    const isAlreadyAdded = stack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning('Already added!');
      return;
    }

    setStack((previousStack) => [...previousStack, tech]);
    toast.success('Technology added!');
  };

  // Dhap 9: Remove Single Technology
  const handleRemoveFromStack = (id: string) => {
    setStack((previousStack) => previousStack.filter((item) => item.id !== id));
    toast.info('Technology removed!');
  };

  // Dhap 10: Remove All Stack
  const handleRemoveAll = () => {
    setStack([]);
    toast.error('All technologies removed!');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col justify-between">
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      
      <div>
        <Navbar />
        <Hero />

        {loading ? (
          <div className="text-center py-20 text-xl text-gray-400">Loading Technologies...</div>
        ) : error ? (
          <div className="text-center py-20 text-red-500">Error: {error}</div>
        ) : (
          <MainLayout
            technologies={technologies}
            stack={stack}
            onAddToStack={handleAddToStack}
            onRemoveFromStack={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}