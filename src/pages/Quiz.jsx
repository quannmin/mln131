import { useState, useEffect } from "react";
import {
  CheckCircle,
  XCircle,
  ArrowRight,
  RotateCcw,
  Trophy,
  Clock,
  BookOpen,
  Brain,
  Lightbulb,
  Target,
  ArrowLeft,
  Home,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "Việt Nam có bao nhiêu dân tộc anh em?",
      options: ["45 dân tộc", "54 dân tộc", "60 dân tộc", "63 dân tộc"],
      correct: 1,
      explanation:
        "Việt Nam có 54 dân tộc anh em, trong đó dân tộc Kinh chiếm 85.3% dân số và 53 dân tộc thiểu số.",
    },
    {
      id: 2,
      question: "Tỷ lệ dân tộc Kinh trong tổng dân số Việt Nam là bao nhiêu?",
      options: ["70.5%", "75.2%", "85.3%", "90.1%"],
      correct: 2,
      explanation:
        "Dân tộc Kinh chiếm 85.3% dân số Việt Nam, còn lại 14.7% là các dân tộc thiểu số.",
    },
    {
      id: 3,
      question: "Theo quan điểm Mác-Lênin, dân tộc được định nghĩa dựa trên các yếu tố nào?",
      options: [
        "Chỉ ngôn ngữ và văn hóa",
        "Chỉ lãnh thổ và kinh tế",
        "Ngôn ngữ, lãnh thổ, đời sống kinh tế và đặc điểm tâm lý văn hóa",
        "Chỉ nguồn gốc huyết thống",
      ],
      correct: 2,
      explanation:
        "Theo Mác-Lênin, dân tộc là cộng đồng người được hình thành trong lịch sử với ngôn ngữ chung, lãnh thổ chung, đời sống kinh tế chung và đặc điểm tâm lý văn hóa chung.",
    },
    {
      id: 4,
      question: "Tuyên ngôn Độc lập năm 1945 của Chủ tịch Hồ Chí Minh khẳng định điều gì?",
      options: [
        "Chỉ dân tộc Kinh có quyền tự quyết",
        "Tất cả các dân tộc đều bình đẳng",
        "Các dân tộc thiểu số cần được bảo trợ",
        "Phân biệt giữa các dân tộc theo trình độ phát triển",
      ],
      correct: 1,
      explanation:
        "Tuyên ngôn Độc lập 1945 khẳng định nguyên tắc bình đẳng giữa các dân tộc, không phân biệt đối xử, thể hiện tư tưởng đại đoàn kết dân tộc.",
    },
    {
      id: 5,
      question: "Tỷ lệ hộ nghèo của đồng bào dân tộc thiểu số năm 2023 là bao nhiêu?",
      options: ["8.5%", "11.2%", "17%", "25.3%"],
      correct: 2,
      explanation:
        "Tỷ lệ hộ nghèo đồng bào dân tộc thiểu số năm 2023 là 17%, cao hơn mức trung bình quốc gia, phản ánh chênh lệch khách quan về điều kiện phát triển.",
    },
    {
      id: 6,
      question: "Chương trình mục tiêu quốc gia phát triển kinh tế-xã hội vùng dân tộc thiểu số giai đoạn 2021-2030 có tổng vốn đầu tư bao nhiêu?",
      options: ["75,000 tỷ đồng", "100,000 tỷ đồng", "137,000 tỷ đồng", "200,000 tỷ đồng"],
      correct: 2,
      explanation:
        "Chương trình MTQG 2021-2030 có tổng vốn đầu tư 137,000 tỷ đồng, tập trung vào cơ sở hạ tầng, giáo dục, y tế và phát triển sinh kế.",
    },
    {
      id: 7,
      question: "Nguyên nhân chính dẫn đến chênh lệch phát triển giữa dân tộc Kinh và các dân tộc thiểu số là gì?",
      options: [
        "Chính sách phân biệt đối xử của Nhà nước",
        "Điều kiện địa lý, lịch sử và trình độ phát triển ban đầu khác nhau",
        "Văn hóa lạc hậu của dân tộc thiểu số",
        "Thiếu ý chí phấn đấu của người dân tộc thiểu số",
      ],
      correct: 1,
      explanation:
        "Chênh lệch phát triển chủ yếu do điều kiện địa lý (miền núi, vùng sâu), lịch sử (ít được tiếp cận giáo dục, y tế) và trình độ phát triển ban đầu khác nhau, không phải do chính sách phân biệt.",
    },
    {
      id: 8,
      question: "Theo Hiến pháp 2013, quyền của công dân các dân tộc thiểu số bao gồm:",
      options: [
        "Chỉ có quyền sử dụng tiếng mẹ đẻ",
        "Sử dụng tiếng mẹ đẻ, giữ gìn bản sắc dân tộc, phát huy truyền thống",
        "Chỉ có quyền giữ gìn văn hóa truyền thống",
        "Không được quyền tham gia chính trị",
      ],
      correct: 1,
      explanation:
        "Hiến pháp 2013 quy định công dân các dân tộc có quyền sử dụng tiếng mẹ đẻ, giữ gìn bản sắc dân tộc, phát huy truyền thống văn hóa tốt đẹp và tham gia bình đẳng vào đời sống chính trị, kinh tế, xã hội.",
    },
    {
      id: 9,
      question: "Chính sách ưu tiên đối với vùng dân tộc thiểu số bao gồm:",
      options: [
        "Chỉ hỗ trợ tài chính",
        "Đầu tư cơ sở hạ tầng, giáo dục, y tế, ưu tiên tuyển dụng, hỗ trợ sinh kế",
        "Chỉ xây dựng trường học",
        "Không có chính sách ưu tiên cụ thể",
      ],
      correct: 1,
      explanation:
        "Nhà nước thực hiện chính sách toàn diện: đầu tư cơ sở hạ tầng (giao thông, điện, nước), giáo dục (miễn giảm học phí, nội trú), y tế (trạm y tế xã), ưu tiên tuyển dụng và hỗ trợ phát triển sinh kế.",
    },
    {
      id: 10,
      question: "Trong lịch sử, các dân tộc Việt Nam có mối quan hệ như thế nào?",
      options: [
        "Luôn xung đột và chia rẽ",
        "Đoàn kết, cùng chiến đấu chống ngoại xâm và xây dựng đất nước",
        "Tách biệt, không có sự giao lưu",
        "Dân tộc Kinh thống trị các dân tộc khác",
      ],
      correct: 1,
      explanation:
        "Lịch sử Việt Nam chứng minh các dân tộc luôn đoàn kết, cùng nhau chống ngoại xâm (Pháp, Mỹ) và xây dựng đất nước, thể hiện tinh thần '54 dân tộc - Một tổ quốc Việt Nam'.",
    },
    {
      id: 11,
      question: "Không gian văn hóa cồng chiêng Tây Nguyên được UNESCO công nhận năm nào?",
      options: ["2001", "2003", "2005", "2008"],
      correct: 2,
      explanation:
        "Không gian văn hóa cồng chiêng của các dân tộc Tây Nguyên được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2005.",
    },
    {
      id: 12,
      question: "Hát Then của người Tày, Nùng, Thái được UNESCO công nhận năm nào?",
      options: ["2015", "2017", "2019", "2021"],
      correct: 1,
      explanation:
        "Nghệ thuật Hát Then của các dân tộc Tày, Nùng, Thái được UNESCO công nhận là Di sản văn hóa phi vật thể đại diện của nhân loại năm 2019.",
    },
    {
      id: 13,
      question: "Quan điểm nào sau đây phản ánh đúng về vấn đề dân tộc ở Việt Nam?",
      options: [
        "Người Kinh 'chiếm dụng' văn hóa, kinh tế, chính trị của dân tộc thiểu số",
        "Tồn tại chênh lệch khách quan do điều kiện lịch sử, địa lý, cần giải quyết bằng chính sách ưu tiên",
        "Các dân tộc thiểu số tự chịu trách nhiệm cho sự kém phát triển của mình",
        "Không có vấn đề dân tộc ở Việt Nam",
      ],
      correct: 1,
      explanation:
        "Chênh lệch phát triển giữa các dân tộc là do điều kiện khách quan (địa lý, lịch sử, trình độ ban đầu), không phải do 'chiếm dụng'. Nhà nước đang thực hiện các chính sách ưu tiên để thu hẹp khoảng cách.",
    },
    {
      id: 14,
      question: "Mục tiêu của Chương trình mục tiêu quốc gia vùng dân tộc thiểu số đến năm 2030 là gì?",
      options: [
        "Giảm tỷ lệ hộ nghèo xuống dưới 10%",
        "Xóa bỏ hoàn toàn đói nghèo",
        "Chỉ cải thiện cơ sở hạ tầng",
        "Chỉ tập trung vào giáo dục",
      ],
      correct: 0,
      explanation:
        "Mục tiêu đến 2030 là giảm tỷ lệ hộ nghèo vùng dân tộc thiểu số xuống dưới 10%, đồng thời cải thiện toàn diện về cơ sở hạ tầng, giáo dục, y tế và sinh kế.",
    },
    {
      id: 15,
      question: "Theo tư tưởng Hồ Chí Minh, nguyên tắc quan hệ giữa các dân tộc là:",
      options: [
        "Dân tộc đa số lãnh đạo dân tộc thiểu số",
        "Bình đẳng, đoàn kết, tương trợ, cùng phát triển",
        "Mỗi dân tộc tự phát triển riêng",
        "Ưu tiên dân tộc Kinh trong mọi lĩnh vực",
      ],
      correct: 1,
      explanation:
        "Hồ Chí Minh luôn nhấn mạnh nguyên tắc bình đẳng, đoàn kết, tương trợ giúp đỡ lẫn nhau giữa các dân tộc, cùng nhau phát triển và xây dựng đất nước.",
    },
    {
      id: 16,
      question: "Chính sách giáo dục ưu tiên cho học sinh dân tộc thiểu số bao gồm:",
      options: [
        "Chỉ miễn học phí",
        "Miễn giảm học phí, chế độ nội trú, cộng điểm thi tuyển đại học",
        "Chỉ hỗ trợ sách giáo khoa",
        "Không có ưu tiên đặc biệt",
      ],
      correct: 1,
      explanation:
        "Nhà nước thực hiện chính sách miễn giảm học phí, chế độ nội trú (cung cấp chỗ ở, ăn uống), cộng điểm ưu tiên trong kỳ thi tuyển đại học và hỗ trợ học tập để tạo cơ hội bình đẳng.",
    },
    {
      id: 17,
      question: "Lễ hội Gầu Tào của người Mông diễn ra vào thời gian nào?",
      options: [
        "Tháng Giêng âm lịch",
        "Tháng 3 âm lịch",
        "Tháng 7 âm lịch",
        "Cuối năm",
      ],
      correct: 0,
      explanation:
        "Lễ hội Gầu Tào (Xuân Mông) của người Mông diễn ra vào đầu năm (tháng Giêng âm lịch), là dịp đón mừng năm mới với nhiều hoạt động văn hóa truyền thống.",
    },
    {
      id: 18,
      question: "Theo Nghị quyết Đại hội XIII của Đảng, phát triển vùng đồng bào dân tộc thiểu số cần tập trung vào:",
      options: [
        "Chỉ phát triển kinh tế",
        "Phát triển toàn diện, bền vững về kinh tế, văn hóa, xã hội, môi trường",
        "Chỉ bảo tồn văn hóa",
        "Chỉ xây dựng cơ sở hạ tầng",
      ],
      correct: 1,
      explanation:
        "Nghị quyết Đại hội XIII nhấn mạnh phát triển toàn diện và bền vững vùng dân tộc thiểu số, kết hợp kinh tế, văn hóa, xã hội, bảo vệ môi trường và bảo tồn bản sắc dân tộc.",
    },
    {
      id: 19,
      question: "Hiện tượng di cư từ vùng dân tộc thiểu số ra đô thị chủ yếu do nguyên nhân nào?",
      options: [
        "Chính sách cưỡng bức",
        "Tìm kiếm cơ hội việc làm và thu nhập cao hơn",
        "Bị đàn áp ở quê nhà",
        "Bỏ bản sắc văn hóa",
      ],
      correct: 1,
      explanation:
        "Di cư từ vùng dân tộc thiểu số ra đô thị chủ yếu do tìm kiếm cơ hội việc làm, thu nhập cao hơn và điều kiện sống tốt hơn, phản ánh chênh lệch phát triển kinh tế - xã hội.",
    },
    {
      id: 20,
      question: "Để giải quyết vấn đề chênh lệch phát triển giữa các dân tộc, cần:",
      options: [
        "Buộc người Kinh chia sẻ tài sản",
        "Chính sách ưu tiên, đầu tư, hỗ trợ có mục tiêu và lâu dài cho vùng dân tộc thiểu số",
        "Để các dân tộc tự giải quyết",
        "Chỉ cần tuyên truyền tinh thần đoàn kết",
      ],
      correct: 1,
      explanation:
        "Giải quyết chênh lệch cần chính sách toàn diện: đầu tư ưu tiên vào cơ sở hạ tầng, giáo dục, y tế, hỗ trợ sinh kế có mục tiêu, lâu dài và bền vững, đảm bảo cơ hội phát triển bình đẳng.",
    },
  ];

  const [mode, setMode] = useState(null); // 'test' or 'practice'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10 * 60); // Giảm thời gian xuống 10 phút cho 10 câu hỏi
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [testQuestions, setTestQuestions] = useState([]); // Danh sách câu hỏi cho chế độ test

  // Timer effect - only for test mode
  useEffect(() => {
    if (mode === "test" && timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === "test" && timeLeft === 0) {
      handleFinish();
    }
  }, [timeLeft, showResults, mode]);

  // Hàm chọn ngẫu nhiên 10 câu hỏi từ 20 câu gốc
  const selectRandomQuestions = () => {
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 10);
  };

  const handleModeSelect = (selectedMode) => {
    setMode(selectedMode);
    if (selectedMode === "test") {
      setTestQuestions(selectRandomQuestions());
    }
    resetQuiz();
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    if (mode === "practice") {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
    } else {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: answerIndex,
      }));
    }
  };

  const handleNext = () => {
    if (mode === "practice") {
      setShowExplanation(false);
      setSelectedAnswer(null);
    }

    const currentQuestions = mode === "test" ? testQuestions : questions;
    if (currentQuestion < currentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (mode === "test") {
      handleFinish();
    } else {
      // Practice mode - can restart
      setCurrentQuestion(0);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      if (mode === "practice") {
        setShowExplanation(false);
        setSelectedAnswer(null);
      }
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleFinish = () => {
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    const currentQuestions = mode === "test" ? testQuestions : questions;
    currentQuestions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correct) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(10 * 60); // Giảm thời gian xuống 10 phút cho 10 câu hỏi
    setShowExplanation(false);
    setSelectedAnswer(null);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreMessage = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 90)
      return "Xuất sắc! Bạn nắm vững kiến thức về vấn đề dân tộc và chính sách dân tộc của Việt Nam. 🏅";
    if (percentage >= 80)
      return "Rất tốt! Hiểu biết vững vàng về quan hệ dân tộc và các chính sách ưu tiên. 👍";
    if (percentage >= 70)
      return "Khá; bạn có nền tảng tốt nhưng nên ôn thêm về lịch sử và chính sách dân tộc. 📘";
    if (percentage >= 60)
      return "Trung bình. Cần củng cố thêm kiến thức về các dân tộc thiểu số và chính sách phát triển. 📝";
    return "Cần cố gắng hơn — hãy ôn lại các khái niệm về dân tộc và chính sách ưu tiên. 💪";
  };

  // Mode Selection Screen
  if (!mode) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 py-16">
        <div className="container max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl mb-6 shadow-2xl border-4 border-red-500/30">
              <Brain className="h-10 w-10 text-red-800" />
            </div>
            <h1 className="text-3xl font-black bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 bg-clip-text text-transparent mb-3">
              Quiz Ôn Tập
            </h1>
            <p className="text-xl text-red-100/80 max-w-2xl mx-auto leading-relaxed">
              Kiểm tra và nâng cao kiến thức về vấn đề dân tộc và các dân tộc thiểu số Việt Nam
            </p>
          </div>

          {/* Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Test Mode */}
            <Card
              className="group p-8 bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 hover:border-red-500/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              onClick={() => handleModeSelect("test")}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-red-300 mb-4 group-hover:text-red-400 transition-colors">
                  Chế độ Kiểm tra
                </h3>
                <div className="space-y-3 text-red-400 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-red-400" />
                    <span>Thời gian: 10 phút</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Trophy className="h-4 w-4 text-red-400" />
                    <span>10 câu hỏi</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-4 w-4 text-red-400" />
                    <span>Giải thích chi tiết cuối bài</span>
                  </div>
                </div>
                <div className="bg-red-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-pink-600">
                    Kiểm tra kiến thức một cách nghiêm túc với giới hạn thời
                    gian và kết quả chi tiết
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Bắt đầu Kiểm tra
                </Button>
              </div>
            </Card>

            {/* Practice Mode */}
            <Card
              className="group p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl backdrop-blur-sm"
              onClick={() => handleModeSelect("practice")}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-emerald-300 mb-4 group-hover:text-emerald-400 transition-colors">
                  Chế độ Ôn tập
                </h3>
                <div className="space-y-3 text-emerald-400 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-emerald-400" />
                    <span>Không giới hạn thời gian</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span>Phản hồi tức thì</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Lightbulb className="h-4 w-4 text-emerald-400" />
                    <span>Giải thích mỗi câu hỏi</span>
                  </div>
                </div>
                <div className="bg-emerald-500/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-600">
                    Học và ôn tập với giải thích chi tiết cho từng câu hỏi ngay
                    lập tức
                  </p>
                </div>
                <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  Bắt đầu Ôn tập
                </Button>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                <span>20 câu hỏi chất lượng cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                <span>Từ cơ bản đến nâng cao</span>
              </div>
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span>Kết quả chi tiết</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Results Screen (only for test mode)
  if (showResults && mode === "test") {
    const score = calculateScore();
    const total = testQuestions.length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 py-8">
        <div className="container max-w-4xl mx-auto px-4">
          <Card className="p-8 text-center bg-white/10 backdrop-blur-lg border-white/20">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mb-6 animate-pulse">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">
                🎉 Hoàn thành Quiz! 🎉
              </h1>
              <p className="text-gray-300 text-lg">
                Kết quả của bạn đã sẵn sàng
              </p>
            </div>

            <div className="mb-8">
              <div
                className={`text-7xl font-bold mb-4 ${getScoreColor(
                  score,
                  total
                )} bg-white/10 rounded-2xl py-6 backdrop-blur-sm`}
              >
                {score}/{total}
              </div>
              <div className="text-3xl text-white mb-4">
                {((score / total) * 100).toFixed(1)}%
              </div>
              <p className="text-xl text-gray-200 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                {getScoreMessage(score, total)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-2xl backdrop-blur-sm border border-green-500/30">
                <CheckCircle className="h-10 w-10 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-green-400">{score}</div>
                <div className="text-green-300 font-medium">Câu đúng</div>
              </div>
              <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-6 rounded-2xl backdrop-blur-sm border border-red-500/30">
                <XCircle className="h-10 w-10 text-red-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-red-400">
                  {total - score}
                </div>
                <div className="text-red-300 font-medium">Câu sai</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center gap-2">
                <Lightbulb className="h-6 w-6 text-yellow-400" />
                Chi tiết đáp án
              </h3>
              <div className="max-h-96 overflow-y-auto space-y-4 bg-white/5 rounded-2xl p-4 backdrop-blur-sm">
                {testQuestions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correct;

                  return (
                    <div
                      key={question.id}
                      className="text-left p-6 border rounded-2xl bg-white/10 backdrop-blur-sm border-white/20"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {isCorrect ? (
                            <CheckCircle className="h-6 w-6 text-green-400" />
                          ) : (
                            <XCircle className="h-6 w-6 text-red-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold text-white mb-3 text-lg">
                            {index + 1}. {question.question}
                          </p>
                          <p className="text-green-300 mb-2 bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                            ✓ <strong>Đáp án đúng:</strong>{" "}
                            {question.options[question.correct]}
                          </p>
                          {!isCorrect && userAnswer !== undefined && (
                            <p className="text-red-300 mb-2 bg-red-500/20 rounded-lg p-3 border border-red-500/30">
                              ✗ <strong>Bạn chọn:</strong>{" "}
                              {question.options[userAnswer]}
                            </p>
                          )}
                          {userAnswer === undefined && (
                            <p className="text-orange-300 mb-2 bg-orange-500/20 rounded-lg p-3 border border-orange-500/30">
                              ⚠ <strong>Chưa trả lời</strong>
                            </p>
                          )}
                          <div className="bg-blue-500/20 rounded-lg p-3 border border-blue-500/30 mt-3">
                            <p className="text-blue-200">
                              <strong>Giải thích:</strong>{" "}
                              {question.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={resetQuiz}
                className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Làm lại Quiz
              </Button>
              <Button
                onClick={() => setMode(null)}
                variant="outline"
                className="flex items-center border-white/30 text-white hover:bg-white/10 px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Home className="mr-2 h-5 w-5" />
                Về trang chủ
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // Main Quiz Interface
  const currentQuestions = mode === "test" ? testQuestions : questions;
  const question = currentQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / currentQuestions.length) * 100;
  const isLastQuestion = currentQuestion === currentQuestions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-900 via-blue-900 to-indigo-900 py-8">
      <div className="container max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setMode(null)}
                variant="outline"
                className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại
              </Button>
              <div className="flex items-center gap-3">
                {mode === "test" ? (
                  <div className="flex items-center gap-2 bg-red-500/20 px-4 py-2 rounded-full border border-red-500/30">
                    <Target className="h-5 w-5 text-red-400" />
                    <span className="text-red-300 font-medium">
                      Chế độ Kiểm tra
                    </span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full border border-emerald-500/30">
                    <BookOpen className="h-5 w-5 text-emerald-400" />
                    <span className="text-emerald-300 font-medium">
                      Chế độ Ôn tập
                    </span>
                  </div>
                )}
              </div>
            </div>
            {mode === "test" && (
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-white font-mono text-lg">
                  {formatTime(timeLeft)}
                </span>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="w-full bg-white/20 rounded-full h-4 backdrop-blur-sm border border-white/30">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-white font-medium">
                Câu {currentQuestion + 1} / {currentQuestions.length}
              </span>
              <span className="text-gray-300">
                {Math.round(progress)}% hoàn thành
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="p-8 mb-8 bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                {currentQuestion + 1}
              </div>
              <h2 className="text-2xl font-bold text-white">
                {question.question}
              </h2>
            </div>
          </div>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected =
                mode === "practice"
                  ? selectedAnswer === index
                  : selectedAnswers[question.id] === index;

              let buttonStyle =
                "w-full p-6 text-left border-2 rounded-2xl transition-all duration-300 transform hover:scale-[1.02] backdrop-blur-sm";

              if (mode === "practice" && showExplanation) {
                if (index === question.correct) {
                  buttonStyle +=
                    " border-green-500 bg-green-500/20 text-green-300 shadow-green-500/25 shadow-lg";
                } else if (
                  selectedAnswer === index &&
                  index !== question.correct
                ) {
                  buttonStyle +=
                    " border-red-500 bg-red-500/20 text-red-300 shadow-red-500/25 shadow-lg";
                } else {
                  buttonStyle += " border-white/20 bg-white/5 text-gray-300";
                }
              } else if (isSelected) {
                buttonStyle +=
                  " border-blue-500 bg-blue-500/20 text-blue-300 shadow-blue-500/25 shadow-lg";
              } else {
                buttonStyle +=
                  " border-white/20 bg-white/5 text-white hover:border-white/40 hover:bg-white/10";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(question.id, index)}
                  disabled={mode === "practice" && showExplanation}
                  className={buttonStyle}
                >
                  <div className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full border-2 mr-4 flex items-center justify-center font-bold text-sm ${
                        mode === "practice" && showExplanation
                          ? index === question.correct
                            ? "border-green-500 bg-green-500 text-white"
                            : selectedAnswer === index &&
                              index !== question.correct
                            ? "border-red-500 bg-red-500 text-white"
                            : "border-gray-400 bg-gray-400/20 text-gray-300"
                          : isSelected
                          ? "border-blue-500 bg-blue-500 text-white"
                          : "border-white/40 text-white"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg font-medium">{option}</span>
                    {mode === "practice" && showExplanation && (
                      <div className="ml-auto">
                        {index === question.correct ? (
                          <CheckCircle className="h-6 w-6 text-green-400" />
                        ) : selectedAnswer === index &&
                          index !== question.correct ? (
                          <XCircle className="h-6 w-6 text-red-400" />
                        ) : null}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation for practice mode */}
          {mode === "practice" && showExplanation && (
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <Lightbulb className="h-6 w-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-yellow-300 mb-2">
                    Giải thích:
                  </h4>
                  <p className="text-gray-200 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 border-white/30 text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
          >
            <ArrowLeft className="h-4 w-4" />
            Câu trước
          </Button>

          <div className="text-center">
            {mode === "test" && (
              <div className="text-white bg-white/10 rounded-lg px-4 py-2 backdrop-blur-sm border border-white/20">
                Đã trả lời: {Object.keys(selectedAnswers).length}/
                {testQuestions.length}
              </div>
            )}
          </div>

          {mode === "practice" && showExplanation ? (
            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 px-6 py-3"
            >
              {isLastQuestion ? "Bắt đầu lại" : "Câu tiếp theo"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          ) : mode === "test" && isLastQuestion ? (
            <Button
              onClick={handleFinish}
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 px-6 py-3"
            >
              <Trophy className="h-4 w-4" />
              Hoàn thành Quiz
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              disabled={mode === "practice" && !showExplanation}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3"
            >
              Câu tiếp theo
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Question Overview for Test Mode */}
        {mode === "test" && (
          <Card className="p-6 bg-white/10 backdrop-blur-lg border-white/20">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center gap-2">
              <Brain className="h-5 w-5" />
              Tổng quan câu hỏi
            </h3>
            <div className="grid grid-cols-10 gap-3 mb-6">
              {testQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-12 h-12 rounded-xl border-2 text-sm font-bold transition-all duration-300 hover:scale-110 ${
                    index === currentQuestion
                      ? "border-blue-500 bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                      : selectedAnswers[testQuestions[index].id] !== undefined
                      ? "border-green-500 bg-green-500 text-white shadow-lg shadow-green-500/25"
                      : "border-white/30 text-white hover:border-white/50 hover:bg-white/10"
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-8 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded shadow-lg shadow-blue-500/50"></div>
                <span>Câu hiện tại</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded shadow-lg shadow-green-500/25"></div>
                <span>Đã trả lời</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 rounded"></div>
                <span>Chưa trả lời</span>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Quiz;
