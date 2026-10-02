import { FaTimes } from 'react-icons/fa';
import type { Technology } from '../types';

interface SidebarProps {
  stack: Technology[];
  onRemoveFromStack: (id: string) => void;
  onRemoveAll: () => void;
}

export default function Sidebar({ stack, onRemoveFromStack, onRemoveAll }: SidebarProps) {
  return (
    <aside className="w-full lg:w-80 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 h-fit sticky top-24">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Your Stack</h3>
        <span className="text-sm bg-slate-800 px-2.5 py-0.5 rounded-full text-pink-400">
          {stack.length} Selected
        </span>
      </div>

      {/* Empty State vs Selected Items Logic */}
      {stack.length === 0 ? (
        <div className="text-center py-10 border border-dashed border-slate-800 rounded-xl text-gray-500 text-sm">
          Your stack is empty
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-slate-800/80 p-3 rounded-xl border border-slate-700/50"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                <div>
                  <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                  <span className="text-xs text-gray-400">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemoveFromStack(item.id)}
                className="text-gray-400 hover:text-red-400 transition"
              >
                <FaTimes />
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 py-2 text-xs font-semibold text-gray-400 hover:text-red-400 hover:bg-red-500/10 border border-slate-700 hover:border-red-500/30 rounded-xl transition"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
}