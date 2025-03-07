import Header from "./Components/Header/Header";
import MyWork from "./Components/MyWork/MyWork";
import MySkills from "./Components/MySkills/MySkills";
import MyHistory from "./Components/MyHistory/MyHistory";
import React, { useContext, useEffect, useState } from "react";
import { AuthorContext } from "./Components/Context/AuthorContext";
import { QuoteContext } from "./Components/Context/QuoteContext";
import Footer from "./Components/Footer/Footer";

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


function App( ) {

const [quote, setQuote] = useState();
const [author, setAuthor] = useState();

function getRandomQuote() {
	let random = Math.floor(Math.random() * 3);
	setQuote(quotesArray[random].quote);
	setAuthor(quotesArray[random].author);
}

  useEffect(() => {
    getRandomQuote();
  }, []);


	return (
		<>
			<QuoteContext.Provider value={quote}>
				<AuthorContext.Provider value={author}>
					<Header />
					<MyHistory />
					<MyWork />
					<MySkills />
				</AuthorContext.Provider>
			</QuoteContext.Provider>
			<Footer/>
		</>
	);
}

export default App;
