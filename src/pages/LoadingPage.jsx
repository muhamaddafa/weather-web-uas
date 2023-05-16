import icon from "../asset/sun.gif";

const LoadingPage = () => {
	return (
		<>
			<div className="flex items-center justify-center h-screen bg-white">
				<div className="w-max">
					<img src={icon} alt="Loading Icon" className="w-24 mx-auto" />
					<h1 className="mt-6 text-center">WEATHER IN PREDICTION</h1>
				</div>
			</div>
		</>
	);
};

export default LoadingPage;
