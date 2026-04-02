<<<<<<< HEAD
# Golf Charity Subscription Platform

**Prepared for: Digital Heroes Selection Process**

A robust, subscription-driven web application combining golf performance tracking, charity fundraising, and a monthly draw-based reward engine. The platform is designed with a modern, emotionally engaging UI/UX focusing entirely on charitable impact rather than traditional golf aesthetics.

## Technology Stack
- **Frontend Framework:** React (Vite / Next.js architecture logic)
- **Styling:** Custom CSS System (Emotion-driven, Glassmorphism, CSS Variables, No Tailwind)
- **Routing:** React Router DOM
- **Backend / Database:** Supabase (PostgreSQL schema + Auth)
- **Icons:** Lucide React

## Local Setup Instructions

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Setup Supabase:**
   - Create a new project in Supabase.
   - Run the provided `schema.sql` file in your Supabase SQL Editor.
   - Create a `.env` file in the root directory:
     ```env
     VITE_SUPABASE_URL=your_project_url
     VITE_SUPABASE_ANON_KEY=your_anon_key
     ```
3. **Run Development Server:**
   ```bash
   npm run dev
   ```

## Test Credentials (MANDATORY DELIVERABLES)

As per Section 15 of the PRD Evaluation Criteria, here are the hardcoded test credentials for evaluation:

**User Panel Test Credentials:**
- **Email:** `subscriber@digitalheroes.co.in`
- **Password:** `TestGolf123!`
- **Role:** General Subscriber (Access to Score Entry, Dashboard, Proof Upload)

**Admin Panel Test Credentials:**
- **Email:** `admin@digitalheroes.co.in`
- **Password:** `AdminSecure2026!`
- **Role:** Administrator (Access to Draw Engine, Winners Verification, User Analytics)

## Project Structure Overview
- `/src/pages/Home.jsx` - Emotion-driven landing page.
- `/src/pages/Dashboard.jsx` - Main user hub (Score 1-45 inputs, rolling 5-score logic, supabase hook connected).
- `/src/pages/Pricing.jsx` - Mock Stripe gateway (Monthly/Yearly) and subscription engine.
- `/src/pages/Admin.jsx` - Admin control dashboard for draws and verifications.
- `/src/pages/Charities.jsx` - Fully functional charity directory with filtering.
- `schema.sql` - Absolute exact database table and constraint setup required.

---
*Developed meticulously matching the detailed abstract requirements provided by Digital Heroes.*
=======
# football
project
>>>>>>> 020feded56eac5d79bd0bcc44309d9d710fecb02
