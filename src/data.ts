import { Shipment, ContactRequest } from './types';

export const INITIAL_SHIPMENTS: Record<string, Shipment> = {
  "NTS123456": {
    id: "NTS123456",
    type: "Đường biển",
    origin: "Cảng Singapore (Singapore)",
    destination: "Cảng Hải Phòng (Hải Phòng, Vietnam)",
    sender: "Singapore Cargo Hub Logistics",
    receiver: "Công ty TNHH Nhập khẩu Việt Nam",
    status: "Đang trên biển (Vận chuyển quốc tế)",
    statusPercent: 65,
    estimatedDelivery: "24/07/2026",
    carrierName: "Siêu tàu container 'Ever Given V-204'",
    containerId: "TCNU8394012 (Container 40ft HC)",
    weight: "18,500 kg",
    volume: "45 CBM",
    steps: [
      {
        title: "Đã nhận yêu cầu vận chuyển",
        description: "Tiếp nhận thông tin lô hàng và chuẩn bị chứng từ hải quan xuất khẩu.",
        date: "14/07/2026",
        time: "09:30",
        status: "completed",
        location: "Singapore Port, Singapore"
      },
      {
        title: "Đóng hàng vào container & Kiểm hóa",
        description: "Hàng hóa được đóng gói pallet tiêu chuẩn, niêm phong kẹp chì hải quan.",
        date: "15/07/2026",
        time: "14:00",
        status: "completed",
        location: "Kho CFS Singapore"
      },
      {
        title: "Xếp hàng lên tàu mẹ thành công",
        description: "Container được cẩu lên tàu Ever Given để chuẩn bị hành trình đường biển.",
        date: "16/07/2026",
        time: "18:15",
        status: "completed",
        location: "Cảng quốc tế Singapore"
      },
      {
        title: "Tàu rời cảng hải trình về Việt Nam",
        description: "Tàu đang di chuyển ổn định trên Biển Đông với vận tốc 18 hải lý/giờ.",
        date: "17/07/2026",
        time: "06:00",
        status: "current",
        location: "Khu vực Biển Đông"
      },
      {
        title: "Cập cảng Hải Phòng & Khai báo Hải quan",
        description: "Tiến hành nộp chứng từ và thông quan hàng hóa nhập khẩu.",
        date: "22/07/2026",
        time: "Dự kiến",
        status: "upcoming",
        location: "Cảng Hải Phòng, Việt Nam"
      },
      {
        title: "Vận chuyển chặng cuối & Bàn giao",
        description: "Xe container giao hàng tận nơi tại địa chỉ của khách hàng.",
        date: "24/07/2026",
        time: "Dự kiến",
        status: "upcoming",
        location: "KCN VSIP, Hải Phòng"
      }
    ]
  },
  "NTS789012": {
    id: "NTS789012",
    type: "Hàng không",
    origin: "Sân bay Narita (NRT, Tokyo, Japan)",
    destination: "Sân bay Tân Sơn Nhất (SGN, TPHCM, Vietnam)",
    sender: "Tokyo Tech Parts Corp",
    receiver: "Trung tâm Bảo hành Linh kiện Sài Gòn",
    status: "Đã giao hàng thành công",
    statusPercent: 100,
    estimatedDelivery: "18/07/2026",
    carrierName: "Chuyến bay chuyên dụng ANA Cargo NH8559",
    containerId: "AWB-74920491 (Lô hàng linh kiện điện tử nhạy cảm)",
    weight: "320 kg",
    volume: "2.1 CBM",
    steps: [
      {
        title: "Nhận hàng tại sân bay",
        description: "Tiếp nhận lô hàng linh kiện điện tử nguyên đai nguyên kiện.",
        date: "16/07/2026",
        time: "10:00",
        status: "completed",
        location: "Tokyo Narita Airport"
      },
      {
        title: "Hoàn tất kiểm hóa an ninh bay",
        description: "Kiểm tra X-Ray an ninh hàng không nghiêm ngặt và dán nhãn thông hành.",
        date: "16/07/2026",
        time: "15:30",
        status: "completed",
        location: "NRT Cargo Terminal"
      },
      {
        title: "Cất cánh hướng về Việt Nam",
        description: "Chuyến bay NH8559 rời Tokyo đúng giờ bay dự kiến.",
        date: "17/07/2026",
        time: "01:20",
        status: "completed",
        location: "Không phận quốc tế"
      },
      {
        title: "Hạ cánh & Thông quan nhập khẩu",
        description: "Đại lý Nhất Thiên Sơn thực hiện thông quan nhanh trong 4 giờ.",
        date: "17/07/2026",
        time: "08:45",
        status: "completed",
        location: "Sân bay Tân Sơn Nhất, TPHCM"
      },
      {
        title: "Bàn giao khách hàng hoàn tất",
        description: "Hàng hóa được ký nhận trong tình trạng nguyên vẹn, đầy đủ CO/CQ.",
        date: "18/07/2026",
        time: "14:30",
        status: "completed",
        location: "Thới An, Quận 12, TPHCM"
      }
    ]
  },
  "NTS345678": {
    id: "NTS345678",
    type: "Đường bộ",
    origin: "Cảng Chùa Vẽ (Hải Phòng, Vietnam)",
    destination: "Khu công nghiệp Sóng Thần (Bình Dương, Vietnam)",
    sender: "Công ty Thép Việt - Nhật",
    receiver: "Tổng kho Logistics Sóng Thần",
    status: "Đang trung chuyển nội địa đường bộ",
    statusPercent: 80,
    estimatedDelivery: "20/07/2026",
    carrierName: "Xe đầu kéo NTS-Truck 29C-884.22",
    containerId: "CNT-8201948 (Sắt thép cuộn công nghiệp)",
    weight: "12,400 kg",
    volume: "32 CBM",
    steps: [
      {
        title: "Nhận bàn giao rơ-moóc",
        description: "Rút hàng khỏi tàu nội địa và móc nối xe đầu kéo chuyên dụng.",
        date: "17/07/2026",
        time: "11:00",
        status: "completed",
        location: "Cảng Hải Phòng"
      },
      {
        title: "Xuất phát hành trình Nam Tiến",
        description: "Xe container di chuyển dọc tuyến đường huyết mạch Quốc Lộ 1A.",
        date: "17/07/2026",
        time: "16:30",
        status: "completed",
        location: "Tỉnh Hải Dương"
      },
      {
        title: "Dừng trạm trung chuyển Miền Trung",
        description: "Kiểm tra kỹ thuật an toàn lốp, động cơ và đổi tài xế để đảm bảo tiến độ.",
        date: "18/07/2026",
        time: "13:15",
        status: "completed",
        location: "Liên Chiểu, Đà Nẵng"
      },
      {
        title: "Đang di chuyển trên QL1A Nam Trung Bộ",
        description: "Lô hàng đã đi qua địa phận Khánh Hòa, di chuyển ổn định đúng lộ trình.",
        date: "19/07/2026",
        time: "08:00",
        status: "current",
        location: "Phan Thiết, Bình Thuận"
      },
      {
        title: "Dự kiến bàn giao tại nhà máy",
        description: "Hạ container, kiểm đếm số lượng sắt cuộn và bàn giao biên bản.",
        date: "20/07/2026",
        time: "17:00",
        status: "upcoming",
        location: "KCN Sóng Thần, Bình Dương"
      }
    ]
  }
};

