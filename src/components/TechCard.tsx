import { FaStar } from 'react-icons/fa';
import { Technology } from '../types';

interface TechCardProps {
  tech: Technology;
  stack: Technology[];
  onAddToStack: (tech: Technology) => void;
}

export default function TechCard({ tech, stack, onAddToStack }: TechCardProps) {
  // Check kora already selected kina
  const isAdded = stack.some((item) => item.id === tech.id);

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition duration-300">
      <div>
        <div className="flex justify-between items-start mb-4">
          <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain" />
          <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-pink-400 border border-slate-700">
            {tech.badge}
          </span>
        </div>

        <h3 className="text-xl font-bold mb-2 text-white">{tech.name}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tech.description}</p>

        <div className="flex items-center gap-2 mb-4 text-xs">
          <span className="px-2 py-1 rounded bg-slate-800 text-gray-300">{tech.category}</span>
          <span className="px-2 py-1 rounded bg-slate-800 text-gray-300">{tech.difficulty}</span>
          <div className="flex items-center gap-1 text-amber-400 ml-auto">
            <FaStar />
            <span>{tech.rating}</span>
          </div>
        </div>
      </div>

      {/* Button State Logic */}
      <button
        disabled={isAdded}
        onClick={() => onAddToStack(tech)}
        className={`w-full py-2.5 px-4 rounded-xl text-sm font-semibold transition duration-200 ${
          isAdded
            ? 'bg-slate-800 text-gray-500 cursor-not-allowed border border-slate-700'
            : 'brand-gradient text-white hover:opacity-90 active:scale-95'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}