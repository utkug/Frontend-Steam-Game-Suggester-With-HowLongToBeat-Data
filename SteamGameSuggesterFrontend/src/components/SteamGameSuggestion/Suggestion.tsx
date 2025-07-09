import React, { useEffect, useState } from "react";
import { MantineProvider, createTheme } from "@mantine/core";
import SuggestionGameCard from "./SuggestionGameCard";
import type { GameModel } from "./Models";
import { useParams } from "react-router-dom";
import HoursSlider from "./filters/HoursSlider";
import BetaCheckBox from "./filters/BetaCheckBox";
import GenresFilter from "./filters/GenresFilter";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { filterGames } from "./filters/filterUtils";
import SortComponent from "./filters/SortComponent";
import SearchBarFilter from "./filters/SearchBarFilter";
import ScrollUp from "./filters/ScrollUp";
import SwitchTheme from "./filters/SwitchTheme";
import SuggestionPageHeader from "./SuggestionPageHeader";
import LanguageFilter from "./filters/LanguageFilter";
import { Notifications } from "@mantine/notifications";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";
import { showSseNotification, updateSseNotificationError, updateSseNotificationSuccess } from './SseNotificationManager';

function Suggestion() {
  const { steamId } = useParams<{ steamId: string }>()
  const [games, setGames] = useState<GameModel[]>([]) // Tekil yerine bir liste olarak tanımladık.

  const theme = createTheme({
    cursorType: "pointer",
    //fontFamily: 'Open Sans, sans-serif'
  })

  const {
    languages,
    showOnlyPopularGames,
    genres,
    hours,
    search,
    showGamesIPlayed,
    sortKey,
    sortOrder,
    hourFilterType,
  } = useSelector((state: RootState) => state.gameFilterReducer)

  const filteredGames = filterGames(
    games,
    hours,
    genres,
    sortOrder,
    sortKey,
    search,
    showGamesIPlayed,
    hourFilterType,
    showOnlyPopularGames,
    languages
  )
  
useEffect(() => {
  const es = new EventSource(`http://localhost:3000/getUserGamesWithHours/${steamId}`);

  showSseNotification() // when starts

  es.onopen = () => {
    console.log("📡 SSE Connected")
  };

  es.onerror = (e) => {
    console.error("❌ SSE Connection Error", e)
    updateSseNotificationError()
    es.close();
  };

  es.onmessage = (event) => {
    const game = JSON.parse(event.data)
    console.log("New Game: ", game)
    setGames((prev) => [...prev, game])
  };

  es.addEventListener("end", () => {
    es.close()
    console.log("✅ All games fetched.")
    updateSseNotificationSuccess()
  })

  return () => es.close()
}, [])

  document.title = `Game Suggestions for ${steamId}`
  return (
    <div style={{ margin: "0", padding: "0", minHeight: "100vh" }}>
      <MantineProvider theme={theme} defaultColorScheme="light">
        <Notifications />
        <SuggestionPageHeader steamId={steamId} />
        <div style={{ position: "absolute", top: "10px", right: "10px" }}>
          <SwitchTheme />
        </div>
        <div
          style={{
            marginTop: "10px",
            gap: "10px",
            display: "flex",
            padding: "10px",
            justifyContent: "space-between",
            alignItems: "flex-start",
            alignContent: "stretch",
          }}
        >
          <HoursSlider />
          <BetaCheckBox />
          <GenresFilter />
          <LanguageFilter />
          <SearchBarFilter />
          <SortComponent />
        </div>
        <div
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            flexDirection: "row",
            alignContent: "flex-start",
          }}
        >
          {filteredGames.map((game, index) => (
            <SuggestionGameCard key={index} gameProps={game} isFirst={index === 0} />
          ))}
        </div>
        <ScrollUp />
      </MantineProvider>
    </div>
  )
}

export default Suggestion
