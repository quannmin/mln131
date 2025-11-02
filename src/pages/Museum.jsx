import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Users,
  Globe,
  Search,
  X,
  MapPin,
  Music,
  Home,
  Shirt,
  Calendar,
  ChevronRight,
  Filter
} from "lucide-react";
import { ethnicGroups, languageFamilies } from "../data/ethnicGroups";

const Museum = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLanguageFamily, setSelectedLanguageFamily] = useState("all");
  const [selectedEthnicGroup, setSelectedEthnicGroup] = useState(null);

  // Get all ethnic groups sorted by population
  const allEthnicGroups = useMemo(() => {
    return Object.values(ethnicGroups).sort((a, b) => b.population - a.population);
  }, []);

  // Filter ethnic groups
  const filteredEthnicGroups = useMemo(() => {
    let filtered = allEthnicGroups;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(group =>
        group.name.toLowerCase().includes(query) ||
        group.languageFamily?.toLowerCase().includes(query) ||
        group.regions?.some(region => region.toLowerCase().includes(query))
      );
    }

    // Filter by language family
    if (selectedLanguageFamily !== "all") {
      filtered = filtered.filter(group =>
        group.languageFamily?.toLowerCase().includes(selectedLanguageFamily.toLowerCase())
      );
    }

    return filtered;
  }, [searchQuery, selectedLanguageFamily, allEthnicGroups]);

  // Language family filter options
  const languageFamilyOptions = [
    { value: "all", label: "Tất cả ngữ hệ", count: allEthnicGroups.length },
    { value: "việt", label: "Việt - Mường", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Việt - Mường")).length },
    { value: "môn", label: "Môn - Khơ Me", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Môn - Khơ Me")).length },
    { value: "tày", label: "Tày - Thái", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Tày - Thái")).length },
    { value: "malayô", label: "Malayô - Pôlynêxia", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Malayô")).length },
    { value: "mông", label: "Mông - Dao", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Mông - Dao")).length },
    { value: "hán", label: "Hán - Tạng", count: allEthnicGroups.filter(g => g.languageFamily?.includes("Hán")).length },
  ];

  const EthnicCard = ({ group }) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -8, scale: 1.02 }}
      onClick={() => setSelectedEthnicGroup(group)}
      className="group cursor-pointer bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden hover:border-vietnam-yellow/50 transition-all duration-300 shadow-xl hover:shadow-2xl"
    >
      {/* Image Placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {/* TODO: Add actual ethnic group images */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl">{group.icon || "🏛️"}</div>
        </div>

        {/* Population Badge */}
        <div className="absolute top-3 right-3 px-3 py-1 bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-lg">
          <div className="flex items-center gap-1 text-xs text-white">
            <Users className="w-3 h-3" />
            <span className="font-bold">{(group.population / 1000).toFixed(0)}K</span>
          </div>
        </div>

        {/* Rank Badge for Top 10 */}
        {allEthnicGroups.indexOf(group) < 10 && (
          <div className="absolute top-3 left-3 w-8 h-8 bg-vietnam-yellow rounded-full flex items-center justify-center">
            <span className="text-slate-900 font-black text-sm">{allEthnicGroups.indexOf(group) + 1}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="text-xl font-black text-white mb-2 group-hover:text-vietnam-yellow transition-colors">
          {group.name}
        </h3>

        {/* Language Family */}
        <div className="flex items-center gap-2 mb-3">
          <Globe className="w-4 h-4 text-ethnic-blue" />
          <span className="text-xs text-slate-400">{group.languageFamily}</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="p-2 bg-slate-800/50 rounded-lg">
            <div className="text-xs text-slate-400">Dân số</div>
            <div className="text-sm font-bold text-white">{group.percent}%</div>
          </div>
          <div className="p-2 bg-slate-800/50 rounded-lg">
            <div className="text-xs text-slate-400">Vùng</div>
            <div className="text-sm font-bold text-white">{group.regions?.length || 0}</div>
          </div>
        </div>

        {/* View Details */}
        <div className="flex items-center justify-between text-xs text-vietnam-yellow opacity-0 group-hover:opacity-100 transition-opacity">
          <span>Xem chi tiết</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );

  const EthnicDetailModal = ({ group }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedEthnicGroup(null)}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700 p-6 flex items-start justify-between z-10">
          <div>
            <div className="text-5xl mb-3">{group.icon || "🏛️"}</div>
            <h2 className="text-3xl font-black text-white mb-2">{group.name}</h2>
            <p className="text-slate-400">{group.languageFamily}</p>
          </div>
          <button
            onClick={() => setSelectedEthnicGroup(null)}
            className="p-2 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <Users className="w-6 h-6 text-ethnic-blue mb-2" />
              <div className="text-2xl font-black text-white">{(group.population / 1000000).toFixed(2)}M</div>
              <div className="text-xs text-slate-400">Dân số</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <Globe className="w-6 h-6 text-ethnic-purple mb-2" />
              <div className="text-2xl font-black text-white">{group.percent}%</div>
              <div className="text-xs text-slate-400">Tỷ lệ</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <MapPin className="w-6 h-6 text-ethnic-green mb-2" />
              <div className="text-2xl font-black text-white">{group.regions?.length || 0}</div>
              <div className="text-xs text-slate-400">Tỉnh thành</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded-xl">
              <Building2 className="w-6 h-6 text-vietnam-yellow mb-2" />
              <div className="text-2xl font-black text-white">#{allEthnicGroups.indexOf(group) + 1}</div>
              <div className="text-xs text-slate-400">Xếp hạng</div>
            </div>
          </div>

          {/* Description */}
          {group.description && (
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
              <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Ngôn ngữ
              </h3>
              <p className="text-sm text-slate-300">{group.description}</p>
            </div>
          )}

          {/* Regions */}
          {group.regions && group.regions.length > 0 && (
            <div>
              <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-ethnic-green" />
                Phân bố địa lý
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.regions.map((region, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-ethnic-blue/20 border border-ethnic-blue/30 rounded-lg text-ethnic-blue text-sm"
                  >
                    {region}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Culture Info */}
          {group.culture && (
            <div className="grid md:grid-cols-2 gap-4">
              {group.culture && (
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                  <Music className="w-5 h-5 text-ethnic-purple mb-2" />
                  <div className="text-xs text-slate-400 mb-1">Văn hóa</div>
                  <div className="text-sm text-white">{group.culture}</div>
                </div>
              )}
              {group.festival && (
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                  <Calendar className="w-5 h-5 text-ethnic-pink mb-2" />
                  <div className="text-xs text-slate-400 mb-1">Lễ hội</div>
                  <div className="text-sm text-white">{group.festival}</div>
                </div>
              )}
              {group.costume && (
                <div className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700/50">
                  <Shirt className="w-5 h-5 text-vietnam-yellow mb-2" />
                  <div className="text-xs text-slate-400 mb-1">Trang phục</div>
                  <div className="text-sm text-white">{group.costume}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

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
      <div className="relative">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-vietnam rounded-full mb-4">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
              Bảo tàng{" "}
              <span className="text-transparent bg-clip-text bg-gradient-vietnam">
                54 Dân tộc Việt Nam
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-6">
              Khám phá văn hóa đa dạng và phong phú của cộng đồng các dân tộc Việt Nam
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
              <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl">
                <div className="text-3xl font-black text-white">54</div>
                <div className="text-xs text-slate-400">Dân tộc</div>
              </div>
              <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl">
                <div className="text-3xl font-black text-white">94.6M</div>
                <div className="text-xs text-slate-400">Dân số</div>
              </div>
              <div className="p-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl">
                <div className="text-3xl font-black text-white">5</div>
                <div className="text-xs text-slate-400">Ngữ hệ</div>
              </div>
            </div>

            {/* Search & Filters */}
            <div className="max-w-4xl mx-auto space-y-4">
              {/* Search Box */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dân tộc, ngữ hệ, vùng miền..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-4 bg-slate-800/50 backdrop-blur-xl border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-vietnam-yellow/50 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              {/* Language Family Filter */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                <Filter className="w-4 h-4 text-slate-400" />
                {languageFamilyOptions.map(option => (
                  <button
                    key={option.value}
                    onClick={() => setSelectedLanguageFamily(option.value)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedLanguageFamily === option.value
                        ? "bg-vietnam-yellow text-slate-900"
                        : "bg-slate-800/50 text-slate-400 hover:bg-slate-800"
                    }`}
                  >
                    {option.label} ({option.count})
                  </button>
                ))}
              </div>

              {/* Results count */}
              <div className="text-sm text-slate-400">
                Hiển thị <span className="text-vietnam-yellow font-bold">{filteredEthnicGroups.length}</span> dân tộc
              </div>
            </div>
          </motion.div>

          {/* Ethnic Groups Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredEthnicGroups.map(group => (
                <EthnicCard key={group.id} group={group} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* No Results */}
          {filteredEthnicGroups.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">Không tìm thấy kết quả</h3>
              <p className="text-slate-400">Thử thay đổi từ khóa tìm kiếm hoặc bộ lọc</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedEthnicGroup && <EthnicDetailModal group={selectedEthnicGroup} />}
      </AnimatePresence>
    </div>
  );
};

export default Museum;
