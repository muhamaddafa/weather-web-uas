import LightDarkModeButton from "./LightDarkModeButton";
import { Link } from "react-router-dom";

const MenuMobile = (props) => {
	return (
		<div className="hidden menu-mobile pt-3 pb-6 bg-slate-50 dark:bg-gray-800 dark:text-white">
			<Link to="/" className="linkNavItem flex justify-center mb-5">
				Home
			</Link>
			<Link to="/AboutUs" className="linkNavItem flex justify-center mb-5">
				About Us
			</Link>
			<LightDarkModeButton setTheme={props.setTheme} />
		</div>
	);
};

export default MenuMobile;
