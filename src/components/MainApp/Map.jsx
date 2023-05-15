import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import mark from "../../asset/img/Marker.svg";

const MapComponents = (props) => {
	const mapRef = useRef(null);

	useEffect(() => {
		if (mapRef.current) {
			mapRef.current.flyTo([props.latitude, props.longitude], 17);
		}
	}, [props.latitude, props.longitude]);

	let position = [props.latitude, props.longitude];

	if (!props.latitude) {
		return null;
	}

	const markIcon = new L.Icon({
		iconUrl: mark,
		iconSize: [35, 35],
	});

	return (
		<div className="flex items-center justify-center border-2 border-gray-300 shadow-lg bg-slate-50 rounded-xl lg:h-full lg:w-full h-96 dark:bg-gray-800 dark:shadow-gray-900 dark:border-gray-500">
			<MapContainer
				ref={mapRef}
				center={position}
				zoom={20}
				scrollWheelZoom={true}
				style={{ width: "100%", height: "100%", borderRadius: "0.75rem" }}
			>
				<TileLayer
					attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
					url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=FQ5ls4w6O8WhuHdIrSFo"
				/>
				<Marker position={position} icon={markIcon}>
					<Popup>
						<div>
							<h1>Lol</h1>
						</div>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapComponents;
