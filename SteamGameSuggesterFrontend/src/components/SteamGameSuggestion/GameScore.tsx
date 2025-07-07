import React from 'react'
import { Group, Badge } from '@mantine/core'

function GameScore({metacriticScore, steamReviews} : {metacriticScore: number, steamReviews: {
  review_score_desc: string
  total_positive: number,
  total_negative: number,
  total_reviews: number
}}) {

  const { total_positive, total_reviews, review_score_desc} = steamReviews
  const percentOfLike = (total_positive: number, total_reviews: number) => {
    return ((total_positive / total_reviews)*100).toFixed(0)
  }
  const title = `${percentOfLike(total_positive, total_reviews)}% of the ${total_positive} user reviews for this game are positive`

  const getBadgeColor = (score: number) => {
        if (score > 90) return 'darkgreen' // Koyu yeşil
        if (score > 80) return 'green'     // Yeşil
        if (score > 70) return 'yellow'    // Sarı
        if (score == 0) return 'gray'       // Gri
        return 'red'                       // Kırmızı
}

const getSteamReviewBadgeColor = (desc: string): string => {
  switch (desc) {
    // Positive tones (mavi)
    case "Overwhelmingly Positive":
      return "#003366"; // çok koyu mavi
    case "Very Positive":
      return "#0055aa";
    case "Positive":
      return "#3399ff";
    case "Mostly Positive":
      return "#66ccff";

    // Mixed
    case "Mixed":
      return "#ffaa00"; // turuncu

    // Negative tones (kırmızı)
    case "Mostly Negative":
      return "#ff9999"; // açık kırmızı
    case "Negative":
      return "#ff5555";
    case "Very Negative":
      return "#dd2222";
    case "Overwhelmingly Negative":
      return "#990000"; // çok koyu kırmızı

    default:
      return "#777"; // bilinmeyen değerler için gri
  }
}
  return (
    <div>
      <Group justify="space-between" mt="md" mb="xs">
      <Badge title={title} tt="none" color={getSteamReviewBadgeColor(review_score_desc)} style={{fontSize:'14px', }}><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/2048px-Steam_icon_logo.svg.png' style={{width: '14px', height: '14px', marginBottom:'3px', marginRight:'2px'}}></img>{review_score_desc}</Badge>
      <Badge color={getBadgeColor(metacriticScore)} style={{fontSize:'14px'}}><img src='https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png' title='Metacritic' style={{width: '14px', height: '14px', marginBottom:'3px', marginRight:'2px'}}/>{metacriticScore}</Badge>
    </Group>
    </div>
  )
}
export default GameScore