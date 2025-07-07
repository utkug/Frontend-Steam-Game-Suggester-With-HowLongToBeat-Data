import React from 'react'
import { Radio } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { setHourFilterType } from '../../../redux/GameFilterSlice'

function SliderOption() {
    const { hourFilterType } = useSelector((store: RootState) => store.gameFilterReducer)
    const dispatch = useDispatch()
  return (
    <div>
    <Radio.Group
        value={hourFilterType}
        onChange={(newValue) => dispatch(setHourFilterType(newValue as 'gameplayMain' | 'gameplayMainExtra' | 'gameplayCompletionist'))}
        name="favoriteFramework"
        >
        <Radio style={{marginTop:'4px'}} value="gameplayMain" label="Main Story" />
        <Radio style={{marginTop:'4px'}} value="gameplayMainExtra" label="Main + Extra" />
        <Radio style={{marginTop:'4px'}} value="gameplayCompletionist" label="Completionist" />
    </Radio.Group>
    </div>
  )
}

export default SliderOption