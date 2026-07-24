import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'vi' | 'en';

export interface Translations {
  // Navigation & Header
  navHome: string;
  navAbout: string;
  navProjects: string;
  requestQuote: string;
  hotlineLabel: string;
  addressLabel: string;
  callNow: string;
  chatZalo: string;
  webmail: string;
  companyFullName: string;
  companyShortName: string;
  tagline: string;

  // Hero Section
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  trackingTab: string;
  trackingPlaceholder: string;
  trackBtn: string;
  quickTrackLabel: string;
  exploreServicesBtn: string;
  filterSea: string;
  filterAir: string;
  filterInland: string;

  // Core Advantages / Stats
  statYears: string;
  statYearsLabel: string;
  statContainers: string;
  statContainersLabel: string;
  statSafety: string;
  statSafetyLabel: string;
  statCoverage: string;
  statCoverageLabel: string;

  // Services Section (Danh mục nghiệp vụ)
  servicesBadge: string;
  servicesTitle: string;
  servicesSubtitle: string;
  seaFreightTitle: string;
  seaFreightDesc: string;
  airFreightTitle: string;
  airFreightDesc: string;
  truckingTitle: string;
  truckingDesc: string;
  warehouseTitle: string;
  warehouseDesc: string;
  viewDetailBtn: string;

  // Mission & Vision Section
  missionBadge: string;
  visionBadge: string;
  ourMissionTitle: string;
  ourVisionTitle: string;
  missionP1: string;
  missionP2: string;
  missionP3: string;
  missionP4: string;
  visionP1: string;
  visionP2: string;
  visionP3: string;

  // Contact / Quote Form
  quoteTitle: string;
  quoteSubtitle: string;
  fullNameLabel: string;
  phoneLabel: string;
  emailLabel: string;
  cargoTypeLabel: string;
  originLabel: string;
  destLabel: string;
  messageLabel: string;
  submitQuoteBtn: string;
  submittingText: string;
  quoteSuccessMsg: string;

  // Contact info right column
  contactInfoTitle: string;
  addressTitle: string;
  phoneTitle: string;
  emailTitle: string;

  // Partners (Khách hàng và đối tác)
  partnersTitle: string;
  partnersSubtitle: string;

  // About View (Về chúng tôi & Câu chuyện)
  aboutHeroTitle: string;
  aboutHeroDesc: string;
  ourStoryTitle: string;
  ourStoryHeading: string;
  ourStoryP1: string;
  ourStoryP2: string;
  ourStoryP3: string;
  globalPartnersLabel: string;
  globalPartnersDesc: string;
  establishedYearLabel: string;
  establishedYearDesc: string;
  ntsTeamBadge: string;
  ntsTeamDesc: string;
  coreValuesHeading: string;
  coreValuesSubtitle: string;
  readyToConnect: string;
  readyToConnectDesc: string;
  contactConsultation: string;

  // Core values list
  trustTitle: string;
  trustDesc: string;
  speedTitle: string;
  speedDesc: string;
  innovationTitle: string;
  innovationDesc: string;
  responsibilityTitle: string;
  responsibilityDesc: string;

  // Projects View
  projectsHeroTitle: string;
  projectsHeroDesc: string;
  allProjectsTab: string;

  // Footer
  footerDesc: string;
  footerServicesTitle: string;
  footerLinksTitle: string;
  footerNewsletterTitle: string;
  footerNewsletterDesc: string;
  footerSubscribeBtn: string;
  footerSubscribeSuccess: string;
  aboutUsLink: string;
  projectsLink: string;
  ratesLink: string;
  privacyLink: string;
  termsLink: string;
  copyright: string;
}

