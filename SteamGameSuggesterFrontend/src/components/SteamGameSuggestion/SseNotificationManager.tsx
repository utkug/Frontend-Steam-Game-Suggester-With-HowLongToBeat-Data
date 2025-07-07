// SseNotificationManager.ts
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';

export const showSseNotification = () => {
  notifications.show({
    id: 'load-games',
    title: 'Loading Steam Games',
    message: 'Fetching game data from server...',
    loading: true,
    autoClose: false,
    withCloseButton: false,
  })
}

export const updateSseNotificationSuccess = () => {
  notifications.update({
    id: 'load-games',
    title: 'Games Loaded',
    message: 'All game data successfully fetched.',
    color: 'teal',
    icon: <IconCheck size={16} />,
    loading: false,
    autoClose: 2000,
  })
}

export const updateSseNotificationError = () => {
  notifications.update({
    id: 'load-games',
    title: 'Connection Error',
    message: 'Could not fetch games from server.',
    color: 'red',
    icon: <IconX size={16} />,
    loading: false,
    autoClose: 3000,
  })
}
