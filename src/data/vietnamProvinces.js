// Vietnam provinces data - Updated to reflect 2025 administrative mergers
// Based on gis.vn administrative data showing 35 provinces/cities

export const regions = {
  "dong-bac": {
    name: "Đông Bắc Bộ",
    color: "#3B82F6",
    provinces: ["bac-ninh", "lang-son", "quang-ninh", "thai-nguyen", "tuyen-quang"]
  },
  "tay-bac": {
    name: "Tây Bắc Bộ",
    color: "#8B5CF6",
    provinces: ["cao-bang", "dien-bien", "lai-chau", "lao-cai", "phu-tho", "son-la"]
  },
  "dong-bang-song-hong": {
    name: "Đồng bằng sông Hồng",
    color: "#10B981",
    provinces: ["ha-noi", "hai-phong", "hung-yen", "ninh-binh"]
  },
  "bac-trung-bo": {
    name: "Bắc Trung Bộ",
    color: "#F59E0B",
    provinces: ["ha-tinh", "hue", "nghe-an", "quang-tri", "thanh-hoa"]
  },
  "nam-trung-bo": {
    name: "Nam Trung Bộ",
    color: "#EC4899",
    provinces: ["da-nang", "dak-lak", "gia-lai", "khanh-hoa", "quang-ngai"]
  },
  "tay-nguyen": {
    name: "Tây Nguyên",
    color: "#EF4444",
    provinces: ["lam-dong"]
  },
  "dong-nam-bo": {
    name: "Đông Nam Bộ",
    color: "#06B6D4",
    provinces: ["dong-nai", "tay-ninh", "tp-hcm"]
  },
  "dong-bang-song-cuu-long": {
    name: "Đồng bằng sông Cửu Long",
    color: "#14B8A6",
    provinces: ["an-giang", "ca-mau", "can-tho", "dong-thap", "vinh-long"]
  }
};

