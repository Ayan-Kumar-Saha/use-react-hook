import { useState } from "react";
import useDebounce from "../hooks/basic/useDebounce";

const DebouncePage = () => {
    const delay: number = 1000;
    const [input, setInput] = useState("");
    const debouncedInput = useDebounce(input, delay);

    return (
        <div>
            <h1>useDebounce</h1>
            <div className="flex flex-col justify-center items-center py-6">
                <div className="p-4">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                        className="border px-4 py-2 rounded w-full"
                    />
                </div>
                <div className="mt-10 text-lg">Delay: {delay} ms</div>
                <div className="mt-4 text-xl">Debounced Input: {debouncedInput}</div>
            </div>
        </div>

    );
}

export default DebouncePage;