export const translations: Record<Language, Translations> = {
  vi: {
    // Navigation & Header
    navHome: 'Trang chủ',
    navAbout: 'Giới thiệu',
    navProjects: 'Dự án tiêu biểu',
    requestQuote: 'Yêu cầu báo giá',
    hotlineLabel: 'Hotline: 0888.447.239',
    addressLabel: '138/10 Khu Phố 57, P. Thới An, Q.12, TPHCM',
    callNow: 'Gọi ngay',
    chatZalo: 'Chat Zalo',
    webmail: 'Webmail',
    companyFullName: 'Nhất Thiên Sơn Sài Gòn',
    companyShortName: 'Logistics',
    tagline: 'Giải pháp vận tải đa phương thức an toàn & tối ưu',

    // Hero Section
    heroBadge: 'NHẤT THIÊN SƠN SÀI GÒN LOGISTICS • VẬN TẢI QUỐC TẾ & NỘI ĐỊA',
    heroTitle: 'GIẢI PHÁP VẬN TẢI ĐA PHƯƠNG THỨC TOÀN DIỆN',
    heroSubtitle: 'Kết nối chuỗi cung ứng toàn cầu chuyên nghiệp. Vận tải đường biển, hàng không, xe đầu kéo container nội địa an toàn, đúng hẹn và tối ưu cước phí.',
    trackingTab: 'Tra cứu mã vận đơn (NTS Tracking)',
    trackingPlaceholder: 'Nhập mã vận đơn (VD: NTS123456, NTS789012)...',
    trackBtn: 'Tra cứu ngay',
    quickTrackLabel: 'Mã mẫu:',
    exploreServicesBtn: 'Khám phá dịch vụ',
    filterSea: 'Đường Biển',
    filterAir: 'Hàng Không',
    filterInland: 'Đường Bộ',

    // Core Advantages / Stats
    statYears: '10+',
    statYearsLabel: 'Năm kinh nghiệm vươn tầm quốc tế',
    statContainers: '50.000+',
    statContainersLabel: 'TEU Container vận chuyển mỗi năm',
    statSafety: '99.8%',
    statSafetyLabel: 'Tỷ lệ đơn hàng an toàn & đúng giờ',
    statCoverage: '120+',
    statCoverageLabel: 'Tuyến đường kết nối cảng biển toàn cầu',

    // Services Section (Danh mục nghiệp vụ)
    servicesBadge: 'DANH MỤC NGHIỆP VỤ',
    servicesTitle: 'DỊCH VỤ VẬN TẢI CHUYÊN NGHIỆP',
    servicesSubtitle: 'Cung cấp hệ sinh thái vận tải đa dạng đáp ứng mọi nhu cầu xuất nhập khẩu và luân chuyển hàng hóa.',
    seaFreightTitle: 'Vận Tải Đường Biển (Sea Freight)',
    seaFreightDesc: 'Dịch vụ vận chuyển nguyên container (FCL) và hàng lẻ (LCL) đi các cảng biển lớn trên thế giới với giá cước cạnh tranh nhất.',
    airFreightTitle: 'Vận Tải Hàng Không (Air Freight)',
    airFreightDesc: 'Dịch vụ chuyển phát nhanh đường hàng không quốc tế an toàn, thời gian linh hoạt, đáp ứng tối đa hàng hóa tiến độ gấp.',
    truckingTitle: 'Xe Đầu Kéo Container & Nội Địa',
    truckingDesc: 'Đội xe xe đầu kéo container chuyên dụng hùng hậu, vận chuyển hàng hóa nội địa nhanh chóng, an toàn và thông suốt 24/7.',
    warehouseTitle: 'Dịch Vụ Kho Bãi & Hải Quan',
    warehouseDesc: 'Hệ thống kho bãi hiện đại, hỗ trợ hoàn tất thủ tục hải quan, kê khai thông quan hàng hóa xuất nhập khẩu trọn gói.',
    viewDetailBtn: 'Xem chi tiết dịch vụ',

    // Mission & Vision Section
    missionBadge: 'Cam kết hành động',
    visionBadge: 'Tương lai bứt phá',
    ourMissionTitle: 'SỨ MỆNH',
    ourVisionTitle: 'TẦM NHÌN',
    missionP1: 'Sứ mệnh của Nhất Thiên Sơn Sài Gòn là mang đến cho khách hàng những giải pháp logistics và vận tải toàn diện, an toàn và tối ưu chi phí, góp phần nâng cao năng lực cạnh tranh cho doanh nghiệp Việt trên thị trường quốc tế.',
    missionP2: 'Chúng tôi không chỉ là đơn vị vận tải đơn thuần, mà là người đồng hành đáng tin cậy giúp kết nối thông suốt mọi mắt xích trong chuỗi cung ứng toàn cầu từ vận chuyển đa phương thức đến dịch vụ kho bãi thông minh.',
    missionP3: 'Với đội ngũ chuyên gia tận tâm, am hiểu sâu sắc quy trình vận hành và giao nhận, chúng tôi cam kết bảo đảm an toàn tối đa cho mọi chuyến hàng và luôn đúng hẹn trong mọi tình huống.',
    missionP4: 'Chúng tôi lấy sự hài lòng và thành công của khách hàng làm thước đo giá trị cốt lõi, không ngừng cải tiến công nghệ và tối ưu quy trình để đem lại trải nghiệm dịch vụ logistics chất lượng cao nhất.',
    visionP1: 'Tại Nhất Thiên Sơn Sài Gòn, chúng tôi hướng tới mục tiêu trở thành một thương hiệu logistics hàng đầu, tiên phong trong việc chuyển đổi số và ứng dụng các giải pháp chuỗi cung ứng xanh, bền vững tại Việt Nam.',
    visionP2: 'Chúng tôi liên tục hoàn thiện và mở rộng mạng lưới liên kết với các đối tác vận tải hàng không, hàng hải và đường bộ hàng đầu thế giới để gia tăng năng lực tiếp cận thị trường và mở ra những tuyến đường kết nối trực tiếp hiệu quả hơn.',
    visionP3: 'Với phương châm "Uy tín – Chuyên nghiệp – Chất lượng – Hiệu quả", Nhất Thiên Sơn Sài Gòn mong muốn trở thành cánh tay nối dài bền vững của các nhà sản xuất, xuất nhập khẩu và phân phối lớn nhỏ trong và ngoài nước.',

    // Contact / Quote Form
    quoteTitle: 'YÊU CẦU BÁO GIÁ CƯỚC VẬN CHUYỂN',
    quoteSubtitle: 'Điền thông tin lô hàng của bạn để nhận báo giá ưu đãi tốt nhất từ chuyên viên logistics trong vòng 15 phút.',
    fullNameLabel: 'Họ và tên người liên hệ *',
    phoneLabel: 'Số điện thoại *',
    emailLabel: 'Địa chỉ Email *',
    cargoTypeLabel: 'Hình thức vận chuyển *',
    originLabel: 'Điểm đi (Nơi gửi hàng) *',
    destLabel: 'Điểm đến (Nơi nhận hàng) *',
    messageLabel: 'Ghi chú lô hàng (Trọng lượng, CBM, loại container...)',
    submitQuoteBtn: 'Gửi yêu cầu báo giá ngay',
    submittingText: 'Đang gửi yêu cầu...',
    quoteSuccessMsg: '✓ Yêu cầu báo giá của bạn đã được gửi thành công! Chuyên viên NTS Logistics sẽ liên hệ lại trong ít phút.',

    // Contact Info right column
    contactInfoTitle: 'Thông tin liên lạc',
    addressTitle: 'Địa chỉ trụ sở',
    phoneTitle: 'Điện thoại hỗ trợ',
    emailTitle: 'Hòm thư điện tử',

    // Partners (Khách hàng và đối tác)
    partnersTitle: 'KHÁCH HÀNG VÀ ĐỐI TÁC',
    partnersSubtitle: 'Đồng hành cùng các tập đoàn Vận tải & Logistics hàng đầu thế giới và Việt Nam',

    // About View
    aboutHeroTitle: 'VỀ NHẤT THIÊN SƠN SÀI GÒN LOGISTICS',
    aboutHeroDesc: 'Hành trình hơn một thập kỷ khẳng định thương hiệu logistics uy tín hàng đầu tại Việt Nam và khu vực.',
    ourStoryTitle: 'Câu Chuyện Của Chúng Tôi',
    ourStoryHeading: 'Hành Trình Kiến Tạo Sự Tin Cậy',
    ourStoryP1: 'Bắt đầu từ khát vọng đơn giản là kết nối các doanh nghiệp trong nước với thị trường quốc tế, Nhất Thiên Sơn Sài Gòn đã phát triển thành một đơn vị vận chuyển đa phương thức hàng đầu.',
    ourStoryP2: 'Chúng tôi hiểu rằng mỗi kiện hàng không chỉ là hàng hóa, mà là niềm tin của khách hàng gửi gắm. Mạng lưới vận chuyển thông minh, linh hoạt và luôn đúng hẹn của NTS đáp ứng mọi thách thức thương mại toàn cầu.',
    ourStoryP3: 'Mọi quy trình từ thu gom, kiểm tra an ninh, chứng từ hải quan đến phân phối chặng cuối đều được theo dõi chặt chẽ bằng phần mềm tối tân, nâng cao hiệu quả khai thác và tiết kiệm chi phí cho quý doanh nghiệp.',
    globalPartnersLabel: 'Đối tác toàn cầu',
    globalPartnersDesc: 'Kết nối các hải cảng, sân bay và hãng tàu hàng đầu thế giới.',
    establishedYearLabel: 'Năm thành lập',
    establishedYearDesc: 'Cột mốc khởi đầu hành trình logistics thế hệ mới, hiện đại và tin cậy.',
    ntsTeamBadge: 'Đội ngũ NTS',
    ntsTeamDesc: 'Tâm huyết - Chuyên nghiệp - Minh bạch',
    coreValuesHeading: 'Giá Trị Cốt Lõi',
    coreValuesSubtitle: 'Những nguyên tắc định hướng mọi hành động và quyết định của chúng tôi tại Nhất Thiên Sơn Sài Gòn.',
    readyToConnect: 'BẠN ĐÃ SẴN SÀNG KẾT NỐI VỚI TOÀN CẦU?',
    readyToConnectDesc: 'Hãy để chúng tôi giúp bạn tối ưu hóa chuỗi cung ứng và đưa hàng hóa đến mọi nơi trên thế giới một cách an toàn và nhanh chóng nhất.',
    contactConsultation: 'Liên hệ tư vấn',

    // Core values
    trustTitle: 'Tin Cậy (Trust)',
    trustDesc: 'Xây dựng quan hệ bền vững dựa trên sự trung thực và minh bạch tuyệt đối.',
    speedTitle: 'Tốc Độ (Speed)',
    speedDesc: 'Tối ưu hóa quy trình để đảm bảo hàng hóa luôn chuyển nhanh nhất có thể.',
    innovationTitle: 'Sáng Tạo (Innovation)',
    innovationDesc: 'Luôn tìm kiếm phương thức mới để vượt qua mọi rào cản logistics.',
    responsibilityTitle: 'Trách Nhiệm (Responsibility)',
    responsibilityDesc: 'Cam kết với sự an toàn hàng hóa và trách nhiệm với cộng đồng.',

    // Projects View
    projectsHeroTitle: 'DỰ ÁN VẬN TẢI TIÊU BIỂU',
    projectsHeroDesc: 'Những hành trình vận chuyển quy mô lớn được Nhất Thiên Sơn Sài Gòn Logistics thực hiện thành công.',
    allProjectsTab: 'Tất cả dự án',

    // Footer
    footerDesc: 'Cung cấp giải pháp vận tải đa phương thức với hiệu quả cao nhất cho doanh nghiệp của bạn. Kết nối thị trường nội địa với chuỗi cung ứng toàn cầu an toàn và tối ưu chi phí.',
    footerServicesTitle: 'Dịch vụ',
    footerLinksTitle: 'Liên kết nhanh',
    footerNewsletterTitle: 'Bản tin Logistics',
    footerNewsletterDesc: 'Đăng ký để nhận tin tức logistics mới nhất và các ưu đãi cước vận chuyển định kỳ từ chúng tôi.',
    footerSubscribeBtn: 'Đăng ký',
    footerSubscribeSuccess: '✓ Đăng ký thành công! Cảm ơn bạn.',
    aboutUsLink: 'Về chúng tôi',
    projectsLink: 'Dự án tiêu biểu',
    ratesLink: 'Bảng giá cước vận chuyển',
    privacyLink: 'Chính sách bảo mật',
    termsLink: 'Điều khoản dịch vụ',
    copyright: '© 2026 Nhất Thiên Sơn Sài Gòn (Saigon Logistics). Tất cả quyền được bảo lưu.'
  },
  en: {
    // Navigation & Header
    navHome: 'Home',
    navAbout: 'About Us',
    navProjects: 'Projects',
    requestQuote: 'Get a Quote',
    hotlineLabel: 'Hotline: (+84) 888.447.239',
    addressLabel: '138/10 KP 57, Thoi An Ward, Dist 12, HCMC',
    callNow: 'Call Now',
    chatZalo: 'Chat Zalo',
    webmail: 'Webmail',
    companyFullName: 'Nhat Thien Son Sai Gon',
    companyShortName: 'Logistics',
    tagline: 'Safe & Efficient Multimodal Transport Solutions',

    // Hero Section
    heroBadge: 'NHAT THIEN SON SAI GON LOGISTICS • INTERNATIONAL & DOMESTIC TRANSPORT',
    heroTitle: 'COMPREHENSIVE MULTIMODAL TRANSPORT SOLUTIONS',
    heroSubtitle: 'Connecting global supply chains with high reliability. Sea freight, air freight, and domestic container trucking services delivered safely, on time, and at optimized costs.',
    trackingTab: 'Track Shipment (NTS Tracking)',
    trackingPlaceholder: 'Enter tracking code (e.g., NTS123456, NTS789012)...',
    trackBtn: 'Track Now',
    quickTrackLabel: 'Sample Codes:',
    exploreServicesBtn: 'Explore Services',
    filterSea: 'Sea Freight',
    filterAir: 'Air Freight',
    filterInland: 'Inland Trucking',

    // Core Advantages / Stats
    statYears: '10+',
    statYearsLabel: 'Years of International Logistics Excellence',
    statContainers: '50,000+',
    statContainersLabel: 'TEUs Transported Annually',
    statSafety: '99.8%',
    statSafetyLabel: 'On-time & Safe Delivery Rate',
    statCoverage: '120+',
    statCoverageLabel: 'Global Port Connections',

    // Services Section (Danh mục nghiệp vụ)
    servicesBadge: 'CORE BUSINESS SERVICES',
    servicesTitle: 'PROFESSIONAL TRANSPORT SERVICES',
    servicesSubtitle: 'Providing a comprehensive transport ecosystem meeting all import, export, and freight distribution needs.',
    seaFreightTitle: 'Sea Freight Services',
    seaFreightDesc: 'Full Container Load (FCL) and Less than Container Load (LCL) shipping to major ports worldwide with highly competitive ocean freight rates.',
    airFreightTitle: 'Air Freight Services',
    airFreightDesc: 'Express international air cargo transportation with flexible scheduling, designed for time-sensitive high-value shipments.',
    truckingTitle: 'Container Trucking & Inland Freight',
    truckingDesc: 'Our dedicated fleet of heavy container tractors delivers fast, secure, and seamless domestic freight transportation 24/7.',
    warehouseTitle: 'Warehousing & Customs Clearance',
    warehouseDesc: 'Modern warehousing solutions paired with full customs brokerage services for streamlined import-export clearance.',
    viewDetailBtn: 'View Service Details',

    // Mission & Vision Section
    missionBadge: 'Action Commitment',
    visionBadge: 'Future Breakthrough',
    ourMissionTitle: 'OUR MISSION',
    ourVisionTitle: 'OUR VISION',
    missionP1: 'Our mission at Nhat Thien Son Sai Gon is to provide customers with end-to-end, safe, and cost-optimized logistics solutions, enhancing the competitiveness of businesses in the international market.',
    missionP2: 'We are more than just a transportation vendor — we are a trusted partner connecting every link in the global supply chain, from multimodal transport to smart warehousing.',
    missionP3: 'With a dedicated team deeply experienced in shipping procedures and customs operations, we guarantee maximum safety and strict punctuality for every cargo movement.',
    missionP4: 'We place customer success and satisfaction at the core of our value system, continuously innovating technology and refining workflows to deliver superior logistics experiences.',
    visionP1: 'At Nhat Thien Son Sai Gon, we aim to become a leading logistics brand, pioneering digital transformation and green, sustainable supply chain solutions in Vietnam and Southeast Asia.',
    visionP2: 'We continuously expand our alliances with top global maritime carriers, air freight providers, and trucking networks to increase market reach and establish direct shipping routes.',
    visionP3: 'Under our guiding principle "Punctuality - Professionalism - Quality - Efficiency", Nhat Thien Son Sai Gon strives to be the sustainable extension for manufacturers and importers worldwide.',

    // Contact / Quote Form
    quoteTitle: 'REQUEST FREIGHT QUOTATION',
    quoteSubtitle: 'Submit your shipment details to receive competitive rate quotes from our logistics specialists within 15 minutes.',
    fullNameLabel: 'Full Name *',
    phoneLabel: 'Phone Number *',
    emailLabel: 'Email Address *',
    cargoTypeLabel: 'Freight Mode *',
    originLabel: 'Origin (Departure) *',
    destLabel: 'Destination (Arrival) *',
    messageLabel: 'Shipment Notes (Weight, CBM, container type...)',
    submitQuoteBtn: 'Submit Quote Request',
    submittingText: 'Sending Request...',
    quoteSuccessMsg: '✓ Your quote request has been submitted successfully! An NTS Logistics specialist will contact you shortly.',

    // Contact Info right column
    contactInfoTitle: 'Contact Information',
    addressTitle: 'Headquarters Address',
    phoneTitle: 'Support Phone',
    emailTitle: 'Email Address',

    // Partners (Khách hàng và đối tác)
    partnersTitle: 'CUSTOMERS & PARTNERS',
    partnersSubtitle: 'Partnering with leading global & Vietnamese maritime lines and logistics corporations',

    // About View
    aboutHeroTitle: 'ABOUT NHAT THIEN SON SAI GON LOGISTICS',
    aboutHeroDesc: 'A decade of building a trusted and prestigious logistics brand in Vietnam and Southeast Asia.',
    ourStoryTitle: 'Our Story',
    ourStoryHeading: 'A Journey of Building Trust',
    ourStoryP1: 'Driven by the vision to connect domestic enterprises with global trade, Nhat Thien Son Sai Gon has grown into a premier multimodal transport provider.',
    ourStoryP2: 'We understand that every shipment carries our clients\' trust. Our intelligent and punctual transport network meets the highest demands of global commerce.',
    ourStoryP3: 'From collection, security inspection, and customs brokerage to final-mile delivery, every step is tracked digitally for maximum efficiency and cost savings.',
    globalPartnersLabel: 'Global Partners',
    globalPartnersDesc: 'Connecting top seaports, airports, and shipping lines globally.',
    establishedYearLabel: 'Established Year',
    establishedYearDesc: 'A key milestone starting a modern, reliable, new-gen logistics journey.',
    ntsTeamBadge: 'NTS Team',
    ntsTeamDesc: 'Dedicated - Professional - Transparent',
    coreValuesHeading: 'Core Values',
    coreValuesSubtitle: 'Principles guiding every action and decision at Nhat Thien Son Sai Gon.',
    readyToConnect: 'READY TO CONNECT GLOBALLY?',
    readyToConnectDesc: 'Let us help you optimize your supply chain and deliver cargo anywhere in the world safely and quickly.',
    contactConsultation: 'Contact Consultation',

    // Core values
    trustTitle: 'Trust',
    trustDesc: 'Building sustainable relationships based on absolute honesty and transparency.',
    speedTitle: 'Speed',
    speedDesc: 'Optimizing workflows to ensure cargo moves as swiftly as possible.',
    innovationTitle: 'Innovation',
    innovationDesc: 'Continuously seeking new methodologies to overcome logistics bottlenecks.',
    responsibilityTitle: 'Responsibility',
    responsibilityDesc: 'Committed to cargo safety and community responsibility.',

    // Projects View
    projectsHeroTitle: 'FEATURED LOGISTICS PROJECTS',
    projectsHeroDesc: 'Key large-scale industrial and commercial shipments successfully executed by Nhat Thien Son Sai Gon Logistics.',
    allProjectsTab: 'All Projects',

    // Footer
    footerDesc: 'Providing multimodal transport solutions with peak efficiency. Seamlessly connecting domestic markets with global supply chains safely and cost-effectively.',
    footerServicesTitle: 'Services',
    footerLinksTitle: 'Quick Links',
    footerNewsletterTitle: 'Logistics Newsletter',
    footerNewsletterDesc: 'Subscribe to receive the latest market updates and exclusive freight promotion alerts.',
    footerSubscribeBtn: 'Subscribe',
    footerSubscribeSuccess: '✓ Subscribed successfully! Thank you.',
    aboutUsLink: 'About Us',
    projectsLink: 'Featured Projects',
    ratesLink: 'Freight Tariff Table',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    copyright: '© 2026 Nhat Thien Son Sai Gon (Saigon Logistics). All rights reserved.'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  const value = {
    language,
    setLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
