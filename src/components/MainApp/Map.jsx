import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapComponents = (props) => {
	const containerStyle = {
		width: "100%",
		height: "100%",
		borderRadius: "12px",
	};

	const center = {
		lat: +props.latitude,
		lng: +props.longitude,
	};

	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyA-fSQhO00teTl-vSip_I9qYh-zaedPv-A",
	});

	return isLoaded ? (
		<div className="flex items-center justify-center border-2 border-gray-300 shadow-lg HeatMap bg-slate-50 rounded-xl lg:h-full lg:w-full h-96 dark:bg-gray-800 dark:shadow-gray-900 dark:border-gray-500">
			<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={17}>
				<Marker position={center} />
			</GoogleMap>
		</div>
	) : (
		<></>
	);
};

export default MapComponents;