export const SERVICES_DATA = [
  {
    id: "sea",
    title: "Đường biển",
    icon: "Ship",
    desc: "Vận tải container quốc tế với mạng lưới cảng toàn cầu và lịch trình cố định.",
    details: "Nhất Thiên Sơn cung cấp dịch vụ gom hàng lẻ (LCL), hàng nguyên container (FCL), tàu rời và vận chuyển đa phương thức kết hợp từ các cảng lớn trên thế giới về Việt Nam và ngược lại. Chúng tôi là đối tác trực tiếp của nhiều hãng tàu lớn toàn cầu như ONE, Maersk, Cosco, Evergreen."
  },
  {
    id: "road",
    title: "Đường bộ",
    icon: "Truck",
    desc: "Đội xe tải hiện đại, linh hoạt vận chuyển nội địa và xuyên biên giới nhanh chóng.",
    details: "Đội xe container, xe tải trung chuyển hiện đại phủ khắp 63 tỉnh thành Việt Nam, kết nối vận tải xuyên biên giới sang Lào, Campuchia, Trung Quốc. Dịch vụ phân phối chặng cuối tận nơi, quản lý hành trình GPS thời gian thực, đảm bảo an toàn tuyệt đối."
  },
  {
    id: "air",
    title: "Hàng không",
    icon: "Plane",
    desc: "Giải pháp vận chuyển hàng không ưu tiên dành cho các mặt hàng cần gấp, giá trị cao.",
    details: "Đối tác chiến lược của các hãng hàng không hàng đầu (Vietnam Airlines, Singapore Airlines, ANA Cargo). Thủ tục hải quan sân bay thần tốc tại Tân Sơn Nhất, Nội Bài, Đà Nẵng. Thích hợp cho thiết bị y tế, linh kiện điện tử cao cấp, hàng tươi sống."
  },
  {
    id: "warehouse",
    title: "Kho bãi",
    icon: "Warehouse",
    desc: "Hệ thống kho đạt chuẩn quốc tế, quản lý tồn kho thông minh và tối ưu hóa chi phí.",
    details: "Hệ thống kho bãi hiện đại đặt tại các vị trí chiến lược (Quận 12 TPHCM, Hải Phòng, Bình Dương). Trang bị hệ thống quản lý WMS thông minh, phân luồng hàng hóa tối ưu, dịch vụ đóng gói, dán nhãn, lưu trữ ngắn/dài hạn giá thành ưu đãi."
  }
];

