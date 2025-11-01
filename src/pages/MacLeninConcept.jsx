import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Users,
  Scale,
  Building,
  Shield,
  Landmark,
  Globe,
  Lightbulb,
  Info,
} from "lucide-react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

const sections = [
  {
    id: 1,
    title: "I. Giới thiệu",
    icon: BookOpen,
    color: "blue",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20">
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-blue-700 text-xl">
              "Nền tảng lý luận về Nhà nước xã hội chủ nghĩa và các đặc trưng
              cốt lõi"
            </span>{" "}
            là chủ đề làm rõ hệ thống tri thức về{" "}
            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Nhà nước xã hội chủ nghĩa
            </span>{" "}
            trong khung Mác-Lênin, nhận diện các đặc trưng cốt lõi và quỹ đạo
            vận dụng/phát triển ở Việt Nam.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span className="font-bold text-gray-800">
                Tiếp cận theo logic lịch sử:
              </span>
              <span className="text-gray-700 ml-2">
                từ nguồn gốc nhà nước, qua thời kỳ quá độ, đến nhà nước kiểu
                mới.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              <span className="font-bold text-gray-800">
                Kết hợp phân tích khái niệm:
              </span>
              <span className="text-gray-700 ml-2">
                bản chất, chức năng, đặc trưng.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-blue-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0"></div>
            <div>
              Chủ đề giúp nhìn sâu sắc hơn về{" "}
              <span className="font-bold text-blue-600">
                biến đổi cơ cấu kinh tế-xã hội
              </span>{" "}
              và{" "}
              <span className="font-bold text-blue-600">
                công cụ tổ chức xã hội mới
              </span>
              .
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-300 p-6 rounded-2xl italic">
          <p className="text-gray-700 leading-relaxed">
            Nhấn mạnh hiện thực hoá các giá trị{" "}
            <span className="font-bold text-blue-600">
              dân chủ, công bằng, giải phóng con người
            </span>{" "}
            và vận dụng lịch sử-đương đại trong bối cảnh Việt Nam (Nhà nước pháp
            quyền xã hội chủ nghĩa, dân chủ xã hội chủ nghĩa, vai trò Đảng, cải
            cách nhà nước).
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "II. Khái niệm Nhà nước xã hội chủ nghĩa",
    icon: Users,
    color: "yellow",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-4 border-yellow-400 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/20">
          <p className="text-lg leading-relaxed">
            <span className="font-bold text-yellow-700 text-xl">
              Nhà nước xã hội chủ nghĩa
            </span>{" "}
            là{" "}
            <span className="font-bold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">
              nhà nước kiểu mới
            </span>{" "}
            nảy sinh trong thời kỳ quá độ từ{" "}
            <span className="font-bold">Chủ nghĩa tư bản</span> lên{" "}
            <span className="font-bold">Chủ nghĩa xã hội</span>, do{" "}
            <span className="font-bold text-yellow-700">
              giai cấp công nhân liên minh với các tầng lớp lao động
            </span>{" "}
            nắm giữ quyền lãnh đạo, nhằm thủ tiêu cơ sở thống trị cũ, xây dựng
            quan hệ sản xuất và thiết chế xã hội phù hợp với Chủ nghĩa xã hội.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <span className="font-bold text-gray-800">
                Chính trị-giai cấp:
              </span>
              <span className="text-gray-700 ml-2">
                trấn áp các lực lượng chống phá, bảo vệ thành quả cách mạng.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <span className="font-bold text-gray-800">Xã hội-tổ chức:</span>
              <span className="text-gray-700 ml-2">
                tổ chức xây dựng đời sống mới, phát triển kinh tế-văn hoá-pháp
                luật.
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4 p-5 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl border border-yellow-200/50 hover:shadow-lg transition-all duration-300">
            <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <div>
              <span className="font-bold text-yellow-700">
                Dân chủ xã hội chủ nghĩa
              </span>{" "}
              là bản chất và phương thức vận hành nhà nước kiểu mới: mở rộng
              quyền lực nhân dân, nâng cao quyền con người/quyền công dân, song
              song với kỷ cương, pháp chế.
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-300 p-6 rounded-2xl">
          <p className="text-gray-700 leading-relaxed italic">
            Khi các đối kháng giai cấp mất đi, nhà nước với tư cách bộ máy cưỡng
            chế sẽ thu hẹp chức năng; đây là luận đề mang tính lịch sử và triển
            vọng của mô hình được phân tích thích hợp là lịch sử-logic, bắt đầu
            từ nguồn gốc nhà nước trong xã hội có giai cấp, qua đòi hỏi khách
            quan của thời kỳ quá độ, đến việc hình thành nhà nước kiểu mới.
          </p>
        </div>
        <div className="bg-yellow-100/50 rounded-2xl p-4 border border-yellow-200">
          <p className="text-sm text-gray-800">
            <span className="font-bold text-yellow-700">
              💡 Biện chứng cơ sở-kiến trúc thượng tầng:
            </span>{" "}
            Sự phát triển của lực lượng sản xuất và những thay đổi trong quan hệ
            sản xuất đòi hỏi kiến trúc thượng tầng (nhà nước, pháp luật, hệ tư
            tưởng...) phải điều chỉnh phù hợp để thúc đẩy sự phát triển xã hội.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "III. Cơ sở hình thành: yếu tố, thành phần, nền tảng",
    icon: Building,
    color: "purple",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border-l-4 border-purple-400 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <Building className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-purple-700 text-lg">
              Cơ sở kinh tế
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Trong mô hình xã hội chủ nghĩa,{" "}
            <span className="font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded">
              sở hữu công cộng
            </span>{" "}
            (toàn dân hoặc tập thể) giữ vai trò chủ đạo đối với tư liệu sản xuất
            chủ yếu. Điều này được hiện thực hoá thông qua các hình thức tổ chức
            sản xuất phù hợp từng giai đoạn, cùng với{" "}
            <span className="font-bold text-purple-600">
              cơ chế kế hoạch hoá
            </span>{" "}
            hoặc{" "}
            <span className="font-bold text-purple-600">điều tiết vĩ mô</span>{" "}
            nhằm định hướng phát triển vì lợi ích chung.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-green-700 text-lg">
              Cơ sở xã hội – giai cấp
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
              Liên minh công nhân – nông dân – trí thức
            </span>{" "}
            là nền tảng xã hội của quyền lực nhà nước kiểu mới. Trên nền tảng
            đó, nhà nước mang tính nhân dân và tính dân tộc sâu sắc, hướng tới
            việc mở rộng tham gia xã hội, nâng cao mức sống và năng lực của đa
            số.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-400 p-6 rounded-2xl backdrop-blur-sm border border-red-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-red-700 text-lg">
              Cơ sở chính trị
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              Vai trò lãnh đạo của Đảng Cộng sản
            </span>{" "}
            bảo đảm định hướng xã hội chủ nghĩa cho toàn bộ hệ thống chính trị.
            Sự lãnh đạo này thể hiện ở khả năng hoạch định đường lối, xây dựng
            thể chế, tổ chức thực thi và kiểm tra, giám sát quá trình vận hành
            hệ thống quyền lực.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-l-4 border-blue-400 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-blue-700 text-lg">
              Cơ sở pháp lý – thể chế
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
              Nhà nước pháp quyền xã hội chủ nghĩa
            </span>{" "}
            khẳng định vị trí tối thượng của Hiến pháp và pháp luật; quyền lực
            nhà nước là thống nhất nhưng có phân công, phối hợp, kiểm soát giữa
            các nhánh quyền lực; mọi chủ thể đều bình đẳng trước pháp luật.
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-l-4 border-yellow-400 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
              <Landmark className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-yellow-700 text-lg">
              Nguyên tắc tổ chức và vận hành
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-yellow-600">
              Tập trung dân chủ, trách nhiệm – kỷ luật, công khai – minh bạch,
              gắn bó mật thiết với nhân dân
            </span>{" "}
            <span className="italic text-yellow-600">
              {'("của dân, do dân, vì dân")'}
            </span>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "IV. Bản chất và chức năng",
    icon: Scale,
    color: "cyan",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-l-4 border-cyan-400 p-6 rounded-2xl backdrop-blur-sm border border-cyan-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
              <Scale className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-cyan-700 text-xl">Bản chất</span>
          </div>
          <p className="text-lg leading-relaxed text-gray-700">
            <span className="font-bold text-cyan-600 bg-cyan-50 px-2 py-1 rounded">
              Giai cấp công nhân
            </span>{" "}
            (trên nền{" "}
            <span className="font-bold text-cyan-600">
              liên minh xã hội rộng rãi
            </span>
            ), đồng thời mang{" "}
            <span className="font-bold text-cyan-600">tính nhân dân</span>,{" "}
            <span className="font-bold text-cyan-600">tính dân tộc</span>,{" "}
            <span className="font-bold text-cyan-600">tính thời đại</span>;
            hướng đích{" "}
            <span className="font-bold text-cyan-700">công bằng xã hội</span> và{" "}
            <span className="font-bold text-cyan-700">
              giải phóng con người
            </span>
            .
          </p>
        </div>

        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-l-4 border-orange-400 p-6 rounded-2xl backdrop-blur-sm border border-orange-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-orange-700 text-xl">Chức năng</span>
          </div>

          <div className="space-y-4">
            <div className="bg-white/50 p-4 rounded-xl border border-orange-200/50">
              <h4 className="font-bold text-orange-700 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Đối nội
              </h4>
              <p className="text-gray-700 mb-3">
                Mang bản chất giai cấp công nhân, thấm nhuần tính nhân dân, tính
                dân tộc, tính thời đại. Mục tiêu chiến lược là{" "}
                <span className="font-bold text-orange-600">
                  giải phóng con người
                </span>
                , thực hiện{" "}
                <span className="font-bold text-orange-600">
                  công bằng xã hội
                </span>
                .
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Tổ chức phát triển kinh tế – văn hoá
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Bảo đảm an sinh, công bằng
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Hoàn thiện pháp luật và pháp chế
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 bg-orange-50 rounded-lg">
                  <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                  <span className="text-sm text-gray-700">
                    Chống tham nhũng, lợi ích nhóm
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-4 rounded-xl border border-orange-200/50">
              <h4 className="font-bold text-orange-700 mb-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                Đối ngoại
              </h4>
              <p className="text-gray-700">
                Bảo vệ độc lập – chủ quyền; hợp tác quốc tế, hội nhập, đóng góp
                hoà bình – phát triển.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-100 to-gray-200 border-l-4 border-gray-400 p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
              <Lightbulb className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-gray-700 text-lg">
              Cơ chế thực thi
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Phối hợp công cụ{" "}
            <span className="font-bold text-gray-600">
              chính trị – pháp luật – kinh tế – văn hoá – giáo dục
            </span>
            , trong đó{" "}
            <span className="font-bold text-gray-700">pháp luật</span> giữ vai
            trò chuẩn tắc – bắt buộc, còn{" "}
            <span className="font-bold text-gray-700">dân chủ</span> là động lực
            – mục tiêu.{" "}
            <span className="italic text-gray-600">
              "Nhà nước của dân, do dân, vì dân"
            </span>
            .
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "V. Đặc trưng cốt lõi",
    icon: Shield,
    color: "pink",
    content: (
      <div className="space-y-4">
        <div className="grid gap-4">
          <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border-l-4 border-pink-400 p-5 rounded-2xl backdrop-blur-sm border border-pink-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-pink-700 text-lg">
                  Tính nhân dân và dân chủ xã hội chủ nghĩa
                </span>
                <p className="text-gray-700 mt-1">
                  Quyền lực thuộc về nhân dân; dân chủ vừa là giá trị, vừa là
                  phương thức quản trị.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400 p-5 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Scale className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-blue-700 text-lg">
                  Tính pháp quyền xã hội chủ nghĩa
                </span>
                <p className="text-gray-700 mt-1">
                  Thượng tôn Hiến pháp, tổ chức quyền lực hợp lý, bảo đảm quyền
                  con người/quyền công dân.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 p-5 rounded-2xl backdrop-blur-sm border border-green-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <Building className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-green-700 text-lg">
                  Tính giai cấp công nhân trong liên minh xã hội rộng
                </span>
                <p className="text-gray-700 mt-1">
                  Bảo đảm định hướng xã hội chủ nghĩa nhất quán.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-l-4 border-yellow-400 p-5 rounded-2xl backdrop-blur-sm border border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Landmark className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-yellow-700 text-lg">
                  Nền tảng sở hữu công cộng chủ đạo
                </span>
                <p className="text-gray-700 mt-1">
                  Cùng với cơ chế kế hoạch/điều tiết; mở rộng công cụ kinh
                  tế-pháp lý để hiện thực hoá mục tiêu xã hội.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-400 p-5 rounded-2xl backdrop-blur-sm border border-red-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-red-700 text-lg">
                  Vai trò lãnh đạo của Đảng Cộng sản
                </span>
                <p className="text-gray-700 mt-1">
                  Đối với Nhà nước và xã hội nhằm phát triển và mở rộng đời sống
                  xã hội, nhân dân và hợp tác quốc tế được ưu tiên đẩy mạnh.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border-l-4 border-purple-400 p-5 rounded-2xl backdrop-blur-sm border border-purple-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-purple-700 text-lg">
                  Nguyên tắc tổ chức của Đảng và Nhà nước
                </span>
                <p className="text-gray-700 mt-1">
                  Tập trung dân chủ, kỷ luật – trách nhiệm, công khai – minh
                  bạch, gắn bó với nhân dân.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-500/10 to-slate-500/10 border-l-4 border-gray-400 p-5 rounded-2xl backdrop-blur-sm border border-gray-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center">
                <Globe className="w-4 h-4 text-white" />
              </div>
              <div>
                <span className="font-bold text-gray-700 text-lg">
                  Tính lịch sử – phát triển qua các thời kỳ tại Việt Nam
                </span>
                <p className="text-gray-700 mt-1">
                  Nhà nước kiểu mới sau 1945 có độ mở để hiện đại hoá thiết chế,
                  thích ứng với bối cảnh, tiệm cận tàn lụi khi điều kiện lịch sử
                  – xã hội cho phép.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title:
      "VI. Khái quát các giai đoạn của Nhà nước xã hội chủ nghĩa trong lịch sử hiện đại Việt Nam",
    icon: Globe,
    color: "indigo",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <span className="font-bold text-blue-700 text-lg">
              Giai đoạn hình thành tiền đề (1945-1954)
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Sự ra đời của{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              Nhà nước Việt Nam Dân chủ Cộng hoà
            </span>{" "}
            mở nền móng cho nhà nước kiểu mới, đặt trọng tâm vào{" "}
            <span className="font-bold text-red-600">độc lập dân tộc</span> và
            quyền lực thuộc về nhân dân, từng bước xây dựng cơ sở pháp lý – thể
            chế trong bối cảnh chiến tranh bảo vệ nền độc lập.
          </p>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-l-4 border-yellow-400 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <span className="font-bold text-yellow-700 text-lg">
              Miền Bắc thời kỳ quá độ (1954-1975)
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Ở miền Bắc, quá trình{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              xây dựng chủ nghĩa xã hội
            </span>{" "}
            diễn ra song song với nhiệm vụ giải phóng miền Nam; mô hình công
            hữu, kế hoạch hoá và hệ thống phúc lợi – giáo dục – y tế được mở
            rộng; nhà nước củng cố bản chất giai cấp công nhân gắn với tính nhân
            dân và tính dân tộc.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <span className="font-bold text-green-700 text-lg">
              Sau thống nhất (1976-1986)
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Sau thống nhất,{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              mô hình kế hoạch hoá tập trung
            </span>{" "}
            được áp dụng toàn quốc; nhà nước tiếp tục phát huy vai trò tổ chức
            xã hội nhưng cũng khẳng định định hướng về những thách thức và hiệu
            quả phân bổ nguồn lực trong điều kiện mới của nền kinh tế.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-400 p-6 rounded-2xl backdrop-blur-sm border border-red-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
              4
            </div>
            <span className="font-bold text-red-700 text-lg">
              Đổi mới và hiện đại hoá nhà nước (1986-nay)
            </span>
          </div>
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              Sự chuyển đổi sang{" "}
              <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                kinh tế thị trường định hướng xã hội chủ nghĩa
              </span>{" "}
              đòi hỏi quá trình hiện đại hoá nhà nước theo hướng{" "}
              <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
                pháp quyền xã hội chủ nghĩa
              </span>
              :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg border border-red-200/50">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  Hoàn thiện hệ thống pháp luật
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg border border-red-200/50">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  Cải cách hành chính, tư pháp
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg border border-red-200/50">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  Kiểm soát quyền lực
                </span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white/60 rounded-lg border border-red-200/50">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <span className="text-sm text-gray-700">
                  Mở rộng cơ chế dân chủ
                </span>
              </div>
            </div>
            <div className="bg-red-50 p-4 rounded-lg mt-4">
              <p className="text-gray-700 text-sm italic">
                Nhà nước chủ động{" "}
                <span className="font-bold text-red-600">hội nhập quốc tế</span>
                , tiếp thu chuẩn mực quản trị hiện đại, đồng thời giữ vững{" "}
                <span className="font-bold text-red-600">
                  định hướng xã hội chủ nghĩa
                </span>{" "}
                theo phương châm{" "}
                <span className="font-bold text-red-600">
                  "của dân, do dân, vì dân"
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title:
      "VII. Dân chủ và pháp quyền xã hội chủ nghĩa trong bối cảnh hiện nay",
    icon: Landmark,
    color: "emerald",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-green-700 text-xl">
              Dân chủ xã hội chủ nghĩa
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            được cụ thể hoá qua việc tôn trọng, bảo vệ, bảo đảm{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              quyền con người và quyền công dân
            </span>
            ; cải tiến quy trình lập pháp – hành pháp – tư pháp theo hướng minh
            bạch, trách nhiệm giải trình; hoàn thiện cơ chế trưng cầu ý dân,
            tiếp công dân, phản biện xã hội.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Scale className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-green-700">
                  Minh bạch
                </span>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-green-700">
                  Tham gia
                </span>
              </div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-green-700">
                  Bảo vệ quyền
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
              <Scale className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-blue-700 text-xl">
              Pháp quyền xã hội chủ nghĩa
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            nhấn mạnh{" "}
            <span className="font-bold text-red-600 bg-red-50 px-2 py-1 rounded">
              tính tối thượng của Hiến pháp
            </span>
            , tính dự đoán được của pháp luật và tính khả thi trong tổ chức thi
            hành; tăng cường giám sát quyền lực bằng cả cơ chế nhà nước và cơ
            chế xã hội, bảo đảm rằng quyền lực được kiểm soát hữu hiệu trong
            khuôn khổ thống nhất.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-700">
                  Thượng tôn Hiến pháp
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Landmark className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-700">
                  Dự đoán được
                </span>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-blue-700">
                  Kiểm soát quyền lực
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "VIII. Những thách thức đặt ra đối với Nhà nước hiện nay",
    icon: Lightbulb,
    color: "amber",
    content: (
      <div className="space-y-4">
        <div className="bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border-l-4 border-yellow-400 p-6 rounded-2xl backdrop-blur-sm border border-yellow-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <span className="font-bold text-yellow-700 text-lg">
              Hoàn thiện thể chế
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Tiếp tục{" "}
            <span className="font-bold text-yellow-600">
              hoàn thiện thể chế
            </span>{" "}
            để cân bằng giữa hiệu quả quản trị và bảo đảm quyền làm chủ của nhân
            dân; tăng cường minh bạch, trách nhiệm giải trình, và chất lượng
            dịch vụ công.
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-l-4 border-blue-400 p-6 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <span className="font-bold text-blue-700 text-lg">
              Chuyển đổi số
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Đẩy mạnh{" "}
            <span className="font-bold text-blue-600">
              chuyển đổi số trong quản trị nhà nước
            </span>{" "}
            để nâng cao hiệu quả, giảm chi phí giao dịch, mở rộng sự tham gia
            của người dân.
          </p>
        </div>

        <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-l-4 border-green-400 p-6 rounded-2xl backdrop-blur-sm border border-green-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <span className="font-bold text-green-700 text-lg">
              Kỷ luật và sáng tạo
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            <span className="font-bold text-green-600">
              Củng cố kỷ luật – kỷ cương
            </span>{" "}
            đi liền với nhân văn – sáng tạo, tạo môi trường khuyến khích phát
            triển tài năng và đổi mới.
          </p>
        </div>

        <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border-l-4 border-red-400 p-6 rounded-2xl backdrop-blur-sm border border-red-500/20 shadow-lg hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <span className="font-bold text-red-700 text-lg">
              Phát triển bền vững
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Gắn{" "}
            <span className="font-bold text-red-600">tăng trưởng kinh tế</span>{" "}
            với <span className="font-bold text-red-600">công bằng xã hội</span>{" "}
            và{" "}
            <span className="font-bold text-red-600">phát triển bền vững</span>,
            bảo đảm không ai bị bỏ lại phía sau trong quá trình hiện đại hoá.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "IX. Kết luận",
    icon: BookOpen,
    color: "blue",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 border-l-4 border-blue-400 p-8 rounded-2xl backdrop-blur-sm border border-blue-500/20 shadow-xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Tổng kết</h3>
          </div>

          <div className="space-y-4">
            <p className="text-lg leading-relaxed text-gray-700">
              <span className="font-bold text-blue-700 text-xl">
                Nhà nước xã hội chủ nghĩa
              </span>
              , xét về nền tảng lý luận, là hình thức tổ chức quyền lực nhằm
              hiện thực hoá những{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                giá trị dân chủ
              </span>{" "}
              và{" "}
              <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">
                công bằng
              </span>{" "}
              trên cơ sở phát triển của{" "}
              <span className="font-bold text-blue-600">
                lực lượng sản xuất
              </span>{" "}
              và những{" "}
              <span className="font-bold text-blue-600">
                điều chỉnh tiến bộ của quan hệ sản xuất
              </span>
              .
            </p>

            <div className="bg-white/60 p-4 rounded-xl border border-blue-200/50">
              <p className="text-gray-700 leading-relaxed">
                Trong lịch sử hiện đại Việt Nam, mô hình này trải qua nhiều giai
                đoạn, với trọng tâm ngày càng rõ vào{" "}
                <span className="font-bold text-blue-600">
                  xây dựng nhà nước pháp quyền xã hội chủ nghĩa
                </span>{" "}
                phù hợp với{" "}
                <span className="font-bold text-blue-600">
                  kinh tế thị trường định hướng xã hội chủ nghĩa
                </span>{" "}
                và{" "}
                <span className="font-bold text-blue-600">
                  hội nhập quốc tế
                </span>
                .
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-5 rounded-xl border border-blue-200">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-bold text-purple-600">
                  Tính lịch sử – phát triển
                </span>{" "}
                của mô hình đòi hỏi việc{" "}
                <span className="font-bold text-purple-600">
                  hoàn thiện thể chế
                </span>{" "}
                một cách liên tục, sáng tạo và chuẩn mực, để vừa bảo đảm{" "}
                <span className="font-bold text-purple-600">
                  định hướng xã hội chủ nghĩa
                </span>
                , vừa đáp ứng{" "}
                <span className="font-bold text-purple-600">
                  yêu cầu phát triển của thời đại
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Key takeaways */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-green-700 mb-2">Tính nhân dân</h4>
            <p className="text-sm text-gray-600">Quyền lực thuộc về nhân dân</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-blue-700 mb-2">Pháp quyền</h4>
            <p className="text-sm text-gray-600">
              Thượng tôn Hiến pháp và pháp luật
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-200 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h4 className="font-bold text-purple-700 mb-2">Phát triển</h4>
            <p className="text-sm text-gray-600">Thích ứng với thời đại</p>
          </div>
        </div>
      </div>
    ),
  },
];

const MacLeninConcept = () => {
  const [current, setCurrent] = useState(0);
  const total = sections.length;

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const handlePrevious = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const section = sections[current];
  const progress = ((current + 1) / total) * 100;
  const IconComponent = section.icon;

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-yellow-800 py-8 transition-all duration-700`}
    >
      <div className="container max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl mb-6 shadow-2xl backdrop-blur-sm border border-white/20">
            <IconComponent className="h-10 w-10 text-red-800" />
          </div>
          <h1
            className="text-5xl font-bold mb-4 leading-tight 
               bg-gradient-to-r from-yellow-200 via-red-200 to-yellow-200 
               bg-clip-text text-transparent"
          >
            Nền tảng lý luận về Nhà nước xã hội chủ nghĩa
          </h1>
          <p className="text-lg text-red-100/80 max-w-3xl mx-auto leading-relaxed">
            Khái niệm, bản chất, chức năng, đặc trưng và quá trình phát triển
            tại Việt Nam
          </p>
        </div>

        {/* Progress and Navigation */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <Button
              onClick={handlePrevious}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 backdrop-blur-sm"
              variant="outline"
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="hidden sm:inline">Trước</span>
            </Button>

            <div className="text-center">
              <div className="text-white/80 text-sm mb-1">
                Phần {current + 1} / {total}
              </div>
              <div className="w-64 bg-white/20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-white/80 to-white/60 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>

            <Button
              onClick={handleNext}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 backdrop-blur-sm"
              variant="outline"
            >
              <span className="hidden sm:inline">Tiếp</span>
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white/95 backdrop-blur-lg border-white/20 shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 transform">
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-8">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${
                  section.color === "blue"
                    ? "from-blue-500 to-indigo-600"
                    : section.color === "yellow"
                    ? "from-yellow-500 to-orange-600"
                    : section.color === "purple"
                    ? "from-purple-500 to-violet-600"
                    : section.color === "cyan"
                    ? "from-cyan-500 to-blue-600"
                    : section.color === "pink"
                    ? "from-pink-500 to-rose-600"
                    : section.color === "indigo"
                    ? "from-indigo-500 to-purple-600"
                    : section.color === "emerald"
                    ? "from-emerald-500 to-green-600"
                    : section.color === "amber"
                    ? "from-amber-500 to-yellow-600"
                    : "from-blue-500 to-indigo-600"
                } rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <IconComponent className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
                {section.title}
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">{section.content}</div>
          </div>
        </Card>

        {/* Section Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {sections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current
                  ? "bg-white shadow-lg scale-125"
                  : "bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* Reference */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
            <Info className="h-5 w-5 text-white/80 flex-shrink-0" />
            <span className="text-white/90 font-medium text-sm md:text-base">
              <strong>Tài liệu tham khảo:</strong> Giáo trình học phần Chủ nghĩa
              xã hội khoa học (K) Tr 67 - Tr 144
            </span>
          </div>
        </div>

        {/* Quick Navigation Menu */}
        <div className="mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg">
          <h3 className="text-white font-bold text-lg mb-4 text-center">
            Mục lục nhanh
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {sections.map((sec, index) => (
              <button
                key={sec.id}
                onClick={() => setCurrent(index)}
                className={`text-left p-3 rounded-lg transition-all duration-200 ${
                  index === current
                    ? "bg-white/20 text-white shadow-lg"
                    : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                      index === current ? "bg-white/30" : "bg-white/10"
                    }`}
                  >
                    <sec.icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium line-clamp-2">
                    {sec.title}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MacLeninConcept;
