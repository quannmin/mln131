// Simplified Vietnam provinces data
// Grouped by regions for better organization

export const regions = {
  "dong-bac": {
    name: "Đông Bắc Bộ",
    color: "#3B82F6",
    provinces: ["ha-giang", "cao-bang", "bac-kan", "lang-son", "tuyen-quang", "thai-nguyen", "bac-giang", "quang-ninh"]
  },
  "tay-bac": {
    name: "Tây Bắc Bộ",
    color: "#8B5CF6",
    provinces: ["lai-chau", "son-la", "dien-bien", "hoa-binh"]
  },
  "dong-bang-song-hong": {
    name: "Đồng bằng sông Hồng",
    color: "#10B981",
    provinces: ["ha-noi", "hai-phong", "vinh-phuc", "bac-ninh", "hai-duong", "hung-yen", "ha-nam", "nam-dinh", "thai-binh", "ninh-binh"]
  },
  "bac-trung-bo": {
    name: "Bắc Trung Bộ",
    color: "#F59E0B",
    provinces: ["thanh-hoa", "nghe-an", "ha-tinh", "quang-binh", "quang-tri", "thua-thien-hue"]
  },
  "nam-trung-bo": {
    name: "Nam Trung Bộ",
    color: "#EC4899",
    provinces: ["da-nang", "quang-nam", "quang-ngai", "binh-dinh", "phu-yen", "khanh-hoa", "ninh-thuan", "binh-thuan"]
  },
  "tay-nguyen": {
    name: "Tây Nguyên",
    color: "#EF4444",
    provinces: ["kon-tum", "gia-lai", "dak-lak", "dak-nong", "lam-dong"]
  },
  "dong-nam-bo": {
    name: "Đông Nam Bộ",
    color: "#06B6D4",
    provinces: ["binh-phuoc", "tay-ninh", "binh-duong", "dong-nai", "ba-ria-vung-tau", "tp-hcm"]
  },
  "dong-bang-song-cuu-long": {
    name: "Đồng bằng sông Cửu Long",
    color: "#14B8A6",
    provinces: ["long-an", "tien-giang", "ben-tre", "tra-vinh", "vinh-long", "dong-thap", "an-giang", "kien-giang", "can-tho", "hau-giang", "soc-trang", "bac-lieu", "ca-mau"]
  }
};