export const provinces = {
  // Đông Bắc Bộ - 5 provinces
  "bac-ninh": {
    id: "bac-ninh",
    name: "Bắc Ninh",
    region: "dong-bac",
    area: 4718.61,
    population: 3619443,
    density: 767.06,
    administrativeUnits: 99,
    merged: ["Bắc Ninh", "Bắc Giang"],
    ethnicMinorityPercent: 15,
    dominantEthnic: ["Tày", "Dao", "Nùng"]
  },
  "lang-son": {
    id: "lang-son",
    name: "Lạng Sơn",
    region: "dong-bac",
    area: 8309.67,
    population: 881384,
    density: 106.07,
    administrativeUnits: 65,
    merged: [],
    ethnicMinorityPercent: 68,
    dominantEthnic: ["Tày", "Nùng", "Dao"]
  },
  "quang-ninh": {
    id: "quang-ninh",
    name: "Quảng Ninh",
    region: "dong-bac",
    area: 6154.84,
    population: 1497447,
    density: 243.30,
    administrativeUnits: 54,
    merged: [],
    ethnicMinorityPercent: 12,
    dominantEthnic: ["Tày", "Dao", "San Dìu"]
  },
  "thai-nguyen": {
    id: "thai-nguyen",
    name: "Thái Nguyên",
    region: "dong-bac",
    area: 8375.27,
    population: 1799489,
    density: 214.86,
    administrativeUnits: 92,
    merged: ["Bắc Kạn", "Thái Nguyên"],
    ethnicMinorityPercent: 60,
    dominantEthnic: ["Tày", "Nùng", "Dao"]
  },
  "tuyen-quang": {
    id: "tuyen-quang",
    name: "Tuyên Quang",
    region: "dong-bac",
    area: 13795.52,
    population: 1858056,
    density: 134.69,
    administrativeUnits: 124,
    merged: ["Tuyên Quang", "Hà Giang"],
    ethnicMinorityPercent: 73,
    dominantEthnic: ["Tày", "Dao", "H'Mông"]
  },

  // Tây Bắc Bộ - 6 provinces
  "cao-bang": {
    id: "cao-bang",
    name: "Cao Bằng",
    region: "tay-bac",
    area: 6700.38,
    population: 573119,
    density: 85.54,
    administrativeUnits: 56,
    merged: [],
    ethnicMinorityPercent: 93,
    dominantEthnic: ["Tày", "Nùng", "H'Mông"]
  },
  "dien-bien": {
    id: "dien-bien",
    name: "Điện Biên",
    region: "tay-bac",
    area: 9539.27,
    population: 673091,
    density: 70.56,
    administrativeUnits: 45,
    merged: [],
    ethnicMinorityPercent: 85,
    dominantEthnic: ["Thái", "H'Mông", "Khơ Mú"]
  },
  "lai-chau": {
    id: "lai-chau",
    name: "Lai Châu",
    region: "tay-bac",
    area: 9068.73,
    population: 512601,
    density: 56.52,
    administrativeUnits: 38,
    merged: [],
    ethnicMinorityPercent: 90,
    dominantEthnic: ["Thái", "H'Mông", "Dao"]
  },
  "lao-cai": {
    id: "lao-cai",
    name: "Lào Cai",
    region: "tay-bac",
    area: 13256.61,
    population: 1770645,
    density: 133.57,
    administrativeUnits: 99,
    merged: ["Lào Cai", "Yên Bái"],
    ethnicMinorityPercent: 65,
    dominantEthnic: ["H'Mông", "Tày", "Dao"]
  },
  "phu-tho": {
    id: "phu-tho",
    name: "Phú Thọ",
    region: "tay-bac",
    area: 9361.42,
    population: 4022493,
    density: 429.69,
    administrativeUnits: 148,
    merged: ["Vĩnh Phúc", "Phú Thọ", "Hòa Bình"],
    ethnicMinorityPercent: 45,
    dominantEthnic: ["Mường", "Dao", "Thái"]
  },
  "son-la": {
    id: "son-la",
    name: "Sơn La",
    region: "tay-bac",
    area: 14108.89,
    population: 1404587,
    density: 99.55,
    administrativeUnits: 75,
    merged: [],
    ethnicMinorityPercent: 86,
    dominantEthnic: ["Thái", "H'Mông", "Mường"]
  },

  // Đồng bằng sông Hồng - 4 provinces/cities
  "ha-noi": {
    id: "ha-noi",
    name: "Hà Nội",
    region: "dong-bang-song-hong",
    area: 3359.77,
    population: 8807523,
    density: 2621.47,
    administrativeUnits: 126,
    merged: [],
    ethnicMinorityPercent: 2,
    dominantEthnic: ["Kinh", "Mường"]
  },
  "hai-phong": {
    id: "hai-phong",
    name: "Hải Phòng",
    region: "dong-bang-song-hong",
    area: 3194.73,
    population: 4664124,
    density: 1459.94,
    administrativeUnits: 114,
    merged: ["Hải Dương", "Hải Phòng"],
    ethnicMinorityPercent: 2,
    dominantEthnic: ["Kinh", "Hoa"]
  },
  "hung-yen": {
    id: "hung-yen",
    name: "Hưng Yên",
    region: "dong-bang-song-hong",
    area: 2514.81,
    population: 3567943,
    density: 1418.77,
    administrativeUnits: 104,
    merged: ["Hưng Yên", "Thái Bình"],
    ethnicMinorityPercent: 1,
    dominantEthnic: ["Kinh"]
  },
  "ninh-binh": {
    id: "ninh-binh",
    name: "Ninh Bình",
    region: "dong-bang-song-hong",
    area: 3821.39,
    population: 4412264,
    density: 1154.62,
    administrativeUnits: 129,
    merged: ["Hà Nam", "Ninh Bình", "Nam Định"],
    ethnicMinorityPercent: 2,
    dominantEthnic: ["Kinh", "Mường"]
  },

  // Bắc Trung Bộ - 5 provinces/cities
  "ha-tinh": {
    id: "ha-tinh",
    name: "Hà Tĩnh",
    region: "bac-trung-bo",
    area: 5994.85,
    population: 1623061,
    density: 270.74,
    administrativeUnits: 69,
    merged: [],
    ethnicMinorityPercent: 3,
    dominantEthnic: ["Kinh"]
  },
  "hue": {
    id: "hue",
    name: "Huế",
    region: "bac-trung-bo",
    area: 4947.14,
    population: 1432986,
    density: 289.66,
    administrativeUnits: 40,
    merged: [],
    ethnicMinorityPercent: 5,
    dominantEthnic: ["Kinh", "Bru - Vân Kiều"]
  },
  "nghe-an": {
    id: "nghe-an",
    name: "Nghệ An",
    region: "bac-trung-bo",
    area: 16486.49,
    population: 3831694,
    density: 232.41,
    administrativeUnits: 130,
    merged: [],
    ethnicMinorityPercent: 12,
    dominantEthnic: ["Kinh", "Thái"]
  },
  "quang-tri": {
    id: "quang-tri",
    name: "Quảng Trị",
    region: "bac-trung-bo",
    area: 12699.99,
    population: 1870844,
    density: 147.31,
    administrativeUnits: 78,
    merged: ["Quảng Trị", "Quảng Bình"],
    ethnicMinorityPercent: 10,
    dominantEthnic: ["Kinh", "Bru - Vân Kiều"]
  },
  "thanh-hoa": {
    id: "thanh-hoa",
    name: "Thanh Hóa",
    region: "bac-trung-bo",
    area: 11114.78,
    population: 4320947,
    density: 388.76,
    administrativeUnits: 166,
    merged: [],
    ethnicMinorityPercent: 18,
    dominantEthnic: ["Kinh", "Thái", "Mường"]
  },

  // Nam Trung Bộ - 5 provinces/cities
  "da-nang": {
    id: "da-nang",
    name: "Đà Nẵng",
    region: "nam-trung-bo",
    area: 11913.08,
    population: 3122915,
    density: 262.14,
    administrativeUnits: 94,
    merged: ["Đà Nẵng", "Quảng Nam"],
    ethnicMinorityPercent: 3,
    dominantEthnic: ["Kinh", "Cơ Tu"]
  },
  "dak-lak": {
    id: "dak-lak",
    name: "Đắk Lắk",
    region: "nam-trung-bo",
    area: 18096.37,
    population: 3346853,
    density: 184.95,
    administrativeUnits: 102,
    merged: ["Đắk Lắk", "Phú Yên"],
    ethnicMinorityPercent: 37,
    dominantEthnic: ["Ê Đê", "M'Nông", "Tày"]
  },
  "gia-lai": {
    id: "gia-lai",
    name: "Gia Lai",
    region: "nam-trung-bo",
    area: 21576.56,
    population: 3583691,
    density: 166.09,
    administrativeUnits: 135,
    merged: ["Gia Lai", "Bình Định"],
    ethnicMinorityPercent: 47,
    dominantEthnic: ["Gia Rai", "Ba Na", "Ê Đê"]
  },
  "khanh-hoa": {
    id: "khanh-hoa",
    name: "Khánh Hòa",
    region: "nam-trung-bo",
    area: 8556.10,
    population: 2243553,
    density: 262.22,
    administrativeUnits: 65,
    merged: ["Khánh Hòa", "Ninh Thuận"],
    ethnicMinorityPercent: 12,
    dominantEthnic: ["Kinh", "Chăm", "Ra Glai"]
  },
  "quang-ngai": {
    id: "quang-ngai",
    name: "Quảng Ngãi",
    region: "nam-trung-bo",
    area: 14832.53,
    population: 2161735,
    density: 145.74,
    administrativeUnits: 96,
    merged: ["Quảng Ngãi", "Kon Tum"],
    ethnicMinorityPercent: 32,
    dominantEthnic: ["Kinh", "Ba Na", "Xơ Đăng"]
  },

  // Tây Nguyên - 1 province
  "lam-dong": {
    id: "lam-dong",
    name: "Lâm Đồng",
    region: "tay-nguyen",
    area: 24243.13,
    population: 3872999,
    density: 159.76,
    administrativeUnits: 124,
    merged: ["Lâm Đồng", "Đắk Nông", "Bình Thuận"],
    ethnicMinorityPercent: 30,
    dominantEthnic: ["K'Ho", "Chơ Ro", "M'Nông"]
  },

  // Đông Nam Bộ - 3 provinces/cities
  "dong-nai": {
    id: "dong-nai",
    name: "Đồng Nai",
    region: "dong-nam-bo",
    area: 12737.36,
    population: 4491408,
    density: 352.62,
    administrativeUnits: 95,
    merged: ["Đồng Nai", "Bình Phước"],
    ethnicMinorityPercent: 10,
    dominantEthnic: ["Kinh", "Hoa"]
  },
  "tay-ninh": {
    id: "tay-ninh",
    name: "Tây Ninh",
    region: "dong-nam-bo",
    area: 8536.41,
    population: 3254170,
    density: 381.21,
    administrativeUnits: 96,
    merged: ["Tây Ninh", "Long An"],
    ethnicMinorityPercent: 5,
    dominantEthnic: ["Kinh", "Hoa"]
  },
  "tp-hcm": {
    id: "tp-hcm",
    name: "TP. Hồ Chí Minh",
    region: "dong-nam-bo",
    area: 6780.43,
    population: 14668098,
    density: 2163.30,
    administrativeUnits: 168,
    merged: ["TP. Hồ Chí Minh", "Bà Rịa - Vũng Tàu", "Bình Dương"],
    ethnicMinorityPercent: 2,
    dominantEthnic: ["Kinh", "Hoa"]
  },

  // Đồng bằng sông Cửu Long - 5 provinces/cities
  "an-giang": {
    id: "an-giang",
    name: "An Giang",
    region: "dong-bang-song-cuu-long",
    area: 9986.95,
    population: 4995214,
    density: 500.17,
    administrativeUnits: 102,
    merged: ["An Giang", "Kiên Giang"],
    ethnicMinorityPercent: 10,
    dominantEthnic: ["Khmer", "Hoa", "Chăm"]
  },
  "ca-mau": {
    id: "ca-mau",
    name: "Cà Mau",
    region: "dong-bang-song-cuu-long",
    area: 6310.45,
    population: 1988464,
    density: 315.11,
    administrativeUnits: 64,
    merged: ["Cà Mau", "Bạc Liêu"],
    ethnicMinorityPercent: 20,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "can-tho": {
    id: "can-tho",
    name: "Cần Thơ",
    region: "dong-bang-song-cuu-long",
    area: 6360.82,
    population: 4199788,
    density: 660.26,
    administrativeUnits: 103,
    merged: ["Cần Thơ", "Sóc Trăng", "Hậu Giang"],
    ethnicMinorityPercent: 8,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "dong-thap": {
    id: "dong-thap",
    name: "Đồng Tháp",
    region: "dong-bang-song-cuu-long",
    area: 5939,
    population: 4370046,
    density: 735.82,
    administrativeUnits: 102,
    merged: ["Tiền Giang", "Đồng Tháp"],
    ethnicMinorityPercent: 6,
    dominantEthnic: ["Khmer", "Hoa"]
  },
  "vinh-long": {
    id: "vinh-long",
    name: "Vĩnh Long",
    region: "dong-bang-song-cuu-long",
    area: 6243.18,
    population: 4257581,
    density: 681.96,
    administrativeUnits: 124,
    merged: ["Vĩnh Long", "Bến Tre", "Trà Vinh"],
    ethnicMinorityPercent: 20,
    dominantEthnic: ["Khmer", "Hoa"]
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

// Get total number of provinces
export const getTotalProvinces = () => Object.keys(provinces).length;

// Get provinces that were merged
export const getMergedProvinces = () => {
  return Object.values(provinces).filter(p => p.merged && p.merged.length > 0);
};
