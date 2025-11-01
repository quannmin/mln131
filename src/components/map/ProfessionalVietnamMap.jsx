import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import { vietnamGeoJSON, vietnamBounds } from "../../data/vietnamGeoJSON";

const ProfessionalVietnamMap = ({
  mode = "ethnic",
  onProvinceClick,
  selectedProvince,
  provinces
}) => {
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [scale, setScale] = useState(1);

  // Convert lat/lng to SVG coordinates (Mercator-like projection)
  const project = (lng, lat) => {
    const width = 800;
    const height = 1200;

    // Map bounds
    const { minLat, maxLat, minLng, maxLng } = vietnamBounds;

    // Project to SVG space with padding
    const padding = 40;
    const x = ((lng - minLng) / (maxLng - minLng)) * (width - padding * 2) + padding;
    const y = ((maxLat - lat) / (maxLat - minLat)) * (height - padding * 2) + padding;

    return [x, y];
  };

  // Convert GeoJSON coordinates to SVG path
  const geoToPath = (coordinates) => {
    return coordinates.map((ring) => {
      const points = ring.map(([lng, lat]) => project(lng, lat));
      return `M ${points.map(p => p.join(',')).join(' L ')} Z`;
    }).join(' ');
  };

  // Get color for province based on mode
  const getProvinceColor = (provinceId) => {
    const province = provinces[provinceId];
    if (!province) return "#374151";

    if (selectedProvince?.id === provinceId) {
      return "#FFCD00"; // Vietnam yellow when selected
    }

    if (hoveredProvince === provinceId) {
      return "#F59E0B"; // Amber on hover
    }

    if (mode === "ethnic") {
      const percent = province.ethnicMinorityPercent;
      if (percent >= 80) return "#A855F7"; // Purple - Very high
      if (percent >= 50) return "#3B82F6"; // Blue - High
      if (percent >= 30) return "#10B981"; // Green - Medium
      if (percent >= 10) return "#F97316"; // Orange - Low
      return "#6B7280"; // Gray - Very low/Kinh majority
    } else {
      const investment = (province.population / 100000) * province.ethnicMinorityPercent;
      if (investment >= 1000) return "#DC2626"; // Red - Highest
      if (investment >= 500) return "#F97316"; // Orange
      if (investment >= 200) return "#F59E0B"; // Amber
      if (investment >= 100) return "#10B981"; // Green
      return "#6B7280"; // Gray - Low/No data
    }
  };

  // Get stroke width based on state
  const getStrokeWidth = (provinceId) => {
    if (selectedProvince?.id === provinceId) return 3;
    if (hoveredProvince === provinceId) return 2.5;
    return 1;
  };

  // Render features
  const features = useMemo(() => {
    return vietnamGeoJSON.features.map((feature) => {
      const province = provinces[feature.id];
      const path = geoToPath(feature.geometry.coordinates);

      return {
        id: feature.id,
        name: feature.properties.name,
        path,
        province
      };
    });
  }, [provinces]);

  // Get centroid for label placement (simplified)
  const getCentroid = (path) => {
    const matches = path.match(/M ([\d.]+),([\d.]+)/);
    if (matches) {
      return {
        x: parseFloat(matches[1]) + 15,
        y: parseFloat(matches[2]) + 15
      };
    }
    return { x: 0, y: 0 };
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-2xl overflow-hidden">
      {/* SVG Container */}
      <svg
        viewBox="0 0 800 1200"
        className="w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        style={{ maxHeight: '800px' }}
      >
        {/* Background gradient */}
        <defs>
          <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0F172A" stopOpacity="1" />
            <stop offset="50%" stopColor="#1E293B" stopOpacity="1" />
            <stop offset="100%" stopColor="#0F172A" stopOpacity="1" />
          </linearGradient>

          {/* Glow effect for selected province */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Drop shadow for provinces */}
          <filter id="shadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        <rect width="800" height="1200" fill="url(#bgGradient)" />

        {/* Subtle grid pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1E293B" strokeWidth="0.5" opacity="0.3"/>
        </pattern>
        <rect width="800" height="1200" fill="url(#grid)" />

        {/* Ocean/Sea circles */}
        <circle cx="700" cy="600" r="200" fill="#1E293B" opacity="0.2" />
        <circle cx="200" cy="1000" r="150" fill="#1E293B" opacity="0.2" />

        {/* Province paths */}
        <g>
          {features.map((feature) => {
            const isSelected = selectedProvince?.id === feature.id;
            const isHovered = hoveredProvince === feature.id;

            return (
              <motion.g
                key={feature.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: Math.random() * 0.3 }}
              >
                <motion.path
                  d={feature.path}
                  fill={getProvinceColor(feature.id)}
                  stroke={isSelected ? "#FFCD00" : isHovered ? "#F59E0B" : "#1E293B"}
                  strokeWidth={getStrokeWidth(feature.id)}
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isSelected ? "url(#glow)" : isHovered ? "url(#shadow)" : "none"
                  }}
                  initial={false}
                  animate={{
                    fill: getProvinceColor(feature.id),
                    scale: isHovered ? 1.01 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setHoveredProvince(feature.id)}
                  onMouseLeave={() => setHoveredProvince(null)}
                  onClick={() => feature.province && onProvinceClick && onProvinceClick(feature.province)}
                />

                {/* Province label (always show for major provinces or on hover/select) */}
                {(isSelected || isHovered || ['ha-noi', 'tp-hcm', 'da-nang', 'can-tho'].includes(feature.id)) && (
                  <motion.text
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    x={getCentroid(feature.path).x}
                    y={getCentroid(feature.path).y}
                    fill="white"
                    fontSize={isSelected ? "14" : isHovered ? "12" : "10"}
                    fontWeight={isSelected || isHovered ? "bold" : "600"}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    style={{
                      textShadow: "0 0 8px rgba(0,0,0,0.9), 0 0 3px rgba(0,0,0,0.9)",
                      filter: "drop-shadow(0 0 2px rgba(0,0,0,0.9))"
                    }}
                  >
                    {feature.name}
                  </motion.text>
                )}
              </motion.g>
            );
          })}
        </g>

        {/* Title */}
        <text x="400" y="40" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle">
          VIỆT NAM
        </text>
        <text x="400" y="65" fill="#94A3B8" fontSize="12" textAnchor="middle">
          {mode === "ethnic" ? "Phân bố 54 Dân tộc" : "Đầu tư Vùng DTTS"}
        </text>
      </svg>

      {/* Modern Glassmorphic Tooltip */}
      <AnimatePresence>
        {hoveredProvince && provinces[hoveredProvince] && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <div className="bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

                <div className="relative space-y-2">
                  <div className="text-white font-bold text-lg">
                    {provinces[hoveredProvince].name}
                  </div>

                  <div className="flex items-center gap-4 text-sm">
                    <div>
                      <div className="text-slate-400 text-xs">Dân số</div>
                      <div className="text-white font-semibold">
                        {(provinces[hoveredProvince].population / 1000000).toFixed(1)}M
                      </div>
                    </div>

                    <div className="w-px h-8 bg-white/10" />

                    <div>
                      <div className="text-slate-400 text-xs">DTTS</div>
                      <div className="text-ethnic-purple font-semibold">
                        {provinces[hoveredProvince].ethnicMinorityPercent}%
                      </div>
                    </div>
                  </div>

                  {provinces[hoveredProvince].dominantEthnic && (
                    <div className="pt-2 border-t border-white/10">
                      <div className="text-slate-400 text-xs mb-1">Dân tộc chủ yếu</div>
                      <div className="flex flex-wrap gap-1">
                        {provinces[hoveredProvince].dominantEthnic.slice(0, 3).map((ethnic, i) => (
                          <span key={i} className="text-xs bg-white/10 px-2 py-0.5 rounded text-white">
                            {ethnic}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Pointer arrow */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-slate-900/90 border-r border-b border-white/10 rotate-45" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click instruction */}
      {!selectedProvince && !hoveredProvince && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-slate-500 pointer-events-none"
        >
          Di chuột và click vào tỉnh để xem chi tiết
        </motion.div>
      )}
    </div>
  );
};

export default ProfessionalVietnamMap;
