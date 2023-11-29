
const MobileMenuIcon = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className="icons lg:hidden">
      <i
        className={`ph ${
          mobileMenuOpen ? "ph-x" : "ph-list"
        } text-3xl text-white cursor-pointer opacity-70`}
        onClick={toggleMobileMenu}
      ></i>
    </div>
  );
};

export default MobileMenuIcon;
