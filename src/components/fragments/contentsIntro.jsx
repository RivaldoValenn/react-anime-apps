import Text from "../elements/text/description"
import Button from "../elements/button/button"
import Rating from "../elements/rating"
import Genres from "../elements/genres"
const Content = () => {
    return (
        <>
            <Text className=" text title text-5xl lg:text-8xl font-custom font-semibold tracking-wider">
              Demon Slayer
            </Text>
            <Text className="overview w-3/4 lg:w-full lg:text-xl text-sm font-poppins font-normal text-left ">
              Summaries. A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.
            </Text>
            <div className="cta flex lg:flex-row gap-4 items-center  font-bold justify-center mt-2 lg:justify-start lg:mt-4">
              <Button className=" bg-white rounded-md text-black text-sm lg:text-lg font-poppins px-3 lg:px-6 py-2 lg:py-3 shadow-xl flex">
                See Details
              </Button>
              <Button className="bg-[#1a1a1a] rounded-md text-sm lg:text-lg text-white font-poppins px-3 lg:px-5 py-2 lg:py-3 shadow-xl hover:bg-teal- hover:border-opacity-0 transition-all duration-200">
                <i className="ph ph-bookmark"></i> Watchlist
              </Button>
              </div>
        </>
    )
}

export default Content