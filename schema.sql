-- Supabase Database Schema for Golf Charity Subscription Platform

-- 1. Users Table (Extends Supabase Auth)
CREATE TABLE public.users (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  role TEXT DEFAULT 'subscriber' CHECK (role IN ('public', 'subscriber', 'admin')),
  full_name TEXT,
  email TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT,
  subscription_status TEXT DEFAULT 'inactive' CHECK (subscription_status IN ('active', 'inactive', 'past_due', 'canceled')),
  subscription_plan TEXT CHECK (subscription_plan IN ('monthly', 'yearly', 'none')),
  selected_charity_id UUID,
  charity_percentage NUMERIC DEFAULT 10.0 CHECK (charity_percentage >= 10.0), -- Minimum 10%
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Charities Table
CREATE TABLE public.charities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT,
  location TEXT,
  featured BOOLEAN DEFAULT false,
  image_url TEXT,
  upcoming_event TEXT,
  total_raised NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Golf Scores Table (Max 5 per user logic handled at application level)
CREATE TABLE public.scores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  score INTEGER NOT NULL CHECK (score >= 1 AND score <= 45),
  date_played DATE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Draws Table
CREATE TABLE public.draws (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  draw_month DATE NOT NULL, -- The month the draw corresponds to
  logic_type TEXT CHECK (logic_type IN ('random', 'algorithmic')),
  total_pool NUMERIC DEFAULT 0,
  jackpot_rollover NUMERIC DEFAULT 0,
  winning_numbers INTEGER[] NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'simulated', 'published')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  published_at TIMESTAMPTZ
);

-- 5. Winners Verification Table
CREATE TABLE public.winners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  draw_id UUID REFERENCES public.draws(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  match_type TEXT NOT NULL CHECK (match_type IN ('5-Match', '4-Match', '3-Match')),
  prize_amount NUMERIC NOT NULL,
  proof_image_url TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'paid')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  verified_at TIMESTAMPTZ,
  verified_by UUID REFERENCES auth.users(id)
);

-- Optional: Triggers to maintain updated_at
CREATE OR REPLACE FUNCTION update_modified_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_modified_time
BEFORE UPDATE ON users
FOR EACH ROW EXECUTE PROCEDURE update_modified_column();
