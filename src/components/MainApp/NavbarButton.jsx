const NavbarButton = () => {
  return (
    <div className="flex items-center md:hidden">
      <button
        className="outline-none mobile-menu-button"
        onClick={function openMenu() {
          document.querySelector(".menu-mobile").classList.toggle("hidden");
          document.querySelector(".menu-mobile").classList.toggle("visible");
        }}
      >
        <svg
          className="w-6 h-6 rounded-sm dark:text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          stroke="currentColor"
        >
          <path d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  );
};

export default NavbarButton;
