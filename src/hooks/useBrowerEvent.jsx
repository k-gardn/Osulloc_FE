import { useRef, useEffect } from "react";

export default function useBrowserEvent(eventType, listener, options) {
  const callbackRef = useRef();
  callbackRef.current = listener;

  useEffect(() => {
    function onEvent(e) {
      callbackRef.current(e);
    }

    window.addEventListener(eventType, onEvent, options);
    return () => {
      window.removeEventListener(eventType, onEvent, options);
    };
  }, [eventType]);
}
