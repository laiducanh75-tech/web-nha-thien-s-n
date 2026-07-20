export interface ShipmentStep {
  title: string;
  description: string;
  date: string;
  time?: string;
  status: 'completed' | 'current' | 'upcoming';
  location: string;
}

export interface Shipment {
  id: string;
  type: 'Đường biển' | 'Đường bộ' | 'Hàng không' | 'Kho bãi';
  origin: string;
  destination: string;
  sender: string;
  receiver: string;
  status: string;
  statusPercent: number; // 0 to 100
  estimatedDelivery: string;
  carrierName?: string;
  containerId?: string;
  weight: string;
  volume: string;
  steps: ShipmentStep[];
}

export interface ContactRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  cargoType: string;
  origin: string;
  destination: string;
  message: string;
  submittedAt: string;
  status: 'Đang chờ' | 'Đã tiếp nhận' | 'Đã tư vấn';
}
