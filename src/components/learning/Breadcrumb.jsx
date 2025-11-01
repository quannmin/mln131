import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

const Breadcrumb = ({ items }) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-sm mb-8"
    >
      <Link
        to="/"
        className="flex items-center gap-1 text-slate-400 hover:text-vietnam-yellow transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Trang chủ</span>
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-slate-600" />
          {item.href ? (
            <Link
              to={item.href}
              className="text-slate-400 hover:text-vietnam-yellow transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-white font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </motion.nav>
  );
};

export default Breadcrumb;
