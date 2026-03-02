export interface Design {
  id: string;
  title: string;
  slug: string;
  description?: string;
  category?: string;
  style?: string;
  room_type?: string;
  tags?: string[];
  colors?: string[];
  preview_url?: string;
  thumbnail_url?: string;
  file_url?: string;
  price_digital: number;
  printful_sync_product_id?: string;
  downloads_count: number;
  views_count: number;
  is_active: boolean;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  clerk_id: string;
  email: string;
  name?: string;
  subscription_tier?: "starter" | "pro" | "unlimited" | null;
  subscription_status?: "active" | "canceled" | "past_due" | null;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  downloads_this_period: number;
  period_reset_at?: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  order_type: "digital" | "print" | "bundle";
  status: "pending" | "paid" | "processing" | "shipped" | "delivered" | "refunded";
  amount: number;
  stripe_payment_intent_id?: string;
  printful_order_id?: string;
  shipping_address?: ShippingAddress;
  tracking_number?: string;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  id: string;
  order_id: string;
  design_id: string;
  item_type: "digital" | "print_small" | "print_medium" | "print_large" | "canvas";
  quantity: number;
  unit_price: number;
  size?: string;
  medium?: string;
  download_url?: string;
  download_expires_at?: string;
  downloaded_at?: string;
}

export interface Download {
  id: string;
  user_id: string;
  design_id: string;
  order_id?: string;
  source: "purchase" | "subscription";
  downloaded_at: string;
}

export interface ShippingAddress {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface CartItem {
  design: Design;
  item_type: "digital" | "print_small" | "print_medium" | "print_large" | "canvas";
  quantity: number;
  price: number;
}

export interface PricingTier {
  name: string;
  price: number;
  downloads: number | "unlimited";
  features: string[];
  cta: string;
  popular?: boolean;
}
