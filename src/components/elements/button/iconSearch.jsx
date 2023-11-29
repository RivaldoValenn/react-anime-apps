const IconSearch = ({ toggleSearchBar }) => {
    
    return (
        <button onClick={toggleSearchBar} className="lg:hidden block">
            <i className="ph ph-magnifying-glass text-slate-500 text-2xl"></i>
        </button>
    );
};
export default IconSearch