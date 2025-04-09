import { RefObject, useEffect } from "react";

const useClickedOutside = (elRef: RefObject<HTMLDivElement | null>, callback: () => void) => {
    useEffect(() => {
        const handClickEvent = (e: Event) => {
            if (!elRef?.current?.contains(e.target as Node) && callback) {
                callback();
            };
        }
        window.addEventListener('click', handClickEvent, true);
        return () => window.removeEventListener('click', handClickEvent, true)
    }, [elRef, callback])
}

export default useClickedOutside;