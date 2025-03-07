import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function MyWorkCard({ title, description, pageLink, img }) {
	const [showPopup, setShowPopup] = useState(false);

	function handleShowPopup(value:boolean) 
    {
        setShowPopup(value);
    }

    function handleClosePopup()
    {
        setShowPopup(false);
    }

	return (
		<>
			<div
				onClick={() => handleShowPopup(true)}
				className="flex flex-col max-w-xs w-xs h-100 justify-start items-center border gap-3 p-1.5 rounded-lg hover:scale-98 transition-all cursor-pointer">
				<img
					className="w-xs rounded-xs h-40"
					src={img}
					alt="Photo of my work"
				/>
				<h1>{title}</h1>
				<p className="h-30">{description}</p>
				<a
					className="bg-green-500 px-2 py-1 hover:bg-green-800 transition-all"
					href={pageLink}
					target="blank">
					Link to page
				</a>
			</div>


            {showPopup && <div className="rounded-2xl border  h-160 w-300 bg-white absolute z-10"> <p>{title}</p> <img src={img} alt="" /> <button onClick = {handleClosePopup}><IoMdClose /></button></div>}
		</>
	);
}
