import icon from "../asset/sun.gif";

const LoadingTodayWeek = () => {
	return (
		<>
			<div className="items-center justify-center h-full mx-auto w-max">
				<img src={icon} alt="Loading Icon" className="w-24" />
			</div>
		</>
	);
};

export default LoadingTodayWeek;
