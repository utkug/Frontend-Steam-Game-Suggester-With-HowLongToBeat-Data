import React, { useEffect, useState } from "react";
import { Card, Image, Text, useMantineColorScheme } from "@mantine/core";
import type { GameModel } from "./Models";
import GenresCard from "./GenresCard";
import HoursPart from "./filters/HoursPart";
import GameScore from "./GameScore";
import GameNameComponent from "./GameNameComponent";
import "./FlipCard.css";
import LanguageList from "./LanguageList";
import HowLongToBeatHoursPart from "./HowLongToBeatHoursPart";

function SuggestionGameCard(gameProps: any) {
  const {
    languages,
    steam_reviews,
    gameplayCompletionist,
    gameplayMain,
    gameplayMainExtra,
    genres,
    imageUrl,
    metacriticScore,
    name,
    playtime_forever,
  } = gameProps.gameProps

  const { isFirst } = gameProps
  const { colorScheme } = useMantineColorScheme()
  const textColor = colorScheme === "dark" ? "white" : "black"
  const [flipped, setFlipped] = useState(false)
  const [hasFlippedOnce, setHasFlippedOnce] = useState(false)

  useEffect(() => {
    if (isFirst) {
      const timeout = setTimeout(() => {
        setFlipped(true)
        setTimeout(() => {
          setFlipped(false)
          setHasFlippedOnce(true)
        }, 1500); // flip back after 1.5 seconds
      }, 1000); // show after after 1 second
      return () => clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="flip-card-container" onClick={() => setFlipped(!flipped)}>
      <div className={`flip-card ${flipped ? "flipped" : ""}`}>
        {/* FRONT SIDE */}
        <div className="flip-card-front">
          <Card
            shadow="sm"
            radius="lg"
            withBorder
            style={{ height: "480px", width: "280px", position: "relative" }}
          >
            <Card.Section>
              <Image src={imageUrl} fit="fill" height="130px" />
            </Card.Section>
            <GameNameComponent name={name} textColor={textColor} />
            <GameScore
              metacriticScore={metacriticScore}
              steamReviews={steam_reviews}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center", // Horizontal center
                width: "100%",
              }}
            ></div>
            <HowLongToBeatHoursPart
              gameplayMain={gameplayMain}
              gameplayMainExtra={gameplayMainExtra}
              gameplayCompletionist={gameplayCompletionist}
            />

            <div style={{ marginTop: "30px" }}>
              <GenresCard genres={genres} />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  textAlign: "center",
                  width: "100%",
                  left: "0",
                  marginBottom: "0px",
                  padding: "10px",
                }}
              >
                <HoursPart playtime={playtime_forever} />
              </div>
            </div>
          </Card>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <Card
            shadow="md"
            radius="lg"
            withBorder
            style={{ height: "480px", width: "280px" }}
          >
            <Text ta="center" mt="md" fw={600}>
              {name}
            </Text>
            <LanguageList languages={languages} />
            <Text ta="center" mt="xl" fw={500}>
              (Click card to flip back)
            </Text>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default SuggestionGameCard;
