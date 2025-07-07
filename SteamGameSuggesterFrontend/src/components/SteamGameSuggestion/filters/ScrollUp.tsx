import { useState, useEffect } from 'react';
import { Affix, ActionIcon, Transition } from '@mantine/core';
import { IconArrowUp } from '@tabler/icons-react';

function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={showButton}>
        {(styles) => (
          <ActionIcon
            style={styles}
            color="blue"
            radius="xl"
            size="lg"
            onClick={scrollToTop}
            variant="filled"
          >
            <IconArrowUp size={28} />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  )
}

export default ScrollToTopButton;
