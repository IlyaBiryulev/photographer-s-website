import { useEffect, useState } from "react";

function useResizeScreen() {
  const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints;
  const [screenWidth, setScreenWidth] = useState(isTouchScreen ? window.screen.width : window.innerWidth);

  useEffect(() => {
    let timer;

    function handleScreenResize() {
      setScreenWidth(isTouchScreen ? window.screen.width : window.innerWidth);
    }

    function handleSetTimeout() {
      clearTimeout(timer);
      timer = setTimeout(handleScreenResize, 1000);
    }

    function handleResize() {
      if (!timer) {
        handleSetTimeout();
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [isTouchScreen]);

  return screenWidth;
}

export default useResizeScreen;
