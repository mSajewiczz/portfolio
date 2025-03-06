import React, { useState, useEffect } from "react";

const quotesArray = [
	{
		quote: `The best motivation always comes from within.`,
		author: `~ Michael Johnson (Gold Medal Sprinter)`,
	},
	{
		quote: `Champions aren't made in the gyms. Champions are made from something they have deep inside them - a desire, a dream, a vision.`,
		author: `~ Muhammad Ali (World HeavyWeight Champion Boxer)`,
	},
	{
		quote: `Wisdom is always an overmatch for strength.`,
		author: `~ Phil Jackson (NBA Coach)`,
	},
	{
		quote: `Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.`,
		author: `~ Donald Trump (Business Leader)`,
	},
];

let quote: string;
let author: string;

function getRandomQuote() {
	let random = Math.floor(Math.random() * 3);
	quote = `${quotesArray[random].quote}`;
	author = `${quotesArray[random].author}`;
}

export default function Header() {

	const [currentText, setCurrentText] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
  
	let text = ["Hi My Name Is Mikolaj", "I'm Student", "And Frontend Developer"];
	let delay:number = 300;
	let infinite:boolean = false;


	useEffect(() => {
	  for(let i = 0; i < text.length; i++) {
		let timeout:number;
  
	  if (currentIndex <= text[i].length) {
		timeout = setTimeout(() => {
		  setCurrentText(prevText => prevText + text[i][currentIndex]);
		  setCurrentIndex(prevIndex => prevIndex + 1);
		}, delay);
  
	  } else if (infinite) {
		setCurrentIndex(0);
		setCurrentText('');
	  }

	  return () => clearTimeout(timeout);

	  }
	}, [currentIndex, delay, infinite, text]);
  
	return (
		<>
			{getRandomQuote()}
			<section id="#header">
				<h1 className="text-4xl">{currentText}</h1>
				{/* <p>"<span className="italic">{quote}</span>" {author}</p> */}
			</section>
		</>
	);
}


/*let timeout:number;
  
	  if (currentIndex <= text.length) {
		timeout = setTimeout(() => {
		  setCurrentText(prevText => prevText + text[currentIndex]);
		  setCurrentIndex(prevIndex => prevIndex + 1);
		}, delay);
  
	  } else if (infinite) {
		setCurrentIndex(0);
		setCurrentText('');
	  }
  
	  return () => clearTimeout(timeout); */