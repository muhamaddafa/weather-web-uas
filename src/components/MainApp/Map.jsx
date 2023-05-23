import { MapContainer, TileLayer, Marker, Popup, Polygon } from "react-leaflet";
import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import mark from "../../asset/img/Marker.svg";
import { statesData } from "../../asset/data";
import React from "react"

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
				zoom={5}
				scrollWheelZoom={true}
				style={{ width: "100%", height: "100%", borderRadius: "0.75rem" }}
			>
				<TileLayer
					attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
					url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=FQ5ls4w6O8WhuHdIrSFo"
				/>
      			{
  					statesData.features.map((state) => {
    				let coordinates;

    				if (state.geometry.type === 'Polygon') {
      					coordinates = [state.geometry.coordinates[0].map((item) => [item[1], item[0]])];
    				} else if (state.geometry.type === 'MultiPolygon') {
      					coordinates = state.geometry.coordinates.map((polygon) =>
        					polygon[0].map((item) => [item[1], item[0]])
      					);
    				}

					const polygonRef = React.createRef();

    				return (
      				<Polygon
					  	ref={polygonRef}
        				pathOptions={{
          				fillColor: '#FD8D3C',
          				fillOpacity: 0.7,
          				weight: 2,
          				opacity: 1,
          				dashArray: 3,
          				color: 'white',
        			}}
        			positions={coordinates}
        			eventHandlers={{

          				mouseover: (e) => {
            				const layer = e.target;
            				layer.setStyle({
              					dashArray: '',
              					fillColor: '#BD0026',
              					fillOpacity: 0.7,
              					weight: 2,
              					opacity: 1,
              					color: 'white',
            				});
          				},

          				mouseout: (e) => {
            				const layer = e.target;
            				layer.setStyle({
              					fillOpacity: 0.7,
              					weight: 2,
              					dashArray: '3',
              					color: 'white',
              					fillColor: '#FD8D3C',
            				});
          				},

          				click: (e) => {
							const polygon = polygonRef.current;
							const bounds = polygon.getBounds();
							const centroid = bounds.getCenter();
							const map = polygon._map;
				
							map.flyTo(centroid, 7); 
						},

        			}}
      				/>
    				);
  					})
				}				

				<Marker position={position} icon={markIcon}>
					<Popup>
						<div>
							<h1>Humidity : {props.humidity} %</h1>
							<h1>Pressure : {props.pressure} hPa</h1>
							<h1>Wind Speed : {props.wind} km/h</h1>
							<h1>Visibility : {props.visibility} km</h1>
						</div>
					</Popup>
				</Marker>
			</MapContainer>
		</div>
	);
};

export default MapComponents;
