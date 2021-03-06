import HomePageSlides from './components/homePageSlides.js';
import MultiCards from './components/multiCards';
import MenuBar from './components/menu.js';
import Services from './components/services.js';
import Footer from './components/footer.js';
import Whatsapp from './components/whatsapp.js';
import Reviews from './components/review.js'

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePageSlides></HomePageSlides>
      <MultiCards></MultiCards>
      <Reviews></Reviews>
      <Services></Services>
      <Footer></Footer>
      <Whatsapp></Whatsapp>
    </div>
  );
}

export default App;
