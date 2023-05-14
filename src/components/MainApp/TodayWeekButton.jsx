const TodayWeekButton = (props) => {
	return (
		<div>
			<button
				id="btnToday"
				className="px-5 py-2 duration-200 active hover:border-b-2 dark:duration-200"
				onClick={() => {
					props.setForecastPeriod("today");
					props.setSlcing([0, 5]);
					props.setTimeSet(1);
					props.setRamalan1(0);
					props.setRamalan2(1);
					props.setRamalan3(2);
					props.setRamalan4(3);
					props.setRamalan5(4);
					document.getElementById("btnToday").classList.add("active");
					document.getElementById("btnWeek").classList.remove("active");
				}}
			>
				Today
			</button>
			<button
				id="btnWeek"
				className="px-5 py-2 duration-200 hover:border-b-2 dark:duration-200"
				onClick={() => {
					props.setForecastPeriod("weekly");
					props.setSlcing([5, 10]);
					props.setTimeSet(0);
					props.setRamalan1(6);
					props.setRamalan2(15);
					props.setRamalan3(23);
					props.setRamalan4(31);
					props.setRamalan5(39);
					document.getElementById("btnWeek").classList.add("active");
					document.getElementById("btnToday").classList.remove("active");
				}}
			>
				Weekly
			</button>
		</div>
	);
};

export default TodayWeekButton;
