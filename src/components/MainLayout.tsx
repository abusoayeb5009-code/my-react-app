import { Technology } from '../types';
import TechList from './TechList';
import Sidebar from './Sidebar';

interface MainLayoutProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (tech: Technology) => void;
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

export default function MainLayout({
  technologies,
  stack,
  onAddToStack,
  onRemoveFromStack,
  onRemoveAll,
}: MainLayoutProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <h2 className="text-3xl font-bold mb-2">Explore the Technologies</h2>
        <p className="text-gray-400 mb-8">
          Pick one technology per category to build your ideal stack
        </p>

        <TechList technologies={technologies} stack={stack} onAddToStack={onAddToStack} />
      </div>

      <Sidebar stack={stack} onRemoveFromStack={onRemoveFromStack} onRemoveAll={onRemoveAll} />
    </main>
  );
}