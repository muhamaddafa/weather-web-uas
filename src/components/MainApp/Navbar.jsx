import MenuMobile from "./MenuMobile";
import NavbarButton from "./NavbarButton";
import LightDarkModeButton from "./LightDarkModeButton";
import logo from "../../asset/img/Logo.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<div className="navbar bg-slate-50 shadow-md fixed w-full z-50 top-0 dark:text-white dark:bg-gray-800">
			<div className="container mx-auto py-5 px-5 lg:px-0 flex justify-between items-center">
				<Link to="/" className="logo flex items-center gap-3">
					<img src={logo} alt="logo" className="w-12" />
					<div className="textLogo">
						<h1 className="text-2xl">Weather Web App</h1>
						<p className="text-xs opacity-40">Your weather prediction.</p>
					</div>
				</Link>
				<div className="hidden md:flex items-center gap-8 linkNav">
					<Link to="/">Home</Link>
					<Link to="/AboutUs">About Us</Link>
					<LightDarkModeButton setTheme={props.setTheme} />
				</div>
				<NavbarButton />
			</div>
			<MenuMobile setTheme={props.setTheme} />
		</div>
	);
};

export default NavBar;
