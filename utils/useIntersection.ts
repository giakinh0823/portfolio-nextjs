import { useState, useEffect } from "react";

export const useIntersection = (ref: any, threshold = 0.5) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    ;(() => {
      if (ref.current) {
        const ob = new IntersectionObserver(
          ([entry], observer) => { 
            if (entry.intersectionRatio >= threshold) { // sau thời gian trễ {threshold} giây sẽ thực hiện
              setState(true);
            } else {
              setState(false);
            }
          },
          { threshold }
        );
        ob.observe(ref.current);

        return () => {
          ob.unobserve(ref.current);
        };
      }
    })()
    return () => {setState(false)};
  }, [ref, threshold]);

  return isVisible;
};
