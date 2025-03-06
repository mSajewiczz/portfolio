import {useState} from "react";

export default function MySkills() {

    const [info, setInfo] = useState({"html": false, "css": false, "react": false, "tailwind": false, "js": false, "en": false, "de": false, "bootstrap": false});

    function showInfo(value:string, condition:boolean)
    {
        setInfo({
            ...info,
            [value]: condition
        });
    }


	return (
		<>
			<section className="flex flex-col justify-center items-center gap-2  h-screen">
				<h1 className="text-3xl">My Skills</h1>
				<p>Here you can read what skills I acquired as a Frontend Developer</p>

				<div className="h-screen w-full flex flex-col justify-center items-center relative">
					<div className="lg:w-xs  lg:bg-black lg:h-0.5 -top-80 left-40 relative flex items-center justify-end"><p onMouseEnter={() => showInfo("html", true)} onMouseLeave={() => showInfo("html", false)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">HTML5</p></div>

					<div className="lg:w-xs  lg:bg-black lg:h-0.5 -top-60 -left-40 relative flex items-center justify-start"><p onMouseEnter={() => showInfo("css", true)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">CSS</p></div>
                    <div onMouseEnter={() => showInfo("react", true)} onMouseLeave={() => showInfo("react", false)} className="lg:w-xs  lg:bg-black lg:h-0.5 top-0 left-40 relative flex items-center justify-end"><p className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">React.js</p> {info.react ? <p className="absolute left-90 p-6 border">React skills</p> : null}</div>
					<div className="lg:h-full lg:w-0.5 lg:bg-black absolute"></div>
					<div className="lg:w-xs  lg:bg-black lg:h-0.5 -top-40 left-40 relative flex items-center justify-end"><p onMouseEnter={() => showInfo("js", true)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">JavaScript</p></div>
					<div className="lg:w-xs  lg:bg-black lg:h-0.5 -top-20 -left-40 relative flex items-center justify-start"><p onMouseEnter={() => showInfo("bootstrap", true)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">Bootstrap </p> </div>
                    <div className="lg:w-xs  lg:bg-black lg:h-0.5 top-20 -left-40 relative flex items-center justify-start"><p onMouseEnter={() => showInfo("tailwind", true)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">Tailwind </p> </div>
                    <div className="lg:w-xs  lg:bg-black lg:h-0.5 top-40 left-40 relative flex items-center justify-end"><p onMouseEnter={() => showInfo("en", true)}  className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">English B1</p></div>
                    <div className="lg:w-xs  lg:bg-black lg:h-0.5 top-60 -left-40 relative flex items-center justify-start"><p onMouseEnter={() => showInfo("de", true)} className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">German B1/B2 </p></div>
                    <div className="top-95 relative flex items-center justify-start"><p className="-mx-15 bg-green-600 px-5 py-1 cursor-pointer">Frontend Developer</p></div>
				</div>
			</section>
		</>
	);
}
