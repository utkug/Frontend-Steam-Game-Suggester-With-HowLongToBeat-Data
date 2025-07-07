interface steamReviews {
    review_score_desc: string
    total_positive: number
    total_negative: number
    total_reviews: number
}
export interface GameModel{
    appid: number
    playtime_forever: number
    name: string
    metacriticScore: number
    imageUrl: string
    gameplayMain: number
    gameplayMainExtra: number
    gameplayCompletionist: number
    genres: string[],
    steam_reviews: steamReviews
    languages: string[]
}
