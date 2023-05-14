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
				className="flex w-full p-3 mb-4 shadow-md SearchBar bg-slate-50 hover:shadow-lg md:w-full rounded-2xl dark:bg-gray-800"
			>
				<img src={SearchIcon} alt="Icon Search" />
				<input
					ref={ref}
					id="inputCity"
					placeholder="Enter City Name..."
					className="w-full ml-3 focus:outline-none dark:bg-gray-800 bg-slate-50"
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
