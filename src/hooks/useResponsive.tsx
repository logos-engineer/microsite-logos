import { useMediaQuery } from "@chakra-ui/react";
import { useState, useEffect } from "react";

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isOnlyMobile = useMediaQuery("(max-width: 640px)");
  const isMobile = useMediaQuery("(min-width: 640px)");
  const isTablet = useMediaQuery("(min-width: 768px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (typeof window !== "undefined") setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
    isOnlyMobile: isClient ? isOnlyMobile : false,
  };
}

export default useResponsive;
