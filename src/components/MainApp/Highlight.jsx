const Highlight = (props) => {
	return (
		<div className="p-3 border-2 border-gray-300 shadow-lg HighlightCard bg-slate-50 rounded-xl lg:px-6 lg:py-8 dark:bg-gray-800 dark:shadow-gray-900 dark:border-gray-500">
			<div className="HighlightContent">
				<h1 className="Headline">{props.title}</h1>
				<div className="flex justify-between my-12 isi">
					<h1 className="text-2xl font-medium lg:text-5xl">
						{props.value}
						{props.satuan}
					</h1>
					<img src={props.icon} alt="Icon" className="lg:w-12" />
				</div>
				<h1 className="status">{props.stat}</h1>
			</div>
		</div>
	);
};

export default Highlight;
