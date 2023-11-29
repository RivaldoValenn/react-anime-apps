import Header from "./components/elements/header"
import TrendingAnime from "./pages/topAnime"
import IntroSection from "./pages/intro"
import RecommendedAnime from "./pages/recommendedAnime"
const App = () => {

  return (
    <>
    <div>
      <Header/>
        <IntroSection/>
        <div className="content">
          <TrendingAnime/>
          <RecommendedAnime/>
        </div>
    </div>
    </>
  )
}

export default App
