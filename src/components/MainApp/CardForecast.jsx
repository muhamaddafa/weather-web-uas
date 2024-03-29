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

const CardForecast = (props) => {
	const now = new Date();
	const localTime = now.getTime();
	const localOffset = now.getTimezoneOffset() * 60000;
	const utc = localTime + localOffset;
	const timeZone = utc + 1000 * props.timezoneOffset;
	const date = new Date(timeZone);
	const day = date.toLocaleString("en-US", { weekday: "long" });
	const time = date.toLocaleString("en-US", {
		hour: "numeric",
		minute: "numeric",
		hour12: true,
	});

	let hasilSuhu;
	if (props.satuanSuhu === "C") {
		hasilSuhu = Math.floor(props.temperature - 273.15);
	} else {
		hasilSuhu = Math.floor((props.temperature - 273.15) * 1.8 + 32);
	}

	let iconFinal;
	switch (props.iconWeather) {
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

	return (
		<div className="w-auto pt-6 pb-8 mb-4 shadow-lg CardForecast bg-slate-50 lg:w-full rounded-2xl dark:bg-gray-800 dark:shadow-gray-900">
			<div className="items-center justify-around CardContent lg:flex-col lg:justify-normal">
				<div className="image">
					<img src={iconFinal} alt="Weather" className="w-64 mx-auto lg:w-64" />
				</div>
				<div className="flex-col items-center gap-0 text-center description lg:block lg:text-start lg:gap-0 lg:mt-10 lg:w-full lg:px-5 dark:text-white">
					<h1 className="mt-3 font-medium text-7xl lg:mt-0 lg:mb-6 lg:text-7xl h-max">
						{hasilSuhu}&deg;{props.satuanSuhu}
					</h1>
					<div className="mt-7 lg:mt-0">
						<div className="flex justify-center mb-3 hariDanJam lg:justify-start">
							<p>{day},</p>
							<p className="ml-2 font-medium opacity-50">{time}</p>
						</div>
						<div className="mb-3 keterangan">
							<p>{props.description}</p>
						</div>
						<p>{props.cityName}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardForecast;
