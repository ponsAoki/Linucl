import { useCallback } from "react";

export const useSleep = () => {
  const sleep = useCallback( async (waitMsec: number): Promise<void> => {
    let startMsec: Date = new Date();
    while (((new Date()).valueOf() - startMsec.valueOf()) < waitMsec);
  }, []);
  return { sleep }
}
