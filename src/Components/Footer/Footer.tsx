import {useRef} from "react";

export default function Footer()
{
    const date = useRef();

    const newDate = new Date();
    date.current = newDate.getFullYear();

    const test:number = date.current;
    
    return (
        
        <section className="bg-green-400 h-24 w-full">
            <div className="flex justify-center items-center w-full h-full">
                <h2 className="" ref={date}>Portfolio created by Mikolaj Sajewicz &copy; {test}</h2>
            </div>
        </section>
    );
}