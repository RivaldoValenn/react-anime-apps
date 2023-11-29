const SectionComp = ({children, title}) => {
    return(
        <>
        <div className="container lg:px-10 px-4 py-5 mt-5">
        <h1 className="lg:text-2xl text-xl font-Poppins font-semibold text-slate-100 relative flex">
          {title}
          <span className="absolute w-full h-[2px] bg-white bg-opacity-20 bottom-0 left-0 top-10 lg:top-12"></span>
        </h1>
      </div>
        <div className="grid grid-cols-2 grid-flow-cols lg:grid-cols-4 gap-5 mt-2 lg:mt-6 lg:px-10 px-4">
          {children}
        </div>
        </>
    )
};
export default SectionComp;