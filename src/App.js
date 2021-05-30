import HomePageSlides from './components/homePageSlides.js';
import MultiCards from './components/multiCards';
import MenuBar from './components/menu.js';
import Services from './components/services.js';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePageSlides></HomePageSlides>
      <MultiCards></MultiCards>
      <Services></Services>
    </div>
  );
}

export default App;
