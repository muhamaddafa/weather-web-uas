const Highlight = (props) => {
  return (
    <div className="HighlightCard bg-slate-50 shadow-lg rounded-xl p-3 lg:px-10 lg:py-8 border-gray-300 border-2 dark:bg-gray-800 dark:shadow-gray-900 dark:border-gray-500">
      <div className="HighlightContent">
        <h1 className="Headline">{props.title}</h1>
        <div className="isi flex justify-between my-12">
          <h1 className="font-medium lg:text-5xl text-2xl">
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
