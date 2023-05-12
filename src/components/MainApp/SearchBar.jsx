import SearchIcon from "../../asset/img/iconSearch.svg";
import CurrentButton from "./CurrentButton";
import { usePlacesWidget } from "react-google-autocomplete";

const SearchBar = (props) => {
	const { ref } = usePlacesWidget({
		apiKey: "AIzaSyA-fSQhO00teTl-vSip_I9qYh-zaedPv-A",
		options: {
			types: ["establishment"],
			componentRestrictions: { country: "id" },
		},
	});

	return (
		<>
			<div
				id="searchBar"
				className="SearchBar bg-slate-50 shadow-md hover:shadow-lg w-full md:w-full rounded-2xl p-3 flex dark:bg-gray-800 mb-4"
			>
				<img src={SearchIcon} alt="Icon Search" />
				<input
					ref={ref}
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
				/>

				<CurrentButton setVarKota={props.setVarKota} />
			</div>
		</>
	);
};

export default SearchBar;
