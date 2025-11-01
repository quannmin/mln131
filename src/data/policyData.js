// Investment & Policy Data for Ethnic Minorities in Vietnam

// Program 135 Investment by Province (1998-2023) - in billion VND
export const program135Investment = {
  "ha-giang": { amount: 12500, projects: 245, schools: 18, hospitals: 8 },
  "cao-bang": { amount: 10800, projects: 198, schools: 15, hospitals: 7 },
  "bac-kan": { amount: 7200, projects: 142, schools: 12, hospitals: 5 },
  "lang-son": { amount: 9500, projects: 175, schools: 14, hospitals: 6 },
  "lai-chau": { amount: 8900, projects: 163, schools: 13, hospitals: 6 },
  "son-la": { amount: 15200, projects: 287, schools: 22, hospitals: 10 },
  "dien-bien": { amount: 9800, projects: 184, schools: 15, hospitals: 7 },
  "hoa-binh": { amount: 11200, projects: 203, schools: 17, hospitals: 8 },
  "kon-tum": { amount: 8700, projects: 156, schools: 13, hospitals: 6 },
  "gia-lai": { amount: 13500, projects: 241, schools: 19, hospitals: 9 },
  "dak-lak": { amount: 14800, projects: 265, schools: 21, hospitals: 10 },
  "dak-nong": { amount: 9200, projects: 167, schools: 14, hospitals: 7 },
  "lam-dong": { amount: 10500, projects: 189, schools: 16, hospitals: 8 }
};

// Resolution 88/2019 Investment Plan (2021-2030) - in billion VND
export const resolution88Investment = {
  "ha-giang": 18200,
  "cao-bang": 15600,
  "son-la": 21500,
  "dien-bien": 14800,
  "kon-tum": 12900,
  "gia-lai": 19200,
  "dak-lak": 21800,
  "dak-nong": 13500,
  "lam-dong": 15200
};

// Poverty Reduction Progress by Province
export const povertyReduction = {
  "ha-giang": {
    "2015": 60.8,
    "2018": 48.3,
    "2020": 38.5,
    "2023": 25.2,
    "target2030": 10.0
  },
  "cao-bang": {
    "2015": 58.2,
    "2018": 45.1,
    "2020": 35.8,
    "2023": 22.4,
    "target2030": 9.5
  },
  "son-la": {
    "2015": 52.7,
    "2018": 41.2,
    "2020": 31.5,
    "2023": 18.9,
    "target2030": 8.0
  },
  "dak-lak": {
    "2015": 28.5,
    "2018": 22.1,
    "2020": 16.8,
    "2023": 11.2,
    "target2030": 5.0
  },
  "gia-lai": {
    "2015": 35.2,
    "2018": 27.5,
    "2020": 21.3,
    "2023": 14.7,
    "target2030": 6.5
  }
};

// Ethnic Boarding Schools (Trường dân tộc nội trú)
export const ethnicSchools = [
  {
    name: "Trường PTDT Nội trú THPT Hà Giang",
    province: "ha-giang",
    students: 1200,
    ethnicGroups: ["H'Mông", "Dao", "Tày"],
    established: 1985
  },
  {
    name: "Trường PTDT Nội trú THPT Cao Bằng",
    province: "cao-bang",
    students: 950,
    ethnicGroups: ["Tày", "Nùng", "H'Mông"],
    established: 1987
  },
  {
    name: "Trường PTDT Nội trú THPT Sơn La",
    province: "son-la",
    students: 1350,
    ethnicGroups: ["Thái", "H'Mông", "Mường"],
    established: 1982
  },
  {
    name: "Trường PTDT Nội trú THPT Kon Tum",
    province: "kon-tum",
    students: 1100,
    ethnicGroups: ["Ba Na", "Xơ Đăng", "Gia Rai"],
    established: 1990
  },
  {
    name: "Trường PTDT Nội trú THPT Đắk Lắk",
    province: "dak-lak",
    students: 1450,
    ethnicGroups: ["Ê Đê", "M'Nông", "Tày"],
    established: 1988
  }
];

