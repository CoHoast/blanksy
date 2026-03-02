-- Blanksy Database Schema
-- Run this in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Designs table
CREATE TABLE designs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  
  -- Categorization
  category VARCHAR(100),
  style VARCHAR(100),
  room_type VARCHAR(100),
  tags TEXT[],
  colors TEXT[],
  
  -- Files
  preview_url VARCHAR(500),
  thumbnail_url VARCHAR(500),
  file_url VARCHAR(500),
  
  -- Pricing
  price_digital DECIMAL(10,2) DEFAULT 12.99,
  
  -- POD Integration
  printful_sync_product_id VARCHAR(100),
  
  -- Stats
  downloads_count INTEGER DEFAULT 0,
  views_count INTEGER DEFAULT 0,
  
  -- Status
  is_active BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Users table (synced with Clerk)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  clerk_id VARCHAR(255) UNIQUE NOT NULL,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  
  -- Subscription
  subscription_tier VARCHAR(50), -- null, starter, pro, unlimited
  subscription_status VARCHAR(50), -- active, canceled, past_due
  stripe_customer_id VARCHAR(255),
  stripe_subscription_id VARCHAR(255),
  
  -- Usage tracking
  downloads_this_period INTEGER DEFAULT 0,
  period_reset_at TIMESTAMP WITH TIME ZONE,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  
  order_type VARCHAR(50) NOT NULL, -- digital, print, bundle
  status VARCHAR(50) DEFAULT 'pending', -- pending, paid, processing, shipped, delivered, refunded
  
  -- Payment
  amount DECIMAL(10,2) NOT NULL,
  stripe_payment_intent_id VARCHAR(255),
  
  -- For print orders
  printful_order_id VARCHAR(255),
  shipping_address JSONB,
  tracking_number VARCHAR(255),
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  design_id UUID REFERENCES designs(id),
  
  item_type VARCHAR(50), -- digital, print_small, print_medium, print_large, canvas
  quantity INTEGER DEFAULT 1,
  unit_price DECIMAL(10,2),
  
  -- Size/medium for prints
  size VARCHAR(50),
  medium VARCHAR(50),
  
  -- For digital downloads
  download_url VARCHAR(500),
  download_expires_at TIMESTAMP WITH TIME ZONE,
  downloaded_at TIMESTAMP WITH TIME ZONE
);

-- Downloads table (tracks all downloads)
CREATE TABLE downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  design_id UUID REFERENCES designs(id),
  order_id UUID REFERENCES orders(id),
  
  source VARCHAR(50), -- purchase, subscription
  
  downloaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Favorites table
CREATE TABLE favorites (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  design_id UUID REFERENCES designs(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, design_id)
);

-- Indexes for performance
CREATE INDEX idx_designs_category ON designs(category);
CREATE INDEX idx_designs_style ON designs(style);
CREATE INDEX idx_designs_active ON designs(is_active);
CREATE INDEX idx_designs_featured ON designs(is_featured);
CREATE INDEX idx_designs_slug ON designs(slug);
CREATE INDEX idx_users_clerk_id ON users(clerk_id);
CREATE INDEX idx_orders_user_id ON orders(user_id);
CREATE INDEX idx_downloads_user_id ON downloads(user_id);
CREATE INDEX idx_favorites_user_id ON favorites(user_id);

-- Updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply trigger to tables
CREATE TRIGGER update_designs_updated_at
  BEFORE UPDATE ON designs
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at
  BEFORE UPDATE ON orders
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
ALTER TABLE favorites ENABLE ROW LEVEL SECURITY;

-- Policies (public can read active designs)
CREATE POLICY "Public can view active designs" ON designs
  FOR SELECT USING (is_active = true);

-- Users can only see their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT USING (auth.uid()::text = clerk_id);

CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text));

CREATE POLICY "Users can view own downloads" ON downloads
  FOR SELECT USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text));

CREATE POLICY "Users can manage own favorites" ON favorites
  FOR ALL USING (user_id IN (SELECT id FROM users WHERE clerk_id = auth.uid()::text));
