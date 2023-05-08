import ReactApexChart from "react-apexcharts";

const Chart = (props) => {
	const data = props.data;
	console.log(data);

	const humidityValues = data.list?.map((item) => item.main.humidity);

	const windValues = data.list?.map((item) => {
		let hasil = parseInt(item.wind.speed.toFixed(0));
		return hasil;
	});

	const tempValues = data.list?.map((item) => {
		let suhuFinal;
		if (props.satuanSuhu === "C") {
			suhuFinal = (item.main.temp - 273.15).toFixed(0);
		} else {
			suhuFinal = Math.ceil((item.main.temp - 273.15) * 1.8 + 32);
		}
		let hasil = suhuFinal;
		return hasil;
	});

	const visibilityValues = data.list?.map((item) => {
		let hasil = item.visibility / 1000;
		return hasil;
	});

	const dates = data.list?.map((item) => item.dt_txt);

	const chartOptions = {
		series: [
			{
				name: "Humidity",
				data: humidityValues,
			},
			{
				name: "Temp",
				data: tempValues,
			},
			{
				name: "Visibility",
				data: visibilityValues,
			},
			{
				name: "Wind",
				data: windValues,
			},
		],
		options: {
			chart: {
				height: 300,
				type: "area",
			},
			legend: {
				show: false,
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
			},
			xaxis: {
				type: "datetime",
				categories: dates,
			},
			tooltip: {
				x: {
					show: false,
					format: "dd/MM/yy HH:mm",
				},
				y: [
					{
						formatter: function (y) {
							if (typeof y !== "undefined") {
								return y + "%";
							}
							return y;
						},
					},
					{
						formatter: function (y) {
							if (typeof y !== "undefined") {
								return y + String.fromCharCode(176);
							}
							return y;
						},
					},
					{
						formatter: function (y) {
							if (typeof y !== "undefined") {
								return y + " km";
							}
							return y;
						},
					},
					{
						formatter: function (y) {
							if (typeof y !== "undefined") {
								return y + " km/h";
							}
							return y;
						},
					},
				],
			},
		},
	};

	return (
		<ReactApexChart
			options={chartOptions.options}
			series={chartOptions.series}
			type="area"
			height={300}
		/>
	);
};

export default Chart;
