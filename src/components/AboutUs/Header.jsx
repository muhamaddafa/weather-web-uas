import { motion} from "framer-motion";

const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:2}
	}
}

const Header = (props) => {
    return (
        <header className="min-h-screen flex flex-col justify-evenly items-center relative text-center">
            <motion.h1 
            initial={"offscreen"}
            whileInView={"onscreen"}
            viewport={{once:false, amount:0.5}}
            transition={{staggerChildren:0.5}}
            variants={textAnimate}
            className="title text-white font-bold text-7xl drop-shadow-text-md lg:drop-shadow-text-lg">Our Team</motion.h1>
        </header>
    );
};

export default Header;