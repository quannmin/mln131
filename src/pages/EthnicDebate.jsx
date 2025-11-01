import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import {
  X,
  Check,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Landmark,
  Palette,
  ChevronRight,
  AlertCircle,
  CheckCircle,
  BarChart3,
  PieChart,
  MapPin,
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const EthnicDebate = () => {
  const [activeTab, setActiveTab] = useState("kinh-te");
  const [selectedView, setSelectedView] = useState("comparison"); // comparison or evidence

  const [comparisonRef, comparisonInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [dataRef, dataInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Data for poverty rate chart
  const povertyData = [
    { year: "2015", rate: 52.7 },
    { year: "2017", rate: 45.3 },
    { year: "2019", rate: 35.8 },
    { year: "2021", rate: 25.2 },
    { year: "2023", rate: 17.0 },
    { year: "2030 (Mục tiêu)", rate: 10.0 },
  ];

  // Investment data
  const investmentData = [
    { name: "Chương trình 135", value: 45000 },
    { name: "Nghị quyết 88", value: 137000 },
    { name: "Giáo dục", value: 28000 },
    { name: "Y tế", value: 15000 },
    { name: "Hạ tầng", value: 52000 },
  ];

  const tabs = [
    { id: "kinh-te", name: "Kinh tế", icon: <DollarSign className="w-5 h-5" />, color: "ethnic-green" },
    { id: "chinh-tri", name: "Chính trị", icon: <Landmark className="w-5 h-5" />, color: "ethnic-blue" },
    { id: "van-hoa", name: "Văn hóa", icon: <Palette className="w-5 h-5" />, color: "ethnic-orange" },
  ];

  const comparisonData = {
    "kinh-te": {
      myth: [
        "Thu nhập DTTS chỉ bằng 0.3x bình quân cả nước",
        "Hộ nghèo DTTS chiếm 52.7% (2015)",
        "Thiếu cơ hội phát triển kinh tế",
        "Người Kinh chiếm lĩnh tài nguyên vùng DTTS",
      ],
      reality: [
        "Do vùng núi khó sản xuất, không phải bị 'lấy đi'",
        "Đã giảm xuống 17% (2023) nhờ chính sách hỗ trợ",
        "137.000 tỷ đầu tư vùng DTTS (2021-2030)",
        "Nhà nước ưu tiên phát triển bền vững vùng DTTS",
      ],
    },
    "chinh-tri": {
      myth: [
        "Người Kinh nắm toàn bộ quyền lực",
        "DTTS thiếu đại diện trong chính quyền",
        "Chính sách do người Kinh quyết định",
        "DTTS không được tham gia quản lý",
      ],
      reality: [
        "15-17% đại biểu QH là DTTS (tỷ lệ công bằng)",
        "Ưu tiên đào tạo cán bộ người DTTS",
        "Cơ chế tham vấn cộng đồng, người có uy tín",
        "Nhiều cán bộ cấp cao là người DTTS",
      ],
    },
    "van-hoa": {
      myth: [
        "Văn hóa DTTS bị lu mờ trước văn hóa Kinh",
        "Áp đặt văn hóa Kinh lên các dân tộc khác",
        "Đồng hóa văn hóa thiểu số",
        "Ngôn ngữ DTTS không được bảo tồn",
      ],
      reality: [
        "UNESCO công nhận Cồng chiêng (2005), nhiều lễ hội DTTS",
        "Nhà nước bảo tồn ngôn ngữ, trang phục, phong tục",
        "300+ trường dân tộc nội trú, dạy song ngữ",
        "Chính sách 'thống nhất trong đa dạng'",
      ],
    },
  };

  const evidenceData = [
    {
      title: "Giảm nghèo vượt bậc",
      stat: "52.7% → 17%",
      description: "Tỷ lệ hộ nghèo vùng DTTS giảm từ 52.7% (2015) xuống 17% (2023)",
      color: "ethnic-green",
      icon: <TrendingUp className="w-6 h-6" />,
    },
    {
      title: "Đầu tư khổng lồ",
      stat: "137,000 tỷ",
      description: "Vốn đầu tư vùng DTTS & miền núi giai đoạn 2021-2030",
      color: "ethnic-orange",
      icon: <DollarSign className="w-6 h-6" />,
    },
    {
      title: "Giáo dục ưu tiên",
      stat: "300+ trường",
      description: "Trường dân tộc nội trú trên cả nước, miễn giảm học phí",
      color: "ethnic-purple",
      icon: <BarChart3 className="w-6 h-6" />,
    },
    {
      title: "Đại diện chính trị",
      stat: "15-17%",
      description: "Tỷ lệ đại biểu Quốc hội là người DTTS",
      color: "ethnic-blue",
      icon: <Landmark className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-0 left-1/4 w-96 h-96 bg-vietnam-red rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-ethnic-blue rounded-full filter blur-3xl"
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-full mb-8">
              <AlertCircle className="w-5 h-5 text-vietnam-yellow mr-2" />
              <span className="text-slate-300 text-sm font-medium">
                Phân tích khách quan dựa trên dữ liệu thực tế
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Chiếm dụng
              </span>
              <span className="text-white"> hay </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Chênh lệch khách quan
              </span>
              <span className="text-white">?</span>
            </h1>

            <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-12">
              So sánh hai quan điểm về mối quan hệ giữa người Kinh và các dân tộc thiểu số ở Việt Nam
            </p>

            {/* View Toggle */}
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setSelectedView("comparison")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedView === "comparison"
                    ? "bg-gradient-vietnam text-white shadow-lg"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                }`}
              >
                So sánh Quan điểm
              </button>
              <button
                onClick={() => setSelectedView("evidence")}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedView === "evidence"
                    ? "bg-gradient-vietnam text-white shadow-lg"
                    : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                }`}
              >
                Bằng chứng & Dữ liệu
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {selectedView === "comparison" ? (
          <motion.div
            key="comparison"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Tabs */}
            <section className="relative py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-center gap-4 mb-12">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        activeTab === tab.id
                          ? `bg-${tab.color} text-white shadow-lg scale-105`
                          : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      {tab.icon}
                      {tab.name}
                    </button>
                  ))}
                </div>

                {/* Split Comparison */}
                <div ref={comparisonRef} className="grid md:grid-cols-2 gap-6">
                  {/* Left Side - Myth */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-red-900/20 to-orange-900/20 backdrop-blur-md border border-red-500/30 rounded-3xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                        <X className="w-6 h-6 text-red-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-red-300">Quan điểm "Chiếm dụng"</h3>
                        <p className="text-sm text-red-400/70">Nhận định thiếu cơ sở</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {comparisonData[activeTab].myth.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-red-500/10 rounded-xl border border-red-500/20"
                        >
                          <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Right Side - Reality */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-md border border-green-500/30 rounded-3xl p-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                        <Check className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-green-300">Thực tế Khách quan</h3>
                        <p className="text-sm text-green-400/70">Dựa trên dữ liệu và chính sách</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {comparisonData[activeTab].reality.map((point, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          animate={comparisonInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          className="flex items-start gap-3 p-4 bg-green-500/10 rounded-xl border border-green-500/20"
                        >
                          <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <p className="text-slate-300 text-sm leading-relaxed">{point}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="evidence"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {/* Evidence Cards */}
            <section className="relative py-12 px-4">
              <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {evidenceData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className={`bg-gradient-to-br from-${item.color}/20 to-${item.color}/10 backdrop-blur-md border border-${item.color}/30 rounded-3xl p-6 hover:scale-105 transition-transform duration-300`}
                    >
                      <div className={`w-12 h-12 bg-${item.color}/20 rounded-full flex items-center justify-center mb-4`}>
                        {item.icon}
                      </div>
                      <div className={`text-4xl font-black text-${item.color} mb-2`}>
                        {item.stat}
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Charts */}
                <div ref={dataRef} className="grid md:grid-cols-2 gap-6">
                  {/* Poverty Rate Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={dataInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <TrendingDown className="w-6 h-6 text-ethnic-green" />
                      Giảm tỷ lệ hộ nghèo DTTS
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={povertyData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="year" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                            borderRadius: "8px",
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="rate"
                          stroke="#10B981"
                          strokeWidth={3}
                          dot={{ fill: "#10B981", r: 5 }}
                          activeDot={{ r: 8 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </motion.div>

                  {/* Investment Chart */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={dataInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-6"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-6 h-6 text-ethnic-orange" />
                      Đầu tư vùng DTTS (tỷ đồng)
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={investmentData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" angle={-15} textAnchor="end" height={80} />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "1px solid #334155",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="value" fill="#F97316" radius={[8, 8, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conclusion Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 rounded-3xl p-12 text-center"
          >
            <div className="w-16 h-16 bg-gradient-vietnam rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>

            <h2 className="text-4xl font-black text-white mb-6">
              Kết luận
            </h2>

            <p className="text-xl text-slate-300 mb-6 leading-relaxed">
              Sự chênh lệch giữa người Kinh và các dân tộc thiểu số là{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400 font-bold">
                chênh lệch khách quan
              </span>
              , xuất phát từ điều kiện địa lý và lịch sử, KHÔNG PHẢI là{" "}
              <span className="text-red-400 font-bold">"chiếm dụng"</span>.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              Nhà nước có nhiều chính sách hỗ trợ toàn diện để thu hẹp khoảng cách,
              bảo tồn bản sắc và thúc đẩy mọi dân tộc cùng phát triển bền vững.
            </p>

            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-sm text-slate-500 italic">
                "Nước Việt Nam là một, dân tộc Việt Nam là một,<br />
                sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi"
                <br />
                <span className="text-vietnam-yellow not-italic">- Chủ tịch Hồ Chí Minh</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EthnicDebate;
