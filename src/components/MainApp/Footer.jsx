const Footer = () => {
	return (
		<div className="footer container mx-auto mb-5 px-5 lg:px-0 mt-5 dark:text-white">
			<div className="bungkus-foot justify-between text-center lg:text-start items-center opacity-100 font-semibold">
				<div className="About Us lg:text-end mt-3 lg:mt-0">
					<h1 className="dark:opacity-60 opacity-40">Our Social Media</h1>
					<div className="iconSocial my-5 flex gap-7 justify-center lg:justify-end">
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a href="https://shor.by/xF99">
								<i class="fa-brands fa-github fa-xl text-blue-500"></i>
							</a>
						</div>
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a href="https://shor.by/GpUs">
								<i class="fa-brands fa-instagram fa-xl text-blue-500"></i>
							</a>
						</div>
						<div className="hover:-mt-2 hover:duration-200 duration-500 ease-in-out">
							<a href="https://shor.by/T8Zw">
								<i class="fa-brands fa-discord fa-xl text-blue-500"></i>
							</a>
						</div>
					</div>
					<h1 className="opacity-40 dark:opacity-60">
						Copyright &copy; Group 3 | All rights reserved.
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Footer;
