import { useEffect, useState } from "react";

const useDebounce = <T>(value: T, delay: number): T => {
    const [latestValue, setLatestValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setLatestValue(value), delay);
        return () => clearTimeout(timer);
    }, [value])


    return latestValue;
}

export default useDebounce;