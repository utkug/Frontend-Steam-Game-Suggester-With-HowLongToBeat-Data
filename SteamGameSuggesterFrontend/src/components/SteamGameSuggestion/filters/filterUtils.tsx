import type { SortKeyType } from "../types/types"

interface steamReviews {
    review_score_desc: string
    total_positive: number
    total_negative: number
    total_reviews: number
}

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
    languages: string[]
}

export const filterGames = (
    games: Game[],
    hours: [number, number],
    genres: string[],
    sortOrder: 'asc' | 'desc' | 'normal',
    sortKey: SortKeyType,
    search: string,
    showGamesIPlayed: boolean,
    hourFilterType: 'gameplayMain' | 'gameplayMainExtra' | 'gameplayCompletionist',
    showOnlyPopularGames: boolean,
    languages: string[]
): Game[] => {
    return games
    .filter((game) => 
    search ? game.name.toLowerCase().includes(search.toLowerCase()) : true)
    .filter((game) => hours ? game[hourFilterType] >= hours[0] && game[hourFilterType] <= hours[1]: true)
    .filter((game) => genres.length > 0 ? genres.some((g) => game.genres.includes(g)): true)
    .filter((game) => !showGamesIPlayed ? (game.playtime_forever/60) < game.gameplayMain: true)
    .filter((game) => showOnlyPopularGames ? game.steam_reviews.total_reviews > 20000: true)
    .filter((game) => languages.length > 0 ? languages.some((lang) => game.languages.includes(lang)): true)
    .sort((a:any, b:any) => {
        if(sortOrder === 'normal' || sortKey==="suggested") return 0;
        if(sortKey === 'alphabetical'){
            const nameA = a.name.toLowerCase()
            const nameB = b.name.toLowerCase()

            if(nameA < nameB) return sortOrder === 'asc' ? -1 : 1
            if(nameB < nameA) return sortOrder === 'asc' ? 1 : -1
            return 0
        }
        if(sortKey === 'reviewsCount'){
            const countA = a.steam_reviews.total_reviews
            const countB = b.steam_reviews.total_reviews
            return sortOrder === 'asc' ? countA - countB : countB - countA
        }
        if(sortKey === 'topRated'){
            const rateA = (a.steam_reviews.total_positive / a.steam_reviews.total_reviews)*100
            const rateB = (b.steam_reviews.total_positive / b.steam_reviews.total_reviews)*100
            return sortOrder === 'asc' ? rateA - rateB : rateB - rateA
        }
        const key = sortKey
        return sortOrder === 'asc' ? a[key] - b[key]: b[key] - a[key]
    })
}