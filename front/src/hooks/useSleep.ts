import { useCallback } from "react";

export const useSleep = () => {
  // const sleep = useCallback( async (waitMsec: number): Promise<void> => {
  //   let startMsec: Date = new Date();
  //   while (((new Date()).valueOf() - startMsec.valueOf()) < waitMsec);
  // }, []);
  const sleep = useCallback(async (ms: number): Promise<void> => {
    return new Promise((_) => {
      setTimeout(_, ms)
    })
  }, []);
  return { sleep }
}
