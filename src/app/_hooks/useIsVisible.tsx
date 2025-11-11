import { useState, useEffect } from "react";

export default function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => {
      setIsVisible(false);
    };
  }, []);

  return isVisible;
}
