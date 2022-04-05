import {Header, HeroBlock, Jumbotron, Roll, ShowCase,ReviewsBlock, DownloadMenu, Question, Footer} from './components'
function App() {
  return (
    <div className="App">
     <Header/>
     <HeroBlock
      topText={"Sweet fun, full of milk."}
      header={"Feel inside cold with our delicious "}
      slogan={'ice-cream.'}
      discription={"Some food has looked so awfulthat it's looked like something that the dog's brought home, yet after one mouthful I've been left eating my thoughts, my words."}
      firstImgUrl={"/images/ice1.png"}
     />
     <Roll />
     <HeroBlock
      header={'Brown Sugar Oatmea'}
      discription={"Together with McDonald’s, Burger King has grown to become synonymous with burgers in the US.Together with McDonald’s, Burger King has grown to become synonymous"}
      firstImgUrl={"/images/ice2.png"}
     />
     <ShowCase/>
     <Jumbotron/>
     <ReviewsBlock/>
     <DownloadMenu/>
     <Question/>
     <Footer/>
    </div>
  );
}

export default App;
