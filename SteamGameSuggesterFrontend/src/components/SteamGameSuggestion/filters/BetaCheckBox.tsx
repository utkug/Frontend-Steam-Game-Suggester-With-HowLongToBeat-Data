import { Checkbox } from '@mantine/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { setshowGamesIPlayed, setShowOnlyPopularGames } from '../../../redux/GameFilterSlice'

function BetaCheckBox() {
  const { showGamesIPlayed, showOnlyPopularGames } = useSelector((store: RootState) => store.gameFilterReducer)
  const dispatch = useDispatch()
  return (
    <div style={{marginTop:'28px'}}>
        <Checkbox
              label="Show Games I Finished (Beta)"
              color="blue"
              checked={showGamesIPlayed}
              onChange={(event) => dispatch(setshowGamesIPlayed(event.target.checked)) }
            />
        <Checkbox
              style={{marginTop:'10px'}}
              label="Show only popular games"
              color="blue"
              title="which is have more than 20k reviews"
              checked={showOnlyPopularGames}
              onChange={(event) => dispatch(setShowOnlyPopularGames(event.target.checked)) }
            />
    </div>
  )
}

export default BetaCheckBox