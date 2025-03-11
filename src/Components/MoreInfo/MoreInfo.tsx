import { createPortal } from "react-dom";

export default function MoreInfo()
{
    return createPortal(
        <>
        
        <div className="bg-red-600 z-30 h-auto w-50">
            <p>This interesting popup is created by createPortal :)</p>
        </div>
    
        </>,
        document.getElementById("info") as HTMLElement
    );
}