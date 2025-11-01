import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const ChapterCard = ({ chapter, progress = 0, index }) => {
  const isCompleted = progress === 100;
  const isStarted = progress > 0 && progress < 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link
        to={`/van-de-dan-toc/chuong-${chapter.id}`}
        className="block"
      >
        <div className={`relative p-8 bg-gradient-to-br from-${chapter.color}/20 to-${chapter.color}/5 backdrop-blur-md border border-${chapter.color}/30 rounded-3xl hover:border-${chapter.color}/50 transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-xl`}>

          {/* Status Badge */}
          {isCompleted && (
            <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-ethnic-green/20 border border-ethnic-green/50 rounded-full">
              <CheckCircle className="w-4 h-4 text-ethnic-green" />
              <span className="text-xs font-semibold text-ethnic-green">Hoàn thành</span>
            </div>
          )}
          {isStarted && !isCompleted && (
            <div className="absolute top-4 right-4 px-3 py-1 bg-ethnic-orange/20 border border-ethnic-orange/50 rounded-full">
              <span className="text-xs font-semibold text-ethnic-orange">Đang học</span>
            </div>
          )}

          {/* Emoji Icon */}
          <div className="text-6xl mb-4">{chapter.emoji}</div>

          {/* Chapter Label */}
          <div className={`text-sm font-bold text-${chapter.color} mb-2`}>
            {chapter.number}
          </div>

          {/* Title */}
          <h3 className="text-3xl font-bold text-white mb-2 group-hover:text-vietnam-yellow transition-colors">
            {chapter.title}
          </h3>

          {/* Subtitle */}
          <p className="text-slate-400 text-sm mb-4 font-medium">
            {chapter.subtitle}
          </p>

          {/* Description */}
          <p className="text-slate-300 text-sm mb-6 leading-relaxed line-clamp-3">
            {chapter.description}
          </p>

          {/* Meta Info */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <Clock className="w-4 h-4" />
              <span>{chapter.estimatedTime}</span>
            </div>
            <div className="text-slate-400 text-sm">
              {chapter.subsections?.length || 0} phần
            </div>
          </div>

          {/* Progress Bar */}
          {progress > 0 && (
            <div className="mb-4">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Tiến độ</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className={`h-full bg-gradient-to-r from-${chapter.color} to-${chapter.color}/60 rounded-full`}
                />
              </div>
            </div>
          )}

          {/* CTA Button */}
          <div className="flex items-center gap-2 text-vietnam-yellow font-semibold group-hover:gap-3 transition-all">
            <span>{isCompleted ? "Xem lại" : isStarted ? "Tiếp tục" : "Bắt đầu"}</span>
            <ArrowRight className="w-5 h-5" />
          </div>

          {/* Hover Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ChapterCard;
