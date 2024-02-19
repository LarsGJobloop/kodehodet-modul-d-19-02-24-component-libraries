import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

export function useMoTD(newMessage) {
  const setMoTD = useOutletContext();

  useEffect(() => {
    setMoTD(newMessage);

    return () => setMoTD("Hello World");
  }, [setMoTD, newMessage]);
}