// UNESCO Heritage Sites related to Ethnic Groups
export const unescoSites = [
  {
    name: "Không gian văn hóa Cồng chiêng Tây Nguyên",
    type: "Intangible Cultural Heritage",
    year: 2005,
    provinces: ["kon-tum", "gia-lai", "dak-lak", "dak-nong", "lam-dong"],
    ethnicGroups: ["Ba Na", "Gia Rai", "Ê Đê", "Xơ Đăng", "M'Nông"],
    lat: 14.0583,
    lng: 108.2772,
    icon: "🥁",
    description: "Văn hóa cồng chiêng của 5 tỉnh Tây Nguyên được UNESCO công nhận là Kiệt tác di sản văn hóa phi vật thể nhân loại"
  },
  {
    name: "Tín ngưỡng thờ Mẫu Tam phủ của người Việt",
    type: "Intangible Cultural Heritage",
    year: 2016,
    provinces: ["ha-noi", "thai-binh", "nam-dinh"],
    ethnicGroups: ["Kinh"],
    lat: 21.0285,
    lng: 105.8542,
    icon: "🏮",
    description: "Tín ngưỡng thờ Mẫu của người Việt được UNESCO ghi danh vào Danh sách di sản văn hóa phi vật thể đại diện của nhân loại"
  },
  {
    name: "Nghệ thuật Xòe Thái",
    type: "Intangible Cultural Heritage",
    year: 2021,
    provinces: ["son-la", "dien-bien", "lai-chau"],
    ethnicGroups: ["Thái"],
    lat: 21.3272,
    lng: 103.9143,
    icon: "💃",
    description: "Nghệ thuật Xòe của dân tộc Thái ở Việt Nam được UNESCO công nhận"
  }
];

// Get investment data for a province
export const getProvinceInvestment = (provinceId) => {
  const program135 = program135Investment[provinceId] || { amount: 0, projects: 0 };
  const resolution88 = resolution88Investment[provinceId] || 0;

  return {
    program135: program135.amount,
    resolution88: resolution88,
    total: program135.amount + resolution88,
    projects: program135.projects || 0,
    schools: program135.schools || 0,
    hospitals: program135.hospitals || 0
  };
};

// Get poverty rate for a province
export const getPovertyRate = (provinceId, year = "2023") => {
  return povertyReduction[provinceId]?.[year] || null;
};

// Get all UNESCO sites in a province
export const getUNESCOSitesByProvince = (provinceId) => {
  return unescoSites.filter(site => site.provinces.includes(provinceId));
};

// Get all ethnic schools in a province
export const getSchoolsByProvince = (provinceId) => {
  return ethnicSchools.filter(school => school.province === provinceId);
};

// Get investment heat map color
export const getInvestmentHeatColor = (amount) => {
  if (amount >= 20000) return "#DC2626"; // Red (High)
  if (amount >= 15000) return "#F97316"; // Orange
  if (amount >= 10000) return "#F59E0B"; // Amber
  if (amount >= 5000) return "#10B981"; // Green
  return "#6B7280"; // Gray (Low/No data)
};

// Calculate total investment nationwide
export const getTotalInvestment = () => {
  const program135Total = Object.values(program135Investment)
    .reduce((sum, data) => sum + data.amount, 0);
  const resolution88Total = Object.values(resolution88Investment)
    .reduce((sum, amount) => sum + amount, 0);

  return {
    program135: program135Total,
    resolution88: resolution88Total,
    total: program135Total + resolution88Total
  };
};

// Statistics summary
export const investmentStats = {
  totalInvestment: 277000, // billion VND (2021-2030)
  totalProjects: 3500,
  totalSchools: 300,
  totalHospitals: 150,
  povertyReductionTarget: 10, // percent by 2030
  currentPovertyRate: 17 // percent as of 2023
};
