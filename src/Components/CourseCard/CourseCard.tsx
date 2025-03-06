import { BsCalendar2DateFill } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { FaTv } from "react-icons/fa";
import { useState } from "react";
export default function CourseCard( {title, date, caption, isActive} ) {

    const [info, setInfo] = useState(false);


    function handleShowData(value:boolean)
    {
        setInfo(value);
        isActive = value;
    }

    let rotate = "rotate-180";

	return (
		<>
			<div className="flex flex-col gap-2 m-4 max-w-3xl w-3xl">
				<h3 className="flex items-center gap-2">
                    <FaTv/>
					{title}
                    <button onClick={() => handleShowData(info ? false : true)} className="cursor-pointer"><SlArrowDown className={info ? "rotate-180 transition-all" : "rotate-0 transition-all"}/></button>
				</h3>

                {info && <><h4 className="flex items-center gap-2 transition-all"><BsCalendar2DateFill /> {date}</h4> <p>{caption}</p></>}		

			</div>
		</>
	);
}




/*




*/