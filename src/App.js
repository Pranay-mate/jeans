import HomePageSlides from './components/homePageSlides.js';
import MultiCards from './components/multiCards';
import MenuBar from './components/menu.js';

function App() {
  return (
    <div className="App">
      <MenuBar></MenuBar>
      <HomePageSlides></HomePageSlides>
      <MultiCards></MultiCards>
    </div>
  );
}

export default App;
