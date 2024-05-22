import { useEffect, useRef, useState } from 'react';

export function useIntersectionObserver(options) {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    onIntersect,
  } = options;

  const targetRef = useRef(null);

  const [entry, setEntry] = useState();

  useEffect(() => {
    const currentRef = targetRef.current;

    const observer = new IntersectionObserver(
      entries => {
        const [entry] = entries;

        if (entry.isIntersecting) {
          onIntersect();
        }
        setEntry(entry);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return function () {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, [threshold, root, rootMargin, onIntersect]);

  return [targetRef, entry];
}
