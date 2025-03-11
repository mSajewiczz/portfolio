import React, {useContext, useState, useEffect } from "react";
import { AuthorContext } from "../Context/AuthorContext";
import { QuoteContext } from "../Context/QuoteContext";
import MoreInfo from "../MoreInfo/MoreInfo";


export default function Header( ) {

	const quote = useContext(QuoteContext);
	const author = useContext(AuthorContext);

	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
  
	let text = ["Hi My Name Is Mikolaj", "Student", "Frontend Developer"];
	let delay:number = 300;
	let infinite:boolean = false;


	useEffect(() => {

		let timeout:number;
  
	  if (currentIndex <= text.length) {
		timeout = setTimeout(() => {
		  setCurrentText(prevText => prevText + text[currentIndex]);
		  setCurrentIndex(prevIndex => prevIndex + 1);
		}, delay);
  
	  } 
	  
		setCurrentIndex(0);
		setCurrentText('');
	  

	  return () => clearTimeout(timeout);
	}, [currentIndex, delay, infinite, text]);


	const [showPopup, setShowPopup] = useState(false);

	function handleShowPopup()
	{	
		setShowPopup(true);

		setTimeout(() => {
			setShowPopup(false);
		}, 3000)
	}
	
	
	return (
		<>
			<section id="#header">
				{showPopup && <MoreInfo/>}
				
				<h1 className="text-4xl">{currentText}</h1>
				<p>"<span className="italic">{quote}</span>" {author}</p>

				<div>
					<button className="border " onClick={handleShowPopup}>Get more info about me!</button>
				</div>
			</section>
		</>
	);
}