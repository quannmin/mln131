import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { ZoomIn, ZoomOut, Maximize2, Layers } from "lucide-react";
import { provinces } from "../../data/vietnamProvinces";

const LeafletVietnamMap = ({ mode = "ethnic", onProvinceClick, selectedProvince }) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const layersRef = useRef({});
  const [baseLayer, setBaseLayer] = useState('dark'); // 'dark', 'satellite', 'street'
  const [hoveredProvince, setHoveredProvince] = useState(null);

  // Province capital coordinates (approximate)
  const provinceCoords = {
    "ha-noi": [21.0285, 105.8542],
    "tp-hcm": [10.8231, 106.6297],
    "da-nang": [16.0544, 108.2022],
    "hai-phong": [20.8449, 106.6881],
    "can-tho": [10.0452, 105.7469],
    "hue": [16.4637, 107.5909],
    "bac-ninh": [21.1861, 106.0763],
    "quang-ninh": [21.0064, 107.2925],
    "thai-nguyen": [21.5671, 105.8252],
    "tuyen-quang": [21.8231, 105.2189],
    "cao-bang": [22.6356, 106.2525],
    "lang-son": [21.8537, 106.7614],
    "dien-bien": [21.3833, 103.0167],
    "lai-chau": [22.3864, 103.4702],
    "lao-cai": [22.4806, 103.9756],
    "son-la": [21.3256, 103.9188],
    "phu-tho": [21.4209, 105.2045],
    "hung-yen": [20.6467, 106.0514],
    "ninh-binh": [20.2506, 105.9745],
    "ha-tinh": [18.3436, 105.9058],
    "nghe-an": [19.2342, 104.9200],
    "quang-tri": [16.7369, 107.1857],
    "thanh-hoa": [19.8067, 105.7851],
    "dak-lak": [12.6667, 108.0500],
    "gia-lai": [13.9833, 108.0000],
    "khanh-hoa": [12.2388, 109.1967],
    "quang-ngai": [15.1214, 108.8044],
    "lam-dong": [11.9465, 108.4419],
    "dong-nai": [10.9467, 106.8340],
    "tay-ninh": [11.3100, 106.0981],
    "an-giang": [10.5217, 105.1258],
    "ca-mau": [9.1526, 105.1960],
    "dong-thap": [10.4938, 105.6881],
    "vinh-long": [10.2397, 105.9572]
  };

  // Get color based on mode
  const getProvinceColor = (provinceId) => {
    const province = provinces[provinceId];
    if (!province) return "#94A3B8";

    if (selectedProvince?.id === provinceId) {
      return "#FFCD00";
    }

    if (mode === "ethnic") {
      const percent = province.ethnicMinorityPercent;
      if (percent >= 80) return "#C026D3";
      if (percent >= 60) return "#8B5CF6";
      if (percent >= 40) return "#3B82F6";
      if (percent >= 20) return "#10B981";
      if (percent >= 10) return "#F59E0B";
      if (percent >= 5) return "#F97316";
      return "#94A3B8";
    } else {
      const investment = (province.population / 100000) * province.ethnicMinorityPercent;
      if (investment >= 1000) return "#DC2626";
      if (investment >= 500) return "#F97316";
      if (investment >= 200) return "#F59E0B";
      if (investment >= 100) return "#10B981";
      return "#6B7280";
    }
  };

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [16.0, 106.0],
      zoom: 6,
      minZoom: 5,
      maxZoom: 10,
      zoomControl: true,
      attributionControl: false
    });

    mapInstanceRef.current = map;

    // Base layers
    const baseLayers = {
      dark: L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '',
        subdomains: 'abcd',
        maxZoom: 19
      }),
      satellite: L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '',
        maxZoom: 19
      }),
      street: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '',
        maxZoom: 19
      })
    };

    // Add default base layer
    baseLayers.dark.addTo(map);
    mapInstanceRef.current.baseLayers = baseLayers;

    // Add province markers
    Object.entries(provinceCoords).forEach(([provinceId, coords]) => {
      const province = provinces[provinceId];
      if (!province) return;

      const color = getProvinceColor(provinceId);
      const radius = Math.sqrt(province.population) / 80;

      // Create circle marker
      const circle = L.circleMarker(coords, {
        radius: radius,
        fillColor: color,
        color: '#0C4A6E',
        weight: 2,
        opacity: 1,
        fillOpacity: 0.8
      });

      // Add tooltip
      circle.bindTooltip(
        `<div class="font-bold">${province.name}</div>
         <div class="text-xs">Dân số: ${(province.population / 1000000).toFixed(1)}M</div>
         <div class="text-xs">DTTS: ${province.ethnicMinorityPercent}%</div>`,
        { direction: 'top', offset: [0, -10] }
      );

      // Add hover events
      circle.on('mouseover', () => {
        setHoveredProvince(provinceId);
        circle.setStyle({
          fillOpacity: 1,
          weight: 3
        });
      });

      circle.on('mouseout', () => {
        setHoveredProvince(null);
        circle.setStyle({
          fillOpacity: selectedProvince?.id === provinceId ? 1 : 0.8,
          weight: selectedProvince?.id === provinceId ? 3 : 2
        });
      });

      // Add click event
      circle.on('click', () => {
        if (onProvinceClick) {
          onProvinceClick(province);
        }
      });

      circle.addTo(map);
      layersRef.current[provinceId] = circle;
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update colors when mode changes
  useEffect(() => {
    if (!mapInstanceRef.current) return;

    Object.entries(layersRef.current).forEach(([provinceId, layer]) => {
      const color = getProvinceColor(provinceId);
      layer.setStyle({
        fillColor: color,
        fillOpacity: selectedProvince?.id === provinceId ? 1 : 0.8,
        weight: selectedProvince?.id === provinceId ? 3 : 2
      });
    });
  }, [mode, selectedProvince]);

  // Handle base layer change
  const handleBaseLayerChange = (layer) => {
    if (!mapInstanceRef.current?.baseLayers) return;

    // Remove all base layers
    Object.values(mapInstanceRef.current.baseLayers).forEach(l => {
      mapInstanceRef.current.removeLayer(l);
    });

    // Add selected layer
    mapInstanceRef.current.baseLayers[layer].addTo(mapInstanceRef.current);
    setBaseLayer(layer);
  };

  // Handle zoom
  const handleZoomIn = () => mapInstanceRef.current?.zoomIn();
  const handleZoomOut = () => mapInstanceRef.current?.zoomOut();
  const handleResetView = () => mapInstanceRef.current?.setView([16.0, 106.0], 6);

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-sky-800/30">
      {/* Map container */}
      <div
        ref={mapRef}
        className="w-full h-full min-h-[900px]"
        style={{ background: '#0C4A6E' }}
      />

      {/* Zoom Controls */}
      <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-2">
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

      {/* Base Layer Switcher */}
      <div className="absolute top-4 left-4 z-[1000] bg-slate-800/90 backdrop-blur-xl border border-white/10 rounded-xl p-2 shadow-lg">
        <div className="flex gap-2">
          <button
            onClick={() => handleBaseLayerChange('dark')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              baseLayer === 'dark'
                ? 'bg-vietnam-yellow text-slate-900'
                : 'text-white hover:bg-slate-700'
            }`}
            title="Dark"
          >
            🌙 Dark
          </button>
          <button
            onClick={() => handleBaseLayerChange('satellite')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              baseLayer === 'satellite'
                ? 'bg-vietnam-yellow text-slate-900'
                : 'text-white hover:bg-slate-700'
            }`}
            title="Satellite"
          >
            🛰️ Vệ tinh
          </button>
          <button
            onClick={() => handleBaseLayerChange('street')}
            className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
              baseLayer === 'street'
                ? 'bg-vietnam-yellow text-slate-900'
                : 'text-white hover:bg-slate-700'
            }`}
            title="Street"
          >
            🗺️ Đường phố
          </button>
        </div>
      </div>

      {/* Info panel */}
      <div className="absolute bottom-4 left-4 z-[1000] bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-3 text-white shadow-lg">
        <div className="font-bold text-lg mb-1 text-vietnam-yellow">VIỆT NAM</div>
        <div className="text-xs text-slate-300">{Object.keys(provinces).length} tỉnh thành • Cập nhật 2025</div>
        <div className="text-[10px] text-slate-500 mt-1">
          {mode === 'ethnic' ? '🗺️ Phân bố 54 Dân tộc' : '💰 Đầu tư vùng DTTS'}
        </div>
      </div>

      {/* Hovered province info */}
      <AnimatePresence>
        {hoveredProvince && provinces[hoveredProvince] && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute bottom-4 right-4 z-[1000] bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-lg px-4 py-3 shadow-xl max-w-xs"
          >
            <div className="text-white font-bold mb-2">{provinces[hoveredProvince].name}</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>
                <div className="text-slate-400">Dân số</div>
                <div className="text-white font-semibold">
                  {(provinces[hoveredProvince].population / 1000000).toFixed(1)}M
                </div>
              </div>
              <div>
                <div className="text-slate-400">DTTS</div>
                <div className="text-ethnic-purple font-semibold">
                  {provinces[hoveredProvince].ethnicMinorityPercent}%
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LeafletVietnamMap;
