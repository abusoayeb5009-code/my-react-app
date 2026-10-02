import type { Technology } from '../types';
import TechCard from './TechCard';

interface TechListProps {
  technologies: Technology[];
  stack: Technology[];
  onAddToStack: (tech: Technology) => void;
}

export default function TechList({ technologies, stack, onAddToStack }: TechListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {technologies.map((tech) => (
        <TechCard key={tech.id} tech={tech} stack={stack} onAddToStack={onAddToStack} />
      ))}
    </div>
  );
}