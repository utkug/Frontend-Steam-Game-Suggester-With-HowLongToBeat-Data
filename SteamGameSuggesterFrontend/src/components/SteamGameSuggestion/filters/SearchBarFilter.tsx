import React from 'react'
import { TextInput } from '@mantine/core'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../redux/store'
import { setSearch } from '../../../redux/GameFilterSlice'
import { IconSearch } from '@tabler/icons-react'

function SearchBarFilter() {
    const { search } = useSelector((store: RootState) => store.gameFilterReducer)
    const dispatch = useDispatch()
    
  return (
    <div>
        <TextInput
            label="Search"
            placeholder="Enter a game name"
            value={search}
            onChange={(e) => dispatch(setSearch(e.currentTarget.value))}
            rightSection={<IconSearch size={19}></IconSearch>}
        />
    </div>
  )
}

export default SearchBarFilter