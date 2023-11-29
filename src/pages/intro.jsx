import Content from '../components/fragments/contentsIntro';
const IntroSection = () => {
  return (
    <section>
      <div className="container lg:mt-0 mt-12">
        <div className="main-content flex flex-col lg:flex-row justify-between items-center w-screen lg:w-full lg:h-screen rounded-md lg:px-10 px-5 lg:py-0 py-10">
          <div className="description flex flex-col justify-center items-start text-white lg:mt-0 mt-10 lg:w-1/2 lg:gap-3 gap-1">
           <Content/>
            </div>
          </div>
        </div>
    </section>
  );
};

export default IntroSection;
