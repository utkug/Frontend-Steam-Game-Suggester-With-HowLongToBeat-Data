import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NotFound from './NotFound'
import Home from './SteamGameSuggestion/Home.tsx'
import Suggestion from './SteamGameSuggestion/Suggestion.tsx'
import GenresCard from './SteamGameSuggestion/GenresCard.tsx'
import HoursSlider from './SteamGameSuggestion/filters/HoursSlider.tsx'
import SortComponent from './SteamGameSuggestion/filters/SortComponent.tsx'
function App1() {
  return (
    <div>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/suggest/:steamId' element={<Suggestion />} />
            <Route path='/deneme' element={<SortComponent />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    </div>
  )
}

export default App1