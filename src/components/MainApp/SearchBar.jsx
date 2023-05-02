import SearchIcon from "../../asset/img/iconSearch.svg";

const SearchBar = (props) => {
	return (
		<div
			id="searchBar"
			className="SearchBar bg-slate-50 shadow-md hover:shadow-lg w-full md:w-full rounded-2xl p-3 flex dark:bg-gray-800 mb-5"
		>
			<img src={SearchIcon} alt="Icon Search" />
			<input
				type="text"
				id="inputCity"
				placeholder="Enter City Name..."
				className="ml-3 w-full focus:outline-none dark:bg-gray-800 bg-slate-50"
				onKeyDown={function gantiKotaEnter(event) {
					if (event.key === "Enter") {
						props.setVarKota(document.getElementById("inputCity").value);
						document.getElementById("inputCity").blur();
					}
				}}
				onBlur={function gantiKota() {
					props.setVarKota(document.getElementById("inputCity").value);
					document.getElementById("inputCity").value = "";
				}}
			></input>
		</div>
	);
};

export default SearchBar;
