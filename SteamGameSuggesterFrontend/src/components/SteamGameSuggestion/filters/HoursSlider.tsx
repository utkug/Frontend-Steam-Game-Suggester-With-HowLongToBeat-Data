import React from 'react'
import { RangeSlider, Text} from '@mantine/core';
import SliderOption from './SliderOption';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../../redux/store';
import { setHours } from '../../../redux/GameFilterSlice';

function HoursSlider() {
    const { hours } = useSelector((store: RootState) => store.gameFilterReducer)
    const dispatch = useDispatch()
  return (
    <div style={{width:'300px'}}>
          <Text style={{alignItems:'center', justifyContent:'center', display:'flex', marginBottom:'5px'}}>Hours Slider</Text>
          <RangeSlider
            value={hours} onChange={(newValue) => dispatch(setHours(newValue))}
            max={300}
            marks={[
                { value: 50, label: '50h' },
                { value: 100, label: '100h' },
                { value: 150, label: '150h' },
                { value: 200, label: '200H' },
                { value: 250, label: '250H' },
                { value: 300, label: '300H' },
              ]}
             />
             <div style={{justifyContent:'center', alignItems:'center', display:'flex', marginTop:'20px'}}>
              <SliderOption />
             </div>
    </div>
  )
}

export default HoursSlider