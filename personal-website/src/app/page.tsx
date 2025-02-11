'use client';

export default function Home() {
  return (
    <div className="bg-grey-900 text-white h-screen flex flex-col justify-center items-center animate-fadeIn">
      <h1 className="text-4xl font-bold">I am</h1>
      <h1 className="animate-slideIn text-6xl font-bold mt-2 text-8xl animate-grow">
        michaelbayo.uk<span className="animate-cursor">|</span>
      </h1>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateY(-50px); }
          to { transform: translateY(0); }
        }
        @keyframes grow {
          from { transform: scale(0.8); }
          to { transform: scale(1); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-cursor {
          animation: blink 2s infinite;
        }
      `}</style>
    </div>
  );
}
