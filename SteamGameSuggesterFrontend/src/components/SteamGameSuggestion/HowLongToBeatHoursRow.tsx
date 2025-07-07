import React from 'react'
import { ThemeIcon, Text, Badge } from '@mantine/core'

type Props = {
  icon: React.ReactNode
  label: string
  hours: number
  badgeColor?: string
}

const HowLongToBeatHoursRow = ({ icon, label, hours, badgeColor = 'gray' }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <ThemeIcon color="teal" size={24} radius="xl">
          {icon}
        </ThemeIcon>
        <Text>{label}</Text>
      </div>

      <Badge color={badgeColor}>{hours} Hours</Badge>
    </div>
  )
}

export default HowLongToBeatHoursRow
