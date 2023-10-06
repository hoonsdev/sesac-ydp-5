import { useEffect } from 'react';

// custom hooks
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    // clean up
    return () => (document.title = prevTitle);
  }, [title]);
}
