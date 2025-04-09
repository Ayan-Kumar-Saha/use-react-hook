import { FunctionComponent } from "react";
import useNetworkStatus from "../hooks/basic/useNetworkStatus";

const NetworkStatusPage: FunctionComponent = () => {

    const isOnline = useNetworkStatus();

    return (
        <div>
            <h1>useNetworkStatus</h1>
            <div className="flex flex-col justify-center items-center py-6">
                <div className="p-4">
                    {
                        isOnline
                            ? <span>🟢 Online</span>
                            : <span>🔴 Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}

export default NetworkStatusPage;