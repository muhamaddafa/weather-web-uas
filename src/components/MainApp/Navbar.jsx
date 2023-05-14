import MenuMobile from "./MenuMobile";
import NavbarButton from "./NavbarButton";
import LightDarkModeButton from "./LightDarkModeButton";
import logo from "../../asset/img/Logo.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {
	return (
		<>
			<div className="top-0 z-50 w-full shadow-md navbar bg-slate-50 dark:text-white dark:bg-gray-800">
				<div className="container flex items-center justify-between px-5 py-5 mx-auto lg:px-0">
					<Link to="/" className="flex items-center gap-3 logo">
						<img src={logo} alt="logo" className="w-12" />
						<div className="textLogo">
							<h1 className="text-2xl">Weather Web App</h1>
							<p className="text-xs opacity-40">Your weather prediction.</p>
						</div>
					</Link>
					<div className="items-center hidden gap-8 md:flex linkNav">
						<Link to="/">Home</Link>
						<Link to="/AboutUs">About Us</Link>
						<LightDarkModeButton setTheme={props.setTheme} />
					</div>
					<NavbarButton />
				</div>
			</div>
			<MenuMobile setTheme={props.setTheme} />
		</>
	);
};

export default NavBar;
