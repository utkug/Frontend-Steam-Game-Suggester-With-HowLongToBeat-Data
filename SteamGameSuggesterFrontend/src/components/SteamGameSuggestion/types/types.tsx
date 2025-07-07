export type MainTypes = 'gameplayMain'| 'gameplayMainExtra' | 'gameplayCompletionist' | 'metacriticScore' |'suggested' | 'alphabetical' |'reviewsCount' |'topRated'

type nested = keyof steamReviews
export type SortKeyType = MainTypes | nested



interface Game {
    appid: number
    playtime_forever: number
    name: string
    genres: string[]
    metacriticScore: number
    imageUrl: string
    gameplayMain: number
    gameplayMainExtra: number
    gameplayCompletionist: number
    steam_reviews: steamReviews
}

interface steamReviews {
    review_score_desc: string
    total_positive: number
    total_negative: number
    total_reviews: number
}