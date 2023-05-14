import gpsIcon from "../../asset/img/gpsIcon.svg";
import Geocode from "react-geocode";

const CurrentButton = (props) => {
	function getAddress() {
		const success = (position) => {
			const lat = position.coords.latitude;
			const lng = position.coords.longitude;
			Geocode.fromLatLng(`${lat}`, `${lng}`).then(
				(response) => {
					const address = response.results[0].formatted_address;
					props.setVarKota(address);
				},
				(error) => {
					console.error(error);
				}
			);
		};
		const error = () => {
			console.log("ERROR");
		};
		navigator.geolocation.getCurrentPosition(success, error);
	}

	return (
		<button
			id="currentButton"
			className="p-1 rounded-full shadow-md gpsButton"
			onClick={getAddress}
		>
			<img src={gpsIcon} alt="Icon GPS" />
		</button>
	);
};

export default CurrentButton;
