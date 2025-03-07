import { IoMdClose } from "react-icons/io";

interface MyWorkCardPopupProps {
    img:string,
    title: string,
    handleClosePopup: () => void
}

export default function MyWorkCardPopup({ img, title, handleClosePopup }:MyWorkCardPopupProps ) {
	return (
		<>
			<div className="rounded-2xl border  h-160 w-300 bg-white absolute z-10">
				{" "}
				<div className="flex justify-between p-2">
					<h2 className="text-3xl">{title}</h2>
					<button
						className="cursor-pointer text-3xl"
						onClick={handleClosePopup}>
						<IoMdClose />
					</button>
				</div>
				<div>
					<img className="w-150 h-100" src={img} alt="" />
				</div>
			</div>
		</>
	);
}
