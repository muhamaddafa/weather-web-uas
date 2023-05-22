import Logo from "../../asset/img/Logo.png";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav className="grid place-items-center absolute w-full top-0 z-50 sm:place-items-center lg:place-items-start selection:bg-accent selection:text-bkg" aria-label="Primary Navigation">
            <Link to="/" className="flex items-center gap-3 logo p-1 m-2 font-medium focus:outline-none focus-visible:ring-4 ring-accent rounded-full transition-shadow">
				<img src={`${Logo}`} alt="logo" className="w-12" />
				<div className="textLog text-white drop-shadow-text-sm">
					<h1 className="text-2xl ">Weather Web App</h1>
					<p className="text-xs opacity-80">Your weather prediction.</p>
				</div>
			</Link>
        </nav>
    );
};

export default Nav;