export const CORE_VALUES = [
  {
    title: "Tin Cậy (Trust)",
    desc: "Xây dựng quan hệ bền vững dựa trên sự trung thực và minh bạch tuyệt đối.",
    icon: "Shield"
  },
  {
    title: "Tốc Độ (Speed)",
    desc: "Tối ưu hóa quy trình để đảm bảo hàng hóa luôn chuyển nhanh nhất có thể.",
    icon: "Zap"
  },
  {
    title: "Sáng Tạo (Innovation)",
    desc: "Luôn tìm kiếm phương thức mới để vượt qua mọi rào cản logistics.",
    icon: "Lightbulb"
  },
  {
    title: "Trách Nhiệm (Responsibility)",
    desc: "Cam kết với sự an toàn hàng hóa và trách nhiệm với cộng đồng.",
    icon: "Users"
  }
];

export const PROJECTS_DATA = [
  {
    title: "Kiểm tra an ninh nghiêm ngặt",
    subtitle: "TIÊU CHUẨN QUỐC TẾ",
    desc: "An toàn là ưu tiên hàng đầu tại Nhất Thiên Sơn. Mọi lô hàng đều trải qua quy trình kiểm soát đa lớp, đảm bảo tuân thủ các quy định an ninh vận tải quốc tế khắt khe nhất.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Quy trình đóng hàng chuyên nghiệp",
    subtitle: "Tối ưu hóa không gian",
    desc: "Chúng tôi tận dụng tối đa diện tích container thông qua các thuật toán sắp xếp thông minh, giúp giảm thiểu rủi ro va đập và tiết kiệm chi phí cho khách hàng.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Vận tải Full-Container (FCL)",
    subtitle: "HIỆU QUẢ VẬN CHUYỂN",
    desc: "Giải pháp vận chuyển nguyên container cho các lô hàng lớn, đảm bảo tính riêng tư và thời gian vận chuyển nhanh nhất trong mạng lưới toàn cầu.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Quản lý Pallet & Hàng hóa",
    subtitle: "ỨNG DỤNG CÔNG NGHỆ",
    desc: "Hệ thống quản lý kho bãi (WMS) tiên tiến cho phép theo dõi thời gian thực từng kiện hàng trên pallet. Mỗi pallet được mã hóa và định vị chính xác trong suốt hành trình.",
    img: "https://images.unsplash.com/photo-1553413719-8758712747d5?auto=format&fit=crop&q=80&w=800",
    tags: ["Real-time Tracking", "QR Scanning", "Inventory Control"]
  }
];
