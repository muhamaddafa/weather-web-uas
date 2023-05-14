import wthr01d from "../../asset/img/01d.svg";
import wthr01n from "../../asset/img/01n.svg";
import wthr02d from "../../asset/img/02d.svg";
import wthr02n from "../../asset/img/02n.svg";
import wthr03d from "../../asset/img/03d.svg";
import wthr03n from "../../asset/img/03n.svg";
import wthr04d from "../../asset/img/04d.svg";
import wthr04n from "../../asset/img/04n.svg";
import wthr09d from "../../asset/img/09d.svg";
import wthr09n from "../../asset/img/09n.svg";
import wthr10d from "../../asset/img/10d.svg";
import wthr10n from "../../asset/img/10n.svg";
import wthr11d from "../../asset/img/11d.svg";
import wthr11n from "../../asset/img/11n.svg";
import wthr13d from "../../asset/img/13d.svg";
import wthr13n from "../../asset/img/13n.svg";
import wthr50d from "../../asset/img/50d.svg";
import wthr50n from "../../asset/img/50n.svg";

const DayForecast = (props) => {
	let iconFinal;
	switch (props.icon) {
		case "01d":
			iconFinal = wthr01d;
			break;
		case "01n":
			iconFinal = wthr01n;
			break;
		case "02d":
			iconFinal = wthr02d;
			break;
		case "02n":
			iconFinal = wthr02n;
			break;
		case "03d":
			iconFinal = wthr03d;
			break;
		case "03n":
			iconFinal = wthr03n;
			break;
		case "04d":
			iconFinal = wthr04d;
			break;
		case "04n":
			iconFinal = wthr04n;
			break;
		case "09d":
			iconFinal = wthr09d;
			break;
		case "09n":
			iconFinal = wthr09n;
			break;
		case "10d":
			iconFinal = wthr10d;
			break;
		case "10n":
			iconFinal = wthr10n;
			break;
		case "11d":
			iconFinal = wthr11d;
			break;
		case "11n":
			iconFinal = wthr11n;
			break;
		case "13d":
			iconFinal = wthr13d;
			break;
		case "13n":
			iconFinal = wthr13n;
			break;
		case "50d":
			iconFinal = wthr50d;
			break;
		case "50n":
			iconFinal = wthr50n;
			break;
		default:
			break;
	}

	let suhuFinal;
	if (props.satuanSuhu === "C") {
		suhuFinal = (props.tempFore - 273.15).toFixed(0);
	} else {
		suhuFinal = Math.ceil((props.tempFore - 273.15) * 1.8 + 32);
	}
	return (
		<div className="cardDayForecast">
			<div className="p-6 text-center border-2 border-gray-300 shadow-lg cardDayForecastContent rounded-xl bg-slate-50 dark:shadow-gray-900 dark:border-gray-500 dark:shadow-md dark:text-white dark:bg-gray-800">
				<div className="waktu">
					<h1>{props.waktu}</h1>
				</div>
				<div className="my-3 imgForecast w-max">
					<img src={iconFinal} alt="Forecast" className="w-24" />
				</div>
				<div className="forecastTemp">
					<h1>
						{suhuFinal}&deg;{props.satuanSuhu}
					</h1>
				</div>
			</div>
		</div>
	);
};

export default DayForecast;
