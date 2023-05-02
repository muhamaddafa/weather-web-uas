import icon1 from "../../asset/img/javascript-logo.png";
import icon2 from "../../asset/img/css-logo.png";
import icon3 from "../../asset/img/html-logo.png";

const CardProfile = (props) => {
	return (
		<div className="CardProfile lg:w-72 w-80 shadow-lg rounded-xl relative">
			<img
				src={icon1}
				alt="icon"
				className="absolute w-20 -left-8 top-10 rotate-12 iconElement"
			/>
			<img
				src={icon2}
				alt="icon"
				className="absolute w-20 -right-8 top-60 rotate-12 iconElement"
			/>
			<img
				src={icon3}
				alt="icon"
				className="absolute w-20 -left-8 top-3/4 rotate-12 iconElement"
			/>
			<img
				src={props.foto}
				alt={`Foto ${props.nama}`}
				className="lg:h-72 lg:w-72 w-80 h-80 object-cover rounded-t-xl"
			/>
			<div className="CardBody bg-white dark:bg-gray-800 w-full p-5 rounded-b-xl">
				<div className="Nama text-center mb-4 text-xl">
					<h1 className="font-semibold">{props.nama}</h1>
				</div>
				<div
					className="RoleCard bg-gray-200 w-max py-3 px-8 mx-auto mb-4 rounded-lg text-sm"
					style={{
						backgroundColor: props.boxColor,
						boxShadow: `-3px 2px 23px -4px ${props.boxColor}`,
					}}
				>
					<h1 style={{ color: props.nimColor }} className="font-bold">
						{props.nim}
					</h1>
				</div>
				<div className="Descritpion text-center mb-7 text-sm">
					<h1>{props.description}</h1>
				</div>
				<div className="iconSocial flex gap-7 justify-center">
					<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
						<a href={props.git}>
							<i class="fa-brands fa-github fa-xl text-blue-500"></i>
						</a>
					</div>
					<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
						<a href={props.ig}>
							<i class="fa-brands fa-instagram fa-xl text-blue-500"></i>
						</a>
					</div>
					<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
						<a href={props.discord}>
							<i class="fa-brands fa-discord fa-xl text-blue-500"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardProfile;
