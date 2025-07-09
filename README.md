# 🎮 Steam Game Suggester - Frontend

This is the **frontend** of the Steam Game Suggester project. It allows users to get personalized game recommendations based on their public Steam profile.
After entering a Steam ID, the app fetches the user's game library, enriches each game with estimated playtimes from HowLongToBeat, and displays them.
Users can easily filter and sort suggestions by playtime, genres, hours played, popularity, and more — helping them choose the right game for their time.

> 📦 Looking for the backend?  
👉 Check out the backend repo here: [Steam Game Suggestion - Backend](https://github.com/utkug/SteamGameSuggesterBackend)

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
git clone https://github.com/utkug/Frontend-Steam-Game-Suggester-With-HowLongToBeat-Data.git
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
> You can find the backend repository here: [Steam Game Suggester Backend](https://github.com/utkug/SteamGameSuggesterBackend.git)

## 📸 Screenshots
Home Page
![localhost_5173_home](https://github.com/user-attachments/assets/2fa2a269-3f9e-4416-878f-b382d5819d6d)
Game Suggestion Page
![Ekran görüntüsü 2025-07-07 202612](https://github.com/user-attachments/assets/5613fe08-d9c5-4bbb-ba9a-1ad80d2e9567)
![Ekran görüntüsü 2025-07-07 202626](https://github.com/user-attachments/assets/84b4c436-ec3a-46dc-8965-5dad13ecbf36)
Also you can see supported languages
![localhost_5173_suggest_utkuug](https://github.com/user-attachments/assets/345885d7-b506-4b2f-8d17-7f1733ed3a80)
![localhost_5173_suggest_utkuug (1)](https://github.com/user-attachments/assets/a1a52c7e-b6c7-4425-9a56-7dfdedb79f12)
## 🛠️ Built With
* React
* TypeScript
* Redux
* Mantine UI
