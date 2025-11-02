import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Home,
  Shield,
  Globe
} from "lucide-react";
import Breadcrumb from "../../components/learning/Breadcrumb";
import { useChapterProgress } from "../../hooks/useChapterProgress";
import { getChapterById } from "../../data/chaptersContent";
import { renderContentWithQuotes } from "../../utils/renderContent";

const Chapter3 = () => {
  const navigate = useNavigate();
  const chapter = getChapterById(3);
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState({});

  const { saveProgress, isSubsectionCompleted, completeChapter, getChapterProgress } = useChapterProgress();

  const breadcrumbItems = [
    { label: "Hành trình Khám phá", href: "/van-de-dan-toc" },
    { label: `${chapter.number}: ${chapter.title}` }
  ];

  const currentSubsection = chapter.subsections[currentSection];
  const currentQuiz = currentSubsection?.quiz;
  const userAnswer = quizAnswers[currentSubsection?.id];
  const showResult = showQuizResult[currentSubsection?.id];
  const isCorrect = userAnswer === currentQuiz?.correct;

  const progress = getChapterProgress(chapter.id, chapter.subsections.length);

  const goToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSection = () => {
    if (currentSection < chapter.subsections.length - 1) {
      saveProgress(chapter.id, currentSubsection.id);
      goToSection(currentSection + 1);
    } else {
      saveProgress(chapter.id, currentSubsection.id);
      completeChapter(chapter.id);
      navigate("/van-de-dan-toc/chuong-4");
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      goToSection(currentSection - 1);
    }
  };

  const handleQuizAnswer = (subsectionId, optionIndex) => {
    setQuizAnswers(prev => ({ ...prev, [subsectionId]: optionIndex }));
    setShowQuizResult(prev => ({ ...prev, [subsectionId]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div className="h-1 bg-slate-800">
          <motion.div
            className="h-full bg-gradient-vietnam"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl relative">
        <Breadcrumb items={breadcrumbItems} />

        {/* Chapter Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ethnic-purple to-ethnic-pink rounded-full mb-4 shadow-2xl"
          >
            <span className="text-4xl">{chapter.emoji}</span>
          </motion.div>

          <div className="text-sm font-bold text-ethnic-purple mb-2">
            {chapter.number} / 4
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-white mb-3">
            {chapter.title}
          </h1>

          <p className="text-xl text-slate-300 mb-6">
            {chapter.subtitle}
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
            <span>{currentSection + 1} / {chapter.subsections.length} phần</span>
            <span>•</span>
            <span>{progress}% hoàn thành</span>
          </div>
        </div>

        {/* Sticky Section Navigation - Redesigned */}
        <div className="sticky top-17 z-30 mb-8">
          <div className="bg-gradient-to-r from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl border-2 border-slate-700/80 rounded-2xl shadow-2xl shadow-black/40 p-6">
            {/* Title & Progress */}
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Các phần học</h3>
              <span className="text-xs text-slate-500">{currentSection + 1} / {chapter.subsections.length}</span>
            </div>

            {/* Section Grid */}
            <div className="grid grid-cols-2 gap-3">
              {chapter.subsections.map((subsection, index) => {
                const sectionNumber = subsection.id;
                const sectionTitle = subsection.title.split(". ")[1] || subsection.title;

                return (
                  <button
                    key={index}
                    onClick={() => goToSection(index)}
                    className={`group relative p-4 rounded-xl transition-all duration-300 ${
                      index === currentSection
                        ? "bg-gradient-vietnam text-white shadow-lg shadow-vietnam-yellow/30"
                        : isSubsectionCompleted(chapter.id, subsection.id)
                        ? "bg-ethnic-green/20 text-ethnic-green border-2 border-ethnic-green/60 hover:bg-ethnic-green/30"
                        : "bg-slate-800/80 text-slate-300 border-2 border-slate-700/50 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {/* Section Number */}
                    <div className="text-2xl font-black mb-1">{sectionNumber}</div>

                    {/* Section Title - truncated */}
                    <div className="text-xs font-medium line-clamp-2 leading-tight">
                      {sectionTitle}
                    </div>

                    {/* Completed Badge */}
                    {isSubsectionCompleted(chapter.id, subsection.id) && index !== currentSection && (
                      <div className="absolute top-2 right-2">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-yellow-900/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl p-8 md:p-12 shadow-xl mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-vietnam-yellow mb-6">
                {currentSubsection.title}
              </h2>

              {/* Intro */}
              {currentSubsection.content.intro && (
                <p className="text-xl text-slate-200 mb-8 leading-relaxed italic font-medium">
                  {currentSubsection.content.intro}
                </p>
              )}

              {/* Quote if exists */}
              {currentSubsection.content.quote && (
                <div className="mb-8">
                  <div className="p-6 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 border-l-4 border-vietnam-yellow rounded-r-2xl">
                    <p className="text-slate-200 text-lg italic leading-relaxed whitespace-pre-line">
                      {currentSubsection.content.quote}
                    </p>
                  </div>

                  {/* Images after quote if exists (2 columns) */}
                  {currentSubsection.content.quoteImages && currentSubsection.content.quoteImages.length > 0 && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentSubsection.content.quoteImages.map((imgSrc, imgIndex) => (
                        <div key={imgIndex} className="rounded-2xl overflow-hidden border-2 border-vietnam-yellow/40 shadow-2xl">
                          <img
                            src={imgSrc}
                            alt={`Hình minh họa ${imgIndex + 1}`}
                            className="w-full h-auto object-contain bg-slate-900/50"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Principles (Chapter 3.1) */}
              {currentSubsection.content.principles && (
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-7 h-7 text-vietnam-yellow" />
                    <h3 className="text-2xl font-bold text-white">
                      4 Nguyên tắc Cơ bản
                    </h3>
                  </div>
                  {currentSubsection.content.principles.map((principle, index) => (
                    <div
                      key={index}
                      className="p-6 bg-ethnic-blue/10 border border-ethnic-blue/30 rounded-2xl"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-ethnic-blue to-ethnic-cyan rounded-full flex items-center justify-center font-black text-white text-lg">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-ethnic-blue mb-3">
                            {principle.title}
                          </h4>
                          <p className="text-slate-200 leading-relaxed">
                            {principle.content}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Requirements (Chapter 3.2) */}
              {currentSubsection.content.requirements && (
                <div className="space-y-6 mb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Globe className="w-7 h-7 text-vietnam-yellow" />
                    <h3 className="text-2xl font-bold text-white">
                      4 Yêu cầu Mới
                    </h3>
                  </div>
                  {currentSubsection.content.requirements.map((requirement, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gradient-to-r from-ethnic-purple/10 to-ethnic-pink/10 border border-ethnic-purple/30 rounded-2xl"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 text-4xl">
                          {requirement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-ethnic-purple mb-3">
                            {requirement.title}
                          </h4>
                          <div className="text-slate-200 leading-relaxed">
                            {renderContentWithQuotes(requirement.content)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Quote after requirements if exists */}
                  {currentSubsection.content.quote && currentSubsection.id === "3.2" && (
                    <div className="mt-6 p-6 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 border-l-4 border-vietnam-yellow rounded-r-2xl">
                      <p className="text-slate-200 text-lg italic leading-relaxed">
                        {currentSubsection.content.quote}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Conclusion */}
              {currentSubsection.content.conclusion && (
                <div className="mt-8 p-6 bg-gradient-to-r from-ethnic-green/10 to-ethnic-blue/10 rounded-2xl border border-ethnic-green/30">
                  <p className="text-slate-200 font-semibold">
                    📌 {currentSubsection.content.conclusion}
                  </p>
                </div>
              )}
            </div>

            {/* Mini Quiz */}
            {currentQuiz && (
              <div className="bg-gradient-to-br from-ethnic-purple/20 to-ethnic-blue/20 backdrop-blur-md border border-ethnic-purple/30 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  🎯 Kiểm tra hiểu biết
                </h3>
                <p className="text-xl text-slate-200 mb-6 font-medium">
                  {currentQuiz.question}
                </p>

                <div className="grid gap-3 mb-6">
                  {currentQuiz.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuizAnswer(currentSubsection.id, index)}
                      disabled={showResult}
                      className={`p-4 rounded-xl text-left transition-all duration-300 ${
                        showResult
                          ? index === currentQuiz.correct
                            ? "bg-ethnic-green/30 border-2 border-ethnic-green text-white"
                            : index === userAnswer
                            ? "bg-red-500/30 border-2 border-red-500 text-white"
                            : "bg-yellow-900/20 border border-yellow-700 text-slate-400"
                          : "bg-yellow-900/30 border border-yellow-600/50 text-white hover:bg-yellow-900/50 hover:border-yellow-500"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                          showResult
                            ? index === currentQuiz.correct
                              ? "bg-ethnic-green"
                              : index === userAnswer
                              ? "bg-red-500"
                              : "bg-slate-700"
                            : "bg-slate-700"
                        }`}>
                          {showResult && index === currentQuiz.correct && (
                            <CheckCircle className="w-4 h-4 text-white" />
                          )}
                          {showResult && index === userAnswer && index !== currentQuiz.correct && (
                            <XCircle className="w-4 h-4 text-white" />
                          )}
                          {!showResult && (
                            <span className="text-xs text-slate-400">{String.fromCharCode(65 + index)}</span>
                          )}
                        </div>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {showResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl ${
                      isCorrect
                        ? "bg-ethnic-green/20 border border-ethnic-green/50"
                        : "bg-red-500/20 border border-red-500/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-ethnic-green flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <div className={`font-bold mb-1 ${isCorrect ? "text-ethnic-green" : "text-red-400"}`}>
                          {isCorrect ? "Chính xác! 🎉" : "Chưa đúng! 💪"}
                        </div>
                        <div className="text-slate-300 text-sm leading-relaxed">
                          {currentQuiz.explanation}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentSection === 0
                    ? "bg-yellow-900/20 text-slate-600 cursor-not-allowed"
                    : "bg-yellow-900/40 text-white hover:bg-yellow-900/60 border border-yellow-600/50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
                Phần trước
              </button>

              <button
                onClick={nextSection}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-vietnam text-white hover:shadow-lg hover:shadow-vietnam-yellow/25 transition-all duration-300"
              >
                {currentSection === chapter.subsections.length - 1 ? (
                  <>
                    Chương tiếp theo
                    <ChevronRight className="w-5 h-5" />
                  </>
                ) : (
                  <>
                    Phần tiếp theo
                    <ChevronRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Back to Hub Link */}
        <div className="mt-12 text-center">
          <Link
            to="/van-de-dan-toc"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-vietnam-yellow transition-colors"
          >
            <Home className="w-4 h-4" />
            Quay lại Trang tổng quan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapter3;
