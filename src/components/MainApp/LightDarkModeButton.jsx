const LightDarkModeButton = () => {
	return (
		<div className="button darkMode flex justify-center">
			<button
				id="lightButton"
				className="p-2 dark:px-5 bg-slate-300 dark:duration-200 duration-200 rounded-s-2xl dark:bg-gray-700 text-blue-500 font-medium dark:font-normal dark:text-white"
				onClick={() => {
					document.querySelector("html").classList.remove("dark");
					document.querySelector("body").classList.remove("bg-gray-900");
					document.querySelector("#lightButton").classList.add("innerShadow");
					document.querySelector("#darkButton").classList.remove("innerShadow");
				}}
			>
				<i class="fa-solid fa-sun"></i>
			</button>
			<button
				id="darkButton"
				className="px-5 dark:p-2 dark:duration-200 duration-200 bg-slate-200 dark:bg-gray-800 dark:text-blue-500 dark:font-medium rounded-e-2xl"
				onClick={() => {
					document.querySelector("html").classList.add("dark");
					document.querySelector("body").classList.add("bg-gray-900");
					document
						.querySelector("#lightButton")
						.classList.remove("innerShadow");
					document.querySelector("#darkButton").classList.add("innerShadow");
				}}
			>
				<i class="fa-solid fa-moon"></i>
			</button>
		</div>
	);
};

export default LightDarkModeButton;
