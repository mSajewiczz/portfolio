import bazalginPhoto from "../../img/bazalgin.png";
import juliaplusPhoto from "../../img/juliaplus.png";
import purelPhoto from "../../img/purel.png";

import MyWorkCard from "../MyWorkCard/MyWorkCard";

const myWorkCardData = [
	{
		title: "juliaplus.pl",
		description:
			"Responsive website for big company from Wroclaw, Poland, that improved my skills in UX/UI design and working with another people in one project.",
		link: "https://juliaplus.pl/",
	},
	{
		title: "bazalgin.pl",
		description:
			"My first project, where I had learnt many things about creating grafic projects of websites, how to split work and develop my website in internet.",
		link: "https://bazalgin.pl/",
	},
	{
		title: "purelocieplenia.pl",
		description:
			"Simple, but fully functional website for small business in Wroclaw. Here I learnt how to use WordPress in Frontend project and how to create logos.",
		link: "https://purelocieplenia.com/",
	},
];

export default function MyWork() {
	return (
		<section className="flex flex-col gap-10">
			<div className="flex flex-col justify-center items-center gap-2">
				<h1 className="text-3xl">My Work</h1>
				<p>Here you can find projects, that I've worked on</p>
			</div>

			<div className="flex flex-col justify-center items-center gap-10 flex-wrap md:justify-evenly md:flex-row">
				<MyWorkCard
					title={myWorkCardData[0].title}
					description={myWorkCardData[0].description}
					pageLink={myWorkCardData[0].link}
					img={juliaplusPhoto}
				/>
				<MyWorkCard
					title={myWorkCardData[1].title}
					description={myWorkCardData[1].description}
					pageLink={myWorkCardData[1].link}
					img={bazalginPhoto}
				/>
				<MyWorkCard
					title={myWorkCardData[2].title}
					description={myWorkCardData[2].description}
					pageLink={myWorkCardData[2].link}
					img={purelPhoto}
				/>
			</div>
		</section>
	);
}
