import heroImg from '../assets/banner-stack.png';

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-16 py-12 max-w-7xl mx-auto">
      <div className="md:w-1/2 space-y-5">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Build Your Ideal <br />
          <span className="text-purple-700">Development Stack</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md leading-relaxed">
          Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex gap-4 pt-2">
          <button className="px-6 py-2.5 bg-gradient-to-r from-pink-600 to-purple-800 text-white font-medium text-sm rounded-lg shadow-sm hover:opacity-90">
            Explore Technologies
          </button>
          <button className="px-6 py-2.5 bg-gray-100 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-200">
            Learn More
          </button>
        </div>
      </div>

      <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
        <img src={heroImg} alt="DevStack Illustration" className="w-80 md:w-[400px] object-contain" />
      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      <div className="max-w-2xl text-center lg:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Build Your Ideal <span className="text-brand-gradient">Development Stack</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Explore frontend, backend, database, and tooling options. Compare them side by side, and put together the stack that fits your next project.
        </p>
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <button className="brand-gradient px-6 py-3 rounded-xl font-semibold text-white hover:opacity-90 transition">
            Explore Technologies
          </button>
          <button className="px-6 py-3 rounded-xl font-semibold border border-slate-700 hover:bg-slate-900 text-gray-300 transition">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full max-w-md lg:max-w-lg">
        <div className="p-1 brand-gradient rounded-3xl">
          <div className="bg-slate-950 p-8 rounded-[23px] text-center">
            <span className="text-6xl">🚀</span>
            <p className="mt-4 text-sm text-gray-400">Custom Stack Architecture Builder</p>
          </div>
        </div>
      </div>
    </section>
  );
}