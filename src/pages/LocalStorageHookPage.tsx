import useLocalStorage from "../hooks/basic/useLocalStorage";

const LocalStorageHookPage = () => {
    const [count, setCount] = useLocalStorage<number>("counter", 0);
    return (
        <div>
            <h1>useLocalStorage</h1>
            <div className="flex flex-col justify-center items-center py-6">
                <h2 className="text-xl">Count: {count}</h2>
                <div>
                    <button onClick={() => setCount((prev: number) => prev + 1)}>Increment</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>

            </div>
        </div>
    )
}

export default LocalStorageHookPage;