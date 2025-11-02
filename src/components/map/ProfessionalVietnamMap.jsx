import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo, useRef } from "react";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import { vietnamGeoJSON, vietnamBounds } from "../../data/vietnamGeoJSON";

const ProfessionalVietnamMap = ({
  mode = "ethnic",
  onProvinceClick,
  selectedProvince,
  provinces
}) => {
  const [hoveredProvince, setHoveredProvince] = useState(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const svgRef = useRef(null);

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

  // Vibrant color palette inspired by GIS map
  const getProvinceColor = (provinceId) => {
    const province = provinces[provinceId];
    if (!province) return "#374151";

    if (selectedProvince?.id === provinceId) {
      return "#FFCD00"; // Vietnam yellow when selected
    }

    if (hoveredProvince === provinceId) {
      return "#FCD34D"; // Bright yellow on hover
    }

    if (mode === "ethnic") {
      // Vibrant GIS-inspired colors based on ethnic minority percentage
      const percent = province.ethnicMinorityPercent;
      if (percent >= 80) return "#C026D3"; // Vibrant Magenta - Very high
      if (percent >= 60) return "#8B5CF6"; // Vibrant Purple - High
      if (percent >= 40) return "#3B82F6"; // Vibrant Blue - Medium-high
      if (percent >= 20) return "#10B981"; // Vibrant Green - Medium
      if (percent >= 10) return "#F59E0B"; // Vibrant Orange - Low-medium
      if (percent >= 5) return "#F97316"; // Vibrant Coral - Low
      return "#94A3B8"; // Light Gray - Very low/Kinh majority
    } else {
      // Policy mode with investment-based colors
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

  // Zoom controls
  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.3, 3));
  };

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.3, 0.5));
  };

  const handleResetView = () => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  };

  // Pan controls
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setOffset({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-sky-950 via-blue-950 to-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-sky-800/30">
      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-30 flex flex-col gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomIn}
          className="p-3 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-slate-700/90 transition-colors shadow-lg"
          title="Phóng to"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleZoomOut}
          className="p-3 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-slate-700/90 transition-colors shadow-lg"
          title="Thu nhỏ"
        >
          <ZoomOut className="w-5 h-5 text-white" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleResetView}
          className="p-3 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl hover:bg-slate-700/90 transition-colors shadow-lg"
          title="Đặt lại"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </motion.button>
      </div>

      {/* Zoom indicator */}
      <div className="absolute top-4 left-4 z-30 px-3 py-2 bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-lg">
        <span className="text-white text-sm font-medium">{(scale * 100).toFixed(0)}%</span>
      </div>

      {/* SVG Container */}
      <div
        className={`w-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          ref={svgRef}
          viewBox="0 0 800 1200"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            maxHeight: '800px',
            transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
            transformOrigin: 'center',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
        >
        {/* Background gradient - Ocean theme */}
        <defs>
          {/* Ocean gradient - darker blue like in GIS map */}
          <linearGradient id="oceanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0C4A6E" stopOpacity="1" />
            <stop offset="50%" stopColor="#075985" stopOpacity="1" />
            <stop offset="100%" stopColor="#0369A1" stopOpacity="1" />
          </linearGradient>

          {/* Radial gradient for ocean depth effect */}
          <radialGradient id="oceanDepth">
            <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0284C7" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0C4A6E" stopOpacity="0.1" />
          </radialGradient>

          {/* Glow effect for selected province */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Drop shadow for provinces - stronger */}
          <filter id="shadow">
            <feDropShadow dx="1" dy="2" stdDeviation="4" floodOpacity="0.4"/>
          </filter>

          {/* 3D emboss effect for provinces */}
          <filter id="emboss">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur"/>
            <feSpecularLighting in="blur" surfaceScale="3" specularConstant="0.8" specularExponent="20" lighting-color="white" result="spec">
              <fePointLight x="-5000" y="-10000" z="10000"/>
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceAlpha" operator="in" result="specOut"/>
            <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
          </filter>
        </defs>

        {/* Ocean background */}
        <rect width="800" height="1200" fill="url(#oceanGradient)" />

        {/* Ocean depth effects - East Sea (Biển Đông) */}
        <ellipse cx="700" cy="400" rx="250" ry="400" fill="url(#oceanDepth)" />
        <ellipse cx="600" cy="800" rx="200" ry="300" fill="url(#oceanDepth)" />

        {/* Water texture pattern */}
        <pattern id="waterTexture" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 0 30 Q 15 25, 30 30 T 60 30" stroke="#0EA5E9" strokeWidth="0.5" fill="none" opacity="0.15"/>
          <path d="M 0 35 Q 15 30, 30 35 T 60 35" stroke="#0EA5E9" strokeWidth="0.5" fill="none" opacity="0.1"/>
        </pattern>
        <rect width="800" height="1200" fill="url(#waterTexture)" />

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
                  stroke={isSelected ? "#FFCD00" : isHovered ? "#FCD34D" : "#0C4A6E"}
                  strokeWidth={getStrokeWidth(feature.id)}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  className="cursor-pointer transition-all duration-200"
                  style={{
                    filter: isSelected
                      ? "url(#glow) drop-shadow(0 4px 8px rgba(0,0,0,0.5))"
                      : isHovered
                      ? "url(#shadow) brightness(1.1)"
                      : "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    paintOrder: "stroke fill"
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

        {/* Title with enhanced styling */}
        <g>
          {/* Title background */}
          <rect x="200" y="15" width="400" height="80" rx="12" fill="#0F172A" fillOpacity="0.8" />
          <rect x="200" y="15" width="400" height="80" rx="12" fill="none" stroke="#0EA5E9" strokeWidth="1" strokeOpacity="0.3" />

          {/* Main title */}
          <text x="400" y="45" fill="#FFCD00" fontSize="28" fontWeight="bold" textAnchor="middle"
                style={{ textShadow: "0 0 10px rgba(255,205,0,0.5)" }}>
            VIỆT NAM
          </text>

          {/* Subtitle */}
          <text x="400" y="68" fill="#E0E7FF" fontSize="13" textAnchor="middle" fontWeight="600">
            {mode === "ethnic" ? "Phân bố 54 Dân tộc" : "Đầu tư Vùng DTTS"}
          </text>

          {/* Province count */}
          <text x="400" y="86" fill="#94A3B8" fontSize="10" textAnchor="middle">
            35 tỉnh thành • Cập nhật 2025
          </text>
        </g>
      </svg>
      </div>

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