export const provinces = {
  // Đông Bắc Bộ
  "ha-giang": {
    id: "ha-giang",
    name: "Hà Giang",
    region: "dong-bac",
    population: 850000,
    ethnicMinorityPercent: 87,
    dominantEthnic: ["H'Mông", "Dao", "Tày"]
  },
  "cao-bang": {
    id: "cao-bang",
    name: "Cao Bằng",
    region: "dong-bac",
    population: 530000,
    ethnicMinorityPercent: 93,
    dominantEthnic: ["Tày", "Nùng", "H'Mông"]
  },
  "bac-kan": {
    id: "bac-kan",
    name: "Bắc Kạn",
    region: "dong-bac",
    population: 310000,
    ethnicMinorityPercent: 86,
    dominantEthnic: ["Tày", "Dao", "Nùng"]
  },
  "lang-son": {
    id: "lang-son",
    name: "Lạng Sơn",
    region: "dong-bac",
    population: 780000,
    ethnicMinorityPercent: 68,
    dominantEthnic: ["Tày", "Nùng", "Dao"]
  },
  "tuyen-quang": {
    id: "tuyen-quang",
    name: "Tuyên Quang",
    region: "dong-bac",
    population: 770000,
    ethnicMinorityPercent: 58,
    dominantEthnic: ["Tày", "Dao", "H'Mông"]
  },
  "thai-nguyen": {
    id: "thai-nguyen",
    name: "Thái Nguyên",
    region: "dong-bac",
    population: 1270000,
    ethnicMinorityPercent: 38,
    dominantEthnic: ["Tày", "Nùng", "Dao"]
  },
  "bac-giang": {
    id: "bac-giang",
    name: "Bắc Giang",
    region: "dong-bac",
    population: 1830000,
    ethnicMinorityPercent: 15,
    dominantEthnic: ["Tày", "Dao"]
  },
  "quang-ninh": {
    id: "quang-ninh",
    name: "Quảng Ninh",
    region: "dong-bac",
    population: 1330000,
    ethnicMinorityPercent: 12,
    dominantEthnic: ["Tày", "Dao", "San Dìu"]
  },

  // Tây Bắc Bộ
  "lai-chau": {
    id: "lai-chau",
    name: "Lai Châu",
    region: "tay-bac",
    population: 460000,
    ethnicMinorityPercent: 90,
    dominantEthnic: ["Thái", "H'Mông", "Dao"]
  },
  "son-la": {
    id: "son-la",
    name: "Sơn La",
    region: "tay-bac",
    population: 1260000,
    ethnicMinorityPercent: 86,
    dominantEthnic: ["Thái", "H'Mông", "Mường"]
  },
  "dien-bien": {
    id: "dien-bien",
    name: "Điện Biên",
    region: "tay-bac",
    population: 590000,
    ethnicMinorityPercent: 85,
    dominantEthnic: ["Thái", "H'Mông", "Khơ Mú"]
  },
  "hoa-binh": {
    id: "hoa-binh",
    name: "Hòa Bình",
    region: "tay-bac",
    population: 860000,
    ethnicMinorityPercent: 65,
    dominantEthnic: ["Mường", "Thái", "Dao"]
  },

  // Tây Nguyên
  "kon-tum": {
    id: "kon-tum",
    name: "Kon Tum",
    region: "tay-nguyen",
    population: 530000,
    ethnicMinorityPercent: 54,
    dominantEthnic: ["Ba Na", "Xơ Đăng", "Gia Rai"]
  },
  "gia-lai": {
    id: "gia-lai",
    name: "Gia Lai",
    region: "tay-nguyen",
    population: 1520000,
    ethnicMinorityPercent: 39,
    dominantEthnic: ["Gia Rai", "Ba Na", "Ê Đê"]
  },
  "dak-lak": {
    id: "dak-lak",
    name: "Đắk Lắk",
    region: "tay-nguyen",
    population: 1910000,
    ethnicMinorityPercent: 34,
    dominantEthnic: ["Ê Đê", "M'Nông", "Tày"]
  },
  "dak-nong": {
    id: "dak-nong",
    name: "Đắk Nông",
    region: "tay-nguyen",
    population: 630000,
    ethnicMinorityPercent: 41,
    dominantEthnic: ["Ê Đê", "M'Nông", "Tày"]
  },
  "lam-dong": {
    id: "lam-dong",
    name: "Lâm Đồng",
    region: "tay-nguyen",
    population: 1310000,
    ethnicMinorityPercent: 25,
    dominantEthnic: ["K'Ho", "Chơ Ro", "M'Nông"]
  },

  // Đồng bằng sông Cửu Long
  "an-giang": {
    id: "an-giang",
    name: "An Giang",
    region: "dong-bang-song-cuu-long",
    population: 2160000,
    ethnicMinorityPercent: 8,
    dominantEthnic: ["Khmer", "Hoa", "Chăm"]
  },
  "kien-giang": {
    id: "kien-giang",
    name: "Kiên Giang",
    region: "dong-bang-song-cuu-long",
    population: 1810000,
    ethnicMinorityPercent: 11,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "soc-trang": {
    id: "soc-trang",
    name: "Sóc Trăng",
    region: "dong-bang-song-cuu-long",
    population: 1310000,
    ethnicMinorityPercent: 30,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "tra-vinh": {
    id: "tra-vinh",
    name: "Trà Vinh",
    region: "dong-bang-song-cuu-long",
    population: 1030000,
    ethnicMinorityPercent: 31,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "can-tho": {
    id: "can-tho",
    name: "Cần Thơ",
    region: "dong-bang-song-cuu-long",
    population: 1280000,
    ethnicMinorityPercent: 5,
    dominantEthnic: ["Hoa", "Khmer"]
  },

  // Sample for other provinces (simplified)
  "ha-noi": {
    id: "ha-noi",
    name: "Hà Nội",
    region: "dong-bang-song-hong",
    population: 8300000,
    ethnicMinorityPercent: 2,
    dominantEthnic: ["Kinh"]
  },
  "tp-hcm": {
    id: "tp-hcm",
    name: "TP. Hồ Chí Minh",
    region: "dong-nam-bo",
    population: 9100000,
    ethnicMinorityPercent: 1,
    dominantEthnic: ["Kinh"]
  },
  "da-nang": {
    id: "da-nang",
    name: "Đà Nẵng",
    region: "nam-trung-bo",
    population: 1200000,
    ethnicMinorityPercent: 1,
    dominantEthnic: ["Kinh"]
  }
};

// Get province by ID
export const getProvince = (id) => provinces[id];

// Get all provinces in a region
export const getProvincesByRegion = (regionId) => {
  return Object.values(provinces).filter(p => p.region === regionId);
};

// Get region info
export const getRegion = (id) => regions[id];
