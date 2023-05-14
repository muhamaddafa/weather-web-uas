import LightDarkModeButton from "./LightDarkModeButton";
import { Link } from "react-router-dom";

const MenuMobile = (props) => {
	return (
		<div className="hidden pt-3 pb-6 menu-mobile bg-slate-50 dark:bg-gray-800 dark:text-white">
			<Link to="/" className="flex justify-center mb-5 linkNavItem">
				Home
			</Link>
			<Link to="/AboutUs" className="flex justify-center mb-5 linkNavItem">
				About Us
			</Link>
			<LightDarkModeButton setTheme={props.setTheme} />
		</div>
	);
};

export default MenuMobile;
