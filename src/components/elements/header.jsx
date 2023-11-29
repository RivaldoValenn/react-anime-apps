import React, { useEffect, useState } from "react";
import Logo from "../elements/logo/logo";
import SearchBar from "../elements/Input/searchBar";
import MobileMenuIcon from "./icons/MobileMenuIcon";
import NavigationLinks from "./navigationLinks";
import IconSearch from "./button/iconSearch";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [searchBarOpen, setSearchBarOpen] = useState(false);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearchBar = () => {
    setSearchBarOpen(!searchBarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navClass = scrolling
    ? "fixed w-full top-0 py-2 z-[999] bg-[#1c1c1c]"
    : "fixed w-full top-0 py-2 z-[999] lg:bg-transparent bg-[#1c1c1c]";

  return (
    <>
      <header>
        <nav className={navClass}>
          <div className="container px-5 py-3 lg:px-10 lg:py-0 flex justify-between items-center">
            <Logo />
            <div className="flex gap-2">
              <IconSearch
                toggleSearchBar={toggleSearchBar}
              />
            <MobileMenuIcon
              mobileMenuOpen={mobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
            </div>
            <NavigationLinks mobileMenuOpen={mobileMenuOpen} />
          </div>
          {searchBarOpen && (
             <div className="flex justify-center py-2 lg:hidden">
               <SearchBar
                 toggleSearchBar={toggleSearchBar}
               />
             </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
