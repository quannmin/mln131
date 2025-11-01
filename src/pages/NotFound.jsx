import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import Button from "../components/ui/Button";
import { ROUTES } from "../utils/constants";

const NotFound = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trang không tồn tại
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            Xin lỗi, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm. Vui
            lòng kiểm tra lại URL hoặc quay về trang chủ.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button as={Link} to={ROUTES.HOME} className="flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Về trang chủ
          </Button>
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Quay lại
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
