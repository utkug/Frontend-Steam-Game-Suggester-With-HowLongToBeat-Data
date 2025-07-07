import React from 'react'
import { ThemeIcon, Text, Badge, Box, Stack } from '@mantine/core'
import { IconClock, IconListDetails, IconStar } from '@tabler/icons-react'

type Props = {
  gameplayMain: number
  gameplayMainExtra: number
  gameplayCompletionist: number
}

function HowLongToBeatHoursPart({ gameplayMain, gameplayMainExtra, gameplayCompletionist }: Props) {
  return (
    <Stack gap='xs'>
      {/* Main Story */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconClock size={16} />
          </ThemeIcon>
          <Text>Main Story</Text>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
          <Badge color="green">{gameplayMain} Hours</Badge>
        </Box>
      </Box>

      {/* Main + Extra */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconListDetails size={16} />
          </ThemeIcon>
          <Text>Main + Extra</Text>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
          <Badge color="yellow">{gameplayMainExtra} Hours</Badge>
        </Box>
      </Box>

      {/* Completionist */}
      <Box
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Box style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <ThemeIcon color="teal" size={24} radius="xl">
            <IconStar size={16} />
          </ThemeIcon>
          <Text>Completionist</Text>
        </Box>

        <Box style={{ display: 'flex', justifyContent: 'flex-end', flex: 1 }}>
          <Badge color="red">{gameplayCompletionist} Hours</Badge>
        </Box>
      </Box>
    </Stack>
  )
}

export default HowLongToBeatHoursPart
