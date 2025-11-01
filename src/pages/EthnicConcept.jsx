import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Scale,
  Handshake,
  MapPin,
  Award,
  Target,
  Calendar,
  CheckCircle,
  XCircle,
  Trophy,
  Image as ImageIcon,
} from "lucide-react";

const EthnicConcept = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResult, setShowQuizResult] = useState({});
  const [completedSections, setCompletedSections] = useState(new Set());

  // Timeline data
  const timelineEvents = [
    { year: "1945", title: "Tuyên ngôn Độc lập", desc: "Khẳng định bình đẳng các dân tộc", color: "vietnam-red" },
    { year: "1954", title: "Hiệp định Genève", desc: "Miền Bắc giải phóng, chính sách dân tộc", color: "ethnic-blue" },
    { year: "1975", title: "Thống nhất đất nước", desc: "Chính sách dân tộc toàn quốc", color: "vietnam-yellow" },
    { year: "1986", title: "Đổi mới", desc: "Phát triển kinh tế vùng DTTS", color: "ethnic-green" },
    { year: "1998", title: "Chương trình 135", desc: "Đầu tư hạ tầng vùng khó khăn", color: "ethnic-orange" },
    { year: "2019", title: "Nghị quyết 88", desc: "137,000 tỷ đầu tư 2021-2030", color: "ethnic-purple" },
    { year: "2030", title: "Mục tiêu", desc: "Hộ nghèo DTTS < 10%", color: "ethnic-pink" },
  ];

  // Cultural heritage data
  const culturalItems = [
    {
      title: "Cồng chiêng Tây Nguyên",
      subtitle: "UNESCO 2005",
      desc: "Không gian văn hóa cồng chiêng của các dân tộc Tây Nguyên",
      image: "🥁",
      color: "ethnic-orange"
    },
    {
      title: "Lễ hội Gầu Tào",
      subtitle: "Dân tộc H'Mông",
      desc: "Lễ hội truyền thống đầu năm của người H'Mông",
      image: "🎉",
      color: "ethnic-blue"
    },
    {
      title: "Chol Chnam Thmay",
      subtitle: "Dân tộc Khmer",
      desc: "Tết cổ truyền của người Khmer Nam Bộ",
      image: "🎊",
      color: "ethnic-green"
    },
    {
      title: "Lễ hội đâm trâu",
      subtitle: "Dân tộc Ba Na",
      desc: "Nghi lễ văn hóa độc đáo của người Ba Na",
      image: "🎭",
      color: "ethnic-purple"
    },
    {
      title: "Tín ngưỡng thờ Mẫu",
      subtitle: "UNESCO 2016",
      desc: "Tín ngưỡng thờ Mẫu Tam phủ của người Việt",
      image: "🏮",
      color: "vietnam-yellow"
    },
  ];

  const sections = [
    {
      id: 1,
      title: "I. Giới thiệu",
      icon: <BookOpen className="w-6 h-6" />,
      color: "ethnic-blue",
      content: {
        intro: "Trong quá trình phát triển của dân tộc Việt Nam, quan hệ giữa người Kinh và các dân tộc thiểu số luôn đóng vai trò then chốt trong việc duy trì sự thống nhất quốc gia và sức mạnh đại đoàn kết dân tộc.",
        points: [
          {
            title: "Bối cảnh",
            content: "Việt Nam là một quốc gia đa dân tộc, gồm 54 dân tộc anh em cùng sinh sống trên lãnh thổ thống nhất, trong đó người Kinh chiếm đa số và giữ vai trò trung tâm trong các lĩnh vực kinh tế, chính trị và văn hóa."
          },
          {
            title: "Vấn đề đặt ra",
            content: "Trong bối cảnh toàn cầu hóa, truyền thông xã hội và nhận thức xã hội ngày càng đa chiều, xuất hiện một số quan điểm cho rằng người Kinh 'chiếm dụng' văn hóa, kinh tế và chính trị của các dân tộc thiểu số."
          },
          {
            title: "Tính thời sự",
            content: "Vấn đề dân tộc và quan hệ giữa người Kinh với các dân tộc thiểu số là một trong những nội dung cốt lõi trong đường lối cách mạng Việt Nam. Việc phân tích nhận định này dưới ánh sáng lý luận Mác – Lênin và tư tưởng Hồ Chí Minh là cần thiết."
          },
        ],
        quote: "Mục tiêu: Làm rõ bản chất khoa học của mối quan hệ giữa dân tộc đa số và dân tộc thiểu số trong xã hội Việt Nam hiện nay; Đánh giá đúng đắn vai trò của Nhà nước và các chính sách dân tộc."
      },
      quiz: {
        question: "Việt Nam có bao nhiêu dân tộc anh em?",
        options: ["45 dân tộc", "54 dân tộc", "60 dân tộc", "63 dân tộc"],
        correct: 1,
        explanation: "Việt Nam có 54 dân tộc anh em, trong đó dân tộc Kinh chiếm 85.3% dân số."
      }
    },
    {
      id: 2,
      title: "II. Quan điểm Mác-Lênin",
      icon: <Scale className="w-6 h-6" />,
      color: "ethnic-purple",
      content: {
        intro: "Vấn đề dân tộc là một trong những nội dung trọng tâm của học thuyết Mác – Lênin, gắn liền với quá trình hình thành, phát triển và đấu tranh của các giai cấp, quốc gia trong tiến trình lịch sử nhân loại.",
        points: [
          {
            title: "Quan điểm của C.Mác và Ph.Ăngghen",
            content: "C.Mác và Ph.Ăngghen là những người đầu tiên đặt nền móng cho việc nghiên cứu vấn đề dân tộc dưới góc độ duy vật lịch sử và đấu tranh giai cấp. Các ông khẳng định rằng trong xã hội tư bản, các mâu thuẫn dân tộc không thể tách rời khỏi mâu thuẫn giai cấp."
          },
          {
            title: "Quan điểm của V.I.Lênin",
            content: "Lênin đã kế thừa và phát triển sâu sắc hơn tư tưởng của Mác và Ăngghen. Ông cho rằng vấn đề dân tộc có hai mặt gắn bó hữu cơ: Quyền bình đẳng giữa các dân tộc và Quyền tự quyết dân tộc."
          },
          {
            title: "Nguyên tắc cơ bản",
            content: "Các dân tộc bị áp bức có quyền tự quyết, tuy nhiên trong điều kiện quốc gia đa dân tộc, tự quyết không đồng nghĩa với ly khai mà là quyền tham gia bình đẳng vào quốc gia chung."
          },
          {
            title: "Trong thời kỳ quá độ CNXH",
            content: "Giải quyết vấn đề dân tộc không chỉ là xóa bỏ áp bức dân tộc mà còn gắn với việc giải phóng giai cấp, phát triển kinh tế – xã hội toàn diện, xây dựng liên minh công – nông – trí thức."
          },
        ],
      },
      quiz: {
        question: "Theo Lênin, quyền tự quyết dân tộc trong quốc gia đa dân tộc nghĩa là gì?",
        options: [
          "Quyền ly khai khỏi quốc gia",
          "Quyền tham gia bình đẳng vào quốc gia chung",
          "Quyền tự trị hoàn toàn",
          "Quyền thành lập chính phủ riêng"
        ],
        correct: 1,
        explanation: "Tự quyết không đồng nghĩa với ly khai mà là quyền tham gia bình đẳng vào quốc gia chung."
      }
    },
    {
      id: 3,
      title: "III. Tư tưởng Hồ Chí Minh",
      icon: <Handshake className="w-6 h-6" />,
      color: "vietnam-yellow",
      content: {
        intro: "Hồ Chí Minh tiếp thu và vận dụng lý luận Mác – Lênin về vấn đề dân tộc, đồng thời sáng tạo hóa phù hợp với điều kiện Việt Nam.",
        points: [
          {
            title: "Đoàn kết dân tộc",
            content: "\"Đồng bào Kinh hay Thổ, Mường hay Mán, Gia Rai hay Ê Đê, Xê Đăng hay Ba Na và các dân tộc thiểu số khác, đều là con cháu Việt Nam, đều là anh em ruột thịt. Chúng ta sống chết có nhau, sướng khổ cùng nhau, no đói giúp nhau.\""
          },
          {
            title: "Bình đẳng dân tộc",
            content: "Mọi dân tộc – lớn, nhỏ – đều là thành viên bình đẳng trong cộng đồng dân tộc Việt Nam. Bác từng nói: 'Chế độ ta là chế độ dân chủ, tức là tất cả đồng bào các dân tộc đều là người chủ nước nhà'."
          },
          {
            title: "Tôn trọng bản sắc",
            content: "\"Dân tộc nào đông hơn, tiến bộ hơn thì phải giúp đỡ các dân tộc khác để đều tiến bộ như nhau, đều đoàn kết như anh em một nhà.\""
          },
          {
            title: "Lý do đoàn kết",
            content: "Trước kia thực dân và phong kiến đã lợi dụng mâu thuẫn để chia rẽ chúng ta, kích động hận thù giữa các dân tộc nhằm dễ bề áp bức và bóc lột. Do đó, nhiệm vụ trước mắt là phải đoàn kết lại."
          },
        ],
        quote: "\"Nước Việt Nam là một, dân tộc Việt Nam là một, sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi\" - Hồ Chí Minh"
      },
      quiz: {
        question: "Theo Hồ Chí Minh, dân tộc nào phải giúp đỡ dân tộc khác?",
        options: [
          "Dân tộc có nhiều người",
          "Dân tộc đông hơn, tiến bộ hơn",
          "Chỉ dân tộc Kinh",
          "Dân tộc giàu có"
        ],
        correct: 1,
        explanation: "Dân tộc nào đông hơn, tiến bộ hơn thì phải giúp đỡ các dân tộc khác để đều tiến bộ như nhau."
      }
    },
    {
      id: 4,
      title: "IV. Đặc điểm Dân tộc VN",
      icon: <Users className="w-6 h-6" />,
      color: "ethnic-green",
      content: {
        intro: "Việt Nam là một quốc gia đa dân tộc thống nhất trong một quốc gia độc lập, với các đặc điểm nổi bật sau:",
        points: [
          {
            title: "1. Đa dạng nhưng thống nhất",
            content: "54 dân tộc anh em cùng sinh sống, trong đó dân tộc Kinh là lớn nhất (85,3% dân số). Mặc dù khác nhau về ngôn ngữ, phong tục, tín ngưỡng, nhưng mọi dân tộc đều có chung Tổ quốc Việt Nam."
          },
          {
            title: "2. Phân bố không đồng đều",
            content: "Người Kinh sinh sống chủ yếu ở đồng bằng, trung du, ven biển - nơi thuận lợi cho sản xuất và giao lưu. Các dân tộc thiểu số cư trú chủ yếu ở miền núi, biên giới - nơi địa hình hiểm trở, giao thông khó khăn."
          },
          {
            title: "3. Đa dạng văn hóa",
            content: "Mỗi dân tộc có phong tục, trang phục, lễ hội riêng. Ví dụ: Lễ hội đâm trâu (Ba Na), Gầu Tào (H'Mông), Chol Chnam Thmay (Khmer), Không gian văn hóa cồng chiêng (UNESCO 2005)."
          },
          {
            title: "4. Đoàn kết - hỗ trợ lẫn nhau",
            content: "Các dân tộc Việt Nam cùng chia sẻ vận mệnh, cùng chiến đấu chống ngoại xâm, xây dựng hòa bình. Tinh thần đại đoàn kết dân tộc trở thành truyền thống cốt lõi."
          },
        ],
        conclusion: "Sự chênh lệch giữa các dân tộc không phải là 'chiếm dụng' hay áp đặt, mà là hệ quả khách quan của điều kiện phát triển khác nhau."
      },
      quiz: {
        question: "Dân tộc Kinh chiếm bao nhiêu % dân số Việt Nam?",
        options: ["75.3%", "80.5%", "85.3%", "90.2%"],
        correct: 2,
        explanation: "Dân tộc Kinh chiếm 85.3% dân số Việt Nam (theo Tổng điều tra 2019)."
      }
    },
    {
      id: 5,
      title: "V. Chính sách Dân tộc",
      icon: <Target className="w-6 h-6" />,
      color: "ethnic-orange",
      content: {
        intro: "Nhà nước Việt Nam có nhiều chính sách hỗ trợ toàn diện để phát triển vùng dân tộc thiểu số và miền núi:",
        points: [
          {
            title: "1. Phát triển Kinh tế - Xã hội",
            content: "Chương trình 135 (từ 1998), Nghị quyết 88/2019/QH14 với tổng vốn hơn 137.000 tỷ đồng (2021-2030), mục tiêu giảm tỷ lệ hộ nghèo xuống dưới 10% vào 2030. Kết quả: Tỷ lệ hộ nghèo giảm từ 52,7% (2015) xuống 17% (2023)."
          },
          {
            title: "2. Giáo dục và Đào tạo",
            content: "Hơn 300 trường dân tộc nội trú trên cả nước. Miễn, giảm học phí, cấp học bổng, ưu tiên tuyển sinh cho học sinh dân tộc thiểu số. Dạy song ngữ để bảo tồn ngôn ngữ bản địa."
          },
          {
            title: "3. Bảo tồn Văn hóa",
            content: "Không gian văn hóa cồng chiêng Tây Nguyên (UNESCO 2005), Tín ngưỡng thờ Mẫu Tam phủ (UNESCO 2016). Các lễ hội dân tộc được bảo tồn và phục dựng định kỳ với kinh phí nhà nước."
          },
          {
            title: "4. Y tế và An sinh",
            content: "Bảo hiểm y tế miễn phí, hỗ trợ nhà ở, nước sạch. Chương trình 134 và 167 đã giúp hơn 600.000 hộ dân có nhà ở ổn định."
          },
          {
            title: "5. Chính trị - Tham gia quản lý",
            content: "15-17% đại biểu Quốc hội là người dân tộc thiểu số. Ưu tiên đào tạo, bồi dưỡng cán bộ là người dân tộc thiểu số để tham gia trực tiếp quản lý xã hội."
          },
        ],
        conclusion: "Định hướng của Việt Nam: 'Mọi dân tộc cùng phát triển, không ai bị bỏ lại phía sau'."
      },
      quiz: {
        question: "Chương trình 135 được khởi động năm nào?",
        options: ["1986", "1992", "1998", "2005"],
        correct: 2,
        explanation: "Chương trình 135 được khởi động từ năm 1998 để hỗ trợ các xã đặc biệt khó khăn."
      }
    },
    {
      id: 6,
      title: "VI. Phân tích So sánh",
      icon: <Scale className="w-6 h-6" />,
      color: "ethnic-cyan",
      content: {
        intro: "So sánh hai quan điểm để đưa ra kết luận khoa học:",
        points: [
          {
            title: "Quan điểm 1: Có 'chiếm dụng'",
            content: "Thu nhập DTTS chỉ bằng 0,3 lần bình quân cả nước. Hộ nghèo DTTS chiếm 52,7% (2018). Người Kinh nắm lợi thế trong kinh tế, chính trị, văn hóa. Văn hóa Kinh có thể 'lấn át' văn hóa thiểu số."
          },
          {
            title: "Quan điểm 2: Chênh lệch khách quan",
            content: "Sự khác biệt bắt nguồn từ điều kiện địa lý và lịch sử. Người Kinh ở đồng bằng (đất màu mỡ, giao thông thuận lợi), DTTS ở miền núi (hạ tầng yếu, khó sản xuất). Theo WB (2020): nguyên nhân lớn nhất là kết nối hạ tầng yếu và thiếu cơ hội kinh tế."
          },
          {
            title: "Bằng chứng từ chính sách",
            content: "Chương trình 135: đầu tư 2.000+ xã đặc biệt khó khăn. NQ88 + MTQG 2021-2030: 137.000 tỷ đồng. Kết quả: Tỷ lệ hộ nghèo vùng DTTS giảm còn 17% (2023), thấp hơn một nửa so với 8 năm trước."
          },
          {
            title: "Kết luận",
            content: "Khoảng cách phát triển là có thật, nhưng phần lớn xuất phát từ điều kiện tự nhiên và lịch sử – đây là chênh lệch khách quan, KHÔNG PHẢI 'chiếm dụng' có hệ thống. Chính sách của Đảng và Nhà nước nhất quán bảo đảm bình đẳng, đoàn kết, tôn trọng."
          },
        ],
      },
      quiz: {
        question: "Nghị quyết 88/2019 đầu tư bao nhiêu cho vùng DTTS giai đoạn 2021-2030?",
        options: ["87,000 tỷ", "117,000 tỷ", "137,000 tỷ", "157,000 tỷ"],
        correct: 2,
        explanation: "Nghị quyết 88/2019/QH14 với tổng vốn hơn 137.000 tỷ đồng cho giai đoạn 2021-2030."
      }
    },
    {
      id: 7,
      title: "VII. Thực tiễn Quan hệ",
      icon: <MapPin className="w-6 h-6" />,
      color: "ethnic-pink",
      content: {
        intro: "Mối quan hệ giữa người Kinh và các dân tộc thiểu số trong thực tế:",
        points: [
          {
            title: "Thành tựu đạt được",
            content: "Về chính trị: Đại diện DTTS trong các cơ quan quyền lực. Về kinh tế: Hàng triệu hộ dân thoát nghèo. Về văn hóa: Nhiều giá trị được UNESCO công nhận. Về an ninh: Sự đoàn kết góp phần bảo vệ biên giới."
          },
          {
            title: "Thách thức còn tồn tại",
            content: "Khoảng cách phát triển kinh tế-xã hội vẫn còn. Nguy cơ mai một bản sắc văn hóa do đô thị hóa. Xuất hiện quan điểm lệch lạc trên không gian mạng."
          },
          {
            title: "Nguyên nhân",
            content: "Yếu tố khách quan: điều kiện địa lý, lịch sử, cơ cấu kinh tế vùng. Yếu tố chủ quan: năng lực quản lý, chính sách triển khai, nhận thức xã hội."
          },
          {
            title: "Định hướng giải quyết",
            content: "Hoàn thiện chính sách toàn diện, liên kết vùng. Đẩy mạnh giáo dục về bình đẳng và đoàn kết. Phát huy vai trò trí thức, người có uy tín trong cộng đồng DTTS."
          },
        ],
      },
      quiz: {
        question: "Tỷ lệ hộ nghèo DTTS năm 2023 là bao nhiêu?",
        options: ["12%", "17%", "22%", "27%"],
        correct: 1,
        explanation: "Tỷ lệ hộ nghèo vùng DTTS đã giảm xuống còn 17% năm 2023."
      }
    },
    {
      id: 8,
      title: "VIII. Đại đoàn kết Dân tộc",
      icon: <Handshake className="w-6 h-6" />,
      color: "ethnic-indigo",
      content: {
        intro: "Quan điểm của Đảng và Nhà nước về tăng cường khối đại đoàn kết dân tộc:",
        points: [
          {
            title: "Đường lối chiến lược",
            content: "Đại đoàn kết dân tộc là đường lối chiến lược nhất quán và lâu dài của cách mạng Việt Nam. 'Đại đoàn kết toàn dân tộc là nguồn sức mạnh, là động lực chủ yếu và là nhân tố có ý nghĩa quyết định' (Văn kiện Đại hội XIII, 2021)."
          },
          {
            title: "4 Quan điểm cơ bản",
            content: "1) Đặt lợi ích quốc gia – dân tộc lên trên hết. 2) Bảo đảm quyền bình đẳng, tôn trọng và giúp nhau cùng phát triển. 3) Kết hợp hài hòa giữa truyền thống và yêu cầu phát triển hiện đại. 4) Phát huy vai trò chủ thể của nhân dân."
          },
          {
            title: "Yêu cầu mới",
            content: "Thích ứng linh hoạt với thay đổi của thời đại, nhưng không đánh mất bản sắc. Đổi mới truyền thông trong môi trường số. Giải quyết đồng bộ phát triển vùng DTTS theo hướng 'tạo động lực tự thân'."
          },
          {
            title: "Ý nghĩa",
            content: "Đoàn kết dân tộc là nền tảng cốt lõi để xây dựng CNXH công bằng và bền vững. Thước đo bản chất nhân văn của chế độ xã hội chủ nghĩa."
          },
        ],
      },
      quiz: {
        question: "Đại đoàn kết dân tộc là gì theo Văn kiện Đại hội XIII?",
        options: [
          "Là mục tiêu xa",
          "Là nguồn sức mạnh và động lực chủ yếu",
          "Là khẩu hiệu chính trị",
          "Là yêu cầu tạm thời"
        ],
        correct: 1,
        explanation: "Đại đoàn kết toàn dân tộc là nguồn sức mạnh, là động lực chủ yếu và là nhân tố có ý nghĩa quyết định."
      }
    },
    {
      id: 9,
      title: "IX. Kết luận",
      icon: <Award className="w-6 h-6" />,
      color: "vietnam-red",
      content: {
        intro: "Tổng kết và rút ra ý nghĩa quan trọng:",
        points: [
          {
            title: "Khẳng định lập luận",
            content: "Cáo buộc người Kinh 'chiếm dụng' văn hóa, kinh tế, chính trị của các dân tộc thiểu số KHÔNG hoàn toàn chính xác. Sự chênh lệch về vai trò là hệ quả khách quan của yếu tố lịch sử, địa lý và mức độ phát triển kinh tế - xã hội."
          },
          {
            title: "Chính sách của Nhà nước",
            content: "Thông qua các chương trình như Chương trình 135, ưu tiên giáo dục, y tế và phát triển cơ sở hạ tầng, Nhà nước đã nỗ lực thu hẹp khoảng cách và bảo tồn bản sắc văn hóa các dân tộc thiểu số."
          },
          {
            title: "Bài học đoàn kết",
            content: "Đoàn kết dân tộc là nền tảng cốt lõi để xây dựng CNXH công bằng và bền vững. Theo tinh thần Nghị quyết Trung ương 8 khóa XIII và tư tưởng Hồ Chí Minh, đại đoàn kết toàn dân tộc là động lực cho sự phát triển đất nước."
          },
          {
            title: "Định hướng tương lai",
            content: "Tiếp tục hoàn thiện chính sách hỗ trợ vùng DTTS, bảo tồn văn hóa đa dạng và thúc đẩy bình đẳng để mọi dân tộc cùng phát triển, từ đó xây dựng một xã hội CNXH phồn vinh, hạnh phúc."
          },
        ],
        quote: "\"Nước Việt Nam là một, dân tộc Việt Nam là một, sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi.\" - Đó chính là kim chỉ nam cho hành trình xây dựng một Việt Nam hòa bình, thống nhất và hạnh phúc cho mọi dân tộc."
      },
      quiz: {
        question: "Kết luận chính của phân tích là gì?",
        options: [
          "Người Kinh đang chiếm dụng",
          "Chênh lệch khách quan, không phải chiếm dụng",
          "Cần phân chia lại tài nguyên",
          "Các dân tộc nên tự trị"
        ],
        correct: 1,
        explanation: "Sự chênh lệch là hệ quả khách quan, KHÔNG PHẢI chiếm dụng có hệ thống."
      }
    },
  ];

  const goToSection = (index) => {
    setCurrentSection(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCompletedSections(prev => new Set([...prev, currentSection]));
      goToSection(currentSection + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      goToSection(currentSection - 1);
    }
  };

  const handleQuizAnswer = (sectionId, optionIndex) => {
    setQuizAnswers(prev => ({ ...prev, [sectionId]: optionIndex }));
    setShowQuizResult(prev => ({ ...prev, [sectionId]: true }));
  };

  const currentData = sections[currentSection];
  const currentQuiz = currentData.quiz;
  const userAnswer = quizAnswers[currentData.id];
  const showResult = showQuizResult[currentData.id];
  const isCorrect = userAnswer === currentQuiz?.correct;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-40">
        <div className="h-1 bg-slate-800">
          <motion.div
            className="h-full bg-gradient-vietnam"
            initial={{ width: "0%" }}
            animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Side Navigation */}
      <div className="hidden lg:block fixed left-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-2">
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => goToSection(index)}
              whileHover={{ scale: 1.2 }}
              className={`relative block w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? "bg-vietnam-yellow ring-2 ring-vietnam-yellow/50 scale-125"
                  : completedSections.has(index)
                  ? "bg-ethnic-green"
                  : "bg-slate-700 hover:bg-slate-600"
              }`}
              title={section.title}
            >
              {completedSections.has(index) && (
                <CheckCircle className="absolute -top-1 -right-1 w-4 h-4 text-ethnic-green" />
              )}
            </motion.button>
          ))}
        </div>

        {/* Achievement Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-3 bg-slate-800/80 rounded-xl border border-slate-700"
        >
          <div className="text-center">
            <Trophy className="w-6 h-6 text-vietnam-yellow mx-auto mb-1" />
            <div className="text-xs text-slate-400">{completedSections.size}/9</div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-slate-800/50 rounded-full mb-4"
              >
                <div className="text-vietnam-yellow">
                  {currentData.icon}
                </div>
              </motion.div>

              <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                {currentData.title}
              </h1>

              <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
                <span>Phần {currentSection + 1} / {sections.length}</span>
              </div>
            </div>

            {/* Timeline (only show on first section) */}
            {currentSection === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-vietnam-yellow" />
                  Dòng thời gian Chính sách Dân tộc
                </h3>
                <div className="relative">
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-700 -translate-y-1/2" />
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
                    {timelineEvents.map((event, index) => (
                      <motion.div
                        key={event.year}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="relative"
                      >
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-${event.color} ring-4 ring-slate-900 z-10`} />
                        <div className="pt-12 text-center">
                          <div className={`text-lg font-bold text-${event.color} mb-1`}>
                            {event.year}
                          </div>
                          <div className="text-sm font-semibold text-white mb-1">
                            {event.title}
                          </div>
                          <div className="text-xs text-slate-400">
                            {event.desc}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Cultural Carousel (show on section 4 - Culture) */}
            {currentSection === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-12"
              >
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-vietnam-yellow" />
                  Di sản Văn hóa & Lễ hội Dân tộc
                </h3>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                  spaceBetween={30}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000 }}
                  effect="coverflow"
                  coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                  className="py-8"
                >
                  {culturalItems.map((item, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 backdrop-blur-md border border-${item.color}/30 rounded-3xl p-8 h-80 flex flex-col items-center justify-center text-center`}
                      >
                        <div className="text-6xl mb-4">{item.image}</div>
                        <h4 className={`text-xl font-bold text-white mb-2`}>
                          {item.title}
                        </h4>
                        <div className={`text-sm text-${item.color} font-semibold mb-3`}>
                          {item.subtitle}
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </motion.div>
            )}

            {/* Content */}
            <div className="bg-yellow-900/30 backdrop-blur-md border border-yellow-600/40 rounded-3xl p-8 md:p-12 shadow-xl">
              {currentData.content.intro && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-slate-200 mb-8 leading-relaxed italic font-medium"
                >
                  {currentData.content.intro}
                </motion.p>
              )}

              <div className="space-y-6">
                {currentData.content.points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-yellow-800/20 rounded-2xl p-6 border border-yellow-600/30 hover:border-yellow-500/50 transition-all duration-300"
                  >
                    <h3 className="text-2xl font-bold text-vietnam-yellow mb-3">
                      {point.title}
                    </h3>
                    <p className="text-slate-200 leading-relaxed text-lg">
                      {point.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {currentData.content.conclusion && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="mt-8 p-6 bg-gradient-to-r from-ethnic-green/10 to-ethnic-blue/10 rounded-2xl border border-ethnic-green/30"
                >
                  <p className="text-slate-200 font-semibold">
                    📌 {currentData.content.conclusion}
                  </p>
                </motion.div>
              )}

              {currentData.content.quote && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-8 p-6 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 rounded-2xl border border-vietnam-yellow/30"
                >
                  <p className="text-slate-300 italic text-center leading-relaxed">
                    {currentData.content.quote}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Mini Quiz */}
            {currentQuiz && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="mt-8 bg-gradient-to-br from-ethnic-purple/20 to-ethnic-blue/20 backdrop-blur-md border border-ethnic-purple/30 rounded-3xl p-8"
              >
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
                      onClick={() => handleQuizAnswer(currentData.id, index)}
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
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12">
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
                Trước
              </button>

              <div className="text-slate-400 text-sm">
                {currentSection + 1} / {sections.length}
              </div>

              <button
                onClick={nextSection}
                disabled={currentSection === sections.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  currentSection === sections.length - 1
                    ? "bg-yellow-900/20 text-slate-600 cursor-not-allowed"
                    : "bg-gradient-vietnam text-white hover:shadow-lg hover:shadow-vietnam-yellow/25"
                }`}
              >
                Tiếp
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EthnicConcept;
