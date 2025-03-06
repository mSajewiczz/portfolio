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
	return (
		<>
			{getRandomQuote()}
			<section id="#header">
				<h1 className="text-4xl">Hi, my name is Mikolaj</h1>
				<p>"<span className="italic">{quote}</span>" {author}</p>
			</section>
		</>
	);
}
