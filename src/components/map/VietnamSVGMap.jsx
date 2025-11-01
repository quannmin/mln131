import { motion } from "framer-motion";
import { useState } from "react";

// Simplified Vietnam Map SVG with provinces
// Using viewBox coordinates for easier mapping
const VietnamSVGMap = ({
  mode = "ethnic",
  onProvinceClick,
  selectedProvince,
  provinces
}) => {
  const [hoveredProvince, setHoveredProvince] = useState(null);

  // Get color based on mode and province data
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
      // Color by ethnic minority percentage
      const percent = province.ethnicMinorityPercent;
      if (percent >= 80) return "#A855F7"; // Purple
      if (percent >= 50) return "#3B82F6"; // Blue
      if (percent >= 30) return "#10B981"; // Green
      if (percent >= 10) return "#F97316"; // Orange
      return "#6B7280"; // Gray
    } else {
      // Color by investment (mock calculation)
      const investment = (province.population / 100000) * province.ethnicMinorityPercent;
      if (investment >= 1000) return "#DC2626"; // Red
      if (investment >= 500) return "#F97316"; // Orange
      if (investment >= 200) return "#F59E0B"; // Amber
      if (investment >= 100) return "#10B981"; // Green
      return "#6B7280"; // Gray
    }
  };

  // Major regions/provinces with approximate SVG paths
  // This is a simplified version - real production would use actual GeoJSON coordinates
  const vietnamRegions = [
    // Northern Mountains (Đông Bắc + Tây Bắc)
    {
      id: "ha-giang",
      name: "Hà Giang",
      d: "M 250,20 L 280,15 L 295,25 L 300,40 L 285,50 L 270,45 L 255,35 Z",
    },
    {
      id: "cao-bang",
      name: "Cao Bằng",
      d: "M 300,40 L 320,35 L 335,45 L 330,60 L 315,65 L 300,55 Z",
    },
    {
      id: "lang-son",
      name: "Lạng Sơn",
      d: "M 330,60 L 345,55 L 360,65 L 355,80 L 340,85 L 325,75 Z",
    },
    {
      id: "son-la",
      name: "Sơn La",
      d: "M 200,60 L 230,55 L 250,70 L 245,90 L 220,95 L 195,85 Z",
    },
    {
      id: "dien-bien",
      name: "Điện Biên",
      d: "M 170,50 L 195,45 L 210,60 L 200,75 L 175,70 L 165,60 Z",
    },

    // Red River Delta
    {
      id: "ha-noi",
      name: "Hà Nội",
      d: "M 280,100 L 305,95 L 320,105 L 315,120 L 295,125 L 275,115 Z",
    },
    {
      id: "hai-phong",
      name: "Hải Phòng",
      d: "M 340,110 L 360,105 L 375,115 L 370,130 L 350,135 L 335,125 Z",
    },
    {
      id: "quang-ninh",
      name: "Quảng Ninh",
      d: "M 360,85 L 380,80 L 395,95 L 390,110 L 370,115 L 355,105 Z",
    },

    // Central Coast
    {
      id: "thanh-hoa",
      name: "Thanh Hóa",
      d: "M 260,140 L 285,135 L 300,150 L 295,170 L 270,175 L 255,160 Z",
    },
    {
      id: "nghe-an",
      name: "Nghệ An",
      d: "M 245,180 L 270,175 L 285,190 L 280,210 L 255,215 L 240,200 Z",
    },
    {
      id: "ha-tinh",
      name: "Hà Tĩnh",
      d: "M 265,220 L 285,215 L 300,230 L 295,245 L 275,250 L 260,235 Z",
    },
    {
      id: "quang-binh",
      name: "Quảng Bình",
      d: "M 275,255 L 295,250 L 310,265 L 305,280 L 285,285 L 270,270 Z",
    },
    {
      id: "quang-tri",
      name: "Quảng Trị",
      d: "M 280,290 L 300,285 L 315,300 L 310,315 L 290,320 L 275,305 Z",
    },
    {
      id: "thua-thien-hue",
      name: "Thừa Thiên Huế",
      d: "M 285,325 L 305,320 L 320,335 L 315,350 L 295,355 L 280,340 Z",
    },
    {
      id: "da-nang",
      name: "Đà Nẵng",
      d: "M 310,355 L 325,350 L 335,360 L 330,370 L 315,375 L 305,365 Z",
    },
    {
      id: "quang-nam",
      name: "Quảng Nam",
      d: "M 290,365 L 315,360 L 330,380 L 320,400 L 295,405 L 280,385 Z",
    },
    {
      id: "quang-ngai",
      name: "Quảng Ngãi",
      d: "M 285,410 L 310,405 L 325,425 L 315,445 L 290,450 L 275,430 Z",
    },
    {
      id: "binh-dinh",
      name: "Bình Định",
      d: "M 280,455 L 305,450 L 320,470 L 310,490 L 285,495 L 270,475 Z",
    },
    {
      id: "phu-yen",
      name: "Phú Yên",
      d: "M 280,500 L 300,495 L 315,510 L 305,525 L 285,530 L 270,515 Z",
    },
    {
      id: "khanh-hoa",
      name: "Khánh Hòa",
      d: "M 275,535 L 295,530 L 310,545 L 300,565 L 280,570 L 265,555 Z",
    },

    // Central Highlands
    {
      id: "kon-tum",
      name: "Kon Tum",
      d: "M 230,380 L 255,375 L 270,395 L 260,415 L 235,420 L 220,400 Z",
    },
    {
      id: "gia-lai",
      name: "Gia Lai",
      d: "M 220,425 L 245,420 L 260,440 L 250,465 L 225,470 L 210,450 Z",
    },
    {
      id: "dak-lak",
      name: "Đắk Lắk",
      d: "M 210,475 L 235,470 L 250,490 L 240,515 L 215,520 L 200,500 Z",
    },
    {
      id: "dak-nong",
      name: "Đắk Nông",
      d: "M 200,525 L 220,520 L 235,535 L 225,550 L 205,555 L 190,540 Z",
    },
    {
      id: "lam-dong",
      name: "Lâm Đồng",
      d: "M 220,555 L 245,550 L 260,570 L 250,590 L 225,595 L 210,575 Z",
    },

    // South
    {
      id: "tp-hcm",
      name: "TP.HCM",
      d: "M 260,610 L 280,605 L 295,620 L 285,635 L 265,640 L 250,625 Z",
    },
    {
      id: "binh-duong",
      name: "Bình Dương",
      d: "M 245,595 L 265,590 L 280,605 L 270,620 L 250,625 L 235,610 Z",
    },
    {
      id: "dong-nai",
      name: "Đồng Nai",
      d: "M 275,625 L 295,620 L 310,635 L 300,655 L 280,660 L 265,645 Z",
    },
    {
      id: "ba-ria-vung-tau",
      name: "Bà Rịa - VT",
      d: "M 285,665 L 305,660 L 320,675 L 310,690 L 290,695 L 275,680 Z",
    },

    // Mekong Delta
    {
      id: "long-an",
      name: "Long An",
      d: "M 220,630 L 240,625 L 255,640 L 245,655 L 225,660 L 210,645 Z",
    },
    {
      id: "tien-giang",
      name: "Tiền Giang",
      d: "M 210,665 L 230,660 L 245,675 L 235,690 L 215,695 L 200,680 Z",
    },
    {
      id: "ben-tre",
      name: "Bến Tre",
      d: "M 225,695 L 245,690 L 260,705 L 250,720 L 230,725 L 215,710 Z",
    },
    {
      id: "tra-vinh",
      name: "Trà Vinh",
      d: "M 240,725 L 260,720 L 275,735 L 265,750 L 245,755 L 230,740 Z",
    },
    {
      id: "vinh-long",
      name: "Vĩnh Long",
      d: "M 200,710 L 220,705 L 235,720 L 225,735 L 205,740 L 190,725 Z",
    },
    {
      id: "can-tho",
      name: "Cần Thơ",
      d: "M 190,745 L 210,740 L 225,755 L 215,770 L 195,775 L 180,760 Z",
    },
    {
      id: "soc-trang",
      name: "Sóc Trăng",
      d: "M 215,775 L 235,770 L 250,785 L 240,800 L 220,805 L 205,790 Z",
    },
    {
      id: "an-giang",
      name: "An Giang",
      d: "M 170,700 L 190,695 L 205,710 L 195,730 L 175,735 L 160,720 Z",
    },
    {
      id: "kien-giang",
      name: "Kiên Giang",
      d: "M 160,740 L 180,735 L 195,755 L 185,780 L 165,785 L 150,765 Z",
    },
    {
      id: "bac-lieu",
      name: "Bạc Liêu",
      d: "M 185,790 L 205,785 L 220,805 L 210,825 L 190,830 L 175,810 Z",
    },
    {
      id: "ca-mau",
      name: "Cà Mau",
      d: "M 175,835 L 195,830 L 210,850 L 200,875 L 180,880 L 165,860 Z",
    },
  ];

  return (
    <div className="relative w-full" style={{ paddingBottom: "140%" }}>
      <svg
        viewBox="0 0 450 900"
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="450" height="900" fill="#0F172A" />

        {/* Sea/Ocean */}
        <circle cx="400" cy="400" r="300" fill="#1E293B" opacity="0.3" />
        <circle cx="100" cy="700" r="200" fill="#1E293B" opacity="0.3" />

        {/* Provinces */}
        {vietnamRegions.map((region) => {
          const province = provinces[region.id];

          return (
            <motion.g
              key={region.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: Math.random() * 0.5 }}
            >
              <motion.path
                d={region.d}
                fill={getProvinceColor(region.id)}
                stroke="#1E293B"
                strokeWidth="2"
                className="cursor-pointer transition-all duration-200"
                whileHover={{
                  scale: 1.02,
                  filter: "brightness(1.2)",
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredProvince(region.id)}
                onMouseLeave={() => setHoveredProvince(null)}
                onClick={() => onProvinceClick && province && onProvinceClick(province)}
              />

              {/* Province Label (on hover or selected) */}
              {(hoveredProvince === region.id || selectedProvince?.id === region.id) && (
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  x={region.d.match(/M (\d+)/)?.[1] || 0}
                  y={region.d.match(/M \d+,(\d+)/)?.[1] || 0}
                  fill="white"
                  fontSize="10"
                  fontWeight="bold"
                  textAnchor="middle"
                  className="pointer-events-none"
                  style={{ textShadow: "0 0 4px rgba(0,0,0,0.8)" }}
                >
                  {region.name}
                </motion.text>
              )}
            </motion.g>
          );
        })}

        {/* Legend for regions */}
        <text x="20" y="30" fill="white" fontSize="16" fontWeight="bold">
          Việt Nam
        </text>
        <text x="20" y="50" fill="#94A3B8" fontSize="10">
          {mode === "ethnic" ? "Phân bố dân tộc" : "Mức đầu tư"}
        </text>
      </svg>

      {/* Tooltip */}
      {hoveredProvince && provinces[hoveredProvince] && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-slate-900/95 backdrop-blur-md border border-slate-700 rounded-lg p-3 pointer-events-none z-10"
        >
          <div className="text-white font-bold text-sm">
            {provinces[hoveredProvince].name}
          </div>
          <div className="text-slate-400 text-xs">
            {mode === "ethnic"
              ? `DTTS: ${provinces[hoveredProvince].ethnicMinorityPercent}%`
              : `Dân số: ${(provinces[hoveredProvince].population / 1000000).toFixed(1)}M`
            }
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VietnamSVGMap;
