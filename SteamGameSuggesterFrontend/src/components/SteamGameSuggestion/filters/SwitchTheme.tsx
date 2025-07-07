import React from 'react'
import { ActionIcon, useMantineColorScheme, useComputedColorScheme, Tooltip } from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'


function SwitchTheme() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('dark', { getInitialValueInEffect: true });
  return (
<div>
      <Tooltip
        label={computedColorScheme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
        position="top"
        withArrow
      >
        <ActionIcon
          onClick={() =>
            setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
          }
          variant="default"
          size="xl"
          aria-label="Toggle color scheme"
        >
          <IconSun
            className={computedColorScheme === 'light' ? 'visually-hidden' : ''}
            stroke={1.5}
          />
          <IconMoon
            className={computedColorScheme === 'dark' ? 'visually-hidden' : ''}
            stroke={1.5}
          />
        </ActionIcon>
      </Tooltip>
    </div>
  )
}

export default SwitchTheme