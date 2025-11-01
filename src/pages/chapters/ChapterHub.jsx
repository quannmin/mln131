import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Breadcrumb from "../../components/learning/Breadcrumb";
import ChapterCard from "../../components/chapters/ChapterCard";
import { useChapterProgress } from "../../hooks/useChapterProgress";
import { chaptersData, introContent, timelinessContent } from "../../data/chaptersContent";
import { BookOpen, Target, TrendingUp } from "lucide-react";

const ChapterHub = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [chaptersRef, chaptersInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const { getChapterProgress, getOverallProgress } = useChapterProgress();

  const breadcrumbItems = [
    { label: "Hành trình Khám phá" }
  ];

  const overallProgress = getOverallProgress(chaptersData.length);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Decorative Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-gradient-to-r from-vietnam-red to-ethnic-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -60, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-40 -left-32 w-96 h-96 bg-gradient-to-r from-ethnic-blue to-ethnic-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        <Breadcrumb items={breadcrumbItems} />

        {/* Hero Section */}
        <section ref={heroRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Title */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={heroInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-vietnam-red to-vietnam-yellow rounded-full mb-6 shadow-2xl"
              >
                <BookOpen className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
                Hành trình{" "}
                <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                  Khám phá
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
                4 Chương nghiên cứu từ lý thuyết đến thực tiễn về vấn đề dân tộc Việt Nam
              </p>
            </div>

            {/* Overall Progress */}
            {overallProgress > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                className="max-w-md mx-auto mb-12 p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-slate-300 font-semibold">Tiến độ tổng thể</span>
                  <span className="text-vietnam-yellow font-bold text-2xl">{overallProgress}%</span>
                </div>
                <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${overallProgress}%` }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="h-full bg-gradient-vietnam rounded-full"
                  />
                </div>
              </motion.div>
            )}

            {/* Intro Content */}
            <div className="max-w-4xl mx-auto space-y-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="p-8 bg-yellow-900/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl"
              >
                <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-4xl">📖</span>
                  Mở đầu
                </h2>
                <p className="text-slate-200 text-lg leading-relaxed mb-4">
                  {introContent.content}
                </p>
                <p className="text-slate-300 leading-relaxed mb-4">
                  {introContent.context}
                </p>
                <div className="p-4 bg-red-900/30 border border-red-600/30 rounded-xl">
                  <p className="text-slate-200 leading-relaxed">
                    <span className="font-semibold text-vietnam-yellow">Vấn đề đặt ra:</span>{" "}
                    {introContent.problem}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Tính Thời sự */}
            <div className="max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-4xl font-bold text-white text-center mb-4">
                  Tại sao vấn đề này{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                    quan trọng
                  </span>?
                </h2>
                <p className="text-xl text-slate-300 text-center mb-8">
                  Ba lý do cần nghiên cứu và làm rõ ngay bây giờ
                </p>

                <div className="space-y-6">
                  {timelinessContent.reasons.map((reason, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={heroInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.6 + index * 0.15 }}
                      className="p-6 bg-gradient-to-r from-ethnic-blue/10 to-ethnic-purple/10 backdrop-blur-md border border-ethnic-blue/30 rounded-2xl"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-vietnam-red to-vietnam-yellow rounded-full flex items-center justify-center font-black text-white text-lg">
                          {reason.number}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {reason.title}
                          </h3>
                          <p className="text-slate-300 mb-3 leading-relaxed">
                            {reason.description}
                          </p>
                          <div className="pl-4 border-l-2 border-vietnam-yellow">
                            <p className="text-slate-400 italic text-sm">
                              💡 {reason.insight}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Chapters Grid */}
        <section ref={chaptersRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={chaptersInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              4 Chương{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                Nghiên cứu
              </span>
            </h2>
            <p className="text-xl text-slate-300">
              Chọn chương để bắt đầu hành trình học tập
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {chaptersData.map((chapter, index) => (
              <ChapterCard
                key={chapter.id}
                chapter={chapter}
                progress={getChapterProgress(chapter.id, chapter.subsections?.length || 0)}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Learning Tips */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-yellow-900/30 to-yellow-800/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              💡 Gợi ý Học tập
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ethnic-blue to-ethnic-cyan rounded-full flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Học tuần tự</h4>
                  <p className="text-slate-400 text-sm">Nên học từ Chương 1 để hiểu nền tảng lý luận</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ethnic-purple to-ethnic-pink rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Làm quiz</h4>
                  <p className="text-slate-400 text-sm">Kiểm tra hiểu biết sau mỗi phần học</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ethnic-green to-ethnic-emerald rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Theo dõi tiến độ</h4>
                  <p className="text-slate-400 text-sm">Hệ thống tự động lưu tiến độ học tập</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default ChapterHub;
