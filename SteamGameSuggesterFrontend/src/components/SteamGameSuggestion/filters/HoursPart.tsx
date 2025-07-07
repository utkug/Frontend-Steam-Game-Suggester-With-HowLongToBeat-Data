import React from 'react'
import { Badge } from '@mantine/core'
import { IconClock } from '@tabler/icons-react'

function HoursPart({ playtime }: { playtime: number }) {
  return (
    <div>
    <Badge
      size="lg"
      fullWidth
      leftSection={<IconClock size={16}/>}
      variant="gradient"
      gradient={{ from: 'purple', to: 'indigo', deg: 90 }}
    >
      You have played for {(playtime/60).toFixed(1)}H
    </Badge>
    </div>
  )
}

export default HoursPart