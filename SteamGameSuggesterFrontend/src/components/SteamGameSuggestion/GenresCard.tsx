import React from "react";
import { Badge } from "@mantine/core";

function GenresCard(props: any) {
  const genres = props.genres

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      {genres.map((genre: string, index: number) => (
        <Badge key={index} color="blue">
          {genre}
        </Badge>
      ))}
    </div>
  )
}

export default GenresCard
