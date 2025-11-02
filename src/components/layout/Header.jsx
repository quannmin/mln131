import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Users2, BookOpen } from "lucide-react";
import { ROUTES, APP_CONFIG } from "../../utils/constants";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Trang chủ", href: ROUTES.HOME },
    { name: "Vấn đề Dân tộc", href: ROUTES.ETHNIC_CONCEPT },
    { name: "Bản đồ 54 Dân tộc", href: ROUTES.ETHNIC_MAP },
    { name: "So sánh Quan điểm", href: ROUTES.ETHNIC_DEBATE },
    { name: "Bảo tàng", href: ROUTES.MUSEUM },
    { name: "Trắc nghiệm", href: ROUTES.QUIZ },
    { name: "Chatbot AI", href: ROUTES.CHATBOT },
  ];

  const handleNavClick = (href) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 shadow-2xl sticky top-0 z-50 backdrop-blur-md border-b border-red-700/50">
      {/* Top accent bar with Vietnam flag colors */}
      <div className="h-1 bg-gradient-to-r from-vietnam-red via-vietnam-yellow to-vietnam-red" />

      <nav className="container mx-auto px-4">
        <div className="flex h-16 justify-between items-center py-2">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <Link
              to={ROUTES.HOME}
              className="flex items-center space-x-3 group"
            >
              {/* Ethnic Diversity Symbol */}
              <div className="w-12 h-12 bg-gradient-vietnam rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users2 className="w-7 h-7 text-white" />
              </div>

              {/* App Name */}
              <div className="flex flex-col leading-none">
                <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-vietnam group-hover:opacity-80 transition-opacity">
                  54 Dân tộc
                </span>
                <span className="text-xs text-slate-400 font-medium -mt-1">
                  {APP_CONFIG.DESCRIPTION.slice(0, 30)}...
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-lg group ${
                    isActive
                      ? "text-vietnam-yellow bg-red-950 shadow-lg ring-1 ring-vietnam-yellow/30"
                      : "text-slate-300 hover:text-vietnam-yellow hover:bg-red-950/50"
                  }`
                }
              >
                <span className="relative z-10">{item.name}</span>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-vietnam-red/10 to-vietnam-yellow/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="text-slate-300 hover:text-vietnam-yellow p-2 rounded-lg hover:bg-red-950/50 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-red-700/50 bg-red-900/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full text-left block px-4 py-3 text-base font-semibold rounded-lg transition-all duration-300 ${
                    locationMatches(item.href)
                      ? "text-vietnam-yellow bg-gradient-to-r from-vietnam-red/20 to-vietnam-yellow/20 border border-vietnam-yellow/30"
                      : "text-slate-300 hover:text-vietnam-yellow hover:bg-red-950/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile Info Section */}
              <div className="mt-4 pt-4 border-t border-slate-700/50">
                <div className="px-4 py-2 text-xs text-slate-400 font-medium flex items-center">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Nghiên cứu vấn đề dân tộc VN
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-vietnam-yellow/30 to-transparent" />
    </header>
  );
};

// Helper function to check location pathname for mobile menu highlighting
function locationMatches(href) {
  try {
    return window?.location?.pathname === href;
  } catch {
    return false;
  }
}

export default Header;
