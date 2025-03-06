export default function MySkills() {
	return (
		<>
			<section className="flex flex-col justify-center items-center gap-2 h-100 h-screen">
				<h1 className="text-3xl">My Skills</h1>
				<p>Here you can read what skills I acquired</p>

				<div className="h-screen w-full flex flex-col justify-center items-center relative">
					<div className="w-xs bg-black h-0.5 -top-60 left-40 relative flex items-center justify-end"><p className="-mx-15 bg-amber-600 px-2 py-1">HTML</p></div>
					<div className="w-xs bg-black h-0.5 -top-40 -left-40 relative flex items-center justify-start"><p className="-mx-15 bg-amber-600 px-2 py-1">CSS</p></div>
                    <div className="w-xs bg-black h-0.5 top-20 left-40 relative flex items-center justify-end"><p className="-mx-15 bg-amber-600 px-2 py-1">React.js</p></div>
					<div className="h-full w-0.5 bg-black absolute"></div>
					<div className="w-xs bg-black h-0.5 -top-20 left-40 relative flex items-center justify-end"><p className="-mx-15 bg-amber-600 px-2 py-1">JavaScript</p></div>
					<div className="w-xs bg-black h-0.5 top-0 -left-40 relative flex items-center justify-start"><p className="-mx-15 bg-amber-600 px-2 py-1">Bootstrap </p> </div>
                    <div className="w-xs bg-black h-0.5 top-40 -left-40 relative"></div>
				</div>
			</section>
		</>
	);
}
