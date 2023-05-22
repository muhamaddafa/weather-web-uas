import { PageWrapper } from "../components/AboutUs/PageWrapper";
import { motion } from "framer-motion";
import Nav from "../components/AboutUs/Nav";
import Header from "../components/AboutUs/Header";
import CardProfile from "../components/AboutUs/CardProfile";
import memberData from "../asset/MemberData";


const AboutUs = () => {
	return (
		<div className="bg-bkg selection:bg-accent selection:text-bkg overflow-hidden">
			<motion.div className="h-screen relative overflow-y-auto overflow-x-hidden scroll-smooth">
				<Nav/>
				<PageWrapper>
				<header>
					<div className="relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed">
					<div className="absolute bg-gradient-to-b inset-0 bottom-3/4 from-bkg to-transparent"></div>
						<Header/>
					</div>
				</header>
				<main>
					<div className="text-center overflow-hidden">
						<section className="Dafa relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed grid place-content-evenly">
							<CardProfile 
								foto={memberData[0].imgSrc}
								nama={memberData[0].name}
								nim={memberData[0].nim}
								description={memberData[0].description}
								git={memberData[0].linkGit}
								ig={memberData[0].linkIg}
								discord={memberData[0].linkDiscord}
								nimColor={memberData[0].nimColor}
								boxColor={memberData[0].boxColor}
							/>
						</section>
						<section className="Salma relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed grid place-content-evenly">
							<CardProfile 
								foto={memberData[1].imgSrc}
								nama={memberData[1].name}
								nim={memberData[1].nim}
								description={memberData[1].description}
								git={memberData[1].linkGit}
								ig={memberData[1].linkIg}
								discord={memberData[1].linkDiscord}
								nimColor={memberData[1].nimColor}
								boxColor={memberData[1].boxColor}
							/>
						</section>
						<section className="Pandu relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed grid place-content-evenly">
							<CardProfile 
								foto={memberData[2].imgSrc}
								nama={memberData[2].name}
								nim={memberData[2].nim}
								description={memberData[2].description}
								git={memberData[2].linkGit}
								ig={memberData[2].linkIg}
								discord={memberData[2].linkDiscord}
								nimColor={memberData[2].nimColor}
								boxColor={memberData[2].boxColor}
							/>
						</section>
						<section className="Izamm relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed grid place-content-evenly">
							<CardProfile 
								foto={memberData[3].imgSrc}
								nama={memberData[3].name}
								nim={memberData[3].nim}
								description={memberData[3].description}
								git={memberData[3].linkGit}
								ig={memberData[3].linkIg}
								discord={memberData[3].linkDiscord}
								nimColor={memberData[3].nimColor}
								boxColor={memberData[3].boxColor}
							/>
						</section>
						<section className="Rich relative min-h-screen bg-main bg-no-repeat bg-center bg-cover bg-fixed grid place-content-evenly">
							<CardProfile 
								foto={memberData[4].imgSrc}
								nama={memberData[4].name}
								nim={memberData[4].nim}
								description={memberData[4].description}
								git={memberData[4].linkGit}
								ig={memberData[4].linkIg}
								discord={memberData[4].linkDiscord}
								nimColor={memberData[4].nimColor}
								boxColor={memberData[4].boxColor}
							/>
						</section>
					</div>
				</main>
				</PageWrapper>		
			</motion.div>
		</div>
	);
};

export default AboutUs;
