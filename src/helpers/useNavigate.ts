import { useCallback } from "react";

function useRedirect() {
  return useCallback((url: string) => {
    window.location.href = url;
  }, []);
}

export default useRedirect;
