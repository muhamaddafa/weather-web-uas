const ConverButton = (props) => {
	const fahrenheitButton = document.querySelector("#fahrenheitButton");
	const celciusButton = document.querySelector("#celciusButton");
	return (
		<div className="flex button convert">
			<button
				id="celciusButton"
				className="p-2 font-bold text-blue-500 duration-200 bg-slate-300 dark:duration-200 rounded-s-2xl innerShadow dark:bg-gray-800"
				onClick={() => {
					celciusButton.classList.add("innerShadow");
					celciusButton.classList.add("dark:innerShadow");
					fahrenheitButton.classList.remove("innerShadow");
					fahrenheitButton.classList.remove("dark:innerShadow");
					celciusButton.classList.add("p-2");
					celciusButton.classList.remove("px-5");
					fahrenheitButton.classList.add("px-5");
					celciusButton.classList.add("text-blue-500");
					fahrenheitButton.classList.remove("text-blue-500");
					fahrenheitButton.classList.remove("dark:font-bold");
					fahrenheitButton.classList.remove("font-bold");
					celciusButton.classList.add("dark:font-bold");
					celciusButton.classList.add("font-bold");
					celciusButton.classList.remove("dark:bg-gray-700");
					celciusButton.classList.add("dark:bg-gray-800");
					fahrenheitButton.classList.remove("dark:bg-gray-800");
					fahrenheitButton.classList.add("dark:bg-gray-700");
					props.setSatuanSuhu("C");
				}}
			>
				&deg;C
			</button>
			<button
				id="fahrenheitButton"
				bg
				className="px-5 duration-200 dark:duration-200 bg-slate-200 dark:bg-gray-700 rounded-e-2xl"
				onClick={() => {
					fahrenheitButton.classList.add("innerShadow");
					fahrenheitButton.classList.add("dark:innerShadow");
					celciusButton.classList.remove("innerShadow");
					celciusButton.classList.remove("dark:innerShadow");
					fahrenheitButton.classList.remove("px-5");
					fahrenheitButton.classList.add("p-2");
					celciusButton.classList.add("px-5");
					celciusButton.classList.remove("text-blue-500");
					fahrenheitButton.classList.add("text-blue-500");
					fahrenheitButton.classList.add("dark:font-bold");
					fahrenheitButton.classList.add("font-bold");
					celciusButton.classList.remove("dark:font-bold");
					celciusButton.classList.remove("font-bold");
					celciusButton.classList.remove("dark:bg-gray-800");
					celciusButton.classList.add("dark:bg-gray-700");
					fahrenheitButton.classList.remove("dark:bg-gray-700");
					fahrenheitButton.classList.add("dark:bg-gray-800");
					props.setSatuanSuhu("F");
				}}
			>
				&deg;F
			</button>
		</div>
	);
};

export default ConverButton;
