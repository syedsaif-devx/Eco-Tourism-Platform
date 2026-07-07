# 🌿 EcoTourDB — Eco Tourism Database System

EcoTourDB is a front-end web platform for managing eco-tourism operations — visitor registration, tour reservations, guide assignment, invoicing, and customer feedback — built for **sustainable travel destinations in Northern Pakistan** (Hunza, Fairy Meadows, Deosai, Swat, Kaghan, and Neelum Valley).

## 📋 Overview

This project simulates a complete tourism management workflow: a visitor registers, books a tour, gets matched with a specialist guide, receives an invoice, and can leave feedback after their trip — all through a clean, responsive interface.

## ✨ Features

| Page | Description |
|---|---|
| `index.html` | Landing page with hero banner, platform stats, and navigation to all modules |
| `visitor.html` | Visitor registration form |
| `reservation.html` | Tour reservation form — select from 6 eco destinations with live pricing |
| `guides.html` | Browse and assign expert guides matched to each destination |
| `invoices.html` | Generate billing/invoice details for a booked tour + guide |
| `feedback.html` | Post-trip visitor feedback form |
| `thankyou.html` | Confirmation page shown after form submission |

## 🗺️ Destinations Covered

- Hunza Valley Trek (Gilgit-Baltistan)
- Fairy Meadows & Nanga Parbat Base Camp
- Deosai Plains Safari (Skardu)
- Malam Jabba & Swat Valley Hike
- Naran Kaghan & Saif-ul-Malook Trek
- Neelum Valley Trail (Azad Kashmir)

Each destination has an associated pricing tier and a pool of specialist local guides (defined in `assets/data.js`), with helper functions to look up destinations (`findDestination`) and matching guides (`findGuidesFor`).

## 🛠️ Tech Stack

- **HTML5** — page structure across 8 pages
- **CSS3** (`styles.css`) — custom styling, responsive layout
- **Vanilla JavaScript** — form handling (`submitForm`, `handleSubmit`) and shared data logic (`assets/data.js`)
- **MySQL Workbench** (`database.mwb`) — relational database schema/model for the system

## 📁 Project Structure

```
EcoTourDB/
├── index.html          # Landing page
├── visitor.html        # Visitor registration
├── reservation.html    # Tour reservation
├── guides.html         # Guide directory & assignment
├── invoices.html       # Invoice generation
├── feedback.html       # Visitor feedback
├── thankyou.html       # Submission confirmation
├── styles.css          # Global styles
├── database.mwb        # MySQL Workbench database model
└── assets/
    ├── data.js          # Destinations & guides dataset + helpers
    ├── Eco-Tourism.webp # Hero banner image
    └── success-image.gif
```

## 🚀 Getting Started

1. Download/clone the project folder.
2. Open `index.html` directly in any modern browser (no server required — it's a static front-end).
3. Navigate through the nav bar to explore Visitor Registration, Reservations, Guides, Invoices, and Feedback.
4. To work with the database design, open `database.mwb` in **MySQL Workbench**.

## 🔮 Possible Next Steps

- Connect forms to a real backend (e.g. PHP/Node/FastAPI) + the MySQL schema in `database.mwb` for persistent storage
- Add authentication for admin/staff vs visitors
- Add real-time booking availability and payment integration

---
*Built as an eco-tourism management prototype for sustainable travel operators in Northern Pakistan.*
