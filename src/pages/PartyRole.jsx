import { useState, useEffect } from "react";
import CoDang from "../assets/co-dang.jpg";
import DanChu from "../assets/dan-chu.png";
import TuPhap from "../assets/Balance.png";
import LapPhap from "../assets/Legislative.png";
import TuTuong from "../assets/Idea.png";
import CuongLinh from "../assets/Target.png";
import ToChuc from "../assets/Organization.png";
import HanhPhap from "../assets/Executive.png";
import Kiemtra from "../assets/Check.png";

const PartyRole = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for background
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
    }));
    setParticles(newParticles);
  }, []);

  const sectionColors = {
    1: {
      main: "#e11d48",
      light: "#fecdd3",
      gradient: "from-rose-500 to-pink-600",
    },
    2: {
      main: "#ea580c",
      light: "#fed7aa",
      gradient: "from-orange-500 to-amber-600",
    },
    3: {
      main: "#ca8a04",
      light: "#fef3c7",
      gradient: "from-yellow-500 to-orange-500",
    },
    4: {
      main: "#16a34a",
      light: "#bbf7d0",
      gradient: "from-green-500 to-emerald-600",
    },
    5: {
      main: "#0891b2",
      light: "#a5f3fc",
      gradient: "from-cyan-500 to-blue-500",
    },
    6: {
      main: "#2563eb",
      light: "#bfdbfe",
      gradient: "from-blue-500 to-indigo-600",
    },
    7: {
      main: "#7c3aed",
      light: "#ddd6fe",
      gradient: "from-violet-500 to-purple-600",
    },
    8: {
      main: "#c026d3",
      light: "#f5d0fe",
      gradient: "from-fuchsia-500 to-pink-600",
    },
  };

  const sections = [
    {
      id: 1,
      symbol: DanChu,
      title: "Dân chủ XHCN",
      subtitle: "Dân vận & Tham gia xã hội",
      description: "Bảo đảm quyền làm chủ, mở kênh tham vấn - giám sát",
    },
    {
      id: 2,
      symbol: TuPhap,
      title: "Tư pháp",
      subtitle: "Bảo vệ công lý",
      description:
        "Xây dựng tư pháp liêm chính, chuyên nghiệp, bảo đảm quyền con người",
    },
    {
      id: 3,
      symbol: LapPhap,
      title: "Lập pháp",
      subtitle: "Xây dựng pháp luật",
      description: "Bảo đảm hệ thống pháp luật hợp hiến, đồng bộ, khả thi",
    },
    {
      id: 4,
      symbol: TuTuong,
      title: "Tư tưởng",
      subtitle: "Lý luận",
      description: "Định hướng giá trị và thống nhất nhận thức xã hội",
    },
    {
      id: 5,
      symbol: CuongLinh,
      title: "Cương lĩnh",
      subtitle: "Chiến lược",
      description: "Định hướng mục tiêu và mô hình phát triển",
    },
    {
      id: 6,
      symbol: ToChuc,
      title: "Tổ chức",
      subtitle: "Cán bộ",
      description: "Xây dựng bộ máy và đội ngũ đủ đức - tài",
    },
    {
      id: 7,
      symbol: HanhPhap,
      title: "Hành pháp",
      subtitle: "Tổ chức thực thi",
      description: "Biến đường lối thành kế hoạch, ngân sách, dịch vụ công",
    },
    {
      id: 8,
      symbol: Kiemtra,
      title: "Kiểm tra - Giám sát",
      subtitle: "Kỷ luật & PCTN",
      description:
        "Giữ kỷ luật Đảng, liêm chính bộ máy, phòng chống tham nhũng",
    },
  ];

  const getCirclePosition = (index, total, radius = 280) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const x = 400 + radius * Math.cos(angle);
    const y = 400 + radius * Math.sin(angle);
    return { x, y, angle };
  };

  const getCardPosition = (index, total) => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    const cardRadius = 420;
    const cardX = 400 + cardRadius * Math.cos(angle);
    const cardY = 400 + cardRadius * Math.sin(angle);

    let alignX = "middle";
    let alignY = "middle";
    if (cardX < 350) alignX = "end";
    else if (cardX > 450) alignX = "start";
    if (cardY < 350) alignY = "end";
    else if (cardY > 450) alignY = "start";

    return { x: cardX, y: cardY, alignX, alignY };
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-950 via-red-900 to-amber-900 text-white">
      {/* Animated Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Radial gradient overlays */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>

        {/* Geometric grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Animated particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-yellow-200"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s infinite ease-in-out`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.6,
            }}
          />
        ))}

        {/* Rotating light beams */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 animate-spin-slow opacity-20">
            <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-yellow-300 to-transparent transform -translate-x-1/2 -translate-y-1/2 rotate-[135deg]"></div>
          </div>
        </div>

        {/* Decorative stars */}
        <div className="absolute top-20 left-20 text-yellow-300 opacity-30 text-2xl animate-pulse">
          ★
        </div>
        <div className="absolute top-40 right-32 text-yellow-400 opacity-40 text-xl animate-pulse animation-delay-1000">
          ★
        </div>
        <div className="absolute bottom-32 left-40 text-red-300 opacity-25 text-3xl animate-pulse animation-delay-2000">
          ★
        </div>
        <div className="absolute bottom-20 right-20 text-orange-300 opacity-35 text-xl animate-pulse animation-delay-3000">
          ★
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block relative mb-4">
              <h1
                className="text-5xl font-bold mb-4 leading-tight 
               bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 
               bg-clip-text text-transparent"
              >
                Vai trò của Đảng
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 blur-2xl -z-10 animate-pulse"></div>
            </div>
            <p className="text-lg md:text-2xl text-yellow-100 font-semibold tracking-wide drop-shadow-lg">
              trong Nhà nước Pháp quyền XHCN
            </p>
            <div className="mt-4 flex justify-center gap-2">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full"></div>
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-5xl aspect-square">
              {/* Glow effect around SVG */}
              <div className="absolute inset-0 bg-gradient-radial from-yellow-500/10 via-transparent to-transparent blur-3xl"></div>

              <svg
                viewBox="0 0 800 800"
                className="w-full h-full relative z-10"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <filter id="centerGlow">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter
                    id="softShadow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="8"
                      stdDeviation="12"
                      floodOpacity="0.3"
                    />
                  </filter>

                  <radialGradient id="bgRadial" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="0.0" />
                  </radialGradient>

                  <radialGradient id="centerGradient" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#991b1b" />
                    <stop offset="100%" stopColor="#7f1d1d" />
                  </radialGradient>

                  <mask id="circleMask">
                    <rect x="0" y="0" width="800" height="800" fill="black" />
                    <circle cx="400" cy="400" r="54" fill="white" />
                  </mask>
                </defs>

                {/* Central radial glow */}
                <circle cx="400" cy="400" r="400" fill="url(#bgRadial)" />

                {/* Decorative circles */}
                <circle
                  cx="400"
                  cy="400"
                  r="320"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  opacity="0.15"
                />
                <circle
                  cx="400"
                  cy="400"
                  r="280"
                  fill="none"
                  stroke="#f59e0b"
                  strokeWidth="2"
                  strokeDasharray="10,5"
                  opacity="0.25"
                />

                {/* Sections */}
                {sections.map((section, index) => {
                  const pos = getCirclePosition(index, sections.length);
                  const cardPos = getCardPosition(index, sections.length);
                  const isActive = activeSection === section.id;
                  const colors = sectionColors[section.id];

                  return (
                    <g
                      key={section.id}
                      onMouseEnter={() => setActiveSection(section.id)}
                      onMouseLeave={() => setActiveSection(null)}
                      style={{ cursor: "pointer" }}
                    >
                      <line
                        x1="400"
                        y1="400"
                        x2={pos.x}
                        y2={pos.y}
                        stroke={isActive ? colors.main : "#fbbf24"}
                        strokeWidth={isActive ? "4" : "2"}
                        strokeDasharray={isActive ? "0" : "8,4"}
                        opacity={isActive ? "0.9" : "0.2"}
                        className="transition-all duration-300"
                      />

                      {isActive && (
                        <>
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="70"
                            fill="none"
                            stroke={colors.main}
                            strokeWidth="2"
                            opacity="0.15"
                            className="animate-ping-slow"
                          />
                          <circle
                            cx={pos.x}
                            cy={pos.y}
                            r="64"
                            fill="none"
                            stroke={colors.main}
                            strokeWidth="3"
                            opacity="0.20"
                            className="animate-pulse"
                          />
                        </>
                      )}

                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="50"
                        fill={isActive ? colors.main : colors.light}
                        stroke={colors.main}
                        strokeWidth={isActive ? "4" : "2"}
                        filter={isActive ? "url(#centerGlow)" : ""}
                        style={{
                          transform: isActive ? "scale(1.12)" : "scale(1)",
                          transformOrigin: `${pos.x}px ${pos.y}px`,
                          transition: "transform 0.25s",
                        }}
                      />

                      <image
                        href={section.symbol}
                        x={pos.x - 20}
                        y={pos.y - 20}
                        width="40"
                        height="40"
                        preserveAspectRatio="xMidYMid meet"
                        style={{
                          transform: isActive ? "scale(1.18)" : "scale(1)",
                          transformOrigin: `${pos.x}px ${pos.y}px`,
                          transition: "transform 0.25s",
                          pointerEvents: "none",
                        }}
                      />

                      {isActive && (
                        <foreignObject
                          x={cardPos.x - 140}
                          y={cardPos.y - 70}
                          width="280"
                          height="140"
                          className="pointer-events-auto"
                        >
                          <div className="w-full h-full flex items-center justify-center p-2">
                            <div
                              className="rounded-2xl p-4 w-full"
                              style={{
                                backdropFilter: "blur(10px)",
                                background:
                                  "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,255,255,0.85))",
                                borderLeft: `4px solid ${colors.main}`,
                                boxShadow: `0 16px 40px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.1)`,
                                animation: "cardIn .3s ease-out",
                              }}
                            >
                              <div className="flex items-start gap-3 mb-2">
                                <div
                                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center overflow-hidden"
                                  style={{ backgroundColor: colors.light }}
                                >
                                  <img
                                    src={section.symbol}
                                    alt={section.title}
                                    className="w-8 h-8 object-contain"
                                  />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h3
                                    className="font-bold text-sm mb-1"
                                    style={{ color: colors.main }}
                                  >
                                    {section.title}
                                  </h3>
                                  <p className="text-xs text-gray-500">
                                    {section.subtitle}
                                  </p>
                                </div>
                              </div>

                              <p className="text-xs text-gray-600 leading-relaxed">
                                {section.description}
                              </p>
                            </div>
                          </div>
                        </foreignObject>
                      )}
                    </g>
                  );
                })}

                {/* Center circle */}
                <g
                  style={{
                    transformOrigin: "400px 400px",
                    animation: "floatSlow 6s ease-in-out infinite",
                  }}
                >
                  {/* Outer glow rings */}
                  <circle
                    cx="400"
                    cy="400"
                    r="100"
                    fill="none"
                    stroke="#fbbf24"
                    strokeOpacity="0.15"
                    strokeWidth="20"
                    filter="url(#centerGlow)"
                  />

                  <circle
                    cx="400"
                    cy="400"
                    r="86"
                    fill="none"
                    stroke="#fbbf24"
                    strokeOpacity="0.12"
                    strokeWidth="12"
                  />

                  {/* Main center disc with gradient */}
                  <circle
                    cx="400"
                    cy="400"
                    r="80"
                    fill="url(#centerGradient)"
                    stroke="#fbbf24"
                    strokeWidth="3"
                    filter="url(#softShadow)"
                  />

                  {/* Inner decorative ring */}
                  <circle
                    cx="400"
                    cy="400"
                    r="62"
                    fill="none"
                    stroke="#dc2626"
                    strokeWidth="6"
                    opacity={activeSection ? 0.95 : 0.25}
                    style={{ transition: "opacity 0.25s, transform 0.3s" }}
                  />

                  {/* Masked center image */}
                  <g mask="url(#circleMask)">
                    <image
                      href={CoDang}
                      x="346"
                      y="346"
                      width="108"
                      height="108"
                      preserveAspectRatio="xMidYMid slice"
                      style={{
                        transformOrigin: "400px 400px",
                        transition: "transform 0.45s ease",
                        transform: activeSection
                          ? "scale(1.02) rotate(-6deg)"
                          : "scale(1) rotate(0deg)",
                        filter: "saturate(1.1) contrast(1.05) brightness(1.05)",
                      }}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-yellow-400/30">
              <p className="text-sm text-yellow-100 font-medium flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
                Di chuột qua các vòng tròn để xem chi tiết
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(8px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes floatSlow {
          0% {
            transform: translateY(0) rotate(-1deg);
          }
          50% {
            transform: translateY(-8px) rotate(1deg);
          }
          100% {
            transform: translateY(0) rotate(-1deg);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -20px) scale(1.1);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          75% {
            transform: translate(20px, 20px) scale(1.05);
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
        .animate-pulse {
          animation: pulseRing 1.6s infinite;
        }
        @keyframes pulseRing {
          0% {
            transform: scale(1);
            opacity: 0.28;
          }
          50% {
            transform: scale(1.06);
            opacity: 0.12;
          }
          100% {
            transform: scale(1);
            opacity: 0.28;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.28s ease-out;
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
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-3000 {
          animation-delay: 3s;
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};

export default PartyRole;
