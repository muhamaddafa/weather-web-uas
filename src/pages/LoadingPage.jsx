import icon from "../asset/sun.gif";

const LoadingPage = () => {
	return (
		<>
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="w-max">
					<img src={icon} alt="Loading Icon" className="w-24 mx-auto" />
					<h1 className="mt-6 text-center">
						<span>W</span>
						<span>E</span>
						<span>A</span>
						<span>T</span>
						<span>H</span>
						<span>E</span>
						<span>R</span>
						<span className="opacity-0">_</span>
						<span>O</span>
						<span>N</span>
						<span className="opacity-0">_</span>
						<span>P</span>
						<span>R</span>
						<span>E</span>
						<span>D</span>
						<span>I</span>
						<span>C</span>
						<span>T</span>
						<span>I</span>
						<span>O</span>
						<span>N</span>
					</h1>
				</div>
			</div>
		</>
	);
};

export default LoadingPage;
