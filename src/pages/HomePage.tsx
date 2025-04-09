import { useNavigate } from "react-router";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex h-screen justify-center items-center">
            <button onClick={() => {
                navigate('/local-storage')
            }}>Get Started</button>
        </div>
    )
}

export default HomePage