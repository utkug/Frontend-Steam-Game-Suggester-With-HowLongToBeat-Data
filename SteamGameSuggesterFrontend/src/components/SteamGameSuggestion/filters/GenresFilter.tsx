import { MultiSelect } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { setGenres } from '../../../redux/GameFilterSlice'

function GenresFilter() { //may be Menu
  const { genres } = useSelector((store: RootState) => store.gameFilterReducer)
  const dispatch = useDispatch()
  const gamesGenres: string[] = ['Action', 'Adventure', 'RPG', 'Free To Play', 'Shooter', 'FPS', 'Sports', 'Simulation', 'Early Access'
  ]
  return (
    <div style={{width:'200px'}}>    
        <MultiSelect
        label="Genres"
        placeholder="Choose a genre"
        data={gamesGenres}
        value={genres}
        clearable
        style={{maxWidth:'200px', width:'100%'}}
        searchable
        onChange={(newValue) => dispatch(setGenres(newValue))}
        />
        </div>
  )
}

export default GenresFilter