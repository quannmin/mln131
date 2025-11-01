import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy,
  BarChart3,
  BookOpen,
  MessageSquare,
  Home,
  CheckCircle,
  Sparkles,
  ArrowRight,
  MapPin,
} from "lucide-react";

const CompletionScreen = () => {
  const actions = [
    {
      title: "Xem Bản đồ Dân tộc",
      description: "54 dân tộc & chính sách phát triển",
      icon: <MapPin className="w-8 h-8" />,
      color: "vietnam-yellow",
      path: "/ban-do-dan-toc",
      gradient: "from-vietnam-red to-vietnam-yellow",
    },
    {
      title: "Xem So sánh & Phân tích",
      description: "Chiếm dụng hay Chênh lệch khách quan?",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "ethnic-green",
      path: "/chiem-dung-hay-chenh-lech",
      gradient: "from-ethnic-green to-ethnic-emerald",
    },
    {
      title: "Khám phá Bảo tàng",
      description: "Di sản văn hóa các dân tộc Việt Nam",
      icon: <BookOpen className="w-8 h-8" />,
      color: "ethnic-blue",
      path: "/bao-tang",
      gradient: "from-ethnic-blue to-ethnic-cyan",
    },
    {
      title: "Làm Trắc nghiệm",
      description: "Kiểm tra kiến thức đã học",
      icon: <Trophy className="w-8 h-8" />,
      color: "ethnic-orange",
      path: "/trac-nghiem",
      gradient: "from-ethnic-orange to-vietnam-yellow",
    },
    {
      title: "Chat với AI",
      description: "Hỏi đáp cùng trợ lý thông minh",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "ethnic-purple",
      path: "/chatbot-ai",
      gradient: "from-ethnic-purple to-ethnic-pink",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900 flex items-center justify-center px-4 py-12">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-vietnam-yellow to-ethnic-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-ethnic-blue to-ethnic-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-5xl w-full"
      >
        {/* Success Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-vietnam rounded-full mb-6 shadow-2xl shadow-vietnam-yellow/30">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
              🎉 Chúc mừng!
            </h1>

            <p className="text-2xl text-slate-300 mb-2">
              Bạn đã hoàn thành{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam font-bold">
                4 Chương
              </span>{" "}
              nghiên cứu
            </p>

            <div className="flex items-center justify-center gap-2 text-slate-400">
              <Sparkles className="w-5 h-5 text-vietnam-yellow" />
              <span>Hành trình Khám phá Vấn đề Dân tộc Việt Nam</span>
              <Sparkles className="w-5 h-5 text-vietnam-yellow" />
            </div>
          </motion.div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mb-12 p-6 bg-slate-900/60 backdrop-blur-md border-l-4 border-vietnam-yellow rounded-r-2xl"
        >
          <p className="text-slate-300 text-lg italic text-center leading-relaxed">
            "Nước Việt Nam là một, dân tộc Việt Nam là một,
            <br />
            sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi"
          </p>
          <p className="text-vietnam-yellow text-center mt-2 font-semibold">
            - Chủ tịch Hồ Chí Minh
          </p>
        </motion.div>

        {/* Next Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Tiếp tục Khám phá
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {actions.map((action, index) => (
              <motion.div
                key={action.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={action.path}
                  className={`block p-6 bg-gradient-to-br ${action.gradient}/20 backdrop-blur-md border border-${action.color}/30 rounded-2xl hover:border-${action.color}/60 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${action.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <div className="text-white">
                        {action.icon}
                      </div>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-vietnam-yellow transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">
                        {action.description}
                      </p>
                      <div className="flex items-center gap-2 text-vietnam-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-sm font-semibold">Khám phá ngay</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Back to Hub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <Link
            to="/van-de-dan-toc"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl text-slate-300 hover:text-white hover:border-slate-600 transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Quay về Trang tổng quan
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CompletionScreen;
