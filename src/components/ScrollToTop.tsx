import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop component that automatically scrolls the window to the top
 * when the route changes or when the component mounts.
 *
 * This component should be placed inside your Router but outside your Routes.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Scroll to top when pathname changes or on initial load
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Using 'instant' instead of 'smooth' for immediate effect
    });
  }, [pathname]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;
