import Logo from "../../asset/img/Logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="absolute top-0 z-50 grid w-full place-items-center lg:place-items-start selection:bg-accent selection:text-bkg" aria-label="Primary Navigation">
            <div className="flex justify-between py-3 lg:px-3">
			<Link to="/" className="flex items-center gap-3 p-1 m-2 font-medium transition-shadow rounded-full logo focus:outline-none focus-visible:ring-4 ring-accent">
				<img src={Logo} alt="logo" className="w-12" />
				<div className="text-white textLog drop-shadow-text-sm">
					<h1 className="text-2xl ">Weather Whisperer</h1>
					<p className="text-xs opacity-80">Forecast with Precision, Rain or Shine!</p>
				</div>
			</Link>
			</div>	
        </nav>
    );
};

export default Nav;