import { motion} from "framer-motion";

const imageAnimate={
    offscreen:{x:-100, opacity:0},
    onscreen:{
    x:0,
    opacity:1,
    rotate:[0,10,0],
    transition: {type:"spring",
    bounce:0.4,
    duration:1.5}
	}
}

const textAnimate={
    offscreen:{y:100, opacity:0},
    onscreen:{y:0,
    opacity:1,
    transition: {type:"spring",
    bounce:0.4,
    duration:1.5}
	}
}

const CardProfile = (props) => {
	return (
		<motion.div 
		initial={"offscreen"}
        whileInView={"onscreen"}
        viewport={{once:false, amount:0.5}}
        transition={{staggerChildren:0.5}}
		className="CardProfile">
			<div className="CardBody lg:grid lg:grid-cols-5 lg:gap-x-20">
				<motion.div 
				variants={imageAnimate}
				className="Content relative grid gap-y-4 p-5 col-span-3 w-96 lg:w-full md:w-full md:mb-10 ">
					<motion.div 
					variants={textAnimate}
					className="Information text-white self-center ">
						<h2 className="font-bold text-4xl md:text-5xl lg:text-5xl mb-2 drop-shadow-text-md">{props.nama}</h2>
						<p className="font-semibold text-l md:text-xl lg:text-xl drop-shadow-text-sm">{props.description}</p>
					</motion.div>
					<motion.div 
					variants={imageAnimate}
					className="NimBox self-center ">
						<div className="RoleCard bg-gray-200 w-max py-3 px-6 mx-auto mb-4 rounded-lg text-sm"
						style={{
							backgroundColor: props.boxColor,
							boxShadow: `-3px 2px 23px -4px ${props.boxColor}`,
						}}>
							<h1 style={{ color: props.nimColor }} className="font-bold text-xl">
								{props.nim}
							</h1>
						</div>
					</motion.div>
					<motion.div 
					variants={textAnimate}
					className="iconSocial flex gap-20 justify-center self-center">
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a href={props.git} rel="noreferrer" target="_blank">
								<i className="fa-brands fa-github fa-2x text-white"></i>
							</a>
						</div>
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a href={props.ig} rel="noreferrer" target="_blank">
								<i className="fa-brands fa-instagram fa-2x text-white"></i>
							</a>
						</div>
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a  href={props.discord} rel="noreferrer" target="_blank">
								<i className="fa-brands fa-discord fa-2x text-white"></i>
							</a>
						</div>
					</motion.div>
				</motion.div>
				<motion.div 
				variants={imageAnimate}
				className="ProfilePicture col-span-2 flex justify-center ">
					<img 
						src={props.foto}
						alt={`Foto ${props.nama}`} 
						className="object-cover w-80 lg:h-96 lg:w-96 h-80 rounded-xl"
					/>
				</motion.div>
			</div>
		</motion.div>
	);
};

export default CardProfile;
