import { useCallback } from "react";

function useRedirect() {
  return useCallback((url: string) => {
    //@ts-ignore
    window.dataLayer = window.dataLayer || [];
    //@ts-ignore
    window.dataLayer.push({
      event: "pageview",
      page: url,
    });

    window.location.href = url;
  }, []);
}

export default useRedirect;
