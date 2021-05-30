import HomePageSlides from './components/homePageSlides.js';
import MultiCards from './components/multiCards';
import MenuBar from './components/menu.js';
import Services from './components/services.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePageSlides></HomePageSlides>
      <MultiCards></MultiCards>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
