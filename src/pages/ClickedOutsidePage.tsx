import { FunctionComponent, useRef } from "react";
import useClickedOutside from "../hooks/intermediate/useClickedOutside";

const ClickedOutsidePage: FunctionComponent = () => {

    const boundaryRef = useRef<HTMLDivElement>(null);

    const handleClickedOutside = () => {
        alert('You clicked outside!!')
    }

    useClickedOutside(boundaryRef, handleClickedOutside)

    return (
        <div >
            <h1>useClickedOutside</h1>
            <div className="flex flex-col justify-center items-center py-6">
                <div ref={boundaryRef} className="flex justify-center items-center w-[300px] h-[300px] border border-white cursor-pointer">
                    Click outside this box
                </div>
            </div>
        </div >
    )
}

export default ClickedOutsidePage;