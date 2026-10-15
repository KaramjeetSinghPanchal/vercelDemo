import Image from "next/image";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>

      <div className="animate-fade-in-up text-center text-2xl font-bold text-zinc-800 dark:text-white">
        Hii karam, let's start learning Vercel! 🐳
      </div>
    </div>
  );
}

