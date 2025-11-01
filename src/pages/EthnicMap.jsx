import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Map,
  Users,
  DollarSign,
  TrendingDown,
  School,
  Hospital,
  Award,
  MapPin,
  ChevronRight,
  X,
  Globe
} from "lucide-react";
import { regions, provinces, getProvincesByRegion } from "../data/vietnamProvinces";
import { ethnicGroups, getEthnicGroupsByRegion } from "../data/ethnicGroups";
import {
  getProvinceInvestment,
  getPovertyRate,
  unescoSites,
  investmentStats
} from "../data/policyData";
import MapLegend from "../components/map/MapLegend";
import ProfessionalVietnamMap from "../components/map/ProfessionalVietnamMap";

const EthnicMap = () => {
  const [viewMode, setViewMode] = useState("ethnic"); // "ethnic" or "policy"
  const [selectedProvince, setSelectedProvince] = useState(null);

  const ProvinceDetailSidebar = ({ province }) => {
    const investment = getProvinceInvestment(province.id);
    const povertyRate = getPovertyRate(province.id);
    const regionData = regions[province.region];

    return (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 25 }}
        className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-slate-900 border-l border-slate-700 z-50 overflow-y-auto"
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-white mb-1">{province.name}</h2>
              <p className="text-sm text-slate-400">{regionData?.name}</p>
            </div>
            <button
              onClick={() => setSelectedProvince(null)}
              className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <Users className="w-5 h-5 text-ethnic-blue mb-2" />
              <div className="text-2xl font-bold text-white">
                {(province.population / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-slate-400">Dân số</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <Globe className="w-5 h-5 text-ethnic-purple mb-2" />
              <div className="text-2xl font-bold text-white">
                {province.ethnicMinorityPercent}%
              </div>
              <div className="text-xs text-slate-400">DTTS</div>
            </div>
          </div>

          {/* Ethnic Groups */}
          {province.dominantEthnic && province.dominantEthnic.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Dân tộc chủ yếu
              </h3>
              <div className="flex flex-wrap gap-2">
                {province.dominantEthnic.map((ethnic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-ethnic-blue/20 border border-ethnic-blue/30 rounded-lg text-ethnic-blue text-sm"
                  >
                    {ethnic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Investment Info */}
          {investment.total > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                Đầu tư & Phát triển
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-ethnic-green/10 border border-ethnic-green/30 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-slate-400">Tổng đầu tư</span>
                    <span className="text-lg font-bold text-ethnic-green">
                      {(investment.total / 1000).toFixed(1)}B tỷ
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">Chương trình 135 + NQ88</div>
                </div>

                {investment.projects > 0 && (
                  <div className="grid grid-cols-3 gap-2">
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <div className="text-xl font-bold text-white">{investment.projects}</div>
                      <div className="text-[10px] text-slate-400">Dự án</div>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <School className="w-4 h-4 text-ethnic-blue mx-auto mb-1" />
                      <div className="text-xl font-bold text-white">{investment.schools}</div>
                      <div className="text-[10px] text-slate-400">Trường</div>
                    </div>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center">
                      <Hospital className="w-4 h-4 text-ethnic-pink mx-auto mb-1" />
                      <div className="text-xl font-bold text-white">{investment.hospitals}</div>
                      <div className="text-[10px] text-slate-400">BV</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Poverty Rate */}
          {povertyRate && (
            <div className="mb-6">
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <TrendingDown className="w-4 h-4" />
                Giảm nghèo
              </h3>
              <div className="p-4 bg-vietnam-yellow/10 border border-vietnam-yellow/30 rounded-xl">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Tỷ lệ hộ nghèo (2023)</span>
                  <span className="text-2xl font-bold text-vietnam-yellow">{povertyRate}%</span>
                </div>
              </div>
            </div>
          )}

          {/* UNESCO Sites */}
          {unescoSites.filter(site => site.provinces.includes(province.id)).length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Di sản UNESCO
              </h3>
              <div className="space-y-2">
                {unescoSites
                  .filter(site => site.provinces.includes(province.id))
                  .map((site, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 border border-vietnam-yellow/30 rounded-xl"
                    >
                      <div className="flex items-start gap-3">
                        <div className="text-2xl">{site.icon}</div>
                        <div>
                          <div className="font-semibold text-white text-sm mb-1">{site.name}</div>
                          <div className="text-xs text-slate-400">{site.year}</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-900">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-40 -right-32 w-96 h-96 bg-vietnam-yellow/10 rounded-full filter blur-3xl"
        />
      </div>

      {/* Header */}
      <div className="container mx-auto px-4 py-12 max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vietnam rounded-full mb-4">
            <Map className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Bản đồ{" "}
            <span className="text-transparent bg-clip-text bg-gradient-vietnam">
              54 Dân tộc
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Khám phá phân bố dân tộc và chính sách đầu tư phát triển vùng DTTS
          </p>
        </motion.div>

        {/* View Mode Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode("ethnic")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === "ethnic"
                ? "bg-gradient-vietnam text-white shadow-lg"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
            }`}
          >
            <Users className="w-5 h-5" />
            Phân bố Dân tộc
          </button>
          <button
            onClick={() => setViewMode("policy")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
              viewMode === "policy"
                ? "bg-gradient-vietnam text-white shadow-lg"
                : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
            }`}
          >
            <DollarSign className="w-5 h-5" />
            Đầu tư & Chính sách
          </button>
        </div>

        {/* Map Container */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12">
          {/* Legend - Left Side */}
          <div className="lg:col-span-3">
            <MapLegend mode={viewMode} />

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 p-4 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-xl"
            >
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-vietnam-yellow" />
                Hướng dẫn
              </h3>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Di chuột qua tỉnh để xem thông tin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Click vào tỉnh để xem chi tiết</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Chuyển đổi chế độ xem trên thanh menu</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Vietnam Map - Center */}
          <div className="lg:col-span-9">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 shadow-2xl"
            >
              <ProfessionalVietnamMap
                mode={viewMode}
                onProvinceClick={setSelectedProvince}
                selectedProvince={selectedProvince}
                provinces={provinces}
              />
            </motion.div>
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-4 gap-6"
        >
          <div className="p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl">
            <DollarSign className="w-8 h-8 text-vietnam-yellow mb-2" />
            <div className="text-3xl font-black text-white mb-1">277,000 tỷ</div>
            <div className="text-sm text-slate-400">Tổng đầu tư 2021-2030</div>
          </div>
          <div className="p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl">
            <School className="w-8 h-8 text-ethnic-blue mb-2" />
            <div className="text-3xl font-black text-white mb-1">300+</div>
            <div className="text-sm text-slate-400">Trường DTTS nội trú</div>
          </div>
          <div className="p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl">
            <TrendingDown className="w-8 h-8 text-ethnic-green mb-2" />
            <div className="text-3xl font-black text-white mb-1">17%</div>
            <div className="text-sm text-slate-400">Tỷ lệ hộ nghèo DTTS 2023</div>
          </div>
          <div className="p-6 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl">
            <Award className="w-8 h-8 text-vietnam-red mb-2" />
            <div className="text-3xl font-black text-white mb-1">3+</div>
            <div className="text-sm text-slate-400">Di sản UNESCO</div>
          </div>
        </motion.div>
      </div>

      {/* Province Detail Sidebar */}
      <AnimatePresence>
        {selectedProvince && <ProvinceDetailSidebar province={selectedProvince} />}
      </AnimatePresence>

      {/* Overlay when sidebar is open */}
      <AnimatePresence>
        {selectedProvince && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProvince(null)}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EthnicMap;
