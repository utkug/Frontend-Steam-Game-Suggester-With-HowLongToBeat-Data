import React, { useState } from "react";

function SuggestionPageHeader(props: any) {
  const { steamId } = props
  const [hovered, setHovered] = useState(false)

  return (
    <div style={{ textAlign: "center", marginTop: "6px" }}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: "2.5rem",
          fontFamily: "Poppins, sans-serif",
          // color: hovered ? '#61b6fb' : '#fff',
          color: "#fff",
          textShadow: "1px 1px 3px rgba(0,0,0,0.6)",
          borderBottom: "2px solid rgb(62, 61, 61)",
          paddingBottom: 8,
          display: "inline-block",
          transition: "color 0.3s ease",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Game Suggestions For{" "}
        <span style={{ color: "#61b6fb", fontStyle: "italic" }}>{steamId}</span>{" "}
        🎮
      </h1>
      <p
        style={{
          color: "#ccc",
          fontFamily: "Poppins, sans-serif",
          marginTop: 5,
          fontSize: "1rem",
        }}
      >
        Personalized game recommendations just for you!
      </p>
    </div>
  )
}

export default SuggestionPageHeader;
