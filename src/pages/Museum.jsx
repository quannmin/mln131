import { useState, useEffect } from "react";
import { Building2, ArrowRight, Star, ChevronDown, Award, Camera, Map } from "lucide-react";

const Museum = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleStart = () => {
    window.location.href = '/museum.html';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-red-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-yellow-400 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -top-40 left-1/2 w-96 h-96 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Socialist symbols pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-6xl">⚒</div>
          <div className="absolute top-40 right-32 text-4xl">☭</div>
          <div className="absolute bottom-32 left-40 text-5xl">⭐</div>
          <div className="absolute bottom-20 right-20 text-4xl">⚒</div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center max-w-6xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6 flex justify-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl shadow-2xl">
                <Building2 className="w-12 h-12 text-red-900" />
              </div>
            </div>

            <h1 className="py-8 text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-yellow-200 to-red-200 mb-6 leading-tight">
              Bảo tàng
              <br />
              Lịch sử 3D
            </h1>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button
                onClick={handleStart}
                className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center">
                  Tham quan bảo tàng
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Museum;