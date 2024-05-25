import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Terbaru from './components/Terbaru';
import Action from './components/Action';
import Comedy from './components/Comedy';
import Horor from './components/Horor';
import Romance from './components/Romance';
import SuperHero from './components/Superhero';
import "./style/landingPage.css"

function App() {
  return (
    <div>
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
      
      <div className="terbaru">
        <Terbaru/>
      </div>
      
      <div className="action">
        <Action/>
      </div>

      <div className="comedy">
        <Comedy/>
      </div>

      <div className="horor">
        <Horor/>
      </div>

      <div className="romance">
        <Romance/>
      </div>

      <div className="superhero">
        <SuperHero/>
      </div>
      <footer>
        <div class="footer">
          <large>Copyright &copy; 2024 - NurCinema. All Right reserves.</large>
        </div>
      </footer>
    </div>
  );
}

export default App;
