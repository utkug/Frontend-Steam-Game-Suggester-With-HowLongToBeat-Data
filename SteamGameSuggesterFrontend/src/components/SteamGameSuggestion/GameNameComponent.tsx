import { Tooltip, Text } from '@mantine/core'
import type { CSSProperties } from 'react'

type Props = {
  name: string
  textColor: CSSProperties['color']
}

function GameNameComponent(props: Props) {
    const { name, textColor } = props
  return (
    <div>
        <Tooltip label={name}>
            <Text style={{textAlign:'center', marginTop:'6px', color:'white', lineHeight:'1.3'}} c={textColor} truncate="end" fw={500} size="24px">
                {name}
            </Text>

        </Tooltip>
    </div>
  )
}

export default GameNameComponent