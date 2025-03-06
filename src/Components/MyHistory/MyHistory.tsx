import CourseCard from "../CourseCard/CourseCard";

const dataArray = [
	{
		title: `"React - The Complete Guide 2025 (incl. Next.js, Redux)" - React.js Course`,
		caption: "Professional course about working with dynamic pages in React.js library. Besides I learnt also about Tailwind, TypeScript and Next.js.",
		date: "2025",
	},
	{
		title: `"Kurs Tworzenia Stron WWW" parts 1-4 - Frontend Dev Course`,
		caption: "Series of courses, where I had learnt about basics of Frontend and web developing.",
		date: "2022-2024",
	},
	{ title: `"Bootstrap Od Podstaw" - Bootstrap Course`, caption: "Course of Bootstrap library. Here I had learnt how to work with docs & how to use custom components.", date: "2023" },
	{ title: `"JavaScript - Jedyny Kurs, Którego Potrzebujesz" - JavaScript Course`, caption: "JavaScript course. That was very important moment in my career to understand how JavaScript works.", date: "2023-2024" },
];

export default function MyHistory() {
    let isActive:boolean = false;
	return (
		<section className="flex flex-col justify-center items-center">
			<div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl">Education</h1>
					<p>Steps of education</p>

					<div>
						<h3>High School EZN Wroclaw, Poland</h3>
						<h4>2023-present</h4>
						<p>
							High technical school in Poland, in Wroclaw. I'm still learning
							about my future job - programmer. That's my main subject on
							studing.
						</p>
					</div>
				</div>
			</div>

			<div>
				<div className="flex flex-col gap-2">
					<h1 className="text-3xl">Finished Courses</h1>
					<p>Courses, that I had finished</p>
                    <CourseCard isActive = {isActive} title={dataArray[0].title} caption={dataArray[0].caption} date={dataArray[0].date}/>
                    <CourseCard isActive = {isActive}title={dataArray[1].title} caption={dataArray[1].caption} date={dataArray[1].date}/>
                    <CourseCard isActive = {isActive}title={dataArray[2].title} caption={dataArray[2].caption} date={dataArray[2].date}/>
                    <CourseCard isActive = {isActive}title={dataArray[3].title} caption={dataArray[3].caption} date={dataArray[3].date}/>
				</div>
			</div>
		</section>
	);
}
