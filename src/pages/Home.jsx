import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  Users,
  Heart,
  TrendingUp,
  BookOpen,
  ArrowRight,
  ChevronDown,
  Award,
  Target,
  Globe,
  Sparkles,
  Scale,
  Handshake,
  CheckCircle,
  AlertCircle,
  AlertTriangle,
  Trophy,
} from "lucide-react";
import { ROUTES } from "../utils/constants";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const chapters = [
    {
      chapter: "Chương 1",
      emoji: "📚",
      icon: <BookOpen className="h-8 w-8" />,
      title: "Cơ sở Lý luận",
      subtitle: "Mác-Lênin & Tư tưởng Hồ Chí Minh",
      points: [
        "Quyền bình đẳng giữa các dân tộc",
        "Quyền tự quyết dân tộc",
        "Đoàn kết trong quá độ CNXH"
      ],
      color: "ethnic-blue",
      gradient: "bg-gradient-to-br from-blue-500/20 to-ethnic-blue/20",
    },
    {
      chapter: "Chương 2",
      emoji: "🇻🇳",
      icon: <Users className="h-8 w-8" />,
      title: "Thực tiễn Việt Nam",
      subtitle: "Quan hệ Kinh - DTTS hiện nay",
      points: [
        "Thành tựu: 137,000 tỷ đầu tư 2021-2030",
        "Thách thức: Chênh lệch vẫn còn",
        "Định hướng giải quyết"
      ],
      color: "ethnic-green",
      gradient: "bg-gradient-to-br from-green-500/20 to-ethnic-emerald/20",
    },
    {
      chapter: "Chương 3",
      emoji: "🤝",
      icon: <Handshake className="h-8 w-8" />,
      title: "Đại đoàn kết Dân tộc",
      subtitle: "Quan điểm & Giải pháp",
      points: [
        "4 Quan điểm cơ bản của Đảng",
        "Yêu cầu mới trong toàn cầu hóa",
        "Phát huy vai trò chủ thể nhân dân"
      ],
      color: "vietnam-yellow",
      gradient: "bg-gradient-to-br from-yellow-500/20 to-amber-400/20",
    },
    {
      chapter: "Chương 4",
      emoji: "💡",
      icon: <Award className="h-8 w-8" />,
      title: "Kết luận & Bài học",
      subtitle: "Ý nghĩa và Định hướng",
      points: [
        "Chênh lệch khách quan ≠ Chiếm dụng",
        "Đoàn kết - nền tảng xây dựng CNXH",
        "Kim chỉ nam cho tương lai"
      ],
      color: "vietnam-red",
      gradient: "bg-gradient-to-br from-red-500/20 to-orange-400/20",
    },
  ];

  const stats = [
    { number: 54, suffix: "", label: "Dân tộc anh em", color: "text-vietnam-yellow" },
    { number: 85.3, suffix: "%", label: "Dân tộc Kinh (Số liệu dân số theo Kết quả toàn bộ Tổng điều tra Dân số và Nhà ở Việt Nam năm 2019)", color: "text-ethnic-blue" },
    { number: 17, suffix: "%", label: "Tỷ lệ hộ nghèo DTTS (2023)", color: "text-ethnic-green" },
    { number: 137000, suffix: " tỷ", label: "Vốn đầu tư 2021-2030", color: "text-ethnic-orange" },
  ];

  const methodology = [
    {
      icon: <Award className="h-6 w-6" />,
      text: "Dựa trên quan điểm Mác-Lênin và tư tưởng Hồ Chí Minh",
      color: "from-ethnic-blue to-ethnic-cyan",
    },
    {
      icon: <Target className="h-6 w-6" />,
      text: "Phân tích khách quan dựa trên dữ liệu thực tế",
      color: "from-ethnic-purple to-ethnic-pink",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      text: "Ứng dụng AI (ChatGPT) hỗ trợ tư duy, tra cứu và biên tập học thuật",
      color: "from-ethnic-green to-ethnic-emerald",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      text: "Góp phần củng cố khối đại đoàn kết dân tộc",
      color: "from-vietnam-red to-vietnam-yellow",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 overflow-hidden">
      {/* Animated Background with Ethnic Diversity Theme */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Multiple colored blobs representing diversity */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-vietnam-red to-ethnic-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-ethnic-blue to-ethnic-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-vietnam-yellow to-ethnic-green rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />

        {/* Decorative pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
            {[...Array(64)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
                className="border border-white/10"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Vietnam Flag - Enhanced */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="fixed top-24 left-8 z-10 hidden lg:block"
      >
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          {/* Glow effect behind flag */}
          <div className="absolute inset-0 bg-vietnam-yellow/30 blur-2xl rounded-lg transform scale-110" />

          {/* Vietnam Flag */}
          <div className="relative w-40 h-28 bg-vietnam-red rounded-lg shadow-2xl border-4 border-vietnam-yellow/60 overflow-hidden">
            {/* Shine effect */}
            <motion.div
              animate={{
                x: ["-100%", "200%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
            />

            {/* Flag wave effect */}
            <motion.div
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.1) 50%, transparent 50%, transparent 75%, rgba(255,255,255,0.1) 75%)",
                backgroundSize: "20px 20px"
              }}
            />

            {/* Yellow Star */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 360]
              }}
              transition={{
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <svg width="56" height="56" viewBox="0 0 24 24" className="text-vietnam-yellow drop-shadow-2xl filter brightness-110">
                <path
                  fill="currentColor"
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                />
              </svg>
            </motion.div>
          </div>

          {/* Flag pole - Enhanced */}
          <div className="absolute -left-2 top-0 w-3 h-full bg-gradient-to-b from-yellow-600 via-yellow-700 to-yellow-900 rounded-full shadow-xl border-r-2 border-yellow-500/50" />
          <div className="absolute -left-2 top-0 w-4 h-2 bg-yellow-600 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Floating Stars Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * window.innerWidth,
              y: -20,
              opacity: 0
            }}
            animate={{
              y: window.innerHeight + 20,
              opacity: [0, 1, 1, 0],
              rotate: 360,
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
            className="absolute"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" className="text-vietnam-yellow">
              <path
                fill="currentColor"
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                opacity={0.3 + Math.random() * 0.4}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      {/* Ethnic Pattern Decoration */}
      <div className="fixed right-0 top-1/4 w-64 h-64 opacity-10 pointer-events-none hidden xl:block">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <svg viewBox="0 0 200 200" className="text-vietnam-yellow">
            <pattern id="ethnic-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="currentColor" />
              <circle cx="30" cy="10" r="2" fill="currentColor" />
              <circle cx="10" cy="30" r="2" fill="currentColor" />
              <circle cx="30" cy="30" r="2" fill="currentColor" />
              <path d="M20 5 L25 15 L15 15 Z" fill="currentColor" />
              <path d="M20 35 L15 25 L25 25 Z" fill="currentColor" />
            </pattern>
            <rect width="200" height="200" fill="url(#ethnic-pattern)" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
          </svg>
        </motion.div>
      </div>


      {/* Communist Party Symbol - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="fixed bottom-12 left-12 z-10 hidden lg:block"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Hammer and Sickle Symbol */}
          <div className="relative w-28 h-28 bg-gradient-to-br from-vietnam-red/30 to-vietnam-yellow/30 backdrop-blur-md rounded-full border-3 border-vietnam-yellow/40 flex items-center justify-center shadow-2xl">
            {/* Glow effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-vietnam-yellow/20 rounded-full blur-xl"
            />

            {/* Symbol */}
            <div className="relative text-vietnam-yellow text-6xl font-bold">
              ☭
            </div>

            {/* Rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-vietnam-yellow/30 rounded-full"
              style={{ borderStyle: "dashed" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Ho Chi Minh Quote Badge - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="fixed bottom-12 right-12 z-10 hidden xl:block max-w-xs"
      >
        <div className="bg-gradient-to-br from-yellow-900/40 to-red-900/40 backdrop-blur-md border-2 border-vietnam-yellow/40 rounded-2xl p-6 shadow-2xl">
          <div className="flex items-start gap-3">
            <div className="text-4xl">🇻🇳</div>
            <div>
              <p className="text-vietnam-yellow font-bold text-sm mb-2">Chủ tịch Hồ Chí Minh</p>
              <p className="text-slate-200 text-xs italic leading-relaxed">
                "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công"
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Badge with 54 Ethnic Groups */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 mb-8"
            >
              {/* 54 Badge */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 20px rgba(255, 205, 0, 0.3)",
                    "0 0 40px rgba(255, 205, 0, 0.6)",
                    "0 0 20px rgba(255, 205, 0, 0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative w-16 h-16 bg-gradient-to-br from-vietnam-red to-vietnam-yellow rounded-2xl flex items-center justify-center shadow-2xl"
              >
                <span className="text-3xl font-black text-white drop-shadow-lg">54</span>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-vietnam-yellow rounded-2xl"
                  style={{ borderStyle: "dashed" }}
                />
              </motion.div>

              {/* Text Badge */}
              <div className="px-6 py-3 bg-gradient-to-r from-vietnam-red/20 to-vietnam-yellow/20 backdrop-blur-md border border-vietnam-yellow/30 rounded-full">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-vietnam-yellow" />
                  <span className="text-slate-100 text-sm font-medium">
                    Nghiên cứu vấn đề dân tộc Việt Nam
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-vietnam-red via-vietnam-yellow to-vietnam-red">
                54 Dân tộc
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-white">
                Một Tổ quốc
              </span>
            </motion.h1>

            {/* Question */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-3xl md:text-5xl font-bold text-slate-200 mb-8 leading-tight max-w-4xl mx-auto"
            >
              Người Kinh có{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                "chiếm dụng"
              </span>{" "}
              văn hóa, kinh tế và chính trị?
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Khám phá câu trả lời thông qua phân tích khoa học dựa trên quan điểm Mác-Lênin,
              tư tưởng Hồ Chí Minh và thực tiễn chính sách dân tộc của Việt Nam
            </motion.p>

            {/* Context Box - Nguồn gốc vấn đề */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="max-w-4xl mx-auto mb-12 p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl"
            >
              <p className="text-lg text-slate-300 leading-relaxed text-center">
                Trong bối cảnh <span className="text-vietnam-yellow font-semibold">toàn cầu hóa</span> và{" "}
                <span className="text-vietnam-yellow font-semibold">truyền thông xã hội</span> ngày càng đa chiều,
                xuất hiện một số quan điểm cho rằng người Kinh "chiếm dụng" văn hóa, kinh tế và chính trị.
                Vậy <span className="text-ethnic-blue font-semibold">điều này có đúng không?</span>
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
            >
              <Link
                to={ROUTES.ETHNIC_CONCEPT}
                className="group relative px-8 py-4 bg-gradient-to-r from-vietnam-red to-vietnam-yellow rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-vietnam-red/50 transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-vietnam-red to-vietnam-yellow rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative flex items-center justify-center">
                  Khám phá ngay
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to={ROUTES.ETHNIC_MAP}
                className="group relative px-8 py-4 bg-blue-900/30 backdrop-blur-md border border-blue-600/50 rounded-2xl font-bold text-white text-lg hover:bg-blue-900/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center justify-center">
                  <Globe className="mr-2 h-5 w-5" />
                  Bản đồ 54 Dân tộc
                </span>
              </Link>

              <Link
                to={ROUTES.ETHNIC_DEBATE}
                className="group relative px-8 py-4 bg-yellow-900/30 backdrop-blur-md border border-yellow-600/50 rounded-2xl font-bold text-white text-lg hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative flex items-center justify-center">
                  <Users className="mr-2 h-5 w-5" />
                  So sánh quan điểm
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-8 h-8 text-slate-500" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 bg-yellow-900/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl hover:bg-yellow-900/50 transition-all duration-300 hover:scale-105 group shadow-lg"
              >
                <div className={`text-6xl font-black ${stat.color} mb-3`}>
                  {statsInView && (
                    <CountUp
                      end={stat.number}
                      duration={2.5}
                      decimals={stat.suffix === "%" ? 1 : 0}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-slate-200 text-base font-medium">{stat.label}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Tính Thời sự Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Tại sao vấn đề này{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                quan trọng
              </span>?
            </h2>
            <p className="text-xl text-slate-300">
              Ba lý do cần nghiên cứu và làm rõ ngay bây giờ
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                title: "Đại đoàn kết là đường lối chiến lược",
                desc: "Sự chênh lệch vẫn tồn tại, nếu không giải thích đúng → quan điểm thiếu khách quan, ảnh hưởng đến tinh thần đoàn kết và ổn định xã hội",
                icon: "🎯",
                color: "ethnic-blue"
              },
              {
                number: "02",
                title: "Hội nhập quốc tế & phát triển bền vững",
                desc: "Việt Nam hướng đến mô hình 'không ai bị bỏ lại phía sau' → cần khẳng định tính đúng đắn, nhân văn của chính sách dân tộc",
                icon: "🌏",
                color: "ethnic-green"
              },
              {
                number: "03",
                title: "Mạng xã hội lan tỏa quan điểm cực đoan",
                desc: "Cần nâng cao nhận thức xã hội, khơi dậy lòng tự hào và củng cố niềm tin về con đường xã hội chủ nghĩa",
                icon: "📱",
                color: "ethnic-orange"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-${item.color}/10 to-${item.color}/5 backdrop-blur-md border border-${item.color}/30 rounded-2xl hover:border-${item.color}/50 transition-all duration-300 hover:scale-[1.02]`}
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl md:text-6xl">{item.icon}</div>
                </div>
                <div className="flex-1">
                  <div className={`text-sm font-bold text-${item.color} mb-2`}>
                    Thứ {item.number}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 p-6 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 border border-vietnam-yellow/30 rounded-2xl"
          >
            <p className="text-slate-300 text-center italic">
              "Nghiên cứu này góp phần <span className="text-vietnam-yellow font-semibold">nâng cao nhận thức xã hội</span>,
              khơi dậy tinh thần trách nhiệm và lòng tự hào về truyền thống đoàn kết dân tộc Việt Nam"
            </p>
          </motion.div>
        </div>
      </section>

      {/* NEW: 4 Chapters Section */}
      <section ref={featuresRef} className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Hành trình{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                Khám phá
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              4 Chương nghiên cứu từ lý thuyết đến thực tiễn
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chapters.map((ch, index) => {
              const chapterRoutes = [ROUTES.CHAPTER_1, ROUTES.CHAPTER_2, ROUTES.CHAPTER_3, ROUTES.CHAPTER_4];
              return (
                <Link key={index} to={chapterRoutes[index]} className="no-underline">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative p-8 ${ch.gradient} backdrop-blur-md border border-${ch.color}/30 rounded-3xl hover:scale-[1.02] transition-all duration-500 group cursor-pointer shadow-lg hover:border-${ch.color}/50`}
                    onMouseEnter={() => setActiveFeature(index)}
                  >
                    {/* Emoji Icon */}
                    <div className="text-6xl mb-4">{ch.emoji}</div>

                    {/* Chapter Label */}
                    <div className={`text-sm font-bold text-${ch.color} mb-2`}>
                      {ch.chapter}
                    </div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {ch.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-slate-400 text-sm mb-6 font-medium">
                      {ch.subtitle}
                    </p>

                    {/* Points */}
                    <ul className="space-y-3">
                      {ch.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                          <CheckCircle className={`w-4 h-4 text-${ch.color} flex-shrink-0 mt-0.5`} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    {/* Arrow indicator on hover */}
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileHover={{ opacity: 1, x: 0 }}
                      className="absolute bottom-6 right-6 flex items-center justify-center w-10 h-10 bg-white/10 backdrop-blur-md rounded-full group-hover:bg-white/20 transition-all duration-300"
                    >
                      <ArrowRight className="w-5 h-5 text-white" />
                    </motion.div>

                    {/* Active indicator */}
                    {activeFeature === index && (
                      <motion.div
                        layoutId="activeChapter"
                        className={`absolute inset-0 border-2 border-${ch.color} rounded-3xl`}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl p-10 shadow-xl"
          >
            <h3 className="text-4xl font-bold text-white mb-3 text-center">
              Phương pháp nghiên cứu
            </h3>
            <p className="text-slate-400 text-center mb-8">
              Kết hợp lý luận khoa học, dữ liệu thực tế và công nghệ AI
            </p>
            <div className="space-y-6">
              {methodology.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="flex items-center text-slate-200"
                >
                  <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-4 shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="text-xl font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* NEW: Achievements & Challenges Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Thực tế{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                Quan hệ Dân tộc
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Thành tựu đạt được và Thách thức còn tồn tại
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Thành tựu */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-ethnic-green/20 to-ethnic-green/5 border border-ethnic-green/30 rounded-3xl p-8 hover:border-ethnic-green/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-ethnic-green" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Thành tựu đạt được</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "15-17% đại biểu Quốc hội là người DTTS",
                  "Hàng triệu hộ thoát nghèo (17% năm 2023)",
                  "UNESCO công nhận di sản văn hóa 2005, 2016",
                  "Đoàn kết vững chắc, bảo vệ biên giới quốc gia"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3 text-slate-200"
                  >
                    <CheckCircle className="w-5 h-5 text-ethnic-green flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Thách thức */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-ethnic-orange/20 to-ethnic-orange/5 border border-ethnic-orange/30 rounded-3xl p-8 hover:border-ethnic-orange/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-ethnic-orange" />
                <h3 className="text-2xl md:text-3xl font-bold text-white">Thách thức còn tồn tại</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Khoảng cách kinh tế-xã hội vẫn còn đáng kể",
                  "Nguy cơ mai một bản sắc văn hóa do đô thị hóa",
                  "Xuất hiện quan điểm lệch lạc trên mạng xã hội",
                  "Năng lực quản lý và triển khai chính sách cần nâng cao"
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * i }}
                    className="flex gap-3 text-slate-200"
                  >
                    <AlertTriangle className="w-5 h-5 text-ethnic-orange flex-shrink-0 mt-0.5" />
                    <span className="text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Insight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-6 bg-gradient-to-r from-ethnic-blue/10 to-ethnic-purple/10 border border-ethnic-blue/30 rounded-2xl"
          >
            <p className="text-slate-300 text-center text-lg">
              💡 <span className="font-semibold text-ethnic-blue">Nhận định:</span> Khoảng cách phát triển là có thật,
              nhưng đây là <span className="font-bold text-vietnam-yellow">hệ quả khách quan</span> của điều kiện
              tự nhiên và lịch sử - KHÔNG PHẢI "chiếm dụng" có hệ thống.
              Chính sách của Nhà nước nhất quán hướng tới <span className="font-bold text-ethnic-green">bình đẳng</span> và{" "}
              <span className="font-bold text-ethnic-green">đoàn kết</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl p-12 shadow-xl"
          >
            {/* Conclusion Box */}
            <div className="mb-10 p-8 bg-gradient-to-r from-ethnic-blue/20 to-ethnic-purple/20 rounded-3xl border border-ethnic-blue/40">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                💡 Kết luận Nghiên cứu
              </h3>
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-6">
                Sự chênh lệch về vai trò giữa người Kinh và các dân tộc thiểu số là{" "}
                <span className="font-black text-vietnam-yellow">HỆ QUẢ KHÁCH QUAN</span>{" "}
                của yếu tố lịch sử, địa lý và mức độ phát triển kinh tế - xã hội,{" "}
                <span className="font-black text-vietnam-yellow">KHÔNG PHẢI "chiếm dụng"</span>{" "}
                có hệ thống.
              </p>
              <div className="border-t border-slate-600 pt-6">
                <p className="text-slate-400 italic leading-relaxed">
                  "Đoàn kết dân tộc trong thời đại số không chỉ thể hiện ở chính sách,
                  mà còn ở <span className="text-ethnic-blue font-semibold">ý thức công dân</span>,{" "}
                  <span className="text-ethnic-green font-semibold">tinh thần tôn trọng khác biệt</span> và{" "}
                  <span className="text-ethnic-orange font-semibold">trách nhiệm chung</span> trên mọi nền tảng xã hội."
                </p>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Khám phá{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                chi tiết
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Tìm hiểu sâu hơn về cơ sở lý luận, thực tiễn và bài học từ nghiên cứu này
            </p>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={ROUTES.ETHNIC_CONCEPT}
                className="inline-flex items-center px-8 py-4 bg-gradient-vietnam rounded-2xl font-bold text-white text-lg shadow-2xl hover:shadow-vietnam-yellow/25 transition-all duration-300"
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Bắt đầu học tập
              </Link>
            </motion.div>

            <div className="mt-8 text-slate-400 text-base italic max-w-2xl mx-auto p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
              "Nước Việt Nam là một, dân tộc Việt Nam là một, sông có thể cạn,
              núi có thể mòn, song chân lý ấy không bao giờ thay đổi"
              <br />
              <span className="text-vietnam-yellow font-semibold">- Chủ tịch Hồ Chí Minh</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
