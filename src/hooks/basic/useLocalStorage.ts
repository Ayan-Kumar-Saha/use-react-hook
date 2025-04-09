import { useEffect, useState } from "react";

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [value, setValue] = useState<T>(() => {
        const existingValue = localStorage.getItem(key);
        return existingValue ? JSON.parse(existingValue) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue] as const;
}

export default useLocalStorage;