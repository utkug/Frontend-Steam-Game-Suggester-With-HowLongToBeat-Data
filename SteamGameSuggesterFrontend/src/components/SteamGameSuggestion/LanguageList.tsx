import React from 'react'
import { IconWorld } from '@tabler/icons-react'
import { Text, Badge } from '@mantine/core'
import { getLanguageCode } from './languageCode'

function LanguageList(props: any) {
    const { languages } = props

    const Flag = (languageName: string ) => {
        const countryCode = getLanguageCode(languageName)
        const flagUrl = `https://flagcdn.com/w20/${countryCode}.png` // 40px witdh
        return <img src={flagUrl} alt={countryCode} style={{  marginBottom:'1.4px',width: '20px', height: '15px' }} />
    }

  return (
    <div>
        <Text style={{textAlign:'center', marginTop:'5px'}}><IconWorld />Supported Languages</Text>
        {/* <div style={{display:'flex', marginTop:'10px', flexWrap:'wrap'}}>
        {
            
            languages.map((language: string, index: number) => {
                return <Badge style={{marginTop:'5px', marginRight:'3px'}} color='indigo' key={index}>{Flag(language)} {language}</Badge>
            })
        }
        </div> */}
        {
            languages.map((language: string, index: number) => {
                return <Text style={{textAlign:'center'}} key={index}>{Flag(language)} {language}</Text>
            })
        }
    </div>
  )
}

export default LanguageList