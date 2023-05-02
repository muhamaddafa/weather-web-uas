import LightDarkModeButton from "./LightDarkModeButton";
import { Link } from "react-router-dom";

const MenuMobile = () => {
	return (
		<div className="hidden menu-mobile pt-3 pb-6">
			<Link
				to="/UAS-IntroductionToInternetTechnology"
				className="linkNavItem flex justify-center mb-5"
			>
				Home
			</Link>
			<Link to="/AboutUs" className="linkNavItem flex justify-center mb-5">
				About Us
			</Link>
			<LightDarkModeButton />
		</div>
	);
};

export default MenuMobile;
