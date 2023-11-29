import SearchBar from "./Input/searchBar";

const NavigationLinks = ({ mobileMenuOpen }) => {
  return (
    <>
    <div
      className={`links absolute top-16 z-[999] bg-[#1c1c1c] text-xl w-full left-0 right-0 ${
        mobileMenuOpen ? "block" : "hidden"
      } lg:flex lg:bg-transparent lg:static lg:justify-end lg:px-2`}
    >
      <ul className="text-[1rem] font-poppins lg:py-5 py-10 flex flex-col justify-center items-center gap-10 lg:flex lg:flex-row lg:gap-10">
        <li style={{ "--index": 1 }}>
          <a href="#" className="links-a">
            Home
          </a>
        </li>
        <li style={{ "--index": 2 }}>
          <a href="#" className="links-a">
            About
          </a>
        </li>
        <li style={{ "--index": 3 }}>
          <a href="#" className="links-a">
            Contact
          </a>
        </li>
        <li style={{ "--index": 4 }}>
          <a href="#" className="links-a">
            Help
          </a>
        </li>
        <li className="lg:flex hidden">
          <SearchBar />
        </li>
      </ul>
    </div>
    </>
  );
};

export default NavigationLinks;
