# 🎮 Steam Game Suggester - Frontend

This is the **frontend** of the Steam Game Suggester project. It allows users to get personalized game recommendations based on their Steam profile. Users enter their Steam ID, and the app analyzes their game library and displays relevant suggestions with advanced filtering options.

## ✨ Features

- 🔍 Search by Steam ID (both vanity and 64-bit)
- 🎮 Filters for genres, playtime, languages, and more
- ⭐ Sort by popularity, Metacritic score, or review score
- ⏱️ Integrated with [HowLongToBeat](https://howlongtobeat.com) for estimated game completion times
- 🔔 Real-time loading using Server-Sent Events (SSE) with Mantine Notifications
- 🎨 Responsive and modern UI built with [Mantine](https://mantine.dev/)

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/steam-game-suggester-frontend.git
cd steam-game-suggester-frontend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Development Server
```bash
npm run dev
```
> ⚠️ This app requires a running backend server at `http://localhost:3000` for data fetching.  
> You can find the backend repository here: [Steam Game Suggester Backend]

## 📸 Screenshots

## 🛠️ Built With
* React
* TypeScript
* Redux
* Mantine UI
