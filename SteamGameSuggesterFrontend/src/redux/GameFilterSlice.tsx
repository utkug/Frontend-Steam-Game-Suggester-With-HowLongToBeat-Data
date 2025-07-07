import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { SortKeyType } from '../components/SteamGameSuggestion/types/types'

type sortKeysType = 'hour'| 'metacritic'| 'normal'| 'topRated' | 'reviewsCount' | 'alphabetical'

type FilterState = {
    hours: [number, number]
    genres: string[]
    sortOrder: 'asc' | 'desc' | 'normal'
    sortKey: SortKeyType
    search: string
    showGamesIPlayed: boolean
    hourFilterType: 'gameplayMain' | 'gameplayMainExtra' | 'gameplayCompletionist'
    showOnlyPopularGames: boolean
    languages: string[]
}

const initialState: FilterState = {
    hours: [0, 300],
    genres: [],
    sortOrder:'normal',
    sortKey:'suggested',
    search: '',
    showGamesIPlayed: false,
    hourFilterType: 'gameplayMain',
    showOnlyPopularGames: false,
    languages: []
}



const GameFilterSlice = createSlice({
    name:'game',
    initialState,
    reducers: {
        setSearch(state, action: PayloadAction<string>){
            state.search = action.payload
        },
        setHours(state, action:PayloadAction<[number, number]>){
            state.hours = action.payload
        },
        setshowGamesIPlayed(state, action: PayloadAction<boolean>) {
            state.showGamesIPlayed = action.payload
        },
        setGenres(state, action: PayloadAction<string []>){
            state.genres = action.payload
        },
        setSortOrder(state, action: PayloadAction<'asc' | 'desc' | 'normal'>){
            state.sortOrder = action.payload
        },
        setSortKey(state, action: PayloadAction<SortKeyType>){
            state.sortKey = action.payload
        },
        setHourFilterType(state, action: PayloadAction<'gameplayMain' | 'gameplayMainExtra' | 'gameplayCompletionist'>){
            state.hourFilterType = action.payload
        },
        setShowOnlyPopularGames(state, action: PayloadAction<boolean>){
            state.showOnlyPopularGames = action.payload
        },
        setLanguages(state, action:PayloadAction<string[]>){
            state.languages = action.payload
        }
    }
})

export const { setLanguages, setShowOnlyPopularGames, setHours, setHourFilterType, setGenres, setshowGamesIPlayed, setSearch, setSortKey, setSortOrder} = GameFilterSlice.actions
export default GameFilterSlice.reducer