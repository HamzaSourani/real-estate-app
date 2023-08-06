import React, { useCallback, useEffect } from "react";

type TViewPoint = "xs" | "sm" | "md" | "lg" | "xl" | null;
const useViewPoint = () => {
  const [viewPoint, setViewPoint] = React.useState<TViewPoint>(null);

  const onResize = useCallback(() => {
    if (0 <= window.innerWidth && window.innerWidth <= 600) setViewPoint("xs");
    else if (600 < window.innerWidth && window.innerWidth <= 900)
      setViewPoint("sm");
    else if (900 < window.innerWidth && window.innerWidth <= 1200)
      setViewPoint("md");
    else if (1200 < window.innerWidth && window.innerWidth <= 1536)
      setViewPoint("lg");
    else if (1536 < window.innerWidth) setViewPoint("xl");
  }, []);

  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize, viewPoint]);
  return viewPoint;
};

export default useViewPoint;
