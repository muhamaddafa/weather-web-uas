import CardProfile from "../components/AboutUs/CardProfile";
import NavBar from "../components/MainApp/Navbar";
import memberData from "../asset/MemberData";

const AboutUs = () => {
	return (
		<div>
			<NavBar />
			<div className="container mx-auto px-5 lg:px-0 dark:text-white">
				<div className="TeamArea mt-10 mb-10">
					<div className="TeamProfile flex justify-center">
						<div className="lg:grid lg:grid-cols-3 gap-36 w-max">
							<div className="mb-8">
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
							</div>
							<div className="mb-8">
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
							</div>
							<div className="mb-8">
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
							</div>
						</div>
					</div>
					<div className="TeamProfile flex justify-center">
						<div className="lg:grid lg:grid-cols-2 gap-36 w-max">
							<div className="mb-8 lg:mb-0">
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
							</div>
							<div>
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
