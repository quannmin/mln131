import { Link } from "react-router-dom";
import { Users2, Heart, Github } from "lucide-react";
import { ROUTES, APP_CONFIG } from "../../utils/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-slate-300 border-t border-red-700/50">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-vietnam-yellow/30 to-transparent" />

      <div className="mx-auto w-full max-w-screen-xl p-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-vietnam rounded-full flex items-center justify-center shadow-lg">
                <Users2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-vietnam">
                  {APP_CONFIG.APP_NAME}
                </h2>
                <p className="text-xs text-slate-500">Version {APP_CONFIG.VERSION}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Nghiên cứu khoa học về mối quan hệ giữa các dân tộc Việt Nam
              dựa trên quan điểm Mác-Lênin và tư tưởng Hồ Chí Minh.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-vietnam-yellow uppercase tracking-wider">
              Liên kết nhanh
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to={ROUTES.HOME} className="hover:text-vietnam-yellow transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ETHNIC_CONCEPT} className="hover:text-vietnam-yellow transition-colors">
                  Vấn đề Dân tộc
                </Link>
              </li>
              <li>
                <Link to={ROUTES.ETHNIC_DEBATE} className="hover:text-vietnam-yellow transition-colors">
                  So sánh Quan điểm
                </Link>
              </li>
              <li>
                <Link to={ROUTES.QUIZ} className="hover:text-vietnam-yellow transition-colors">
                  Trắc nghiệm
                </Link>
              </li>
            </ul>
          </div>

          {/* Project Info */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-vietnam-yellow uppercase tracking-wider">
              Thông tin dự án
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dự án MLN131 - Ứng dụng web hiện đại được xây dựng với React,
              Tailwind CSS, và Framer Motion.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="w-4 h-4 text-vietnam-red" />
              <span className="text-slate-400">Made with passion</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-6 border-t border-slate-700/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <span className="block text-xs text-slate-500">
              © {currentYear} {APP_CONFIG.APP_NAME}. All rights reserved.
            </span>

            <div className="flex items-center space-x-4">
              <span className="text-xs text-slate-500 italic">
                "54 dân tộc - Một tổ quốc Việt Nam"
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
