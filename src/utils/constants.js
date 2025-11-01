export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const ROUTES = {
  HOME: "/",
  ETHNIC_CONCEPT: "/van-de-dan-toc", // Hub page
  CHAPTER_1: "/van-de-dan-toc/chuong-1",
  CHAPTER_2: "/van-de-dan-toc/chuong-2",
  CHAPTER_3: "/van-de-dan-toc/chuong-3",
  CHAPTER_4: "/van-de-dan-toc/chuong-4",
  COMPLETION: "/van-de-dan-toc/hoan-thanh",
  ETHNIC_DEBATE: "/chiem-dung-hay-chenh-lech",
  ETHNIC_MAP: "/ban-do-dan-toc",
  MUSEUM: "/bao-tang",
  QUIZ: "/trac-nghiem",
  CHATBOT: "/chatbot-ai",
};

export const STORAGE_KEYS = {
  TOKEN: "auth_token",
  USER: "user_data",
  QUIZ_PROGRESS: "quiz_progress",
};

export const APP_CONFIG = {
  APP_NAME: "Vấn đề Dân tộc Việt Nam",
  DESCRIPTION: "Người Kinh có 'chiếm dụng' văn hóa, kinh tế và chính trị?",
  VERSION: "2.0.0",
};

// Theme colors
export const COLORS = {
  // Vietnam flag colors
  PRIMARY_RED: "#DA251D",
  PRIMARY_YELLOW: "#FFCD00",

  // Diversity colors (representing 54 ethnic groups)
  ETHNIC_GREEN: "#10B981",
  ETHNIC_ORANGE: "#F97316",
  ETHNIC_BLUE: "#3B82F6",
  ETHNIC_PURPLE: "#8B5CF6",
  ETHNIC_PINK: "#EC4899",
  ETHNIC_CYAN: "#06B6D4",
  ETHNIC_INDIGO: "#6366F1",
  ETHNIC_EMERALD: "#059669",
};
