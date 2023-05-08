import "./App.css";
import "./asset/fontawesome-free-6.4.0-web/css/fontawesome.css";
import "./asset/fontawesome-free-6.4.0-web/css/brands.css";
import "./asset/fontawesome-free-6.4.0-web/css/solid.css";
import Geocode from "react-geocode";
import CardForecast from "./components/MainApp/CardForecast";
import DayForecast from "./components/MainApp/DayForecast";
import Highlight from "./components/MainApp/Highlight";
import NavBar from "./components/MainApp/Navbar";
import ConverButton from "./components/MainApp/ConvertButton";
import SearchBar from "./components/MainApp/SearchBar";
import TodayWeekButton from "./components/MainApp/TodayWeekButton";
import Footer from "./components/MainApp/Footer";
import humidityIcon from "./asset/img/humidityIcon.svg";
import windIcon from "./asset/img/windStatusIcon.svg";
import temperatureIcon from "./asset/img/temperatureIcon.svg";
import visibilityIcon from "./asset/img/visibilityIcon.svg";
import { useState, useEffect } from "react";
import Chart from "./components/MainApp/Chart";

function App() {
	const humditiyTitle = "Humidity";
	const visibilityTitle = "Visibility";
	const windTitle = "Wind Status";
	const temperatureTitle = "Temperature";
	const [mainData, setMainData] = useState("");
	const [ChartData, setChartData] = useState("");
	const [forecastPeriod, setForecastPeriod] = useState("today");
	const [varKota, setVarKota] = useState("Tangerang");
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
	]);
	return (
		<>
			<NavBar />
			<div className="container mx-auto py-5 px-5 lg:px-0 lg:grid lg:grid-cols-12 gap-4 dark:text-white">
				<div className="main col-span-4">
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
				<div className="addOn col-span-8">
					<div className="flex lg:mt-0 justify-between h-12 p-1 mb-4">
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
						<ConverButton setSatuanSuhu={setSatuanSuhu} />
					</div>
					<div className="wrapperForecast flex gap-4 overflow-scroll lg:justify-between lg:overflow-visible">
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
					<h1 className="mb-3 text-lg font-semibold ps-1 mt-9">
						Weekly Highlight
					</h1>
					<Chart data={ChartData} satuanSuhu={satuanSuhu} />
					<h1 className="mb-3 text-lg font-semibold ps-1 mt-1">
						Today's Highlight
					</h1>
					<div className="Information grid grid-cols-12 gap-4">
						<div className="col-span-6">
							<Highlight
								icon={humidityIcon}
								title={humditiyTitle}
								value={mainData.main?.humidity + "%"}
								stat={hitungKelembapan(mainData.main?.humidity)}
								satuan={satuan}
							/>
						</div>
						<div className="col-span-6">
							<Highlight
								icon={windIcon}
								title={windTitle}
								value={mainData.wind?.speed?.toFixed(0) + " km/h"}
								stat={mainData.wind?.deg + String.fromCharCode(176)}
								satuan={satuan}
							/>
						</div>
						<div className="col-span-6">
							<Highlight
								icon={temperatureIcon}
								title={temperatureTitle}
								value={
									hitungMinTemp(mainData.main?.temp_min, satuanSuhu) +
									String.fromCharCode(176)
								}
								stat={"Min. Temp"}
								satuan={satuanSuhu}
							/>
						</div>
						<div className="col-span-6">
							<Highlight
								icon={visibilityIcon}
								title={visibilityTitle}
								value={mainData.visibility / 1000 + " km"}
								stat={hitungVisibility(mainData.visibility)}
								satuan={satuan}
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
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

const hitungMinTemp = (nilai, satuan) => {
	let hasil;
	if (satuan === "C") {
		hasil = Math.floor(nilai - 273.15);
	} else {
		hasil = Math.floor((nilai - 273.15) * 1.8 + 32);
	}
	return hasil;
};

export default App;
