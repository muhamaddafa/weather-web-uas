import "./App.css";
import "./asset/fontawesome-free-6.4.0-web/css/fontawesome.css";
import "./asset/fontawesome-free-6.4.0-web/css/brands.css";
import "./asset/fontawesome-free-6.4.0-web/css/solid.css";
import Geocode from "react-geocode";
import CardForecast from "./components/MainApp/CardForecast";
import DayForecast from "./components/MainApp/DayForecast";
import Highlight from "./components/MainApp/Highlight";
import Map from "./components/MainApp/Map";
import NavBar from "./components/MainApp/Navbar";
import ConvertButton from "./components/MainApp/ConvertButton";
import SearchBar from "./components/MainApp/SearchBar";
import TodayWeekButton from "./components/MainApp/TodayWeekButton";
import LoadingPage from "./pages/LoadingPage";
import Footer from "./components/MainApp/Footer";
import humidityIcon from "./asset/img/humidityIcon.svg";
import windIcon from "./asset/img/windStatusIcon.svg";
import pressureIcon from "./asset/img/pressureIcon.svg";
import visibilityIcon from "./asset/img/visibilityIcon.svg";
import { useState, useEffect } from "react";
import Chart from "./components/MainApp/Chart";

function App() {
	const humditiyTitle = "Humidity";
	const visibilityTitle = "Visibility";
	const windTitle = "Wind Status";
	const pressureTitle = "Pressure";
	const [mainData, setMainData] = useState("");
	const [ChartData, setChartData] = useState("");
	const [latitude, setLat] = useState("");
	const [longitude, setLng] = useState("");
	const [theme, setTheme] = useState("light");
	const [forecastPeriod, setForecastPeriod] = useState("today");
	const [varKota, setVarKota] = useState("");
	const [icon0, setIcon0] = useState("");
	const [icon1, setIcon1] = useState("");
	const [icon2, setIcon2] = useState("");
	const [icon3, setIcon3] = useState("");
	const [icon4, setIcon4] = useState("");
	const [waktu0, setTime0] = useState("");
	const [waktu1, setTime1] = useState("");
	const [waktu2, setTime2] = useState("");
	const [waktu3, setTime3] = useState("");
	const [waktu4, setTime4] = useState("");
	const [tempForecast0, setTemp0] = useState("");
	const [tempForecast1, setTemp1] = useState("");
	const [tempForecast2, setTemp2] = useState("");
	const [tempForecast3, setTemp3] = useState("");
	const [tempForecast4, setTemp4] = useState("");
	const [timeSet, setTimeSet] = useState(1);
	const [slicing, setSlcing] = useState([0, 5]);
	const [ramalan1, setRamalan1] = useState(0);
	const [ramalan2, setRamalan2] = useState(1);
	const [ramalan3, setRamalan3] = useState(2);
	const [ramalan4, setRamalan4] = useState(3);
	const [ramalan5, setRamalan5] = useState(4);
	const [satuanSuhu, setSatuanSuhu] = useState("C");
	const satuan = "";

	useEffect(() => {
		const success = (position) => {
			let lat = position.coords.latitude;
			let lng = position.coords.longitude;
			Geocode.fromLatLng(`${lat}`, `${lng}`).then(
				(response) => {
					const address = response.results[0].formatted_address;
					setVarKota(address);
					setLat(lat);
					setLng(lng);
				},
				(error) => {
					console.error(error);
				}
			);
		};
		const error = () => {
			console.log("ERROR");
			alert("PLEASE ACTIVATED YOUR LOCATION!!");
		};
		navigator.geolocation.getCurrentPosition(success, error);
	}, []);

	useEffect(() => {
		Geocode.setApiKey("AIzaSyA-fSQhO00teTl-vSip_I9qYh-zaedPv-A");
		const options = {
			method: "GET",
			headers: {
				"X-RapidAPI-Key": "22a04178f8msh37e274e8361cb41p160c4ajsnadd25e9680cd",
				"X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
			},
		};
		Geocode.fromAddress(varKota).then(
			(response) => {
				let { lat, lng } = response.results[0].geometry.location;
				setLat(lat);
				setLng(lng);
				fetch(
					`https://open-weather13.p.rapidapi.com/city/latlon/${lat}/${lng}`,
					options
				)
					.then((response) => response.json())
					.then((response) => {
						const data = response;
						setMainData(data);
					})
					.catch((err) => console.error(err));

				fetch(
					`https://open-weather13.p.rapidapi.com/city/fivedaysforcast/${lat}/${lng}`,
					options
				)
					.then((response) => response.json())
					.then((response) => {
						let data = response;
						setChartData(data);
						let temp0 = response.list[ramalan1].main.temp;
						setTemp0(temp0);
						const waktu0 = response.list[ramalan1].dt_txt
							.split(" ")
							[timeSet].slice(slicing[0], slicing[1]);
						setTime0(waktu0);
						let weather0 = response.list[ramalan1].weather[0].icon;
						setIcon0(weather0);

						let temp1 = response.list[ramalan2].main.temp;
						setTemp1(temp1);
						const waktu1 = response.list[ramalan2].dt_txt
							.split(" ")
							[timeSet].slice(slicing[0], slicing[1]);
						setTime1(waktu1);
						let weather1 = response.list[ramalan2].weather[0].icon;
						setIcon1(weather1);

						let temp2 = response.list[ramalan3].main.temp;
						setTemp2(temp2);
						const waktu2 = response.list[ramalan3].dt_txt
							.split(" ")
							[timeSet].slice(slicing[0], slicing[1]);
						setTime2(waktu2);
						let weather2 = response.list[ramalan3].weather[0].icon;
						setIcon2(weather2);

						let temp3 = response.list[ramalan4].main.temp;
						setTemp3(temp3);
						const waktu3 = response.list[ramalan4].dt_txt
							.split(" ")
							[timeSet].slice(slicing[0], slicing[1]);
						setTime3(waktu3);
						let weather3 = response.list[ramalan4].weather[0].icon;
						setIcon3(weather3);

						let temp4 = response.list[ramalan5].main.temp;
						setTemp4(temp4);
						const waktu4 = response.list[ramalan5].dt_txt
							.split(" ")
							[timeSet].slice(slicing[0], slicing[1]);
						setTime4(waktu4);
						let weather4 = response.list[ramalan5].weather[0].icon;
						setIcon4(weather4);
					})
					.catch((err) => console.error(err));
			},
			(error) => {
				console.error(error);
			}
		);
	}, [
		forecastPeriod,
		ramalan1,
		ramalan2,
		ramalan3,
		ramalan4,
		ramalan5,
		varKota,
		satuanSuhu,
		slicing,
		timeSet,
		theme,
	]);
	return (
		<>
			{!mainData.main?.temp ? (
				<LoadingPage />
			) : (
				<>
					<NavBar setTheme={setTheme} />
					<div className="container gap-4 px-5 pt-4 pb-2 mx-auto lg:px-0 lg:grid lg:grid-cols-12 dark:text-white">
						<div className="col-span-4 main">
							<SearchBar setVarKota={setVarKota} />
							<CardForecast
								temperature={mainData.main?.temp}
								cityName={mainData.name}
								description={mainData.weather?.[0].description}
								timezoneOffset={mainData.timezone}
								iconWeather={mainData.weather?.[0].icon}
								satuanSuhu={satuanSuhu}
							/>
						</div>
						<div className="col-span-8 addOn">
							<div className="flex justify-between p-1 mb-4 lg:mt-0 navToday">
								<TodayWeekButton
									setForecastPeriod={setForecastPeriod}
									setTimeSet={setTimeSet}
									setSlcing={setSlcing}
									setRamalan1={setRamalan1}
									setRamalan2={setRamalan2}
									setRamalan3={setRamalan3}
									setRamalan4={setRamalan4}
									setRamalan5={setRamalan5}
								/>
								<ConvertButton setSatuanSuhu={setSatuanSuhu} />
							</div>
							<div className="flex gap-4 pb-2 overflow-scroll pe-2 wrapperForecast lg:justify-between xl:overflow-visible xl:pe-0 xl:pb-0">
								<div>
									<DayForecast
										tempFore={tempForecast0}
										waktu={waktu0}
										icon={icon0}
										satuanSuhu={satuanSuhu}
									/>
								</div>
								<div>
									<DayForecast
										tempFore={tempForecast1}
										waktu={waktu1}
										icon={icon1}
										satuanSuhu={satuanSuhu}
									/>
								</div>
								<div>
									<DayForecast
										tempFore={tempForecast2}
										waktu={waktu2}
										icon={icon2}
										satuanSuhu={satuanSuhu}
									/>
								</div>
								<div>
									<DayForecast
										tempFore={tempForecast3}
										waktu={waktu3}
										icon={icon3}
										satuanSuhu={satuanSuhu}
									/>
								</div>
								<div>
									<DayForecast
										tempFore={tempForecast4}
										waktu={waktu4}
										icon={icon4}
										satuanSuhu={satuanSuhu}
									/>
								</div>
							</div>
							<h1 className="mt-6 mb-3 text-lg font-semibold ps-1">
								Weekly Highlight
							</h1>
							<Chart data={ChartData} satuanSuhu={satuanSuhu} theme={theme} />
						</div>
					</div>

					<div className="container px-5 pb-5 mx-auto lg:px-0 dark:text-white">
						<h1 className="mt-1 mb-3 text-lg font-semibold ps-1">
							Today's Highlight
						</h1>
						<div className="gap-4 lg:px-0 lg:grid lg:grid-cols-12">
							<div className="order-2 col-span-4 mb-4 HeatMap lg:mb-0">
								<Map
									setVarKota={setVarKota}
									latitude={latitude}
									longitude={longitude}
									humidity={mainData.main?.humidity}
									pressure={mainData.main?.pressure}
									wind={mainData.wind?.speed?.toFixed(0)}
									visibility={mainData.visibility / 1000}
								/>
							</div>
							<div className="grid grid-cols-12 col-span-8 gap-4 todayHighlight">
								<div className="col-span-6">
									<Highlight
										icon={humidityIcon}
										title={humditiyTitle}
										value={mainData.main?.humidity}
										stat={hitungKelembapan(mainData.main?.humidity)}
										satuan={"%"}
									/>
								</div>
								<div className="col-span-6">
									<Highlight
										icon={pressureIcon}
										title={pressureTitle}
										value={mainData.main?.pressure}
										stat={"hPa"}
										satuan={satuan}
									/>
								</div>
								<div className="col-span-6">
									<Highlight
										icon={windIcon}
										title={windTitle}
										value={mainData.wind?.speed?.toFixed(0)}
										stat={mainData.wind?.deg + String.fromCharCode(176)}
										satuan={" km/h"}
									/>
								</div>
								<div className="col-span-6">
									<Highlight
										icon={visibilityIcon}
										title={visibilityTitle}
										value={mainData.visibility / 1000}
										stat={hitungVisibility(mainData.visibility)}
										satuan={" km"}
									/>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</>
			)}
		</>
	);
}

const hitungKelembapan = (nilai) => {
	let hasil;
	if (nilai >= 40 && nilai <= 70) {
		hasil = "Normal";
	} else if (nilai > 70) {
		hasil = "Above Normal";
	} else {
		hasil = "Under Normal";
	}

	return hasil;
};

const hitungVisibility = (nilai) => {
	let hasil;
	if (nilai < 1000) {
		hasil = "Fog";
	} else if (nilai >= 1000 && nilai < 2000) {
		hasil = "Mist";
	} else if (nilai >= 2000 && nilai < 5000) {
		hasil = "Haze";
	} else {
		hasil = "Clear";
	}
	return hasil;
};

// const hitungMinTemp = (nilai, satuan) => {
// 	let hasil;
// 	if (satuan === "C") {
// 		hasil = Math.floor(nilai - 273.15);
// 	} else {
// 		hasil = Math.floor((nilai - 273.15) * 1.8 + 32);
// 	}
// 	return hasil;
// };

export default App;
