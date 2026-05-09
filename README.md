# AuraDiscovery 🌌

A modern mobile-first anonymous social discovery platform where users can scan venue QR codes, discover active people nearby, and start anonymous real-time conversations in a safe and privacy-focused environment.

---

# 📱 Project Overview

AuraDiscovery is designed for cafés, lounges, bars, and social venues where users can:

- Scan QR codes to join venues
- Discover active people nearby
- Start anonymous 1-to-1 chats
- Reveal table numbers only with mutual consent
- Use trust & safety tools like report, block, and panic exit

This project was built as part of an internship assignment focused on:
- Product thinking
- UI/UX design
- Mobile-first frontend development
- Database architecture
- Admin dashboard systems

---

# ✨ Features

## 👤 User Features

- Phone OTP login UI
- Lightweight anonymous profile setup
- QR-based venue entry system
- Nearby venue discovery
- Interactive map interface
- Live active user counts
- Anonymous real-time chat UI
- Mutual table-number reveal flow
- Panic exit functionality
- Report & block system

---

## 🗺️ Discovery System

- Nearby venues listing
- Interactive map view
- Venue activity preview
- Live venue engagement UI
- Anonymous user discovery

---

## 💬 Anonymous Chat

- Clean mobile chat interface
- Anonymous identities
- Reveal request system
- Dummy real-time messaging simulation
- Privacy-focused UX

---

## 🛡️ Trust & Safety

- Panic exit
- User reporting
- User blocking
- Moderation-ready architecture
- Privacy-first flow

---

## 🛠️ Admin Panel

- Role-based admin login
- Venue management
- QR generation system
- Moderation queue
- User management
- Analytics dashboard
- CSV export UI

---

# 🎨 Design System

## UI/UX Goals

- Mobile-first experience
- Minimal and modern UI
- Dark theme aesthetic
- Social-app inspired design
- Fast and frictionless interactions
- Strong anonymity cues
- Trust-focused interface

---

## 🎨 Color Palette

| Purpose | Color |
|---|---|
| Background | `#0B0B0F` |
| Cards | `#12121A` |
| Primary Gradient | Purple → Blue |
| Primary Text | `#FFFFFF` |
| Secondary Text | `#A1A1AA` |
| Danger | `#EF4444` |

---

# 🧱 Tech Stack

## Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Framer Motion

## Maps
- Leaflet.js

## Backend Architecture (Planned)
- Node.js
- Express.js
- Prisma ORM
- Supabase PostgreSQL

## Deployment
- Netlify

---


---

# 🔄 User Flow

```text
Login
   ↓
Profile Setup
   ↓
Discovery Page
   ↓
Scan QR to Join Venue
   ↓
Venue Interaction Hub
   ↓
Anonymous Chat
   ↓
Reveal Table Number
```

---

# 📸 Screens Included

- Login Screen
- Profile Setup
- Discovery / Map Screen
- QR Scan Screen
- Venue Detail Screen
- Anonymous Chat Screen
- Reveal Modal
- Safety Features UI
- Admin Dashboard

---

# 🧠 Product Logic

## Discovery vs Entry

Users can:
- Discover nearby venues from the map

But:
- They cannot enter a venue directly from the app

To join a venue:
- Users must physically visit the venue
- Scan the QR code
- Become “active” inside the venue

This ensures:
- Geo authenticity
- Better trust & safety
- Real-world interaction validation

---

# 🗄️ Database Architecture

The project includes a complete PostgreSQL database architecture featuring:

- Users
- Venues
- User Presence
- Chats
- Messages
- Reveal Requests
- Reports
- Moderation Logs
- Analytics Events
- Admin Roles

---

# 🚀 Getting Started

## Installation

```bash
npm install
```

## Start Development Server

```bash
npm run dev
```

---

# 🌐 Deployment

The project is designed to be deployed on:

- Netlify

---

# 📊 Admin Dashboard Features

## Venue Management
- Create venues
- Edit venues
- Deactivate venues
- Set geo-radius

## Moderation
- Report queue
- User actions
- Chat moderation

## Analytics
- Active users
- DAU
- Chat initiation rate
- Reveal rate

---

# 🔐 Privacy & Safety

AuraDiscovery emphasizes:
- Anonymous interactions
- Consent-based reveals
- Safety-first design
- Quick exit mechanisms
- User moderation systems

---

# 📌 Future Improvements

- Real-time Socket.IO chat
- Live QR scanning
- GPS validation
- Push notifications
- AI moderation
- Advanced analytics
- Real authentication
- Supabase backend integration

---

# 👨‍💻 Author

Anshuman Mehta

---

# 📄 License

This project is built for educational and internship assignment purposes.