const NavbarButton = () => {
	return (
		<div class="md:hidden flex items-center">
			<button
				class="outline-none mobile-menu-button"
				onClick={function openMenu() {
					document.querySelector(".menu-mobile").classList.toggle("hidden");
					document.querySelector(".menu-mobile").classList.toggle("visible");
				}}
			>
				<svg
					class="w-6 h-6 dark:text-white rounded-sm"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					stroke="currentColor"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
	);
};

export default NavbarButton;
