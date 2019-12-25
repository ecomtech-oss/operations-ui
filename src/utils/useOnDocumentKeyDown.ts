import { useLayoutEffect } from 'react';

export function useOnDocumentKeyDown(
  handleKeyPress: (e: KeyboardEvent) => void,
) {
  useLayoutEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
}
