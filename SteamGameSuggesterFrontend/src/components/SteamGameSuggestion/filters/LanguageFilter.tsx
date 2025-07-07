import React from 'react'
import { MultiSelect } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { setLanguages } from '../../../redux/GameFilterSlice'

function LanguageFilter() {
    const { languages } = useSelector((store: RootState) => store.gameFilterReducer)
    const dispatch = useDispatch()
    const languagesType = ["English", "German", "French", "Italian" ,"Spanish", "Turkish", "Polish", "Russian", "Chinese", "Japanese", "Portuguese", "Dutch", "Czech", "Greek", "Korean"]

  return (
    <div style={{maxWidth:'250px'}}>
        <MultiSelect
        label="Languages"
        clearable
        searchable
        placeholder="Filter Language"
        data={languagesType}
        value={languages}
        onChange={(newValue) => dispatch(setLanguages(newValue))}
        />
    </div>
  )
}

export default LanguageFilter