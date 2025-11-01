import { motion } from "framer-motion";

const MapLegend = ({ mode = "ethnic", selectedEthnic = null }) => {
  const ethnicLegend = [
    { color: "#DA251D", label: "Kinh (85.3%)", range: "> 80%" },
    { color: "#3B82F6", label: "Tày - Thái groups", range: "30-60%" },
    { color: "#8B5CF6", label: "H'Mông - Dao", range: "50-90%" },
    { color: "#F97316", label: "Tây Nguyên groups", range: "30-50%" },
    { color: "#14B8A6", label: "Khmer - Chăm", range: "10-30%" }
  ];

  const policyLegend = [
    { color: "#DC2626", label: "Rất cao", range: "> 20,000 tỷ" },
    { color: "#F97316", label: "Cao", range: "15,000-20,000 tỷ" },
    { color: "#F59E0B", label: "Trung bình", range: "10,000-15,000 tỷ" },
    { color: "#10B981", label: "Thấp", range: "5,000-10,000 tỷ" },
    { color: "#6B7280", label: "Không có dữ liệu", range: "< 5,000 tỷ" }
  ];

  const legend = mode === "ethnic" ? ethnicLegend : policyLegend;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/95 backdrop-blur-md border border-slate-700/50 rounded-xl p-4 shadow-xl"
    >
      <h3 className="text-sm font-bold text-white mb-3">
        {mode === "ethnic" ? "🗺️ Phân bố Dân tộc" : "💰 Mức đầu tư"}
      </h3>

      <div className="space-y-2">
        {legend.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-2"
          >
            <div
              className="w-4 h-4 rounded flex-shrink-0"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex-1">
              <div className="text-xs text-slate-300 font-medium">{item.label}</div>
              <div className="text-[10px] text-slate-500">{item.range}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {mode === "policy" && (
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span>📊</span>
            <span>Tổng: 277,000 tỷ (2021-2030)</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default MapLegend;
